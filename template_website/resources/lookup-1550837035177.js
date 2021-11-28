(function(window, undefined) {
  var dictionary = {
    "3cbe8efd-9f92-4002-a48f-0b5352214e9d": "add_silk",
    "0595d911-c6c1-41d5-8267-77f8762d5962": "add_product_wool",
    "bab4d010-e057-4c02-9d37-cb9c7c2ef48f": "signup-buyer",
    "ac756f7e-1bf8-49af-a28a-7d45b37389b4": "add_jute_others",
    "9b0aa178-80f1-4f2a-b415-c165e69c4a9a": "add_jute_raw",
    "9cc9115f-f958-48bb-94e8-d0a1ff21774b": "about",
    "1a018bc1-8964-41e5-b6f6-ee4114c108da": "reset password",
    "019a8220-1d26-4535-ab46-98969df50139": "add_product_cotton",
    "a26874c1-0771-4a53-9eaf-ceb87dfb0aff": "add_wool_raw",
    "c0774670-c0ad-434d-a410-84acfa3886d2": "add_product_jute",
    "c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6": "add_cotton_fabric",
    "6c5d0cbe-78d0-4c29-aca4-ce7dae33f596": "add_wool_other",
    "682428d2-1820-472d-ab3e-19f5b249b7a8": "Screen1_login_success_seller",
    "f15760c4-418d-4ee3-ad1e-3737c3928eab": "add_handicraft",
    "d80cff60-66ed-4dc2-938b-2bbc44dc1445": "login",
    "adcb76cf-c04a-4147-92b3-e96b5af053e0": "add_wool_yarn",
    "fc80d550-5800-43b4-b199-42674ce8369a": "signup-ask",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "288a76c5-0ad0-4f7e-ba3d-e928c9ad410e": "Screen 1_login_success_BUYER",
    "12d6b07f-622e-4401-89a9-341863c6f6c5": "search_products",
    "43f1efbf-1c78-4d56-b85c-6c6eaae1fb62": "add_jute_bag",
    "b5ad92bd-47f4-48ce-afcd-ed40216c1cd8": "add_product_ask",
    "7e670d13-3737-4613-9b7c-45ef1a8830f9": "add_cotton_other",
    "471c7265-c1e5-45ca-a78c-6de93be7cb1e": "add_nylon",
    "614079c9-4f93-46aa-bf52-e18b8799b955": "forgot password",
    "fb9abaf9-de81-46bf-92e3-2db0f5f9240a": "add_jute_rope",
    "ccd401e5-ca1a-44ad-bf5b-3097f8de2cb7": "product_info",
    "8be0f820-b70f-45cb-a464-3480c8850ca6": "signup-seller",
    "2a086ae6-4dfb-4704-acdb-2e23b3ce3510": "faqs",
    "0df2980c-b435-4fa9-8a4a-64aa144ece41": "add_jute_fabric",
    "21ea8160-65b6-4e47-ba7c-ca7b07e4b16a": "edit_info",
    "41660e93-6c96-4c3b-9af6-2b8fc533d3d5": "add_cotton_raw",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);