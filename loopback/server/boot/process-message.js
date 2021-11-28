
const Dialogflow = require('dialogflow');
const Pusher = require('pusher');

// You can find your project ID in your Dialogflow agent settings
const projectId = 'newagent-c646b'; //https://dialogflow.com/docs/agents#settings
const sessionId = '123456';
const languageCode = 'en-US';

const config = {
  credentials: {
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDA6gHx1YDVfC8p\novSJ7DDBUljQHoHXH+W/akAP2o1M/c7NILAk0mwaYBq3yyjQJcZOGbkYG5SaJfQI\n28aPcdx1K4GtouwBeCUSCn3EVFSpzCOI0ahAXDkhdeQuNCyEoaNsaMO/regQqOzD\nIE7YW732Du3CMkAsxMSvVAl29I8QVfgiIVncK7HOFjpgixpDq8YrsTeMwquz+yH8\n4b43sp5xIQZpif837P3reZ4/ag7Sf5OUJOitJycOssKUuf7ffCANL/h/aEsb4kLA\n0V7oQsSdS2hwkkxjv0PiwuYc7TWa51fs/S9eAZLgC0lxjRj/NUFKKXXHbww2FNIp\niNk8/dT3AgMBAAECggEAJCkZATg4hIvZGVBizyGXR/2ECUrWorjna1hitrYMS3S9\n2WR5sAVDXzRJfc8WkOGryML4l4S/958Knch4cTXyEYJ8tcv2uhXHuRh/V5hJIGTT\n+lb2V04SJWwAQArml1vnErCWlKzn9Yt8idzZ+qNDucY1mfOqZNnjVkwF1CbmVDS9\nySprUym+SLKG4DvaHjh96H8aUZtCtciLHJsBDdS2p2jDFnHF8slZ43b5GyEUT63j\nMvRGYR6wpypwnBfUjdIs9oovYGMV27Waky9klGtU3LVjrbw1h/5x/SMzYYNZWpMc\nwfSKbkg/arVEfx7ZiHOGBKE7q/rfCTk69R4WcVpKBQKBgQDlsQMLU+tC+d8DL84E\nF3hjFSIQqNTJ55MD13GnvyqWEn51vDvX0pxrOzz0afU0sp6cf2DpluizkeLJyks3\n/Eyix6Ot62DGMWv/7LLfVVuTZIhG661JVfTLkB6lKWSxS519cRE++Wl9mrQnRG5q\n3q02m6FhJP103G7w29ZYOORAOwKBgQDXAp0n1P2qPjKeduD8P0GGGSyeBiqfNKZd\n6UsVlq4jOpsNeqMzgIuguj4hkE7SVe6DYoHN0IuqVD8vbj21MRacnAR5Hwnbxzk6\nMfLYT7Vuwl59cu73sTaC9aR2M5v2cARrpiVtMU4Oz8WTzgCQchhas4xwrVooOQoU\n+kbY2CfOdQKBgBkHCaLhWQAqQ9+QBO2zNP3u3pBcJRt+7Sj8/7hcfyJtD3R6tzaU\nD1Er2j9zkDFWySuaQZASTnbKjaCZN0r5ZcxS3oXj4N6XogH346GsJldQG/1GTtJv\n2EWaBYzPjtY2vAlgGZX4DUOPaNPig/mHG+6YVKRGKIvkPP5npdplEJHjAoGAQqva\n05kmN34l8CFozo9G4DA6N54t5URMOl63G7CnuuDXZ6yZosS/h015Kqs25d4jobYQ\nDiQWyvBoz2pd1CuumU1/zZckVXRHeJY4eX7uAbRf3IKhO0lGYAGPx99lA1vk4wSY\nIm3hiJJA7/43CpN2ndmDOQVoKYTWbX7WLTOJ1GkCgYAOfXZvTfHVUEtsII4pG8pN\nQ+6F5w61UU4Bt/rfSTkURg8Pe/M5V9kRyjndbMXahgnonGxglQGpTdEFdmnE5+MK\nCahnvcZzpfMApbub7eY1p1Hqx2Q8x0WH4w7khTu8q9QfY7I+kM5epFcDv9Gfg8dD\nPPp9WKbiK5Ra2eD1fUmjpA==\n-----END PRIVATE KEY-----\n"
,
    client_email: "dialogflow-kobosa@newagent-c646b.iam.gserviceaccount.com",
  },
};

const pusher = new Pusher({
  appId: "727001",
  key: "442745cd8259fa0a33de",
  secret: "6a6faee1061d07deee13",
  cluster: "ap2",
  encrypted: true,
});

const sessionClient = new Dialogflow.SessionsClient(config);

const sessionPath = sessionClient.sessionPath(projectId, sessionId);

const processMessage = message => {
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode,
      },
    },
  };

  sessionClient
    .detectIntent(request)
    .then(responses => {
      const result = responses[0].queryResult;
      const ob={}
      result.parameters.fields.user ? ob['user'] = result.parameters.fields.user.stringValue : ob['user']=""
      result.parameters.fields.pass ? ob['pass'] = result.parameters.fields.pass.stringValue : ob['pass'] = ""
      result.parameters.fields.realm ? ob['realm'] = result.parameters.fields.realm.stringValue : ob['realm'] = ""
      console.log(ob)
      return pusher.trigger('bot', 'bot-response', {
        message: result.fulfillmentText,
        obj:ob,
      });
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

module.exports = processMessage;
