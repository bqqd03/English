if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal$1 = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$y = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal$1(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$c], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/Project/English/English_android/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const ON_SHOW = "onShow";
  const ON_LOAD = "onLoad";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  function obj2strClass(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  const _sfc_main$x = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm", "clear", "eyes", "change", "keyboardheightchange"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
        // 用于判断当前是否是使用回车操作
      };
    },
    computed: {
      // 输入框内是否有值
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
      inputMaxlength() {
        return Number(this.maxlength);
      },
      // 处理外层样式的style
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      // input 内容的类和样式处理
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      // input右侧样式
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        this.val = newVal;
      },
      modelValue(newVal) {
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      /**
       * 初始化变量值
       */
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0 || this.modelValue === "") {
          this.val = this.modelValue;
        } else {
          this.val = null;
        }
      },
      /**
       * 点击图标时触发
       * @param {Object} type
       */
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      /**
       * 显示隐藏内容，密码框时生效
       */
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      /**
       * 输入时触发
       * @param {Object} event
       */
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      /**
       * 外部调用方法
       * 获取焦点时触发
       * @param {Object} event
       */
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      /**
       * 外部调用方法
       * 失去焦点时触发
       * @param {Object} event
       */
      onBlur() {
        this.focused = false;
        this.$emit("focus", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      /**
       * 按下键盘的发送键
       * @param {Object} e
       */
      onConfirm(e) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      /**
       * 清理内容
       * @param {Object} event
       */
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      /**
       * 键盘高度发生变化的时候触发此事件
       * 兼容性：微信小程序2.7.0+、App 3.1.0+
       * @param {Object} event
       */
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      /**
       * 去除空格
       */
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
        style: vue.normalizeStyle($options.boxStyle)
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
            style: vue.normalizeStyle($options.inputContentStyle)
          },
          [
            $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              class: "content-clear-icon",
              type: $props.prefixIcon,
              color: "#c0c4cc",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
              size: "22"
            }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
            $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
              key: 1,
              class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
              name: $props.name,
              value: $data.val,
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              disabled: $props.disabled,
              "placeholder-class": "uni-easyinput__placeholder-class",
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              autoHeight: $props.autoHeight,
              "cursor-spacing": $props.cursorSpacing,
              onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
              onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
              onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight", "cursor-spacing"])) : (vue.openBlock(), vue.createElementBlock("input", {
              key: 2,
              type: $props.type === "password" ? "text" : $props.type,
              class: "uni-easyinput__content-input",
              style: vue.normalizeStyle($options.inputStyle),
              name: $props.name,
              value: $data.val,
              password: !$data.showPassword && $props.type === "password",
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              "placeholder-class": "uni-easyinput__placeholder-class",
              disabled: $props.disabled,
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              confirmType: $props.confirmType,
              "cursor-spacing": $props.cursorSpacing,
              onFocus: _cache[6] || (_cache[6] = (...args) => $options._Focus && $options._Focus(...args)),
              onBlur: _cache[7] || (_cache[7] = (...args) => $options._Blur && $options._Blur(...args)),
              onInput: _cache[8] || (_cache[8] = (...args) => $options.onInput && $options.onInput(...args)),
              onConfirm: _cache[9] || (_cache[9] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[10] || (_cache[10] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType", "cursor-spacing"])),
            $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 3 },
              [
                vue.createCommentVNode(" 开启密码时显示小眼睛 "),
                $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                  size: 22,
                  color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onEyes
                }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 4 },
              [
                $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: "content-clear-icon",
                  type: $props.suffixIcon,
                  color: "#c0c4cc",
                  onClick: _cache[11] || (_cache[11] = ($event) => $options.onClickIcon("suffix")),
                  size: "22"
                }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 5 },
              [
                $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: "clear",
                  size: $props.clearSize,
                  color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onClear
                }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$b], ["__scopeId", "data-v-09fd5285"], ["__file", "D:/Project/English/English_android/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _sfc_main$w = {
    name: "uniFormsItem",
    options: {
      virtualHost: true
    },
    provide() {
      return {
        uniFormItem: this
      };
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      }
    },
    props: {
      // 表单校验规则
      rules: {
        type: Array,
        default() {
          return null;
        }
      },
      // 表单域的属性名，在使用校验规则时必填
      name: {
        type: [String, Array],
        default: ""
      },
      required: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      },
      // label的宽度 ，默认 80
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: ""
      },
      // 强制显示错误信息
      errorMessage: {
        type: [String, Boolean],
        default: ""
      },
      // 1.4.0 弃用，统一使用 form 的校验时机
      // validateTrigger: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 弃用，统一使用 form 的label 位置
      // labelPosition: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 以下属性已经废弃，请使用  #label 插槽代替
      leftIcon: String,
      iconColor: {
        type: String,
        default: "#606266"
      }
    },
    data() {
      return {
        errMsg: "",
        userRules: null,
        localLabelAlign: "left",
        localLabelWidth: "65px",
        localLabelPos: "left",
        border: false,
        isFirstBorder: false
      };
    },
    computed: {
      // 处理错误信息
      msg() {
        return this.errorMessage || this.errMsg;
      }
    },
    watch: {
      // 规则发生变化通知子组件更新
      "form.formRules"(val) {
        this.init();
      },
      "form.labelWidth"(val) {
        this.localLabelWidth = this._labelWidthUnit(val);
      },
      "form.labelPosition"(val) {
        this.localLabelPos = this._labelPosition();
      },
      "form.labelAlign"(val) {
      }
    },
    created() {
      this.init(true);
      if (this.name && this.form) {
        this.$watch(
          () => {
            const val = this.form._getDataValue(this.name, this.form.localData);
            return val;
          },
          (value, oldVal) => {
            const isEqual2 = this.form._isEqual(value, oldVal);
            if (!isEqual2) {
              const val = this.itemSetValue(value);
              this.onFieldChange(val, false);
            }
          },
          {
            immediate: false
          }
        );
      }
    },
    unmounted() {
      this.__isUnmounted = true;
      this.unInit();
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules = null) {
        this.userRules = rules;
        this.init(false);
      },
      // 兼容老版本表单组件
      setValue() {
      },
      /**
       * 外部调用方法
       * 校验数据
       * @param {any} value 需要校验的数据
       * @param {boolean} 是否立即校验
       * @return {Array|null} 校验内容
       */
      async onFieldChange(value, formtrigger = true) {
        const {
          formData,
          localData,
          errShowType,
          validateCheck,
          validateTrigger,
          _isRequiredField,
          _realName
        } = this.form;
        const name = _realName(this.name);
        if (!value) {
          value = this.form.formData[name];
        }
        const ruleLen = this.itemRules.rules && this.itemRules.rules.length;
        if (!this.validator || !ruleLen || ruleLen === 0)
          return;
        const isRequiredField2 = _isRequiredField(this.itemRules.rules || []);
        let result = null;
        if (validateTrigger === "bind" || formtrigger) {
          result = await this.validator.validateUpdate(
            {
              [name]: value
            },
            formData
          );
          if (!isRequiredField2 && (value === void 0 || value === "")) {
            result = null;
          }
          if (result && result.errorMessage) {
            if (errShowType === "undertext") {
              this.errMsg = !result ? "" : result.errorMessage;
            }
            if (errShowType === "toast") {
              uni.showToast({
                title: result.errorMessage || "校验错误",
                icon: "none"
              });
            }
            if (errShowType === "modal") {
              uni.showModal({
                title: "提示",
                content: result.errorMessage || "校验错误"
              });
            }
          } else {
            this.errMsg = "";
          }
          validateCheck(result ? result : null);
        } else {
          this.errMsg = "";
        }
        return result ? result : null;
      },
      /**
       * 初始组件数据
       */
      init(type = false) {
        const {
          validator: validator2,
          formRules,
          childrens,
          formData,
          localData,
          _realName,
          labelWidth,
          _getDataValue,
          _setDataValue
        } = this.form || {};
        this.localLabelAlign = this._justifyContent();
        this.localLabelWidth = this._labelWidthUnit(labelWidth);
        this.localLabelPos = this._labelPosition();
        this.form && type && childrens.push(this);
        if (!validator2 || !formRules)
          return;
        if (!this.form.isFirstBorder) {
          this.form.isFirstBorder = true;
          this.isFirstBorder = true;
        }
        if (this.group) {
          if (!this.group.isFirstBorder) {
            this.group.isFirstBorder = true;
            this.isFirstBorder = true;
          }
        }
        this.border = this.form.border;
        const name = _realName(this.name);
        const itemRule = this.userRules || this.rules;
        if (typeof formRules === "object" && itemRule) {
          formRules[name] = {
            rules: itemRule
          };
          validator2.updateSchema(formRules);
        }
        const itemRules = formRules[name] || {};
        this.itemRules = itemRules;
        this.validator = validator2;
        this.itemSetValue(_getDataValue(this.name, localData));
      },
      unInit() {
        if (this.form) {
          const {
            childrens,
            formData,
            _realName
          } = this.form;
          childrens.forEach((item, index) => {
            if (item === this) {
              this.form.childrens.splice(index, 1);
              delete formData[_realName(item.name)];
            }
          });
        }
      },
      // 设置item 的值
      itemSetValue(value) {
        const name = this.form._realName(this.name);
        const rules = this.itemRules.rules || [];
        const val = this.form._getValue(name, value, rules);
        this.form._setDataValue(name, this.form.formData, val);
        return val;
      },
      /**
       * 移除该表单项的校验结果
       */
      clearValidate() {
        this.errMsg = "";
      },
      // 是否显示星号
      _isRequired() {
        return this.required;
      },
      // 处理对齐方式
      _justifyContent() {
        if (this.form) {
          const {
            labelAlign
          } = this.form;
          let labelAli = this.labelAlign ? this.labelAlign : labelAlign;
          if (labelAli === "left")
            return "flex-start";
          if (labelAli === "center")
            return "center";
          if (labelAli === "right")
            return "flex-end";
        }
        return "flex-start";
      },
      // 处理 label宽度单位 ,继承父元素的值
      _labelWidthUnit(labelWidth) {
        return this.num2px(this.labelWidth ? this.labelWidth : labelWidth || (this.label ? 65 : "auto"));
      },
      // 处理 label 位置
      _labelPosition() {
        if (this.form)
          return this.form.labelPosition || "left";
        return "left";
      },
      /**
       * 触发时机
       * @param {Object} rule 当前规则内时机
       * @param {Object} itemRlue 当前组件时机
       * @param {Object} parentRule 父组件时机
       */
      isTrigger(rule, itemRlue, parentRule) {
        if (rule === "submit" || !rule) {
          if (rule === void 0) {
            if (itemRlue !== "bind") {
              if (!itemRlue) {
                return parentRule === "" ? "bind" : "submit";
              }
              return "submit";
            }
            return "bind";
          }
          return "submit";
        }
        return "bind";
      },
      num2px(num) {
        if (typeof num === "number") {
          return `${num}px`;
        }
        return num;
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-forms-item", ["is-direction-" + $data.localLabelPos, $data.border ? "uni-forms-item--border" : "", $data.border && $data.isFirstBorder ? "is-first-border" : ""]])
      },
      [
        vue.renderSlot(_ctx.$slots, "label", {}, () => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__label", { "no-label": !$props.label && !$props.required }]),
              style: vue.normalizeStyle({ width: $data.localLabelWidth, justifyContent: $data.localLabelAlign })
            },
            [
              $props.required ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "is-required"
              }, "*")) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($props.label),
                1
                /* TEXT */
              )
            ],
            6
            /* CLASS, STYLE */
          )
        ], true),
        vue.createElementVNode("view", { class: "uni-forms-item__content" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__error", { "msg--active": $options.msg }])
            },
            [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($options.msg),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )
        ])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$a], ["__scopeId", "data-v-462874dd"], ["__file", "D:/Project/English/English_android/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
  var pattern = {
    email: /^\S+?@\S+?\.\S+?$/,
    idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    )
  };
  const FORMAT_MAPPING = {
    "int": "integer",
    "bool": "boolean",
    "double": "number",
    "long": "number",
    "password": "string"
    // "fileurls": 'array'
  };
  function formatMessage(args, resources = "") {
    var defaultMessage = ["label"];
    defaultMessage.forEach((item) => {
      if (args[item] === void 0) {
        args[item] = "";
      }
    });
    let str = resources;
    for (let key in args) {
      let reg = new RegExp("{" + key + "}");
      str = str.replace(reg, args[key]);
    }
    return str;
  }
  function isEmptyValue(value, type) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (typeof value === "string" && !value) {
      return true;
    }
    if (Array.isArray(value) && !value.length) {
      return true;
    }
    if (type === "object" && !Object.keys(value).length) {
      return true;
    }
    return false;
  }
  const types = {
    integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    string(value) {
      return typeof value === "string";
    },
    number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    "boolean": function(value) {
      return typeof value === "boolean";
    },
    "float": function(value) {
      return types.number(value) && !types.integer(value);
    },
    array(value) {
      return Array.isArray(value);
    },
    object(value) {
      return typeof value === "object" && !types.array(value);
    },
    date(value) {
      return value instanceof Date;
    },
    timestamp(value) {
      if (!this.integer(value) || Math.abs(value).toString().length > 16) {
        return false;
      }
      return true;
    },
    file(value) {
      return typeof value.url === "string";
    },
    email(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    pattern(reg, value) {
      try {
        return new RegExp(reg).test(value);
      } catch (e) {
        return false;
      }
    },
    method(value) {
      return typeof value === "function";
    },
    idcard(value) {
      return typeof value === "string" && !!value.match(pattern.idcard);
    },
    "url-https"(value) {
      return this.url(value) && value.startsWith("https://");
    },
    "url-scheme"(value) {
      return value.startsWith("://");
    },
    "url-web"(value) {
      return false;
    }
  };
  class RuleValidator {
    constructor(message) {
      this._message = message;
    }
    async validateRule(fieldKey, fieldValue, value, data, allData) {
      var result = null;
      let rules = fieldValue.rules;
      let hasRequired = rules.findIndex((item) => {
        return item.required;
      });
      if (hasRequired < 0) {
        if (value === null || value === void 0) {
          return result;
        }
        if (typeof value === "string" && !value.length) {
          return result;
        }
      }
      var message = this._message;
      if (rules === void 0) {
        return message["default"];
      }
      for (var i2 = 0; i2 < rules.length; i2++) {
        let rule = rules[i2];
        let vt2 = this._getValidateType(rule);
        Object.assign(rule, {
          label: fieldValue.label || `["${fieldKey}"]`
        });
        if (RuleValidatorHelper[vt2]) {
          result = RuleValidatorHelper[vt2](rule, value, message);
          if (result != null) {
            break;
          }
        }
        if (rule.validateExpr) {
          let now = Date.now();
          let resultExpr = rule.validateExpr(value, allData, now);
          if (resultExpr === false) {
            result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
            break;
          }
        }
        if (rule.validateFunction) {
          result = await this.validateFunction(rule, value, data, allData, vt2);
          if (result !== null) {
            break;
          }
        }
      }
      if (result !== null) {
        result = message.TAG + result;
      }
      return result;
    }
    async validateFunction(rule, value, data, allData, vt2) {
      let result = null;
      try {
        let callbackMessage = null;
        const res = await rule.validateFunction(rule, value, allData || data, (message) => {
          callbackMessage = message;
        });
        if (callbackMessage || typeof res === "string" && res || res === false) {
          result = this._getMessage(rule, callbackMessage || res, vt2);
        }
      } catch (e) {
        result = this._getMessage(rule, e.message, vt2);
      }
      return result;
    }
    _getMessage(rule, message, vt2) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt2] || message["default"]);
    }
    _getValidateType(rule) {
      var result = "";
      if (rule.required) {
        result = "required";
      } else if (rule.format) {
        result = "format";
      } else if (rule.arrayType) {
        result = "arrayTypeFormat";
      } else if (rule.range) {
        result = "range";
      } else if (rule.maximum !== void 0 || rule.minimum !== void 0) {
        result = "rangeNumber";
      } else if (rule.maxLength !== void 0 || rule.minLength !== void 0) {
        result = "rangeLength";
      } else if (rule.pattern) {
        result = "pattern";
      } else if (rule.validateFunction) {
        result = "validateFunction";
      }
      return result;
    }
  }
  const RuleValidatorHelper = {
    required(rule, value, message) {
      if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
        return formatMessage(rule, rule.errorMessage || message.required);
      }
      return null;
    },
    range(rule, value, message) {
      const {
        range,
        errorMessage
      } = rule;
      let list = new Array(range.length);
      for (let i2 = 0; i2 < range.length; i2++) {
        const item = range[i2];
        if (types.object(item) && item.value !== void 0) {
          list[i2] = item.value;
        } else {
          list[i2] = item;
        }
      }
      let result = false;
      if (Array.isArray(value)) {
        result = new Set(value.concat(list)).size === list.length;
      } else {
        if (list.indexOf(value) > -1) {
          result = true;
        }
      }
      if (!result) {
        return formatMessage(rule, errorMessage || message["enum"]);
      }
      return null;
    },
    rangeNumber(rule, value, message) {
      if (!types.number(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let {
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum
      } = rule;
      let min = exclusiveMinimum ? value <= minimum : value < minimum;
      let max = exclusiveMaximum ? value >= maximum : value > maximum;
      if (minimum !== void 0 && min) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMinimum ? "exclusiveMinimum" : "minimum"]);
      } else if (maximum !== void 0 && max) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMaximum ? "exclusiveMaximum" : "maximum"]);
      } else if (minimum !== void 0 && maximum !== void 0 && (min || max)) {
        return formatMessage(rule, rule.errorMessage || message["number"].range);
      }
      return null;
    },
    rangeLength(rule, value, message) {
      if (!types.string(value) && !types.array(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let min = rule.minLength;
      let max = rule.maxLength;
      let val = value.length;
      if (min !== void 0 && val < min) {
        return formatMessage(rule, rule.errorMessage || message["length"].minLength);
      } else if (max !== void 0 && val > max) {
        return formatMessage(rule, rule.errorMessage || message["length"].maxLength);
      } else if (min !== void 0 && max !== void 0 && (val < min || val > max)) {
        return formatMessage(rule, rule.errorMessage || message["length"].range);
      }
      return null;
    },
    pattern(rule, value, message) {
      if (!types["pattern"](rule.pattern, value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      return null;
    },
    format(rule, value, message) {
      var customTypes = Object.keys(types);
      var format2 = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
      if (customTypes.indexOf(format2) > -1) {
        if (!types[format2](value)) {
          return formatMessage(rule, rule.errorMessage || message.typeError);
        }
      }
      return null;
    },
    arrayTypeFormat(rule, value, message) {
      if (!Array.isArray(value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
      for (let i2 = 0; i2 < value.length; i2++) {
        const element = value[i2];
        let formatResult = this.format(rule, element, message);
        if (formatResult !== null) {
          return formatResult;
        }
      }
      return null;
    }
  };
  class SchemaValidator extends RuleValidator {
    constructor(schema, options) {
      super(SchemaValidator.message);
      this._schema = schema;
      this._options = options || null;
    }
    updateSchema(schema) {
      this._schema = schema;
    }
    async validate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async validateAll(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, true, allData);
      }
      return result;
    }
    async validateUpdate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidateUpdate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async invokeValidate(data, all, allData) {
      let result = [];
      let schema = this._schema;
      for (let key in schema) {
        let value = schema[key];
        let errorMessage = await this.validateRule(key, value, data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    async invokeValidateUpdate(data, all, allData) {
      let result = [];
      for (let key in data) {
        let errorMessage = await this.validateRule(key, this._schema[key], data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return "";
      }
      var noExistFields = keys.filter((key) => {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message["defaultInvalid"]);
      return [{
        key: "invalid",
        errorMessage
      }];
    }
  }
  function Message() {
    return {
      TAG: "",
      default: "验证错误",
      defaultInvalid: "提交的字段{field}在数据库中并不存在",
      validateFunction: "验证无效",
      required: "{label}必填",
      "enum": "{label}超出范围",
      timestamp: "{label}格式无效",
      whitespace: "{label}不能为空",
      typeError: "{label}类型无效",
      date: {
        format: "{label}日期{value}格式无效",
        parse: "{label}日期无法解析,{value}无效",
        invalid: "{label}日期{value}无效"
      },
      length: {
        minLength: "{label}长度不能少于{minLength}",
        maxLength: "{label}长度不能超过{maxLength}",
        range: "{label}必须介于{minLength}和{maxLength}之间"
      },
      number: {
        minimum: "{label}不能小于{minimum}",
        maximum: "{label}不能大于{maximum}",
        exclusiveMinimum: "{label}不能小于等于{minimum}",
        exclusiveMaximum: "{label}不能大于等于{maximum}",
        range: "{label}必须介于{minimum}and{maximum}之间"
      },
      pattern: {
        mismatch: "{label}格式不匹配"
      }
    };
  }
  SchemaValidator.message = new Message();
  const deepCopy = (val) => {
    return JSON.parse(JSON.stringify(val));
  };
  const typeFilter = (format2) => {
    return format2 === "int" || format2 === "double" || format2 === "number" || format2 === "timestamp";
  };
  const getValue = (key, value, rules) => {
    const isRuleNumType = rules.find((val) => val.format && typeFilter(val.format));
    const isRuleBoolType = rules.find((val) => val.format && val.format === "boolean" || val.format === "bool");
    if (!!isRuleNumType) {
      if (!value && value !== 0) {
        value = null;
      } else {
        value = isNumber$2(Number(value)) ? Number(value) : value;
      }
    }
    if (!!isRuleBoolType) {
      value = isBoolean$1(value) ? value : false;
    }
    return value;
  };
  const setDataValue = (field, formdata, value) => {
    formdata[field] = value;
    return value || "";
  };
  const getDataValue = (field, data) => {
    return objGet(data, field);
  };
  const realName = (name, data = {}) => {
    const base_name = _basePath(name);
    if (typeof base_name === "object" && Array.isArray(base_name) && base_name.length > 1) {
      const realname = base_name.reduce((a2, b2) => a2 += `#${b2}`, "_formdata_");
      return realname;
    }
    return base_name[0] || name;
  };
  const isRealName = (name) => {
    const reg = /^_formdata_#*/;
    return reg.test(name);
  };
  const rawData = (object = {}, name) => {
    let newData = JSON.parse(JSON.stringify(object));
    let formData = {};
    for (let i2 in newData) {
      let path = name2arr(i2);
      objSet(formData, path, newData[i2]);
    }
    return formData;
  };
  const name2arr = (name) => {
    let field = name.replace("_formdata_#", "");
    field = field.split("#").map((v2) => isNumber$2(v2) ? Number(v2) : v2);
    return field;
  };
  const objSet = (object, path, value) => {
    if (typeof object !== "object")
      return object;
    _basePath(path).reduce((o2, k2, i2, _2) => {
      if (i2 === _2.length - 1) {
        o2[k2] = value;
        return null;
      } else if (k2 in o2) {
        return o2[k2];
      } else {
        o2[k2] = /^[0-9]{1,}$/.test(_2[i2 + 1]) ? [] : {};
        return o2[k2];
      }
    }, object);
    return object;
  };
  function _basePath(path) {
    if (Array.isArray(path))
      return path;
    return path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  const objGet = (object, path, defaultVal = "undefined") => {
    let newPath = _basePath(path);
    let val = newPath.reduce((o2, k2) => {
      return (o2 || {})[k2];
    }, object);
    return !val || val !== void 0 ? val : defaultVal;
  };
  const isNumber$2 = (num) => {
    return !isNaN(Number(num));
  };
  const isBoolean$1 = (bool) => {
    return typeof bool === "boolean";
  };
  const isRequiredField = (rules) => {
    let isNoField = false;
    for (let i2 = 0; i2 < rules.length; i2++) {
      const ruleData = rules[i2];
      if (ruleData.required) {
        isNoField = true;
        break;
      }
    }
    return isNoField;
  };
  const isEqual = (a2, b2) => {
    if (a2 === b2) {
      return a2 !== 0 || 1 / a2 === 1 / b2;
    }
    if (a2 == null || b2 == null) {
      return a2 === b2;
    }
    var classNameA = toString.call(a2), classNameB = toString.call(b2);
    if (classNameA !== classNameB) {
      return false;
    }
    switch (classNameA) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a2 === "" + b2;
      case "[object Number]":
        if (+a2 !== +a2) {
          return +b2 !== +b2;
        }
        return +a2 === 0 ? 1 / +a2 === 1 / b2 : +a2 === +b2;
      case "[object Date]":
      case "[object Boolean]":
        return +a2 === +b2;
    }
    if (classNameA == "[object Object]") {
      var propsA = Object.getOwnPropertyNames(a2), propsB = Object.getOwnPropertyNames(b2);
      if (propsA.length != propsB.length) {
        return false;
      }
      for (var i2 = 0; i2 < propsA.length; i2++) {
        var propName = propsA[i2];
        if (a2[propName] !== b2[propName]) {
          return false;
        }
      }
      return true;
    }
    if (classNameA == "[object Array]") {
      if (a2.toString() == b2.toString()) {
        return true;
      }
      return false;
    }
  };
  const _sfc_main$v = {
    name: "uniForms",
    emits: ["validate", "submit"],
    options: {
      virtualHost: true
    },
    props: {
      // 即将弃用
      value: {
        type: Object,
        default() {
          return null;
        }
      },
      // vue3 替换 value 属性
      modelValue: {
        type: Object,
        default() {
          return null;
        }
      },
      // 1.4.0 开始将不支持 v-model ，且废弃 value 和 modelValue
      model: {
        type: Object,
        default() {
          return null;
        }
      },
      // 表单校验规则
      rules: {
        type: Object,
        default() {
          return {};
        }
      },
      //校验错误信息提示方式 默认 undertext 取值 [undertext|toast|modal]
      errShowType: {
        type: String,
        default: "undertext"
      },
      // 校验触发器方式 默认 bind 取值 [bind|submit]
      validateTrigger: {
        type: String,
        default: "submit"
      },
      // label 位置，默认 left 取值  top/left
      labelPosition: {
        type: String,
        default: "left"
      },
      // label 宽度
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: "left"
      },
      border: {
        type: Boolean,
        default: false
      }
    },
    provide() {
      return {
        uniForm: this
      };
    },
    data() {
      return {
        // 表单本地值的记录，不应该与传如的值进行关联
        formData: {},
        formRules: {}
      };
    },
    computed: {
      // 计算数据源变化的
      localData() {
        const localVal = this.model || this.modelValue || this.value;
        if (localVal) {
          return deepCopy(localVal);
        }
        return {};
      }
    },
    watch: {
      // 监听数据变化 ,暂时不使用，需要单独赋值
      // localData: {},
      // 监听规则变化
      rules: {
        handler: function(val, oldVal) {
          this.setRules(val);
        },
        deep: true,
        immediate: true
      }
    },
    created() {
      let getbinddata = getApp().$vm.$.appContext.config.globalProperties.binddata;
      if (!getbinddata) {
        getApp().$vm.$.appContext.config.globalProperties.binddata = function(name, value, formName) {
          if (formName) {
            this.$refs[formName].setValue(name, value);
          } else {
            let formVm;
            for (let i2 in this.$refs) {
              const vm = this.$refs[i2];
              if (vm && vm.$options && vm.$options.name === "uniForms") {
                formVm = vm;
                break;
              }
            }
            if (!formVm)
              return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:182", "当前 uni-froms 组件缺少 ref 属性");
            formVm.setValue(name, value);
          }
        };
      }
      this.childrens = [];
      this.inputChildrens = [];
      this.setRules(this.rules);
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules) {
        this.formRules = Object.assign({}, this.formRules, rules);
        this.validator = new SchemaValidator(rules);
      },
      /**
       * 外部调用方法
       * 设置数据，用于设置表单数据，公开给用户使用 ， 不支持在动态表单中使用
       * @param {Object} key
       * @param {Object} value
       */
      setValue(key, value) {
        let example = this.childrens.find((child) => child.name === key);
        if (!example)
          return null;
        this.formData[key] = getValue(key, value, this.formRules[key] && this.formRules[key].rules || []);
        return example.onFieldChange(this.formData[key]);
      },
      /**
       * 外部调用方法
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      validate(keepitem, callback) {
        return this.checkAll(this.formData, keepitem, callback);
      },
      /**
       * 外部调用方法
       * 部分表单校验
       * @param {Array|String} props 需要校验的字段
       * @param {Function} 回调函数
       */
      validateField(props = [], callback) {
        props = [].concat(props);
        let invalidFields = {};
        this.childrens.forEach((item) => {
          const name = realName(item.name);
          if (props.indexOf(name) !== -1) {
            invalidFields = Object.assign({}, invalidFields, {
              [name]: this.formData[name]
            });
          }
        });
        return this.checkAll(invalidFields, [], callback);
      },
      /**
       * 外部调用方法
       * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
       * @param {Array|String} props 需要移除校验的字段 ，不填为所有
       */
      clearValidate(props = []) {
        props = [].concat(props);
        this.childrens.forEach((item) => {
          if (props.length === 0) {
            item.errMsg = "";
          } else {
            const name = realName(item.name);
            if (props.indexOf(name) !== -1) {
              item.errMsg = "";
            }
          }
        });
      },
      /**
       * 外部调用方法 ，即将废弃
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      submit(keepitem, callback, type) {
        for (let i2 in this.dataValue) {
          const itemData = this.childrens.find((v2) => v2.name === i2);
          if (itemData) {
            if (this.formData[i2] === void 0) {
              this.formData[i2] = this._getValue(i2, this.dataValue[i2]);
            }
          }
        }
        if (!type) {
          formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:289", "submit 方法即将废弃，请使用validate方法代替！");
        }
        return this.checkAll(this.formData, keepitem, callback, "submit");
      },
      // 校验所有
      async checkAll(invalidFields, keepitem, callback, type) {
        if (!this.validator)
          return;
        let childrens = [];
        for (let i2 in invalidFields) {
          const item = this.childrens.find((v2) => realName(v2.name) === i2);
          if (item) {
            childrens.push(item);
          }
        }
        if (!callback && typeof keepitem === "function") {
          callback = keepitem;
        }
        let promise;
        if (!callback && typeof callback !== "function" && Promise) {
          promise = new Promise((resolve, reject) => {
            callback = function(valid, invalidFields2) {
              !valid ? resolve(invalidFields2) : reject(valid);
            };
          });
        }
        let results = [];
        let tempFormData = JSON.parse(JSON.stringify(invalidFields));
        for (let i2 in childrens) {
          const child = childrens[i2];
          let name = realName(child.name);
          const result = await child.onFieldChange(tempFormData[name]);
          if (result) {
            results.push(result);
            if (this.errShowType === "toast" || this.errShowType === "modal")
              break;
          }
        }
        if (Array.isArray(results)) {
          if (results.length === 0)
            results = null;
        }
        if (Array.isArray(keepitem)) {
          keepitem.forEach((v2) => {
            let vName = realName(v2);
            let value = getDataValue(v2, this.localData);
            if (value !== void 0) {
              tempFormData[vName] = value;
            }
          });
        }
        if (type === "submit") {
          this.$emit("submit", {
            detail: {
              value: tempFormData,
              errors: results
            }
          });
        } else {
          this.$emit("validate", results);
        }
        let resetFormData = {};
        resetFormData = rawData(tempFormData, this.name);
        callback && typeof callback === "function" && callback(results, resetFormData);
        if (promise && callback) {
          return promise;
        } else {
          return null;
        }
      },
      /**
       * 返回validate事件
       * @param {Object} result
       */
      validateCheck(result) {
        this.$emit("validate", result);
      },
      _getValue: getValue,
      _isRequiredField: isRequiredField,
      _setDataValue: setDataValue,
      _getDataValue: getDataValue,
      _realName: realName,
      _isRealName: isRealName,
      _isEqual: isEqual
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-forms" }, [
      vue.createElementVNode("form", null, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ]);
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$9], ["__scopeId", "data-v-9a1e3c32"], ["__file", "D:/Project/English/English_android/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
  function bind$2(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }
  const { toString: toString$2 } = Object.prototype;
  const { getPrototypeOf } = Object;
  const kindOf$1 = ((cache) => (thing) => {
    const str = toString$2.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  const kindOfTest$1 = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf$1(thing) === type;
  };
  const typeOfTest = (type) => (thing) => typeof thing === type;
  const { isArray: isArray$1 } = Array;
  const isUndefined$1 = typeOfTest("undefined");
  function isBuffer$1(val) {
    return val !== null && !isUndefined$1(val) && val.constructor !== null && !isUndefined$1(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  const isArrayBuffer$1 = kindOfTest$1("ArrayBuffer");
  function isArrayBufferView$1(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer$1(val.buffer);
    }
    return result;
  }
  const isString$1 = typeOfTest("string");
  const isFunction$1 = typeOfTest("function");
  const isNumber$1 = typeOfTest("number");
  const isObject$2 = (thing) => thing !== null && typeof thing === "object";
  const isBoolean = (thing) => thing === true || thing === false;
  const isPlainObject$1 = (val) => {
    if (kindOf$1(val) !== "object") {
      return false;
    }
    const prototype2 = getPrototypeOf(val);
    return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  const isDate$1 = kindOfTest$1("Date");
  const isFile$1 = kindOfTest$1("File");
  const isBlob$1 = kindOfTest$1("Blob");
  const isFileList$1 = kindOfTest$1("FileList");
  const isStream$1 = (val) => isObject$2(val) && isFunction$1(val.pipe);
  const isFormData$1 = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction$1(thing.append) && ((kind = kindOf$1(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]"));
  };
  const isURLSearchParams$1 = kindOfTest$1("URLSearchParams");
  const trim$1 = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach$1(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i2;
    let l2;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray$1(obj)) {
      for (i2 = 0, l2 = obj.length; i2 < l2; i2++) {
        fn.call(null, obj[i2], i2, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i2 = 0; i2 < len; i2++) {
        key = keys[i2];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i2 = keys.length;
    let _key;
    while (i2-- > 0) {
      _key = keys[i2];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  const _global = (() => {
    if (typeof globalThis !== "undefined")
      return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  const isContextDefined = (context) => !isUndefined$1(context) && context !== _global;
  function merge$1() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject$1(result[targetKey]) && isPlainObject$1(val)) {
        result[targetKey] = merge$1(result[targetKey], val);
      } else if (isPlainObject$1(val)) {
        result[targetKey] = merge$1({}, val);
      } else if (isArray$1(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
      arguments[i2] && forEach$1(arguments[i2], assignValue);
    }
    return result;
  }
  const extend$1 = (a2, b2, thisArg, { allOwnKeys } = {}) => {
    forEach$1(b2, (val, key) => {
      if (thisArg && isFunction$1(val)) {
        a2[key] = bind$2(val, thisArg);
      } else {
        a2[key] = val;
      }
    }, { allOwnKeys });
    return a2;
  };
  const stripBOM$1 = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  const inherits$1 = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  const toFlatObject$1 = (sourceObj, destObj, filter, propFilter) => {
    let props;
    let i2;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null)
      return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i2 = props.length;
      while (i2-- > 0) {
        prop = props[i2];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  const endsWith$1 = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  const toArray$1 = (thing) => {
    if (!thing)
      return null;
    if (isArray$1(thing))
      return thing;
    let i2 = thing.length;
    if (!isNumber$1(i2))
      return null;
    const arr = new Array(i2);
    while (i2-- > 0) {
      arr[i2] = thing[i2];
    }
    return arr;
  };
  const isTypedArray$1 = ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  const forEachEntry = (obj, fn) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  const matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  const isHTMLForm = kindOfTest$1("HTMLFormElement");
  const toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m2, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  const hasOwnProperty$1 = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  const isRegExp = kindOfTest$1("RegExp");
  const reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach$1(descriptors2, (descriptor, name) => {
      if (reducer(descriptor, name, obj) !== false) {
        reducedDescriptors[name] = descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  const freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction$1(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
        return false;
      }
      const value = obj[name];
      if (!isFunction$1(value))
        return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  const toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray$1(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  const noop = () => {
  };
  const toFiniteNumber = (value, defaultValue) => {
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
  };
  const ALPHA = "abcdefghijklmnopqrstuvwxyz";
  const DIGIT = "0123456789";
  const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
    let str = "";
    const { length } = alphabet;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction$1(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  const toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i2) => {
      if (isObject$2(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!("toJSON" in source)) {
          stack[i2] = source;
          const target = isArray$1(source) ? [] : {};
          forEach$1(source, (value, key) => {
            const reducedValue = visit(value, i2 + 1);
            !isUndefined$1(reducedValue) && (target[key] = reducedValue);
          });
          stack[i2] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  const isAsyncFn = kindOfTest$1("AsyncFunction");
  const isThenable = (thing) => thing && (isObject$2(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
  const utils$3 = {
    isArray: isArray$1,
    isArrayBuffer: isArrayBuffer$1,
    isBuffer: isBuffer$1,
    isFormData: isFormData$1,
    isArrayBufferView: isArrayBufferView$1,
    isString: isString$1,
    isNumber: isNumber$1,
    isBoolean,
    isObject: isObject$2,
    isPlainObject: isPlainObject$1,
    isUndefined: isUndefined$1,
    isDate: isDate$1,
    isFile: isFile$1,
    isBlob: isBlob$1,
    isRegExp,
    isFunction: isFunction$1,
    isStream: isStream$1,
    isURLSearchParams: isURLSearchParams$1,
    isTypedArray: isTypedArray$1,
    isFileList: isFileList$1,
    forEach: forEach$1,
    merge: merge$1,
    extend: extend$1,
    trim: trim$1,
    stripBOM: stripBOM$1,
    inherits: inherits$1,
    toFlatObject: toFlatObject$1,
    kindOf: kindOf$1,
    kindOfTest: kindOfTest$1,
    endsWith: endsWith$1,
    toArray: toArray$1,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty: hasOwnProperty$1,
    hasOwnProp: hasOwnProperty$1,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
  };
  function AxiosError$2(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils$3.inherits(AxiosError$2, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils$3.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  const prototype$2 = AxiosError$2.prototype;
  const descriptors$1 = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code) => {
    descriptors$1[code] = { value: code };
  });
  Object.defineProperties(AxiosError$2, descriptors$1);
  Object.defineProperty(prototype$2, "isAxiosError", { value: true });
  AxiosError$2.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype$2);
    utils$3.toFlatObject(error, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError$2.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  const httpAdapter = null;
  function isVisitable(thing) {
    return utils$3.isPlainObject(thing) || utils$3.isArray(thing);
  }
  function removeBrackets(key) {
    return utils$3.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path)
      return key;
    return path.concat(key).map(function each(token, i2) {
      token = removeBrackets(token);
      return !dots && i2 ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils$3.isArray(arr) && !arr.some(isVisitable);
  }
  const predicates = utils$3.toFlatObject(utils$3, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils$3.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new FormData();
    options = utils$3.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils$3.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils$3.isSpecCompliantForm(formData);
    if (!utils$3.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null)
        return "";
      if (utils$3.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils$3.isBlob(value)) {
        throw new AxiosError$2("Blob is not supported. Use a Buffer instead.");
      }
      if (utils$3.isArrayBuffer(value) || utils$3.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils$3.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils$3.isArray(value) && isFlatArray(value) || (utils$3.isFileList(value) || utils$3.endsWith(key, "[]")) && (arr = utils$3.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils$3.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils$3.isUndefined(value))
        return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils$3.forEach(value, function each(el, key) {
        const result = !(utils$3.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils$3.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils$3.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  function encode$2(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData(params, this, options);
  }
  const prototype$1 = AxiosURLSearchParams.prototype;
  prototype$1.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype$1.toString = function toString2(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode$2);
    } : encode$2;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  function encode$1(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL$2(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode$1;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils$3.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }
  class InterceptorManager {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils$3.forEach(this.handlers, function forEachHandler(h2) {
        if (h2 !== null) {
          fn(h2);
        }
      });
    }
  }
  const InterceptorManager$1 = InterceptorManager;
  const transitionalDefaults = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };
  const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
  const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
  const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
  const isStandardBrowserEnv$1 = (() => {
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  })();
  const isStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  const platform = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams$1,
      FormData: FormData$1,
      Blob: Blob$1
    },
    isStandardBrowserEnv: isStandardBrowserEnv$1,
    isStandardBrowserWebWorkerEnv,
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  function toURLEncodedForm(data, options) {
    return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (platform.isNode && utils$3.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }
  function parsePropPath(name) {
    return utils$3.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i2;
    const len = keys.length;
    let key;
    for (i2 = 0; i2 < len; i2++) {
      key = keys[i2];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils$3.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils$3.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils$3.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils$3.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils$3.isFormData(formData) && utils$3.isFunction(formData.entries)) {
      const obj = {};
      utils$3.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  const DEFAULT_CONTENT_TYPE = {
    "Content-Type": void 0
  };
  function stringifySafely(rawValue, parser, encoder) {
    if (utils$3.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils$3.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  const defaults = {
    transitional: transitionalDefaults,
    adapter: ["xhr", "http"],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils$3.isObject(data);
      if (isObjectPayload && utils$3.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils$3.isFormData(data);
      if (isFormData2) {
        if (!hasJSONContentType) {
          return data;
        }
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }
      if (utils$3.isArrayBuffer(data) || utils$3.isBuffer(data) || utils$3.isStream(data) || utils$3.isFile(data) || utils$3.isBlob(data)) {
        return data;
      }
      if (utils$3.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$3.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils$3.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (data && utils$3.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional && transitional.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError$2.from(e, AxiosError$2.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform.classes.FormData,
      Blob: platform.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    }
  };
  utils$3.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  utils$3.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    defaults.headers[method] = utils$3.merge(DEFAULT_CONTENT_TYPE);
  });
  const defaults$1 = defaults;
  const ignoreDuplicateOf = utils$3.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  const parseHeaders = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i2;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i2 = line.indexOf(":");
      key = line.substring(0, i2).trim().toLowerCase();
      val = line.substring(i2 + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };
  const $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils$3.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (utils$3.isFunction(filter)) {
      return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils$3.isString(value))
      return;
    if (utils$3.isString(filter)) {
      return value.indexOf(filter) !== -1;
    }
    if (utils$3.isRegExp(filter)) {
      return filter.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w2, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils$3.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  class AxiosHeaders {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils$3.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils$3.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils$3.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils$3.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders(header), valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils$3.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils$3.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils$3.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils$3.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils$3.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils$3.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i2 = keys.length;
      let deleted = false;
      while (i2--) {
        const key = keys[i2];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format2) {
      const self2 = this;
      const headers = {};
      utils$3.forEach(this, (value, header) => {
        const key = utils$3.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format2 ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils$3.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils$3.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype2 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype2, _header);
          accessors[lHeader] = true;
        }
      }
      utils$3.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  }
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils$3.freezeMethods(AxiosHeaders.prototype);
  utils$3.freezeMethods(AxiosHeaders);
  const AxiosHeaders$1 = AxiosHeaders;
  function transformData(fns, response) {
    const config = this || defaults$1;
    const context = response || config;
    const headers = AxiosHeaders$1.from(context.headers);
    let data = context.data;
    utils$3.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }
  function CanceledError(message, config, request) {
    AxiosError$2.call(this, message == null ? "canceled" : message, AxiosError$2.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils$3.inherits(CanceledError, AxiosError$2, {
    __CANCEL__: true
  });
  function settle$2(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError$2(
        "Request failed with status code " + response.status,
        [AxiosError$2.ERR_BAD_REQUEST, AxiosError$2.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }
  const cookies = platform.isStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          const cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils$3.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils$3.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils$3.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }()
  );
  function isAbsoluteURL$2(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }
  function combineURLs$2(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }
  function buildFullPath$2(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL$2(requestedURL)) {
      return combineURLs$2(baseURL, requestedURL);
    }
    return requestedURL;
  }
  const isURLSameOrigin = platform.isStandardBrowserEnv ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function standardBrowserEnv() {
      const msie = /(msie|trident)/i.test(navigator.userAgent);
      const urlParsingNode = document.createElement("a");
      let originURL;
      function resolveURL(url) {
        let href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin2(requestURL) {
        const parsed = utils$3.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv() {
      return function isURLSameOrigin2() {
        return true;
      };
    }()
  );
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i2 = tail;
      let bytesCount = 0;
      while (i2 !== head) {
        bytesCount += bytes[i2++];
        i2 = i2 % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = speedometer(50, 250);
    return (e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e
      };
      data[isDownloadStream ? "download" : "upload"] = true;
      listener(data);
    };
  }
  const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  const xhrAdapter = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      let requestData = config.data;
      const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
      const responseType = config.responseType;
      let onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener("abort", onCanceled);
        }
      }
      if (utils$3.isFormData(requestData)) {
        if (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv) {
          requestHeaders.setContentType(false);
        } else {
          requestHeaders.setContentType("multipart/form-data;", false);
        }
      }
      let request = new XMLHttpRequest();
      if (config.auth) {
        const username = config.auth.username || "";
        const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
      }
      const fullPath = buildFullPath$2(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL$2(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders$1.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle$2(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError$2("Request aborted", AxiosError$2.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError$2("Network Error", AxiosError$2.ERR_NETWORK, config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional = config.transitional || transitionalDefaults;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError$2(
          timeoutErrorMessage,
          transitional.clarifyTimeoutError ? AxiosError$2.ETIMEDOUT : AxiosError$2.ECONNABORTED,
          config,
          request
        ));
        request = null;
      };
      if (platform.isStandardBrowserEnv) {
        const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils$3.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils$3.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = config.responseType;
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
      }
      if (config.cancelToken || config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(fullPath);
      if (protocol && platform.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError$2("Unsupported protocol " + protocol + ":", AxiosError$2.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  };
  const knownAdapters = {
    http: httpAdapter,
    xhr: xhrAdapter
  };
  utils$3.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, "name", { value });
      } catch (e) {
      }
      Object.defineProperty(fn, "adapterName", { value });
    }
  });
  const adapters = {
    getAdapter: (adapters2) => {
      adapters2 = utils$3.isArray(adapters2) ? adapters2 : [adapters2];
      const { length } = adapters2;
      let nameOrAdapter;
      let adapter;
      for (let i2 = 0; i2 < length; i2++) {
        nameOrAdapter = adapters2[i2];
        if (adapter = utils$3.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
          break;
        }
      }
      if (!adapter) {
        if (adapter === false) {
          throw new AxiosError$2(
            `Adapter ${nameOrAdapter} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          );
        }
        throw new Error(
          utils$3.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
        );
      }
      if (!utils$3.isFunction(adapter)) {
        throw new TypeError("adapter is not a function");
      }
      return adapter;
    },
    adapters: knownAdapters
  };
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders$1.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders$1.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }
  const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
      if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source)) {
        return utils$3.merge.call({ caseless }, target, source);
      } else if (utils$3.isPlainObject(source)) {
        return utils$3.merge({}, source);
      } else if (utils$3.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a2, b2, caseless) {
      if (!utils$3.isUndefined(b2)) {
        return getMergedValue(a2, b2, caseless);
      } else if (!utils$3.isUndefined(a2)) {
        return getMergedValue(void 0, a2, caseless);
      }
    }
    function valueFromConfig2(a2, b2) {
      if (!utils$3.isUndefined(b2)) {
        return getMergedValue(void 0, b2);
      }
    }
    function defaultToConfig2(a2, b2) {
      if (!utils$3.isUndefined(b2)) {
        return getMergedValue(void 0, b2);
      } else if (!utils$3.isUndefined(a2)) {
        return getMergedValue(void 0, a2);
      }
    }
    function mergeDirectKeys(a2, b2, prop) {
      if (prop in config2) {
        return getMergedValue(a2, b2);
      } else if (prop in config1) {
        return getMergedValue(void 0, a2);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a2, b2) => mergeDeepProperties(headersToObject(a2), headersToObject(b2), true)
    };
    utils$3.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils$3.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }
  const VERSION = "1.4.0";
  const validators$1 = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i2) => {
    validators$1[type] = function validator2(thing) {
      return typeof thing === type || "a" + (i2 < 1 ? "n " : " ") + type;
    };
  });
  const deprecatedWarnings = {};
  validators$1.transitional = function transitional(validator2, version, message) {
    function formatMessage2(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator2 === false) {
        throw new AxiosError$2(
          formatMessage2(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError$2.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        formatAppLog(
          "warn",
          "at node_modules/axios/lib/helpers/validator.js:43",
          formatMessage2(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator2 ? validator2(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError$2("options must be an object", AxiosError$2.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i2 = keys.length;
    while (i2-- > 0) {
      const opt = keys[i2];
      const validator2 = schema[opt];
      if (validator2) {
        const value = options[opt];
        const result = value === void 0 || validator2(value, opt, options);
        if (result !== true) {
          throw new AxiosError$2("option " + opt + " must be " + result, AxiosError$2.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError$2("Unknown option " + opt, AxiosError$2.ERR_BAD_OPTION);
      }
    }
  }
  const validator = {
    assertOptions,
    validators: validators$1
  };
  const validators = validator.validators;
  class Axios {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager$1(),
        response: new InterceptorManager$1()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const { transitional, paramsSerializer, headers } = config;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils$3.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator.assertOptions(paramsSerializer, {
            encode: validators.function,
            serialize: validators.function
          }, true);
        }
      }
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders;
      contextHeaders = headers && utils$3.merge(
        headers.common,
        headers[config.method]
      );
      contextHeaders && utils$3.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method) => {
          delete headers[method];
        }
      );
      config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i2 = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i2 < len) {
          promise = promise.then(chain[i2++], chain[i2++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i2 = 0;
      while (i2 < len) {
        const onFulfilled = requestInterceptorChain[i2++];
        const onRejected = requestInterceptorChain[i2++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i2 = 0;
      len = responseInterceptorChain.length;
      while (i2 < len) {
        promise = promise.then(responseInterceptorChain[i2++], responseInterceptorChain[i2++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath$2(config.baseURL, config.url);
      return buildURL$2(fullPath, config.params, config.paramsSerializer);
    }
  }
  utils$3.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils$3.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  const Axios$1 = Axios;
  class CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners)
          return;
        let i2 = token._listeners.length;
        while (i2-- > 0) {
          token._listeners[i2](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError(message, config, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new CancelToken(function executor(c2) {
        cancel = c2;
      });
      return {
        token,
        cancel
      };
    }
  }
  const CancelToken$1 = CancelToken;
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }
  function isAxiosError(payload) {
    return utils$3.isObject(payload) && payload.isAxiosError === true;
  }
  const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    HttpStatusCode[value] = key;
  });
  const HttpStatusCode$1 = HttpStatusCode;
  function createInstance(defaultConfig) {
    const context = new Axios$1(defaultConfig);
    const instance = bind$2(Axios$1.prototype.request, context);
    utils$3.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
    utils$3.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  const axios = createInstance(defaults$1);
  axios.Axios = Axios$1;
  axios.CanceledError = CanceledError;
  axios.CancelToken = CancelToken$1;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData;
  axios.AxiosError = AxiosError$2;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders$1;
  axios.formToJSON = (thing) => formDataToJSON(utils$3.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.HttpStatusCode = HttpStatusCode$1;
  axios.default = axios;
  const axios$1 = axios;
  var axiosAdapterUniappExports = {};
  var axiosAdapterUniapp = {
    get exports() {
      return axiosAdapterUniappExports;
    },
    set exports(v2) {
      axiosAdapterUniappExports = v2;
    }
  };
  var isMultiUpload$1 = function isMultiUpload2(config) {
    return Array.isArray(config.files) && config.files.length > 0;
  };
  const isMultiUpload = isMultiUpload$1;
  var isUploadFile$2 = function isUploadFile2(config) {
    if (config.method === "post") {
      if (config.filePath && config.name)
        return true;
      if (isMultiUpload(config))
        return true;
    }
    return false;
  };
  var bind$1 = function bind2(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i2 = 0; i2 < args.length; i2++) {
        args[i2] = arguments[i2];
      }
      return fn.apply(thisArg, args);
    };
  };
  var bind = bind$1;
  var toString$1 = Object.prototype.toString;
  var kindOf = function(cache) {
    return function(thing) {
      var str = toString$1.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    };
  }(/* @__PURE__ */ Object.create(null));
  function kindOfTest(type) {
    type = type.toLowerCase();
    return function isKindOf(thing) {
      return kindOf(thing) === type;
    };
  }
  function isArray(val) {
    return Array.isArray(val);
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  function isString(val) {
    return typeof val === "string";
  }
  function isNumber(val) {
    return typeof val === "number";
  }
  function isObject$1(val) {
    return val !== null && typeof val === "object";
  }
  function isPlainObject(val) {
    if (kindOf(val) !== "object") {
      return false;
    }
    var prototype2 = Object.getPrototypeOf(val);
    return prototype2 === null || prototype2 === Object.prototype;
  }
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  function isFunction(val) {
    return toString$1.call(val) === "[object Function]";
  }
  function isStream(val) {
    return isObject$1(val) && isFunction(val.pipe);
  }
  function isFormData(thing) {
    var pattern2 = "[object FormData]";
    return thing && (typeof FormData === "function" && thing instanceof FormData || toString$1.call(thing) === pattern2 || isFunction(thing.toString) && thing.toString() === pattern2);
  }
  var isURLSearchParams = kindOfTest("URLSearchParams");
  function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
  }
  function isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (var i2 = 0, l2 = obj.length; i2 < l2; i2++) {
        fn.call(null, obj[i2], i2, obj);
      }
    } else {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function merge() {
    var result = {};
    function assignValue(val, key) {
      if (isPlainObject(result[key]) && isPlainObject(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject(val)) {
        result[key] = merge({}, val);
      } else if (isArray(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }
    for (var i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
      forEach(arguments[i2], assignValue);
    }
    return result;
  }
  function extend(a2, b2, thisArg) {
    forEach(b2, function assignValue(val, key) {
      if (thisArg && typeof val === "function") {
        a2[key] = bind(val, thisArg);
      } else {
        a2[key] = val;
      }
    });
    return a2;
  }
  function stripBOM(content) {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  }
  function inherits(constructor, superConstructor, props, descriptors2) {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    props && Object.assign(constructor.prototype, props);
  }
  function toFlatObject(sourceObj, destObj, filter) {
    var props;
    var i2;
    var prop;
    var merged = {};
    destObj = destObj || {};
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i2 = props.length;
      while (i2-- > 0) {
        prop = props[i2];
        if (!merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = Object.getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  }
  function endsWith(str, searchString, position) {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    var lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  }
  function toArray(thing) {
    if (!thing)
      return null;
    var i2 = thing.length;
    if (isUndefined(i2))
      return null;
    var arr = new Array(i2);
    while (i2-- > 0) {
      arr[i2] = thing[i2];
    }
    return arr;
  }
  var isTypedArray = function(TypedArray) {
    return function(thing) {
      return TypedArray && thing instanceof TypedArray;
    };
  }(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
  var utils$2 = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isObject: isObject$1,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isFunction,
    isStream,
    isURLSearchParams,
    isStandardBrowserEnv,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    isTypedArray,
    isFileList
  };
  var utils$1 = utils$2;
  function AxiosError$1(message, code, config, request, response) {
    Error.call(this);
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils$1.inherits(AxiosError$1, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype = AxiosError$1.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED"
    // eslint-disable-next-line func-names
  ].forEach(function(code) {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError$1, descriptors);
  Object.defineProperty(prototype, "isAxiosError", { value: true });
  AxiosError$1.from = function(error, code, config, request, response, customProps) {
    var axiosError = Object.create(prototype);
    utils$1.toFlatObject(error, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    });
    AxiosError$1.call(axiosError, error.message, code, config, request, response);
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var AxiosError_1 = AxiosError$1;
  var AxiosError = AxiosError_1;
  var settle$1 = function settle2(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError(
        "Request failed with status code " + response.status,
        [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  };
  var utils = utils$2;
  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  var buildURL$1 = function buildURL2(url, params, paramsSerializer) {
    if (!params) {
      return url;
    }
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (utils.isArray(val)) {
          key = key + "[]";
        } else {
          val = [val];
        }
        utils.forEach(val, function parseValue(v2) {
          if (utils.isDate(v2)) {
            v2 = v2.toISOString();
          } else if (utils.isObject(v2)) {
            v2 = JSON.stringify(v2);
          }
          parts.push(encode(key) + "=" + encode(v2));
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      var hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  };
  var isAbsoluteURL$1 = function isAbsoluteURL2(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  };
  var combineURLs$1 = function combineURLs2(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  };
  var isAbsoluteURL = isAbsoluteURL$1;
  var combineURLs = combineURLs$1;
  var buildFullPath$1 = function buildFullPath2(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  };
  var settle = settle$1;
  var buildURL = buildURL$1;
  var buildFullPath = buildFullPath$1;
  const isUploadFile$1 = isUploadFile$2;
  var format$1 = function format2(config, resolve, reject) {
    const fullPath = buildFullPath(config.baseURL, config.url);
    const requestHeaders = config.headers;
    const uniConfig = {
      ...config,
      url: buildURL(fullPath, config.params, config.paramsSerializer),
      // uniapp 用的是 header
      header: requestHeaders
    };
    if (isUploadFile$1(config)) {
      delete requestHeaders["Content-Type"];
      if (config.formData) {
        uniConfig.formData = config.formData;
      } else {
        if (typeof config.data === "string") {
          uniConfig.formData = JSON.parse(config.data);
        } else {
          uniConfig.formData = config.data;
        }
      }
    } else if (config.method === "get") {
      uniConfig.data = config.data ? config.data : config.params;
    } else {
      uniConfig.data = config.data;
    }
    if (config.auth) {
      var username = config.auth.username || "";
      var password = unescape(encodeURIComponent(config.auth.password)) || "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    uniConfig.complete = function(response) {
      var result = {
        data: response.data,
        status: response.statusCode,
        statusText: response.errMsg,
        header: response.header,
        config
        // request: request
      };
      settle(resolve, reject, result);
    };
    return uniConfig;
  };
  const isUploadFile = isUploadFile$2;
  const format = format$1;
  function uniappAdapter(config = {}) {
    return new Promise(function dispatchUniApp(resolve, reject) {
      const uniConfig = format(config, resolve, reject);
      let requestTask = null;
      if (config.cancelToken) {
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!requestTask) {
            return;
          }
          requestTask.abort();
          reject(cancel);
          requestTask = null;
        });
      }
      if (isUploadFile(config)) {
        requestTask = uni.uploadFile(uniConfig);
      } else {
        requestTask = uni.request(uniConfig);
      }
    });
  }
  axiosAdapterUniapp.exports = uniappAdapter;
  axiosAdapterUniappExports.default = uniappAdapter;
  const fronturl = "http://192.168.8.6:8080";
  const backurl = "http://192.168.8.6:5000";
  const common = {
    fronturl,
    backurl
  };
  const https = axios$1.create({
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
    // baseURL: 'http://10.10.4.222:5000',
    baseURL: common.backurl,
    adapter: axiosAdapterUniappExports,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    withCredentials: false,
    // 跨域请求时是否需要使用凭证
    timeout: 5e3,
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [(data) => {
      if (typeof data === "string" && data.startsWith("{")) {
        data = JSON.parse(data);
      }
      if (typeof data === "string") {
        data = JSON.parse(data);
      }
      return data;
    }]
  });
  const _sfc_main$u = {
    __name: "login",
    setup(__props) {
      const loginData = vue.reactive({
        username: "",
        password: ""
      });
      onShow(() => {
        const token = uni.getStorageSync("token");
        if (token != "") {
          uni.switchTab({
            url: "/pages/home",
            success: function() {
              if (JSON.parse(uni.getStorageSync("token")).role == "teacher") {
                uni.setTabBarItem({
                  index: 2,
                  //tabBar 的哪一项，从左边算起
                  text: "班级管理",
                  //	tab 上的按钮文字
                  iconPath: "static/icons/control.png",
                  selectedIconPath: "static/icons/control-selected.png"
                });
              } else if (JSON.parse(uni.getStorageSync("token")).role == "student") {
                uni.setTabBarItem({
                  index: 2,
                  //tabBar 的哪一项，从左边算起
                  text: "我的班级",
                  //	tab 上的按钮文字
                  iconPath: "static/icons/class.png",
                  selectedIconPath: "static/icons/class-selected.png"
                });
              }
            }
          });
        }
      });
      function register() {
        uni.navigateTo({
          url: "/pages/register"
        });
      }
      function submit() {
        https.post("/auth/login", loginData).then((res) => {
          if (res.data.code == 200) {
            uni.showToast({
              title: "登录成功",
              icon: "success",
              duration: 3e3
            });
            uni.setStorageSync("token", JSON.stringify(res.data.user));
            uni.setStorageSync("password", loginData.password);
            uni.switchTab({
              url: "/pages/home",
              success: function() {
                if (res.data.user.role == "teacher") {
                  uni.setTabBarItem({
                    index: 2,
                    //tabBar 的哪一项，从左边算起
                    text: "班级管理",
                    //	tab 上的按钮文字
                    iconPath: "static/icons/control.png",
                    selectedIconPath: "static/icons/control-selected.png"
                  });
                } else if (res.data.user.role == "student") {
                  uni.setTabBarItem({
                    index: 2,
                    //tabBar 的哪一项，从左边算起
                    text: "我的班级",
                    //	tab 上的按钮文字
                    iconPath: "static/icons/class.png",
                    selectedIconPath: "static/icons/class-selected.png"
                  });
                }
              }
            });
          } else {
            uni.showToast({
              title: res.data.message,
              icon: "error",
              duration: 3e3
            });
          }
        }).catch(() => {
          uni.showToast({
            title: "未连接到服务器",
            icon: "error",
            duration: 3e3
          });
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$2);
        const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1);
        const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_4);
        return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, [
          vue.createVNode(_component_uni_forms, {
            model: loginData,
            labelWidth: "80px"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_forms_item, { label: "用户名" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_easyinput, {
                    modelValue: loginData.username,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => loginData.username = $event),
                    placeholder: "请输入用户名"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_forms_item, { label: "密码" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_easyinput, {
                    type: "password",
                    modelValue: loginData.password,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => loginData.password = $event),
                    placeholder: "请输入密码"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["model"]),
          vue.createElementVNode("view", { class: "btn-box" }, [
            vue.createElementVNode("button", {
              type: "primary",
              onClick: _cache[2] || (_cache[2] = ($event) => submit())
            }, "提交"),
            vue.createElementVNode("button", {
              onClick: _cache[3] || (_cache[3] = ($event) => register())
            }, "注册")
          ])
        ]);
      };
    }
  };
  const PagesLogin = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__file", "D:/Project/English/English_android/pages/login.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format2, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format2.length) {
      let char = format2[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format2[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format2[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages && messages[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages && Object.keys(messages).length > 0) {
      locales = Object.keys(messages);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages] = [
        messages,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const pages = [
    {
      path: "pages/login",
      style: {
        navigationBarTitleText: "登录"
      }
    },
    {
      path: "pages/register",
      style: {
        navigationBarTitleText: "注册"
      }
    },
    {
      path: "pages/home",
      style: {
        navigationBarTitleText: "首页"
      }
    },
    {
      path: "pages/exercise/index",
      style: {
        navigationStyle: "custom",
        "app-plus": {
          titleNView: {
            autoBackButton: false
          }
        }
      }
    },
    {
      path: "pages/exercise/save_audio",
      style: {
        navigationBarTitleText: "音频缓存"
      }
    },
    {
      path: "pages/exercise/ninegrid",
      style: {
        navigationStyle: "custom",
        "app-plus": {
          titleNView: {
            autoBackButton: false
          }
        }
      }
    },
    {
      path: "pages/exercise/blank",
      style: {
        navigationStyle: "custom",
        "app-plus": {
          titleNView: {
            autoBackButton: false
          }
        }
      }
    },
    {
      path: "pages/class_control/index",
      style: {
        navigationBarTitleText: "班级管理"
      }
    },
    {
      path: "pages/class_control/class_details",
      style: {
        navigationBarTitleText: "班级信息"
      }
    },
    {
      path: "pages/class_control/addHomework",
      style: {
        navigationBarTitleText: "添加作业"
      }
    },
    {
      path: "pages/class_control/class_homework",
      style: {
        navigationBarTitleText: "班级作业"
      }
    },
    {
      path: "pages/class_control/homework_detail",
      style: {
        navigationBarTitleText: "作业详情"
      }
    },
    {
      path: "pages/homework/student_homework",
      style: {
        navigationBarTitleText: "我的作业"
      }
    },
    {
      path: "pages/homework/ninegrid",
      style: {
        navigationStyle: "custom",
        "app-plus": {
          titleNView: {
            autoBackButton: false
          }
        }
      }
    },
    {
      path: "pages/homework/blank",
      style: {
        navigationStyle: "custom",
        "app-plus": {
          titleNView: {
            autoBackButton: false
          }
        }
      }
    },
    {
      path: "pages/homework/detail",
      style: {
        navigationBarTitleText: "作业详情"
      }
    },
    {
      path: "pages/user_control/index",
      style: {
        navigationBarTitleText: "我的"
      }
    },
    {
      path: "pages/user_control/user_info",
      style: {
        navigationBarTitleText: "个人信息"
      }
    },
    {
      path: "pages/user_control/change_password",
      style: {
        navigationBarTitleText: "修改密码"
      }
    },
    {
      path: "pages/user_control/my_score/index",
      style: {
        navigationBarTitleText: "我的成绩"
      }
    },
    {
      path: "pages/user_control/my_score/detail",
      style: {
        navigationBarTitleText: "答题详情"
      }
    },
    {
      path: "pages/user_control/change_info",
      style: {
        navigationStyle: "custom",
        "app-plus": {
          titleNView: {
            autoBackButton: false
          }
        }
      }
    }
  ];
  const tabBar = {
    color: "#000",
    selectedColor: "#DC143C",
    fontSize: "15px",
    backgroundColor: "#fff",
    list: [
      {
        text: "首页",
        pagePath: "pages/home",
        iconPath: "static/icons/home.png",
        selectedIconPath: "static/icons/home-selected.png"
      },
      {
        text: "英语练习",
        pagePath: "pages/exercise/index",
        iconPath: "static/icons/text.png",
        selectedIconPath: "static/icons/text-selected.png"
      },
      {
        pagePath: "pages/class_control/index"
      },
      {
        text: "我的",
        pagePath: "pages/user_control/index",
        iconPath: "static/icons/user.png",
        selectedIconPath: "static/icons/user-selected.png"
      }
    ]
  };
  const t$2 = {
    pages,
    tabBar
  };
  function n(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function s(e, t2, n2) {
    return e(n2 = { path: t2, exports: {}, require: function(e2, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var r = s(function(e, t2) {
    var n2;
    e.exports = (n2 = n2 || function(e2, t3) {
      var n3 = Object.create || function() {
        function e3() {
        }
        return function(t4) {
          var n4;
          return e3.prototype = t4, n4 = new e3(), e3.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e3) {
        var t4 = n3(this);
        return e3 && t4.mixIn(e3), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e3 = this.extend();
        return e3.init.apply(e3, arguments), e3;
      }, init: function() {
      }, mixIn: function(e3) {
        for (var t4 in e3)
          e3.hasOwnProperty(t4) && (this[t4] = e3[t4]);
        e3.hasOwnProperty("toString") && (this.toString = e3.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e3, n4) {
        e3 = this.words = e3 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e3.length;
      }, toString: function(e3) {
        return (e3 || c2).stringify(this);
      }, concat: function(e3) {
        var t4 = this.words, n4 = e3.words, s3 = this.sigBytes, r3 = e3.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e2.ceil(n4 / 4);
      }, clone: function() {
        var e3 = i2.clone.call(this);
        return e3.words = this.words.slice(0), e3;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e2.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e2.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e3.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e3.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e3) {
        try {
          return decodeURIComponent(escape(u2.stringify(e3)));
        } catch (e4) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e3) {
        return u2.parse(unescape(encodeURIComponent(e3)));
      } }, l2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e3) {
        "string" == typeof e3 && (e3 = h2.parse(e3)), this._data.concat(e3), this._nDataBytes += e3.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e2.ceil(a3) : e2.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e2.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += i3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(l3, u3);
      }, clone: function() {
        var e3 = i2.clone.call(this);
        return e3._data = this._data.clone(), e3;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: i2.extend(), init: function(e3) {
        this.cfg = this.cfg.extend(e3), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e3) {
        return this._append(e3), this._process(), this;
      }, finalize: function(e3) {
        return e3 && this._append(e3), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e3) {
        return function(t4, n4) {
          return new e3.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e3) {
        return function(t4, n4) {
          return new d2.HMAC.init(e3, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), i = r, o = (s(function(e, t2) {
    var n2;
    e.exports = (n2 = i, function(e2) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e2.abs(e2.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e3, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e3[s3];
          e3[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e3[t4 + 0], c3 = e3[t4 + 1], p2 = e3[t4 + 2], f2 = e3[t4 + 3], g2 = e3[t4 + 4], m2 = e3[t4 + 5], y2 = e3[t4 + 6], _2 = e3[t4 + 7], w2 = e3[t4 + 8], v2 = e3[t4 + 9], I2 = e3[t4 + 10], S2 = e3[t4 + 11], b2 = e3[t4 + 12], k2 = e3[t4 + 13], C = e3[t4 + 14], T2 = e3[t4 + 15], P2 = i3[0], A2 = i3[1], E2 = i3[2], O = i3[3];
        P2 = u2(P2, A2, E2, O, o3, 7, a2[0]), O = u2(O, P2, A2, E2, c3, 12, a2[1]), E2 = u2(E2, O, P2, A2, p2, 17, a2[2]), A2 = u2(A2, E2, O, P2, f2, 22, a2[3]), P2 = u2(P2, A2, E2, O, g2, 7, a2[4]), O = u2(O, P2, A2, E2, m2, 12, a2[5]), E2 = u2(E2, O, P2, A2, y2, 17, a2[6]), A2 = u2(A2, E2, O, P2, _2, 22, a2[7]), P2 = u2(P2, A2, E2, O, w2, 7, a2[8]), O = u2(O, P2, A2, E2, v2, 12, a2[9]), E2 = u2(E2, O, P2, A2, I2, 17, a2[10]), A2 = u2(A2, E2, O, P2, S2, 22, a2[11]), P2 = u2(P2, A2, E2, O, b2, 7, a2[12]), O = u2(O, P2, A2, E2, k2, 12, a2[13]), E2 = u2(E2, O, P2, A2, C, 17, a2[14]), P2 = h2(P2, A2 = u2(A2, E2, O, P2, T2, 22, a2[15]), E2, O, c3, 5, a2[16]), O = h2(O, P2, A2, E2, y2, 9, a2[17]), E2 = h2(E2, O, P2, A2, S2, 14, a2[18]), A2 = h2(A2, E2, O, P2, o3, 20, a2[19]), P2 = h2(P2, A2, E2, O, m2, 5, a2[20]), O = h2(O, P2, A2, E2, I2, 9, a2[21]), E2 = h2(E2, O, P2, A2, T2, 14, a2[22]), A2 = h2(A2, E2, O, P2, g2, 20, a2[23]), P2 = h2(P2, A2, E2, O, v2, 5, a2[24]), O = h2(O, P2, A2, E2, C, 9, a2[25]), E2 = h2(E2, O, P2, A2, f2, 14, a2[26]), A2 = h2(A2, E2, O, P2, w2, 20, a2[27]), P2 = h2(P2, A2, E2, O, k2, 5, a2[28]), O = h2(O, P2, A2, E2, p2, 9, a2[29]), E2 = h2(E2, O, P2, A2, _2, 14, a2[30]), P2 = l2(P2, A2 = h2(A2, E2, O, P2, b2, 20, a2[31]), E2, O, m2, 4, a2[32]), O = l2(O, P2, A2, E2, w2, 11, a2[33]), E2 = l2(E2, O, P2, A2, S2, 16, a2[34]), A2 = l2(A2, E2, O, P2, C, 23, a2[35]), P2 = l2(P2, A2, E2, O, c3, 4, a2[36]), O = l2(O, P2, A2, E2, g2, 11, a2[37]), E2 = l2(E2, O, P2, A2, _2, 16, a2[38]), A2 = l2(A2, E2, O, P2, I2, 23, a2[39]), P2 = l2(P2, A2, E2, O, k2, 4, a2[40]), O = l2(O, P2, A2, E2, o3, 11, a2[41]), E2 = l2(E2, O, P2, A2, f2, 16, a2[42]), A2 = l2(A2, E2, O, P2, y2, 23, a2[43]), P2 = l2(P2, A2, E2, O, v2, 4, a2[44]), O = l2(O, P2, A2, E2, b2, 11, a2[45]), E2 = l2(E2, O, P2, A2, T2, 16, a2[46]), P2 = d2(P2, A2 = l2(A2, E2, O, P2, p2, 23, a2[47]), E2, O, o3, 6, a2[48]), O = d2(O, P2, A2, E2, _2, 10, a2[49]), E2 = d2(E2, O, P2, A2, C, 15, a2[50]), A2 = d2(A2, E2, O, P2, m2, 21, a2[51]), P2 = d2(P2, A2, E2, O, b2, 6, a2[52]), O = d2(O, P2, A2, E2, f2, 10, a2[53]), E2 = d2(E2, O, P2, A2, I2, 15, a2[54]), A2 = d2(A2, E2, O, P2, c3, 21, a2[55]), P2 = d2(P2, A2, E2, O, w2, 6, a2[56]), O = d2(O, P2, A2, E2, T2, 10, a2[57]), E2 = d2(E2, O, P2, A2, y2, 15, a2[58]), A2 = d2(A2, E2, O, P2, k2, 21, a2[59]), P2 = d2(P2, A2, E2, O, g2, 6, a2[60]), O = d2(O, P2, A2, E2, S2, 10, a2[61]), E2 = d2(E2, O, P2, A2, p2, 15, a2[62]), A2 = d2(A2, E2, O, P2, v2, 21, a2[63]), i3[0] = i3[0] + P2 | 0, i3[1] = i3[1] + A2 | 0, i3[2] = i3[2] + E2 | 0, i3[3] = i3[3] + O | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e2.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e3 = i2.clone.call(this);
        return e3._hash = this._hash.clone(), e3;
      } });
      function u2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), s(function(e, t2) {
    var n2;
    e.exports = (n2 = i, void function() {
      var e2 = n2, t3 = e2.lib.Base, s2 = e2.enc.Utf8;
      e2.algo.HMAC = t3.extend({ init: function(e3, t4) {
        e3 = this._hasher = new e3.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e3.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e3.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e3 = this._hasher;
        e3.reset(), e3.update(this._iKey);
      }, update: function(e3) {
        return this._hasher.update(e3), this;
      }, finalize: function(e3) {
        var t4 = this._hasher, n3 = t4.finalize(e3);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), s(function(e, t2) {
    e.exports = i.HmacMD5;
  })), a = s(function(e, t2) {
    e.exports = i.enc.Utf8;
  }), c = s(function(e, t2) {
    var n2;
    e.exports = (n2 = i, function() {
      var e2 = n2, t3 = e2.lib.WordArray;
      function s2(e3, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e3.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e3.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e2.enc.Base64 = { stringify: function(e3) {
        var t4 = e3.words, n3 = e3.sigBytes, s3 = this._map;
        e3.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e3) {
        var t4 = e3.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e3.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e3, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const u = "FUNCTION", h = "OBJECT", l = "CLIENT_DB", d = "pending", p = "fullfilled", f = "rejected";
  function g(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }
  function m(e) {
    return "object" === g(e);
  }
  function y(e) {
    return "function" == typeof e;
  }
  function _(e) {
    return function() {
      try {
        return e.apply(e, arguments);
      } catch (e2) {
        console.error(e2);
      }
    };
  }
  const w = "REJECTED", v = "NOT_PENDING";
  class I {
    constructor({ createPromise: e, retryRule: t2 = w } = {}) {
      this.createPromise = e, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case w:
          return this.status === f;
        case v:
          return this.status !== d;
      }
    }
    exec() {
      return this.needRetry ? (this.status = d, this.promise = this.createPromise().then((e) => (this.status = p, Promise.resolve(e)), (e) => (this.status = f, Promise.reject(e))), this.promise) : this.promise;
    }
  }
  function S(e) {
    return e && "string" == typeof e ? JSON.parse(e) : e;
  }
  const b = true, k = "app", T = S([]), P = k, A = S(""), E = S("[]") || [];
  let x = "";
  try {
    x = "__UNI__4DBF141";
  } catch (e) {
  }
  let R = {};
  function U(e, t2 = {}) {
    var n2, s2;
    return n2 = R, s2 = e, Object.prototype.hasOwnProperty.call(n2, s2) || (R[e] = t2), R[e];
  }
  R = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  const L = ["invoke", "success", "fail", "complete"], N = U("_globalUniCloudInterceptor");
  function D(e, t2) {
    N[e] || (N[e] = {}), m(t2) && Object.keys(t2).forEach((n2) => {
      L.indexOf(n2) > -1 && function(e2, t3, n3) {
        let s2 = N[e2][t3];
        s2 || (s2 = N[e2][t3] = []), -1 === s2.indexOf(n3) && y(n3) && s2.push(n3);
      }(e, n2, t2[n2]);
    });
  }
  function F(e, t2) {
    N[e] || (N[e] = {}), m(t2) ? Object.keys(t2).forEach((n2) => {
      L.indexOf(n2) > -1 && function(e2, t3, n3) {
        const s2 = N[e2][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e, n2, t2[n2]);
    }) : delete N[e];
  }
  function M(e, t2) {
    return e && 0 !== e.length ? e.reduce((e2, n2) => e2.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function q(e, t2) {
    return N[e] && N[e][t2] || [];
  }
  function K(e) {
    D("callObject", e);
  }
  const j = U("_globalUniCloudListener"), B = "response", $ = "needLogin", W = "refreshToken", z = "clientdb", J = "cloudfunction", H = "cloudobject";
  function G(e) {
    return j[e] || (j[e] = []), j[e];
  }
  function V(e, t2) {
    const n2 = G(e);
    n2.includes(t2) || n2.push(t2);
  }
  function Y(e, t2) {
    const n2 = G(e), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Q(e, t2) {
    const n2 = G(e);
    for (let e2 = 0; e2 < n2.length; e2++) {
      (0, n2[e2])(t2);
    }
  }
  let X, Z = false;
  function ee() {
    return X || (X = new Promise((e) => {
      Z && e(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (Z = true, e());
        }
        Z || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), X);
  }
  function te(e) {
    const t2 = {};
    for (const n2 in e) {
      const s2 = e[n2];
      y(s2) && (t2[n2] = _(s2));
    }
    return t2;
  }
  class ne extends Error {
    constructor(e) {
      super(e.message), this.errMsg = e.message || e.errMsg || "unknown system error", this.code = this.errCode = e.code || e.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e.subject || e.errSubject, this.cause = e.cause, this.requestId = e.requestId;
    }
    toJson(e = 0) {
      if (!(e >= 10))
        return e++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause };
    }
  }
  var se = { request: (e) => uni.request(e), uploadFile: (e) => uni.uploadFile(e), setStorageSync: (e, t2) => uni.setStorageSync(e, t2), getStorageSync: (e) => uni.getStorageSync(e), removeStorageSync: (e) => uni.removeStorageSync(e), clearStorageSync: () => uni.clearStorageSync() };
  function re(e) {
    return e && re(e.__v_raw) || e;
  }
  function ie() {
    return { token: se.getStorageSync("uni_id_token") || se.getStorageSync("uniIdToken"), tokenExpired: se.getStorageSync("uni_id_token_expired") };
  }
  function oe({ token: e, tokenExpired: t2 } = {}) {
    e && se.setStorageSync("uni_id_token", e), t2 && se.setStorageSync("uni_id_token_expired", t2);
  }
  let ae, ce;
  function ue() {
    return ae || (ae = uni.getSystemInfoSync()), ae;
  }
  function he() {
    let e, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e = s2, t2 = n2;
      }
    } catch (e2) {
    }
    return { channel: e, scene: t2 };
  }
  function le() {
    const e = uni.getLocale && uni.getLocale() || "en";
    if (ce)
      return { ...ce, locale: e, LOCALE: e };
    const t2 = ue(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e2 = 0; e2 < o2.length; e2++) {
      delete t2[o2[e2]];
    }
    return ce = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...he(), ...t2 }, { ...ce, locale: e, LOCALE: e };
  }
  var de = { sign: function(e, t2) {
    let n2 = "";
    return Object.keys(e).sort().forEach(function(t3) {
      e[t3] && (n2 = n2 + "&" + t3 + "=" + e[t3]);
    }), n2 = n2.slice(1), o(n2, t2).toString();
  }, wrappedRequest: function(e, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e, { complete(e2) {
        e2 || (e2 = {});
        const t3 = e2.data && e2.data.header && e2.data.header["x-serverless-request-id"] || e2.header && e2.header["request-id"];
        if (!e2.statusCode || e2.statusCode >= 400)
          return s2(new ne({ code: "SYS_ERR", message: e2.errMsg || "request:fail", requestId: t3 }));
        const r2 = e2.data;
        if (r2.error)
          return s2(new ne({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e) {
    return c.stringify(a.parse(e));
  } }, pe = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };
  const { t: fe } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: pe, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: pe }, "zh-Hans");
  var ge = class {
    constructor(e) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e, t2))
          throw new Error(fe("uniCloud.init.paramRequired", { param: t2 }));
      }), this.config = Object.assign({}, { endpoint: 0 === e.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = se, this._getAccessTokenPromiseHub = new I({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e2) => {
        if (!e2.result || !e2.result.accessToken)
          throw new ne({ code: "AUTH_FAILED", message: "获取accessToken失败" });
        this.setAccessToken(e2.result.accessToken);
      }), retryRule: v });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e) {
      this.accessToken = e;
    }
    requestWrapped(e) {
      return de.wrappedRequest(e, this.adapter.request);
    }
    requestAuth(e) {
      return this.requestWrapped(e);
    }
    request(e, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e) : this.requestWrapped(e).catch((t3) => new Promise((e2, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e2();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e) {
      const t2 = Object.assign({}, e);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = de.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    async authorize() {
      await this.getAccessToken();
    }
    callFunction(e) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e2) {
          e2 && e2.statusCode < 400 ? o2(e2) : a2(new ne({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e2) {
          a2(new ne({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e2) => {
          i2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
      if ("string" !== g(t2))
        throw new ne({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new ne({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new ne({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const o2 = i2 && i2.envType || this.config.envType;
      if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
        throw new ne({ code: "INVALID_PARAM", message: "使用cloudPath作为路径时，cloudPath不可包含“\\”" });
      const a2 = (await this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: h2, signature: l2, host: d2, ossPath: p2, id: f2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: h2, Signature: l2, host: d2, id: f2, key: p2, policy: m2, success_action_status: 200 };
      if (u2 && (_2["x-oss-security-token"] = u2), y2) {
        const e2 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: f2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        _2.callback = de.toBase64(e2);
      }
      const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
        return { success: true, filePath: e, fileID: c2 };
      if ((await this.reportOSSUpload({ id: f2 })).success)
        return { success: true, filePath: e, fileID: c2 };
      throw new ne({ code: "UPLOAD_FAILED", message: "文件上传失败" });
    }
    getTempFileURL({ fileList: e } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e) && 0 !== e.length || n2(new ne({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t2({ fileList: e.map((e2) => ({ fileID: e2, tempFileURL: e2 })) });
      });
    }
    async getFileInfo({ fileList: e } = {}) {
      if (!Array.isArray(e) || 0 === e.length)
        throw new ne({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e.map((e2) => e2.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var me = { init(e) {
    const t2 = new ge(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const ye = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var _e;
  !function(e) {
    e.local = "local", e.none = "none", e.session = "session";
  }(_e || (_e = {}));
  var we = function() {
  };
  const ve = () => {
    let e;
    if (!Promise) {
      e = () => {
      }, e.promise = {};
      const t3 = () => {
        throw new ne({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e.promise, "then", { get: t3 }), Object.defineProperty(e.promise, "catch", { get: t3 }), e;
    }
    const t2 = new Promise((t3, n2) => {
      e = (e2, s2) => e2 ? n2(e2) : t3(s2);
    });
    return e.promise = t2, e;
  };
  function Ie(e) {
    return void 0 === e;
  }
  function Se(e) {
    return "[object Null]" === Object.prototype.toString.call(e);
  }
  var be;
  function ke(e) {
    const t2 = (n2 = e, "[object Array]" === Object.prototype.toString.call(n2) ? e : [e]);
    var n2;
    for (const e2 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e2;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e) {
    e.WEB = "web", e.WX_MP = "wx_mp";
  }(be || (be = {}));
  const Ce = { adapter: null, runtime: void 0 }, Te = ["anonymousUuidKey"];
  class Pe extends we {
    constructor() {
      super(), Ce.adapter.root.tcbObject || (Ce.adapter.root.tcbObject = {});
    }
    setItem(e, t2) {
      Ce.adapter.root.tcbObject[e] = t2;
    }
    getItem(e) {
      return Ce.adapter.root.tcbObject[e];
    }
    removeItem(e) {
      delete Ce.adapter.root.tcbObject[e];
    }
    clear() {
      delete Ce.adapter.root.tcbObject;
    }
  }
  function Ae(e, t2) {
    switch (e) {
      case "local":
        return t2.localStorage || new Pe();
      case "none":
        return new Pe();
      default:
        return t2.sessionStorage || new Pe();
    }
  }
  class Ee {
    constructor(e) {
      if (!this._storage) {
        this._persistence = Ce.adapter.primaryStorage || e.persistence, this._storage = Ae(this._persistence, Ce.adapter);
        const t2 = `access_token_${e.env}`, n2 = `access_token_expire_${e.env}`, s2 = `refresh_token_${e.env}`, r2 = `anonymous_uuid_${e.env}`, i2 = `login_type_${e.env}`, o2 = `user_info_${e.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e) {
      if (e === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e;
      const n2 = Ae(e, Ce.adapter);
      for (const e2 in this.keys) {
        const s2 = this.keys[e2];
        if (t2 && Te.includes(e2))
          continue;
        const r2 = this._storage.getItem(s2);
        Ie(r2) || Se(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e, r2);
      } catch (e2) {
        throw e2;
      }
    }
    getStore(e, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e2) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e) {
      this._storage.removeItem(e);
    }
  }
  const Oe = {}, xe = {};
  function Re(e) {
    return Oe[e];
  }
  class Ue {
    constructor(e, t2) {
      this.data = t2 || null, this.name = e;
    }
  }
  class Le extends Ue {
    constructor(e, t2) {
      super("error", { error: e, data: t2 }), this.error = e;
    }
  }
  const Ne = new class {
    constructor() {
      this._listeners = {};
    }
    on(e, t2) {
      return function(e2, t3, n2) {
        n2[e2] = n2[e2] || [], n2[e2].push(t3);
      }(e, t2, this._listeners), this;
    }
    off(e, t2) {
      return function(e2, t3, n2) {
        if (n2 && n2[e2]) {
          const s2 = n2[e2].indexOf(t3);
          -1 !== s2 && n2[e2].splice(s2, 1);
        }
      }(e, t2, this._listeners), this;
    }
    fire(e, t2) {
      if (e instanceof Le)
        return console.error(e.error), this;
      const n2 = "string" == typeof e ? new Ue(e, t2 || {}) : e;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e2 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e2)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }();
  function De(e, t2) {
    Ne.on(e, t2);
  }
  function Fe(e, t2 = {}) {
    Ne.fire(e, t2);
  }
  function Me(e, t2) {
    Ne.off(e, t2);
  }
  const qe = "loginStateChanged", Ke = "loginStateExpire", je = "loginTypeChanged", Be = "anonymousConverted", $e = "refreshAccessToken";
  var We;
  !function(e) {
    e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
  }(We || (We = {}));
  const ze = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Je = { "X-SDK-Version": "1.3.5" };
  function He(e, t2, n2) {
    const s2 = e[t2];
    e[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e2;
        if (e2 = o2, "[object FormData]" !== Object.prototype.toString.call(e2))
          t3.data = { ...o2, ...r2 };
        else
          for (const e3 in r2)
            o2.append(e3, r2[e3]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e, t3);
    };
  }
  function Ge() {
    const e = Math.random().toString(16).slice(2);
    return { data: { seqId: e }, headers: { ...Je, "x-seqid": e } };
  }
  class Ve {
    constructor(e = {}) {
      var t2;
      this.config = e, this._reqClass = new Ce.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Re(this.config.env), this._localCache = (t2 = this.config.env, xe[t2]), He(this._reqClass, "post", [Ge]), He(this._reqClass, "upload", [Ge]), He(this._reqClass, "download", [Ge]);
    }
    async post(e) {
      return await this._reqClass.post(e);
    }
    async upload(e) {
      return await this._reqClass.upload(e);
    }
    async download(e) {
      return await this._reqClass.download(e);
    }
    async refreshAccessToken() {
      let e, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e = await this._refreshAccessTokenPromise;
      } catch (e2) {
        t2 = e2;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new ne({ message: "未登录CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e2 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e2 || "REFRESH_TOKEN_EXPIRED" === e2 || "INVALID_REFRESH_TOKEN" === e2) {
          if (this._cache.getStore(s2) === We.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e2) {
            const e3 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e3, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          Fe(Ke), this._cache.removeStore(n2);
        }
        throw new ne({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
      }
      if (a2.data.access_token)
        return Fe($e), this._cache.setStore(e, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new ne({ message: "refresh token不存在，登录状态异常" });
      let s2 = this._cache.getStore(e), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      if (-1 === ze.indexOf(e)) {
        const { refreshTokenKey: e2 } = this._cache.keys;
        this._cache.getStore(e2) && (i2.access_token = (await this.getAccessToken()).accessToken);
      }
      let o2;
      if ("storage.uploadFile" === e) {
        o2 = new FormData();
        for (let e2 in o2)
          o2.hasOwnProperty(e2) && void 0 !== o2[e2] && o2.append(e2, i2[e2]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e2 in i2)
          void 0 !== i2[e2] && (o2[e2] = i2[e2]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: h2, search: l2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), h2 && (d2 = { ...h2, ...d2 });
      let p2 = function(e2, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e3 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e3}=${encodeURIComponent(n3[e3])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e2}${t3}`;
      }(ye, "//tcb-api.tencentcloudapi.com/web", d2);
      l2 && (p2 += l2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new ne({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e, t2 = {}) {
      const n2 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
      if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === ze.indexOf(e)) {
        await this.refreshAccessToken();
        const n3 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new ne({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new ne({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
  }
  const Ye = {};
  function Qe(e) {
    return Ye[e];
  }
  class Xe {
    constructor(e) {
      this.config = e, this._cache = Re(e.env), this._request = Qe(e.env);
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
    setAccessToken(e, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e);
    }
  }
  class Ze {
    constructor(e) {
      if (!e)
        throw new ne({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e, this._cache = Re(this._envId), this._request = Qe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e) {
      if ("string" != typeof e)
        throw new ne({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e });
    }
    linkWithRedirect(e) {
      e.signInWithRedirect();
    }
    updatePassword(e, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e });
    }
    updateEmail(e) {
      return this._request.send("auth.updateEmail", { newEmail: e });
    }
    updateUsername(e) {
      if ("string" != typeof e)
        throw new ne({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e });
    }
    async getLinkedUidList() {
      const { data: e } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e;
      return n2.forEach((e2) => {
        e2.wxOpenId && e2.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", { uid: e });
    }
    unlink(e) {
      return this._request.send("auth.unlink", { platform: e });
    }
    async update(e) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setUserInfo() {
      const { userInfoKey: e } = this._cache.keys, t2 = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e2) => {
        this[e2] = t2[e2];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e), this.setUserInfo();
    }
  }
  class et {
    constructor(e) {
      if (!e)
        throw new ne({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Re(e);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new Ze(e);
    }
    get isAnonymousAuth() {
      return this.loginType === We.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === We.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === We.WECHAT || this.loginType === We.WECHAT_OPEN || this.loginType === We.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class tt extends Xe {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), Fe(qe), Fe(je, { env: this.config.env, loginType: We.ANONYMOUS, persistence: "local" });
        const e2 = new et(this.config.env);
        return await e2.user.refresh(), e2;
      }
      throw new ne({ message: "匿名登录失败" });
    }
    async linkAndRetrieveDataWithTicket(e) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), Fe(Be, { env: this.config.env }), Fe(je, { loginType: We.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new ne({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e), this._cache.setStore(n2, We.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class nt extends Xe {
    async signIn(e) {
      if ("string" != typeof e)
        throw new ne({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), Fe(qe), Fe(je, { env: this.config.env, loginType: We.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new et(this.config.env);
      throw new ne({ message: "自定义登录失败" });
    }
  }
  class st extends Xe {
    async signIn(e, t2) {
      if ("string" != typeof e)
        throw new ne({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Fe(qe), Fe(je, { env: this.config.env, loginType: We.EMAIL, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new ne({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new ne({ message: "邮箱登录失败" });
    }
    async activate(e) {
      return this._request.send("auth.activateEndUserMail", { token: e });
    }
    async resetPasswordWithToken(e, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t2 });
    }
  }
  class rt extends Xe {
    async signIn(e, t2) {
      if ("string" != typeof e)
        throw new ne({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: We.USERNAME, username: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Fe(qe), Fe(je, { env: this.config.env, loginType: We.USERNAME, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new ne({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new ne({ message: "用户名密码登录失败" });
    }
  }
  class it {
    constructor(e) {
      this.config = e, this._cache = Re(e.env), this._request = Qe(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), De(je, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e = this.hasLoginState();
      return e && e.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new tt(this.config);
    }
    customAuthProvider() {
      return new nt(this.config);
    }
    emailAuthProvider() {
      return new st(this.config);
    }
    usernameAuthProvider() {
      return new rt(this.config);
    }
    async signInAnonymously() {
      return new tt(this.config).signIn();
    }
    async signInWithEmailAndPassword(e, t2) {
      return new st(this.config).signIn(e, t2);
    }
    signInWithUsernameAndPassword(e, t2) {
      return new rt(this.config).signIn(e, t2);
    }
    async linkAndRetrieveDataWithTicket(e) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new tt(this.config)), De(Be, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
    }
    async signOut() {
      if (this.loginType === We.ANONYMOUS)
        throw new ne({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e), this._cache.removeStore(t2), this._cache.removeStore(n2), Fe(qe), Fe(je, { env: this.config.env, loginType: We.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t2 });
    }
    async sendPasswordResetEmail(e) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e });
    }
    onLoginStateChanged(e) {
      De(qe, () => {
        const t3 = this.hasLoginState();
        e.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e.call(this, t2);
    }
    onLoginStateExpired(e) {
      De(Ke, e.bind(this));
    }
    onAccessTokenRefreshed(e) {
      De($e, e.bind(this));
    }
    onAnonymousConverted(e) {
      De(Be, e.bind(this));
    }
    onLoginTypeChanged(e) {
      De(je, () => {
        const t2 = this.hasLoginState();
        e.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e } = this._cache.keys;
      return this._cache.getStore(e) ? new et(this.config.env) : null;
    }
    async isUsernameRegistered(e) {
      if ("string" != typeof e)
        throw new ne({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e) {
      return new nt(this.config).signIn(e);
    }
    shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e) => e.code ? e : { ...e.data, requestId: e.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e) {
      const { env: t2 } = e.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e) {
      const { loginType: t2, persistence: n2, env: s2 } = e.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const ot = function(e, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e2, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e3) => {
        201 === e3.statusCode ? t2(null, { fileID: h2, requestId: d2 }) : t2(new ne({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e3.data}` }));
      }).catch((e3) => {
        t2(e3);
      });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, at = function(e, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2 } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      t2(null, e2);
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, ct = function({ fileList: e }, t2) {
    if (t2 = t2 || ve(), !e || !Array.isArray(e))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e };
    return Qe(this.config.env).send("storage.batchDeleteFile", n2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.delete_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, ut = function({ fileList: e }, t2) {
    t2 = t2 || ve(), e && Array.isArray(e) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return Qe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.download_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, ht = async function({ fileID: e }, t2) {
    const n2 = (await ut.call(this, { fileList: [{ fileID: e, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e2) => {
        e2(n2);
      });
    const s2 = Qe(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, lt = function({ name: e, data: t2, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || ve();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e2) {
      return Promise.reject(e2);
    }
    if (!e)
      return Promise.reject(new ne({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e, request_data: a2 };
    return Qe(this.config.env).send("functions.invokeFunction", c2).then((e2) => {
      if (e2.code)
        o2(null, e2);
      else {
        let t3 = e2.data.response_data;
        if (s2)
          o2(null, { result: t3, requestId: e2.requestId });
        else
          try {
            t3 = JSON.parse(e2.data.response_data), o2(null, { result: t3, requestId: e2.requestId });
          } catch (e3) {
            o2(new ne({ message: "response data must be json" }));
          }
      }
      return o2.promise;
    }).catch((e2) => {
      o2(e2);
    }), o2.promise;
  }, dt = { timeout: 15e3, persistence: "session" }, pt = {};
  class ft {
    constructor(e) {
      this.config = e || this.config, this.authObj = void 0;
    }
    init(e) {
      switch (Ce.adapter || (this.requestClient = new Ce.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: `请求在${(e.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...dt, ...e }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new ft(this.config);
    }
    auth({ persistence: e } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e || Ce.adapter.primaryStorage || dt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e2) {
        const { env: t3 } = e2;
        Oe[t3] = new Ee(e2), xe[t3] = new Ee({ ...e2, persistence: "local" });
      }(this.config), n2 = this.config, Ye[n2.env] = new Ve(n2), this.authObj = new it(this.config), this.authObj;
    }
    on(e, t2) {
      return De.apply(this, [e, t2]);
    }
    off(e, t2) {
      return Me.apply(this, [e, t2]);
    }
    callFunction(e, t2) {
      return lt.apply(this, [e, t2]);
    }
    deleteFile(e, t2) {
      return ct.apply(this, [e, t2]);
    }
    getTempFileURL(e, t2) {
      return ut.apply(this, [e, t2]);
    }
    downloadFile(e, t2) {
      return ht.apply(this, [e, t2]);
    }
    uploadFile(e, t2) {
      return ot.apply(this, [e, t2]);
    }
    getUploadMetadata(e, t2) {
      return at.apply(this, [e, t2]);
    }
    registerExtension(e) {
      pt[e.name] = e;
    }
    async invokeExtension(e, t2) {
      const n2 = pt[e];
      if (!n2)
        throw new ne({ message: `扩展${e} 必须先注册` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e) {
      const { adapter: t2, runtime: n2 } = ke(e) || {};
      t2 && (Ce.adapter = t2), n2 && (Ce.runtime = n2);
    }
  }
  var gt = new ft();
  function mt(e, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e + t2;
  }
  class yt {
    post(e) {
      const { url: t2, data: n2, headers: s2 } = e;
      return new Promise((e2, r2) => {
        se.request({ url: mt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e2(t3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    }
    upload(e) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e, c2 = se.uploadFile({ url: mt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e2) {
          const n3 = { statusCode: e2.statusCode, data: e2.data || {} };
          200 === e2.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e2) {
          n2(new Error(e2.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const _t = { setItem(e, t2) {
    se.setStorageSync(e, t2);
  }, getItem: (e) => se.getStorageSync(e), removeItem(e) {
    se.removeStorageSync(e);
  }, clear() {
    se.clearStorageSync();
  } };
  var wt = { genAdapter: function() {
    return { root: {}, reqClass: yt, localStorage: _t, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  gt.useAdapters(wt);
  const vt = gt, It = vt.init;
  vt.init = function(e) {
    e.env = e.spaceId;
    const t2 = It.call(this, e);
    t2.config.provider = "tencent", t2.config.spaceId = e.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e2) {
      const t3 = n2.call(this, e2);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e3) => {
        var n3;
        t3[e3] = (n3 = t3[e3], function(e4) {
          e4 = e4 || {};
          const { success: t4, fail: s2, complete: r2 } = te(e4);
          if (!(t4 || s2 || r2))
            return n3.call(this, e4);
          n3.call(this, e4).then((e5) => {
            t4 && t4(e5), r2 && r2(e5);
          }, (e5) => {
            s2 && s2(e5), r2 && r2(e5);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var St = vt;
  var bt = class extends ge {
    getAccessToken() {
      return new Promise((e, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e(n2);
      });
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret);
      const r2 = le();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
      const { token: i2 } = ie();
      return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, success(e2) {
          e2 && e2.statusCode < 400 ? o2(e2) : a2(new ne({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e2) {
          a2(new ne({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e2) => {
          i2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new ne({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: i2, formData: o2, name: a2, filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: r2 }) : s3(new ne({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2)).then((e2) => {
        if (e2.success)
          return e2.result;
        throw new ne({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
      });
    }
    getTempFileURL({ fileList: e } = {}) {
      if (!Array.isArray(e) || 0 === e.length)
        throw new ne({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2)).then((e2) => {
        if (e2.success)
          return { fileList: e2.result.fileList.map((e3) => ({ fileID: e3.fileID, tempFileURL: e3.tempFileURL })) };
        throw new ne({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
      });
    }
  };
  var kt = { init(e) {
    const t2 = new bt(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  function Ct({ data: e }) {
    let t2;
    t2 = le();
    const n2 = JSON.parse(JSON.stringify(e || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e2 } = ie();
      e2 && (n2.uniIdToken = e2);
    }
    return n2;
  }
  async function Tt({ name: e, data: t2 } = {}) {
    await this.__dev__.initLocalNetwork();
    const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e}`;
    return new Promise((t3, n3) => {
      se.request({ method: "POST", url: o2, data: { name: e, platform: P, provider: r2, spaceId: i2 }, timeout: 3e3, success(e2) {
        t3(e2);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
      } });
    }).then(({ data: e2 } = {}) => {
      const { code: t3, message: n3 } = e2 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (0 !== n3) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`此云函数（${e}）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`此云函数（${e}）已加密不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
            break;
          case "NETWORK_ERROR": {
            const e2 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
            throw console.error(e2), new Error(e2);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e2 = `检测本地调试服务出现错误：${s3}，请检查网络环境或重启客户端再试`;
            throw console.error(e2), new Error(e2);
          }
        }
        return this._callCloudFunction({ name: e, data: t2 });
      }
      return new Promise((e2, n4) => {
        const s4 = Ct.call(this, { data: t2 });
        se.request({ method: "POST", url: a2, data: { provider: r2, platform: P, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new ne({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e2({ result: s5 }), fail(e3) {
          n4(new ne({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const Pt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var At = /[\\^$.*+?()[\]{}|]/g, Et = RegExp(At.source);
  function Ot(e, t2, n2) {
    return e.replace(new RegExp((s2 = t2) && Et.test(s2) ? s2.replace(At, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Rt = "request", Ut = "response", Lt = "both";
  const yn = { code: 2e4, message: "System error" }, _n = { code: 20101, message: "Invalid client" };
  function In(e) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e || {};
    return new ne({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || yn.code, message: r2 || o2, cause: a2 });
  }
  let bn;
  function An({ secretType: e } = {}) {
    return e === Rt || e === Ut || e === Lt;
  }
  function En({ name: e, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function On({ provider: e, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ue();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e2, spaceId: t3 } = {}) {
      const n3 = T;
      if (!n3)
        return {};
      e2 = function(e3) {
        return "tencent" === e3 ? "tcb" : e3;
      }(e2);
      const s3 = n3.find((n4) => n4.provider === e2 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const h2 = function(e2, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e2.length; i3++) {
        const o3 = e2[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e3) => e3.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!h2)
      return false;
    if ((c2[h2] || []).find((e2 = {}) => e2.appId === s2 && (e2.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), In(_n);
  }
  function xn({ functionName: e, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Rn(e) {
    const t2 = e.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Ct.call(e, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb" }[this.config.provider], i2 = An(n3), o2 = En(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e2) => (e2.errCode = 0, !a2 && xn.call(this, { functionName: s2, result: e2, logPvd: r2 }), Promise.resolve(e2)), (e2) => (!a2 && xn.call(this, { functionName: s2, result: e2, logPvd: r2 }), e2 && e2.message && (e2.message = function({ message: e3 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e3.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e4 = 1; e4 < a3.length; e4++)
            c2 = Ot(c2, `{$${e4}}`, a3[e4]);
          for (const e4 in t3)
            c2 = Ot(c2, `{${e4}}`, t3[e4]);
          return "replace" === o3 ? c2 : e3 + c2;
        }
        return e3;
      }({ message: `[${n3.name}]: ${e2.message}`, formatter: Pt, extraInfo: { functionName: s2 } })), Promise.reject(e2)));
    };
    e.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && E ? (e._callCloudFunction || (e._callCloudFunction = n2, e._callLocalFunction = Tt), o2 = Tt) : o2 = n2, o2 = o2.bind(e), En(t3))
        a2 = n2.call(e, t3);
      else if (An(t3)) {
        a2 = new bn({ secretType: t3.secretType, uniCloudIns: e }).wrapEncryptDataCallFunction(n2.bind(e))(t3);
      } else if (On({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new bn({ secretType: t3.secretType, uniCloudIns: e }).wrapVerifyClientCallFunction(n2.bind(e))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2;
    };
  }
  bn = class {
    constructor() {
      throw In({ message: `Platform ${P} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const Un = Symbol("CLIENT_DB_INTERNAL");
  function Ln(e, t2) {
    return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Un, e.inspect = null, e.__v_raw = void 0, new Proxy(e, { get(e2, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e2[n2];
      if (n2 in e2 || "string" != typeof n2) {
        const t3 = e2[n2];
        return "function" == typeof t3 ? t3.bind(e2) : t3;
      }
      return t2.get(e2, n2, s2);
    } });
  }
  function Nn(e) {
    return { on: (t2, n2) => {
      e[t2] = e[t2] || [], e[t2].indexOf(n2) > -1 || e[t2].push(n2);
    }, off: (t2, n2) => {
      e[t2] = e[t2] || [];
      const s2 = e[t2].indexOf(n2);
      -1 !== s2 && e[t2].splice(s2, 1);
    } };
  }
  const Dn = ["db.Geo", "db.command", "command.aggregate"];
  function Fn(e, t2) {
    return Dn.indexOf(`${e}.${t2}`) > -1;
  }
  function Mn(e) {
    switch (g(e = re(e))) {
      case "array":
        return e.map((e2) => Mn(e2));
      case "object":
        return e._internalType === Un || Object.keys(e).forEach((t2) => {
          e[t2] = Mn(e[t2]);
        }), e;
      case "regexp":
        return { $regexp: { source: e.source, flags: e.flags } };
      case "date":
        return { $date: e.toISOString() };
      default:
        return e;
    }
  }
  function qn(e) {
    return e && e.content && e.content.$method;
  }
  class Kn {
    constructor(e, t2, n2) {
      this.content = e, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e = this;
      const t2 = [e.content];
      for (; e.prevStage; )
        e = e.prevStage, t2.push(e.content);
      return { $db: t2.reverse().map((e2) => ({ $method: e2.$method, $param: Mn(e2.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e = this.toJSON().$db.find((e2) => "action" === e2.$method);
      return e && e.$param && e.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e) => "action" !== e.$method) };
    }
    get isAggregate() {
      let e = this;
      for (; e; ) {
        const t2 = qn(e), n2 = qn(e.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e = this;
      for (; e; ) {
        if ("command" === qn(e))
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e = this;
      for (; e; ) {
        const t2 = qn(e), n2 = qn(e.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e = e.prevStage;
      }
      return false;
    }
    getNextStageFn(e) {
      const t2 = this;
      return function() {
        return jn({ $method: e, $param: Mn(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL禁止使用set方法");
      };
    }
    _send(e, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e, $param: Mn(t2) }), b) {
        const e2 = s2.$db.find((e3) => "collection" === e3.$method), t3 = e2 && e2.$param;
        t3 && 1 === t3.length && "string" == typeof e2.$param[0] && e2.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function jn(e, t2, n2) {
    return Ln(new Kn(e, t2, n2), { get(e2, t3) {
      let s2 = "db";
      return e2 && e2.content && (s2 = e2.content.$method), Fn(s2, t3) ? jn({ $method: t3 }, e2, n2) : function() {
        return jn({ $method: t3, $param: Mn(Array.from(arguments)) }, e2, n2);
      };
    } });
  }
  function Bn({ path: e, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e.map((e2) => ({ $method: e2 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function $n(e, t2 = {}) {
    return Ln(new e(t2), { get: (e2, t3) => Fn("db", t3) ? jn({ $method: t3 }, null, e2) : function() {
      return jn({ $method: t3, $param: Mn(Array.from(arguments)) }, null, e2);
    } });
  }
  class Wn extends class {
    constructor({ uniClient: e = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e._isDefault && (this._dbCallBacks = U("_globalUniCloudDatabaseCallback")), t2 || (this.auth = Nn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, Nn(this._dbCallBacks)), this.env = Ln({}, { get: (e2, t3) => ({ $env: t3 }) }), this.Geo = Ln({}, { get: (e2, t3) => Bn({ path: ["Geo"], method: t3 }) }), this.serverDate = Bn({ path: [], method: "serverDate" }), this.RegExp = Bn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e) {
      if ("string" != typeof e || !e.trim())
        throw new Error("getCloudEnv参数错误");
      return { $env: e.replace("$cloudEnv_", "") };
    }
    _callback(e, t2) {
      const n2 = this._dbCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    _callbackAuth(e, t2) {
      const n2 = this._authCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    multiSend() {
      const e = Array.from(arguments), t2 = e.map((e2) => {
        const t3 = e2.getAction(), n2 = e2.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend只支持子命令内使用getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e });
    }
  } {
    _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
    _callCloudFunction({ action: e, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e2, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e2.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e2) {
        return i2._callback("error", [e2]), M(q(o2, "fail"), e2).then(() => M(q(o2, "complete"), e2)).then(() => (r2(null, e2), Q(B, { type: z, content: e2 }), Promise.reject(e2)));
      }
      const c2 = M(q(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: l, data: { action: e, command: t2, multiCommand: n2 } })).then((e2) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e2.result;
        if (u3)
          for (let e3 = 0; e3 < u3.length; e3++) {
            const { level: t4, message: n4, detail: s4 } = u3[e3], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
详细信息：${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new ne({ code: t3, message: n3, requestId: e2.requestId }));
        }
        e2.result.errCode = e2.result.errCode || e2.result.code, e2.result.errMsg = e2.result.errMsg || e2.result.message, s3 && c3 && (oe({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Q(W, { token: s3, tokenExpired: c3 }));
        const h2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < h2.length; t4++) {
          const { prop: n4, tips: s4 } = h2[t4];
          if (n4 in e2.result) {
            const t5 = e2.result[n4];
            Object.defineProperty(e2.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e3) {
          return M(q(o2, "success"), e3).then(() => M(q(o2, "complete"), e3)).then(() => {
            r2(e3, null);
            const t4 = i2._parseResult(e3);
            return Q(B, { type: z, content: t4 }), Promise.resolve(t4);
          });
        }(e2);
      }, (e2) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e2.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new ne({ code: e2.code || "SYSTEM_ERROR", message: e2.message, requestId: e2.requestId }));
      });
    }
  }
  const zn = "token无效，跳转登录页面", Jn = "token过期，跳转登录页面", Hn = { TOKEN_INVALID_TOKEN_EXPIRED: Jn, TOKEN_INVALID_INVALID_CLIENTID: zn, TOKEN_INVALID: zn, TOKEN_INVALID_WRONG_TOKEN: zn, TOKEN_INVALID_ANONYMOUS_USER: zn }, Gn = { "uni-id-token-expired": Jn, "uni-id-check-token-failed": zn, "uni-id-token-not-exist": zn, "uni-id-check-device-feature-failed": zn };
  function Vn(e, t2) {
    let n2 = "";
    return n2 = e ? `${e}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function Yn(e = [], t2 = "") {
    const n2 = [], s2 = [];
    return e.forEach((e2) => {
      true === e2.needLogin ? n2.push(Vn(t2, e2.path)) : false === e2.needLogin && s2.push(Vn(t2, e2.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function Qn(e) {
    return e.split("?")[0].replace(/^\//, "");
  }
  function Xn() {
    return function(e) {
      let t2 = e && e.$page && e.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e = getCurrentPages();
      return e[e.length - 1];
    }());
  }
  function Zn() {
    return Qn(Xn());
  }
  function es(e = "", t2 = {}) {
    if (!e)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = Qn(e);
    return n2.some((e2) => e2.pagePath === s2);
  }
  const ts = !!t$2.uniIdRouter;
  const { loginPage: ns, routerNeedLogin: ss, resToLogin: rs, needLoginPage: is, notNeedLoginPage: os, loginPageInTabBar: as } = function({ pages: e = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = t$2) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = Yn(e), { needLoginPage: h2, notNeedLoginPage: l2 } = function(e2 = []) {
      const t2 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = Yn(r3, s3);
        t2.push(...i3), n3.push(...o3);
      }), { needLoginPage: t2, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...h2], notNeedLoginPage: [...u2, ...l2], loginPageInTabBar: es(i2, r2) };
  }();
  if (is.indexOf(ns) > -1)
    throw new Error(`Login page [${ns}] should not be "needLogin", please check your pages.json`);
  function cs(e) {
    const t2 = Zn();
    if ("/" === e.charAt(0))
      return e;
    const [n2, s2] = e.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e2 = 0; e2 < r2.length; e2++) {
      const t3 = r2[e2];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function us(e) {
    const t2 = Qn(cs(e));
    return !(os.indexOf(t2) > -1) && (is.indexOf(t2) > -1 || ss.some((t3) => function(e2, t4) {
      return new RegExp(t4).test(e2);
    }(e, t3)));
  }
  function hs({ redirect: e }) {
    const t2 = Qn(e), n2 = Qn(ns);
    return Zn() !== n2 && t2 !== n2;
  }
  function ls({ api: e, redirect: t2 } = {}) {
    if (!t2 || !hs({ redirect: t2 }))
      return;
    const n2 = function(e2, t3) {
      return "/" !== e2.charAt(0) && (e2 = "/" + e2), t3 ? e2.indexOf("?") > -1 ? e2 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2;
    }(ns, t2);
    as ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e]({ url: n2 });
    });
  }
  function ds({ url: e } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e2, tokenExpired: t3 } = ie();
      let n3;
      if (e2) {
        if (t3 < Date.now()) {
          const e3 = "uni-id-token-expired";
          n3 = { errCode: e3, errMsg: Gn[e3] };
        }
      } else {
        const e3 = "uni-id-check-token-failed";
        n3 = { errCode: e3, errMsg: Gn[e3] };
      }
      return n3;
    }();
    if (us(e) && n2) {
      n2.uniIdRedirectUrl = e;
      if (G($).length > 0)
        return setTimeout(() => {
          Q($, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function ps() {
    !function() {
      const e2 = Xn(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = ds({ url: e2 });
      t2 || n2 && ls({ api: "redirectTo", redirect: e2 });
    }();
    const e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e.length; t2++) {
      const n2 = e[t2];
      uni.addInterceptor(n2, { invoke(e2) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = ds({ url: e2.url });
        return t3 ? e2 : s2 ? (ls({ api: n2, redirect: cs(e2.url) }), false) : e2;
      } });
    }
  }
  function fs() {
    this.onResponse((e) => {
      const { type: t2, content: n2 } = e;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e2) {
            if ("object" != typeof e2)
              return false;
            const { errCode: t3 } = e2 || {};
            return t3 in Gn;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e2) {
            if ("object" != typeof e2)
              return false;
            const { errCode: t3 } = e2 || {};
            return t3 in Hn;
          }(n2);
      }
      s2 && function(e2 = {}) {
        const t3 = G($);
        ee().then(() => {
          const n3 = Xn();
          if (n3 && hs({ redirect: n3 }))
            return t3.length > 0 ? Q($, Object.assign({ uniIdRedirectUrl: n3 }, e2)) : void (ns && ls({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function gs(e) {
    !function(e2) {
      e2.onResponse = function(e3) {
        V(B, e3);
      }, e2.offResponse = function(e3) {
        Y(B, e3);
      };
    }(e), function(e2) {
      e2.onNeedLogin = function(e3) {
        V($, e3);
      }, e2.offNeedLogin = function(e3) {
        Y($, e3);
      }, ts && (U("_globalUniCloudStatus").needLoginInit || (U("_globalUniCloudStatus").needLoginInit = true, ee().then(() => {
        ps.call(e2);
      }), rs && fs.call(e2)));
    }(e), function(e2) {
      e2.onRefreshToken = function(e3) {
        V(W, e3);
      }, e2.offRefreshToken = function(e3) {
        Y(W, e3);
      };
    }(e);
  }
  let ms;
  const ys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", _s = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function ws() {
    const e = ie().token || "", t2 = e.split(".");
    if (!e || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(ms(s2).split("").map(function(e2) {
        return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e2) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e2.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  ms = "function" != typeof atob ? function(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !_s.test(e))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e += "==".slice(2 - (3 & e.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e.length; )
      t2 = ys.indexOf(e.charAt(i2++)) << 18 | ys.indexOf(e.charAt(i2++)) << 12 | (n2 = ys.indexOf(e.charAt(i2++))) << 6 | (s2 = ys.indexOf(e.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var vs = s(function(e, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e2, t3) {
      return e2.tempFiles.forEach((e3, n3) => {
        e3.name || (e3.name = e3.path.substring(e3.path.lastIndexOf("/") + 1)), t3 && (e3.fileType = t3), e3.cloudPath = Date.now() + "_" + n3 + e3.name.substring(e3.name.lastIndexOf("."));
      }), e2.tempFilePaths || (e2.tempFilePaths = e2.tempFiles.map((e3) => e3.path)), e2;
    }
    function i2(e2, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e3) => {
        if (s3) {
          const t4 = s3(e3);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e3 : t5);
        }
        return e3;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e3, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e4) => !e4.url && !e4.errMsg) && n3(t5));
            const u2 = i3[s5];
            e3.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, onUploadProgress(e4) {
              e4.index = s5, e4.tempFile = u2, e4.tempFilePath = u2.path, r4 && r4(e4);
            } }).then((e4) => {
              u2.url = e4.fileID, s5 < o2 && c2();
            }).catch((e4) => {
              u2.errMsg = e4.errMsg || e4.message, s5 < o2 && c2();
            });
          }
        });
      }(e2, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e2) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e2, function(e3) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e3;
          return new Promise((e4, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e4(r2(t5, "image"));
            }, fail(e5) {
              a2({ errMsg: e5.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e2, function(e3) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e3;
          return new Promise((e4, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e4(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e5) {
              c2({ errMsg: e5.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e2, function(e3) {
          const { count: t4, extension: n3 } = e3;
          return new Promise((e4, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e4(r2(t5));
            }, fail(e5) {
              i3({ errMsg: e5.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), Is = n(vs);
  const Ss = "manual";
  function bs(e) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e2 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e2.push(this[t2]);
        }), e2;
      }, (e2, t2) => {
        if (this.loadtime === Ss)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e2.length; r2++)
          e2[r2] !== t2[r2] && (s2.push(e2[r2]), n2 = true);
        e2[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e2, t2) {
    }, mixinDatacomEasyGet({ getone: e2 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e2 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e3) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e3, n2 && n2(e3);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2 = e.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const h2 = t2.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function ks(e) {
    return function(t2, n2 = {}) {
      n2 = function(e2, t3 = {}) {
        return e2.customUI = t3.customUI || e2.customUI, e2.parseSystemError = t3.parseSystemError || e2.parseSystemError, Object.assign(e2.loadingOptions, t3.loadingOptions), Object.assign(e2.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e2.secretMethods = t3.secretMethods), e2;
      }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get: (s3, c2) => function({ fn: e2, interceptorName: t3, getCallbackArgs: n3 } = {}) {
        return async function(...s4) {
          const r3 = n3 ? n3({ params: s4 }) : {};
          let i3, o3;
          try {
            return await M(q(t3, "invoke"), { ...r3 }), i3 = await e2(...s4), await M(q(t3, "success"), { ...r3, result: i3 }), i3;
          } catch (e3) {
            throw o3 = e3, await M(q(t3, "fail"), { ...r3, error: o3 }), o3;
          } finally {
            await M(q(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
          }
        };
      }({ fn: async function s4(...u2) {
        let l2;
        a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
        const d2 = { name: t2, type: h, data: { method: c2, params: u2 } };
        "object" == typeof n2.secretMethods && function(e2, t3) {
          const n3 = t3.data.method, s5 = e2.secretMethods || {}, r3 = s5[n3] || s5["*"];
          r3 && (t3.secretType = r3);
        }(n2, d2);
        let p2 = false;
        try {
          l2 = await e.callFunction(d2);
        } catch (e2) {
          p2 = true, l2 = { result: new ne(e2) };
        }
        const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = l2.result || {};
        if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (oe(y2), Q(W, { ...y2 })), g2) {
          let e2 = m2;
          if (p2 && o2) {
            e2 = (await o2({ objectName: t2, methodName: c2, params: u2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
          }
          if (a2)
            if ("toast" === i2.type)
              uni.showToast({ title: e2, icon: "none" });
            else {
              if ("modal" !== i2.type)
                throw new Error(`Invalid errorOptions.type: ${i2.type}`);
              {
                const { confirm: t3 } = await async function({ title: e3, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                  return new Promise((i3, o3) => {
                    uni.showModal({ title: e3, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e4) {
                      i3(e4);
                    }, fail() {
                      i3({ confirm: false, cancel: true });
                    } });
                  });
                }({ title: "提示", content: e2, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                if (i2.retry && t3)
                  return s4(...u2);
              }
            }
          const n3 = new ne({ subject: f2, code: g2, message: m2, requestId: l2.requestId });
          throw n3.detail = l2.result, Q(B, { type: H, content: n3 }), n3;
        }
        return Q(B, { type: H, content: l2.result }), l2.result;
      }, interceptorName: "callObject", getCallbackArgs: function({ params: e2 } = {}) {
        return { objectName: t2, methodName: c2, params: e2 };
      } }) });
    };
  }
  function Cs(e) {
    return U("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
  }
  async function Ts({ openid: e, callLoginByWeixin: t2 = false } = {}) {
    Cs(this);
    throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${P}\``);
  }
  async function Ps(e) {
    const t2 = Cs(this);
    return t2.initPromise || (t2.initPromise = Ts.call(this, e)), t2.initPromise;
  }
  function As(e) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return Ps.call(e, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Es(e) {
    const t2 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t2[e]({ ...n2, success(e2) {
          s2(e2);
        }, fail(e2) {
          r2(e2);
        } });
      });
    };
  }
  class Os extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e, t2) {
      this._callback[e] || (this._callback[e] = []), this._callback[e].push(t2);
    }
    on(e, t2) {
      return this.addListener(e, t2);
    }
    removeListener(e, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e];
      if (!n2)
        return;
      const s2 = function(e2, t3) {
        for (let n3 = e2.length - 1; n3 >= 0; n3--)
          if (e2[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e, t2) {
      return this.removeListener(e, t2);
    }
    removeAllListener(e) {
      delete this._callback[e];
    }
    emit(e, ...t2) {
      const n2 = this._callback[e];
      if (n2)
        for (let e2 = 0; e2 < n2.length; e2++)
          n2[e2](...t2);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([Es("getSystemInfo")(), Es("getPushClientId")()]).then(([{ appId: e } = {}, { cid: t2 } = {}] = []) => {
        if (!e)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e) => {
        throw this.emit("error", e), this.close(), e;
      });
    }
    async open() {
      return this.init();
    }
    _isUniCloudSSE(e) {
      if ("receive" !== e.type)
        return false;
      const t2 = e && e.data && e.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e) {
      if (!this._isUniCloudSSE(e))
        return;
      const t2 = e && e.data && e.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e = this._payloadQueue.find((e2) => e2.messageId === this._currentMessageId + 1);
        if (!e)
          break;
        this._currentMessageId++, this._parseMessagePayload(e);
      }
    }
    _parseMessagePayload(e) {
      const { action: t2, messageId: n2, message: s2 } = e;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  }
  async function xs(e, t2) {
    const n2 = `http://${e}:${t2}/system/ping`;
    try {
      const e2 = await (s2 = { url: n2, timeout: 500 }, new Promise((e3, t3) => {
        se.request({ ...s2, success(t4) {
          e3(t4);
        }, fail(e4) {
          t3(e4);
        } });
      }));
      return !(!e2.data || 0 !== e2.data.code);
    } catch (e2) {
      return false;
    }
    var s2;
  }
  async function Rs(e) {
    {
      const { osName: e2, osVersion: t3 } = ue();
      "ios" === e2 && function(e3) {
        if (!e3 || "string" != typeof e3)
          return 0;
        const t4 = e3.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
    }
    const t2 = e.__dev__;
    if (!t2.debugInfo)
      return;
    const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = await async function(e2, t3) {
      let n3;
      for (let s3 = 0; s3 < e2.length; s3++) {
        const r3 = e2[s3];
        if (await xs(r3, t3)) {
          n3 = r3;
          break;
        }
      }
      return { address: n3, port: t3 };
    }(n2, s2);
    if (r2)
      return t2.localAddress = r2, void (t2.localPort = s2);
    const i2 = console["error"];
    let o2 = "";
    if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === P.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
      throw new Error(o2);
    i2(o2);
  }
  function Us(e) {
    e._initPromiseHub || (e._initPromiseHub = new I({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e2) => {
        setTimeout(() => {
          e2();
        }, n2);
      });
      const s2 = e.auth();
      return t2.then(() => s2.getLoginState()).then((e2) => e2 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  const Ls = { tcb: St, tencent: St, aliyun: me, private: kt };
  let Ns = new class {
    init(e) {
      let t2 = {};
      const n2 = Ls[e.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e), function(e2) {
        const t3 = {};
        e2.__dev__ = t3, t3.debugLog = "app" === P;
        const n3 = A;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new I({ createPromise: function() {
          return Rs(e2);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), Us(t2), Rn(t2), function(e2) {
        const t3 = e2.uploadFile;
        e2.uploadFile = function(e3) {
          return t3.call(this, e3);
        };
      }(t2), function(e2) {
        e2.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e2.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = $n(Wn, { uniClient: e2 });
          return this._database = n3, n3;
        }, e2.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e2.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = $n(Wn, { uniClient: e2, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e2) {
        e2.getCurrentUserInfo = ws, e2.chooseAndUploadFile = Is.initChooseAndUploadFile(e2), Object.assign(e2, { get mixinDatacom() {
          return bs(e2);
        } }), e2.SSEChannel = Os, e2.initSecureNetworkByWeixin = As(e2), e2.importObject = ks(e2);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e2) => {
        if (!t2[e2])
          return;
        const n3 = t2[e2];
        t2[e2] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e2] = function(e3, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e4 = n4 && n4.type || u;
              s2 = e4 !== u;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: c2 } = te(n4), h2 = i2.then(() => s2 ? Promise.resolve() : M(q(t3, "invoke"), n4)).then(() => e3.call(this, n4)).then((e4) => s2 ? Promise.resolve(e4) : M(q(t3, "success"), e4).then(() => M(q(t3, "complete"), e4)).then(() => (r2 && Q(B, { type: J, content: e4 }), Promise.resolve(e4))), (e4) => s2 ? Promise.reject(e4) : M(q(t3, "fail"), e4).then(() => M(q(t3, "complete"), e4)).then(() => (Q(B, { type: J, content: e4 }), Promise.reject(e4))));
            if (!(o2 || a2 || c2))
              return h2;
            h2.then((e4) => {
              o2 && o2(e4), c2 && c2(e4), r2 && Q(B, { type: J, content: e4 });
            }, (e4) => {
              a2 && a2(e4), c2 && c2(e4), r2 && Q(B, { type: J, content: e4 });
            });
          };
        }(t2[e2], e2).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e = E;
    let t2 = {};
    if (e && 1 === e.length)
      t2 = e[0], Ns = Ns.init(t2), Ns._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", t3.forEach((e2) => {
        Ns[e2] = function() {
          return console.error(n2), Promise.reject(new ne({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Ns, { get mixinDatacom() {
      return bs(Ns);
    } }), gs(Ns), Ns.addInterceptor = D, Ns.removeInterceptor = F, Ns.interceptObject = K;
  })();
  var Ds = Ns;
  const _sfc_main$t = {
    name: "uni-data-select",
    mixins: [Ds.mixinDatacom || {}],
    props: {
      localdata: {
        type: Array,
        default() {
          return [];
        }
      },
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: "请选择"
      },
      emptyTips: {
        type: String,
        default: "无选项"
      },
      clear: {
        type: Boolean,
        default: true
      },
      defItem: {
        type: Number,
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      },
      // 格式化输出 用法 field="_id as value, version as text, uni_platform as label" format="{label} - {text}"
      format: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        showSelector: false,
        current: "",
        mixinDatacomResData: [],
        apps: [],
        channels: [],
        cacheKey: "uni-data-select-lastSelectedValue"
      };
    },
    created() {
      this.debounceGet = this.debounce(() => {
        this.query();
      }, 300);
      if (this.collection && !this.localdata.length) {
        this.debounceGet();
      }
    },
    computed: {
      typePlaceholder() {
        const text = {
          "opendb-stat-app-versions": "版本",
          "opendb-app-channels": "渠道",
          "opendb-app-list": "应用"
        };
        const common2 = this.placeholder;
        const placeholder = text[this.collection];
        return placeholder ? common2 + placeholder : common2;
      },
      valueCom() {
        return this.modelValue;
      }
    },
    watch: {
      localdata: {
        immediate: true,
        handler(val, old) {
          if (Array.isArray(val) && old !== val) {
            this.mixinDatacomResData = val;
          }
        }
      },
      valueCom(val, old) {
        this.initDefVal();
      },
      mixinDatacomResData: {
        immediate: true,
        handler(val) {
          if (val.length) {
            this.initDefVal();
          }
        }
      }
    },
    methods: {
      debounce(fn, time = 100) {
        let timer = null;
        return function(...args) {
          if (timer)
            clearTimeout(timer);
          timer = setTimeout(() => {
            fn.apply(this, args);
          }, time);
        };
      },
      // 执行数据库查询
      query() {
        this.mixinDatacomEasyGet();
      },
      // 监听查询条件变更事件
      onMixinDatacomPropsChange() {
        if (this.collection) {
          this.debounceGet();
        }
      },
      initDefVal() {
        let defValue = "";
        if ((this.valueCom || this.valueCom === 0) && !this.isDisabled(this.valueCom)) {
          defValue = this.valueCom;
        } else {
          let strogeValue;
          if (this.collection) {
            strogeValue = this.getCache();
          }
          if (strogeValue || strogeValue === 0) {
            defValue = strogeValue;
          } else {
            let defItem = "";
            if (this.defItem > 0 && this.defItem <= this.mixinDatacomResData.length) {
              defItem = this.mixinDatacomResData[this.defItem - 1].value;
            }
            defValue = defItem;
          }
          if (defValue || defValue === 0) {
            this.emit(defValue);
          }
        }
        const def = this.mixinDatacomResData.find((item) => item.value === defValue);
        this.current = def ? this.formatItemName(def) : "";
      },
      /**
       * @param {[String, Number]} value
       * 判断用户给的 value 是否同时为禁用状态
       */
      isDisabled(value) {
        let isDisabled = false;
        this.mixinDatacomResData.forEach((item) => {
          if (item.value === value) {
            isDisabled = item.disable;
          }
        });
        return isDisabled;
      },
      clearVal() {
        this.emit("");
        if (this.collection) {
          this.removeCache();
        }
      },
      change(item) {
        if (!item.disable) {
          this.showSelector = false;
          this.current = this.formatItemName(item);
          this.emit(item.value);
        }
      },
      emit(val) {
        this.$emit("input", val);
        this.$emit("update:modelValue", val);
        this.$emit("change", val);
        if (this.collection) {
          this.setCache(val);
        }
      },
      toggleSelector() {
        if (this.disabled) {
          return;
        }
        this.showSelector = !this.showSelector;
      },
      formatItemName(item) {
        let {
          text,
          value,
          channel_code
        } = item;
        channel_code = channel_code ? `(${channel_code})` : "";
        if (this.format) {
          let str = "";
          str = this.format;
          for (let key in item) {
            str = str.replace(new RegExp(`{${key}}`, "g"), item[key]);
          }
          return str;
        } else {
          return this.collection.indexOf("app-list") > 0 ? `${text}(${value})` : text ? text : `未命名${channel_code}`;
        }
      },
      // 获取当前加载的数据
      getLoadData() {
        return this.mixinDatacomResData;
      },
      // 获取当前缓存key
      getCurrentCacheKey() {
        return this.collection;
      },
      // 获取缓存
      getCache(name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        return cacheData[name];
      },
      // 设置缓存
      setCache(value, name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        cacheData[name] = value;
        uni.setStorageSync(this.cacheKey, cacheData);
      },
      // 删除缓存
      removeCache(name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        delete cacheData[name];
        uni.setStorageSync(this.cacheKey, cacheData);
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-stat__select" }, [
      $props.label ? (vue.openBlock(), vue.createElementBlock(
        "span",
        {
          key: 0,
          class: "uni-label-text hide-on-phone"
        },
        vue.toDisplayString($props.label + "："),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-stat-box", { "uni-stat__actived": $data.current }])
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-select", { "uni-select--disabled": $props.disabled }])
            },
            [
              vue.createElementVNode("view", {
                class: "uni-select__input-box",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.toggleSelector && $options.toggleSelector(...args))
              }, [
                $data.current ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 0,
                    class: "uni-select__input-text"
                  },
                  vue.toDisplayString($data.current),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 1,
                    class: "uni-select__input-text uni-select__input-placeholder"
                  },
                  vue.toDisplayString($options.typePlaceholder),
                  1
                  /* TEXT */
                )),
                $data.current && $props.clear && !$props.disabled ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 2,
                  onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.clearVal && $options.clearVal(...args), ["stop"]))
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "clear",
                    color: "#c0c4cc",
                    size: "24"
                  })
                ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 3 }, [
                  vue.createVNode(_component_uni_icons, {
                    type: $data.showSelector ? "top" : "bottom",
                    size: "14",
                    color: "#999"
                  }, null, 8, ["type"])
                ]))
              ]),
              $data.showSelector ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-select--mask",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.toggleSelector && $options.toggleSelector(...args))
              })) : vue.createCommentVNode("v-if", true),
              $data.showSelector ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-select__selector"
              }, [
                vue.createElementVNode("view", { class: "uni-popper__arrow" }),
                vue.createElementVNode("scroll-view", {
                  "scroll-y": "true",
                  class: "uni-select__selector-scroll"
                }, [
                  $data.mixinDatacomResData.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "uni-select__selector-empty"
                  }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString($props.emptyTips),
                      1
                      /* TEXT */
                    )
                  ])) : (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    { key: 1 },
                    vue.renderList($data.mixinDatacomResData, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "uni-select__selector-item",
                        key: index,
                        onClick: ($event) => $options.change(item)
                      }, [
                        vue.createElementVNode(
                          "text",
                          {
                            class: vue.normalizeClass({ "uni-select__selector__disabled": item.disable })
                          },
                          vue.toDisplayString($options.formatItemName(item)),
                          3
                          /* TEXT, CLASS */
                        )
                      ], 8, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$8], ["__scopeId", "data-v-ddf9e0a2"], ["__file", "D:/Project/English/English_android/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue"]]);
  const _sfc_main$s = {
    __name: "register",
    setup(__props) {
      const registerForm = vue.ref();
      const registerData = vue.reactive({
        username: "",
        password: "",
        check_password: "",
        email: "",
        role: ""
      });
      const options = [
        {
          value: "teacher",
          text: "教师"
        },
        {
          value: "student",
          text: "学生"
        }
      ];
      const registerRules = {
        username: {
          rules: [{
            required: true,
            errorMessage: "请输入用户名"
          }, {
            minLength: 3,
            maxLength: 12,
            errorMessage: "用户名长度在 {minLength} 到 {maxLength} 个字符"
          }]
        },
        password: {
          rules: [{
            required: true,
            errorMessage: "请输入密码"
          }, {
            minLength: 3,
            maxLength: 15,
            errorMessage: "密码长度在 {minLength} 到 {maxLength} 个字符"
          }]
        },
        check_password: {
          rules: [{
            required: true,
            errorMessage: "请重新输入密码"
          }, {
            validateFunction: function(rule, value, data, callback) {
              if (value !== registerData.password) {
                callback("两次输入密码不一致!");
              }
              return true;
            }
          }]
        },
        role: {
          rules: [{
            required: true,
            errorMessage: "请选择角色"
          }]
        }
      };
      function submit() {
        registerForm.value.validate((obj) => {
          if (obj == null) {
            formatAppLog("log", "at pages/register.vue:95", "aa");
            https.post("/auth/register", registerData).then((res) => {
              if (res.data.code == 200) {
                uni.showToast({
                  title: "注册成功",
                  icon: "success",
                  duration: 3e3
                }), uni.navigateBack();
              } else {
                uni.showToast({
                  title: res.data.message,
                  icon: "error",
                  duration: 3e3
                });
              }
            }).catch(() => {
              uni.showToast({
                title: "未连接到服务器",
                icon: "error",
                duration: 3e3
              });
            });
          }
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$2);
        const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1);
        const _component_uni_data_select = resolveEasycom(vue.resolveDynamicComponent("uni-data-select"), __easycom_2);
        const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_4);
        return vue.openBlock(), vue.createElementBlock("view", { class: "register" }, [
          vue.createVNode(_component_uni_forms, {
            ref_key: "registerForm",
            ref: registerForm,
            model: registerData,
            labelWidth: "80px",
            rules: registerRules,
            "validate-trigger": "bind"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_forms_item, {
                label: "用户名",
                name: "username",
                required: ""
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_easyinput, {
                    modelValue: registerData.username,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => registerData.username = $event),
                    placeholder: "请输入用户名",
                    onBlur: _cache[1] || (_cache[1] = ($event) => _ctx.binddata("username", $event.detail.value))
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_forms_item, {
                label: "密码",
                name: "password",
                required: ""
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_easyinput, {
                    type: "password",
                    modelValue: registerData.password,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => registerData.password = $event),
                    placeholder: "请输入密码",
                    onBlur: _cache[3] || (_cache[3] = ($event) => _ctx.binddata("password", $event.detail.value))
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_forms_item, {
                label: "确认密码",
                name: "check_password",
                required: ""
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_easyinput, {
                    type: "password",
                    modelValue: registerData.check_password,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => registerData.check_password = $event),
                    placeholder: "请重新输入密码",
                    onBlur: _cache[5] || (_cache[5] = ($event) => _ctx.binddata("check_password", $event.detail.value))
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_forms_item, { label: "电子邮件" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_easyinput, {
                    modelValue: registerData.email,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => registerData.email = $event),
                    placeholder: "请输入电子邮件"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_forms_item, {
                label: "角色",
                name: "role",
                required: ""
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_data_select, {
                    modelValue: registerData.role,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => registerData.role = $event),
                    localdata: options,
                    placeholder: "请选择角色",
                    onBlur: _cache[8] || (_cache[8] = ($event) => _ctx.binddata("role", $event.detail.value))
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["model"]),
          vue.createElementVNode("button", {
            type: "primary",
            onClick: _cache[9] || (_cache[9] = ($event) => submit())
          }, "提交")
        ]);
      };
    }
  };
  const PagesRegister = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__file", "D:/Project/English/English_android/pages/register.vue"]]);
  const _sfc_main$r = {};
  function _sfc_render$7(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("span", null, "这是首页");
  }
  const PagesHome = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$7], ["__file", "D:/Project/English/English_android/pages/home.vue"]]);
  const _sfc_main$q = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: uni.getSystemInfoSync().statusBarHeight + "px"
      };
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle({ height: $data.statusBarHeight }),
        class: "uni-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$6], ["__scopeId", "data-v-7920e3e0"], ["__file", "D:/Project/English/English_android/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$p = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      },
      stat: {
        type: [Boolean, String],
        default: ""
      }
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#333" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#333";
          }
        }
        return this.color || "#333";
      },
      navbarHeight() {
        return getVal(this.height);
      },
      leftIconWidth() {
        return getVal(this.leftWidth);
      },
      rightIconWidth() {
        return getVal(this.rightWidth);
      }
    },
    mounted() {
      if (uni.report && this.stat && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark, "uni-nvue-fixed": $props.fixed }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-navbar__content", { "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }]),
            style: vue.normalizeStyle({ "background-color": $options.themeBgColor, "border-bottom-color": $options.themeColor })
          },
          [
            $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
                class: "uni-navbar__header"
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-left",
                    style: vue.normalizeStyle({ width: $options.leftIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "left", {}, () => [
                      $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "uni-navbar__content_view"
                      }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.leftIcon,
                          size: "20"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.leftText.length ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 1,
                          class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
                        },
                        [
                          vue.createElementVNode(
                            "text",
                            {
                              style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
                            },
                            vue.toDisplayString($props.leftText),
                            5
                            /* TEXT, STYLE */
                          )
                        ],
                        2
                        /* CLASS */
                      )) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode("view", {
                  class: "uni-navbar__header-container",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "uni-navbar__header-container-inner"
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-nav-bar-text uni-ellipsis-1",
                          style: vue.normalizeStyle({ color: $options.themeColor })
                        },
                        vue.toDisplayString($props.title),
                        5
                        /* TEXT, STYLE */
                      )
                    ])) : vue.createCommentVNode("v-if", true)
                  ], true)
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-right",
                    style: vue.normalizeStyle({ width: $options.rightIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "right", {}, () => [
                      $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.rightIcon,
                          size: "22"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 1,
                        class: "uni-navbar-btn-text"
                      }, [
                        vue.createElementVNode(
                          "text",
                          {
                            class: "uni-nav-bar-right-text",
                            style: vue.normalizeStyle({ color: $options.themeColor })
                          },
                          vue.toDisplayString($props.rightText),
                          5
                          /* TEXT, STYLE */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        ),
        $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-navbar__placeholder"
        }, [
          $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: "uni-navbar__placeholder-view",
              style: vue.normalizeStyle({ height: $options.navbarHeight })
            },
            null,
            4
            /* STYLE */
          )
        ])) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$5], ["__scopeId", "data-v-26544265"], ["__file", "D:/Project/English/English_android/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  const _sfc_main$o = {
    __name: "index",
    setup(__props) {
      let englishCatalog = vue.ref();
      onShow(() => {
        getCatalog();
      });
      function getCatalog() {
        https.get("/english/essay_catalog").then((res) => {
          let temp = res.data.data;
          temp.forEach((item) => {
            item.show = false;
            item.textbooks.forEach((item1) => {
              item1.show = false;
              item1.essays.forEach((item2) => {
                item2.show = false;
              });
            });
          });
          englishCatalog.value = temp;
        }).catch(() => {
          uni.showToast({
            title: "未连接到服务器",
            icon: "error",
            duration: 3e3
          });
        });
      }
      function categorylist(id) {
        englishCatalog.value.forEach((item) => {
          if (item.id == id) {
            if (item.show == false) {
              item.show = true;
            } else {
              item.show = false;
            }
          } else {
            item.show = false;
          }
        });
      }
      function textbooklist(pid, id) {
        englishCatalog.value.forEach((item) => {
          if (item.id == pid) {
            item.textbooks.forEach((item1) => {
              if (item1.id == id) {
                if (item1.show == false) {
                  item1.show = true;
                } else {
                  item1.show = false;
                }
              } else {
                item1.show = false;
              }
            });
          }
        });
      }
      function startDegree(essay_id) {
        https.post("/english/essay_degree", { "essay_id": essay_id }).then((res) => {
          if (res.data.length === 0) {
            uni.showToast({
              title: "该文章不可练习",
              position: "bottom"
            });
          } else {
            let grade = [];
            res.data.forEach((item) => {
              grade.push(item.value);
            });
            uni.showActionSheet({
              title: "模式选择",
              itemList: ["选择", "填空"],
              success: (item) => {
                if (item.tapIndex == 0) {
                  uni.showActionSheet({
                    title: "难度选择",
                    itemList: grade,
                    success: (g2) => {
                      uni.navigateTo({
                        url: "/pages/exercise/ninegrid?grade=" + grade[g2.tapIndex] + "&essay_id=" + essay_id
                      });
                    }
                  });
                } else {
                  uni.showActionSheet({
                    title: "难度选择",
                    itemList: grade,
                    success: (g2) => {
                      uni.navigateTo({
                        url: "/pages/exercise/blank?grade=" + grade[g2.tapIndex] + "&essay_id=" + essay_id
                      });
                    }
                  });
                }
              }
            });
          }
        });
      }
      function savaAudio() {
        uni.navigateTo({
          url: "/pages/exercise/save_audio"
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$1);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_uni_nav_bar, {
              fixed: true,
              "status-bar": "",
              title: "英语练习",
              rightText: "音频缓存",
              onClickRight: _cache[0] || (_cache[0] = ($event) => savaAudio()),
              "background-color": "#F5F5F5",
              border: false
            }),
            vue.createCommentVNode(" 一级循环 "),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(englishCatalog), (category) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    class: vue.normalizeClass(category.show ? "oneshow" : "onehide")
                  },
                  [
                    vue.createElementVNode("view", {
                      class: "pronames-one-label",
                      onClick: ($event) => categorylist(category.id)
                    }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(category.label),
                        1
                        /* TEXT */
                      ),
                      category.show == false ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                        key: 0,
                        type: "forward"
                      })) : vue.createCommentVNode("v-if", true),
                      category.show == true ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                        key: 1,
                        type: "bottom"
                      })) : vue.createCommentVNode("v-if", true)
                    ], 8, ["onClick"]),
                    vue.createCommentVNode(" 二级循环 "),
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(category.textbooks, (textbook) => {
                        return vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            class: vue.normalizeClass(["pronames_two", textbook.show ? "twoshow" : "twohide"])
                          },
                          [
                            vue.createElementVNode("view", {
                              class: "pronames-two-label",
                              onClick: ($event) => textbooklist(textbook.pid, textbook.id)
                            }, [
                              vue.createElementVNode(
                                "text",
                                null,
                                vue.toDisplayString(textbook.label),
                                1
                                /* TEXT */
                              ),
                              textbook.show == false ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                                key: 0,
                                type: "forward"
                              })) : vue.createCommentVNode("v-if", true),
                              textbook.show == true ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                                key: 1,
                                type: "bottom"
                              })) : vue.createCommentVNode("v-if", true)
                            ], 8, ["onClick"]),
                            vue.createElementVNode("view", { class: "pronames_three" }, [
                              vue.createCommentVNode(" 三级循环 "),
                              (vue.openBlock(true), vue.createElementBlock(
                                vue.Fragment,
                                null,
                                vue.renderList(textbook.essays, (essay) => {
                                  return vue.openBlock(), vue.createElementBlock("view", { class: "pronames_three-label" }, [
                                    vue.createElementVNode(
                                      "text",
                                      { class: "essay_label" },
                                      vue.toDisplayString(essay.label),
                                      1
                                      /* TEXT */
                                    ),
                                    essay.type === "empty" ? (vue.openBlock(), vue.createElementBlock("text", {
                                      key: 0,
                                      style: { "position": "fixed", "display": "flex", "right": "28rpx", "font-size": "14px" }
                                    }, " 未添加文章")) : (vue.openBlock(), vue.createElementBlock("button", {
                                      key: 1,
                                      type: "primary",
                                      class: "small-button",
                                      onClick: ($event) => startDegree(essay.id)
                                    }, "开始测试", 8, ["onClick"]))
                                  ]);
                                }),
                                256
                                /* UNKEYED_FRAGMENT */
                              ))
                            ])
                          ],
                          2
                          /* CLASS */
                        );
                      }),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                );
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesExerciseIndex = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__file", "D:/Project/English/English_android/pages/exercise/index.vue"]]);
  const _sfc_main$n = {
    __name: "save_audio",
    setup(__props) {
      let essay_list = [];
      let englishCatalog = vue.ref();
      onShow(() => {
        https.post("/english/essay_list").then((res) => {
          essay_list = res.data;
        });
        getCatalog();
      });
      function getCatalog() {
        https.get("/english/essay_catalog").then((res) => {
          let temp = res.data.data;
          temp.forEach((item) => {
            item.show = false;
            item.textbooks.forEach((item1) => {
              item1.show = false;
              item1.essays.forEach((item2) => {
                item2.show = false;
              });
            });
          });
          englishCatalog.value = temp;
        }).catch(() => {
          uni.showToast({
            title: "未连接到服务器",
            icon: "error",
            duration: 3e3
          });
        });
      }
      function categorylist(id) {
        englishCatalog.value.forEach((item) => {
          if (item.id == id) {
            if (item.show == false) {
              item.show = true;
            } else {
              item.show = false;
            }
          } else {
            item.show = false;
          }
        });
      }
      function textbooklist(pid, id) {
        englishCatalog.value.forEach((item) => {
          if (item.id == pid) {
            item.textbooks.forEach((item1) => {
              if (item1.id == id) {
                if (item1.show == false) {
                  item1.show = true;
                } else {
                  item1.show = false;
                }
              } else {
                item1.show = false;
              }
            });
          }
        });
      }
      function save(id) {
        formatAppLog("log", "at pages/exercise/save_audio.vue:100", "开始缓存");
        let url_audio = "";
        essay_list.forEach((item) => {
          if (item.essay_id === id) {
            url_audio = item.audio_address;
          }
        });
        let dtask = plus.downloader.createDownload("http://192.168.43.200:8090" + url_audio, { filename: "/static/audios/" }, {
          function(d2, status) {
            formatAppLog("log", "at pages/exercise/save_audio.vue:109", d2);
            if (status == 200) {
              let fileSaveUrl = plus.io.convertLocalFileSystemURL(d2.filename);
              formatAppLog("log", "at pages/exercise/save_audio.vue:114", fileSaveUrl);
              formatAppLog("log", "at pages/exercise/save_audio.vue:115", d2);
            } else {
              plus.downloader.clear();
            }
          }
        });
        dtask.start();
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 一级循环 "),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(englishCatalog), (category) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    class: vue.normalizeClass(category.show ? "oneshow" : "onehide")
                  },
                  [
                    vue.createElementVNode("view", {
                      class: "pronames-one-label",
                      onClick: ($event) => categorylist(category.id)
                    }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(category.label),
                        1
                        /* TEXT */
                      ),
                      category.show == false ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                        key: 0,
                        type: "forward"
                      })) : vue.createCommentVNode("v-if", true),
                      category.show == true ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                        key: 1,
                        type: "bottom"
                      })) : vue.createCommentVNode("v-if", true)
                    ], 8, ["onClick"]),
                    vue.createCommentVNode(" 二级循环 "),
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(category.textbooks, (textbook) => {
                        return vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            class: vue.normalizeClass(["pronames_two", textbook.show ? "twoshow" : "twohide"])
                          },
                          [
                            vue.createElementVNode("view", {
                              class: "pronames-two-label",
                              onClick: ($event) => textbooklist(textbook.pid, textbook.id)
                            }, [
                              vue.createElementVNode(
                                "text",
                                null,
                                vue.toDisplayString(textbook.label),
                                1
                                /* TEXT */
                              ),
                              textbook.show == false ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                                key: 0,
                                type: "forward"
                              })) : vue.createCommentVNode("v-if", true),
                              textbook.show == true ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                                key: 1,
                                type: "bottom"
                              })) : vue.createCommentVNode("v-if", true)
                            ], 8, ["onClick"]),
                            vue.createElementVNode("view", { class: "pronames_three" }, [
                              vue.createCommentVNode(" 三级循环 "),
                              (vue.openBlock(true), vue.createElementBlock(
                                vue.Fragment,
                                null,
                                vue.renderList(textbook.essays, (essay) => {
                                  return vue.openBlock(), vue.createElementBlock("view", { class: "pronames_three-label" }, [
                                    vue.createElementVNode(
                                      "text",
                                      { class: "essay_label" },
                                      vue.toDisplayString(essay.label),
                                      1
                                      /* TEXT */
                                    ),
                                    vue.createElementVNode("button", {
                                      type: "primary",
                                      class: "small-button",
                                      onClick: ($event) => save(essay.id)
                                    }, "开始缓存", 8, ["onClick"])
                                  ]);
                                }),
                                256
                                /* UNKEYED_FRAGMENT */
                              ))
                            ])
                          ],
                          2
                          /* CLASS */
                        );
                      }),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                );
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const PagesExerciseSave_audio = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__file", "D:/Project/English/English_android/pages/exercise/save_audio.vue"]]);
  const _sfc_main$m = {
    __name: "ninegrid",
    setup(__props) {
      let word_list = vue.ref();
      let timer = null;
      let clock = null;
      const audioContext = uni.createInnerAudioContext();
      const essay = vue.reactive({
        essay_data: [],
        // 保存整篇文章的数据
        essay_length: "",
        // 保存句子的数量
        select_word: [],
        //保存选择出来的单词
        nine_select: [],
        //保存九宫格里的单词
        percentage: 0,
        //保存进度条的数据
        current_sentence: 0,
        //保存当前练习的句子
        current_word: 0,
        //保存当前要选择的单词
        start_audio: "",
        //音频开始时间
        pause_audio: "",
        //音频暂停时间
        end_audio: "",
        //音频结束时间
        translate: ""
      });
      const options = vue.reactive({
        translate_show: false,
        //管理翻译的存在
        isPlay: false,
        //管理录音开关的按钮
        word_num: 1,
        correct_num: 0,
        all_num: 0,
        clock: 0,
        select_time: 0,
        select_num: 0
      });
      const result_sentence = vue.reactive({
        user_id: JSON.parse(uni.getStorageSync("token")).user_id,
        essay_id: "",
        grade: "",
        sen_id: "",
        word: "",
        num: "",
        time: "",
        exercise_num: ""
      });
      const result_essay = vue.reactive({
        user_id: JSON.parse(uni.getStorageSync("token")).user_id,
        essay_id: "",
        grade: "",
        score: 0,
        time: "",
        exercise_num: ""
      });
      onLoad((e) => {
        result_essay.essay_id = e.essay_id;
        result_sentence.essay_id = e.essay_id;
        result_essay.grade = e.grade;
        result_sentence.grade = e.grade;
        https.post(
          "/english/sentence",
          {
            "essay_id": e.essay_id,
            "grade": e.grade,
            "user_id": JSON.parse(uni.getStorageSync("token")).user_id
          }
        ).then((res) => {
          essay.essay_data = res.data.data;
          essay.essay_length = res.data.data.length;
          audioContext.src = common.fronturl + res.data.audio_address;
          result_essay.exercise_num = res.data.exercise_num;
          result_sentence.exercise_num = res.data.exercise_num;
          essay.current_sentence = res.data.start_id;
          essay.percentage = (essay.current_sentence + 1) / parseInt(essay.essay_length) * 100;
          handleText(essay.essay_data[essay.current_sentence]);
          clock = setInterval(() => {
            options.clock++;
          }, 1e3);
        });
      });
      function handleText(sentenceData) {
        result_sentence.sen_id = sentenceData.sen_id;
        options.select_num = sentenceData.select_num;
        essay.translate = sentenceData.translate;
        essay.start_audio = sentenceData.audio_start;
        essay.end_audio = sentenceData.audio_end;
        essay.pause_audio = essay.start_audio;
        word_list.value = sentenceData.article;
        getNine();
      }
      function getNine() {
        essay.select_word = word_list.value.filter((item) => item.type === "select");
        if (essay.select_word.length === 0) {
          essay.nine_select = [];
        } else {
          essay.current_word = essay.select_word[0].id;
          essay.nine_select = shuffleArray(essay.select_word);
        }
      }
      function shuffleArray(arr) {
        let newArr = Array.from(arr);
        if (newArr.length > 9) {
          newArr = newArr.slice(0, 9);
          newArr.sort(() => Math.random() - 0.5);
        } else {
          newArr.sort(() => Math.random() - 0.5);
        }
        return newArr;
      }
      function play_audio() {
        if (audioContext.src != "") {
          options.isPlay = true;
          audioContext.seek(essay.pause_audio);
          audioContext.play();
          timer = setTimeout(() => {
            audioContext.pause();
            options.isPlay = false;
            essay.pause_audio = essay.start_audio;
          }, (essay.end_audio - essay.pause_audio) * 1e3);
        } else {
          uni.showToast({
            title: "该句子没有音频",
            position: "bottom"
          });
        }
      }
      function pause_audio() {
        clearTimeout(timer);
        options.isPlay = false;
        essay.pause_audio = audioContext.currentTime;
        audioContext.pause();
      }
      function translate() {
        if (essay.translate != "" && essay.translate != null) {
          if (options.translate_show == false) {
            options.translate_show = true;
          } else {
            options.translate_show = false;
          }
        } else {
          uni.showToast({
            title: "该句子没有翻译内容",
            position: "bottom"
          });
        }
      }
      function forward() {
        if (essay.select_word.length == 0) {
          options.translate_show = false;
          options.isPlay = false;
          audioContext.pause();
          if (result_sentence.word.split(",").filter((item) => item !== "").length == options.select_num && result_sentence.word != "") {
            https.post("/english/result_sentence", result_sentence).then(() => {
              result_sentence.word = "";
              result_sentence.num = "";
              result_sentence.time = "";
            });
          }
          if (essay.current_sentence < essay.essay_length - 1) {
            essay.current_sentence++;
            essay.percentage = (essay.current_sentence + 1) / parseInt(essay.essay_length) * 100;
            options.translate_show = false;
            options.isPlay = false;
            audioContext.pause();
            handleText(essay.essay_data[essay.current_sentence]);
          } else {
            result_essay.score = options.correct_num / options.all_num * 100;
            result_essay.time = options.clock.toString();
            clearInterval(clock);
            https.post("/english/result_essay", result_essay).then((res) => {
              if (res.data.code === 200) {
                uni.showToast({
                  title: "提交成功",
                  icon: "success",
                  duration: 3e3
                }), uni.navigateBack();
              }
            });
          }
        } else {
          uni.showToast({
            title: "请做完当前题",
            position: "bottom"
          });
        }
      }
      function back() {
        if (essay.current_sentence > 0) {
          essay.current_sentence--;
          essay.percentage = (essay.current_sentence + 1) / essay.essay_length * 100;
          options.translate_show = false;
          options.isPlay = false;
          audioContext.pause();
          handleText(essay.essay_data[essay.current_sentence]);
        } else {
          uni.showToast({
            title: "已经是第一句",
            position: "bottom"
          });
        }
      }
      function select_btn(e) {
        const word = word_list.value.filter((item) => item.id === e.id);
        let count = 0;
        if (essay.current_word === e.id) {
          essay.select_word.shift();
          word_list.value.forEach((word2) => {
            delete word2.status;
          });
          if (options.word_num === 1) {
            options.correct_num++;
            word[0].type = "correct";
          } else {
            word[0].type = "error";
          }
          result_sentence.word += e.id.toString() + ",";
          result_sentence.num += options.word_num.toString() + ",";
          result_sentence.time += (options.clock - options.select_time).toString() + ",";
          options.select_time = options.clock;
          options.word_num = 1;
          options.all_num++;
          if (essay.select_word.length !== 0) {
            getNine();
          } else {
            forward();
          }
        } else {
          word[0]["status"] = "error";
          word_list.value.forEach((word2) => {
            if (word2.status === "error") {
              count += 1;
            }
          });
          if (count === 3) {
            word_list.value.forEach((word2) => {
              delete word2.status;
            });
            getNine();
          }
          options.word_num++;
        }
      }
      function home() {
        audioContext.pause();
        clearInterval(clock);
        uni.navigateBack();
      }
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_uni_nav_bar, {
              fixed: true,
              "status-bar": "",
              "left-icon": "left",
              title: "选择练习",
              onClickLeft: _cache[0] || (_cache[0] = ($event) => home()),
              "background-color": "#F5F5F5",
              border: false
            }),
            vue.createElementVNode("progress", {
              percent: essay.percentage,
              style: { "padding": "12px 10px 8px" }
            }, null, 8, ["percent"]),
            vue.createElementVNode(
              "text",
              { style: { "padding": "8px 10px" } },
              "选择  " + vue.toDisplayString(essay.current_sentence + 1) + "/" + vue.toDisplayString(essay.essay_length),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "sentence_box" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(word_list), (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "sentence" }, [
                    item.type == "normal" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      { key: 0 },
                      vue.toDisplayString(item.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    item.type == "correct" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 1,
                        style: { "color": "ForestGreen" }
                      },
                      vue.toDisplayString(item.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    item.type == "error" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 2,
                        style: { "color": "crimson" }
                      },
                      vue.toDisplayString(item.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    item.type == "select" ? (vue.openBlock(), vue.createElementBlock("text", { key: 3 }, vue.toDisplayString("______"))) : vue.createCommentVNode("v-if", true)
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ]),
            options.translate_show ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: "translate_text"
              },
              vue.toDisplayString(essay.translate),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "select_grid" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(essay.nine_select, (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    style: { "margin-top": "5px", "margin-left": "5px" },
                    key: item.id
                  }, [
                    item.status === "error" ? (vue.openBlock(), vue.createElementBlock("button", {
                      key: 0,
                      class: "error_btn",
                      onClick: ($event) => select_btn(item)
                    }, vue.toDisplayString(item.text), 9, ["onClick"])) : (vue.openBlock(), vue.createElementBlock("button", {
                      key: 1,
                      class: "nine_btn",
                      onClick: ($event) => select_btn(item)
                    }, vue.toDisplayString(item.text), 9, ["onClick"]))
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("view", { class: "control" }, [
              vue.createElementVNode("view", { class: "audio_control" }, [
                vue.createElementVNode("image", {
                  src: "/static/icons/back.png",
                  style: { "width": "35px", "height": "35px", "margin-right": "8px" },
                  onClick: _cache[1] || (_cache[1] = ($event) => back())
                }),
                options.isPlay == true ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: "/static/icons/play.png",
                  style: { "width": "35px", "height": "35px" },
                  onClick: _cache[2] || (_cache[2] = ($event) => pause_audio())
                })) : vue.createCommentVNode("v-if", true),
                options.isPlay == false ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 1,
                  src: "/static/icons/pause.png",
                  style: { "width": "35px", "height": "35px" },
                  onClick: _cache[3] || (_cache[3] = ($event) => play_audio())
                })) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("image", {
                  src: "/static/icons/forward.png",
                  style: { "width": "35px", "height": "35px", "margin-left": "8px" },
                  onClick: _cache[4] || (_cache[4] = ($event) => forward())
                })
              ]),
              vue.createElementVNode("image", {
                src: "/static/icons/translate.png",
                class: "translate_btn",
                onClick: _cache[5] || (_cache[5] = ($event) => translate())
              })
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesExerciseNinegrid = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "D:/Project/English/English_android/pages/exercise/ninegrid.vue"]]);
  const _sfc_main$l = {
    __name: "blank",
    setup(__props) {
      let word_list = vue.ref();
      let timer = null;
      let clock = null;
      const audioContext = uni.createInnerAudioContext();
      const essay = vue.reactive({
        essay_data: [],
        // 保存整篇文章的数据
        essay_length: "",
        // 保存句子的数量
        select_word: [],
        //保存选择出来的单词
        nine_select: [],
        //保存九宫格里的单词
        percentage: 0,
        //保存进度条的数据
        current_sentence: 0,
        //保存当前练习的句子
        current_word: 0,
        //保存当前要选择的单词
        start_audio: "",
        //音频开始时间
        pause_audio: "",
        //音频暂停时间
        end_audio: "",
        //音频结束时间
        translate: ""
      });
      const options = vue.reactive({
        translate_show: false,
        //管理翻译的存在
        isPlay: false,
        //管理录音开关的按钮
        word_num: 1,
        correct_num: 0,
        all_num: 0,
        clock: 0,
        select_time: 0,
        select_num: 0
      });
      const result_sentence = vue.reactive({
        user_id: JSON.parse(uni.getStorageSync("token")).user_id,
        essay_id: "",
        grade: "",
        sen_id: "",
        word: "",
        num: "",
        time: "",
        exercise_num: ""
      });
      const result_essay = vue.reactive({
        user_id: JSON.parse(uni.getStorageSync("token")).user_id,
        essay_id: "",
        grade: "",
        score: 0,
        time: "",
        exercise_num: ""
      });
      onLoad((e) => {
        result_essay.essay_id = e.essay_id;
        result_sentence.essay_id = e.essay_id;
        result_essay.grade = e.grade;
        result_sentence.grade = e.grade;
        https.post(
          "/english/sentence",
          {
            "essay_id": e.essay_id,
            "grade": e.grade,
            "user_id": JSON.parse(uni.getStorageSync("token")).user_id
          }
        ).then((res) => {
          essay.essay_data = res.data.data;
          essay.essay_length = res.data.data.length;
          audioContext.src = common.fronturl + res.data.audio_address;
          result_essay.exercise_num = res.data.exercise_num;
          result_sentence.exercise_num = res.data.exercise_num;
          essay.current_sentence = res.data.start_id;
          essay.percentage = (essay.current_sentence + 1) / parseInt(essay.essay_length) * 100;
          handleText(essay.essay_data[essay.current_sentence]);
          clock = setInterval(() => {
            options.clock++;
          }, 1e3);
        });
      });
      function handleText(sentenceData) {
        result_sentence.sen_id = sentenceData.sen_id;
        options.select_num = sentenceData.select_num;
        essay.translate = sentenceData.translate;
        essay.start_audio = sentenceData.audio_start;
        essay.end_audio = sentenceData.audio_end;
        essay.pause_audio = essay.start_audio;
        word_list.value = sentenceData.article;
        word_list.value.forEach((item) => {
          if (item["type"] === "select") {
            item["answer"] = "";
          }
        });
      }
      function play_audio() {
        if (audioContext.src != "") {
          options.isPlay = true;
          audioContext.seek(essay.pause_audio);
          audioContext.play();
          timer = setTimeout(() => {
            audioContext.pause();
            options.isPlay = false;
            essay.pause_audio = essay.start_audio;
          }, (essay.end_audio - essay.pause_audio) * 1e3);
        } else {
          uni.showToast({
            title: "该句子没有音频",
            position: "bottom"
          });
        }
      }
      function pause_audio() {
        clearTimeout(timer);
        options.isPlay = false;
        essay.pause_audio = audioContext.currentTime;
        audioContext.pause();
      }
      function translate() {
        if (essay.translate != "" && essay.translate != null) {
          if (options.translate_show == false) {
            options.translate_show = true;
          } else {
            options.translate_show = false;
          }
        } else {
          uni.showToast({
            title: "该句子没有翻译内容",
            position: "bottom"
          });
        }
      }
      function forward() {
        if (essay.select_word.length == 0) {
          options.translate_show = false;
          options.isPlay = false;
          audioContext.pause();
          if (result_sentence.word.split(",").filter((item) => item !== "").length == options.select_num && result_sentence.word != "") {
            https.post("/english/result_sentence", result_sentence).then(() => {
              result_sentence.word = "";
              result_sentence.num = "";
              result_sentence.time = "";
            });
          }
          if (essay.current_sentence < essay.essay_length - 1) {
            essay.current_sentence++;
            essay.percentage = (essay.current_sentence + 1) / parseInt(essay.essay_length) * 100;
            options.translate_show = false;
            options.isPlay = false;
            audioContext.pause();
            handleText(essay.essay_data[essay.current_sentence]);
          } else {
            result_essay.score = options.correct_num / options.all_num * 100;
            result_essay.time = options.clock.toString();
            clearInterval(clock);
            https.post("/english/result_essay", result_essay).then((res) => {
              if (res.data.code === 200) {
                uni.showToast({
                  title: "提交成功",
                  icon: "success",
                  duration: 3e3
                }), uni.navigateBack();
              }
            });
          }
        } else {
          uni.showToast({
            title: "请做完当前题",
            position: "bottom"
          });
        }
      }
      function back() {
        if (essay.current_sentence > 0) {
          essay.current_sentence--;
          essay.percentage = (essay.current_sentence + 1) / essay.essay_length * 100;
          options.translate_show = false;
          options.isPlay = false;
          audioContext.pause();
          handleText(essay.essay_data[essay.current_sentence]);
        } else {
          uni.showToast({
            title: "已经是第一句",
            position: "bottom"
          });
        }
      }
      function blank_check(e) {
        let current_word = "";
        essay.select_word = word_list.value.filter((item) => item.type === "select");
        essay.select_word.forEach((item) => {
          if (item.id === e.id) {
            current_word = item.text;
          }
        });
        if (current_word === e.answer) {
          essay.select_word.shift();
          word_list.value.forEach((word) => {
            delete word.status;
          });
          if (options.word_num === 1) {
            options.correct_num++;
            e["type"] = "correct";
          } else {
            e["type"] = "error";
          }
          result_sentence.word += e.id.toString() + ",";
          result_sentence.num += options.word_num.toString() + ",";
          result_sentence.time += (options.clock - options.select_time).toString() + ",";
          options.select_time = options.clock;
          options.word_num = 1;
          options.all_num++;
          if (essay.select_word.length === 0) {
            forward();
          }
        } else {
          e["status"] = "error";
          options.word_num++;
        }
      }
      function home() {
        audioContext.pause();
        clearInterval(clock);
        uni.navigateBack();
      }
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_uni_nav_bar, {
              fixed: true,
              "status-bar": "",
              "left-icon": "left",
              title: "填空练习",
              onClickLeft: _cache[0] || (_cache[0] = ($event) => home()),
              "background-color": "#F5F5F5",
              border: false
            }),
            vue.createElementVNode("progress", {
              percent: essay.percentage,
              style: { "padding": "12px 10px 8px" }
            }, null, 8, ["percent"]),
            vue.createElementVNode(
              "text",
              { style: { "padding": "8px 10px" } },
              "填空  " + vue.toDisplayString(essay.current_sentence + 1) + "/" + vue.toDisplayString(essay.essay_length),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "sentence_box" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(word_list), (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "sentence" }, [
                    item.type == "normal" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      { key: 0 },
                      vue.toDisplayString(item.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    item.type == "correct" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 1,
                        style: { "color": "ForestGreen" }
                      },
                      vue.toDisplayString(item.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    item.type == "error" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 2,
                        style: { "color": "crimson" }
                      },
                      vue.toDisplayString(item.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    item.type == "select" && item.status == "error" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                      key: 3,
                      "onUpdate:modelValue": ($event) => item.answer = $event,
                      onBlur: ($event) => blank_check(item),
                      class: "error_input",
                      "auto-blur": ""
                    }, null, 40, ["onUpdate:modelValue", "onBlur"])), [
                      [vue.vModelText, item.answer]
                    ]) : vue.createCommentVNode("v-if", true),
                    item.type == "select" && item.status != "error" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                      key: 4,
                      "onUpdate:modelValue": ($event) => item.answer = $event,
                      onBlur: ($event) => blank_check(item),
                      class: "answer_input",
                      "auto-blur": ""
                    }, null, 40, ["onUpdate:modelValue", "onBlur"])), [
                      [vue.vModelText, item.answer]
                    ]) : vue.createCommentVNode("v-if", true)
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ]),
            options.translate_show ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: "translate_text"
              },
              vue.toDisplayString(essay.translate),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "control" }, [
              vue.createElementVNode("view", { class: "audio_control" }, [
                vue.createElementVNode("image", {
                  src: "/static/icons/back.png",
                  style: { "width": "35px", "height": "35px", "margin-right": "8px" },
                  onClick: _cache[1] || (_cache[1] = ($event) => back())
                }),
                options.isPlay == true ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: "/static/icons/play.png",
                  style: { "width": "35px", "height": "35px" },
                  onClick: _cache[2] || (_cache[2] = ($event) => pause_audio())
                })) : vue.createCommentVNode("v-if", true),
                options.isPlay == false ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 1,
                  src: "/static/icons/pause.png",
                  style: { "width": "35px", "height": "35px" },
                  onClick: _cache[3] || (_cache[3] = ($event) => play_audio())
                })) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("image", {
                  src: "/static/icons/forward.png",
                  style: { "width": "35px", "height": "35px", "margin-left": "8px" },
                  onClick: _cache[4] || (_cache[4] = ($event) => forward())
                })
              ]),
              vue.createElementVNode("image", {
                src: "/static/icons/translate.png",
                class: "translate_btn",
                onClick: _cache[5] || (_cache[5] = ($event) => translate())
              })
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesExerciseBlank = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "D:/Project/English/English_android/pages/exercise/blank.vue"]]);
  const _sfc_main$k = {
    __name: "index",
    setup(__props) {
      let classInfo = vue.ref();
      let token = JSON.parse(uni.getStorageSync("token"));
      onShow(() => {
        getClass();
      });
      function getClass() {
        if (token.role == "teacher") {
          https.post("/teacher/class_list", { "username": token.username }).then((res) => {
            classInfo.value = res.data;
          }).catch(() => {
            ElMessage.error("未连接到服务器");
          });
        } else if (token.role == "student") {
          https.post("/student/get_class", { "user_id": token.user_id }).then((res) => {
            classInfo.value = res.data;
          }).catch(() => {
            ElMessage.error("未连接到服务器");
          });
        }
      }
      function classDetails(item) {
        uni.navigateTo({
          url: "/pages/class_control/class_details?class_id=" + item.class_id
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(vue.unref(classInfo), (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              style: { "margin-top": "20rpx" },
              class: "item_tow",
              onClick: ($event) => classDetails(item)
            }, [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString(item.class_name),
                1
                /* TEXT */
              ),
              vue.createVNode(_component_uni_icons, { type: "forward" })
            ], 8, ["onClick"]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        );
      };
    }
  };
  const PagesClass_controlIndex = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "D:/Project/English/English_android/pages/class_control/index.vue"]]);
  const _sfc_main$j = {
    __name: "class_details",
    setup(__props) {
      let class_id = vue.ref();
      let teacher_name = vue.ref();
      let class_name = vue.ref();
      let class_code = vue.ref();
      let stu_num = vue.ref();
      let avatar = vue.ref();
      let classStu = vue.ref();
      let role = JSON.parse(uni.getStorageSync("token")).role;
      onLoad((e) => {
        https.post("/teacher/class_info", { "class_id": e.class_id }).then((res) => {
          class_id.value = res.data.class_id;
          teacher_name.value = res.data.teacher_name;
          class_name.value = res.data.class_name;
          class_code.value = res.data.class_code;
          stu_num.value = res.data.stu_num;
          https.post("/auth/get_teacher_info", { "username": res.data.teacher_name }).then((res2) => {
            avatar.value = common.fronturl + res2.data.avatar;
          });
          https.post("/teacher/class_student", { "class_id": e.class_id }).then((res2) => {
            classStu.value = res2.data.data;
          });
        }).catch(() => {
          ElMessage.error("未连接到服务器");
        });
      });
      function getExercise() {
        uni.navigateTo({
          url: "/pages/class_control/class_homework?class_id=" + class_id.value + "&teacher_name=" + teacher_name.value
        });
      }
      function getHomework() {
        uni.navigateTo({
          url: "/pages/homework/student_homework?class_id=" + class_id.value + "&user_id=" + JSON.parse(uni.getStorageSync("token")).user_id
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { style: { "height": "210rpx", "background-color": "DarkGray" } }, [
              vue.createElementVNode("view", { class: "container" }, [
                vue.createElementVNode("image", {
                  src: vue.unref(avatar),
                  class: "avatar"
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  { style: { "color": "#fff", "font-size": "33rpx" } },
                  vue.toDisplayString(vue.unref(teacher_name) + "老师"),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "className" }, [
                vue.createElementVNode(
                  "text",
                  { style: { "font-size": "38rpx", "margin-bottom": "10rpx" } },
                  vue.toDisplayString(vue.unref(class_name)),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  { style: { "background-color": "#fff", "color": "cornflowerblue", "width": "100rpx", "margin-bottom": "10rpx" } },
                  vue.toDisplayString("共 " + vue.unref(stu_num) + " 人"),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(vue.unref(class_code)),
                  1
                  /* TEXT */
                )
              ]),
              vue.unref(role) === "teacher" ? (vue.openBlock(), vue.createElementBlock("button", {
                key: 0,
                style: { "width": "181rpx", "position": "absolute", "top": "10%", "right": "5%" },
                type: "primary",
                size: "mini",
                onClick: _cache[0] || (_cache[0] = ($event) => getExercise())
              }, "作业管理")) : vue.createCommentVNode("v-if", true),
              vue.unref(role) === "student" ? (vue.openBlock(), vue.createElementBlock("button", {
                key: 1,
                style: { "width": "181rpx", "position": "absolute", "top": "10%", "right": "5%" },
                type: "primary",
                size: "mini",
                onClick: _cache[1] || (_cache[1] = ($event) => getHomework())
              }, "我的作业")) : vue.createCommentVNode("v-if", true)
            ]),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(classStu), (item) => {
                return vue.openBlock(), vue.createElementBlock("view", { style: { "margin-top": "3%", "margin-left": "3%", "display": "flex", "flex-direction": "row", "border-bottom": "1px solid black", "padding-bottom": "3%" } }, [
                  vue.createElementVNode("image", {
                    src: vue.unref(common).fronturl + item.avatar,
                    style: { "width": "40px", "height": "40px", "border-radius": "40rpx" }
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { style: { "margin-left": "3%", "display": "flex", "flex-direction": "column" } }, [
                    vue.createElementVNode(
                      "text",
                      { style: { "font-size": "40rpx" } },
                      vue.toDisplayString(item.username),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { style: { "font-size": "25rpx" } },
                      vue.toDisplayString("邮箱：" + item.email),
                      1
                      /* TEXT */
                    )
                  ])
                ]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesClass_controlClass_details = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "D:/Project/English/English_android/pages/class_control/class_details.vue"]]);
  let Calendar$1 = class Calendar {
    constructor({
      selected,
      startDate,
      endDate,
      range
    } = {}) {
      this.date = this.getDateObj(/* @__PURE__ */ new Date());
      this.selected = selected || [];
      this.startDate = startDate;
      this.endDate = endDate;
      this.range = range;
      this.cleanMultipleStatus();
      this.weeks = {};
      this.lastHover = false;
    }
    /**
     * 设置日期
     * @param {Object} date
     */
    setDate(date) {
      const selectDate = this.getDateObj(date);
      this.getWeeks(selectDate.fullDate);
    }
    /**
     * 清理多选状态
     */
    cleanMultipleStatus() {
      this.multipleStatus = {
        before: "",
        after: "",
        data: []
      };
    }
    setStartDate(startDate) {
      this.startDate = startDate;
    }
    setEndDate(endDate) {
      this.endDate = endDate;
    }
    getPreMonthObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      const oldMonth = date.getMonth();
      date.setMonth(oldMonth - 1);
      const newMonth = date.getMonth();
      if (oldMonth !== 0 && newMonth - oldMonth === 0) {
        date.setMonth(newMonth - 1);
      }
      return this.getDateObj(date);
    }
    getNextMonthObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      const oldMonth = date.getMonth();
      date.setMonth(oldMonth + 1);
      const newMonth = date.getMonth();
      if (newMonth - oldMonth > 1) {
        date.setMonth(newMonth - 1);
      }
      return this.getDateObj(date);
    }
    /**
     * 获取指定格式Date对象
     */
    getDateObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      return {
        fullDate: getDate(date),
        year: date.getFullYear(),
        month: addZero(date.getMonth() + 1),
        date: addZero(date.getDate()),
        day: date.getDay()
      };
    }
    /**
     * 获取上一个月日期集合
     */
    getPreMonthDays(amount, dateObj) {
      const result = [];
      for (let i2 = amount - 1; i2 >= 0; i2--) {
        const month = dateObj.month - 1;
        result.push({
          date: new Date(dateObj.year, month, -i2).getDate(),
          month,
          disable: true
        });
      }
      return result;
    }
    /**
     * 获取本月日期集合
     */
    getCurrentMonthDays(amount, dateObj) {
      const result = [];
      const fullDate = this.date.fullDate;
      for (let i2 = 1; i2 <= amount; i2++) {
        const currentDate = `${dateObj.year}-${dateObj.month}-${addZero(i2)}`;
        const isToday = fullDate === currentDate;
        const info = this.selected && this.selected.find((item) => {
          if (this.dateEqual(currentDate, item.date)) {
            return item;
          }
        });
        if (this.startDate) {
          dateCompare(this.startDate, currentDate);
        }
        if (this.endDate) {
          dateCompare(currentDate, this.endDate);
        }
        let multiples = this.multipleStatus.data;
        let multiplesStatus = -1;
        if (this.range && multiples) {
          multiplesStatus = multiples.findIndex((item) => {
            return this.dateEqual(item, currentDate);
          });
        }
        const checked = multiplesStatus !== -1;
        result.push({
          fullDate: currentDate,
          year: dateObj.year,
          date: i2,
          multiple: this.range ? checked : false,
          beforeMultiple: this.isLogicBefore(currentDate, this.multipleStatus.before, this.multipleStatus.after),
          afterMultiple: this.isLogicAfter(currentDate, this.multipleStatus.before, this.multipleStatus.after),
          month: dateObj.month,
          disable: this.startDate && !dateCompare(this.startDate, currentDate) || this.endDate && !dateCompare(currentDate, this.endDate),
          isToday,
          userChecked: false,
          extraInfo: info
        });
      }
      return result;
    }
    /**
     * 获取下一个月日期集合
     */
    _getNextMonthDays(amount, dateObj) {
      const result = [];
      const month = dateObj.month + 1;
      for (let i2 = 1; i2 <= amount; i2++) {
        result.push({
          date: i2,
          month,
          disable: true
        });
      }
      return result;
    }
    /**
     * 获取当前日期详情
     * @param {Object} date
     */
    getInfo(date) {
      if (!date) {
        date = /* @__PURE__ */ new Date();
      }
      return this.calendar.find((item) => item.fullDate === this.getDateObj(date).fullDate);
    }
    /**
     * 比较时间是否相等
     */
    dateEqual(before, after) {
      before = new Date(fixIosDateFormat(before));
      after = new Date(fixIosDateFormat(after));
      return before.valueOf() === after.valueOf();
    }
    /**
     *  比较真实起始日期
     */
    isLogicBefore(currentDate, before, after) {
      let logicBefore = before;
      if (before && after) {
        logicBefore = dateCompare(before, after) ? before : after;
      }
      return this.dateEqual(logicBefore, currentDate);
    }
    isLogicAfter(currentDate, before, after) {
      let logicAfter = after;
      if (before && after) {
        logicAfter = dateCompare(before, after) ? after : before;
      }
      return this.dateEqual(logicAfter, currentDate);
    }
    /**
     * 获取日期范围内所有日期
     * @param {Object} begin
     * @param {Object} end
     */
    geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split("-");
      var ae2 = end.split("-");
      var db = /* @__PURE__ */ new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de2 = /* @__PURE__ */ new Date();
      de2.setFullYear(ae2[0], ae2[1] - 1, ae2[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1e3;
      var unixDe = de2.getTime() - 24 * 60 * 60 * 1e3;
      for (var k2 = unixDb; k2 <= unixDe; ) {
        k2 = k2 + 24 * 60 * 60 * 1e3;
        arr.push(this.getDateObj(new Date(parseInt(k2))).fullDate);
      }
      return arr;
    }
    /**
     *  获取多选状态
     */
    setMultiple(fullDate) {
      if (!this.range)
        return;
      let {
        before,
        after
      } = this.multipleStatus;
      if (before && after) {
        if (!this.lastHover) {
          this.lastHover = true;
          return;
        }
        this.multipleStatus.before = fullDate;
        this.multipleStatus.after = "";
        this.multipleStatus.data = [];
        this.multipleStatus.fulldate = "";
        this.lastHover = false;
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
          this.lastHover = false;
        } else {
          this.multipleStatus.after = fullDate;
          if (dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
          this.lastHover = true;
        }
      }
      this.getWeeks(fullDate);
    }
    /**
     *  鼠标 hover 更新多选状态
     */
    setHoverMultiple(fullDate) {
      if (!this.range || this.lastHover)
        return;
      const { before } = this.multipleStatus;
      if (!before) {
        this.multipleStatus.before = fullDate;
      } else {
        this.multipleStatus.after = fullDate;
        if (dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
        } else {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
        }
      }
      this.getWeeks(fullDate);
    }
    /**
     * 更新默认值多选状态
     */
    setDefaultMultiple(before, after) {
      this.multipleStatus.before = before;
      this.multipleStatus.after = after;
      if (before && after) {
        if (dateCompare(before, after)) {
          this.multipleStatus.data = this.geDateAll(before, after);
          this.getWeeks(after);
        } else {
          this.multipleStatus.data = this.geDateAll(after, before);
          this.getWeeks(before);
        }
      }
    }
    /**
     * 获取每周数据
     * @param {Object} dateData
     */
    getWeeks(dateData) {
      const {
        year,
        month
      } = this.getDateObj(dateData);
      const preMonthDayAmount = new Date(year, month - 1, 1).getDay();
      const preMonthDays = this.getPreMonthDays(preMonthDayAmount, this.getDateObj(dateData));
      const currentMonthDayAmount = new Date(year, month, 0).getDate();
      const currentMonthDays = this.getCurrentMonthDays(currentMonthDayAmount, this.getDateObj(dateData));
      const nextMonthDayAmount = 42 - preMonthDayAmount - currentMonthDayAmount;
      const nextMonthDays = this._getNextMonthDays(nextMonthDayAmount, this.getDateObj(dateData));
      const calendarDays = [...preMonthDays, ...currentMonthDays, ...nextMonthDays];
      const weeks = new Array(6);
      for (let i2 = 0; i2 < calendarDays.length; i2++) {
        const index = Math.floor(i2 / 7);
        if (!weeks[index]) {
          weeks[index] = new Array(7);
        }
        weeks[index][i2 % 7] = calendarDays[i2];
      }
      this.calendar = calendarDays;
      this.weeks = weeks;
    }
  };
  function getDateTime(date, hideSecond) {
    return `${getDate(date)} ${getTime(date, hideSecond)}`;
  }
  function getDate(date) {
    date = fixIosDateFormat(date);
    date = new Date(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${addZero(month)}-${addZero(day)}`;
  }
  function getTime(date, hideSecond) {
    date = fixIosDateFormat(date);
    date = new Date(date);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return hideSecond ? `${addZero(hour)}:${addZero(minute)}` : `${addZero(hour)}:${addZero(minute)}:${addZero(second)}`;
  }
  function addZero(num) {
    if (num < 10) {
      num = `0${num}`;
    }
    return num;
  }
  function getDefaultSecond(hideSecond) {
    return hideSecond ? "00:00" : "00:00:00";
  }
  function dateCompare(startDate, endDate) {
    startDate = new Date(fixIosDateFormat(startDate));
    endDate = new Date(fixIosDateFormat(endDate));
    return startDate <= endDate;
  }
  function checkDate(date) {
    const dateReg = /((19|20)\d{2})(-|\/)\d{1,2}(-|\/)\d{1,2}/g;
    return date.match(dateReg);
  }
  const dateTimeReg = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])( [0-5][0-9]:[0-5][0-9]:[0-5][0-9])?$/;
  function fixIosDateFormat(value) {
    if (typeof value === "string" && dateTimeReg.test(value)) {
      value = value.replace(/-/g, "/");
    }
    return value;
  }
  const _sfc_main$i = {
    props: {
      weeks: {
        type: Object,
        default() {
          return {};
        }
      },
      calendar: {
        type: Object,
        default: () => {
          return {};
        }
      },
      selected: {
        type: Array,
        default: () => {
          return [];
        }
      },
      checkHover: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      choiceDate(weeks) {
        this.$emit("change", weeks);
      },
      handleMousemove(weeks) {
        this.$emit("handleMouse", weeks);
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-calendar-item__weeks-box", {
          "uni-calendar-item--disable": $props.weeks.disable,
          "uni-calendar-item--before-checked-x": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked-x": $props.weeks.afterMultiple
        }]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.choiceDate($props.weeks)),
        onMouseenter: _cache[1] || (_cache[1] = ($event) => $options.handleMousemove($props.weeks))
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-calendar-item__weeks-box-item", {
              "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && ($props.calendar.userChecked || !$props.checkHover),
              "uni-calendar-item--checked-range-text": $props.checkHover,
              "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
              "uni-calendar-item--multiple": $props.weeks.multiple,
              "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
              "uni-calendar-item--disable": $props.weeks.disable
            }])
          },
          [
            $props.selected && $props.weeks.extraInfo ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "uni-calendar-item__weeks-box-circle"
            })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "text",
              { class: "uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text" },
              vue.toDisplayString($props.weeks.date),
              1
              /* TEXT */
            )
          ],
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass({ "uni-calendar-item--today": $props.weeks.isToday })
          },
          null,
          2
          /* CLASS */
        )
      ],
      34
      /* CLASS, HYDRATE_EVENTS */
    );
  }
  const calendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$4], ["__scopeId", "data-v-3c762a01"], ["__file", "D:/Project/English/English_android/uni_modules/uni-datetime-picker/components/uni-datetime-picker/calendar-item.vue"]]);
  const en = {
    "uni-datetime-picker.selectDate": "select date",
    "uni-datetime-picker.selectTime": "select time",
    "uni-datetime-picker.selectDateTime": "select date and time",
    "uni-datetime-picker.startDate": "start date",
    "uni-datetime-picker.endDate": "end date",
    "uni-datetime-picker.startTime": "start time",
    "uni-datetime-picker.endTime": "end time",
    "uni-datetime-picker.ok": "ok",
    "uni-datetime-picker.clear": "clear",
    "uni-datetime-picker.cancel": "cancel",
    "uni-datetime-picker.year": "-",
    "uni-datetime-picker.month": "",
    "uni-calender.MON": "MON",
    "uni-calender.TUE": "TUE",
    "uni-calender.WED": "WED",
    "uni-calender.THU": "THU",
    "uni-calender.FRI": "FRI",
    "uni-calender.SAT": "SAT",
    "uni-calender.SUN": "SUN",
    "uni-calender.confirm": "confirm"
  };
  const zhHans = {
    "uni-datetime-picker.selectDate": "选择日期",
    "uni-datetime-picker.selectTime": "选择时间",
    "uni-datetime-picker.selectDateTime": "选择日期时间",
    "uni-datetime-picker.startDate": "开始日期",
    "uni-datetime-picker.endDate": "结束日期",
    "uni-datetime-picker.startTime": "开始时间",
    "uni-datetime-picker.endTime": "结束时间",
    "uni-datetime-picker.ok": "确定",
    "uni-datetime-picker.clear": "清除",
    "uni-datetime-picker.cancel": "取消",
    "uni-datetime-picker.year": "年",
    "uni-datetime-picker.month": "月",
    "uni-calender.SUN": "日",
    "uni-calender.MON": "一",
    "uni-calender.TUE": "二",
    "uni-calender.WED": "三",
    "uni-calender.THU": "四",
    "uni-calender.FRI": "五",
    "uni-calender.SAT": "六",
    "uni-calender.confirm": "确认"
  };
  const zhHant = {
    "uni-datetime-picker.selectDate": "選擇日期",
    "uni-datetime-picker.selectTime": "選擇時間",
    "uni-datetime-picker.selectDateTime": "選擇日期時間",
    "uni-datetime-picker.startDate": "開始日期",
    "uni-datetime-picker.endDate": "結束日期",
    "uni-datetime-picker.startTime": "開始时间",
    "uni-datetime-picker.endTime": "結束时间",
    "uni-datetime-picker.ok": "確定",
    "uni-datetime-picker.clear": "清除",
    "uni-datetime-picker.cancel": "取消",
    "uni-datetime-picker.year": "年",
    "uni-datetime-picker.month": "月",
    "uni-calender.SUN": "日",
    "uni-calender.MON": "一",
    "uni-calender.TUE": "二",
    "uni-calender.WED": "三",
    "uni-calender.THU": "四",
    "uni-calender.FRI": "五",
    "uni-calender.SAT": "六",
    "uni-calender.confirm": "確認"
  };
  const i18nMessages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t: t$1 } = initVueI18n(i18nMessages);
  const _sfc_main$h = {
    name: "UniDatetimePicker",
    data() {
      return {
        indicatorStyle: `height: 50px;`,
        visible: false,
        fixNvueBug: {},
        dateShow: true,
        timeShow: true,
        title: "日期和时间",
        // 输入框当前时间
        time: "",
        // 当前的年月日时分秒
        year: 1920,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        // 起始时间
        startYear: 1920,
        startMonth: 1,
        startDay: 1,
        startHour: 0,
        startMinute: 0,
        startSecond: 0,
        // 结束时间
        endYear: 2120,
        endMonth: 12,
        endDay: 31,
        endHour: 23,
        endMinute: 59,
        endSecond: 59
      };
    },
    props: {
      type: {
        type: String,
        default: "datetime"
      },
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      start: {
        type: [Number, String],
        default: ""
      },
      end: {
        type: [Number, String],
        default: ""
      },
      returnType: {
        type: String,
        default: "string"
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      hideSecond: {
        type: [Boolean, String],
        default: false
      }
    },
    watch: {
      modelValue: {
        handler(newVal) {
          if (newVal) {
            this.parseValue(fixIosDateFormat(newVal));
            this.initTime(false);
          } else {
            this.time = "";
            this.parseValue(Date.now());
          }
        },
        immediate: true
      },
      type: {
        handler(newValue) {
          if (newValue === "date") {
            this.dateShow = true;
            this.timeShow = false;
            this.title = "日期";
          } else if (newValue === "time") {
            this.dateShow = false;
            this.timeShow = true;
            this.title = "时间";
          } else {
            this.dateShow = true;
            this.timeShow = true;
            this.title = "日期和时间";
          }
        },
        immediate: true
      },
      start: {
        handler(newVal) {
          this.parseDatetimeRange(fixIosDateFormat(newVal), "start");
        },
        immediate: true
      },
      end: {
        handler(newVal) {
          this.parseDatetimeRange(fixIosDateFormat(newVal), "end");
        },
        immediate: true
      },
      // 月、日、时、分、秒可选范围变化后，检查当前值是否在范围内，不在则当前值重置为可选范围第一项
      months(newVal) {
        this.checkValue("month", this.month, newVal);
      },
      days(newVal) {
        this.checkValue("day", this.day, newVal);
      },
      hours(newVal) {
        this.checkValue("hour", this.hour, newVal);
      },
      minutes(newVal) {
        this.checkValue("minute", this.minute, newVal);
      },
      seconds(newVal) {
        this.checkValue("second", this.second, newVal);
      }
    },
    computed: {
      // 当前年、月、日、时、分、秒选择范围
      years() {
        return this.getCurrentRange("year");
      },
      months() {
        return this.getCurrentRange("month");
      },
      days() {
        return this.getCurrentRange("day");
      },
      hours() {
        return this.getCurrentRange("hour");
      },
      minutes() {
        return this.getCurrentRange("minute");
      },
      seconds() {
        return this.getCurrentRange("second");
      },
      // picker 当前值数组
      ymd() {
        return [this.year - this.minYear, this.month - this.minMonth, this.day - this.minDay];
      },
      hms() {
        return [this.hour - this.minHour, this.minute - this.minMinute, this.second - this.minSecond];
      },
      // 当前 date 是 start
      currentDateIsStart() {
        return this.year === this.startYear && this.month === this.startMonth && this.day === this.startDay;
      },
      // 当前 date 是 end
      currentDateIsEnd() {
        return this.year === this.endYear && this.month === this.endMonth && this.day === this.endDay;
      },
      // 当前年、月、日、时、分、秒的最小值和最大值
      minYear() {
        return this.startYear;
      },
      maxYear() {
        return this.endYear;
      },
      minMonth() {
        if (this.year === this.startYear) {
          return this.startMonth;
        } else {
          return 1;
        }
      },
      maxMonth() {
        if (this.year === this.endYear) {
          return this.endMonth;
        } else {
          return 12;
        }
      },
      minDay() {
        if (this.year === this.startYear && this.month === this.startMonth) {
          return this.startDay;
        } else {
          return 1;
        }
      },
      maxDay() {
        if (this.year === this.endYear && this.month === this.endMonth) {
          return this.endDay;
        } else {
          return this.daysInMonth(this.year, this.month);
        }
      },
      minHour() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart) {
            return this.startHour;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          return this.startHour;
        }
      },
      maxHour() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd) {
            return this.endHour;
          } else {
            return 23;
          }
        }
        if (this.type === "time") {
          return this.endHour;
        }
      },
      minMinute() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart && this.hour === this.startHour) {
            return this.startMinute;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.startHour) {
            return this.startMinute;
          } else {
            return 0;
          }
        }
      },
      maxMinute() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd && this.hour === this.endHour) {
            return this.endMinute;
          } else {
            return 59;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.endHour) {
            return this.endMinute;
          } else {
            return 59;
          }
        }
      },
      minSecond() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart && this.hour === this.startHour && this.minute === this.startMinute) {
            return this.startSecond;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.startHour && this.minute === this.startMinute) {
            return this.startSecond;
          } else {
            return 0;
          }
        }
      },
      maxSecond() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd && this.hour === this.endHour && this.minute === this.endMinute) {
            return this.endSecond;
          } else {
            return 59;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.endHour && this.minute === this.endMinute) {
            return this.endSecond;
          } else {
            return 59;
          }
        }
      },
      /**
       * for i18n
       */
      selectTimeText() {
        return t$1("uni-datetime-picker.selectTime");
      },
      okText() {
        return t$1("uni-datetime-picker.ok");
      },
      clearText() {
        return t$1("uni-datetime-picker.clear");
      },
      cancelText() {
        return t$1("uni-datetime-picker.cancel");
      }
    },
    mounted() {
    },
    methods: {
      /**
       * @param {Object} item
       * 小于 10 在前面加个 0
       */
      lessThanTen(item) {
        return item < 10 ? "0" + item : item;
      },
      /**
       * 解析时分秒字符串，例如：00:00:00
       * @param {String} timeString
       */
      parseTimeType(timeString) {
        if (timeString) {
          let timeArr = timeString.split(":");
          this.hour = Number(timeArr[0]);
          this.minute = Number(timeArr[1]);
          this.second = Number(timeArr[2]);
        }
      },
      /**
       * 解析选择器初始值，类型可以是字符串、时间戳，例如：2000-10-02、'08:30:00'、 1610695109000
       * @param {String | Number} datetime
       */
      initPickerValue(datetime) {
        let defaultValue = null;
        if (datetime) {
          defaultValue = this.compareValueWithStartAndEnd(datetime, this.start, this.end);
        } else {
          defaultValue = Date.now();
          defaultValue = this.compareValueWithStartAndEnd(defaultValue, this.start, this.end);
        }
        this.parseValue(defaultValue);
      },
      /**
       * 初始值规则：
       * - 用户设置初始值 value
       * 	- 设置了起始时间 start、终止时间 end，并 start < value < end，初始值为 value， 否则初始值为 start
       * 	- 只设置了起始时间 start，并 start < value，初始值为 value，否则初始值为 start
       * 	- 只设置了终止时间 end，并 value < end，初始值为 value，否则初始值为 end
       * 	- 无起始终止时间，则初始值为 value
       * - 无初始值 value，则初始值为当前本地时间 Date.now()
       * @param {Object} value
       * @param {Object} dateBase
       */
      compareValueWithStartAndEnd(value, start, end) {
        let winner = null;
        value = this.superTimeStamp(value);
        start = this.superTimeStamp(start);
        end = this.superTimeStamp(end);
        if (start && end) {
          if (value < start) {
            winner = new Date(start);
          } else if (value > end) {
            winner = new Date(end);
          } else {
            winner = new Date(value);
          }
        } else if (start && !end) {
          winner = start <= value ? new Date(value) : new Date(start);
        } else if (!start && end) {
          winner = value <= end ? new Date(value) : new Date(end);
        } else {
          winner = new Date(value);
        }
        return winner;
      },
      /**
       * 转换为可比较的时间戳，接受日期、时分秒、时间戳
       * @param {Object} value
       */
      superTimeStamp(value) {
        let dateBase = "";
        if (this.type === "time" && value && typeof value === "string") {
          const now = /* @__PURE__ */ new Date();
          const year = now.getFullYear();
          const month = now.getMonth() + 1;
          const day = now.getDate();
          dateBase = year + "/" + month + "/" + day + " ";
        }
        if (Number(value)) {
          value = parseInt(value);
          dateBase = 0;
        }
        return this.createTimeStamp(dateBase + value);
      },
      /**
       * 解析默认值 value，字符串、时间戳
       * @param {Object} defaultTime
       */
      parseValue(value) {
        if (!value) {
          return;
        }
        if (this.type === "time" && typeof value === "string") {
          this.parseTimeType(value);
        } else {
          let defaultDate = null;
          defaultDate = new Date(value);
          if (this.type !== "time") {
            this.year = defaultDate.getFullYear();
            this.month = defaultDate.getMonth() + 1;
            this.day = defaultDate.getDate();
          }
          if (this.type !== "date") {
            this.hour = defaultDate.getHours();
            this.minute = defaultDate.getMinutes();
            this.second = defaultDate.getSeconds();
          }
        }
        if (this.hideSecond) {
          this.second = 0;
        }
      },
      /**
       * 解析可选择时间范围 start、end，年月日字符串、时间戳
       * @param {Object} defaultTime
       */
      parseDatetimeRange(point, pointType) {
        if (!point) {
          if (pointType === "start") {
            this.startYear = 1920;
            this.startMonth = 1;
            this.startDay = 1;
            this.startHour = 0;
            this.startMinute = 0;
            this.startSecond = 0;
          }
          if (pointType === "end") {
            this.endYear = 2120;
            this.endMonth = 12;
            this.endDay = 31;
            this.endHour = 23;
            this.endMinute = 59;
            this.endSecond = 59;
          }
          return;
        }
        if (this.type === "time") {
          const pointArr = point.split(":");
          this[pointType + "Hour"] = Number(pointArr[0]);
          this[pointType + "Minute"] = Number(pointArr[1]);
          this[pointType + "Second"] = Number(pointArr[2]);
        } else {
          if (!point) {
            pointType === "start" ? this.startYear = this.year - 60 : this.endYear = this.year + 60;
            return;
          }
          if (Number(point)) {
            point = parseInt(point);
          }
          const hasTime = /[0-9]:[0-9]/;
          if (this.type === "datetime" && pointType === "end" && typeof point === "string" && !hasTime.test(
            point
          )) {
            point = point + " 23:59:59";
          }
          const pointDate = new Date(point);
          this[pointType + "Year"] = pointDate.getFullYear();
          this[pointType + "Month"] = pointDate.getMonth() + 1;
          this[pointType + "Day"] = pointDate.getDate();
          if (this.type === "datetime") {
            this[pointType + "Hour"] = pointDate.getHours();
            this[pointType + "Minute"] = pointDate.getMinutes();
            this[pointType + "Second"] = pointDate.getSeconds();
          }
        }
      },
      // 获取 年、月、日、时、分、秒 当前可选范围
      getCurrentRange(value) {
        const range = [];
        for (let i2 = this["min" + this.capitalize(value)]; i2 <= this["max" + this.capitalize(value)]; i2++) {
          range.push(i2);
        }
        return range;
      },
      // 字符串首字母大写
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
      // 检查当前值是否在范围内，不在则当前值重置为可选范围第一项
      checkValue(name, value, values) {
        if (values.indexOf(value) === -1) {
          this[name] = values[0];
        }
      },
      // 每个月的实际天数
      daysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      },
      //兼容 iOS、safari 日期格式
      fixIosDateFormat(value) {
        if (typeof value === "string") {
          value = value.replace(/-/g, "/");
        }
        return value;
      },
      /**
       * 生成时间戳
       * @param {Object} time
       */
      createTimeStamp(time) {
        if (!time)
          return;
        if (typeof time === "number") {
          return time;
        } else {
          time = time.replace(/-/g, "/");
          if (this.type === "date") {
            time = time + " 00:00:00";
          }
          return Date.parse(time);
        }
      },
      /**
       * 生成日期或时间的字符串
       */
      createDomSting() {
        const yymmdd = this.year + "-" + this.lessThanTen(this.month) + "-" + this.lessThanTen(this.day);
        let hhmmss = this.lessThanTen(this.hour) + ":" + this.lessThanTen(this.minute);
        if (!this.hideSecond) {
          hhmmss = hhmmss + ":" + this.lessThanTen(this.second);
        }
        if (this.type === "date") {
          return yymmdd;
        } else if (this.type === "time") {
          return hhmmss;
        } else {
          return yymmdd + " " + hhmmss;
        }
      },
      /**
       * 初始化返回值，并抛出 change 事件
       */
      initTime(emit = true) {
        this.time = this.createDomSting();
        if (!emit)
          return;
        if (this.returnType === "timestamp" && this.type !== "time") {
          this.$emit("change", this.createTimeStamp(this.time));
          this.$emit("input", this.createTimeStamp(this.time));
          this.$emit("update:modelValue", this.createTimeStamp(this.time));
        } else {
          this.$emit("change", this.time);
          this.$emit("input", this.time);
          this.$emit("update:modelValue", this.time);
        }
      },
      /**
       * 用户选择日期或时间更新 data
       * @param {Object} e
       */
      bindDateChange(e) {
        const val = e.detail.value;
        this.year = this.years[val[0]];
        this.month = this.months[val[1]];
        this.day = this.days[val[2]];
      },
      bindTimeChange(e) {
        const val = e.detail.value;
        this.hour = this.hours[val[0]];
        this.minute = this.minutes[val[1]];
        this.second = this.seconds[val[2]];
      },
      /**
       * 初始化弹出层
       */
      initTimePicker() {
        if (this.disabled)
          return;
        const value = fixIosDateFormat(this.time);
        this.initPickerValue(value);
        this.visible = !this.visible;
      },
      /**
       * 触发或关闭弹框
       */
      tiggerTimePicker(e) {
        this.visible = !this.visible;
      },
      /**
       * 用户点击“清空”按钮，清空当前值
       */
      clearTime() {
        this.time = "";
        this.$emit("change", this.time);
        this.$emit("input", this.time);
        this.$emit("update:modelValue", this.time);
        this.tiggerTimePicker();
      },
      /**
       * 用户点击“确定”按钮
       */
      setTime() {
        this.initTime();
        this.tiggerTimePicker();
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-datetime-picker" }, [
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.initTimePicker && $options.initTimePicker(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-datetime-picker-timebox-pointer", { "uni-datetime-picker-disabled": $props.disabled, "uni-datetime-picker-timebox": $props.border }])
            },
            [
              vue.createElementVNode(
                "text",
                { class: "uni-datetime-picker-text" },
                vue.toDisplayString($data.time),
                1
                /* TEXT */
              ),
              !$data.time ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-datetime-picker-time"
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-datetime-picker-text" },
                  vue.toDisplayString($options.selectTimeText),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ], true)
      ]),
      $data.visible ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        id: "mask",
        class: "uni-datetime-picker-mask",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.tiggerTimePicker && $options.tiggerTimePicker(...args))
      })) : vue.createCommentVNode("v-if", true),
      $data.visible ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: vue.normalizeClass(["uni-datetime-picker-popup", [$data.dateShow && $data.timeShow ? "" : "fix-nvue-height"]]),
          style: vue.normalizeStyle($data.fixNvueBug)
        },
        [
          vue.createElementVNode("view", { class: "uni-title" }, [
            vue.createElementVNode(
              "text",
              { class: "uni-datetime-picker-text" },
              vue.toDisplayString($options.selectTimeText),
              1
              /* TEXT */
            )
          ]),
          $data.dateShow ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-datetime-picker__container-box"
          }, [
            vue.createElementVNode("picker-view", {
              class: "uni-datetime-picker-view",
              "indicator-style": $data.indicatorStyle,
              value: $options.ymd,
              onChange: _cache[2] || (_cache[2] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
            }, [
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.years, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.months, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.days, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ], 40, ["indicator-style", "value"]),
            vue.createCommentVNode(" 兼容 nvue 不支持伪类 "),
            vue.createElementVNode("text", { class: "uni-datetime-picker-sign sign-left" }, "-"),
            vue.createElementVNode("text", { class: "uni-datetime-picker-sign sign-right" }, "-")
          ])) : vue.createCommentVNode("v-if", true),
          $data.timeShow ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "uni-datetime-picker__container-box"
          }, [
            vue.createElementVNode("picker-view", {
              class: vue.normalizeClass(["uni-datetime-picker-view", [$props.hideSecond ? "time-hide-second" : ""]]),
              "indicator-style": $data.indicatorStyle,
              value: $options.hms,
              onChange: _cache[3] || (_cache[3] = (...args) => $options.bindTimeChange && $options.bindTimeChange(...args))
            }, [
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.hours, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.minutes, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              !$props.hideSecond ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 0 }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.seconds, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true)
            ], 42, ["indicator-style", "value"]),
            vue.createCommentVNode(" 兼容 nvue 不支持伪类 "),
            vue.createElementVNode(
              "text",
              {
                class: vue.normalizeClass(["uni-datetime-picker-sign", [$props.hideSecond ? "sign-center" : "sign-left"]])
              },
              ":",
              2
              /* CLASS */
            ),
            !$props.hideSecond ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "uni-datetime-picker-sign sign-right"
            }, ":")) : vue.createCommentVNode("v-if", true)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "uni-datetime-picker-btn" }, [
            vue.createElementVNode("view", {
              onClick: _cache[4] || (_cache[4] = (...args) => $options.clearTime && $options.clearTime(...args))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-datetime-picker-btn-text" },
                vue.toDisplayString($options.clearText),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "uni-datetime-picker-btn-group" }, [
              vue.createElementVNode("view", {
                class: "uni-datetime-picker-cancel",
                onClick: _cache[5] || (_cache[5] = (...args) => $options.tiggerTimePicker && $options.tiggerTimePicker(...args))
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-datetime-picker-btn-text" },
                  vue.toDisplayString($options.cancelText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", {
                onClick: _cache[6] || (_cache[6] = (...args) => $options.setTime && $options.setTime(...args))
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-datetime-picker-btn-text" },
                  vue.toDisplayString($options.okText),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ],
        6
        /* CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const TimePicker = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$3], ["__scopeId", "data-v-1d532b70"], ["__file", "D:/Project/English/English_android/uni_modules/uni-datetime-picker/components/uni-datetime-picker/time-picker.vue"]]);
  const { t } = initVueI18n(i18nMessages);
  const _sfc_main$g = {
    components: {
      calendarItem,
      timePicker: TimePicker
    },
    props: {
      date: {
        type: String,
        default: ""
      },
      defTime: {
        type: [String, Object],
        default: ""
      },
      selectableTimes: {
        type: [Object],
        default() {
          return {};
        }
      },
      selected: {
        type: Array,
        default() {
          return [];
        }
      },
      startDate: {
        type: String,
        default: ""
      },
      endDate: {
        type: String,
        default: ""
      },
      startPlaceholder: {
        type: String,
        default: ""
      },
      endPlaceholder: {
        type: String,
        default: ""
      },
      range: {
        type: Boolean,
        default: false
      },
      hasTime: {
        type: Boolean,
        default: false
      },
      insert: {
        type: Boolean,
        default: true
      },
      showMonth: {
        type: Boolean,
        default: true
      },
      clearDate: {
        type: Boolean,
        default: true
      },
      checkHover: {
        type: Boolean,
        default: true
      },
      hideSecond: {
        type: [Boolean],
        default: false
      },
      pleStatus: {
        type: Object,
        default() {
          return {
            before: "",
            after: "",
            data: [],
            fulldate: ""
          };
        }
      },
      defaultValue: {
        type: [String, Object, Array],
        default: ""
      }
    },
    data() {
      return {
        show: false,
        weeks: [],
        calendar: {},
        nowDate: {},
        aniMaskShow: false,
        firstEnter: true,
        time: "",
        timeRange: {
          startTime: "",
          endTime: ""
        },
        tempSingleDate: "",
        tempRange: {
          before: "",
          after: ""
        }
      };
    },
    watch: {
      date: {
        immediate: true,
        handler(newVal) {
          if (!this.range) {
            this.tempSingleDate = newVal;
            setTimeout(() => {
              this.init(newVal);
            }, 100);
          }
        }
      },
      defTime: {
        immediate: true,
        handler(newVal) {
          if (!this.range) {
            this.time = newVal;
          } else {
            this.timeRange.startTime = newVal.start;
            this.timeRange.endTime = newVal.end;
          }
        }
      },
      startDate(val) {
        if (!this.cale) {
          return;
        }
        this.cale.setStartDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      endDate(val) {
        if (!this.cale) {
          return;
        }
        this.cale.setEndDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      selected(newVal) {
        if (!this.cale) {
          return;
        }
        this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
        this.weeks = this.cale.weeks;
      },
      pleStatus: {
        immediate: true,
        handler(newVal) {
          const {
            before,
            after,
            fulldate,
            which
          } = newVal;
          this.tempRange.before = before;
          this.tempRange.after = after;
          setTimeout(() => {
            if (fulldate) {
              this.cale.setHoverMultiple(fulldate);
              if (before && after) {
                this.cale.lastHover = true;
                if (this.rangeWithinMonth(after, before))
                  return;
                this.setDate(before);
              } else {
                this.cale.setMultiple(fulldate);
                this.setDate(this.nowDate.fullDate);
                this.calendar.fullDate = "";
                this.cale.lastHover = false;
              }
            } else {
              if (!this.cale) {
                return;
              }
              this.cale.setDefaultMultiple(before, after);
              if (which === "left" && before) {
                this.setDate(before);
                this.weeks = this.cale.weeks;
              } else if (after) {
                this.setDate(after);
                this.weeks = this.cale.weeks;
              }
              this.cale.lastHover = true;
            }
          }, 16);
        }
      }
    },
    computed: {
      timepickerStartTime() {
        const activeDate = this.range ? this.tempRange.before : this.calendar.fullDate;
        return activeDate === this.startDate ? this.selectableTimes.start : "";
      },
      timepickerEndTime() {
        const activeDate = this.range ? this.tempRange.after : this.calendar.fullDate;
        return activeDate === this.endDate ? this.selectableTimes.end : "";
      },
      /**
       * for i18n
       */
      selectDateText() {
        return t("uni-datetime-picker.selectDate");
      },
      startDateText() {
        return this.startPlaceholder || t("uni-datetime-picker.startDate");
      },
      endDateText() {
        return this.endPlaceholder || t("uni-datetime-picker.endDate");
      },
      okText() {
        return t("uni-datetime-picker.ok");
      },
      yearText() {
        return t("uni-datetime-picker.year");
      },
      monthText() {
        return t("uni-datetime-picker.month");
      },
      MONText() {
        return t("uni-calender.MON");
      },
      TUEText() {
        return t("uni-calender.TUE");
      },
      WEDText() {
        return t("uni-calender.WED");
      },
      THUText() {
        return t("uni-calender.THU");
      },
      FRIText() {
        return t("uni-calender.FRI");
      },
      SATText() {
        return t("uni-calender.SAT");
      },
      SUNText() {
        return t("uni-calender.SUN");
      },
      confirmText() {
        return t("uni-calender.confirm");
      }
    },
    created() {
      this.cale = new Calendar$1({
        selected: this.selected,
        startDate: this.startDate,
        endDate: this.endDate,
        range: this.range
      });
      this.init(this.date);
    },
    methods: {
      leaveCale() {
        this.firstEnter = true;
      },
      handleMouse(weeks) {
        if (weeks.disable)
          return;
        if (this.cale.lastHover)
          return;
        let {
          before,
          after
        } = this.cale.multipleStatus;
        if (!before)
          return;
        this.calendar = weeks;
        this.cale.setHoverMultiple(this.calendar.fullDate);
        this.weeks = this.cale.weeks;
        if (this.firstEnter) {
          this.$emit("firstEnterCale", this.cale.multipleStatus);
          this.firstEnter = false;
        }
      },
      rangeWithinMonth(A2, B2) {
        const [yearA, monthA] = A2.split("-");
        const [yearB, monthB] = B2.split("-");
        return yearA === yearB && monthA === monthB;
      },
      // 蒙版点击事件
      maskClick() {
        this.close();
        this.$emit("maskClose");
      },
      clearCalender() {
        if (this.range) {
          this.timeRange.startTime = "";
          this.timeRange.endTime = "";
          this.tempRange.before = "";
          this.tempRange.after = "";
          this.cale.multipleStatus.before = "";
          this.cale.multipleStatus.after = "";
          this.cale.multipleStatus.data = [];
          this.cale.lastHover = false;
        } else {
          this.time = "";
          this.tempSingleDate = "";
        }
        this.calendar.fullDate = "";
        this.setDate(/* @__PURE__ */ new Date());
      },
      bindDateChange(e) {
        const value = e.detail.value + "-1";
        this.setDate(value);
      },
      /**
       * 初始化日期显示
       * @param {Object} date
       */
      init(date) {
        if (!this.cale) {
          return;
        }
        this.cale.setDate(date || /* @__PURE__ */ new Date());
        this.weeks = this.cale.weeks;
        this.nowDate = this.cale.getInfo(date);
        this.calendar = { ...this.nowDate };
        if (!date) {
          this.calendar.fullDate = "";
          if (this.defaultValue && !this.range) {
            const defaultDate = new Date(this.defaultValue);
            const fullDate = getDate(defaultDate);
            const year = defaultDate.getFullYear();
            const month = defaultDate.getMonth() + 1;
            const date2 = defaultDate.getDate();
            const day = defaultDate.getDay();
            this.calendar = {
              fullDate,
              year,
              month,
              date: date2,
              day
            }, this.tempSingleDate = fullDate;
            this.time = getTime(defaultDate, this.hideSecond);
          }
        }
      },
      /**
       * 打开日历弹窗
       */
      open() {
        if (this.clearDate && !this.insert) {
          this.cale.cleanMultipleStatus();
          this.init(this.date);
        }
        this.show = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this.aniMaskShow = true;
          }, 50);
        });
      },
      /**
       * 关闭日历弹窗
       */
      close() {
        this.aniMaskShow = false;
        this.$nextTick(() => {
          setTimeout(() => {
            this.show = false;
            this.$emit("close");
          }, 300);
        });
      },
      /**
       * 确认按钮
       */
      confirm() {
        this.setEmit("confirm");
        this.close();
      },
      /**
       * 变化触发
       */
      change() {
        if (!this.insert)
          return;
        this.setEmit("change");
      },
      /**
       * 选择月份触发
       */
      monthSwitch() {
        let {
          year,
          month
        } = this.nowDate;
        this.$emit("monthSwitch", {
          year,
          month: Number(month)
        });
      },
      /**
       * 派发事件
       * @param {Object} name
       */
      setEmit(name) {
        if (!this.range) {
          if (!this.calendar.fullDate) {
            this.calendar = this.cale.getInfo(/* @__PURE__ */ new Date());
            this.tempSingleDate = this.calendar.fullDate;
          }
          if (this.hasTime && !this.time) {
            this.time = getTime(/* @__PURE__ */ new Date(), this.hideSecond);
          }
        }
        let {
          year,
          month,
          date,
          fullDate,
          extraInfo
        } = this.calendar;
        this.$emit(name, {
          range: this.cale.multipleStatus,
          year,
          month,
          date,
          time: this.time,
          timeRange: this.timeRange,
          fulldate: fullDate,
          extraInfo: extraInfo || {}
        });
      },
      /**
       * 选择天触发
       * @param {Object} weeks
       */
      choiceDate(weeks) {
        if (weeks.disable)
          return;
        this.calendar = weeks;
        this.calendar.userChecked = true;
        this.cale.setMultiple(this.calendar.fullDate, true);
        this.weeks = this.cale.weeks;
        this.tempSingleDate = this.calendar.fullDate;
        const beforeDate = new Date(this.cale.multipleStatus.before).getTime();
        const afterDate = new Date(this.cale.multipleStatus.after).getTime();
        if (beforeDate > afterDate && afterDate) {
          this.tempRange.before = this.cale.multipleStatus.after;
          this.tempRange.after = this.cale.multipleStatus.before;
        } else {
          this.tempRange.before = this.cale.multipleStatus.before;
          this.tempRange.after = this.cale.multipleStatus.after;
        }
        this.change();
      },
      changeMonth(type) {
        let newDate;
        if (type === "pre") {
          newDate = this.cale.getPreMonthObj(this.nowDate.fullDate).fullDate;
        } else if (type === "next") {
          newDate = this.cale.getNextMonthObj(this.nowDate.fullDate).fullDate;
        }
        this.setDate(newDate);
        this.monthSwitch();
      },
      /**
       * 设置日期
       * @param {Object} date
       */
      setDate(date) {
        this.cale.setDate(date);
        this.weeks = this.cale.weeks;
        this.nowDate = this.cale.getInfo(date);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_calendar_item = vue.resolveComponent("calendar-item");
    const _component_time_picker = vue.resolveComponent("time-picker");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "uni-calendar",
        onMouseleave: _cache[9] || (_cache[9] = (...args) => $options.leaveCale && $options.leaveCale(...args))
      },
      [
        !$props.insert && $data.show ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["uni-calendar__mask", { "uni-calendar--mask-show": $data.aniMaskShow }]),
            onClick: _cache[0] || (_cache[0] = (...args) => $options.maskClick && $options.maskClick(...args))
          },
          null,
          2
          /* CLASS */
        )) : vue.createCommentVNode("v-if", true),
        $props.insert || $data.show ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 1,
            class: vue.normalizeClass(["uni-calendar__content", { "uni-calendar--fixed": !$props.insert, "uni-calendar--ani-show": $data.aniMaskShow, "uni-calendar__content-mobile": $data.aniMaskShow }])
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["uni-calendar__header", { "uni-calendar__header-mobile": !$props.insert }])
              },
              [
                vue.createElementVNode("view", {
                  class: "uni-calendar__header-btn-box",
                  onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => $options.changeMonth("pre"), ["stop"]))
                }, [
                  vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--left" })
                ]),
                vue.createElementVNode("picker", {
                  mode: "date",
                  value: $props.date,
                  fields: "month",
                  onChange: _cache[2] || (_cache[2] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__header-text" },
                    vue.toDisplayString(($data.nowDate.year || "") + $options.yearText + ($data.nowDate.month || "") + $options.monthText),
                    1
                    /* TEXT */
                  )
                ], 40, ["value"]),
                vue.createElementVNode("view", {
                  class: "uni-calendar__header-btn-box",
                  onClick: _cache[3] || (_cache[3] = vue.withModifiers(($event) => $options.changeMonth("next"), ["stop"]))
                }, [
                  vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--right" })
                ]),
                !$props.insert ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "dialog-close",
                  onClick: _cache[4] || (_cache[4] = (...args) => $options.close && $options.close(...args))
                }, [
                  vue.createElementVNode("view", {
                    class: "dialog-close-plus",
                    "data-id": "close"
                  }),
                  vue.createElementVNode("view", {
                    class: "dialog-close-plus dialog-close-rotate",
                    "data-id": "close"
                  })
                ])) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode("view", { class: "uni-calendar__box" }, [
              $props.showMonth ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-calendar__box-bg"
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__box-bg-text" },
                  vue.toDisplayString($data.nowDate.month),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", {
                class: "uni-calendar__weeks",
                style: { "padding-bottom": "7px" }
              }, [
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.SUNText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.MONText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.TUEText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.WEDText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.THUText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.FRIText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.SATText),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.weeks, (item, weekIndex) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "uni-calendar__weeks",
                    key: weekIndex
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(item, (weeks, weeksIndex) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "uni-calendar__weeks-item",
                          key: weeksIndex
                        }, [
                          vue.createVNode(_component_calendar_item, {
                            class: "uni-calendar-item--hook",
                            weeks,
                            calendar: $data.calendar,
                            selected: $props.selected,
                            checkHover: $props.range,
                            onChange: $options.choiceDate,
                            onHandleMouse: $options.handleMouse
                          }, null, 8, ["weeks", "calendar", "selected", "checkHover", "onChange", "onHandleMouse"])
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            !$props.insert && !$props.range && $props.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-date-changed uni-calendar--fixed-top",
              style: { "padding": "0 80px" }
            }, [
              vue.createElementVNode(
                "view",
                { class: "uni-date-changed--time-date" },
                vue.toDisplayString($data.tempSingleDate ? $data.tempSingleDate : $options.selectDateText),
                1
                /* TEXT */
              ),
              vue.createVNode(_component_time_picker, {
                type: "time",
                start: $options.timepickerStartTime,
                end: $options.timepickerEndTime,
                modelValue: $data.time,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.time = $event),
                disabled: !$data.tempSingleDate,
                border: false,
                "hide-second": $props.hideSecond,
                class: "time-picker-style"
              }, null, 8, ["start", "end", "modelValue", "disabled", "hide-second"])
            ])) : vue.createCommentVNode("v-if", true),
            !$props.insert && $props.range && $props.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "uni-date-changed uni-calendar--fixed-top"
            }, [
              vue.createElementVNode("view", { class: "uni-date-changed--time-start" }, [
                vue.createElementVNode(
                  "view",
                  { class: "uni-date-changed--time-date" },
                  vue.toDisplayString($data.tempRange.before ? $data.tempRange.before : $options.startDateText),
                  1
                  /* TEXT */
                ),
                vue.createVNode(_component_time_picker, {
                  type: "time",
                  start: $options.timepickerStartTime,
                  modelValue: $data.timeRange.startTime,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.timeRange.startTime = $event),
                  border: false,
                  "hide-second": $props.hideSecond,
                  disabled: !$data.tempRange.before,
                  class: "time-picker-style"
                }, null, 8, ["start", "modelValue", "hide-second", "disabled"])
              ]),
              vue.createElementVNode("view", { style: { "line-height": "50px" } }, [
                vue.createVNode(_component_uni_icons, {
                  type: "arrowthinright",
                  color: "#999"
                })
              ]),
              vue.createElementVNode("view", { class: "uni-date-changed--time-end" }, [
                vue.createElementVNode(
                  "view",
                  { class: "uni-date-changed--time-date" },
                  vue.toDisplayString($data.tempRange.after ? $data.tempRange.after : $options.endDateText),
                  1
                  /* TEXT */
                ),
                vue.createVNode(_component_time_picker, {
                  type: "time",
                  end: $options.timepickerEndTime,
                  modelValue: $data.timeRange.endTime,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.timeRange.endTime = $event),
                  border: false,
                  "hide-second": $props.hideSecond,
                  disabled: !$data.tempRange.after,
                  class: "time-picker-style"
                }, null, 8, ["end", "modelValue", "hide-second", "disabled"])
              ])
            ])) : vue.createCommentVNode("v-if", true),
            !$props.insert ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "uni-date-changed uni-date-btn--ok"
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: "uni-datetime-picker--btn",
                  onClick: _cache[8] || (_cache[8] = (...args) => $options.confirm && $options.confirm(...args))
                },
                vue.toDisplayString($options.confirmText),
                1
                /* TEXT */
              )
            ])) : vue.createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        )) : vue.createCommentVNode("v-if", true)
      ],
      32
      /* HYDRATE_EVENTS */
    );
  }
  const Calendar = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$2], ["__scopeId", "data-v-1d379219"], ["__file", "D:/Project/English/English_android/uni_modules/uni-datetime-picker/components/uni-datetime-picker/calendar.vue"]]);
  const _sfc_main$f = {
    name: "UniDatetimePicker",
    options: {
      virtualHost: true
    },
    components: {
      Calendar,
      TimePicker
    },
    data() {
      return {
        isRange: false,
        hasTime: false,
        displayValue: "",
        inputDate: "",
        calendarDate: "",
        pickerTime: "",
        calendarRange: {
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        },
        displayRangeValue: {
          startDate: "",
          endDate: ""
        },
        tempRange: {
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        },
        // 左右日历同步数据
        startMultipleStatus: {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        },
        endMultipleStatus: {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        },
        pickerVisible: false,
        pickerPositionStyle: null,
        isEmitValue: false,
        isPhone: false,
        isFirstShow: true,
        i18nT: () => {
        }
      };
    },
    props: {
      type: {
        type: String,
        default: "datetime"
      },
      value: {
        type: [String, Number, Array, Date],
        default: ""
      },
      modelValue: {
        type: [String, Number, Array, Date],
        default: ""
      },
      start: {
        type: [Number, String],
        default: ""
      },
      end: {
        type: [Number, String],
        default: ""
      },
      returnType: {
        type: String,
        default: "string"
      },
      placeholder: {
        type: String,
        default: ""
      },
      startPlaceholder: {
        type: String,
        default: ""
      },
      endPlaceholder: {
        type: String,
        default: ""
      },
      rangeSeparator: {
        type: String,
        default: "-"
      },
      border: {
        type: [Boolean],
        default: true
      },
      disabled: {
        type: [Boolean],
        default: false
      },
      clearIcon: {
        type: [Boolean],
        default: true
      },
      hideSecond: {
        type: [Boolean],
        default: false
      },
      defaultValue: {
        type: [String, Object, Array],
        default: ""
      }
    },
    watch: {
      type: {
        immediate: true,
        handler(newVal) {
          this.hasTime = newVal.indexOf("time") !== -1;
          this.isRange = newVal.indexOf("range") !== -1;
        }
      },
      modelValue: {
        immediate: true,
        handler(newVal) {
          if (this.isEmitValue) {
            this.isEmitValue = false;
            return;
          }
          this.initPicker(newVal);
        }
      },
      start: {
        immediate: true,
        handler(newVal) {
          if (!newVal)
            return;
          this.calendarRange.startDate = getDate(newVal);
          if (this.hasTime) {
            this.calendarRange.startTime = getTime(newVal);
          }
        }
      },
      end: {
        immediate: true,
        handler(newVal) {
          if (!newVal)
            return;
          this.calendarRange.endDate = getDate(newVal);
          if (this.hasTime) {
            this.calendarRange.endTime = getTime(newVal, this.hideSecond);
          }
        }
      }
    },
    computed: {
      timepickerStartTime() {
        const activeDate = this.isRange ? this.tempRange.startDate : this.inputDate;
        return activeDate === this.calendarRange.startDate ? this.calendarRange.startTime : "";
      },
      timepickerEndTime() {
        const activeDate = this.isRange ? this.tempRange.endDate : this.inputDate;
        return activeDate === this.calendarRange.endDate ? this.calendarRange.endTime : "";
      },
      mobileCalendarTime() {
        const timeRange = {
          start: this.tempRange.startTime,
          end: this.tempRange.endTime
        };
        return this.isRange ? timeRange : this.pickerTime;
      },
      mobSelectableTime() {
        return {
          start: this.calendarRange.startTime,
          end: this.calendarRange.endTime
        };
      },
      datePopupWidth() {
        return this.isRange ? 653 : 301;
      },
      /**
       * for i18n
       */
      singlePlaceholderText() {
        return this.placeholder || (this.type === "date" ? this.selectDateText : this.selectDateTimeText);
      },
      startPlaceholderText() {
        return this.startPlaceholder || this.startDateText;
      },
      endPlaceholderText() {
        return this.endPlaceholder || this.endDateText;
      },
      selectDateText() {
        return this.i18nT("uni-datetime-picker.selectDate");
      },
      selectDateTimeText() {
        return this.i18nT("uni-datetime-picker.selectDateTime");
      },
      selectTimeText() {
        return this.i18nT("uni-datetime-picker.selectTime");
      },
      startDateText() {
        return this.startPlaceholder || this.i18nT("uni-datetime-picker.startDate");
      },
      startTimeText() {
        return this.i18nT("uni-datetime-picker.startTime");
      },
      endDateText() {
        return this.endPlaceholder || this.i18nT("uni-datetime-picker.endDate");
      },
      endTimeText() {
        return this.i18nT("uni-datetime-picker.endTime");
      },
      okText() {
        return this.i18nT("uni-datetime-picker.ok");
      },
      clearText() {
        return this.i18nT("uni-datetime-picker.clear");
      },
      showClearIcon() {
        return this.clearIcon && !this.disabled && (this.displayValue || this.displayRangeValue.startDate && this.displayRangeValue.endDate);
      }
    },
    created() {
      this.initI18nT();
      this.platform();
    },
    methods: {
      initI18nT() {
        const vueI18n = initVueI18n(i18nMessages);
        this.i18nT = vueI18n.t;
      },
      initPicker(newVal) {
        if (!newVal && !this.defaultValue || Array.isArray(newVal) && !newVal.length) {
          this.$nextTick(() => {
            this.clear(false);
          });
          return;
        }
        if (!Array.isArray(newVal) && !this.isRange) {
          if (newVal) {
            this.displayValue = this.inputDate = this.calendarDate = getDate(newVal);
            if (this.hasTime) {
              this.pickerTime = getTime(newVal, this.hideSecond);
              this.displayValue = `${this.displayValue} ${this.pickerTime}`;
            }
          } else if (this.defaultValue) {
            this.inputDate = this.calendarDate = getDate(this.defaultValue);
            if (this.hasTime) {
              this.pickerTime = getTime(this.defaultValue, this.hideSecond);
            }
          }
        } else {
          const [before, after] = newVal;
          if (!before && !after)
            return;
          const beforeDate = getDate(before);
          const beforeTime = getTime(before, this.hideSecond);
          const afterDate = getDate(after);
          const afterTime = getTime(after, this.hideSecond);
          const startDate = beforeDate;
          const endDate = afterDate;
          this.displayRangeValue.startDate = this.tempRange.startDate = startDate;
          this.displayRangeValue.endDate = this.tempRange.endDate = endDate;
          if (this.hasTime) {
            this.displayRangeValue.startDate = `${beforeDate} ${beforeTime}`;
            this.displayRangeValue.endDate = `${afterDate} ${afterTime}`;
            this.tempRange.startTime = beforeTime;
            this.tempRange.endTime = afterTime;
          }
          const defaultRange = {
            before: beforeDate,
            after: afterDate
          };
          this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, defaultRange, {
            which: "right"
          });
          this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, defaultRange, {
            which: "left"
          });
        }
      },
      updateLeftCale(e) {
        const left = this.$refs.left;
        left.cale.setHoverMultiple(e.after);
        left.setDate(this.$refs.left.nowDate.fullDate);
      },
      updateRightCale(e) {
        const right = this.$refs.right;
        right.cale.setHoverMultiple(e.after);
        right.setDate(this.$refs.right.nowDate.fullDate);
      },
      platform() {
        const { windowWidth } = uni.getSystemInfoSync();
        this.isPhone = windowWidth <= 500;
        this.windowWidth = windowWidth;
      },
      show() {
        if (this.disabled) {
          return;
        }
        this.platform();
        if (this.isPhone) {
          this.$refs.mobile.open();
          return;
        }
        this.pickerPositionStyle = {
          top: "10px"
        };
        const dateEditor = uni.createSelectorQuery().in(this).select(".uni-date-editor");
        dateEditor.boundingClientRect((rect) => {
          if (this.windowWidth - rect.left < this.datePopupWidth) {
            this.pickerPositionStyle.right = 0;
          }
        }).exec();
        setTimeout(() => {
          this.pickerVisible = !this.pickerVisible;
          if (!this.isPhone && this.isRange && this.isFirstShow) {
            this.isFirstShow = false;
            const {
              startDate,
              endDate
            } = this.calendarRange;
            if (startDate && endDate) {
              if (this.diffDate(startDate, endDate) < 30) {
                this.$refs.right.changeMonth("pre");
              }
            } else {
              this.$refs.right.changeMonth("next");
              this.$refs.right.cale.lastHover = false;
            }
          }
        }, 50);
      },
      close() {
        setTimeout(() => {
          this.pickerVisible = false;
          this.$emit("maskClick", this.value);
          this.$refs.mobile && this.$refs.mobile.close();
        }, 20);
      },
      setEmit(value) {
        if (this.returnType === "timestamp" || this.returnType === "date") {
          if (!Array.isArray(value)) {
            if (!this.hasTime) {
              value = value + " 00:00:00";
            }
            value = this.createTimestamp(value);
            if (this.returnType === "date") {
              value = new Date(value);
            }
          } else {
            if (!this.hasTime) {
              value[0] = value[0] + " 00:00:00";
              value[1] = value[1] + " 00:00:00";
            }
            value[0] = this.createTimestamp(value[0]);
            value[1] = this.createTimestamp(value[1]);
            if (this.returnType === "date") {
              value[0] = new Date(value[0]);
              value[1] = new Date(value[1]);
            }
          }
        }
        this.$emit("update:modelValue", value);
        this.$emit("input", value);
        this.$emit("change", value);
        this.isEmitValue = true;
      },
      createTimestamp(date) {
        date = fixIosDateFormat(date);
        return Date.parse(new Date(date));
      },
      singleChange(e) {
        this.calendarDate = this.inputDate = e.fulldate;
        if (this.hasTime)
          return;
        this.confirmSingleChange();
      },
      confirmSingleChange() {
        if (!checkDate(this.inputDate)) {
          const now = /* @__PURE__ */ new Date();
          this.calendarDate = this.inputDate = getDate(now);
          this.pickerTime = getTime(now, this.hideSecond);
        }
        let startLaterInputDate = false;
        let startDate, startTime;
        if (this.start) {
          let startString = this.start;
          if (typeof this.start === "number") {
            startString = getDateTime(this.start, this.hideSecond);
          }
          [startDate, startTime] = startString.split(" ");
          if (this.start && !dateCompare(startDate, this.inputDate)) {
            startLaterInputDate = true;
            this.inputDate = startDate;
          }
        }
        let endEarlierInputDate = false;
        let endDate, endTime;
        if (this.end) {
          let endString = this.end;
          if (typeof this.end === "number") {
            endString = getDateTime(this.end, this.hideSecond);
          }
          [endDate, endTime] = endString.split(" ");
          if (this.end && !dateCompare(this.inputDate, endDate)) {
            endEarlierInputDate = true;
            this.inputDate = endDate;
          }
        }
        if (this.hasTime) {
          if (startLaterInputDate) {
            this.pickerTime = startTime || getDefaultSecond(this.hideSecond);
          }
          if (endEarlierInputDate) {
            this.pickerTime = endTime || getDefaultSecond(this.hideSecond);
          }
          if (!this.pickerTime) {
            this.pickerTime = getTime(Date.now(), this.hideSecond);
          }
          this.displayValue = `${this.inputDate} ${this.pickerTime}`;
        } else {
          this.displayValue = this.inputDate;
        }
        this.setEmit(this.displayValue);
        this.pickerVisible = false;
      },
      leftChange(e) {
        const {
          before,
          after
        } = e.range;
        this.rangeChange(before, after);
        const obj = {
          before: e.range.before,
          after: e.range.after,
          data: e.range.data,
          fulldate: e.fulldate
        };
        this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, obj);
      },
      rightChange(e) {
        const {
          before,
          after
        } = e.range;
        this.rangeChange(before, after);
        const obj = {
          before: e.range.before,
          after: e.range.after,
          data: e.range.data,
          fulldate: e.fulldate
        };
        this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, obj);
      },
      mobileChange(e) {
        if (this.isRange) {
          const { before, after } = e.range;
          if (!before || !after) {
            return;
          }
          this.handleStartAndEnd(before, after, true);
          if (this.hasTime) {
            const {
              startTime,
              endTime
            } = e.timeRange;
            this.tempRange.startTime = startTime;
            this.tempRange.endTime = endTime;
          }
          this.confirmRangeChange();
        } else {
          if (this.hasTime) {
            this.displayValue = e.fulldate + " " + e.time;
          } else {
            this.displayValue = e.fulldate;
          }
          this.setEmit(this.displayValue);
        }
        this.$refs.mobile.close();
      },
      rangeChange(before, after) {
        if (!(before && after))
          return;
        this.handleStartAndEnd(before, after, true);
        if (this.hasTime)
          return;
        this.confirmRangeChange();
      },
      confirmRangeChange() {
        if (!this.tempRange.startDate || !this.tempRange.endDate) {
          this.pickerVisible = false;
          return;
        }
        if (!checkDate(this.tempRange.startDate)) {
          this.tempRange.startDate = getDate(Date.now());
        }
        if (!checkDate(this.tempRange.endDate)) {
          this.tempRange.endDate = getDate(Date.now());
        }
        let start, end;
        let startDateLaterRangeStartDate = false;
        let startDateLaterRangeEndDate = false;
        let startDate, startTime;
        if (this.start) {
          let startString = this.start;
          if (typeof this.start === "number") {
            startString = getDateTime(this.start, this.hideSecond);
          }
          [startDate, startTime] = startString.split(" ");
          if (this.start && !dateCompare(this.start, this.tempRange.startDate)) {
            startDateLaterRangeStartDate = true;
            this.tempRange.startDate = startDate;
          }
          if (this.start && !dateCompare(this.start, this.tempRange.endDate)) {
            startDateLaterRangeEndDate = true;
            this.tempRange.endDate = startDate;
          }
        }
        let endDateEarlierRangeStartDate = false;
        let endDateEarlierRangeEndDate = false;
        let endDate, endTime;
        if (this.end) {
          let endString = this.end;
          if (typeof this.end === "number") {
            endString = getDateTime(this.end, this.hideSecond);
          }
          [endDate, endTime] = endString.split(" ");
          if (this.end && !dateCompare(this.tempRange.startDate, this.end)) {
            endDateEarlierRangeStartDate = true;
            this.tempRange.startDate = endDate;
          }
          if (this.end && !dateCompare(this.tempRange.endDate, this.end)) {
            endDateEarlierRangeEndDate = true;
            this.tempRange.endDate = endDate;
          }
        }
        if (!this.hasTime) {
          start = this.displayRangeValue.startDate = this.tempRange.startDate;
          end = this.displayRangeValue.endDate = this.tempRange.endDate;
        } else {
          if (startDateLaterRangeStartDate) {
            this.tempRange.startTime = startTime || getDefaultSecond(this.hideSecond);
          } else if (endDateEarlierRangeStartDate) {
            this.tempRange.startTime = endTime || getDefaultSecond(this.hideSecond);
          }
          if (!this.tempRange.startTime) {
            this.tempRange.startTime = getTime(Date.now(), this.hideSecond);
          }
          if (startDateLaterRangeEndDate) {
            this.tempRange.endTime = startTime || getDefaultSecond(this.hideSecond);
          } else if (endDateEarlierRangeEndDate) {
            this.tempRange.endTime = endTime || getDefaultSecond(this.hideSecond);
          }
          if (!this.tempRange.endTime) {
            this.tempRange.endTime = getTime(Date.now(), this.hideSecond);
          }
          start = this.displayRangeValue.startDate = `${this.tempRange.startDate} ${this.tempRange.startTime}`;
          end = this.displayRangeValue.endDate = `${this.tempRange.endDate} ${this.tempRange.endTime}`;
        }
        if (!dateCompare(start, end)) {
          [start, end] = [end, start];
        }
        this.displayRangeValue.startDate = start;
        this.displayRangeValue.endDate = end;
        const displayRange = [start, end];
        this.setEmit(displayRange);
        this.pickerVisible = false;
      },
      handleStartAndEnd(before, after, temp = false) {
        if (!(before && after))
          return;
        const type = temp ? "tempRange" : "range";
        const isStartEarlierEnd = dateCompare(before, after);
        this[type].startDate = isStartEarlierEnd ? before : after;
        this[type].endDate = isStartEarlierEnd ? after : before;
      },
      /**
       * 比较时间大小
       */
      dateCompare(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        return startDate <= endDate;
      },
      /**
       * 比较时间差
       */
      diffDate(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        const diff = (endDate - startDate) / (24 * 60 * 60 * 1e3);
        return Math.abs(diff);
      },
      clear(needEmit = true) {
        if (!this.isRange) {
          this.displayValue = "";
          this.inputDate = "";
          this.pickerTime = "";
          if (this.isPhone) {
            this.$refs.mobile && this.$refs.mobile.clearCalender();
          } else {
            this.$refs.pcSingle && this.$refs.pcSingle.clearCalender();
          }
          if (needEmit) {
            this.$emit("change", "");
            this.$emit("input", "");
            this.$emit("update:modelValue", "");
          }
        } else {
          this.displayRangeValue.startDate = "";
          this.displayRangeValue.endDate = "";
          this.tempRange.startDate = "";
          this.tempRange.startTime = "";
          this.tempRange.endDate = "";
          this.tempRange.endTime = "";
          if (this.isPhone) {
            this.$refs.mobile && this.$refs.mobile.clearCalender();
          } else {
            this.$refs.left && this.$refs.left.clearCalender();
            this.$refs.right && this.$refs.right.clearCalender();
            this.$refs.right && this.$refs.right.changeMonth("next");
          }
          if (needEmit) {
            this.$emit("change", []);
            this.$emit("input", []);
            this.$emit("update:modelValue", []);
          }
        }
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    const _component_time_picker = vue.resolveComponent("time-picker");
    const _component_Calendar = vue.resolveComponent("Calendar");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-date" }, [
      vue.createElementVNode("view", {
        class: "uni-date-editor",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.show && $options.show(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-date-editor--x", { "uni-date-editor--x__disabled": $props.disabled, "uni-date-x--border": $props.border }])
            },
            [
              !$data.isRange ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-date-x uni-date-single"
              }, [
                vue.createVNode(_component_uni_icons, {
                  class: "icon-calendar",
                  type: "calendar",
                  color: "#c0c4cc",
                  size: "22"
                }),
                vue.createElementVNode(
                  "view",
                  { class: "uni-date__x-input" },
                  vue.toDisplayString($data.displayValue || $options.singlePlaceholderText),
                  1
                  /* TEXT */
                )
              ])) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-date-x uni-date-range"
              }, [
                vue.createVNode(_component_uni_icons, {
                  class: "icon-calendar",
                  type: "calendar",
                  color: "#c0c4cc",
                  size: "22"
                }),
                vue.createElementVNode(
                  "view",
                  { class: "uni-date__x-input text-center" },
                  vue.toDisplayString($data.displayRangeValue.startDate || $options.startPlaceholderText),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "range-separator" },
                  vue.toDisplayString($props.rangeSeparator),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "uni-date__x-input text-center" },
                  vue.toDisplayString($data.displayRangeValue.endDate || $options.endPlaceholderText),
                  1
                  /* TEXT */
                )
              ])),
              $options.showClearIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "uni-date__icon-clear",
                onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "clear",
                  color: "#c0c4cc",
                  size: "22"
                })
              ])) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ], true)
      ]),
      vue.withDirectives(vue.createElementVNode(
        "view",
        {
          class: "uni-date-mask--pc",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.close && $options.close(...args))
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [vue.vShow, $data.pickerVisible]
      ]),
      !$data.isPhone ? vue.withDirectives((vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          ref: "datePicker",
          class: "uni-date-picker__container"
        },
        [
          !$data.isRange ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: "uni-date-single--x",
              style: vue.normalizeStyle($data.pickerPositionStyle)
            },
            [
              vue.createElementVNode("view", { class: "uni-popper__arrow" }),
              $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-date-changed popup-x-header"
              }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "uni-date__input text-center",
                  type: "text",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.inputDate = $event),
                  placeholder: $options.selectDateText
                }, null, 8, ["placeholder"]), [
                  [vue.vModelText, $data.inputDate]
                ]),
                vue.createVNode(_component_time_picker, {
                  type: "time",
                  modelValue: $data.pickerTime,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.pickerTime = $event),
                  border: false,
                  disabled: !$data.inputDate,
                  start: $options.timepickerStartTime,
                  end: $options.timepickerEndTime,
                  hideSecond: $props.hideSecond,
                  style: { "width": "100%" }
                }, {
                  default: vue.withCtx(() => [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "uni-date__input text-center",
                      type: "text",
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.pickerTime = $event),
                      placeholder: $options.selectTimeText,
                      disabled: !$data.inputDate
                    }, null, 8, ["placeholder", "disabled"]), [
                      [vue.vModelText, $data.pickerTime]
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue", "disabled", "start", "end", "hideSecond"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createVNode(_component_Calendar, {
                ref: "pcSingle",
                showMonth: false,
                "start-date": $data.calendarRange.startDate,
                "end-date": $data.calendarRange.endDate,
                date: $data.calendarDate,
                onChange: $options.singleChange,
                "default-value": $props.defaultValue,
                style: { "padding": "0 8px" }
              }, null, 8, ["start-date", "end-date", "date", "onChange", "default-value"]),
              $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "popup-x-footer"
              }, [
                vue.createElementVNode(
                  "text",
                  {
                    class: "confirm-text",
                    onClick: _cache[6] || (_cache[6] = (...args) => $options.confirmSingleChange && $options.confirmSingleChange(...args))
                  },
                  vue.toDisplayString($options.okText),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )) : (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 1,
              class: "uni-date-range--x",
              style: vue.normalizeStyle($data.pickerPositionStyle)
            },
            [
              vue.createElementVNode("view", { class: "uni-popper__arrow" }),
              $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "popup-x-header uni-date-changed"
              }, [
                vue.createElementVNode("view", { class: "popup-x-header--datetime" }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "uni-date__input uni-date-range__input",
                    type: "text",
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.tempRange.startDate = $event),
                    placeholder: $options.startDateText
                  }, null, 8, ["placeholder"]), [
                    [vue.vModelText, $data.tempRange.startDate]
                  ]),
                  vue.createVNode(_component_time_picker, {
                    type: "time",
                    modelValue: $data.tempRange.startTime,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.tempRange.startTime = $event),
                    start: $options.timepickerStartTime,
                    border: false,
                    disabled: !$data.tempRange.startDate,
                    hideSecond: $props.hideSecond
                  }, {
                    default: vue.withCtx(() => [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "uni-date__input uni-date-range__input",
                        type: "text",
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.tempRange.startTime = $event),
                        placeholder: $options.startTimeText,
                        disabled: !$data.tempRange.startDate
                      }, null, 8, ["placeholder", "disabled"]), [
                        [vue.vModelText, $data.tempRange.startTime]
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "start", "disabled", "hideSecond"])
                ]),
                vue.createVNode(_component_uni_icons, {
                  type: "arrowthinright",
                  color: "#999",
                  style: { "line-height": "40px" }
                }),
                vue.createElementVNode("view", { class: "popup-x-header--datetime" }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "uni-date__input uni-date-range__input",
                    type: "text",
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.tempRange.endDate = $event),
                    placeholder: $options.endDateText
                  }, null, 8, ["placeholder"]), [
                    [vue.vModelText, $data.tempRange.endDate]
                  ]),
                  vue.createVNode(_component_time_picker, {
                    type: "time",
                    modelValue: $data.tempRange.endTime,
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.tempRange.endTime = $event),
                    end: $options.timepickerEndTime,
                    border: false,
                    disabled: !$data.tempRange.endDate,
                    hideSecond: $props.hideSecond
                  }, {
                    default: vue.withCtx(() => [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "uni-date__input uni-date-range__input",
                        type: "text",
                        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.tempRange.endTime = $event),
                        placeholder: $options.endTimeText,
                        disabled: !$data.tempRange.endDate
                      }, null, 8, ["placeholder", "disabled"]), [
                        [vue.vModelText, $data.tempRange.endTime]
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "end", "disabled", "hideSecond"])
                ])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "popup-x-body" }, [
                vue.createVNode(_component_Calendar, {
                  ref: "left",
                  showMonth: false,
                  "start-date": $data.calendarRange.startDate,
                  "end-date": $data.calendarRange.endDate,
                  range: true,
                  pleStatus: $data.endMultipleStatus,
                  onChange: $options.leftChange,
                  onFirstEnterCale: $options.updateRightCale,
                  style: { "padding": "0 8px" }
                }, null, 8, ["start-date", "end-date", "pleStatus", "onChange", "onFirstEnterCale"]),
                vue.createVNode(_component_Calendar, {
                  ref: "right",
                  showMonth: false,
                  "start-date": $data.calendarRange.startDate,
                  "end-date": $data.calendarRange.endDate,
                  range: true,
                  onChange: $options.rightChange,
                  pleStatus: $data.startMultipleStatus,
                  onFirstEnterCale: $options.updateLeftCale,
                  style: { "padding": "0 8px", "border-left": "1px solid #F1F1F1" }
                }, null, 8, ["start-date", "end-date", "onChange", "pleStatus", "onFirstEnterCale"])
              ]),
              $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "popup-x-footer"
              }, [
                vue.createElementVNode(
                  "text",
                  {
                    onClick: _cache[13] || (_cache[13] = (...args) => $options.clear && $options.clear(...args))
                  },
                  vue.toDisplayString($options.clearText),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  {
                    class: "confirm-text",
                    onClick: _cache[14] || (_cache[14] = (...args) => $options.confirmRangeChange && $options.confirmRangeChange(...args))
                  },
                  vue.toDisplayString($options.okText),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          ))
        ],
        512
        /* NEED_PATCH */
      )), [
        [vue.vShow, $data.pickerVisible]
      ]) : vue.createCommentVNode("v-if", true),
      $data.isPhone ? (vue.openBlock(), vue.createBlock(_component_Calendar, {
        key: 1,
        ref: "mobile",
        clearDate: false,
        date: $data.calendarDate,
        defTime: $options.mobileCalendarTime,
        "start-date": $data.calendarRange.startDate,
        "end-date": $data.calendarRange.endDate,
        selectableTimes: $options.mobSelectableTime,
        startPlaceholder: $props.startPlaceholder,
        endPlaceholder: $props.endPlaceholder,
        "default-value": $props.defaultValue,
        pleStatus: $data.endMultipleStatus,
        showMonth: false,
        range: $data.isRange,
        hasTime: $data.hasTime,
        insert: false,
        hideSecond: $props.hideSecond,
        onConfirm: $options.mobileChange,
        onMaskClose: $options.close
      }, null, 8, ["date", "defTime", "start-date", "end-date", "selectableTimes", "startPlaceholder", "endPlaceholder", "default-value", "pleStatus", "range", "hasTime", "hideSecond", "onConfirm", "onMaskClose"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$1], ["__scopeId", "data-v-9802168a"], ["__file", "D:/Project/English/English_android/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue"]]);
  const _sfc_main$e = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        // 内容区域是否通栏
        type: Boolean,
        default: false
      },
      isShadow: {
        // 是否开启阴影
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: vue.normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
      },
      [
        vue.createCommentVNode(" 封面 "),
        vue.renderSlot(_ctx.$slots, "cover", {}, () => [
          $props.cover ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            vue.createElementVNode("image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.renderSlot(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            vue.createCommentVNode(" 卡片标题 "),
            vue.createElementVNode("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                vue.createElementVNode("image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "uni-card__header-content" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  vue.toDisplayString($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  vue.toDisplayString($props.subTitle),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            vue.createElementVNode("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              vue.renderSlot(_ctx.$slots, "extra", {}, () => [
                vue.createElementVNode(
                  "text",
                  { class: "uni-card__header-extra-text" },
                  vue.toDisplayString($props.extra),
                  1
                  /* TEXT */
                )
              ], true)
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.createCommentVNode(" 卡片内容 "),
        vue.createElementVNode(
          "view",
          {
            class: "uni-card__content",
            style: vue.normalizeStyle({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          vue.renderSlot(_ctx.$slots, "actions", {}, void 0, true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render], ["__scopeId", "data-v-ae4bee67"], ["__file", "D:/Project/English/English_android/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  const _sfc_main$d = {
    __name: "addHomework",
    setup(__props) {
      let essayList = vue.ref([]);
      const addForm = vue.reactive({
        homework_name: "",
        class_id: "",
        essay_id: "",
        grade: "",
        homework_type: "",
        start_date: "",
        end_date: ""
      });
      const gradeList = [
        { "text": "简单", "value": "简单" },
        { "text": "中等", "value": "中等" },
        { "text": "困难", "value": "困难" }
      ];
      const typeList = [
        { "text": "填空", "value": "填空" },
        { "text": "选择", "value": "选择" }
      ];
      onLoad((e) => {
        const dateTime = new Date(+/* @__PURE__ */ new Date() + 8 * 3600 * 1e3);
        addForm.class_id = e.class_id;
        addForm.start_date = new Date(dateTime).toISOString().replace(/T/g, " ").replace(/\.[\d]{3}Z/, "");
        https.post("/teacher/essay_list", { "user_id": JSON.parse(uni.getStorageSync("token")).user_id }).then((res) => {
          res.data.forEach((item) => {
            essayList.value.push({
              "text": item.title,
              "value": item.essay_id
            });
          });
        });
      });
      function save() {
        https.post("/teacher/add_homework", addForm).then((res) => {
          if (res.data.code === 200) {
            uni.showToast({
              title: "作业添加成功",
              position: "top",
              duration: 3e3
            });
            uni.navigateBack();
          } else {
            uni.showToast({
              title: res.data.msg,
              duration: 3e3,
              position: "top"
            });
          }
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$2);
        const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1);
        const _component_uni_data_select = resolveEasycom(vue.resolveDynamicComponent("uni-data-select"), __easycom_2);
        const _component_uni_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("uni-datetime-picker"), __easycom_3);
        const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_4);
        const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { style: { "display": "flex", "justify-content": "center", "align-items": "center", "height": "100%" } }, [
          vue.createVNode(_component_uni_card, { style: { "height": "82%" } }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_forms, {
                style: { "margin-top": "20rpx" },
                model: addForm,
                labelWidth: "80"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_forms_item, { label: "作业名称" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_easyinput, {
                        modelValue: addForm.homework_name,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => addForm.homework_name = $event),
                        placeholder: "请输入作业名称"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_uni_forms_item, { label: "所需文章" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_data_select, {
                        modelValue: addForm.essay_id,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => addForm.essay_id = $event),
                        localdata: vue.unref(essayList),
                        placeholder: "请选择练习文章"
                      }, null, 8, ["modelValue", "localdata"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_uni_forms_item, { label: "文章难度" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_data_select, {
                        modelValue: addForm.grade,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => addForm.grade = $event),
                        localdata: gradeList,
                        placeholder: "请选择练习文章难度"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_uni_forms_item, { label: "练习形式" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_data_select, {
                        modelValue: addForm.homework_type,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => addForm.homework_type = $event),
                        localdata: typeList,
                        placeholder: "请选择练习文章难度"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_uni_forms_item, { label: "发布时间" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_datetime_picker, {
                        type: "datetime",
                        "clear-icon": false,
                        modelValue: addForm.start_date,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => addForm.start_date = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_uni_forms_item, { label: "截止时间" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_datetime_picker, {
                        type: "datetime",
                        "clear-icon": false,
                        modelValue: addForm.end_date,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => addForm.end_date = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model"]),
              vue.createElementVNode("button", {
                onClick: _cache[6] || (_cache[6] = ($event) => save()),
                type: "primary"
              }, "发布")
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const PagesClass_controlAddHomework = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "D:/Project/English/English_android/pages/class_control/addHomework.vue"]]);
  const _sfc_main$c = {
    __name: "class_homework",
    setup(__props) {
      let homeworkClass = vue.ref();
      let name = vue.ref();
      let class_id = vue.ref();
      onLoad((e) => {
        name.value = e.teacher_name;
        class_id.value = e.class_id;
        https.post("/teacher/class_homework", { "class_id": e.class_id }).then((res) => {
          homeworkClass.value = res.data;
        }).catch(() => {
          uni.showToast({
            title: 未连接到服务器,
            icon: "error",
            duration: 3e3
          });
        });
      });
      function addHomework() {
        uni.navigateTo({
          url: "/pages/class_control/addHomework?class_id=" + class_id.value
        });
      }
      function options(item) {
        const homework_id = item.homework_id.toString();
        uni.showActionSheet({
          itemList: ["作业详情", "修改", "删除"],
          success: (item2) => {
            if (item2.tapIndex === 0) {
              uni.navigateTo({
                url: "/pages/class_control/homework_detail?homework_id=" + homework_id
              });
            }
          }
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { style: { "margin-top": "30rpx", "justify-content": "space-between", "display": "flex" } }, [
              vue.createElementVNode("button", {
                style: { "width": "181rpx" },
                type: "primary",
                size: "mini",
                onClick: _cache[0] || (_cache[0] = ($event) => addHomework())
              }, "添加作业"),
              vue.createElementVNode("button", {
                style: { "width": "181rpx", "background-color": "Orange" },
                type: "primary",
                size: "mini"
              }, "分数汇总")
            ]),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(homeworkClass), (item) => {
                return vue.openBlock(), vue.createElementBlock("view", null, [
                  vue.createVNode(
                    _component_uni_card,
                    null,
                    {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("view", null, [
                          vue.createElementVNode(
                            "text",
                            { style: { "font-size": "40rpx", "font-weight": "600", "margin-left": "-15rpx", "color": "black" } },
                            vue.toDisplayString(item.homework_name),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode("button", {
                            size: "mini",
                            type: "primary",
                            style: { "width": "100rpx", "padding-left": "10rpx", "padding-right": "10rpx", "float": "right" },
                            onClick: ($event) => options(item)
                          }, "操作", 8, ["onClick"]),
                          vue.createElementVNode("view", { style: { "margin-left": "-15rpx", "margin-top": "5rpx", "display": "flex", "flex-direction": "column" } }, [
                            vue.createElementVNode(
                              "text",
                              null,
                              vue.toDisplayString("截止于 " + item.end_date.slice(0, 16)),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "text",
                              { style: { "margin-bottom": "5rpx" } },
                              vue.toDisplayString(" 创建者：" + vue.unref(name)),
                              1
                              /* TEXT */
                            )
                          ])
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesClass_controlClass_homework = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "D:/Project/English/English_android/pages/class_control/class_homework.vue"]]);
  const _sfc_main$b = {
    __name: "homework_detail",
    setup(__props) {
      let result = vue.ref();
      let class_id = vue.ref();
      let submit_num = vue.ref(0);
      let noSubmit_num = vue.ref(0);
      onLoad((e) => {
        https.post("/teacher/students_homework", { "homework_id": e.homework_id }).then((res) => {
          timeChange(res.data.data);
          result.value = res.data.data;
          class_id.value = res.data.class_id;
          res.data.data.forEach((item) => {
            if (item.type === "0") {
              noSubmit_num.value += 1;
            } else {
              submit_num.value += 1;
            }
          });
        }).catch(() => {
          uni.showToast({
            title: 未连接到服务器,
            icon: "error",
            duration: 3e3
          });
        });
      });
      function timeChange(data) {
        for (let i2 = 0; i2 < data.length; i2++) {
          if (data[i2].type === "1") {
            const temp = data[i2].time;
            const minutes = Math.floor(temp / 60);
            const seconds = temp % 60;
            data[i2].time = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
          }
        }
      }
      function detail(item) {
        uni.navigateTo({
          url: "/pages/homework/detail?homework_id=" + item.homework_id + "&user_id=" + item.stu_id
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { style: { "height": "80rpx", "background-color": "Silver", "display": "flex", "justify-content": "center", "align-items": "center" } }, [
              vue.createElementVNode("view", { style: { "font-size": "40rpx" } }, [
                vue.createElementVNode(
                  "text",
                  { style: { "color": "forestgreen" } },
                  vue.toDisplayString(vue.unref(submit_num)),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", null, "人已交")
              ]),
              vue.createElementVNode("view", { style: { "margin-left": "30rpx", "font-size": "40rpx" } }, [
                vue.createElementVNode(
                  "text",
                  { style: { "color": "crimson" } },
                  vue.toDisplayString(vue.unref(noSubmit_num)),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", null, "人未交")
              ])
            ]),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(result), (item) => {
                return vue.openBlock(), vue.createElementBlock("view", null, [
                  vue.createVNode(
                    _component_uni_card,
                    null,
                    {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("view", { style: { "display": "flex", "flex-direction": "row" } }, [
                          vue.createElementVNode("image", {
                            src: vue.unref(common).fronturl + item.avatar,
                            style: { "width": "40px", "height": "40px", "border-radius": "40rpx" }
                          }, null, 8, ["src"]),
                          vue.createElementVNode("view", { style: { "margin-left": "3%", "display": "flex", "flex-direction": "column", "color": "black" } }, [
                            vue.createElementVNode(
                              "text",
                              { style: { "font-size": "40rpx" } },
                              vue.toDisplayString(item.username),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "text",
                              { style: { "font-size": "25rpx" } },
                              vue.toDisplayString("邮箱：" + item.email),
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        item.type === "1" ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          style: { "margin-top": "20rpx", "color": "black" }
                        }, [
                          vue.createElementVNode("view", null, [
                            vue.createElementVNode(
                              "text",
                              null,
                              vue.toDisplayString("提交时间：" + item.current_time.slice(0, 16)),
                              1
                              /* TEXT */
                            )
                          ]),
                          vue.createElementVNode("view", null, [
                            vue.createElementVNode("text", null, vue.toDisplayString("练习成绩：")),
                            item.score < 60 ? (vue.openBlock(), vue.createElementBlock(
                              "text",
                              {
                                key: 0,
                                style: { "color": "crimson" }
                              },
                              vue.toDisplayString(item.score),
                              1
                              /* TEXT */
                            )) : (vue.openBlock(), vue.createElementBlock(
                              "text",
                              {
                                key: 1,
                                style: { "color": "ForestGreen" }
                              },
                              vue.toDisplayString(item.score),
                              1
                              /* TEXT */
                            )),
                            vue.createElementVNode("text", null, " 分")
                          ]),
                          vue.createElementVNode("view", null, [
                            vue.createElementVNode(
                              "text",
                              null,
                              vue.toDisplayString("练习用时：" + item.time),
                              1
                              /* TEXT */
                            )
                          ]),
                          vue.createElementVNode("view", { style: { "float": "right", "margin-top": "-60rpx", "margin-bottom": "10rpx" } }, [
                            vue.createElementVNode("button", {
                              size: "mini",
                              type: "primary",
                              onClick: ($event) => detail(item)
                            }, "查看详情", 8, ["onClick"])
                          ])
                        ])) : (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          style: { "margin-top": "15rpx", "color": "crimson", "margin-bottom": "5rpx", "font-size": "35rpx" }
                        }, [
                          vue.createElementVNode("text", null, "未提交")
                        ]))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesClass_controlHomework_detail = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "D:/Project/English/English_android/pages/class_control/homework_detail.vue"]]);
  const _sfc_main$a = {
    __name: "student_homework",
    setup(__props) {
      let homeworkClass = vue.ref();
      vue.ref();
      let class_id = vue.ref();
      onLoad((e) => {
        class_id.value = e.class_id;
        https.post("/student/homework_list", { "class_id": e.class_id, "user_id": e.user_id }).then((res) => {
          homeworkClass.value = res.data;
        }).catch(() => {
          ElMessage.error("未连接到服务器");
        });
      });
      function begin(item) {
        if (item.homework_type === "选择") {
          uni.navigateTo({
            url: "/pages/homework/ninegrid?homework_id=" + item.homework_id
          });
        } else if (item.homework_type === "填空") {
          uni.navigateTo({
            url: "/pages/homework/blank?homework_id=" + item.homework_id
          });
        }
      }
      function detail(item) {
        uni.navigateTo({
          url: "/pages/homework/detail?homework_id=" + item.homework_id
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_0);
        return vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(vue.unref(homeworkClass), (item) => {
            return vue.openBlock(), vue.createElementBlock("view", null, [
              vue.createVNode(
                _component_uni_card,
                null,
                {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", { style: { "display": "flex", "flex-direction": "column", "float": "left" } }, [
                      vue.createElementVNode(
                        "text",
                        { style: { "font-size": "40rpx", "font-weight": "600", "margin-bottom": "10rpx", "margin-left": "-15rpx", "color": "black" } },
                        vue.toDisplayString(item.homework_name),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { style: { "margin-left": "5rpx", "display": "flex", "flex-direction": "column", "margin-bottom": "10rpx" } }, [
                        vue.createElementVNode("view", { style: { "display": "flex", "flex-direction": "row", "margin-bottom": "10rpx" } }, [
                          vue.createElementVNode(
                            "view",
                            { class: "label" },
                            vue.toDisplayString(item.grade),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "view",
                            {
                              class: "label",
                              style: { "margin-left": "15rpx" }
                            },
                            vue.toDisplayString(item.homework_type),
                            1
                            /* TEXT */
                          )
                        ]),
                        vue.createElementVNode(
                          "text",
                          null,
                          vue.toDisplayString("文章名称：" + item.essay_name),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "text",
                          null,
                          vue.toDisplayString("截止时间：" + item.end_date.slice(0, 16)),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode("view", { style: { "float": "right", "display": "flex", "flex-direction": "column", "text-align": "center", "margin-top": "10rpx" } }, [
                      vue.createElementVNode("view", { style: { "font-size": "32rpx" } }, [
                        item.status !== "已完成" ? (vue.openBlock(), vue.createElementBlock(
                          "text",
                          { key: 0 },
                          vue.toDisplayString(item.status),
                          1
                          /* TEXT */
                        )) : vue.createCommentVNode("v-if", true),
                        item.status === "已完成" ? (vue.openBlock(), vue.createElementBlock("div", { key: 1 }, [
                          vue.createElementVNode("text", null, "总分："),
                          item.score < 60 ? (vue.openBlock(), vue.createElementBlock(
                            "text",
                            {
                              key: 0,
                              style: { "color": "crimson", "font-size": "52rpx" }
                            },
                            vue.toDisplayString(item.score),
                            1
                            /* TEXT */
                          )) : (vue.openBlock(), vue.createElementBlock(
                            "text",
                            {
                              key: 1,
                              style: { "color": "ForestGreen", "font-size": "52rpx" }
                            },
                            vue.toDisplayString(item.score),
                            1
                            /* TEXT */
                          )),
                          vue.createElementVNode("text", null, " 分")
                        ])) : vue.createCommentVNode("v-if", true)
                      ]),
                      vue.createElementVNode("view", { style: { "margin-top": "110rpx", "margin-bottom": "10rpx" } }, [
                        item.status === "进行中" ? (vue.openBlock(), vue.createElementBlock("button", {
                          key: 0,
                          size: "mini",
                          type: "primary",
                          onClick: ($event) => begin(item)
                        }, "开始练习", 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
                        item.status === "已完成" ? (vue.openBlock(), vue.createElementBlock("button", {
                          key: 1,
                          size: "mini",
                          type: "primary",
                          onClick: ($event) => detail(item)
                        }, "查看详情", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                      ])
                    ])
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              )
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        );
      };
    }
  };
  const PagesHomeworkStudent_homework = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "D:/Project/English/English_android/pages/homework/student_homework.vue"]]);
  const _sfc_main$9 = {
    __name: "ninegrid",
    setup(__props) {
      let word_list = vue.ref();
      let timer = null;
      let clock = null;
      const audioContext = uni.createInnerAudioContext();
      const essay = vue.reactive({
        essay_data: [],
        // 保存整篇文章的数据
        essay_length: "",
        // 保存句子的数量
        select_word: [],
        //保存选择出来的单词
        nine_select: [],
        //保存九宫格里的单词
        percentage: 0,
        //保存进度条的数据
        current_sentence: 0,
        //保存当前练习的句子
        current_word: 0,
        //保存当前要选择的单词
        start_audio: "",
        //音频开始时间
        pause_audio: "",
        //音频暂停时间
        end_audio: "",
        //音频结束时间
        translate: ""
      });
      const options = vue.reactive({
        translate_show: false,
        //管理翻译的存在
        isPlay: false,
        //管理录音开关的按钮
        word_num: 1,
        correct_num: 0,
        all_num: 0,
        clock: 0,
        select_time: 0,
        select_num: 0
      });
      const result_sentence = vue.reactive({
        user_id: JSON.parse(uni.getStorageSync("token")).user_id,
        sen_id: "",
        word: "",
        num: "",
        time: ""
      });
      const result_essay = vue.reactive({
        user_id: JSON.parse(uni.getStorageSync("token")).user_id,
        score: 0,
        time: ""
      });
      onLoad((e) => {
        result_sentence.homework_id = e.homework_id;
        result_essay.homework_id = e.homework_id;
        https.post(
          "/student/sentence",
          {
            "homework_id": e.homework_id,
            "user_id": JSON.parse(uni.getStorageSync("token")).user_id
          }
        ).then((res) => {
          essay.essay_data = res.data.data;
          essay.essay_length = res.data.data.length;
          audioContext.src = common.fronturl + res.data.audio_address;
          essay.current_sentence = res.data.start_id;
          essay.percentage = (essay.current_sentence + 1) / parseInt(essay.essay_length) * 100;
          handleText(essay.essay_data[essay.current_sentence]);
          clock = setInterval(() => {
            options.clock++;
          }, 1e3);
        });
      });
      function handleText(sentenceData) {
        result_sentence.sen_id = sentenceData.sen_id;
        options.select_num = sentenceData.select_num;
        essay.translate = sentenceData.translate;
        essay.start_audio = sentenceData.audio_start;
        essay.end_audio = sentenceData.audio_end;
        essay.pause_audio = essay.start_audio;
        word_list.value = sentenceData.article;
        getNine();
      }
      function getNine() {
        essay.select_word = word_list.value.filter((item) => item.type === "select");
        if (essay.select_word.length === 0) {
          essay.nine_select = [];
        } else {
          essay.current_word = essay.select_word[0].id;
          essay.nine_select = shuffleArray(essay.select_word);
        }
      }
      function shuffleArray(arr) {
        let newArr = Array.from(arr);
        if (newArr.length > 9) {
          newArr = newArr.slice(0, 9);
          newArr.sort(() => Math.random() - 0.5);
        } else {
          newArr.sort(() => Math.random() - 0.5);
        }
        return newArr;
      }
      function play_audio() {
        if (audioContext.src != "") {
          options.isPlay = true;
          audioContext.seek(essay.pause_audio);
          audioContext.play();
          timer = setTimeout(() => {
            audioContext.pause();
            options.isPlay = false;
            essay.pause_audio = essay.start_audio;
          }, (essay.end_audio - essay.pause_audio) * 1e3);
        } else {
          uni.showToast({
            title: "该句子没有音频",
            position: "bottom"
          });
        }
      }
      function pause_audio() {
        clearTimeout(timer);
        options.isPlay = false;
        essay.pause_audio = audioContext.currentTime;
        audioContext.pause();
      }
      function translate() {
        if (essay.translate != "" && essay.translate != null) {
          if (options.translate_show == false) {
            options.translate_show = true;
          } else {
            options.translate_show = false;
          }
        } else {
          uni.showToast({
            title: "该句子没有翻译内容",
            position: "bottom"
          });
        }
      }
      function forward() {
        if (essay.select_word.length == 0) {
          options.translate_show = false;
          options.isPlay = false;
          audioContext.pause();
          if (result_sentence.word.split(",").filter((item) => item !== "").length == options.select_num && result_sentence.word != "") {
            https.post("/student/sentence_result", result_sentence).then(() => {
              result_sentence.word = "";
              result_sentence.num = "";
              result_sentence.time = "";
            });
          }
          if (essay.current_sentence < essay.essay_length - 1) {
            essay.current_sentence++;
            essay.percentage = (essay.current_sentence + 1) / parseInt(essay.essay_length) * 100;
            options.translate_show = false;
            options.isPlay = false;
            audioContext.pause();
            handleText(essay.essay_data[essay.current_sentence]);
          } else {
            result_essay.score = options.correct_num / options.all_num * 100;
            result_essay.time = options.clock.toString();
            clearInterval(clock);
            https.post("/student/homework_result", result_essay).then((res) => {
              if (res.data.code === 200) {
                uni.showToast({
                  title: "提交成功",
                  icon: "success",
                  duration: 3e3
                }), uni.navigateBack();
              }
            });
          }
        } else {
          uni.showToast({
            title: "请做完当前题",
            position: "bottom"
          });
        }
      }
      function back() {
        if (essay.current_sentence > 0) {
          essay.current_sentence--;
          essay.percentage = (essay.current_sentence + 1) / essay.essay_length * 100;
          options.translate_show = false;
          options.isPlay = false;
          audioContext.pause();
          handleText(essay.essay_data[essay.current_sentence]);
        } else {
          uni.showToast({
            title: "已经是第一句",
            position: "bottom"
          });
        }
      }
      function select_btn(e) {
        const word = word_list.value.filter((item) => item.id === e.id);
        let count = 0;
        if (essay.current_word === e.id) {
          essay.select_word.shift();
          word_list.value.forEach((word2) => {
            delete word2.status;
          });
          if (options.word_num === 1) {
            options.correct_num++;
            word[0].type = "correct";
          } else {
            word[0].type = "error";
          }
          result_sentence.word += e.id.toString() + ",";
          result_sentence.num += options.word_num.toString() + ",";
          result_sentence.time += (options.clock - options.select_time).toString() + ",";
          options.select_time = options.clock;
          options.word_num = 1;
          options.all_num++;
          if (essay.select_word.length !== 0) {
            getNine();
          } else {
            forward();
          }
        } else {
          word[0]["status"] = "error";
          word_list.value.forEach((word2) => {
            if (word2.status === "error") {
              count += 1;
            }
          });
          if (count === 3) {
            word_list.value.forEach((word2) => {
              delete word2.status;
            });
            getNine();
          }
          options.word_num++;
        }
      }
      function home() {
        audioContext.pause();
        clearInterval(clock);
        uni.navigateBack();
      }
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_uni_nav_bar, {
              fixed: true,
              "status-bar": "",
              "left-icon": "left",
              title: "作业练习",
              onClickLeft: _cache[0] || (_cache[0] = ($event) => home()),
              "background-color": "#F5F5F5",
              border: false
            }),
            vue.createElementVNode("progress", {
              percent: essay.percentage,
              style: { "padding": "12px 10px 8px" }
            }, null, 8, ["percent"]),
            vue.createElementVNode(
              "text",
              { style: { "padding": "8px 10px" } },
              "选择  " + vue.toDisplayString(essay.current_sentence + 1) + "/" + vue.toDisplayString(essay.essay_length),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "sentence_box" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(word_list), (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "sentence" }, [
                    item.type == "normal" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      { key: 0 },
                      vue.toDisplayString(item.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    item.type == "correct" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 1,
                        style: { "color": "ForestGreen" }
                      },
                      vue.toDisplayString(item.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    item.type == "error" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 2,
                        style: { "color": "crimson" }
                      },
                      vue.toDisplayString(item.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    item.type == "select" ? (vue.openBlock(), vue.createElementBlock("text", { key: 3 }, vue.toDisplayString("______"))) : vue.createCommentVNode("v-if", true)
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ]),
            options.translate_show ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: "translate_text"
              },
              vue.toDisplayString(essay.translate),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "select_grid" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(essay.nine_select, (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    style: { "margin-top": "5px", "margin-left": "5px" },
                    key: item.id
                  }, [
                    item.status === "error" ? (vue.openBlock(), vue.createElementBlock("button", {
                      key: 0,
                      class: "error_btn",
                      onClick: ($event) => select_btn(item)
                    }, vue.toDisplayString(item.text), 9, ["onClick"])) : (vue.openBlock(), vue.createElementBlock("button", {
                      key: 1,
                      class: "nine_btn",
                      onClick: ($event) => select_btn(item)
                    }, vue.toDisplayString(item.text), 9, ["onClick"]))
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("view", { class: "control" }, [
              vue.createElementVNode("view", { class: "audio_control" }, [
                vue.createElementVNode("image", {
                  src: "/static/icons/back.png",
                  style: { "width": "35px", "height": "35px", "margin-right": "8px" },
                  onClick: _cache[1] || (_cache[1] = ($event) => back())
                }),
                options.isPlay == true ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: "/static/icons/play.png",
                  style: { "width": "35px", "height": "35px" },
                  onClick: _cache[2] || (_cache[2] = ($event) => pause_audio())
                })) : vue.createCommentVNode("v-if", true),
                options.isPlay == false ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 1,
                  src: "/static/icons/pause.png",
                  style: { "width": "35px", "height": "35px" },
                  onClick: _cache[3] || (_cache[3] = ($event) => play_audio())
                })) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("image", {
                  src: "/static/icons/forward.png",
                  style: { "width": "35px", "height": "35px", "margin-left": "8px" },
                  onClick: _cache[4] || (_cache[4] = ($event) => forward())
                })
              ]),
              vue.createElementVNode("image", {
                src: "/static/icons/translate.png",
                class: "translate_btn",
                onClick: _cache[5] || (_cache[5] = ($event) => translate())
              })
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesHomeworkNinegrid = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "D:/Project/English/English_android/pages/homework/ninegrid.vue"]]);
  const _sfc_main$8 = {
    __name: "blank",
    setup(__props) {
      let word_list = vue.ref();
      let timer = null;
      let clock = null;
      const audioContext = uni.createInnerAudioContext();
      const essay = vue.reactive({
        essay_data: [],
        // 保存整篇文章的数据
        essay_length: "",
        // 保存句子的数量
        select_word: [],
        //保存选择出来的单词
        nine_select: [],
        //保存九宫格里的单词
        percentage: 0,
        //保存进度条的数据
        current_sentence: 0,
        //保存当前练习的句子
        current_word: 0,
        //保存当前要选择的单词
        start_audio: "",
        //音频开始时间
        pause_audio: "",
        //音频暂停时间
        end_audio: "",
        //音频结束时间
        translate: ""
      });
      const options = vue.reactive({
        translate_show: false,
        //管理翻译的存在
        isPlay: false,
        //管理录音开关的按钮
        word_num: 1,
        correct_num: 0,
        all_num: 0,
        clock: 0,
        select_time: 0,
        select_num: 0
      });
      const result_sentence = vue.reactive({
        user_id: JSON.parse(uni.getStorageSync("token")).user_id,
        sen_id: "",
        word: "",
        num: "",
        time: ""
      });
      const result_essay = vue.reactive({
        user_id: JSON.parse(uni.getStorageSync("token")).user_id,
        score: 0,
        time: ""
      });
      onLoad((e) => {
        result_sentence.homework_id = e.homework_id;
        result_essay.homework_id = e.homework_id;
        https.post(
          "/student/sentence",
          {
            "homework_id": e.homework_id,
            "user_id": JSON.parse(uni.getStorageSync("token")).user_id
          }
        ).then((res) => {
          essay.essay_data = res.data.data;
          essay.essay_length = res.data.data.length;
          audioContext.src = common.fronturl + res.data.audio_address;
          essay.current_sentence = res.data.start_id;
          essay.percentage = (essay.current_sentence + 1) / parseInt(essay.essay_length) * 100;
          handleText(essay.essay_data[essay.current_sentence]);
          clock = setInterval(() => {
            options.clock++;
          }, 1e3);
        });
      });
      function handleText(sentenceData) {
        result_sentence.sen_id = sentenceData.sen_id;
        options.select_num = sentenceData.select_num;
        essay.translate = sentenceData.translate;
        essay.start_audio = sentenceData.audio_start;
        essay.end_audio = sentenceData.audio_end;
        essay.pause_audio = essay.start_audio;
        word_list.value = sentenceData.article;
        word_list.value.forEach((item) => {
          if (item["type"] === "select") {
            item["answer"] = "";
          }
        });
      }
      function play_audio() {
        if (audioContext.src != "") {
          options.isPlay = true;
          audioContext.seek(essay.pause_audio);
          audioContext.play();
          timer = setTimeout(() => {
            audioContext.pause();
            options.isPlay = false;
            essay.pause_audio = essay.start_audio;
          }, (essay.end_audio - essay.pause_audio) * 1e3);
        } else {
          uni.showToast({
            title: "该句子没有音频",
            position: "bottom"
          });
        }
      }
      function pause_audio() {
        clearTimeout(timer);
        options.isPlay = false;
        essay.pause_audio = audioContext.currentTime;
        audioContext.pause();
      }
      function translate() {
        if (essay.translate != "" && essay.translate != null) {
          if (options.translate_show == false) {
            options.translate_show = true;
          } else {
            options.translate_show = false;
          }
        } else {
          uni.showToast({
            title: "该句子没有翻译内容",
            position: "bottom"
          });
        }
      }
      function forward() {
        if (essay.select_word.length == 0) {
          options.translate_show = false;
          options.isPlay = false;
          audioContext.pause();
          if (result_sentence.word.split(",").filter((item) => item !== "").length == options.select_num && result_sentence.word != "") {
            https.post("/student/sentence_result", result_sentence).then(() => {
              result_sentence.word = "";
              result_sentence.num = "";
              result_sentence.time = "";
            });
          }
          if (essay.current_sentence < essay.essay_length - 1) {
            essay.current_sentence++;
            essay.percentage = (essay.current_sentence + 1) / parseInt(essay.essay_length) * 100;
            options.translate_show = false;
            options.isPlay = false;
            audioContext.pause();
            handleText(essay.essay_data[essay.current_sentence]);
          } else {
            result_essay.score = options.correct_num / options.all_num * 100;
            result_essay.time = options.clock.toString();
            clearInterval(clock);
            https.post("/student/homework_result", result_essay).then((res) => {
              if (res.data.code === 200) {
                uni.showToast({
                  title: "提交成功",
                  icon: "success",
                  duration: 3e3
                }), uni.navigateBack();
              }
            });
          }
        } else {
          uni.showToast({
            title: "请做完当前题",
            position: "bottom"
          });
        }
      }
      function back() {
        if (essay.current_sentence > 0) {
          essay.current_sentence--;
          essay.percentage = (essay.current_sentence + 1) / essay.essay_length * 100;
          options.translate_show = false;
          options.isPlay = false;
          audioContext.pause();
          handleText(essay.essay_data[essay.current_sentence]);
        } else {
          uni.showToast({
            title: "已经是第一句",
            position: "bottom"
          });
        }
      }
      function blank_check(e) {
        let current_word = "";
        essay.select_word = word_list.value.filter((item) => item.type === "select");
        essay.select_word.forEach((item) => {
          if (item.id === e.id) {
            current_word = item.text;
          }
        });
        if (current_word === e.answer) {
          essay.select_word.shift();
          word_list.value.forEach((word) => {
            delete word.status;
          });
          if (options.word_num === 1) {
            options.correct_num++;
            e["type"] = "correct";
          } else {
            e["type"] = "error";
          }
          result_sentence.word += e.id.toString() + ",";
          result_sentence.num += options.word_num.toString() + ",";
          result_sentence.time += (options.clock - options.select_time).toString() + ",";
          options.select_time = options.clock;
          options.word_num = 1;
          options.all_num++;
          if (essay.select_word.length === 0) {
            forward();
          }
        } else {
          e["status"] = "error";
          options.word_num++;
        }
      }
      function home() {
        audioContext.pause();
        clearInterval(clock);
        uni.navigateBack();
      }
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_uni_nav_bar, {
              fixed: true,
              "status-bar": "",
              "left-icon": "left",
              title: "作业练习",
              onClickLeft: _cache[0] || (_cache[0] = ($event) => home()),
              "background-color": "#F5F5F5",
              border: false
            }),
            vue.createElementVNode("progress", {
              percent: essay.percentage,
              style: { "padding": "12px 10px 8px" }
            }, null, 8, ["percent"]),
            vue.createElementVNode(
              "text",
              { style: { "padding": "8px 10px" } },
              "填空  " + vue.toDisplayString(essay.current_sentence + 1) + "/" + vue.toDisplayString(essay.essay_length),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "sentence_box" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(word_list), (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "sentence" }, [
                    item.type == "normal" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      { key: 0 },
                      vue.toDisplayString(item.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    item.type == "correct" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 1,
                        style: { "color": "ForestGreen" }
                      },
                      vue.toDisplayString(item.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    item.type == "error" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 2,
                        style: { "color": "crimson" }
                      },
                      vue.toDisplayString(item.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    item.type == "select" && item.status == "error" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                      key: 3,
                      "onUpdate:modelValue": ($event) => item.answer = $event,
                      onBlur: ($event) => blank_check(item),
                      class: "error_input",
                      "auto-blur": ""
                    }, null, 40, ["onUpdate:modelValue", "onBlur"])), [
                      [vue.vModelText, item.answer]
                    ]) : vue.createCommentVNode("v-if", true),
                    item.type == "select" && item.status != "error" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                      key: 4,
                      "onUpdate:modelValue": ($event) => item.answer = $event,
                      onBlur: ($event) => blank_check(item),
                      class: "answer_input",
                      "auto-blur": ""
                    }, null, 40, ["onUpdate:modelValue", "onBlur"])), [
                      [vue.vModelText, item.answer]
                    ]) : vue.createCommentVNode("v-if", true)
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ]),
            options.translate_show ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: "translate_text"
              },
              vue.toDisplayString(essay.translate),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "control" }, [
              vue.createElementVNode("view", { class: "audio_control" }, [
                vue.createElementVNode("image", {
                  src: "/static/icons/back.png",
                  style: { "width": "35px", "height": "35px", "margin-right": "8px" },
                  onClick: _cache[1] || (_cache[1] = ($event) => back())
                }),
                options.isPlay == true ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: "/static/icons/play.png",
                  style: { "width": "35px", "height": "35px" },
                  onClick: _cache[2] || (_cache[2] = ($event) => pause_audio())
                })) : vue.createCommentVNode("v-if", true),
                options.isPlay == false ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 1,
                  src: "/static/icons/pause.png",
                  style: { "width": "35px", "height": "35px" },
                  onClick: _cache[3] || (_cache[3] = ($event) => play_audio())
                })) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("image", {
                  src: "/static/icons/forward.png",
                  style: { "width": "35px", "height": "35px", "margin-left": "8px" },
                  onClick: _cache[4] || (_cache[4] = ($event) => forward())
                })
              ]),
              vue.createElementVNode("image", {
                src: "/static/icons/translate.png",
                class: "translate_btn",
                onClick: _cache[5] || (_cache[5] = ($event) => translate())
              })
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesHomeworkBlank = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "D:/Project/English/English_android/pages/homework/blank.vue"]]);
  const _sfc_main$7 = {
    __name: "detail",
    setup(__props) {
      let sentence_list = vue.ref();
      onLoad((e) => {
        let user_id = "";
        if ("user_id" in e) {
          user_id = e.user_id;
        } else {
          user_id = JSON.parse(uni.getStorageSync("token")).user_id;
        }
        https.post(
          "/student/content_result",
          {
            "homework_id": e.homework_id,
            "user_id": user_id
          }
        ).then((res) => {
          sentence_list.value = res.data;
        });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(vue.unref(sentence_list), (item) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "box" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(item, (word) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "box_sentence" }, [
                    word.type == "normal" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      { key: 0 },
                      vue.toDisplayString(word.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    word.type == "correct" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 1,
                        style: { "color": "ForestGreen" }
                      },
                      vue.toDisplayString(word.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    word.type == "wrong" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 2,
                        style: { "color": "crimson" }
                      },
                      vue.toDisplayString(word.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true)
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        );
      };
    }
  };
  const PagesHomeworkDetail = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "D:/Project/English/English_android/pages/homework/detail.vue"]]);
  const _sfc_main$6 = {
    __name: "index",
    setup(__props) {
      let token = JSON.parse(uni.getStorageSync("token"));
      let avatar = "";
      onShow(() => {
        token = JSON.parse(uni.getStorageSync("token"));
        avatar = common.fronturl + token.avatar;
      });
      function userInform() {
        uni.navigateTo({
          url: "/pages/user_control/user_info"
        });
      }
      function password() {
        uni.navigateTo({
          url: "/pages/user_control/change_password"
        });
      }
      function score() {
        uni.navigateTo({
          url: "/pages/user_control/my_score/index"
        });
      }
      function logout() {
        uni.clearStorageSync();
        uni.reLaunch({
          url: "/pages/login"
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", {
              class: "item_one",
              onClick: _cache[0] || (_cache[0] = ($event) => userInform())
            }, [
              vue.createElementVNode("image", {
                src: vue.unref(avatar),
                class: "avatar"
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "info_box" }, [
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(vue.unref(token).username),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  { style: { "margin-top": "5rpx" } },
                  vue.toDisplayString("ID: " + vue.unref(token).user_id),
                  1
                  /* TEXT */
                )
              ]),
              vue.createVNode(_component_uni_icons, { type: "forward" })
            ]),
            vue.createElementVNode("view", {
              class: "item_tow",
              onClick: _cache[1] || (_cache[1] = ($event) => score())
            }, [
              vue.createElementVNode("text", null, "我的成绩"),
              vue.createVNode(_component_uni_icons, { type: "forward" })
            ]),
            vue.createElementVNode("view", {
              class: "item_tow",
              onClick: _cache[2] || (_cache[2] = ($event) => password())
            }, [
              vue.createElementVNode("text", null, "修改密码"),
              vue.createVNode(_component_uni_icons, { type: "forward" })
            ]),
            vue.createElementVNode("button", {
              type: "warn",
              style: { "margin-top": "80rpx" },
              onClick: _cache[3] || (_cache[3] = ($event) => logout())
            }, "退出登录")
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesUser_controlIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "D:/Project/English/English_android/pages/user_control/index.vue"]]);
  const _sfc_main$5 = {
    __name: "user_info",
    setup(__props) {
      let token = "";
      uni.getStorageSync("password");
      let avatar = "";
      let role = "";
      onShow(() => {
        token = JSON.parse(uni.getStorageSync("token"));
        avatar = common.fronturl + token.avatar;
        if (token.role == "teacher") {
          role = "教师";
        } else if (token.role == "admin") {
          role = "管理员";
        } else {
          role = "学生";
        }
      });
      function change(item) {
        uni.navigateTo({
          url: "/pages/user_control/change_info?title=" + item
        });
      }
      function avatar_change() {
        uni.chooseImage({
          count: 1,
          success: function(res) {
            uploadPhoto(res.tempFilePaths);
          }
        });
      }
      function uploadPhoto(tempFilePaths) {
        uni.uploadFile({
          url: common.backurl + "/auth/set_avatar",
          headers: {
            "Access-Control-Allow-Origin": "*"
          },
          filePath: tempFilePaths[0],
          // 要上传文件资源的路径
          name: "file",
          // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
          formData: {
            username: token.username
            // 将修改后的文件名作为表单数据传递给服务器
          },
          success(res) {
            token.avatar = "/assets/images/" + token.username + ".png";
            uni.setStorageSync("token", JSON.stringify(token));
            uni.showToast({
              title: "修改成功",
              icon: "success",
              duration: 3e3
            }), uni.navigateBack();
          }
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", {
              class: "item_one",
              onClick: _cache[0] || (_cache[0] = ($event) => avatar_change())
            }, [
              vue.createElementVNode("text", null, "头像"),
              vue.createElementVNode("image", {
                src: vue.unref(avatar),
                class: "avatar"
              }, null, 8, ["src"]),
              vue.createVNode(_component_uni_icons, { type: "forward" })
            ]),
            vue.createElementVNode("view", {
              class: "item_tow",
              onClick: _cache[1] || (_cache[1] = ($event) => change("用户名"))
            }, [
              vue.createElementVNode("text", null, "用户名"),
              vue.createElementVNode(
                "text",
                { class: "item_right" },
                vue.toDisplayString(vue.unref(token).username),
                1
                /* TEXT */
              ),
              vue.createVNode(_component_uni_icons, { type: "forward" })
            ]),
            vue.createElementVNode("view", {
              class: "item_tow",
              onClick: _cache[2] || (_cache[2] = ($event) => change("邮箱"))
            }, [
              vue.createElementVNode("text", null, "电子邮箱"),
              vue.createElementVNode(
                "text",
                { class: "item_right" },
                vue.toDisplayString(vue.unref(token).email),
                1
                /* TEXT */
              ),
              vue.createVNode(_component_uni_icons, { type: "forward" })
            ]),
            vue.createElementVNode("view", { class: "item_tow" }, [
              vue.createElementVNode("text", null, "角色"),
              vue.createElementVNode(
                "text",
                { class: "role" },
                vue.toDisplayString(vue.unref(role)),
                1
                /* TEXT */
              )
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesUser_controlUser_info = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "D:/Project/English/English_android/pages/user_control/user_info.vue"]]);
  const _sfc_main$4 = {
    __name: "change_password",
    setup(__props) {
      let token = JSON.parse(uni.getStorageSync("token"));
      let password = uni.getStorageSync("password");
      const passwordData = vue.reactive({
        old_password: "",
        new_password: "",
        check_password: ""
      });
      const passwordStatu = vue.reactive({
        old_password: true,
        new_password: true,
        check_password: true
      });
      function oldPassword() {
        if (passwordData.old_password != password) {
          uni.showModal({
            title: "提示",
            content: "原密码不正确",
            showCancel: false
          });
        } else {
          passwordStatu.old_password = false;
        }
      }
      function newPassword() {
        if (passwordData.new_password.length < 3 || passwordData.new_password.length > 10) {
          uni.showModal({
            title: "提示",
            content: "密码必须是3-10位的字符",
            showCancel: false
          });
        } else {
          passwordStatu.new_password = false;
        }
      }
      function checkPassword() {
        if (passwordData.new_password != passwordData.check_password) {
          uni.showModal({
            title: "提示",
            content: "两次密码不一致",
            showCancel: false
          });
        } else {
          passwordStatu.check_password = false;
        }
      }
      function submit() {
        if (passwordStatu.old_password) {
          uni.showModal({
            title: "提示",
            content: "原密码不正确",
            showCancel: false
          });
        } else if (passwordStatu.new_password) {
          if (passwordData.new_password.length < 3 || passwordData.new_password.length > 10) {
            uni.showModal({
              title: "提示",
              content: "密码必须是3-10位的字符",
              showCancel: false
            });
          }
        } else if (passwordStatu.check_password) {
          if (passwordData.new_password != passwordData.check_password) {
            uni.showModal({
              title: "提示",
              content: "两次密码不一致",
              showCancel: false
            });
          }
        } else {
          https.post("/auth/change_password", { "user_id": token.user_id, "password": passwordData.new_password }).then((res) => {
            if (res.data.code === 200) {
              uni.showToast({
                title: "修改成功",
                icon: "success",
                duration: 3e3
              });
              uni.clearStorageSync();
              uni.reLaunch({
                url: "/pages/login"
              });
            }
          }).catch(() => {
            uni.showToast({
              title: "未连接到服务器",
              icon: "error",
              duration: 3e3
            });
          });
        }
      }
      return (_ctx, _cache) => {
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("text", null, "原密码"),
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                modelValue: passwordData.old_password,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => passwordData.old_password = $event),
                placeholder: "请输入原密码",
                onBlur: _cache[1] || (_cache[1] = ($event) => oldPassword())
              }, null, 8, ["modelValue"])
            ]),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("text", null, "新密码"),
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                modelValue: passwordData.new_password,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => passwordData.new_password = $event),
                placeholder: "请输入新密码",
                onBlur: _cache[3] || (_cache[3] = ($event) => newPassword())
              }, null, 8, ["modelValue"])
            ]),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("text", null, "确认密码"),
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                modelValue: passwordData.check_password,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => passwordData.check_password = $event),
                placeholder: "再次填写确认",
                onBlur: _cache[5] || (_cache[5] = ($event) => checkPassword())
              }, null, 8, ["modelValue"])
            ]),
            vue.createElementVNode("button", {
              type: "primary",
              onClick: _cache[6] || (_cache[6] = ($event) => submit()),
              class: "btn-submit"
            }, "提交")
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesUser_controlChange_password = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "D:/Project/English/English_android/pages/user_control/change_password.vue"]]);
  const _sfc_main$3 = {
    __name: "index",
    setup(__props) {
      let result = vue.ref();
      onShow(() => {
        https.post("/english/exercise_result", { "user_id": JSON.parse(uni.getStorageSync("token")).user_id }).then((res) => {
          timeChange(res.data);
          result.value = res.data;
        });
      });
      function timeChange(data) {
        for (let i2 = 0; i2 < data.length; i2++) {
          const temp = data[i2].time;
          const minutes = Math.floor(temp / 60);
          const seconds = temp % 60;
          data[i2].time = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
        }
      }
      function detail(item) {
        uni.navigateTo({
          url: "/pages/user_control/my_score/detail?essay_id=" + item.essay_id + "&exercise_num=" + item.exercise_num + "&grade=" + item.grade
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(vue.unref(result), (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "box",
              onClick: ($event) => detail(item)
            }, [
              vue.createElementVNode("view", { class: "box_left" }, [
                vue.createElementVNode(
                  "text",
                  { class: "essay_title" },
                  vue.toDisplayString(item.essay_title),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  { style: { "font-size": "28rpx", "margin-top": "20rpx", "color": "#808080" } },
                  vue.toDisplayString(item.current_time),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { style: { "font-size": "28rpx", "margin-top": "3rpx", "color": "#808080" } }, [
                  vue.createElementVNode(
                    "text",
                    { style: { "margin-right": "10rpx" } },
                    vue.toDisplayString("难度  " + item.grade),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString("第 " + item.exercise_num + " 次"),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode(
                  "text",
                  { style: { "font-size": "28rpx", "margin-top": "3rpx", "color": "#808080" } },
                  vue.toDisplayString("耗时  " + item.time),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode(
                "text",
                { class: "score" },
                vue.toDisplayString(item.score + "分"),
                1
                /* TEXT */
              )
            ], 8, ["onClick"]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        );
      };
    }
  };
  const PagesUser_controlMy_scoreIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "D:/Project/English/English_android/pages/user_control/my_score/index.vue"]]);
  const _sfc_main$2 = {
    __name: "detail",
    setup(__props) {
      let sentence_list = vue.ref();
      onLoad((e) => {
        https.post(
          "/english/content_result",
          {
            "user_id": JSON.parse(uni.getStorageSync("token")).user_id,
            "essay_id": e.essay_id,
            "exercise_num": e.exercise_num,
            "grade": e.grade
          }
        ).then((res) => {
          sentence_list.value = res.data;
        });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(vue.unref(sentence_list), (item) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "box" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(item, (word) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "box_sentence" }, [
                    word.type == "normal" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      { key: 0 },
                      vue.toDisplayString(word.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    word.type == "correct" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 1,
                        style: { "color": "ForestGreen" }
                      },
                      vue.toDisplayString(word.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true),
                    word.type == "wrong" ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 2,
                        style: { "color": "crimson" }
                      },
                      vue.toDisplayString(word.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true)
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        );
      };
    }
  };
  const PagesUser_controlMy_scoreDetail = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "D:/Project/English/English_android/pages/user_control/my_score/detail.vue"]]);
  const _sfc_main$1 = {
    __name: "change_info",
    setup(__props) {
      let title = vue.ref();
      let token = JSON.parse(uni.getStorageSync("token"));
      const editForm = vue.reactive({
        user_id: "",
        username: "",
        email: ""
      });
      onLoad((e) => {
        title.value = e.title;
        editForm.user_id = token.user_id;
        editForm.username = token.username;
        editForm.email = token.email;
      });
      function save() {
        https.post("/auth/user_edit", editForm).then((res) => {
          if (res.data.code === 200) {
            token.username = editForm.username;
            token.email = editForm.email;
            uni.setStorageSync("token", JSON.stringify(token));
            uni.showToast({
              title: "修改成功",
              icon: "success",
              duration: 3e3
            }), uni.navigateBack();
          } else {
            uni.showModal({
              title: "提示",
              content: res.data.message,
              showCancel: false
            });
          }
        });
      }
      function back() {
        uni.navigateBack();
      }
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_uni_nav_bar, {
              fixed: true,
              "status-bar": "",
              "left-icon": "left",
              title: "修改" + vue.unref(title),
              onClickLeft: _cache[0] || (_cache[0] = ($event) => back())
            }, null, 8, ["title"]),
            vue.createElementVNode("view", { class: "input_box" }, [
              vue.unref(title) == "用户名" ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    style: { "border-bottom": "1px solid #000" },
                    placeholder: "请重新输入用户名",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => editForm.username = $event)
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, editForm.username]
                ]),
                vue.createElementVNode("text", null, "用户名在3-12字符以内")
              ])) : vue.createCommentVNode("v-if", true),
              vue.unref(title) == "邮箱" ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    style: { "border-bottom": "1px solid #000" },
                    placeholder: "请重新输入邮箱",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => editForm.email = $event)
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, editForm.email]
                ]),
                vue.createElementVNode("text", null, "请输入正确的邮箱")
              ])) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("button", {
              type: "primary",
              class: "save_btn",
              onClick: _cache[3] || (_cache[3] = ($event) => save())
            }, "保存")
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesUser_controlChange_info = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "D:/Project/English/English_android/pages/user_control/change_info.vue"]]);
  __definePage("pages/login", PagesLogin);
  __definePage("pages/register", PagesRegister);
  __definePage("pages/home", PagesHome);
  __definePage("pages/exercise/index", PagesExerciseIndex);
  __definePage("pages/exercise/save_audio", PagesExerciseSave_audio);
  __definePage("pages/exercise/ninegrid", PagesExerciseNinegrid);
  __definePage("pages/exercise/blank", PagesExerciseBlank);
  __definePage("pages/class_control/index", PagesClass_controlIndex);
  __definePage("pages/class_control/class_details", PagesClass_controlClass_details);
  __definePage("pages/class_control/addHomework", PagesClass_controlAddHomework);
  __definePage("pages/class_control/class_homework", PagesClass_controlClass_homework);
  __definePage("pages/class_control/homework_detail", PagesClass_controlHomework_detail);
  __definePage("pages/homework/student_homework", PagesHomeworkStudent_homework);
  __definePage("pages/homework/ninegrid", PagesHomeworkNinegrid);
  __definePage("pages/homework/blank", PagesHomeworkBlank);
  __definePage("pages/homework/detail", PagesHomeworkDetail);
  __definePage("pages/user_control/index", PagesUser_controlIndex);
  __definePage("pages/user_control/user_info", PagesUser_controlUser_info);
  __definePage("pages/user_control/change_password", PagesUser_controlChange_password);
  __definePage("pages/user_control/my_score/index", PagesUser_controlMy_scoreIndex);
  __definePage("pages/user_control/my_score/detail", PagesUser_controlMy_scoreDetail);
  __definePage("pages/user_control/change_info", PagesUser_controlChange_info);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("warn", "at App.vue:4", "当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
      formatAppLog("log", "at App.vue:5", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:12", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Project/English/English_android/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
