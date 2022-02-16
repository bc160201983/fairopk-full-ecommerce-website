import WoocommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WoocommerceRestApi({
  url: "https://fairo.pk/",
  consumerKey: "ck_7081f6a825552a782ea113eb073ccd0e22757175",
  consumerSecret: "cs_b8ac3535d9ab0c115a21b4d81f14759c2c4b7e43",
  version: "wc/v3",
});
