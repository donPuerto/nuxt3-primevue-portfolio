var prefix = "icon-park-outline";
var icons = {
	"a-cane": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19.558 44.768L33.642 18.28c1.173-2.207 3.811-9.299-3.252-13.055C23.326 1.47 19.157 7.181 17.749 9.83\"/>"
	},
	abdominal: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M7.9 5q4.256 4.529 4.256 11.765C12.156 24 6 29.538 4.969 33.5q-1.03 3.962-.97 9.5M39.256 5q-4.257 4.529-4.257 11.765C35 24 41.156 29.538 42.186 33.5q1.03 3.962.97 9.5\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M6.244 30.837q9.787 6.195 17.777 6.195t16.898-6.195\"/><path fill=\"currentColor\" d=\"M24 31a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\"/></g>"
	},
	abnormal: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 16.398V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h10\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M16 14h13m-13 7h5\"/><circle cx=\"34\" cy=\"34\" r=\"10\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" transform=\"rotate(90 34 34)\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M34 36v3\"/><circle cx=\"34\" cy=\"30\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	acceleration: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M42 35h-8m-3 7h-4\"/><path stroke-linejoin=\"round\" d=\"m14 22l-6-5H4s5.486 10 8 10h32l-6-5z\"/><path stroke-linejoin=\"round\" d=\"m30 22l-11.34-8H16l3 8m11 5L17.2 39H14l4.267-12M32 11c0 1-3 2-3 2h10s2.886 0 3.745-2.286C43.63 8.36 42.045 5 39.022 5S36 8 36 8s-1.855-.571-3 0s-1 2-1 3\"/></g>"
	},
	"accept-email": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24V9H4v30h20m20-5H30\"/><path d=\"m35 29l-5 5l5 5M4 9l20 15L44 9\"/></g>"
	},
	acoustic: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M24 4v40m10-32v24M4 18v12m40-12v12M14 12v24\"/>"
	},
	"activity-source": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 5H6v8h36zm0 15H6v8h36zm0 15H6v8h36z\"/>"
	},
	ad: {
		body: "<g fill=\"none\"><circle cx=\"24\" cy=\"24\" r=\"20\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m38 38l-3-3M10 10l3 3\"/><path d=\"M21.143 28L18 17l-3.143 11z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m14 31l.857-3M22 31l-.857-3m0 0L18 17l-3.143 11m6.286 0h-6.286M35 24c0 5-3.582 7-8 7V17c4.418 0 8 2 8 7\"/></g>"
	},
	"ad-product": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 14L24 4L4 14v20l20 10l20-10z\"/><path stroke-linecap=\"round\" d=\"m4 14l20 10m0 20V24m20-10L24 24M34 9L14 19\"/></g>"
	},
	add: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M24 16v16m-8-8h16\"/></g>"
	},
	"add-computer": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M25 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-8M24 34v8m6-30h12m-6-6v12M14 42h20\"/>"
	},
	"add-four": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 6H8a2 2 0 0 0-2 2v8m10 26H8a2 2 0 0 1-2-2v-8m26 10h8a2 2 0 0 0 2-2v-8M32 6h8a2 2 0 0 1 2 2v8m-10 8H16m8 8V16\"/>"
	},
	"add-item": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 30v-6M6 30h36v12H6zm0-17.5v-1M6 18v-1M6 7V6m36 6.5v-1m0 6.5v-1m0-10V6m0 12h-1M7 18H6M7 6H6m8 0h-1m8 0h-1m1 12h-1m8-12h-1M14 18h-1m15 0h-1m8-12h-1m1 12h-1m8-12h-1\"/>"
	},
	"add-mode": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"4\" d=\"m24.003 4l5.27 5.27h9.457v9.456l5.27 5.27l-5.27 5.278v9.456h-9.456L24.004 44l-5.278-5.27H9.27v-9.456L4 23.997l5.27-5.27V9.27h9.456zM17 23.997h14M24.004 17v14\"/>"
	},
	"add-music": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20\"/><path d=\"M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z\"/><path stroke-linecap=\"round\" d=\"M37.05 32v10M42 36.95H32\"/></g>"
	},
	"add-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 16v16m-8-8h16\"/></g>"
	},
	"add-pic": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"4\"><path d=\"M38 21v19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h18.364\"/><path d=\"M12 31.03L18 23l3 3l3.5-5.5L32 31.03zM34 10h8m-4.005-4.205v8\"/></g>"
	},
	"add-picture": {
		body: "<g fill=\"none\"><path fill=\"currentColor\" d=\"M44 24a2 2 0 1 0-4 0zM24 8a2 2 0 1 0 0-4zm15 32H9v4h30zM8 39V9H4v30zm32-15v15h4V24zM9 8h15V4H9zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1zM8 9a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 35l10.693-9.802a2 2 0 0 1 2.653-.044L32 36m-4-5l4.773-4.773a2 2 0 0 1 2.615-.186L42 31M30 12h12m-6-6v12\"/></g>"
	},
	"add-print": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M12 19H6V6h36v13h-6\"/><path stroke-linejoin=\"round\" d=\"M12 12h24v32l-6-4.444L24 44l-6-4.444L12 44z\"/><path d=\"M20 26h8m-4-4v8\"/></g>"
	},
	"add-subset": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 28v7h8m0-7h24v14H18zM6 13.5v-1M6 20v-1M6 7V6m26 7.5v-1m0 7.5v-1m0-12V6m0 14h-1M7 20H6M7 6H6m7 0h-1m7.5 0h-1m1 14h-1M26 6h-1M13 20h-1m14 0h-1m7-14h-1\"/>"
	},
	"add-subtract": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M27 31h8M17 13v8m4-4h-8m21-3L14 34\"/></g>"
	},
	"add-text": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M4 8h28m-4 13h16M18 42V8m18 34V21\"/>"
	},
	"add-text-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M32 16H16m8 18V16\"/></g>"
	},
	"add-three": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 32V16m18 11v-6M6 27v-6m8-15H8a2 2 0 0 0-2 2v6m28-8h6a2 2 0 0 1 2 2v6m-8 28h6a2 2 0 0 0 2-2v-6m-28 8H8a2 2 0 0 1-2-2v-6M27 6h-6m11 18H16m11 18h-6\"/>"
	},
	"add-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M33 7.263A18.9 18.9 0 0 0 24 5C13.507 5 5 13.507 5 24s8.507 19 19 19a18.9 18.9 0 0 0 8-1.761\"/><path stroke-linejoin=\"round\" d=\"M31 30h12m-28-8l7 7l19-18m-4 13v12\"/></g>"
	},
	"add-user": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"12\" r=\"8\"/><path d=\"M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44m13-5h10m-5-5v10\"/></g>"
	},
	"add-web": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M25 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v13.941\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 35h12m-6-6v12\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 10 14)\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 16 14)\"/></g>"
	},
	"address-book": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 36v8h32V4H8v8M6 30h4m-4-6h4m-4-6h4\"/><circle cx=\"24\" cy=\"17\" r=\"4\"/><path d=\"M32 35a8 8 0 1 0-16 0\"/></g>"
	},
	"adjacent-item": {
		body: "<g fill=\"none\"><path d=\"M14 29h28v12H14zm0-22h28v12H14z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 13v6h28V7H14zm0 0H6v22h8m0 0v6h28V29H14z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 13H6v22h8m0-6h28v12H14zm0-22h28v12H14z\"/></g>"
	},
	adjustment: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 8a3 3 0 0 1 3-3h32a3 3 0 0 1 3 3v32a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zm31 4L12 36m0-20h8m7 17h8M16 12v8\"/>"
	},
	"adobe-illustrate": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m20 15l-6 18m18 0v-8m0-5v-1m-12-4l6 18m-10-6h8\"/></g>"
	},
	"adobe-indesign": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16 15v18m16-16v16\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M28 33c-2.5 0-4-1.6-4-4s1.5-4 4-4h4v8z\" clip-rule=\"evenodd\"/></g>"
	},
	"adobe-lightroom": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14 15v18h8m6 0V21m0 5c2.25-4 4.629-4 6-4\"/></g>"
	},
	"adobe-photoshop": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14 15v18\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16 25c3 0 7-.8 7-5s-4-5-7-5h-2v10z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M34 21.025c-1 0-6-.498-6 2.987s6 2.49 6 5.976s-6 2.987-6 2.987\"/></g>"
	},
	afferent: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M42 13.875V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-4.312\"/><path d=\"M42 24H24\"/><path stroke-linejoin=\"round\" d=\"m30 30l-6-6l6-6\"/></g>"
	},
	"afferent-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M21 5H10a2 2 0 0 0-2 2v34a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V24.75\"/><path d=\"M33 24H21V12m0 12L39 6\"/></g>"
	},
	"afferent-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V29\"/><path d=\"m18 17l4 12l12-4\"/><path d=\"M22 29c5-15 8-18 18-22\"/></g>"
	},
	"afferent-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M42 26.25V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h12.75\"/><path d=\"M42 34H24\"/><path stroke-linejoin=\"round\" d=\"m30 40l-6-6l6-6\"/></g>"
	},
	"afro-pick": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M21 4.372L4.03 21.342L26.656 43.97L43.627 27m-16.97-16.971l-16.97 16.97m22.626-11.313l-16.97 16.97M37.97 21.343L21 38.313\"/><path d=\"m16.05 41.849l4.243-4.243l-9.9-9.9l-4.242 4.243l2.121 2.122l1.414 4.242l4.243 1.414z\"/></g>"
	},
	agreement: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"32\" height=\"40\" x=\"8\" y=\"4\" stroke-linejoin=\"round\" rx=\"2\"/><path stroke-linejoin=\"round\" d=\"M16 4h9v16l-4.5-4l-4.5 4z\"/><path d=\"M16 28h10m-10 6h16\"/></g>"
	},
	aiming: {
		body: "<g fill=\"none\"><circle cx=\"24\" cy=\"24\" r=\"20\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><path d=\"M24 37v7z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 37v7\"/><path d=\"M36 24h8z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 24h8\"/><path d=\"M4 24h7z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 24h7\"/><path d=\"M24 11V4z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 11V4\"/></g>"
	},
	"air-bike": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 44h40M28 30h6.19c2.27 0 6.81 1.344 6.81 6.72V44m-6-14l5-11l-6-13m-5 2l10-4\"/><circle cx=\"20\" cy=\"30\" r=\"8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20 30h8m-7-8l-7-9m-4 0h8\"/><path d=\"M20 38a8 8 0 1 0 0-16\"/></g>"
	},
	"air-conditioning": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"20\" x=\"4\" y=\"8\" rx=\"2\"/><path d=\"M12 20h24v8H12zm20-6h4M24 34v6m-8-4v2m16-2v2\"/></g>"
	},
	airplane: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20.5 10.537C20.5 6.514 22.833 4.503 24 4c1.167.503 3.5 2.514 3.5 6.537v7.543L43 31v4l-16-8v9l5 8l-8-3l-8 3l5-8v-9L5 35v-4l15.5-12.92z\"/>"
	},
	"airplane-window": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 18c0-7.732 6.268-14 14-14s14 6.268 14 14v12c0 7.732-6.268 14-14 14s-14-6.268-14-14zm0-1h28m-16-6h4\"/><path d=\"M10 26s5.4-.6 7 1s1 3.369 1 3.369c3 0 6 .158 6 3.631c0 2.5-4 4-6.5 2.369C17.5 38.5 17 40 14 40m24-17s-3.5-2-5-1s-1 3-1 3c-1.5-1-4 0-4 2.5s2.5 3.5 5 2.5c1 3 3.5 3 5 2\"/><path d=\"M25 44c7.18 0 13-5.82 13-13V18c0-7.732-6.268-14-14-14v0m-1 40c-7.18 0-13-5.82-13-13V18c0-7.732 6.268-14 14-14v0\"/></g>"
	},
	"airplane-window-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"m30.349 32l6.506-24.282a3 3 0 0 1 3.675-2.122v0a3 3 0 0 1 2.12 3.675L36.56 32M36 32v6H13a3 3 0 1 1 0-6zM21 44h8\"/><rect width=\"10\" height=\"20\" x=\"6\" y=\"4\" rx=\"5\"/><path stroke-linecap=\"round\" d=\"M6 14h10M6 9v10M16 9v10\"/></g>"
	},
	airplay: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M12 35.014H4V8.013a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v27h-8\"/><path d=\"M24 32L14 42h20z\"/></g>"
	},
	airpods: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 4a9 9 0 0 0-9 9v31h6V21.488A9 9 0 0 0 36 22a9 9 0 0 0 8-4.873V8.873A9 9 0 0 0 36 4M12 4a9 9 0 0 1 9 9v31h-6V21.488A9 9 0 0 1 12 22a9 9 0 0 1-8-4.873V8.873A9 9 0 0 1 12 4m3 9h-1m19 0h1\"/>"
	},
	alarm: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M14 25c0-5.523 4.477-10 10-10s10 4.477 10 10v16H14z\"/><path stroke-linecap=\"round\" d=\"M24 5v3m11.892 1.328l-1.929 2.298m8.256 8.661l-2.955.521m-33.483-.521l2.955.521m3.373-11.48l1.928 2.298M6 41h37\"/></g>"
	},
	"alarm-clock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44.333c10.125 0 18.333-8.208 18.333-18.333S34.125 7.667 24 7.667S5.667 15.875 5.667 26S13.875 44.333 24 44.333Z\"/><path stroke-linecap=\"round\" d=\"m23.76 15.354l-.002 11.008l7.773 7.773M4 9l7-5m33 5l-7-5\"/></g>"
	},
	"align-bottom": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17 6h14v28H17z\"/><path stroke-linecap=\"round\" d=\"M42 42H6\"/></g>"
	},
	"align-bottom-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7 16h6v24H7zm14-8h6v32h-6zm14 14h6v18h-6z\"/>"
	},
	"align-horizontal-center-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7 12h6v24H7zm14-4h6v32h-6zm14 7h6v18h-6z\"/>"
	},
	"align-horizontally": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M7 17h34v14H7z\"/><path stroke-linecap=\"round\" d=\"M24 6v36\"/></g>"
	},
	"align-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M14.5 17h28v14h-28z\"/><path stroke-linecap=\"round\" d=\"M6.5 6v36\"/></g>"
	},
	"align-left-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M16 6h16v6H16z\"/><path d=\"M6 42V6\"/><path stroke-linejoin=\"round\" d=\"M16 21h20v6H16zm0 15h26v6H16z\"/></g>"
	},
	"align-left-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 7h24v6H8zm0 14h32v6H8zm0 14h18v6H8z\"/>"
	},
	"align-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 17h28v14H6z\"/><path stroke-linecap=\"round\" d=\"M42 6v36\"/></g>"
	},
	"align-right-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M42 42V6\"/><path stroke-linejoin=\"round\" d=\"M16 6h16v6H16zm-4 15h20v6H12zM6 36h26v6H6z\"/></g>"
	},
	"align-right-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 7h24v6H16zM8 21h32v6H8zm14 14h18v6H22z\"/>"
	},
	"align-text-both": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 19H6M42 9H6m36 20H6m36 10H6\"/>"
	},
	"align-text-both-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M34 24H14m20-9H14m20 18H14\"/></g>"
	},
	"align-text-bottom": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 36.306h36M6 42h36M30 23l-6 6l-6-6v0m6-17v23\"/>"
	},
	"align-text-bottom-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M34 27H14m13 7H14\"/></g>"
	},
	"align-text-center": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 19H12M42 9H6m36 20H6m30 10H12\"/>"
	},
	"align-text-center-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M30 24H18m16-9H14m20 18H14\"/></g>"
	},
	"align-text-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 9H6m28 10H6m36 10H6m28 10H6\"/>"
	},
	"align-text-left-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" d=\"M26 24H14m20-9H14m18 18H14\"/></g>"
	},
	"align-text-middle": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m18 36l6-6l6 6m-6-5v13m-6-32l6 6l6-6m-6 5V4M6 24h36\"/>"
	},
	"align-text-middle-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M34 20H14m12 7H14\"/></g>"
	},
	"align-text-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 9H6m36 10H14m28 10H6m36 10H14\"/>"
	},
	"align-text-right-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M34 24H22m12-9H14m20 18H16\"/></g>"
	},
	"align-text-top": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 36.306h36M6 42h36M30 12l-6-6l-6 6v0m6-6v23\"/>"
	},
	"align-text-top-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M26 20H14m20-7H14\"/></g>"
	},
	"align-top": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17 14.5h14v28H17z\"/><path stroke-linecap=\"round\" d=\"M42 6.5H6\"/></g>"
	},
	"align-top-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7 8h6v24H7zm14 0h6v32h-6zm14 0h6v18h-6z\"/>"
	},
	"align-vertical-center-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 7h24v6H12zM8 21h32v6H8zm7 14h18v6H15z\"/>"
	},
	"align-vertically": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17 7h14v34H17z\"/><path stroke-linecap=\"round\" d=\"M42 24H6\"/></g>"
	},
	"alignment-bottom-center": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M18 32v4m6-12v12m6-8v8\"/></g>"
	},
	"alignment-bottom-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M12 32v4m6-12v12m6-8v8\"/></g>"
	},
	"alignment-bottom-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M24 32v4m6-12v12m6-8v8\"/></g>"
	},
	"alignment-horizontal-bottom": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M22 36h4m-8-6h12m-10-6h8\"/></g>"
	},
	"alignment-horizontal-center": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M22 30h4m-8-6h12m-10-6h8\"/></g>"
	},
	"alignment-horizontal-top": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M22 24h4m-8-6h12m-10-6h8\"/></g>"
	},
	"alignment-left-bottom": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M12 36h4m-4-6h12m-12-6h8\"/></g>"
	},
	"alignment-left-center": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M12 30h4m-4-6h12m-12-6h8\"/></g>"
	},
	"alignment-left-top": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M12 24h4m-4-6h12m-12-6h8\"/></g>"
	},
	"alignment-right-bottom": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M32 36h4m-12-6h12m-8-6h8\"/></g>"
	},
	"alignment-right-center": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M32 30h4m-12-6h12m-8-6h8\"/></g>"
	},
	"alignment-right-top": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M32 24h4m-12-6h12m-8-6h8\"/></g>"
	},
	"alignment-top-center": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M18 12v4m6-4v12m6-12v8\"/></g>"
	},
	"alignment-top-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M12 12v4m6-4v12m6-12v8\"/></g>"
	},
	"alignment-top-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M24 12v4m6-4v12m6-12v8\"/></g>"
	},
	"alignment-vertical-center": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M18 22v4m6-8v12m6-10v8\"/></g>"
	},
	"alignment-vertical-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M12 22v4m6-8v12m6-10v8\"/></g>"
	},
	"alignment-vertical-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M24 22v4m6-8v12m6-10v8\"/></g>"
	},
	alipay: {
		body: "<path fill=\"currentColor\" d=\"M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48S0 37.255 0 24S10.745 0 24 0m0 4.364C13.155 4.364 4.364 13.155 4.364 24S13.155 43.636 24 43.636c6.738 0 12.683-3.393 16.22-8.565a64 64 0 0 1-6.683-2.402q-1.855-.78-5.541-2.459C25.056 33.173 20.769 36 16.174 36c-3.188-.016-8.538-1.627-8.538-6.654s4.956-6.224 8.172-6.224q2.919 0 10.33 3.222l.077.03q1.989-2.434 2.73-5.653l.1-.464h-12.87v-2.32h5.857v-2.9h-8.201v-1.74h8.201l.001-3.479h4.687v3.48h9.374v1.74H26.72v2.899h7.486q-.165 1.086-.371 1.973l-.084.347q-.517 1.868-2.325 5.442c-.32.632-.782 1.364-1.366 2.139q2.766 1.024 5.6 1.99q3.67 1.249 6.345 2.02A19.6 19.6 0 0 0 43.636 24c0-10.845-8.791-19.636-19.636-19.636m-13.685 24.18c0 3.198 6.69 4.472 12.11 1.106q.915-.57 1.71-1.213l-.018-.008l-.427-.262q-5.074-3.087-7.882-3.348c-1.719-.159-5.493.527-5.493 3.725m18.73-8.287h2.209z\"/>"
	},
	"all-application": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 6H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 22H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2ZM40 6H30a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 22H30a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Z\"/>"
	},
	"alphabetical-sorting": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 4v39.5M7 28h16L7 44h16M7 20l8.276-16L23 20m21 16l-8 8l-8-8\"/>"
	},
	"alphabetical-sorting-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 4v39.5M7 4h16L7 20h16M7 44l8.276-16L23 44m21-8l-8 8l-8-8\"/>"
	},
	ambulance: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M10 35H6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h25a2 2 0 0 1 2 2v6.899a3 3 0 0 0 1.975 2.82l7.05 2.563A3 3 0 0 1 44 26.102V33a2 2 0 0 1-2 2h-4m-20 0h12\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 19h8m-4-4v8\"/><circle cx=\"14\" cy=\"35\" r=\"4\"/><circle cx=\"34\" cy=\"35\" r=\"4\"/></g>"
	},
	analysis: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M44 5H4v12h40z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4 41.03l12.176-12.3l6.579 6.3L30.798 27l4.48 4.368\"/><path stroke-linecap=\"round\" d=\"M44 16.172v26m-40-26v14M13.016 43H44M17 11h21m-28-.003h1\"/></g>"
	},
	anchor: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M14 8h20M14 8h20M14 40h20\"/><rect width=\"8\" height=\"8\" x=\"36\" y=\"4\" stroke-linejoin=\"round\" rx=\"2\"/><rect width=\"8\" height=\"8\" x=\"4\" y=\"4\" stroke-linejoin=\"round\" rx=\"2\"/><rect width=\"8\" height=\"8\" x=\"36\" y=\"36\" stroke-linejoin=\"round\" rx=\"2\"/><rect width=\"8\" height=\"8\" x=\"4\" y=\"36\" stroke-linejoin=\"round\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M40 14v20M8 14v20\"/></g>"
	},
	"anchor-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M40 35c0-9.205-7.163-25-16-25S8 25.795 8 35\"/><path d=\"M4 35h8v8H4zM4 6h8v8H4zm32 29h8v8h-8zm0-29h8v8h-8z\"/><path stroke-linecap=\"round\" d=\"M12 10h24\"/></g>"
	},
	"anchor-round": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 38c0-9.941-8.059-20-18-20S6 28.059 6 38m14-24H10m28 0H28\"/><circle cx=\"7\" cy=\"14\" r=\"3\"/><circle cx=\"41\" cy=\"14\" r=\"3\"/><circle cx=\"24\" cy=\"14\" r=\"4\"/></g>"
	},
	"anchor-squre": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 38c0-9.941-8.059-20-18-20S6 28.059 6 38m14-24H10m28 0H28\"/><circle cx=\"24\" cy=\"14\" r=\"4\"/><path d=\"M20 10h8v8h-8zm18 1h6v6h-6zM4 11h6v6H4z\"/></g>"
	},
	"anchor-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 24H4c0 11.046 8.954 20 20 20s20-8.954 20-20h-6M24 44V14\"/><path d=\"M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10\" clip-rule=\"evenodd\"/></g>"
	},
	android: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M43.901 36H4.1C5.103 25.893 13.63 18 24 18c10.372 0 18.899 7.893 19.902 18Z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m14 20l-4-7m23 7l4-7\"/><circle cx=\"15\" cy=\"29\" r=\"2\" fill=\"currentColor\"/><circle cx=\"33\" cy=\"29\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"angry-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 35s-2-4-7-4s-7 4-7 4m16-16l-4 2m-14-2l4 2\"/></g>"
	},
	"anguished-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 18v1m-14-1v1\"/><rect width=\"12\" height=\"8\" x=\"18\" y=\"28\" stroke-linecap=\"round\" rx=\"4\"/></g>"
	},
	announcement: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"26\" x=\"4\" y=\"15\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"m24 7l-8 8h16zM12 24h18m-18 8h8\"/></g>"
	},
	"anti-corrosion": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 41.996q20 .154 20-3.275c0-3.428-15.586-20.718-20-20.718S4 35.65 4 38.722q0 3.07 20 3.274Z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"m21.06 29.661l-3.62 4.34\"/><path fill=\"currentColor\" d=\"M24.5 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m9.5 5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-22 5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m5.5-6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3\"/></g>"
	},
	"aperture-priority": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m15 12l3-6h12l3 6zm26 0H7c-1.657 0-3 1.254-3 2.8v24.4C4 40.746 5.343 42 7 42h34c1.657 0 3-1.254 3-2.8V14.8c0-1.546-1.343-2.8-3-2.8Z\"/><path stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"m17 34l7-14l7 14m-12-3.962h10\"/></g>"
	},
	api: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m37 22l-3 3l-11-11l3-3c1.5-1.5 7-4 11 0s1.5 9.5 0 11m5-16l-5 5M11 26l3-3l11 11l-3 3c-1.5 1.5-7 4-11 0s-1.5-9.5 0-11m12 6l4-4M6 42l5-5m5-12l4-4\"/>"
	},
	"api-app": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M18 23.937V10a6 6 0 0 1 12 0v2.006m0 11.997V38a6 6 0 0 1-12 0v-2.03\"/><path d=\"M24 30H9.984C6.68 30 4 27.314 4 24s2.68-6 5.984-6h2.005M24 18h13.989A6.006 6.006 0 0 1 44 24c0 3.314-2.691 6-6.011 6h-1.923\"/></g>"
	},
	"app-store": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m28 13l-6.5 11l-1.625 2.75l-.812 1.375M15 35l.813-1.375M12 29h11m7 0h6M19 13l3.5 5.5l.875 1.375M33 35l-3.5-5.5l-1.75-2.75l-.875-1.375\"/></g>"
	},
	"app-switch": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M34 4H14v40h20zm10 4H34v32h10zM14 8H4v32h10z\"/>"
	},
	apple: {
		body: "<g fill=\"none\"><path fill=\"currentColor\" d=\"M23.911 11.318c.082-2.232.71-4.192 1.866-5.83c1.163-1.647 3.086-2.817 5.717-3.48l.055.243v.424c0 .961-.233 2.064-.693 3.276c-.483 1.174-1.237 2.28-2.238 3.277c-.936.879-1.803 1.46-2.569 1.723c-.252.076-.599.15-1.018.217q-.558.087-1.12.15\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24.35 14.629c-2.972 0-5.036-2.63-7.969-2.63c-2.932 0-8.973 2.696-8.973 12c0 9.306 5.365 15.3 5.965 16c.6.701 1.987 2.5 4.137 2.5s4.503-1.709 6.84-1.709s5.279 1.71 7.2 1.71c1.92 0 2.71-.783 4.016-2.134s3.8-5.47 4.67-7.944c-1.433-.854-5.234-3.17-5.234-8.422q0-5.251 3.838-8.725Q36.322 12 33 12c-3.323 0-5.677 2.629-8.65 2.629Z\"/></g>"
	},
	"apple-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M24 41.02c2.431 0 3.431 1.31 4.734 1.601c1.303.292 2.397.372 3.517-.121c2.219-.978 3.571-2.142 5.212-3.881C40.505 35.395 42 30.964 42 25.029s-1.6-9.003-4.067-11.009s-3.896-2.39-6.878-2.006s-4.606 3.589-7.047 3.589s-5.415-3.16-8.002-3.589c-2.588-.43-4.006 0-6.246 2.006S6 19.15 6 25.03c0 5.878 1.552 10.236 4.593 13.46c1.64 1.739 2.937 3.033 5.156 4.01c1.12.494 2.278.414 3.535.122c1.258-.29 2.258-1.6 4.716-1.6Z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M24.009 15.603Q25.186 4 34.01 4q.81 2.441.418 4.727q-.185 1.085-1.153 3.095M14.229 26q-.415 2.019 0 4.157q.414 2.137 1.767 3.3\"/></g>"
	},
	"applet-closed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m42 42l-9-9M6 6l9 9zm0 36l9-9M42 6l-9 9zM24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10\"/>"
	},
	application: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M40.04 22v20h-32V22\"/><path d=\"M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845z\"/></g>"
	},
	"application-effect": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 40.833a11.96 11.96 0 0 0 8 3.056c6.627 0 12-5.373 12-12c0-5.301-3.437-9.8-8.204-11.387\"/><path d=\"M27.171 27.5c.535 1.359.829 2.84.829 4.39c0 6.627-5.373 12-12 12c-6.628 0-12-5.373-12-12c0-5.316 3.455-9.824 8.242-11.4\"/><path d=\"M24 27.89c6.627 0 12-5.373 12-12c0-6.628-5.373-12-12-12s-12 5.372-12 12c0 6.627 5.373 12 12 12\"/></g>"
	},
	"application-menu": {
		body: "<path fill=\"currentColor\" d=\"M10 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8M10 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8M10 42a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8\"/>"
	},
	"application-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M41 14L24 4L7 14v20l17 10l17-10z\"/><path stroke-linecap=\"round\" d=\"M16 18.998L23.993 24l8.002-5.002M24 24v9\"/></g>"
	},
	"application-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"34.5\" cy=\"13.5\" r=\"6.5\"/><circle cx=\"34.5\" cy=\"34.5\" r=\"6.5\"/><circle cx=\"13.5\" cy=\"13.5\" r=\"6.5\"/><circle cx=\"13.5\" cy=\"34.5\" r=\"6.5\"/></g>"
	},
	appointment: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"11\" r=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 41c0-8.837 8.059-16 18-16\"/><circle cx=\"34\" cy=\"34\" r=\"9\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M33 31v4h4\"/></g>"
	},
	aquarius: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 20L14 8l6 9l8-9l7 11l9-9.957M4 40l10-12l6 9l8-9l7 11l9-9.956\"/>"
	},
	"arc-de-triomphe": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M8 16v28h10V29a6 6 0 0 1 12 0v15h10V16zm-3-6h38v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z\"/><path stroke-linecap=\"round\" d=\"M5 4h38M8 4v5m32-5v5M8 28h10m12 0h10\"/></g>"
	},
	"archers-bow": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m40.85 43.92l-1.574-.314c-2.35-.47-3.42-3.607-2.673-5.884c1.954-5.96.522-13.61-.27-16.913c-.246-1.024-1.058-1.794-2.08-2.05l-2.263-.565a3 3 0 0 1-2.183-2.183l-.565-2.262c-.256-1.023-1.025-1.834-2.05-2.08c-3.302-.792-10.954-2.225-16.912-.27c-2.277.747-5.414-.324-5.884-2.674L4.08 7.151M6 11l32 32m-26-7L43 5\"/>"
	},
	archery: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M13 42c9.941 0 18-8.059 18-18S22.941 6 13 6\"/><circle cx=\"9\" cy=\"24\" r=\"3\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 24h30m-4-4l4 4l-4 4\"/></g>"
	},
	"area-map": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m18 24l-6 9l-8-4.5V42h40V15l-7 8l-6-5l-7 8z\"/><path d=\"M4 28.5V17l7 6l5.5-8l6 3L31 9l5.5 4.5L44 6v9.5\"/></g>"
	},
	arena: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M44 26L24 36L4 26l20-10z\"/><path d=\"m24 7l20 10l-20 10L4 17z\"/><path stroke-linecap=\"round\" d=\"M44 26v8L24 44L4 34v-8l20 10zm0-12v12M4 26V14m20 22V24m0-8V4\"/></g>"
	},
	aries: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5.51 19.03C3.08 15.235 2.822 7.06 10.551 6.022C15.855 5.46 23.104 15.121 24 42c.896-26.88 8.145-36.54 13.448-35.977c7.729 1.038 7.47 9.213 5.043 13.006\"/>"
	},
	arithmetic: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M28 32.5h14m-14 9h14M6 13h16m-8-8v16M42 5L6 41\"/>"
	},
	"arithmetic-buttons": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M10 14h8m-8 0h8m-7 23l6-6m-3-13v-8m3 27l-6-6m19-17h8m-8 17h8m-8 6h8\"/><path d=\"M24 4v40M4 24h40\"/><path stroke-linejoin=\"round\" d=\"M30 4H18m12 40H18M4 28v-8m40 8v-8\"/></g>"
	},
	"arithmetic-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M28 31.5h14m-14 8h14M7.343 40.657l11.314-11.314m-11.314 0l11.314 11.314M28 12.5h14m-36 0h14m-7-7v14\"/>"
	},
	"arrow-circle-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 15v18m9-9l-9 9l-9-9\"/></g>"
	},
	"arrow-circle-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M32.492 24.5h-18m9-9l-9 9l9 9\"/></g>"
	},
	"arrow-circle-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M14.492 24.5h18m-9-9l9 9l-9 9\"/></g>"
	},
	"arrow-circle-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 33.5v-18m9 9l-9-9l-9 9\"/></g>"
	},
	"arrow-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 42V6m12 24L24 42L12 30\"/>"
	},
	"arrow-keys": {
		body: "<g fill=\"none\"><path d=\"M14 4h20v20H14zM4 24h20v20H4zm20 0h20v20H24z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 24H4v20h20zm0 0v20zm0 0h20v20H24zM14 4h20v20H14zm10 6v8\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m20 14l4-4l4 4M10 34h8m-4 4l-4-4l4-4m24 4h-8m4-4l4 4l-4 4\"/></g>"
	},
	"arrow-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5.799 24h36m-24 12l-12-12l12-12\"/>"
	},
	"arrow-left-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M29 37H11V19m0 18l25.456-25.456\"/>"
	},
	"arrow-left-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m11 11l25.456 25.456M29 11H11v18\"/>"
	},
	"arrow-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 24H6m24-12l12 12l-12 12\"/>"
	},
	"arrow-right-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M37 19v18H19m-7.456-25.456L37 37\"/>"
	},
	"arrow-right-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 11h18v18m-25.456 7.456L37 11\"/>"
	},
	"arrow-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 6v36M12 18L24 6l12 12\"/>"
	},
	"assembly-line": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"16\" cy=\"10\" r=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M28 38H13c-4 0-7-2.917-7-7s3-7 7-7h7m0 0h15c4 0 7-2.917 7-7s-3-7-7-7H20M6 10h6m24 28h6\"/><circle cx=\"32\" cy=\"38\" r=\"4\"/></g>"
	},
	association: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 34h40m-2 5L21 5M6 39L27 5\"/>"
	},
	asterisk: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m-9-20h18m-13.5-7.794l9 15.588m0-15.588l-9 15.588\"/>"
	},
	"asterisk-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M24 16v16m-6.553-12.589l13.107 9.178m-.001-9.178L17.447 28.59\"/></g>"
	},
	"astonished-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 18v1m-14-1v1\"/><rect width=\"8\" height=\"12\" x=\"20\" y=\"24\" stroke-linecap=\"round\" rx=\"4\"/></g>"
	},
	"at-sign": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M44 24c0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20v0c4.989 0 9.55-1.827 13.054-4.847\"/><path d=\"M24 32a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z\"/><path stroke-linecap=\"round\" d=\"M32 24a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6m-12 1v-9\"/></g>"
	},
	attention: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M24 37a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 12v16\"/></g>"
	},
	"audio-file": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 44V4h23l9 10.5V44z\"/><path d=\"m32 14l-6 2.969V31.5\"/><circle cx=\"20.5\" cy=\"31.5\" r=\"5.5\"/></g>"
	},
	audit: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m8 36l.005-7.957a1 1 0 0 1 1-1h10.002c.922 0 .917-.818.917-2.764s-4.902-3.585-4.902-10.426S20.1 5 24.32 5s8.817 2.012 8.817 8.853s-4.876 7.929-4.876 10.426s0 2.764.78 2.764h9.96a1 1 0 0 1 1 1V36z\"/><path stroke-linecap=\"round\" d=\"M8 42h32\"/></g>"
	},
	"auto-focus": {
		body: "<g fill=\"none\"><circle cx=\"24\" cy=\"24\" r=\"9\" stroke=\"currentColor\" stroke-width=\"4\"/><circle r=\"3\" fill=\"currentColor\" transform=\"matrix(-1 0 0 1 24 24)\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 14s7.5-11.5 20.5-7S42 24.5 42 24.5M39 34s-6 11-19.5 7.5S6 24 6 24M42 8v16M6 24v16\"/></g>"
	},
	"auto-height-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M7 42V6\"/><path stroke-linejoin=\"round\" d=\"M18 13.99L23.995 8L30 14m0 20.01L24.005 40L18 34m6-26v32\"/><path d=\"M41 42V6\"/></g>"
	},
	"auto-line-height": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M6 7h36M6 41h36\"/><path stroke-linejoin=\"round\" d=\"M24 13L14 35m4-7h12m-6-15l10 22\"/></g>"
	},
	"auto-line-width": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M5 40V8\"/><path stroke-linejoin=\"round\" d=\"M24 13L14 35m4-7h12m-6-15l10 22\"/><path d=\"M43 40V8\"/></g>"
	},
	"auto-width": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M11.988 32L4 24.006L12 16m24.012 0L44 23.994L36 32M4 24h40\"/>"
	},
	"auto-width-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M6 7h36M8 24h32\"/><path stroke-linejoin=\"round\" d=\"M13.99 30L8 24.005L14 18m20.01 0L40 23.995L34 30\"/><path d=\"M6 41h36\"/></g>"
	},
	avatar: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5.004 42.231a.78.78 0 0 0 .791.769h36.407a.78.78 0 0 0 .792-.769v-.918c.018-.277.055-1.657-.855-3.184c-.574-.963-1.407-1.794-2.476-2.472c-1.293-.82-2.938-1.413-4.928-1.77a29 29 0 0 1-3.002-.584c-2.632-.672-2.862-1.267-2.864-1.273a.8.8 0 0 0-.066-.169c-.022-.11-.075-.528.027-1.647c.258-2.843 1.783-4.523 3.008-5.873c.386-.425.751-.828 1.032-1.222c1.213-1.7 1.325-3.635 1.33-3.755a2 2 0 0 0-.087-.628c-.12-.37-.343-.6-.507-.77a3 3 0 0 1-.113-.12c-.012-.014-.044-.052-.015-.243a19 19 0 0 0 .203-1.857c.056-1.002.099-2.5-.16-3.959a6 6 0 0 0-.172-.825q-.408-1.507-1.32-2.57c-.105-.115-2.653-2.8-10.05-3.35c-1.023-.076-2.034-.035-3.03.016a4.4 4.4 0 0 0-.875.108c-.764.197-.968.681-1.021.952c-.089.45.067.798.17 1.03c.015.033.034.074.001.182c-.171.266-.442.506-.717.733c-.08.067-1.934 1.667-2.036 3.756c-.275 1.589-.255 4.064.07 5.775c.02.095.047.235.002.33c-.35.313-.746.668-.745 1.478c.004.082.117 2.016 1.33 3.717c.28.394.645.796 1.03 1.221l.002.001c1.225 1.35 2.75 3.03 3.008 5.872c.101 1.12.048 1.537.027 1.648a.8.8 0 0 0-.067.169c-.001.006-.23.599-2.85 1.27c-1.512.387-3 .585-3.045.59c-1.934.327-3.569.906-4.86 1.721c-1.065.673-1.9 1.507-2.48 2.477c-.928 1.55-.903 2.962-.89 3.22z\"/>"
	},
	average: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 4v40h40\"/><path d=\"M10 38S15.313 4 27 4s17 34 17 34\"/><path stroke-dasharray=\"2 6\" d=\"M10 24h34\"/></g>"
	},
	aviation: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M32.5 30H36l8-8H11a3 3 0 0 0-1.8.6L4 26.5l6.277 3.177A3 3 0 0 0 11.63 30H13\"/><path d=\"M27 31c0 1.657-3.582 3-8 3v-6c4.418 0 8 1.343 8 3Z\"/><path stroke-linecap=\"round\" d=\"m31 18l-9 4h15l3-10h-3z\"/></g>"
	},
	avocado: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M33 19c-2-5 0-15-9-15s-7 10-9 14s-5 7-5 13c0 9 7.5 13 14 13s14-4 14-13c0-5-3-7-5-12Z\"/><path d=\"M30 30a6 6 0 0 1-12 0c0-3.314 2.686-7.5 6-7.5s6 4.186 6 7.5Z\"/></g>"
	},
	"avocado-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M7 32c3 5 8 8 13 9s10.808.144 15-3c6-4.5 8-12 8-17s-2-10.5-3-12s-3-2-3-2\"/><path d=\"M21 13c-4.355 1.604-9 0-13 3c-4.696 3.523-6 9-3 14c2.352 3.92 6 6 12 6s9.764-1.765 14-6c6-6 8-15.5 8-19s-2.5-5.5-6-5s-6.427 4.947-12 7\"/><path d=\"M21.945 20.117c-1.223.48-2.527 0-3.65.898c-1.32 1.054-1.686 2.693-.843 4.19c.66 1.172 1.685 1.795 3.37 1.795s2.742-.528 3.931-1.796C26.438 23.41 27 20.566 27 19.52s-.702-1.646-1.685-1.496s-1.805 1.48-3.37 2.094\"/></g>"
	},
	baby: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M24 43.6c8.432 0 15.56-6.68 17.894-14.35C42.418 27.526 46 27.526 46 23.8s-3.616-3.94-4.201-5.752C39.372 10.535 32.32 4 24 4C15.675 4 8.62 10.54 6.197 18.06C5.615 19.87 2 20.01 2 23.8s3.592 3.79 4.135 5.542C8.497 36.964 15.602 43.6 24 43.6Z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M41.799 18.048C39.372 10.535 32.32 4 24 4\"/><path fill=\"currentColor\" stroke=\"currentColor\" d=\"M19.1 21.6c0 .826-.224 1.552-.56 2.056c-.339.508-.751.744-1.14.744s-.8-.236-1.14-.744c-.336-.504-.56-1.23-.56-2.056s.224-1.552.56-2.056c.34-.508.752-.744 1.14-.744c.389 0 .801.236 1.14.744c.336.504.56 1.23.56 2.056Zm13.2 0c0 .826-.224 1.552-.56 2.056c-.339.508-.752.744-1.14.744s-.801-.236-1.14-.744c-.336-.504-.56-1.23-.56-2.056s.224-1.552.56-2.056c.339-.508.752-.744 1.14-.744s.801.236 1.14.744c.336.504.56 1.23.56 2.056Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M18.498 31.75q2.896 1.95 5.511 1.95q2.613 0 5.18-1.945\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M18.498 31.75q2.896 1.95 5.511 1.95q2.613 0 5.18-1.945M31.728 6.2q.402 2.901-1.769 4.239t-7.055 1.254\"/></g>"
	},
	"baby-app": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M43 26v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h9\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 40h40\"/><circle cx=\"30\" cy=\"17\" r=\"9\" stroke=\"currentColor\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 18v-2m22 2v-2M30 8c-.167-1-1.2-3.2-4-4m4 4c.083-1 .6-3.2 2-4\"/><circle cx=\"33\" cy=\"16\" r=\"2\" fill=\"currentColor\"/><circle cx=\"27\" cy=\"16\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"baby-bottle": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 20H12v24h24zM26 36h10m-10-8h10M8 20h32m-28-6h8.4V7.6C20.4 6.398 21.6 4 24 4s3.6 2.398 3.6 3.6V14H36\"/>"
	},
	"baby-car-seat": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m36 33l6-29s-10.5 2-10.5 6c0 2.5 4 4 2.5 5.5s-7 3-7 7c0 2.5 1.64 4.36 0 6c-1.5 1.5-3 .714-5.5 0c-2.8-.8-8.5-1.5-10.5-1S7 29 7 32c0 1.65 1 3.5 3.5 4s5.5-2 9.5-2s9 3 12 3s4-4 4-4Z\"/><path d=\"m11 36l-3 8h33l-6-8\"/></g>"
	},
	"baby-feet": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M15 20.612c-1.424 6.15 6.493 7.715 4.624 12.048c-1.87 4.332-6.055 3.466-5.588 7.798c.468 4.333 6.006 4.394 11.048 1.784c10.083-5.221 12.187-16.625 7.624-21.63c-5.608-6.15-16.284-6.15-17.708 0Z\"/><ellipse cx=\"34.535\" cy=\"13.535\" fill=\"currentColor\" rx=\"2\" ry=\"3\" transform=\"rotate(40 34.535 13.535)\"/><ellipse cx=\"29.381\" cy=\"10.603\" fill=\"currentColor\" rx=\"2\" ry=\"3\" transform=\"rotate(25 29.38 10.603)\"/><ellipse cx=\"23.381\" cy=\"9.603\" fill=\"currentColor\" rx=\"2\" ry=\"3\" transform=\"rotate(6 23.38 9.603)\"/><ellipse cx=\"14\" cy=\"8\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"3\" ry=\"4\" transform=\"rotate(-20 14 8)\"/><ellipse cx=\"38.535\" cy=\"17.536\" fill=\"currentColor\" rx=\"2\" ry=\"3\" transform=\"rotate(50 38.535 17.536)\"/></g>"
	},
	"baby-meal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 6H10a5 5 0 0 0-5 5v26a5 5 0 0 0 5 5h20\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19 6v17.524L5 28m14-4l12 4\"/><path stroke-linecap=\"round\" d=\"M37 18v24\"/><path d=\"M31 13.333C31 7.111 35 4 37 4s6 3.111 6 9.333c0 6.223-12 6.223-12 0Z\"/></g>"
	},
	"baby-mobile": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 18L24 8l20 10m-20 0V4M10 30V16\"/><circle cx=\"10\" cy=\"36\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M38 30V16m-6 20l6-6l6 6l-6 6zm-3-13v-5H19v5\"/></g>"
	},
	"baby-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"8\" r=\"5\" stroke-linejoin=\"round\"/><path d=\"M5 28s17-20.25 38 0\"/><path stroke-linejoin=\"round\" d=\"M19 28v-3.79S19 19 24 19s5 5.21 5 5.21V32s0 5-5 5s-5-5-5-5zm10 4l8 5l-6 7M19 32l-8 5l6 7\"/></g>"
	},
	"baby-pants": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34 4H14c-2 1-5 5-5 15c0 12.5 5 25 8 25c2 0 2-2.5 2-2.5V24c0-5 8-4.5 8 0v11c0 8 7 11 9 9s-2-4-2-7c0-5 4-9 4-22c0-5-2.333-9-4-11Z\"/><path stroke-linecap=\"round\" d=\"M10 12h27\"/><path d=\"M10.803 8c-.732 1.696-1.338 3.981-1.624 7M38 15a16.9 16.9 0 0 0-1.125-6\"/></g>"
	},
	"baby-sling": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"10\" r=\"5\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 21C14 21 11 6 11 6L6 8l3 16.5c1.167.667 5.5 3 8 6.5s2 7 7.5 7s6-4.5 7.5-7s5.667-6 7-6.5L42 8l-5-2s-3 15-13 15\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M34 29s7 4 7 13h-5c0-6-5-9-5-9m-16-4s-7 4-7 13h5c0-6 5-9 5-9\"/></g>"
	},
	"baby-taste": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c9.941 0 18-8.059 18-18S33.941 8 24 8S6 16.059 6 26s8.059 18 18 18Z\"/><path stroke-linecap=\"round\" d=\"M24 8c-.25-1-2-4-6-4m6 4c.083-1 .6-3.2 2-4m5 29s-2 4-7 4s-7-4-7-4\"/><path stroke-linecap=\"round\" d=\"M31 33s1.5-4-1-4s-3 7-3 7m6-15h-4m-12-2v4M4 24v4m40-4v4\"/></g>"
	},
	"bachelor-cap": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m4 13l20-5l20 5l-20 5z\"/><path d=\"M13 16v9.97S18 29 24 29s11-3.03 11-3.03V16M7 14v22m-3-2h6v6H4z\"/></g>"
	},
	"bachelor-cap-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M5 16L24 6l19 10l-19 10z\"/><path d=\"M11 20v14.464c0 1.464 1.055 2.723 2.471 3.095c2.205.58 5.585 1.66 8.885 3.47c1.021.56 2.266.56 3.288 0c3.3-1.81 6.68-2.89 8.885-3.47C35.945 37.187 37 35.93 37 34.464V20\"/><path stroke-linecap=\"round\" d=\"M43 16v16\"/></g>"
	},
	"bachelor-cap-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M11 21v15.039c0 .607.274 1.18.785 1.509C13.486 38.643 17.86 41 24 41s10.514-2.357 12.215-3.452c.51-.33.785-.902.785-1.51V21\"/><path stroke-linecap=\"round\" d=\"M43 24v8M5 17L24 7l19 10l-19 10z\"/></g>"
	},
	back: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 40.836q-7.34-8.96-13.036-10.168t-10.846-.365V41L4 23.545L20.118 7v10.167q9.523.075 16.192 6.833q6.668 6.758 7.69 16.836Z\" clip-rule=\"evenodd\"/>"
	},
	"back-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 33c0-7.299 4.103-13.583 10-16.408A16.15 16.15 0 0 1 27 15c9.389 0 17 8.059 17 18\"/><path d=\"m18 28l-8 5l-6-8\"/></g>"
	},
	"background-color": {
		body: "<g fill=\"none\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M37 37a4 4 0 0 0 4-4q0-2.21-4-6q-4 3.79-4 6a4 4 0 0 0 4 4\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"m20.854 5.504l3.535 3.536\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M23.682 8.333L8.125 23.889L19.44 35.203l15.557-15.557z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"m12 20.073l16.961 5.577M4 43h40\"/></g>"
	},
	backpack: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 9.556V4h-6v10m16-4.444V4h6v10\"/><path d=\"M11 20c0-5.523 4.477-10 10-10h6c5.523 0 10 4.477 10 10v20a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4zm0 9H5v10h6m26-10h6v10h-6m-9-16v4m-11-4h14\"/></g>"
	},
	bad: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9.948 28.807C13.869 37.681 21.933 41.19 28 44c2.632 1.22 3.328-3.717 2.277-6.69c-.884-2.502-2.651-5.305-2.651-5.305h7.106a3.5 3.5 0 1 0 0-7.001h1.767a3.5 3.5 0 1 0 0-7.001h-3.535a3.5 3.5 0 0 0 0-7.002h-2.652a3.5 3.5 0 0 0 .003-7H19.67c-3.094 0-7.071 1.802-9.723 6.803c-2.542 4.794-2.652 12.002 0 18.003\"/>"
	},
	"bad-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m35.912 6.456l5.37 19A2 2 0 0 1 39.355 28h-11.48c-.704 0-1.224.654-1.066 1.34l.5 2.164c.458 1.985.605 4.03.436 6.06l-.092 1.103A5.02 5.02 0 0 1 26.2 41.8a4.1 4.1 0 0 1-2.896 1.2h-.24a1.81 1.81 0 0 1-1.58-.93l-2.659-4.785a12.96 12.96 0 0 0-5.124-5.084l-6.659-3.633A2 2 0 0 1 6 26.814V7a2 2 0 0 1 2-2h25.987a2 2 0 0 1 1.924 1.456\"/>"
	},
	"bad-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4.18 26.834A2 2 0 0 0 6.175 29H10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7.84a2 2 0 0 0-1.993 1.834zM18 26.626c0 .835.52 1.583 1.275 1.94c1.649.777 4.458 2.34 5.725 4.454c1.633 2.723 1.941 7.644 1.991 8.771c.007.158.003.316.024.472c.271 1.953 4.04-.328 5.485-2.74c.785-1.308.885-3.027.803-4.37c-.089-1.435-.51-2.823-.923-4.201l-.88-2.937h10.857a2 2 0 0 0 1.925-2.543l-5.37-19.016A2 2 0 0 0 36.986 5H20a2 2 0 0 0-2 2z\"/>"
	},
	badge: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 22v18H8V10h18m12 4a4 4 0 1 0 0-8a4 4 0 0 0 0 8\"/>"
	},
	"badge-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m16 44l8-4l8 4V24.944A11.96 11.96 0 0 1 24 28a11.96 11.96 0 0 1-8-3.056z\"/><path d=\"M36 16a11.97 11.97 0 0 1-4 8.944A11.96 11.96 0 0 1 24 28a11.96 11.96 0 0 1-8-3.056A11.97 11.97 0 0 1 12 16c0-6.627 5.373-12 12-12s12 5.373 12 12\"/><path d=\"M24 21V11l-2 1m2 9h2m-2 0h-2\"/></g>"
	},
	badminton: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M19.5 44c2.49 0 4.5-2.01 4.5-4.5V19h-4l-5 20.5c0 2.49 2.01 4.5 4.5 4.5\"/><path d=\"M20 19h-4L6.68 37.9c-1.11 2.61.48 5.74 3.3 6.07A4.494 4.494 0 0 0 15 39.5M28.5 44c-2.49 0-4.5-2.01-4.5-4.5V19h4l5 20.5c0 2.49-2.01 4.5-4.5 4.5\"/><path d=\"M28 19h4l9.32 18.9c1.11 2.61-.48 5.74-3.3 6.07A4.494 4.494 0 0 1 33 39.5M16.06 13c-.04-.33-.06-.66-.06-1c0-4.42 3.58-8 8-8s8 3.58 8 8c0 .34-.02.67-.06 1z\"/></g>"
	},
	"baggage-delay": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M36 26V14a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h17M16 12v28m12-28v17m0-17V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6\"/><path d=\"M35 44a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M34 32v4h4\"/><path stroke-linecap=\"round\" d=\"M13 40v4\"/></g>"
	},
	balance: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M35 25a32.23 32.23 0 0 0-22 0l-1-11c7-3 17-3 24 0zm-11-2l-3-5\"/><path d=\"M42 39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3z\"/><path d=\"M29 23.455a32.2 32.2 0 0 0-10 0\"/></g>"
	},
	"balance-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M35 25a32.23 32.23 0 0 0-22 0l-1-11c7-3 17-3 24 0zm-11-2l-3-5\"/><path d=\"M42 39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3z\"/><path d=\"M29 23.455a32.2 32.2 0 0 0-10 0\"/></g>"
	},
	"balance-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m16 22l-6-10l-6 10\"/><path d=\"M10 28a6 6 0 0 0 6-6H4a6 6 0 0 0 6 6\" clip-rule=\"evenodd\"/><path d=\"m44 22l-6-10l-6 10\"/><path d=\"M38 28a6 6 0 0 0 6-6H32a6 6 0 0 0 6 6\" clip-rule=\"evenodd\"/><path d=\"M24 6v36M10 12h28m-28 0h28m0 30H10\"/></g>"
	},
	banana: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M16 32c-2.8-.933-6.035-3.173-7.476-5.425a1.7 1.7 0 0 1-.245-1.043l.245-3.75c.053-.81 1.01-1.24 1.671-.77C12.33 22.529 16.228 25 19 25c7 0 13-2.5 16-8\"/><path d=\"M26 43c10-2 19.242-12.485 16.867-23.059L41.999 16V8l-6-1c0 12.941-3 23-16 25c-5.976.92-11.705-.386-16.129-2.922L5 36c2 5 11 9 21 7\"/></g>"
	},
	bank: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 17v27h28V17\"/><path d=\"m5 22l5-5L24 4l14 13l5 5\"/><path d=\"m19 19l5 6l5-6M18 31h12m-12-6h12m-6 0v12\"/></g>"
	},
	"bank-card": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 10a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"square\" d=\"M4 16h40\"/><path stroke-linecap=\"round\" d=\"M27 32h9m8-22v16M4 10v16\"/></g>"
	},
	"bank-card-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M14 13V9a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-2\"/><rect width=\"30\" height=\"22\" x=\"4\" y=\"19\" rx=\"2\"/><path d=\"M4 28h30m0-5v12M4 23v12m7-1h8m6 0h2\"/></g>"
	},
	"bank-card-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M44 18V8H4v10\"/><path d=\"M44 18H4v22h40z\"/><path stroke-linecap=\"round\" d=\"M12 29h2m6 0h2m6 0h2\"/></g>"
	},
	"bank-transfer": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"28\" x=\"4\" y=\"10\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M4 20h40M4 17v6m40-6v6m-15 6h8\"/></g>"
	},
	baokemeng: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M44 24H30c0-3.31-2.69-6-6-6s-6 2.69-6 6H4C4 12.95 12.95 4 24 4s20 8.95 20 20Z\"/><path stroke-linecap=\"round\" d=\"M18 24H4c0 11.05 8.95 20 20 20s20-8.95 20-20H30\"/><path d=\"M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z\"/></g>"
	},
	"bar-code": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 20h40M6 6v8m0 11.996v12.003M20.4 6v8m0 12v16M34.8 6v8M42 6v8m-7.2 12v8M13.2 6v8m0 12v8M27.6 6v8m0 12v8M42 26v12\"/>"
	},
	barbecue: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"8\" height=\"8\" x=\"12\" y=\"4\" stroke-linejoin=\"round\" rx=\"4\"/><rect width=\"8\" height=\"8\" x=\"12\" y=\"22\" stroke-linejoin=\"round\" rx=\"4\"/><path d=\"M16 31v13\"/><rect width=\"8\" height=\"8\" x=\"28\" y=\"4\" stroke-linejoin=\"round\" rx=\"4\"/><rect width=\"8\" height=\"8\" x=\"28\" y=\"22\" stroke-linejoin=\"round\" rx=\"4\"/><path d=\"M32 31v13\"/><path stroke-linejoin=\"round\" stroke-miterlimit=\"2\" d=\"M13 17h6m10 0h6M13 36h6m10 0h6\"/><path d=\"M16 14v6m16-6v6\"/></g>"
	},
	"barber-brush": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M29.796 24H16.204s-3.986 7.708 2.548 10.833c4.183 2.5-2.548 9.167-2.548 9.167h13.592s-6.73-7.292-2.548-9.167C33.782 31.708 29.796 24 29.796 24M37 10l-7 14H16L9 10s3-6 14-6s14 6 14 6M25 24l2-12m-6 12l-2-12\"/>"
	},
	"barber-clippers": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 8h28v9l-5 7v12s0 8-9 8s-9-8-9-8V24l-5-7zm5-4v6m6-6v6m6-6v6\"/><rect width=\"6\" height=\"10\" x=\"21\" y=\"28\" rx=\"3\"/><path d=\"M10 17h28M33 4v6\"/></g>"
	},
	baseball: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\"/><path d=\"M8.546 11.273Q14.91 16.727 14.91 24T8.546 36.727m30.909 0Q33.09 31.273 33.09 24q0-7.272 6.364-12.727\"/></g>"
	},
	"baseball-bat": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"40\" cy=\"40\" r=\"3\"/><path stroke-linejoin=\"round\" d=\"M16.502 9.43S26.5 22 37.5 37.501C21.5 26 9.43 16.502 9.43 16.502S3.111 10.89 7 7s9.502 2.43 9.502 2.43Z\"/></g>"
	},
	"baseball-cap": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 30c0-8.837 7.163-16 16-16v0c8.837 0 16 7.163 16 16v6H12z\"/><path d=\"M22 36c-1-3.5-1-22 6-22s6.5 18 6 22\"/><rect width=\"30\" height=\"6\" x=\"4\" y=\"36\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"3\"/><circle cx=\"28\" cy=\"10\" r=\"4\"/></g>"
	},
	basketball: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\"/><path d=\"M8.546 11.273Q14.91 16.727 14.91 24T8.546 36.727m30.909 0Q33.09 31.273 33.09 24q0-7.272 6.364-12.727M4 24h40M24 4v40\"/></g>"
	},
	"basketball-clothes": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M30 4a6 6 0 0 1-12 0h-3c-1.105 0-2.002.894-2.032 1.998C12.9 8.57 12.683 12.951 12 15c-.761 2.283-3.839 5.146-5.266 6.383c-.46.398-.734.97-.734 1.578V42a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V22.961c0-.607-.275-1.18-.734-1.578C39.84 20.146 36.761 17.283 36 15c-.683-2.049-.9-6.43-.968-9.002C35.002 4.894 34.105 4 33 4z\"/><path d=\"M27 24h6v12h-6z\"/><path stroke-linecap=\"round\" d=\"M15 24h6v12h-6m6-6h-6\"/></g>"
	},
	"basketball-one": {
		body: "<g fill=\"none\"><path d=\"M18 24c0-6.624 5.376-12 12-12s12 5.376 12 12\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M18 24c0-6.624 5.376-12 12-12s12 5.376 12 12M12 4H4v32h8zm0 20h32m-26 0l2 4.5c2 5 1.9 10.4 0 15.5m21-20l-2 4.5c-2 5-1.91 10.4 0 15.5M21.22 32h16.56m-16.09 8h15.63m-7.82 0V24\"/></g>"
	},
	"basketball-stand": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"28\" x=\"4\" y=\"5\" rx=\"2\"/><path d=\"M31 22v-7H17v7m1 17h12m-13-6h14m1-6l-2 12l1 4M16 27l2 12l-1 4m7-16v16m10-16H14\"/></g>"
	},
	bat: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m21.619 8.986l.476 2.463h3.81l.476-2.463c.476 1.642 1.429 5.223 1.429 6.405c1.746-.164 5.143-1.38 4.762-4.927c0-.493-.382-1.676-1.905-2.464c4.285.986 12.952 5.716 13.333 16.754c-2.857-1.807-8.762-3.154-9.524 5.913c-1.746-2.957-5.809-7.293-8.095-.986C25.587 32.473 24 38.846 24 42c0-3.154-1.587-9.527-2.381-12.319c-2.286-6.307-6.35-1.97-8.095.986c-.762-9.067-6.667-7.72-9.524-5.913C4.381 13.716 13.048 8.986 17.333 8c-1.523.788-1.905 1.971-1.905 2.464c-.38 3.548 3.016 4.763 4.762 4.927c0-1.182.953-4.763 1.429-6.405\"/>"
	},
	"battery-charge": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13 14H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7m18 0h7a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2h-7m-8.998 0L17 24.001h10.004L22 34\"/><path fill=\"currentColor\" d=\"M42 20h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2z\"/></g>"
	},
	"battery-empty": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 14H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2\"/><path fill=\"currentColor\" d=\"M42 20h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2z\"/></g>"
	},
	"battery-failure": {
		body: "<g fill=\"none\"><rect width=\"36\" height=\"20\" x=\"14\" y=\"44\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\" transform=\"rotate(-90 14 44)\"/><path fill=\"currentColor\" d=\"M20 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 30v-3c2.21 0 4-2.015 4-4.5S26.21 18 24 18s-4 2.015-4 4.5\"/><path fill=\"currentColor\" stroke=\"currentColor\" d=\"M26 35.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z\"/></g>"
	},
	"battery-full": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 14H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2\"/><path fill=\"currentColor\" d=\"M42 20h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13 21v6m6-6v6m6-6v6m6-6v6\"/></g>"
	},
	"battery-storage": {
		body: "<g fill=\"none\"><rect width=\"36\" height=\"20\" x=\"14\" y=\"44\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\" transform=\"rotate(-90 14 44)\"/><path fill=\"currentColor\" d=\"M20 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m25 18l-5 10l8-2l-5 10\"/></g>"
	},
	"battery-tips": {
		body: "<g fill=\"none\"><rect width=\"36\" height=\"20\" x=\"14\" y=\"44\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\" transform=\"rotate(-90 14 44)\"/><path fill=\"currentColor\" d=\"M20 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 28V18\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 24 34)\"/></g>"
	},
	"battery-working": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 14H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2\"/><path fill=\"currentColor\" d=\"M42 20h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13 21v6m6-6v6\"/></g>"
	},
	"battery-working-one": {
		body: "<g fill=\"none\"><rect width=\"36\" height=\"20\" x=\"4\" y=\"14\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\"/><path fill=\"currentColor\" d=\"M42 20h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13 21v6m6-6v6m6-6v6m6-3v3\"/></g>"
	},
	"beach-umbrella": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M14.34 21.412L24 24l9.66 2.588l9.659 2.589C45.657 20.45 41.848 11.526 34.546 7a20 20 0 0 0-5.37-2.318A20 20 0 0 0 22.5 4.05c-8.237.62-15.56 6.342-17.818 14.773z\"/><path d=\"M29.176 4.681s-5.64 3.665-8.866 7.977s-4.037 9.271-4.037 9.271M29.177 4.681s3.052 5.995 3.69 11.342s-1.14 10.048-1.14 10.048\"/><path d=\"m4.682 18.824l9.659 2.588L24 24l9.658 2.588l9.66 2.589M4 44h40M24 24l-5.5 20m4-39.949a20 20 0 0 1 6.676.63a20 20 0 0 1 5.37 2.32\"/></g>"
	},
	bear: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 13.06c0 2.48 1.292 4.461 3 5.94c-1.076 2.146-2 4.474-2 7c0 9.221 8.124 17 18 17s18-7.779 18-17c0-2.526-.924-4.854-2-7c1.708-1.479 3-3.521 3-6c0-4.452-3.68-8-8-8c-3.273 0-5.833 2.06-7 5a20 20 0 0 0-4-.394c-1.351 0-2.735.129-4 .394c-1.167-2.94-3.727-5-7-5c-4.32 0-8 3.609-8 8.06Z\"/><circle cx=\"20\" cy=\"19\" r=\"2\" fill=\"currentColor\"/><circle cx=\"28\" cy=\"19\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"26\" r=\"3\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 26v8\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M28 33c-2.276 2.276-5.724 2.276-8 0\"/></g>"
	},
	beauty: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 44V22c0-9.941-8.059-18-18-18S6 12.059 6 22v22\"/><path d=\"M24 43c5.523 0 10-8.954 10-20H14c0 11.046 4.477 20 10 20\"/></g>"
	},
	"beauty-instrument": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17 34h14m-15-7h16\"/><rect width=\"30\" height=\"16\" x=\"9\" y=\"4\" rx=\"4\"/><path d=\"m14 20l5 24h10l5-24m-17-8h13\"/></g>"
	},
	bedside: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 18h40v12H4zm0 12h40v12H4zm18-6h4m-4 12h4M8 42v4m32-4v4M24 18v-8m8 0H16\"/>"
	},
	"bedside-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 18h40v24H4zm18 6h4M4 30h40m-22 6h4M8 42v4m32-4v4M24 18v-8\"/><path d=\"M32 10a8 8 0 1 0-16 0z\" clip-rule=\"evenodd\"/><path d=\"M44 26v8M4 26v8\"/></g>"
	},
	bee: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M30 28.696C30 35 27.314 44 24 44s-6-9-6-15.304C18 24.998 20.686 22 24 22s6 2.998 6 6.696Z\"/><path d=\"M11.478 17C13.988 17 20 19.239 20 22s-6.012 5-8.522 5S6 24.761 6 22s2.968-5 5.478-5Zm25.044 0C34.012 17 28 19.239 28 22s6.012 5 8.522 5S42 24.761 42 22s-2.968-5-5.478-5Z\"/><rect width=\"10\" height=\"13\" x=\"19\" y=\"9\" rx=\"5\"/><path stroke-linecap=\"round\" d=\"M28 10a6 6 0 0 1 6-6m-13 6c0-3.314-3.134-6-7-6\"/></g>"
	},
	beer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M25.5 19H33a2 2 0 0 1 2 2v23H13V21a2 2 0 0 1 2-2h2.5\"/><path stroke-linejoin=\"round\" d=\"M17 8h-2.5a5.5 5.5 0 1 0 0 11H19v10.5a2.5 2.5 0 0 0 5 0V19h9.5a5.5 5.5 0 1 0 0-11H29s-1-4-6-4s-6 4-6 4\"/><path d=\"M35 21h5a2 2 0 0 1 2 2v5a4 4 0 0 1-4 4h-3\"/></g>"
	},
	"beer-mug": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M16 37.241C16 39.172 16.857 44 28 44s12-4.828 12-6.759V16H16z\"/><path stroke-linecap=\"round\" d=\"M25 23v14m6-14v14\"/><path d=\"M15.998 16s-1.999-4.5 1-7S23 8 23 8s1-4 5-4s5 4 5 4s3.5-1.5 6 1s.999 7 .999 7M16 19H6s1 10 2 13c.998 3 8 2 8 2\"/></g>"
	},
	behance: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 24c5 0 8-2.8 8-7s-3-7-8-7H4v14zm1.031 16C18.537 40 22 37 22 32s-3.463-8-8.969-8H4v16z\" clip-rule=\"evenodd\"/><path d=\"M29 31h15c0-4-2-9-8-9c-5 0-8 4-8 9s3 9 8 9s7-3 7-3m-1-22H30\"/></g>"
	},
	"bell-ring": {
		body: "<g fill=\"none\"><circle cx=\"20\" cy=\"20\" r=\"16\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><path d=\"M44 18v2h-2v-2z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 20h2v-2h-2zm0 0c0 9.137-5.57 16.973-13.5 20.298M14 35l-4 9h20l-4-9\"/><circle cx=\"20\" cy=\"20\" r=\"4\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 20c0-5.523 4.477-10 10-10\"/></g>"
	},
	belt: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m10.565 30.364l-6.364 6.364l7.071 7.071l6.364-6.364m4.243-18.385l14.85-14.849l7.07 7.071l-14.849 14.85\"/><path d=\"M9.859 29.657a2 2 0 0 1 0-2.829l8.485-8.485a2 2 0 0 1 2.828 0l8.485 8.485a2 2 0 0 1 0 2.829l-8.485 8.485a2 2 0 0 1-2.828 0zm15.556-7.071l-7.071 7.07M31.779 9.15l7.07 7.072M26.828 14.1l7.071 7.072m-18.384 0L26.83 32.485\"/></g>"
	},
	benz: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.68 34L24 24m0-20v20zm17.32 30L24 24z\"/><path d=\"M18 4.916A20 20 0 0 1 24 4c2.09 0 4.106.32 6 .916M4.63 29a20 20 0 0 0 2.045 5a20 20 0 0 0 3.042 4m33.653-9a20 20 0 0 1-2.046 5a20 20 0 0 1-3.041 4\"/></g>"
	},
	"bezier-curve": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 30h8v8H4zm32 0h8v8h-8zM20 10h8v8h-8z\"/><path stroke-linecap=\"round\" d=\"M20 14H4m40 0H28M8 30c0-7.455 5.1-13.72 12-15.496m8 0C34.9 16.28 40 22.544 40 30\"/></g>"
	},
	bib: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M31 14c0 8-14 8-14 0c0-5 5-6 3-9S8 7 8 16v16c0 8.5 8.5 12 15.5 12S40 41 40 32V16C40 7 29 2 27 5s4 4 4 9Z\"/><path stroke-linecap=\"round\" d=\"m19 32l5-5l5 5l-5 5z\"/></g>"
	},
	"big-clock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 4C12.954 4 4 12.865 4 23.8V44h40V23.8C44 12.865 35.046 4 24 4\"/><circle cx=\"24\" cy=\"24\" r=\"12\"/><path d=\"M24 18v6l4 4\"/></g>"
	},
	"big-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M33 6h11L15 42H4z\"/><path d=\"M15 6H4l29 36h11z\"/></g>"
	},
	bike: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10.5 42a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17M37 42a9 9 0 1 0 0-18a9 9 0 0 0 0 18\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18.997 6h9L37 33\"/><path d=\"m11.057 33l20.625-16.237z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m11.057 33l20.625-16.237m0-1.763h8.472L42 10M8 15.974h7M15 16l3.273 10.421\"/></g>"
	},
	bill: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v38l-7-5l-7 5l-7-5l-7 5zm8 16h12m-12 8h12M18 14h12\"/>"
	},
	bird: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m9 14l-5 6.07S5.85 27.035 11 32c9.89 9.533 24.334 3.303 30-1c5.357-4.37 2.717-5.332 1-5l-5 1c9.065-14.301 6.575-15.828 4-15l-9 4c-5.769 3.177-8.5 1.5-10 0l-3-3c-4.5-4-8.97-.16-10 1\"/><circle cx=\"14\" cy=\"20\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"birthday-cake": {
		body: "<g fill=\"none\"><path d=\"M8 40h32V24H8z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 40H8m32 0H4h4m32 0h4m-4 0V24H8v16\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m40 34l-4-2l-4 2l-4-2l-4 2l-4-2l-4 2l-4-2l-4 2m24-10v-9m-8 9v-9m-8 9v-9m16-5V8m-8 2V8m-8 2V8M8 24v16m32-16v16\"/></g>"
	},
	bitcoin: {
		body: "<g fill=\"none\"><circle cx=\"24\" cy=\"24\" r=\"20\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><path d=\"M20 16h7a4 4 0 0 1 0 8h-7z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 16v8h7a4 4 0 0 0 4-4v0a4 4 0 0 0-4-4h-2m-5 0h-4m4 0v-4m0 4h5m0 0v-4\"/><path d=\"M20 24h9a4 4 0 0 1 0 8h-9z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 32v-8h9a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-4m-5 0v4m0-4h-4h9m-5 0h5m0 0v4\"/></g>"
	},
	"black-eight": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path d=\"M24 23a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm0 12a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z\"/></g>"
	},
	blackboard: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 7h32v24H8z\"/><path stroke-linecap=\"round\" d=\"M4 7h40M15 41l9-10l9 10M16 13h16m-16 6h12m-12 6h6\"/></g>"
	},
	blade: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 14v3H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2v3a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-3h3a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2h-3v-3a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2m4 10h24\"/><circle cx=\"24\" cy=\"24\" r=\"4\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 29V19M16 29V19\"/></g>"
	},
	bless: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M21 24.713V5.935a1.935 1.935 0 0 0-3.828-.405l-4.114 19.199q-.058.271-.188.516l-7.316 13.82C4.85 40.395 5.814 42 7.322 42h8.084a2 2 0 0 0 1.95-1.554l3.124-13.672l.44-1.499a2 2 0 0 0 .08-.562M13 25l7 3m7-3.287V5.935a1.935 1.935 0 0 1 3.828-.405l4.114 19.199q.058.271.188.516l7.316 13.82c.705 1.331-.26 2.935-1.768 2.935h-8.084a2 2 0 0 1-1.95-1.554L27.52 26.774l-.44-1.499a2 2 0 0 1-.08-.562M35 25l-7 3\"/>"
	},
	block: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m36 11l-3-3H12l16 16l-16 16h21l3-3M6 5v38M42 5v38\"/>"
	},
	"block-eight": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 6h12v12H6zm12 0h12v12H18zm0 12h12v12H18zm0 12h12v12H18zM30 6h12v12H30z\"/>"
	},
	"block-five": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 30h12v12H6zm12-12h12v12H18zM30 6h12v12H30z\"/>"
	},
	"block-four": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 12h12v12H6zm12 0h12v12H18zm12 0h12v12H30zM18 24h12v12H18z\"/>"
	},
	"block-nine": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 14h12v12H18zm0 12h12v12H18zm12-12h12v12H30zM6 26h12v12H6z\"/>"
	},
	"block-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 30h12v12H6zM30 6h12v12H30zm0 12h12v12H30zm-12 0h12v12H18zM6 18h12v12H6z\"/>"
	},
	"block-seven": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 18h12v12H18zm12 0h12v12H30zM6 18h12v12H6zm12 12h12v12H18zm0-24h12v12H18z\"/>"
	},
	"block-six": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 18h12v12H18zM6 18h12v12H6zm24 0h12v12H30z\"/>"
	},
	"block-ten": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 6h12v12H24z\"/><path d=\"M24 6h12v12H24zM12 6h12v12H12zm0 24h12v12H12zm0-12h12v12H12z\"/></g>"
	},
	"block-three": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 24h12v12H6zm24 0h12v12H30zM6 12h12v12H6zm12 0h12v12H18zm12 0h12v12H30z\"/>"
	},
	"block-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 6h12v12H18zm12 0h12v12H30zM6 6h12v12H6zm0 12h12v12H6zm0 12h12v12H6z\"/>"
	},
	blockchain: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 30V15L27.5 7.969m-7 0L8 15v15m3 4.688L24 42l8-4.5l5-2.812M21 18.75l-3 1.75v7l3 1.75L24 31l3-1.75l3-1.75v-7l-3-1.75L24 17zM24 17v-7m6 17l7 4m-19-4l-7 4\"/><circle cx=\"24\" cy=\"7\" r=\"3\"/><circle cx=\"8\" cy=\"33\" r=\"3\"/><circle cx=\"40\" cy=\"33\" r=\"3\"/></g>"
	},
	"blocks-and-arrows": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 6H6v14h14zm0 22H6v14h14zM42 6H28v14h14zM28 28l14 14M28 28h14zm0 0v14z\"/>"
	},
	bloom: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 32l12 10m24-10L30 42m-6-10v12m-7-33l7-7l7 7l7-1s1 4.239 1 7c0 10-8.5 15-15 15S9 27 9 17c0-2.761 1-7 1-7z\"/>"
	},
	blossom: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M23.266 6.008c7.734.451 7.955 8.363 7.019 11.615c9.358-2.974 12.946 1.24 13.57 3.717c1.122 5.947-4.524 7.744-7.487 7.899c5.989 7.433 3.12 11.15.936 12.08c-6.738 1.858-10.606-2.943-11.698-5.576c-2.995 6.319-8.11 6.66-10.294 6.04c-6.364-1.858-3.587-8.518-1.404-11.615c-8.984-1.487-10.294-5.885-9.826-7.898c1.497-7.434 9.358-6.195 13.101-4.647c-1.497-9.664 3.432-11.77 6.083-11.615M25 26l-4 5m-2-6l6 1m-1-7l1 7m6-2l-6 2m0 0l5 4\"/>"
	},
	bluetooth: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m12 13l22 21l-11 10V4l11 10l-22 21\"/>"
	},
	boiler: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"38\" height=\"8\" x=\"5\" y=\"6\" rx=\"2\"/><path d=\"M8 14v26a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14\"/><path stroke-linecap=\"round\" d=\"M31 29.067C31 32.896 27.866 36 24 36s-7-3.104-7-6.933c0-3.83 2.692-5.334 3.77-9.067c4.307 1.867 4.307 7.467 4.307 7.467s1.077-3.2 4.308-4C29.654 26.4 31 27.432 31 29.067\"/></g>"
	},
	"bolt-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M12 12.28a.28.28 0 0 1 .28-.28h23.44a.28.28 0 0 1 .28.28V24c0 6.627-5.373 12-12 12s-12-5.373-12-12z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20 12V4m8 8V4m-6 23h4m-2 9v5a3 3 0 0 0 3 3h11\"/></g>"
	},
	bone: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M43.523 17.315c0-4.243-3.536-4.243-6.01-6.718c-2.475-2.475-2.475-6.01-6.718-6.01c-2.829 0-5.303 3.182-5.303 5.303s.707 3.536 2.121 4.95L14.885 27.568c-1.414-1.414-2.828-2.122-4.95-2.122c-2.121 0-5.303 2.475-5.303 5.304c-.354 4.596 3.89 4.596 6.01 6.717c2.122 2.122 2.122 6.364 6.718 6.01c2.828 0 5.303-3.181 5.303-5.303s-.707-3.535-2.121-4.95L33.27 20.498c1.414 1.414 2.828 2.121 4.95 2.121c2.12 0 5.303-2.475 5.303-5.303Z\"/>"
	},
	book: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 40V10c0-3.314 2.865-6 6.4-6H40v32H14.4c-5.038 0-6.4.684-6.4 4Z\"/><path stroke-linecap=\"round\" d=\"M12 44h28v-8H12a4 4 0 0 0 0 8\" clip-rule=\"evenodd\"/></g>"
	},
	"book-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M7 37V11a6 6 0 0 1 6-6h22v26H13c-3.3 0-6 2.684-6 6Z\"/><path stroke-linecap=\"round\" d=\"M35 31H13a6 6 0 0 0 0 12h28V7M14 37h20\"/></g>"
	},
	"book-open": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 7h11a8 8 0 0 1 8 8v27a6 6 0 0 0-6-6H5zm38 0H32a8 8 0 0 0-8 8v27a6 6 0 0 1 6-6h13z\"/>"
	},
	bookmark: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2z\"/><path stroke-linecap=\"round\" d=\"M21 22V4h12v18l-6-6.273z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M10 4h28\"/></g>"
	},
	"bookmark-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M34 10V4H8v34l6-3\"/><path d=\"M14 44V10h26v34l-13-6.273z\"/></g>"
	},
	"bookmark-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M7 9a3 3 0 0 1 3-3h31v36H10a3 3 0 0 1-3-3z\"/><path stroke-linecap=\"round\" d=\"M7 34h34M7 30v8m34-8v8\"/><path d=\"M15 6h10v20l-5-4l-5 4z\"/><path stroke-linecap=\"round\" d=\"M11 6h18\"/></g>"
	},
	bookshelf: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 6h34s4 2 4 7s-4 7-4 7H5s4-2 4-7s-4-7-4-7m38 22H9s-4 2-4 7s4 7 4 7h34s-4-2-4-7s4-7 4-7\"/>"
	},
	"booster-car-seat": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M32 15H16c0 3.47-5.78 7.903-9.317 10.292C5.123 26.344 4 27 4 27s1 3 3.5 8c1.894 3.788 4.075 5.854 5.02 6.633c.306.25.69.367 1.085.367h21.693c.455 0 .894-.154 1.217-.474c.86-.852 2.672-2.9 4.485-6.526c2.5-5 3-8 3-8s-1.278-.639-3-1.709c-3.554-2.207-9-6.25-9-10.291m0 0l2-9h8m-26 9l-2-9H6\"/><path d=\"M4 27s2 4 8 4h24c5 0 8-4 8-4\"/><path d=\"M7.5 35C5 30 4 27 4 27s1.124-.655 2.683-1.709M41 35c2.5-5 3-8 3-8s-1.278-.639-3-1.709\"/></g>"
	},
	booth: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 5h40v8l-1.398.84a7 7 0 0 1-7.203 0L34 13l-1.398.84a7 7 0 0 1-7.203 0L24 13l-1.398.84a7 7 0 0 1-7.203 0L14 13l-1.399.84a7 7 0 0 1-7.202 0L4 13zm2 20h36v18H6zm3-9v9m30-9v9\"/>"
	},
	boots: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 4h16l-4 32l1.236.618A5 5 0 0 1 35 41.09V44H10v-2l13-6zm1 8h14\"/>"
	},
	bottle: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M36 18H12v26h24z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.894 11h8.212a4 4 0 0 1 3.8 2.75L33.303 18H14.695l1.4-4.25a4 4 0 0 1 3.8-2.75\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M21 11V7a3 3 0 1 1 6 0v4m-8.5 15v10\"/></g>"
	},
	"bottle-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15 30a9 9 0 0 1 1.8-5.4l3.6-4.8A3 3 0 0 0 21 18V4h6v14a3 3 0 0 0 .6 1.8l3.6 4.8A9 9 0 0 1 33 30v12a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2zm6-20h6m-6 2V8m6 4V8\"/>"
	},
	"bottle-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M21.188 10h5.625L33 21.18V44H15V21.18zM20 4h8v6h-8z\"/><rect width=\"6\" height=\"12\" x=\"21\" y=\"23\" rx=\"3\"/></g>"
	},
	"bottle-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M15 21.56a9.82 9.82 0 0 1 4.767-8.42a.48.48 0 0 0 .233-.411V4h8v8.729c0 .168.088.324.233.41A9.82 9.82 0 0 1 33 21.56V42a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2z\"/><path d=\"M20 10h8\"/><path stroke-linejoin=\"round\" d=\"M33 23h-9v15h9m0 2V21m-13-9V8m8 4V8\"/></g>"
	},
	"bottom-bar": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M6 32h36M6 29v6m36-6v6\"/></g>"
	},
	"bottom-bar-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13.777 20h4s7 7.28 7 14s-6 10-6 10h-6s-6-3.28-6-10s7-14 7-14m2-16c2.084 0 5 1.52 5 6s-3.333 10-3.333 10h-3.333s-3.334-5.52-3.334-10s2.917-6 5-6m16 16h4s7 7.28 7 14s-6 10-6 10h-6s-6-3.28-6-10s7-14 7-14m2-16c2.084 0 5 1.52 5 6s-3.333 10-3.333 10h-3.333s-3.334-5.52-3.334-10s2.917-6 5-6\"/>",
		width: 49
	},
	bow: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6.544 14.262C11.403 15.23 16.603 18.754 20 23c0 10.63-7.356 13.237-12.771 13.834c-1.478.163-2.451-1.401-1.853-2.763C6.826 30.774 8 27.3 8 25c0-2.391-1.906-5.418-3.186-8.573c-.49-1.206.453-2.418 1.73-2.165m34.912 0C36.597 15.23 31.397 18.754 28 23c0 10.63 7.356 13.237 12.771 13.834c1.478.163 2.451-1.401 1.853-2.763C41.174 30.774 40 27.3 40 25c0-2.391 1.906-5.418 3.186-8.573c.49-1.206-.453-2.418-1.73-2.165M20 21h8v8h-8z\"/>"
	},
	bowl: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 44s0-3.864.002-3.872a18 18 0 0 0 4.726-3.4A17.94 17.94 0 0 0 42 24H6c0 4.97 2.015 9.47 5.272 12.728a18.1 18.1 0 0 0 4.741 3.407L16 44zm-8-25.992V8m12 10.008V12m-24 6.008V12m28-4a4 4 0 0 0-4 4m-8-8a4 4 0 0 0-4 4m-8 0a4 4 0 0 0-4 4\"/>"
	},
	"bowl-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M24 39c9.389 0 17-7.059 17-17H7c0 9.941 7.611 17 17 17\"/><path stroke-linejoin=\"round\" d=\"m18 38l-2 6h16l-2-6\"/><path d=\"M12 10v4m24-4v4M24 5v9\"/></g>"
	},
	bowling: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M24.777 44c11.05 0 20-8.95 20-20s-8.95-20-20-20s-20 8.95-20 20s8.95 20 20 20Z\"/><path fill=\"currentColor\" d=\"M24.777 26c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3m7-8c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3m-14 0c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3\"/></g>",
		width: 49
	},
	box: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"30\" x=\"6\" y=\"12\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M17.95 24.008h12M6 13l7-8h22l7 8\"/></g>"
	},
	boxing: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" stroke-miterlimit=\"2\" d=\"M38 36v6a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2v-6m-4-21v-5a6 6 0 0 1 6-6h21a6 6 0 0 1 6 6v20c0 3.314-2.68 6-5.994 6H15C8 36 4 28 4 23v-8z\"/><path d=\"M11 14v8\"/></g>"
	},
	"boxing-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M13 26h2c2.76 0 5-2.24 5-5s-2.24-5-5-5h-4c-2.76 0-5 2.24-5 5v9a6 6 0 0 0 6 6h24a6 6 0 0 0 6-6v-4a4 4 0 0 0-4-4H24m10 22H14a2 2 0 0 1-2-2v-6h24v6c0 1.1-.9 2-2 2\"/><path d=\"M6 20c-1 0-2-2-2-4v-4c0-4.42 3.58-8 8-8h24c4.42 0 8 3.58 8 8v4c0 3.31-2.69 6-6 6H19.9\"/></g>"
	},
	boy: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"10\" r=\"6\"/><path d=\"M30 36H18l-8-20h28zm-3 0v8m-6-8v8\"/></g>"
	},
	"boy-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"11\" r=\"7\"/><path d=\"M27 44h-6L8 24h32z\"/></g>"
	},
	"boy-stroller": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 24H12l2.5 10H36zm-28 0l-4-9H3.5\"/><circle cx=\"20\" cy=\"41\" r=\"3\"/><circle cx=\"31\" cy=\"41\" r=\"3\"/><path d=\"m23 8l9 16h8l4-11c-2.333-3-7-9-10-9c-4 0-8.333 2.667-11 4m6-3l4 7\"/></g>"
	},
	"boy-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"10\" r=\"6\"/><path d=\"M31 44v-9l5-3l-4-13s-4-3-8-3s-8 3-8 3l-4 12l5 4v9\"/></g>"
	},
	brain: {
		body: "<g fill=\"none\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4.667\" d=\"M19.036 44q-1.47-4.793-4.435-7.147c-2.965-2.353-7.676-.89-9.416-3.318s1.219-6.892 2.257-9.526s-3.98-3.565-3.394-4.313q.585-.748 7.609-4.316Q13.652 4 26.398 4C39.144 4 44 14.806 44 21.68c0 6.872-5.88 14.276-14.256 15.873q-1.123 1.636 3.24 6.447\"/><path stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19.5 14.5q-.981 3.801.583 5.339q1.563 1.537 5.328 2.01q-.855 4.903 2.083 4.6q2.937-.302 3.53-2.44q4.59 1.29 4.976-2.16c.385-3.45-1.475-6.201-2.238-6.201s-2.738-.093-2.738-1.148s-2.308-1.65-4.391-1.65s-.83-1.405-3.69-.85q-2.86.555-3.443 2.5Z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" stroke-width=\"4\" d=\"M30.5 25.5c-1.017.631-2.412 1.68-3 2.5c-1.469 2.05-2.66 3.298-2.92 4.608\"/></g>"
	},
	"brake-pads": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16\"/><path d=\"M24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-24a20 20 0 0 1 20 20h-7.994A12.006 12.006 0 0 0 24 11.994z\"/></g>"
	},
	branch: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM9 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" d=\"M9 12v24v-11.992h27\"/></g>"
	},
	"branch-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 33V15M10 9h28v6H10zM8 32l6-7h19.974L40 32M4 33h8v8H4zm16 0h8v8h-8zm16 0h8v8h-8z\"/>"
	},
	"branch-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M36 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-22 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8\" clip-rule=\"evenodd\"/><path d=\"M14 12v24v-3c0-8 22-9 22-17v-4\"/></g>"
	},
	"brdige-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 12v26m32-26v26\"/><path d=\"M8 38s8-11 16-11s16 11 16 11\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 27h40M4 19h40\"/><path stroke-linecap=\"round\" d=\"M24 15v12m-8-8v8m16-8v8\"/></g>"
	},
	bread: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M4 32.083c0-1.202.266-2.395.971-3.368C7.045 25.85 12.671 20 24 20s16.955 5.851 19.029 8.715c.705.973.971 2.166.971 3.368A7.917 7.917 0 0 1 36.083 40H11.917A7.917 7.917 0 0 1 4 32.083\"/><path d=\"M12 9v4m2 9v4M36 9v4m-2 9v4M24 7v6m0 7v8m16-2.557C36.906 22.78 31.808 20 24 20s-12.906 2.779-16 5.443\"/></g>"
	},
	"bread-machine": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7 27a8 8 0 0 1 8-8h18a8 8 0 0 1 8 8v8a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4zm27-8v-7c5 0 5-7 0-7H14c-5 0-5 7 0 7v7m8-8l-2 2m8-2l-2 2\"/><circle cx=\"24\" cy=\"29\" r=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15 39v4m18-4v4\"/></g>"
	},
	"bread-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M9 26s8-12 13-18c3.13-3.757 9-5.25 14-3s7 7 5 11s-10 19-10 19\"/><path d=\"M31 33.188c0 3.152-1.756 5.97-4.514 7.838c-2.166 1.468-4.95.841-7.986.841c-3.201 0-6.122.528-8.333-1.085C7.609 38.917 6 36.206 6 33.188C6 26.812 11.596 23 18.5 23S31 27.561 31 33.188\"/><path d=\"M23 33.217c0 .996-.632 1.885-1.625 2.476c-.78.463-1.782.265-2.875.265c-1.152 0-2.204.167-3-.343c-.92-.589-1.5-1.445-1.5-2.398C14 31.204 16.015 30 18.5 30s4.5 1.44 4.5 3.217M15 18s3.5-1 8 0m-3-7s3.5-1.5 7 0\"/></g>"
	},
	"breast-pump": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M35 25c0-4-6-6-6-6v-5H17v5s-6 2-6 6v19h24zM20 4l-7 6m10 4l-6-7m9 1h9v7l6 5\"/>"
	},
	"bridge-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 19v14h8c0-6.627 5.373-12 12-12s12 5.373 12 12h8V19s-12.035-4-20-4s-20 4-20 4\"/>"
	},
	"bridge-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M8 13s6 10 16 10s16-10 16-10\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 10v28m32-28v28\"/><path stroke-linecap=\"round\" d=\"M4 30.5s12.188-.597 20-.5c7.82.098 20 1 20 1M16 21v9m8-7v7m8-9v9M8 13l-4 5m40 0l-4-5\"/></g>"
	},
	briefcase: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M32 16c0-6.075-3.582-12-8-12s-8 5.925-8 12m-7 0h30l1 12H27v-3h-6v3H8zM8 28L6 42h36l-2-14\"/><path d=\"M21 25h6v6h-6z\"/></g>"
	},
	brightness: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24.02 35.354c6.076 0 11-4.925 11-11s-4.924-11-11-11s-11 4.924-11 11s4.925 11 11 11Z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"m38.96 9.01l-2.46 2.474M11.067 36.745l-2.046 2.059M24 41.353v3m20-20.999h-4m-2.468 12.982L40 38.804\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M24.02 17.354a7 7 0 1 0 0 14\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M4 24.354h4M10.044 9.01l2.053 2.053M24 3.354v4\"/></g>"
	},
	"bring-forward": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 34h36v8H6zm0-14h36v8H6z\"/><path stroke-linecap=\"round\" d=\"m30 12l-6-6l-6 6v0m6 16v6m0-28v14\"/></g>"
	},
	"bring-to-front": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M41 18H19a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.97 6H6v4.034M9.997 30H6v-3.988M26.002 6H30v4.015M16.028 6h3.98M6 16v4m24-4v2.007\"/><path stroke-linecap=\"round\" d=\"M15.992 30H18\"/></g>"
	},
	"bring-to-front-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 21v13h13m-6-20h13v13M5 21V5h16v16zm22 22V27h16v16z\"/>"
	},
	broadcast: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 28.63a4.54 4.54 0 0 0 4.546-4.532A4.54 4.54 0 0 0 24 19.567a4.54 4.54 0 0 0-4.545 4.53A4.54 4.54 0 0 0 24 28.63Z\"/><path stroke-linecap=\"round\" d=\"M16 15c-5.333 4.97-5.333 13.03 0 18m16 0c5.333-4.97 5.333-13.03 0-18M9.858 10c-7.81 7.786-7.81 20.41 0 28.196m28.284 0c7.81-7.786 7.81-20.41 0-28.196\"/></g>"
	},
	"broadcast-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\"><path stroke-width=\"4\" d=\"M24 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" stroke-width=\"4\" d=\"M24 15v8m6 0v10M18 23v10\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7 33V23l34 .013V33\"/><path stroke-linecap=\"round\" stroke-width=\"5\" d=\"M41 41v1M7 41v1m11-1v1m12-1v1\"/></g>"
	},
	"broadcast-radio": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 12h40v28H4z\"/><path d=\"M31 31a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" d=\"M12 22h6m-6 8h6M8 40v4m32-4v4M8 12l28-8\"/></g>"
	},
	browser: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 18v22a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V18\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 8a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v10H6z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4\" clip-rule=\"evenodd\"/></g>"
	},
	"browser-chrome": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 15a9 9 0 1 1 0 18a9 9 0 0 1 0-18m0 0h17.865M17 42.74L29.644 31M6 15.272l10.875 14.28M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\"/>"
	},
	"browser-safari": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path fill=\"currentColor\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m15 33l4.5-13.5L33 15l-4.5 13.5z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M24 26a2 2 0 1 0 0-4a2 2 0 0 0 0 4\" clip-rule=\"evenodd\"/></g>"
	},
	"bubble-chart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"34\" cy=\"14\" r=\"9\"/><circle cx=\"12\" cy=\"25\" r=\"7\"/><circle cx=\"29\" cy=\"37\" r=\"5\"/></g>"
	},
	bug: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 42c12 0 14-10.468 14-14V14H10v14c0 3.45 2 14 14 14Z\"/><path stroke-linecap=\"round\" d=\"m4 8l6 6m34-6l-6 6M4 27h6m34 0h-6M7 44l6-6m28 6l-6-6m-11 4V14m-9.08 25.04C17.002 40.784 19.924 42 24 42c4.111 0 7.049-1.229 9.134-2.986\"/><path d=\"M32 12.333C32 7.731 28.418 4 24 4s-8 3.731-8 8.333V14h16z\"/></g>"
	},
	"building-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m17 14l27 10v20H17z\" clip-rule=\"evenodd\"/><path d=\"M17 14L4 24v20h13m18 0V32l-9-3v15m18 0H17\"/></g>"
	},
	"building-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M11 14L25 4v40H11z\" clip-rule=\"evenodd\"/><path d=\"m25 13l14 10v21M4 44h40\"/></g>"
	},
	"building-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m24 8l20 13v23H4V21z\" clip-rule=\"evenodd\"/><path d=\"M20 44V23l-8 5v16m16 0V23l8 5v16m5 0H8\"/></g>"
	},
	"building-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m21 13l-10 7v24\"/><path d=\"m21 4l10 7v13l7 5v15H21z\" clip-rule=\"evenodd\"/><path d=\"M4 44h40\"/></g>"
	},
	"bullet-map": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M6 6v36h36\"/><path d=\"M16 40V9c0-1.105 1.053-2 2.353-2h15.294C34.947 7 36 7.895 36 9v31m-19-7.892h17M22 19h8m-4-5v18.108\"/></g>"
	},
	bus: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6.012 34.005V8.036a2 2 0 0 1 2-2H40a2 2 0 0 1 2 2v25.969a3 3 0 0 1-3 3h-1.995V38a4 4 0 1 1-8 0v-.995h-9.997v.997a3.998 3.998 0 0 1-7.997 0v-.997H9.012a3 3 0 0 1-3-3Z\"/><path stroke-linecap=\"round\" d=\"M42 23H6m28-10H14v10h20zM14 30h2m16 0h2\"/></g>"
	},
	"bus-one": {
		body: "<g fill=\"none\"><rect width=\"32\" height=\"34\" x=\"8\" y=\"5\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"3\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 39v4m20-4v4\"/><circle cx=\"34\" cy=\"33\" r=\"2\" fill=\"currentColor\"/><circle cx=\"14\" cy=\"33\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 23h32M8 21v4m32-4v4M18 13h12\"/></g>"
	},
	"bus-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 6a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\" clip-rule=\"evenodd\"/><path d=\"M16 40H8v4h8zm24 0h-8v4h8zM21 16h6M10 34h2m7 0h10M4 25h40M4 10h40m-8 24h2M4 6v8m40-8v8M4 21v8m40-8v8\"/></g>"
	},
	butterfly: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 12c3.664-4.294 14.081 6.82 19 13c4.92-6.18 15.337-17.294 19-13c.679.65 1.443 2.877-1 6c-.678.976-1.814 3.706-1 8c0 1.139-1.115 2.952-6 1c2.375 1.627 6.85 6.096 4 10c-2.714 3.416-9.035 7.457-13-2l-2-4l-2 4c-3.964 9.457-10.286 5.416-13 2c-2.85-3.904 1.626-8.373 4-10c-4.885 1.952-6 .139-6-1c.814-4.294-.321-7.024-1-8c-2.442-3.123-1.678-5.35-1-6\"/><path d=\"M24.032 23C23.534 17.864 28.913 7 33 7\"/><path d=\"M23.968 23C24.466 17.864 19.087 7 15 7\"/></g>"
	},
	buy: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M6 15h36l-2 27H8z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16 19V6h16v13\"/><path stroke-linecap=\"round\" d=\"M16 34h16\"/></g>"
	},
	bydesign: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 7.282L19.556 4v12.718L8 20zm0 18.393l11.556-3.282v12.718L8 38.393zm16.889-4.599l11.555-2.854v22.924L24.89 44z\"/>"
	},
	bye: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"m35 26.614l-19.854-19.3a2.93 2.93 0 0 0-4.259.188a3.334 3.334 0 0 0 .18 4.544l10.024 9.93\"/><path stroke-linejoin=\"round\" d=\"M21.09 21.976L10.178 11.155a3.486 3.486 0 0 0-4.735-.161a3.03 3.03 0 0 0-.18 4.417l10.993 11.203\"/><path d=\"M16.255 26.614L10 20.5a3.3 3.3 0 0 0-4.633-.08a3.233 3.233 0 0 0-.093 4.588c9.23 9.536 14.02 14.04 15.817 15.545C24 42.99 29.735 44 32.73 42s5.702-4.846 6.987-7.671q1.147-2.525 4.458-15.561a3.305 3.305 0 0 0-2.46-4.034a3.5 3.5 0 0 0-4.166 2.493L35 26.614m-3.284-13.948a19.6 19.6 0 0 0-8.752-7.187M5.194 33.776a19.6 19.6 0 0 0 8.364 7.635\"/></g>"
	},
	bytedance: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m5 7l5 2v28l-5 2zm11 16l5 2v12l-5 2zm11-2l5-2v16l-5-2zM38 9l5 2v26l-5 2z\"/>"
	},
	"bytedance-applets": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M24 4v19L8 36m16-13l16 13m-9-16l9-6m-23 6l-9-6m16 17v12\"/>"
	},
	"bytedance-mini-app": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m2.122-22.121l-4.243 4.243\"/><path d=\"m32.485 26.829l1.414-1.415a4 4 0 0 0 0-5.657L28.242 14.1a4 4 0 0 0-5.656 0l-1.415 1.415m5.657 16.97L25.414 33.9a4 4 0 0 1-5.657 0L14.1 28.243a4 4 0 0 1 0-5.657l1.415-1.414\"/></g>"
	},
	"cable-car": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"bevel\" d=\"M13.28 42a2 2 0 0 1-1.816-1.162l-5.077-11a2 2 0 0 1 0-1.676l5.077-11A2 2 0 0 1 13.28 16h21.44a2 2 0 0 1 1.816 1.162l5.077 11a2 2 0 0 1 0 1.676l-5.077 11A2 2 0 0 1 34.72 42z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 23h9v10H8m31-10H25v9h15M38 4s-9.5 3.5-17.436 4.394S8 9 8 9m18-1v8l-9-7\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m10.615 19l-4.228 9.162a2 2 0 0 0 0 1.676L9 35.5\"/><path stroke-linecap=\"round\" stroke-linejoin=\"bevel\" d=\"m37.385 19l4.228 9.162a2 2 0 0 1 0 1.676L39 35.5\"/></g>"
	},
	cactus: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M8 43h32M6 16c0 5.5.5 14 10 14m26-16c0 5 0 20-10 20\"/><path d=\"M24 5a8 8 0 0 0-8 8v30h16V13a8 8 0 0 0-8-8Z\"/></g>"
	},
	cake: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 12v5M8 27v13a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V27M4 21.97A4.97 4.97 0 0 1 8.97 17h30.06A4.97 4.97 0 0 1 44 21.97v.278a4.56 4.56 0 0 1-2.864 4.231a3.04 3.04 0 0 1-2.544-.132l-.342-.18a3.4 3.4 0 0 0-3.167 0a3.4 3.4 0 0 1-3.166 0a3.4 3.4 0 0 0-3.167 0a3.4 3.4 0 0 1-3.167 0a3.4 3.4 0 0 0-3.166 0a3.4 3.4 0 0 1-3.167 0a3.4 3.4 0 0 0-3.167 0a3.4 3.4 0 0 1-3.166 0a3.4 3.4 0 0 0-3.167 0l-.342.18a3.04 3.04 0 0 1-2.543.132A4.56 4.56 0 0 1 4 22.25z\"/><path d=\"M27 8c-.8-4-3-4-3-4s-2.2 0-3 4c-1 5 7 5 6 0Z\"/></g>"
	},
	"cake-five": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 27h30l-4.687 17H13.686zm30 0H9c0-5.5 5.5-8 5.5-8c0-2 2-8 9.5-8s9.5 6 9.5 8c0 0 5.5 2.5 5.5 8\"/><path stroke-linecap=\"round\" d=\"M6 27h36\"/><path d=\"M28 12a4 4 0 0 0-8 0\"/><path stroke-linecap=\"round\" d=\"m24 8l4-4\"/><path d=\"M20 27v17m8-17v17\"/></g>"
	},
	"cake-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"m6 25l5.171 15.628A2 2 0 0 0 13.07 42h21.86a2 2 0 0 0 1.899-1.372L42 25\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.407 25.123h-5.09a.31.31 0 0 1-.313-.318C6.164 17.783 11.634 11.885 19 10h10c7.077 2.036 12.823 7.958 12.996 14.806a.31.31 0 0 1-.312.317h-5.091a9.56 9.56 0 0 0-6.297 2.366a9.56 9.56 0 0 1-12.592 0a9.56 9.56 0 0 0-6.297-2.366M19.1 10a5 5 0 1 1 9.8 0\"/></g>"
	},
	"cake-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M27 14L9 21.9h30L34 15\"/><circle cx=\"31\" cy=\"13\" r=\"4\" fill=\"currentColor\"/><path stroke-linecap=\"round\" d=\"m33 9l2-5\"/><path d=\"M9.5 26.957q-.903.451-1.678.956C5.418 29.481 4 31.412 4 33.5c0 5.247 8.954 9.5 20 9.5s20-4.253 20-9.5c0-2.14-1.488-4.113-4-5.701\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 22h30v12H9z\"/><path d=\"M9 22h31\"/></g>"
	},
	"cake-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 34V16a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2M6 36h36M6 42h36\"/><path d=\"M9 21h6v5h6v-5h6v8h6v-8h6M9 23v-4m30 4v-4m-6-5V8m-9 6V4m-9 10V8\"/></g>"
	},
	"cake-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M40 17.9L31.058 8L9 17.9V30h31z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 18h17.386c.063 0 .114.051.114.114v3.511a2.875 2.875 0 0 0 2.875 2.875v0a2.875 2.875 0 0 0 2.875-2.875v-3.511c0-.063.051-.114.114-.114H40\"/><path d=\"M9.5 23.957q-.903.451-1.678.956C5.418 26.481 4 28.412 4 30.5c0 5.247 8.954 9.5 20 9.5s20-4.253 20-9.5c0-2.14-1.488-4.113-4-5.701\"/></g>"
	},
	calculator: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 4H8a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z\"/><path d=\"M35 10H13v9h22z\"/><path stroke-linecap=\"round\" d=\"m12 28l7 7m0-7l-7 7m16 0h8m-8-6h8\"/></g>"
	},
	"calculator-one": {
		body: "<g fill=\"none\"><rect width=\"32\" height=\"40\" x=\"8\" y=\"4\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 11h20v9H14z\"/><circle cx=\"17\" cy=\"26\" r=\"2\" fill=\"currentColor\"/><circle cx=\"17\" cy=\"32\" r=\"2\" fill=\"currentColor\"/><circle cx=\"17\" cy=\"38\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"26\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"32\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"38\" r=\"2\" fill=\"currentColor\"/><circle cx=\"31\" cy=\"26\" r=\"2\" fill=\"currentColor\"/><circle cx=\"31\" cy=\"32\" r=\"2\" fill=\"currentColor\"/><circle cx=\"31\" cy=\"38\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	calendar: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 19h38v21a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM5 9a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v10H5z\"/><path stroke-linecap=\"round\" d=\"M16 4v8m16-8v8m-4 22h6m-20 0h6m8-8h6m-20 0h6\"/></g>"
	},
	"calendar-dot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"40\" x=\"4\" y=\"4\" rx=\"2\"/><path d=\"M4 14h40m0-3v12m-32-1h4m6 0h4m6 0h4m-24 7h4m6 0h4m6 0h4m-24 7h4m6 0h4m6 0h4M4 11v12\"/></g>"
	},
	"calendar-thirty": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"40\" x=\"4\" y=\"4\" rx=\"2\"/><path d=\"M4 14h40M4 11v12m40-12v12\"/><path d=\"M28 22v14h8V22z\" clip-rule=\"evenodd\"/><path d=\"M12 22h8v14h-8m8-7h-6\"/></g>"
	},
	"calendar-thirty-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 8h40v36H4z\"/><path stroke-linecap=\"round\" d=\"M28 20v14h8V20z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M17 4v8m14-8v8m-19 8h8v14h-8m8-7h-6\"/></g>"
	},
	"calendar-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"36\" x=\"4\" y=\"8\" rx=\"2\"/><path d=\"M4 20h40M4 32h40M17 4v8m14-8v8m-14 8v24m14-24v24m13-31v26M4 13v26m10 5h20\"/></g>"
	},
	camera: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m15 12l3-6h12l3 6z\"/><rect width=\"40\" height=\"30\" x=\"4\" y=\"12\" rx=\"3\"/><path d=\"M24 35a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z\"/></g>"
	},
	"camera-five": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"21\" r=\"16\"/><circle cx=\"24\" cy=\"21\" r=\"7\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16 43h16m-8-6v6\"/></g>"
	},
	"camera-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M8 10v14c0 8.837 7.163 16 16 16s16-7.163 16-16V10\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 10h40\"/><path stroke-linejoin=\"round\" d=\"M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z\"/></g>"
	},
	"camera-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"19\" r=\"14\"/><circle cx=\"24\" cy=\"19\" r=\"6\"/><path d=\"m17 31l-6 12h26l-6-12\"/></g>"
	},
	"camera-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"26\" x=\"6\" y=\"14\" stroke-linejoin=\"round\" rx=\"2\"/><path stroke-linejoin=\"round\" d=\"m10 14l2.167-6h7.666L22 14z\"/><circle cx=\"29\" cy=\"27\" r=\"7\" stroke-linejoin=\"round\"/><path d=\"M36 10v4\"/></g>"
	},
	"camera-two": {
		body: "<g fill=\"none\"><rect width=\"24\" height=\"32\" x=\"12\" y=\"4\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"12\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 36v8m-8 0h16\"/><circle cx=\"24\" cy=\"17\" r=\"6\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><circle cx=\"24\" cy=\"29\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	camp: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 35h-4L24 6.5L8 35H4\"/><path d=\"M24 31c-2.761 0-5 3.582-5 8v2h10v-2c0-4.418-2.239-8-5-8M4 41h40M15 23s5-4 9-4s9 4 9 4m7-17l-2 3l2 3m0-6l2 3l-2 3M7 17l-1 2l1 2m0-4l1 2l-1 2\"/></g>"
	},
	cancer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"37\" cy=\"17\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 13s6-8 16-8s16 6 16 6\"/><circle cx=\"11\" cy=\"31\" r=\"6\" transform=\"rotate(-180 11 31)\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M42 35s-6 8-16 8s-16-6-16-6\"/></g>"
	},
	candy: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path stroke-linecap=\"round\" d=\"M24 28a4 4 0 0 1-4-4\"/><path stroke-linejoin=\"round\" d=\"m16.688 16.813l-12.78-1.846L14.842 4.033zm14.625 14.5l12.779 1.845l-10.934 10.934z\"/></g>"
	},
	"canned-fruit": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M15 24s-.5 3 1 9\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M37.567 12C38.727 14.81 40 18.642 40 21.938c0 3.877-1.345 11.412-2.315 16.339c-.544 2.765-2.982 4.723-5.8 4.723H16.042c-2.785 0-5.203-1.914-5.762-4.642C9.314 33.638 8 26.402 8 21.938c0-3.679 1.444-7.306 2.827-9.938\"/><path d=\"M11.587 6.457a1 1 0 0 1 .84-.457h23.147a1 1 0 0 1 .84.457l2.587 4a1 1 0 0 1-.84 1.543H9.839a1 1 0 0 1-.84-1.543z\"/></g>"
	},
	capricornus: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18 11a6 6 0 0 0-12 0m12 0v18m12-18a6 6 0 0 0-12 0m12 0v24.75S30 43 22 43\"/><circle cx=\"36\" cy=\"30\" r=\"6\"/></g>"
	},
	car: {
		body: "<g fill=\"none\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M13.5 32a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m21 0a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7 37a3 3 0 0 1-3-3v-9.29a6 6 0 0 1 3.319-5.368l.682-.34l2.31-9.91A4 4 0 0 1 14.205 6h19.688a4 4 0 0 1 3.904 3.128l2.205 9.874l.68.34A6 6 0 0 1 44 24.708V34a3 3 0 0 1-3 3h-1.997v1A4.001 4.001 0 0 1 31 38v-1H17v1a4 4 0 1 1-8 0v-1z\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 22h20l-1.652-7.434A2 2 0 0 0 30.396 13H17.604a2 2 0 0 0-1.952 1.566z\"/></g>"
	},
	"car-battery": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M43 12H3v30h40zM11 6H3v6h8zm32 0h-8v6h8zM9 21h6m16 0h6m-25-3v6\"/>"
	},
	"card-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M28 12V4L8 14v28l12-6\"/><path d=\"M20 16L40 6v28L20 44z\"/></g>"
	},
	cardioelectric: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5.555 23.194a19 19 0 0 1-.514-1.188C4.393 20.347 4 18.604 4 16.8C4 10.835 8.884 6 14.91 6c3.794 0 7.136 1.918 9.09 4.828A10.93 10.93 0 0 1 33.09 6C39.117 6 44 10.835 44 16.8c0 7.765-7.273 14.4-10.91 18Q29.456 38.4 24 42q-5.455-3.6-9.09-7.2c-.367-.362-.77-.756-1.199-1.178\"/><path d=\"M8 29.973L19.114 19.04l6.464 6.666l9.684-9.887\"/></g>"
	},
	carousel: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 11a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/><path d=\"M28 17h-8v12h8z\"/><path stroke-linecap=\"round\" d=\"M44 17h-8v12h8M4 17h8v12H4m0-16v20m40-20v20\"/></g>"
	},
	"carousel-video": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M11 7h26v34H11zm-7 4h7v26H4zm33 0h7v26h-7z\"/><path d=\"m22 20l6 4l-6 4z\"/></g>"
	},
	carrot: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M15.624 20.682C14.29 15.248 18.404 10 24 10s9.71 5.248 8.376 10.682L27.279 41.43a3.376 3.376 0 0 1-6.557 0z\"/><path stroke-linecap=\"round\" d=\"M24 4v5.5m6.102-3.908l-2.728 3.25M18 5.592l2.727 3.25M16 19h6m3 7h6m-12 8h4\"/></g>"
	},
	"cast-screen": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M21 39c0-8.837-7.163-16-16-16m8 16a8 8 0 0 0-8-8\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5.5 41a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 16.057V8h40v32H28.771\"/></g>"
	},
	castle: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m4 11l7-7l7 7zm26 0l7-7l7 7zm14 33V26h-4v-9h-6v9h-6v-5l-4-4l-4 4v5h-6v-9H8v9H4v18h14v-4a6 6 0 0 1 12 0v4zM7 11h8v6H7zm26 0h8v6h-8z\"/>"
	},
	cat: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M42 26c0 8.837-8.059 16-18 16S6 34.837 6 26m9-13.86c2.648-1.36 5.721-2.14 9-2.14s6.352.78 9 2.14\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 26V8.488c0-1.731 2.05-2.645 3.337-1.487L15 12.093M42 26V8.488c0-1.731-2.05-2.645-3.337-1.487L33 12.093\"/><circle cx=\"30\" cy=\"22\" r=\"2\" fill=\"currentColor\"/><circle cx=\"18\" cy=\"22\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"28\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 30L4 31m15 4L7 41m25-11l12 1m-15 4l12 6\"/></g>"
	},
	"category-management": {
		body: "<g fill=\"none\"><rect width=\"36\" height=\"14\" x=\"6\" y=\"28\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M20 7H10a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10\"/><circle cx=\"34\" cy=\"14\" r=\"8\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"34\" cy=\"14\" r=\"3\" fill=\"currentColor\"/></g>"
	},
	cattle: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M11.465 19.923C10.682 12.481 16.517 6 24 6c7.482 0 13.317 6.481 12.534 13.923l-1.488 14.132a11.108 11.108 0 0 1-22.093 0z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 31c3.492-3.125 11.428-7.17 20 0\"/><circle cx=\"19\" cy=\"18\" r=\"2\" fill=\"currentColor\"/><circle cx=\"21\" cy=\"34\" r=\"2\" fill=\"currentColor\"/><circle cx=\"29\" cy=\"18\" r=\"2\" fill=\"currentColor\"/><circle cx=\"27\" cy=\"34\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33 7.913c2.167-2 7.392-5.608 10-3s0 5-2 5.5c-2.5.625-4.2 2.3-5 3.5m-20.904-6c-2.166-2-7.392-5.608-10-3s0 5 2 5.5c2.5.625 4.2 2.3 5 3.5\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"m12 25l1 9.5M36 25l-1 9.5\"/></g>"
	},
	"cattle-zodiac": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m38 31l6 6M5 44V18C5 13 7 8 16 6l14-2\"/><path stroke-linejoin=\"round\" d=\"M19 20c1.5 1.5 3.5 5 9 5c3.167 0 10 1.5 10 8v11M16 6c6 0 9 3 9 10\"/><path d=\"M30 44a8 8 0 1 0-16 0\"/></g>"
	},
	caution: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M24 5L2 43h44z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M24 35v1m0-17l.008 10\"/></g>"
	},
	cc: {
		body: "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M19.278 12.14q2.855.51 5.414 1.45a10.17 10.17 0 0 0-7.638 3.513l-.198.235c-2.84 3.468-3.03 8.441-.572 12.112l-.062-.113c2.528 4.643 6.83 8.717 11.277 10.027c3.58 1.055 6.932 1.335 10.019.835l.027-.018a20.7 20.7 0 0 1-12.714 4.385h-.116l-.431-.006a20.75 20.75 0 0 1-14.576-6.446l-.33-.353C5.809 33.839 4.017 28.845 4 23.846v-.133l.006-.455a20.8 20.8 0 0 1 2.99-10.272l-.068.02c4.503-1.247 8.619-1.533 12.35-.866m10.539 20.493c1.546-.736 3.409-.38 4.632.843l5.011 5.01l-.34.331l-.082.079c-3.39.913-7.147.767-11.27-.447c-2.979-.878-5.535-3.03-7.817-5.679l-.05-.027a10.21 10.21 0 0 0 9.724-.013zM24.754 3l.444.005a20.7 20.7 0 0 1 14.248 6.081l-4.997 4.997l-.157.148c-1.274 1.15-3.15 1.424-4.667.597l-.261-.137l-.15-.075q-4.385-2.453-9.768-3.416q-5.355-.956-11.67.597a20.4 20.4 0 0 1 1.932-2.352l.326-.335A20.7 20.7 0 0 1 24.75 3zm16.795 14.325l-7.89 4.556l-.215.148s-.676.452-.601 1.41c.065.837.661 1.19.661 1.19l8.23 4.748s.646.348 1.447-.086c.896-.484.835-1.431.835-1.431v-9.11l.001-.027v-.025a1.6 1.6 0 0 0-.65-1.257a1.63 1.63 0 0 0-.983-.336a1.7 1.7 0 0 0-.835.22\" clip-rule=\"evenodd\"/>"
	},
	cd: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"18\"/><path stroke-linecap=\"round\" d=\"M13 24c0-6.075 4.925-11 11-11\"/><circle cx=\"24\" cy=\"24\" r=\"5\"/></g>"
	},
	"ce-marking": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22 42c-9.941 0-18-8.059-18-18S12.059 6 22 6m22 36c-9.941 0-18-8.059-18-18S34.059 6 44 6M26 24h11\"/>"
	},
	cell: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.421\"><path stroke-linecap=\"round\" d=\"M28.417 21.847q-.176 3.88 1.973 5.438c2.148 1.56 7.447 1.742 11.644-5.438c4.197-7.181.126-11.082-1.42-11.732q-1.547-.65-3.11-.488m-6.49 18.379q-1.83 2.121-.402 5.094c1.428 2.974 5.087 2.439 6.916 4.916q1.828 2.477 1.385 4.984\"/><path d=\"M8.504 23.64c2.26 3.02 7.662 3.415 13.996.99c2.564-.981 5.282-2.425 8.005-4.343c2.053-1.447 3.54-2.923 4.587-4.367c3.771-5.204 1.824-9.998 0-11.514c-1.976-1.642-5.77-2.317-12.592.627a49 49 0 0 0-3.965 1.947c-2.798 1.523-5.101 3.243-6.873 5.02c-4.162 4.175-5.385 8.662-3.158 11.64Z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M16.245 8.84q.659 4.424 3.697 7.736c2.025 2.209 4.446 3.619 8.058 4.924M9.981 25q-8.737 8.476-4.71 12.835c4.028 4.359 7.817-1.208 12.896-1.208q5.078 0 7.833 6.373\"/><path stroke-linecap=\"round\" d=\"M35.092 15.92c-1.047 1.444-2.534 2.92-4.587 4.367c-2.723 1.918-5.44 3.362-8.005 4.344m0-19.598a49 49 0 0 0-3.966 1.947c-2.797 1.523-5.1 3.243-6.872 5.02\"/></g>"
	},
	"center-alignment": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 14h36M12 24h24M20 34h8\"/>"
	},
	certificate: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M26 36H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2h-8M12 14h24m-24 7h6m-6 7h4\"/><path d=\"M30 33a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m30 40l4 2V31.472S32.86 33 30 33s-4-1.5-4-1.5V42z\"/></g>"
	},
	"chafing-dish": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 42c-9.941 0-18-8.059-18-18S14.059 6 24 6\"/><path d=\"M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6c0 0-4 2-4 9s8 11 8 18s-4 9-4 9Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M42 20h2v8h-2M6 20H4v8h2\"/></g>"
	},
	"chafing-dish-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 18h36v6a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6zm34 24H8m5 0l3-12m19 12l-3-12m-2-12L27 4h-6l-3 14m18-7h4M8 11h4\"/>"
	},
	chair: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m20 23l-8 21m16-21l8 21M16 34h16m-2.545-11h-10.91C15.819 23 14 21.333 14 18.833V12h4V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6h4v6.833c0 2.5-1.818 4.167-4.546 4.167M30 12h8m-20 0h-8\"/>"
	},
	"chair-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M29.455 23h-10.91C15.819 23 14 21.333 14 18.833V12h4V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6h4v6.833c0 2.5-1.818 4.167-4.546 4.167M20 23l-8 21m16-21l8 21m-6-32h8m-20 0h-8m7 19h14m-16 7h18\"/>"
	},
	change: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M18 31h20V5\"/><path d=\"M30 21H10v22m34-32l-6-6l-6 6\"/><path d=\"m16 37l-6 6l-6-6\"/></g>"
	},
	"change-date-sort": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M6 5v25.004h36V5\"/><path d=\"M15 23h4.002l13.85-14.143L28.993 5L15 19.143z\"/><path stroke-linecap=\"round\" d=\"m30 37l-6 6l-6-6m6-7v13\"/></g>"
	},
	"charging-treasure": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M9.975 8.557A3 3 0 0 1 12.942 6h23.036a3 3 0 0 1 2.979 2.646l3.145 26.5a3 3 0 0 1-2.98 3.354H8.983a3 3 0 0 1-2.967-3.443z\"/><rect width=\"36\" height=\"12\" x=\"6\" y=\"30\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"6\"/><rect width=\"4\" height=\"4\" x=\"19\" y=\"34\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M29 36h6M22 12h4\"/></g>"
	},
	"chart-graph": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17 6h14v9H17zM6 33h14v9H6zm22 0h14v9H28z\"/><path stroke-linecap=\"round\" d=\"M24 16v8m-11 9v-9h22v9\"/></g>"
	},
	"chart-histogram": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 6v36h36M14 30v4m8-12v12m8-28v28m8-20v20\"/>"
	},
	"chart-histogram-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 6v36h36m-24-8h-4m12-8H14m28-8H14m20-8H14\"/>"
	},
	"chart-histogram-two": {
		body: "<g fill=\"none\"><path d=\"M4 42h40z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 42h40\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 28h6v14H8zm13-10h6v24h-6zM34 6h6v36h-6z\"/></g>"
	},
	"chart-line": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 6v36h36\"/><path d=\"m14 34l8-16l10 9L42 6\"/></g>"
	},
	"chart-line-area": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M6 6v36h36\"/><path d=\"m14 34l8-16l10 9L42 6v28z\"/></g>"
	},
	"chart-pie": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4v20z\"/><path d=\"M43.084 18H30V4.916A20.05 20.05 0 0 1 43.084 18\"/></g>"
	},
	"chart-pie-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 24c0 10.493 8.507 19 19 19V26a2 2 0 0 1 2-2h17c0-10.493-8.507-19-19-19S5 13.507 5 24\"/><path d=\"M30 30h12v12H30z\"/></g>"
	},
	"chart-proportion": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M16.345 5.518a20 20 0 0 0-6.487 4.34A19.94 19.94 0 0 0 4 24c0 11.046 8.954 20 20 20v0a19.94 19.94 0 0 0 14.142-5.858a20 20 0 0 0 4.34-6.487\"/><path d=\"M24 24h20c0-11.046-8.954-20-20-20z\"/></g>"
	},
	"chart-ring": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M43.776 20.994c-1.303-8.638-8.13-15.466-16.768-16.77m-6.032.003C11.366 5.685 4 13.982 4 24c0 10.02 7.37 18.32 16.986 19.774a20.2 20.2 0 0 0 6.018.002C35.646 42.474 42.476 35.643 43.776 27\"/><path d=\"M24 16a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z\"/></g>"
	},
	"chart-scatter": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 6v36h36\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M20 24a4 4 0 1 0 0-8a4 4 0 0 0 0 8m17-8a5 5 0 1 0 0-10a5 5 0 0 0 0 10M15 36a3 3 0 1 0 0-6a3 3 0 0 0 0 6m18-4a3 3 0 1 0 0-6a3 3 0 0 0 0 6\" clip-rule=\"evenodd\"/></g>"
	},
	"chart-stock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 16h8v16H6z\"/><path stroke-linecap=\"round\" d=\"M10 6v10m0 16v10\"/><path d=\"M34 16h8v16h-8z\"/><path stroke-linecap=\"round\" d=\"M38 6v10m0 16v10\"/><path d=\"M20 14h8v16h-8z\"/><path stroke-linecap=\"round\" d=\"M24 4v10m0 16v10\"/></g>"
	},
	check: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M43 11L16.875 37L5 25.182\"/>"
	},
	"check-correct": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21\"/><path d=\"m16 20l10 8L41 7\"/></g>"
	},
	"check-in": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m16 21l6.13-14.012a2 2 0 0 1 2.78-.96L36 12\"/><path d=\"M26 31V12h16v29H26v-4\"/><path d=\"M4 44c9 0 9.77-5.317 12.33-5.687c3.023-.438 6.102-.663 8.773-1.313a51.6 51.6 0 0 0 7.26-2.355a1.68 1.68 0 0 0 .855-.769c.563-1.081 1.572-3.466-.297-3.767c-2.428-.39-9.94 2.474-13.793 1.953c-3.853-.52-2.499-3.124-1.285-3.906C21.14 26.035 25 27 25 27v-9S10.334 21.75 5 28.156M32 21h10\"/></g>"
	},
	"check-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z\"/><path stroke-linecap=\"round\" d=\"m16 24l6 6l12-12\"/></g>"
	},
	"check-small": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m10 24l10 10l20-20\"/>"
	},
	checkbox: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M32 16H16v16h16z\"/></g>"
	},
	checkerboard: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm6 13h21M4 17h9m22 14h9M6 31h19m-8-10v23M31 4v23m0 8v9M17 4v9\"/><path d=\"M35 31a4 4 0 1 1-8 0a4 4 0 0 1 8 0M21 17a4 4 0 1 1-8 0a4 4 0 0 1 8 0\"/></g>"
	},
	checklist: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m34 10l8 8m0-8l-8 8m10 12l-7 8l-4-4m-7-24H4v8h22zm0 20H4v8h22z\"/>"
	},
	cheese: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M43 20c0-2.172-18.108-11.888-22.866-14.404a1.97 1.97 0 0 0-2.149.201L5 16\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 17.652c0-1.329 1.269-2.298 2.555-1.964c6.407 1.662 23.305 5.645 32.606 4.07c1.395-.235 2.839.779 2.839 2.193v16.151a2 2 0 0 1-1.895 1.998l-34 1.79A2 2 0 0 1 5 39.891z\"/><circle cx=\"12\" cy=\"25\" r=\"2\" fill=\"currentColor\"/><circle cx=\"25\" cy=\"27\" r=\"2\" fill=\"currentColor\"/><circle cx=\"34\" cy=\"32\" r=\"2\" fill=\"currentColor\"/><circle cx=\"18\" cy=\"32\" r=\"2\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\"/></g>"
	},
	"chef-hat": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 34h24v8H12zm17 0V20m-7 14v-8\"/><path d=\"M12 25v9h24v-9s5-3 5-8s-4-7-9-7c0-2-3-6-8-6s-8 4-8 6c-4 0-9 2-9 7s5 8 5 8\"/></g>"
	},
	"chef-hat-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13 24.125a8.64 8.64 0 1 1 3.857-16.837A8.63 8.63 0 0 1 23.64 4a8.63 8.63 0 0 1 6.919 3.464A8.64 8.64 0 1 1 35 24.124V40a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2zM13 31h22m-15-6v6m15-3v6m-22-6v6\"/>"
	},
	cherry: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><circle cx=\"14\" cy=\"34\" r=\"8\" stroke-linejoin=\"round\"/><circle cx=\"35\" cy=\"37\" r=\"7\" stroke-linejoin=\"round\"/><path d=\"M37 10c-2.651.812-8.372 3.015-11.72 6.26C20.255 21.13 19 24.5 18 27m19-17c-1.117 1.318-3.285 4.596-3.956 8.39C32.036 24.078 33 27.5 34 30M30 4l14 12\"/></g>"
	},
	chess: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M34 4H14v10h20zm-7 10l6 23H15l6-23m19 30H8v-4l6-3h20l6 3zM12 23.02h24M20.5 4v4m7-4v4\"/>"
	},
	"chess-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M40 44H8v-4l6-3h20l6 3zM14 19h20\"/><path d=\"M27.74 19L33 37H15l5.26-18\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M27.74 19L33 37H15l5.26-18\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M24 4a8 8 0 0 0-3.876 15h7.752A8 8 0 0 0 24 4Z\"/></g>"
	},
	chest: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M16.997 3.5v5.149c0 1.75-.964 2.425-4.595 3.358c-3.63.932-4.706 1.482-5.554 3.093Q6 16.71 6 20.072V37.5\"/><path stroke-linejoin=\"round\" d=\"M34.942 21.509q.356 4.314-1.463 7.537t-6.422 3.926M13.059 21.509q-.359 4.314 1.469 7.537q1.827 3.222 6.474 3.926\"/><path d=\"M13 43.512q2-2.333 2-5.072v-8.364m20 13.436q-2-2.333-2-5.072v-8.364M31 3.5v5.149c0 1.75.964 2.425 4.595 3.358c3.63.932 4.706 1.482 5.554 3.093q.848 1.61.848 4.972V37.5\"/></g>"
	},
	chicken: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M35.979 15.5a10.7 10.7 0 0 0-1.71-1.275l-1.466-.88a13.3 13.3 0 0 0-4.412-1.668l-.524-.096a27.1 27.1 0 0 1-8.051-2.855a2.792 2.792 0 1 0-2.965 3.396A22.8 22.8 0 0 1 21 17.647\"/><path d=\"M11.307 25.02C11.045 25.3 8 28.65 8 32c0 3.5 1.558 5 3 6s3.72 2 5.61 2S28.5 41 33 40s5-2 7-4c1.081-1.081 1.882-2.602 2.39-3.77a22.5 22.5 0 0 0 1.175-3.502c.36-1.436.723-3.498.435-5.228c-.5-3-2-5-7-7.5c-4.604-2.302-8.647-1.212-9.258-1.025l-.161.054c-.8.283-7.265 2.596-10.01 4.471c-2.802 1.914-5.962 5.202-6.228 5.481z\"/><path d=\"M6.103 20.01a2.792 2.792 0 1 1 2.965-3.396a27.1 27.1 0 0 0 8.051 2.854l.524.097c1.559.287 3.053.852 4.412 1.668l1.466.879a10.7 10.7 0 0 1 2.602 2.197l.406.472a6.6 6.6 0 0 1 1.532 5.17l-.028.211a5.95 5.95 0 0 1-1.637 3.367l-.462.473a6.67 6.67 0 0 1-5.875 1.924a8.34 8.34 0 0 1-4.425-2.23l-.739-.714a9.3 9.3 0 0 1-1.532-1.935l-2.172-3.652l-.634-1.27a22.8 22.8 0 0 0-4.454-6.116\"/></g>"
	},
	"chicken-leg": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33.375 33.874c4.243-4.242 1.414-18.384-4.95-24.748c-2.828-2.829-10.96-8.84-19.799 0c-8.839 8.838-2.828 16.97 0 19.799c6.364 6.364 20.506 9.192 24.749 4.95\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"m41 41l-7-7\"/><circle cx=\"42.193\" cy=\"40.071\" r=\"2.5\" fill=\"currentColor\" transform=\"rotate(135 42.193 40.071)\"/><circle cx=\"40.072\" cy=\"42.192\" r=\"2.5\" fill=\"currentColor\" transform=\"rotate(135 40.072 42.192)\"/><circle cx=\"17\" cy=\"18\" r=\"2\" fill=\"currentColor\"/><circle cx=\"12\" cy=\"21\" r=\"2\" fill=\"currentColor\"/><circle cx=\"17\" cy=\"24\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"chicken-zodiac": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M31 31c-1-4.5.4-13.4 10-17M11 4l4 6m23 21c0 2.889-3.76 7.556-10 9l-2 4m-5-33.726c-5.815-1.022-17.139.263-15.907 13.578C5.093 28.232 7.379 37.197 16 40l2 4\"/><path d=\"M19 18c.696 3.833 3.5 13 12 13h7c-.696-2.333-.843-7.6 5-10\"/></g>"
	},
	"child-with-pacifier": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 42c9.389 0 17-7.611 17-17S33.389 8 24 8S7 15.611 7 25s7.611 17 17 17Z\"/><path stroke-linecap=\"round\" d=\"m33 21l-2 1l-2-1m-10 0l-2 1l-2-1m9 17v6m0-36c-.25-1-2-4-6-4m6 4c.083-1 .6-3.2 2-4m5.975 36c0-6 0-9-7.975-9c-8 0-7.976 3-7.976 9M5 23v4m38-4v4\"/></g>"
	},
	"children-cap": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 32c0-15 5-24 8-24s6 6 6 6h8s3-6 6-6s8 9 8 24\"/><rect width=\"40\" height=\"8\" x=\"4\" y=\"32\" rx=\"2\"/></g>"
	},
	"children-pyramid": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15 17h18v8H15zm-5 8h28v8H10zm-5 8h38v8H5zm19-16V7m5 0H19\"/>"
	},
	chili: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M21.168 16.594c1.648-5.607 8.323-7.928 13.093-4.552c4.126 2.918 4.818 8.766 1.488 12.567l-3.13 3.574a48.8 48.8 0 0 1-19.203 13.4l-3.558 1.369a2.339 2.339 0 0 1-2.294-4.014l2.78-2.208a25.8 25.8 0 0 0 8.705-12.927z\"/><path d=\"M29.842 10.684a4.931 4.931 0 1 1 7.768 5.39\"/><path stroke-linecap=\"round\" d=\"m42 4l-4 4\"/></g>"
	},
	chimney: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 44h40M13 14h22\"/><path stroke-linejoin=\"round\" d=\"M16 14h16l4 30H12z\"/><path stroke-linecap=\"round\" d=\"M15 24h18M13 34h22\"/><path stroke-linejoin=\"round\" d=\"m32 14l4 30M16 14l-4 30\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m24 8l.828-.828A4 4 0 0 1 27.657 6h.686a4 4 0 0 0 2.829-1.172L32 4\"/></g>"
	},
	chinese: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path stroke-linejoin=\"round\" d=\"M14 18h20v10H14z\"/><path d=\"M24 14v21\"/></g>"
	},
	"chinese-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M21 19.939c-.4-1.164-1.597-3.202-3.992-2.91c-2.396.29-4.193 3.492-3.993 7.567S15.411 31 17.407 31C19.802 31 21 28.206 21 28.206M26 31V19m0 12v-6.5a4.5 4.5 0 0 1 4.5-4.5v0a4.5 4.5 0 0 1 4.5 4.5V31\"/></g>"
	},
	"chinese-pavilion": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M15 12h18s3.363 3.011 6 4c1.864.7 5 1 5 1s-1.816.649-3 1c-1.544.458-4 1-4 1H11s-2.456-.542-4-1c-1.184-.351-3-1-3-1s3.136-.3 5-1c2.637-.989 6-4 6-4Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m18 12l6-8l6 8z\"/><path stroke-linecap=\"round\" d=\"M11 19v19m26-19v19\"/><path stroke-linejoin=\"round\" d=\"M6 38h36v6H6z\"/></g>"
	},
	chip: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"24\" height=\"36\" x=\"12\" y=\"6\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 12H6m6 8H6m6 8H6m6 8H6m36-24h-6m6 8h-6m6 8h-6m6 8h-6\"/></g>"
	},
	"chopping-board": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 8h28.011A1.99 1.99 0 0 1 44 10v28c0 1.105-.883 2-1.987 2H14c-4 0-10-2-10-16S11 8 14 8m-2 12v8\"/>"
	},
	"chopsticks-fork": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 4v40M8 5v10c0 5 6 5 6 5s6 0 6-5V5m17-1l3 40M31 4l-3 40\"/>"
	},
	"christmas-tree": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m20 14l-4-2l8-8l8 8l-4 2l8 8l-6 2l9 10H9l8-10l-5-2zm11 30H17m4-10l-1 10m7-10l1 10\"/>"
	},
	"christmas-tree-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 36v8M14 15L24 4l10 11l-3 3l8 8l-5 1.158L42 36H6l8-8.842L9 26l8-8z\"/>"
	},
	"church-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 4v12m-4-8h8\"/><path stroke-linejoin=\"round\" d=\"M15 28H9a2 2 0 0 0-2 2v14m26-16h6a2 2 0 0 1 2 2v14\"/><path stroke-linecap=\"round\" d=\"M4 44h40\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m15 23l9-8l9 8v21H15z\"/><path stroke-linecap=\"round\" d=\"M24 34v10m-4 0h8\"/></g>"
	},
	"church-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m13 24l11-10l11 10v20H13zM7 8l3-4l3 4v36H7zm28 0l3-4l3 4v36h-6z\"/><path d=\"M24 25v10m-4-6h8\"/></g>"
	},
	"circle-double-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m31 17l-7 7l-7-7m14 9l-7 7l-7-7\"/></g>"
	},
	"circle-double-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m22 31l-7-7l7-7m9 14l-7-7l7-7\"/></g>"
	},
	"circle-double-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m17 31l7-7l-7-7m9 14l7-7l-7-7\"/></g>"
	},
	"circle-double-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m31 22l-7-7l-7 7m14 9l-7-7l-7 7\"/></g>"
	},
	"circle-five-line": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm16 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" d=\"M20 40h8M20 8h8M8 20v8m32-8v8\"/></g>"
	},
	"circle-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 34a3 3 0 1 0 0-6a3 3 0 0 0 0 6M7 27a3 3 0 1 0 0-6a3 3 0 0 0 0 6m34 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6\" clip-rule=\"evenodd\"/><path d=\"M24.197 15.744a8.99 8.99 0 0 0 7.438-3.931a14.5 14.5 0 0 1 4.686 4.498A9 9 0 0 0 32 24a9 9 0 0 0 4.527 7.811a14.5 14.5 0 0 1-4.426 4.532a9 9 0 0 0-7.905-4.694c-3.4 0-6.36 1.885-7.89 4.668a14.5 14.5 0 0 1-4.494-4.683a8.99 8.99 0 0 0 3.93-7.438a8.99 8.99 0 0 0-3.907-7.422a14.5 14.5 0 0 1 4.94-4.938a8.99 8.99 0 0 0 7.42 3.907\"/></g>"
	},
	"circle-four-line": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 8h8\"/><path d=\"M32 16L16 32z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 16L16 32m24-12v8\"/></g>"
	},
	"circle-house": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 23H4s10.5-6 15-11s5.5-8 5.5-8s1 3 5.5 8s14 11 14 11M8 31h32v13H8zm5-8h22v8H13z\"/>"
	},
	"circle-left-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m17 31l14-14m-2 14H17V19\"/></g>"
	},
	"circle-left-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 31L17 17m12 0H17v12\"/></g>"
	},
	"circle-right-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 31L17 17m2 14h12V19\"/></g>"
	},
	"circle-right-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 17L17 31m2-14h12v12\"/></g>"
	},
	"circle-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M32.904 13.927A10 10 0 0 1 24 19.37a10 10 0 0 1-8.904-5.443A14.98 14.98 0 0 0 9 26q.001 1.228.191 2.402q.4-.031.809-.032c5.523 0 10 4.477 10 10q-.002 1.047-.207 2.032c1.335.39 2.747.598 4.207.598s2.872-.209 4.207-.598A10 10 0 0 1 28 38.37c0-5.523 4.477-10 10-10q.408 0 .809.032A15 15 0 0 0 39 26c0-4.95-2.398-9.34-6.096-12.073\"/><path d=\"M24 13a4 4 0 1 0 0-8a4 4 0 0 0 0 8M9 43a4 4 0 1 0 0-8a4 4 0 0 0 0 8m30 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8\" clip-rule=\"evenodd\"/></g>"
	},
	"circle-two-line": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM8 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" d=\"M40 20v20H20M8 28V8h20\"/></g>"
	},
	"circles-and-triangles": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m24 4l17.32 30H6.68z\"/></g>"
	},
	"circles-seven": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10.393-10a4 4 0 1 0 6.928-4a4 4 0 0 0-6.928 4m0 12a4 4 0 1 0 6.928 4a4 4 0 0 0-6.928-4M24 36a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-10.392-6a4 4 0 1 0-6.928 4a4 4 0 0 0 6.928-4m0-12a4 4 0 1 0-6.928-4a4 4 0 0 0 6.928 4\" clip-rule=\"evenodd\"/>"
	},
	"circular-connection": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M13.5 39.37A16.93 16.93 0 0 0 24 43c3.963 0 7.61-1.356 10.5-3.63M19 9.747C12.051 11.882 7 18.351 7 26c0 1.925.32 3.775.91 5.5M29 9.747C35.949 11.882 41 18.351 41 26c0 1.925-.32 3.775-.91 5.5\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M43 36c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 43 36m-28 0c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 15 36M29 9c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 29 9\"/></g>"
	},
	circus: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M9 26s-.076.787-1 5c-.98 4.465-4 13-4 13h40s-3.02-8.535-4-13c-.924-4.213-1-5-1-5\"/><path stroke-linejoin=\"round\" d=\"M20 28c1 9-4 16-4 16m12-16c-1 9 4 16 4 16\"/><path stroke-linejoin=\"round\" d=\"M6 18s7.592-.055 11-1c2.866-.795 7-3 7-3s3.823 2.194 6.5 3c3.572 1.075 11.5 1 11.5 1l-1 7s-4 2-5 2s-3-2-4-2s-3.5 3-4 3s-3-3-4-3s-3 3.5-4 3.5s-3-3.5-4-3.5c-.198 0-.474.078-.79.204c-2.142.852-4.489 1.284-6.629.428L7 25z\"/><path d=\"M24 5v10\"/><path stroke-linejoin=\"round\" d=\"M36 11V5s-1.5 3-6 0s-6 0-6 0v6s1.5-3 6 0s6 0 6 0\"/></g>"
	},
	city: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 42h40\"/><rect width=\"8\" height=\"16\" x=\"8\" y=\"26\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 34h1\"/><rect width=\"24\" height=\"38\" x=\"16\" y=\"4\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\"/><path fill=\"currentColor\" d=\"M22 10h4v4h-4zm8 0h4v4h-4zm-8 7h4v4h-4zm8 0h4v4h-4zm0 7h4v4h-4zm0 7h4v4h-4z\"/></g>"
	},
	"city-gate": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M15 11h17s5.048 2.966 7 4c1.091.578 5 1 5 1s-1.816.649-3 1c-1.544.458-4 1-4 1H11s-2.456-.542-4-1c-1.184-.351-3-1-3-1s3.909-.422 5-1c1.952-1.034 6-4 6-4Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m17 11l7-7l6 7z\"/><path d=\"M35 18v6m-23-6v6\"/><path stroke-linejoin=\"round\" d=\"m4 44l2-20h36l2 20z\"/><path d=\"M20 38a4 4 0 0 1 8 0v6h-8z\"/></g>"
	},
	"city-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M4 42h40\"/><rect width=\"12\" height=\"20\" x=\"8\" y=\"22\" rx=\"2\"/><rect width=\"20\" height=\"38\" x=\"20\" y=\"4\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M28 32.008h4m-20 0h4m12-9h4m-4-9h4\"/></g>"
	},
	clap: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M17.118 26.013L9.253 12.39a1.605 1.605 0 0 0-2.896 1.36l5.52 14.918c.082.22.123.452.125.686l.057 12.673a2 2 0 0 0 2 1.99h4.957a2 2 0 0 0 1.954-2.426L18 28zM12 29l6-1m12.564-2.271l7.69-13.322a1.625 1.625 0 0 1 2.947 1.337l-5.106 14.978a2 2 0 0 0-.105.572l-.466 12.798a2 2 0 0 1-2 1.928h-4.963a2 2 0 0 1-1.94-2.485L30 28l.334-1.665a2 2 0 0 1 .229-.606M30 28l6 1M15 7l3.5 4M23 4l1 6m9-4l-3 4\"/>"
	},
	classroom: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"13\" r=\"9\"/><path d=\"M5 44c0-8.437 6.175-16.312 11.4-18c0 0 4.75 5.063 7.6 8.438L31.6 26c4.275.563 11.4 9.563 11.4 18\"/><path stroke-linecap=\"round\" d=\"M2 44h44\"/></g>"
	},
	clear: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M20 5.914h8v8h15v8H5v-8h15z\" clip-rule=\"evenodd\"/><path d=\"M8 40h32V22H8z\"/><path stroke-linecap=\"round\" d=\"M16 39.898v-5.984m8 5.984v-6m8 6v-5.984M12 40h24\"/></g>"
	},
	"clear-format": {
		body: "<g fill=\"none\" stroke=\"currentColor\"><path stroke-linejoin=\"round\" stroke-width=\"4.302\" d=\"M44.782 24.17L31.918 7.1L14.135 20.5L27.5 37l3.356-2.336z\"/><path stroke-linejoin=\"round\" stroke-width=\"4.302\" d=\"m27.5 37l-3.839 3.075l-10.563-.001l-2.6-3.45l-6.433-8.536L14.5 20.225\"/><path stroke-linecap=\"round\" stroke-width=\"4.5\" d=\"M13.206 40.072h31.36\"/></g>"
	},
	click: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 4v8\"/><path d=\"m22 22l20 4l-6 4l6 6l-6 6l-6-6l-4 6z\" clip-rule=\"evenodd\"/><path d=\"m38.142 9.858l-5.657 5.657M9.858 38.142l5.657-5.657M4 24h8M9.858 9.858l5.657 5.657\"/></g>"
	},
	"click-tap": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M15 26V15a3 3 0 1 1 6 0v11\"/><path stroke-linejoin=\"round\" d=\"M39 25v6.5C39 37.851 33.851 43 27.5 43h-1C20.149 43 15 37.851 15 31.5V25\"/><path stroke-linejoin=\"round\" d=\"M21 29v-5a3 3 0 1 1 6 0v5m0 0v-5a3 3 0 1 1 6 0v5m0 0v-5a3 3 0 1 1 6 0v5\"/><path d=\"M28 15a9.97 9.97 0 0 0-1.959-5.945A9.99 9.99 0 0 0 18 5a9.99 9.99 0 0 0-8.042 4.055A9.97 9.97 0 0 0 8 15\"/></g>"
	},
	"click-tap-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M11 44V15a4 4 0 0 1 8 0v20l23 5v4\"/><path d=\"M11 25.25C6.903 23.65 4 19.664 4 15C4 8.925 8.925 4 15 4s11 4.925 11 11c0 4.664-2.903 8.65-7 10.25\"/></g>"
	},
	"click-to-fold": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M27 9v12h12M21 39V27H9m18-6L42 6M21 27L6 42\"/>"
	},
	clipboard: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M17 7h-7a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7\"/><path d=\"M17 4h14v6H17z\"/></g>"
	},
	"clock-tower": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 44h40M27 32h12v12H27zm11-22v6m-10-6v6m0-6l5-6l5 6z\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M25 20H11a2 2 0 0 0-2 2v22\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M15 29h4m-4 7h4\"/><rect width=\"16\" height=\"16\" x=\"25\" y=\"16\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"1\"/><circle cx=\"33\" cy=\"24\" r=\"3\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M33 32v10\"/></g>"
	},
	close: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m8 8l32 32M8 40L40 8\"/>"
	},
	"close-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314\"/></g>"
	},
	"close-remind": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 38s-6-5-6-19c0-6.627-5.373-12-12-12c-2.54 0-4.896.79-6.835 2.136M30 38H6s5.57-4.641 5.977-17.5\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M18 38h12a6 6 0 0 1-12 0Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M24 2a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m7 6.5l34 38\"/></g>"
	},
	"close-small": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m14 14l20 20m-20 0l20-20\"/>"
	},
	"close-wifi": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 18.965c-6.775-6.42-15.881-8.96-24.5-7.617M38 25.799a19.7 19.7 0 0 0-9.5-5.284M10 25.799a19.8 19.8 0 0 1 4.36-3.299M16 32.314a11.26 11.26 0 0 1 5-2.91\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M24 40a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 40L8 8M4 18.965a29 29 0 0 1 3.5-2.84\"/></g>"
	},
	"clothes-briefs": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22.158 37s-.9-8.074-4.158-12c-3.044-3.669-12-6-12-6v-5h36v5s-8.956 2.331-12 6c-3.257 3.925-4.158 12-4.158 12z\"/>"
	},
	"clothes-cardigan": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M37 17v20m-26 0v7h26v-7m-26 0H4V17c0-3 2-6.5 5-9s7-4 7-4h16s4 1.5 7 4s5 6 5 9v20h-7m-26 0V17m13 0v27m0-27L16 4m16 0l-8 13\"/>"
	},
	"clothes-crew-neck": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M37 17v20m-26 0v7h26v-7m-26 0H4V17c0-3 2-6.5 5-9s9-4 9-4h12s6 1.5 9 4s5 6 5 9v20h-7m-26 0V17\"/><path d=\"M30 4a6 6 0 0 1-12 0\"/></g>"
	},
	"clothes-diapers": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 11h36v8s0 8-4 12s-10.158 6-10.158 6h-7.684S14 35 10 31S6 19 6 19z\"/><path d=\"M20.158 37s.1-7.074-3.158-11c-3.044-3.669-11-7-11-7m21.842 18s-.1-7.075 3.158-11c3.044-3.669 11-7 11-7\"/></g>"
	},
	"clothes-gloves": {
		body: "<g fill=\"none\"><path d=\"M27 4H15c-3.771 0-5.657 0-6.828 1.172S7 8.229 7 12v32h28v-7s7 0 7-6v-8c0-6-7-6-7-6v-5c0-3.771 0-5.657-1.172-6.828S30.771 4 27 4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M35 27V17m0 0v-5c0-3.771 0-5.657-1.172-6.828S30.771 4 27 4H15c-3.771 0-5.657 0-6.828 1.172S7 8.229 7 12v32h28v-7s7 0 7-6v-8c0-6-7-6-7-6m-21 5V4m7 18V4m7 18V4M12 4h18\"/></g>"
	},
	"clothes-gloves-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M34 22v-7m0 0c0-4.691 0-7.037-1.24-8.653a6 6 0 0 0-1.107-1.107C30.037 4 27.69 4 23 4h-1c-5.657 0-8.485 0-10.243 1.757C10 7.515 10 10.343 10 16v22h24v-6s7 0 7-6v-5c0-6-7-6-7-6M9 38h26a3 3 0 1 1 0 6H9a3 3 0 1 1 0-6\"/>"
	},
	"clothes-hoodie": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M37 22v15m-26 0v7h26v-7m-26 0H4V22c0-3 2-6.5 5-9s7-3 7-3l8 8M11 37V22m26 15h7V22c0-3-2-6.5-5-9s-7-3-7-3l-8 8m0 0v9\"/><path d=\"M9 13c3-2.5 7-3 7-3l8 8l8-8s4 .5 7 3l2-4.5L39 4H9L7 8.5z\"/></g>"
	},
	"clothes-pants": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M33 44h9L38 4H10L6 44h9l9-25zM24 4v5.5\"/><path d=\"M17 4s0 6-2 8s-6.1 3-6.1 3M31 4s0 6 2 8s6.1 3 6.1 3\"/></g>"
	},
	"clothes-pants-short": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 36l2-24h32l2 24H26.842L24 25l-2.842 11zm18-24l3 7m-3-7l-4 7.5M18 12h12\"/>"
	},
	"clothes-pants-sweat": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m24 19l9 19h9L38 4H10L6 38h9zm10 19l1 6h6v-6zm-21 6H7v-6h7zM24 4l4 7.5M24 4l-4 7.5\"/>"
	},
	"clothes-short-sleeve": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 4H4v8h6v32h28V12h6zM10 32h28m-28-8h28\"/><path d=\"M30 4a6 6 0 0 1-12 0\"/></g>"
	},
	"clothes-skates": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M18 4H8c-1.886 0-2.828 0-3.414.586S4 6.114 4 8v32c0 1.886 0 2.828.586 3.414S6.114 44 8 44h4l4-4l4 4h20c1.886 0 2.828 0 3.414-.586S44 41.886 44 40v-7.525c0-4.992 0-7.488-1.48-9.183c-1.48-1.696-3.953-2.033-8.899-2.707l-1.242-.17c-4.946-.674-7.42-1.011-8.9-2.707C22 16.013 22 13.518 22 8.525V8c0-1.886 0-2.828-.586-3.414S19.886 4 18 4m26 30H4m0-22.5h18\"/><circle cx=\"15\" cy=\"23\" r=\"3\"/></g>"
	},
	"clothes-suit": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M37 21v16m-26 0v7h26v-7m-26 0H4V10l14-6h12l14 6v27h-7m-26 0V21M30 4l-6 14m0 0L18 4m6 14v26m6-40l-6 14m0 0L18 4\"/><path d=\"m18 4l-4 8l4 5.5l-2 5.5l8 14m6-33l5 8l-5 5.5l2 5.5l-8 14\"/></g>"
	},
	"clothes-sweater": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M37 19v18m-26 0v7h26v-7m-26 0H4V12l5-5l7-3h16l7 3l5 5v25h-7m-26 0V19m13 2v23M9 7l15 14M16 4l8 17m8-17l-8 17M39 7L24 21\"/>"
	},
	"clothes-turtleneck": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M37 23v14m-26 0v7h26v-7m-26 0H4V23c0-3 2-6.5 5-9s9-4 9-4h12s6 1.5 9 4s5 6 5 9v14h-7m-26 0V23m19-13H18V4h12z\"/>"
	},
	"clothes-windbreaker": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M37 25v12m-26 0v7h26v-7m-26 0H4V18l6.125-5L17 18l7-8l7 8l6.875-5L44 18v19h-7m-26 0V25\"/><path d=\"m17 18l7-8l7 8l11-8l-2.5-6H9l-3 6z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 10h5m5 0h-5m0 0l-7 8l-11-8l3-6h30.5l2.5 6l-11 8z\"/></g>"
	},
	"cloud-storage": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 29H4v13h40z\"/><path fill=\"currentColor\" d=\"M35.5 38a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 29L9.038 4.999H39.02l4.98 24\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19.006 16.026c-2.143 0-4.006 1.486-4.006 3.487C15 22 17.095 23 19.697 23h1.28m8.03-6.974c2.097 0 3.993.973 3.993 3.487C33 22 30.89 23 28.288 23h-1.3m2.019-6.974C29.007 13.042 27.023 11 24 11s-4.994 1.993-4.994 5.026\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M20 23h8\"/></g>"
	},
	cloudy: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M9.455 30.994A13.95 13.95 0 0 1 4 19.885C4 12.217 10.105 6 17.636 6c6.297 0 11.598 4.346 13.166 10.253a8.9 8.9 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.257c0 3.795-2.244 7.058-5.455 8.486\"/><path d=\"M26 42a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z\"/><path stroke-linecap=\"round\" d=\"M22.243 15.757a6 6 0 0 0-8.485 8.485\"/></g>"
	},
	"cloudy-night": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M9.455 30.994A13.95 13.95 0 0 1 4 19.885C4 12.217 10.105 6 17.636 6c6.297 0 11.598 4.346 13.166 10.253a8.9 8.9 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.257c0 3.795-2.244 7.058-5.455 8.486\"/><path d=\"M27.216 30.123a3.82 3.82 0 1 0 4.66 4.661Q32 35.374 32 36a6 6 0 1 1-4.784-5.877Z\"/><path stroke-linecap=\"round\" d=\"M22.243 15.757a6 6 0 0 0-8.485 8.485\"/></g>"
	},
	clue: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M37 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10ZM11 42a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" d=\"M37 16v19.504A6.496 6.496 0 0 1 30.504 42v0a6.496 6.496 0 0 1-6.496-6.496v-23A6.504 6.504 0 0 0 17.504 6v0A6.504 6.504 0 0 0 11 12.504V32\"/></g>"
	},
	"coat-hanger": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 13a5 5 0 1 1 5 5v4m20 14H4c0-5 6-14 20-14s20 9 20 14\"/>"
	},
	cocktail: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M35.8 13H32L21 32L9.8 13H6\"/><path d=\"M25.75 25.596c5.602 3.15 12.696 1.164 15.846-4.437c3.15-5.6 1.165-12.695-4.436-15.845S24.465 4.15 21.314 9.75\"/><path stroke-linejoin=\"round\" d=\"M26 44H16m5 0V32m-9-16s2-2 5-2s5 3 8 3s5-1 5-1\"/></g>"
	},
	"coconut-tree": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M22 14s-2.7 5.293-4 12s-1 16-1 16m16.953-18.728c.346.23.893.391 1.428.503c.932.194 1.792-.446 1.768-1.397c-.045-1.774-.737-4.675-4.258-7.014c-3.325-2.207-6.626-2.238-8.708-1.92c-1.187.18-1.66 1.478-.978 2.467c.608.883 1.316 1.774 1.795 1.945c1 .355 2.203-.582 3.08 0c.876.581.615 1.925 1.492 2.507c.876.582 2.013-.18 2.89.402c.875.582.615 1.925 1.491 2.507\"/><path stroke-linejoin=\"round\" d=\"M20 17c.858-.286 1.389-1.226 1.686-1.979c.246-.622.026-1.308-.55-1.648c-1.295-.766-4.06-1.814-8.374-.561c-4.265 1.238-5.39 4.056-5.677 5.715a1.33 1.33 0 0 0 1.178 1.565c.56.063 1.176.035 1.544-.277c.807-.685 1.025-1.582 1.927-1.824c.901-.241 1.679.858 2.58.616c.902-.241 1.026-1.582 1.927-1.824c.902-.241 2.26.717 3.76.217M27 6c-2.5 1-5 6-5 8l13-6c-1.38-2.391-5.5-3-8-2\"/><path stroke-linejoin=\"round\" d=\"M20 5c4 1.422 3.38 6.609 2 9L10 5.922C11 4 16 3.579 20 5\"/><path d=\"M26 35c8.284 0 13 1.79 13 4s-6.716 4-15 4s-15-1.79-15-4c0-.54.4-1.053 1.125-1.523\"/></g>"
	},
	code: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M16 13L4 25.432L16 37m16-24l12 12.432L32 37\"/><path d=\"m28 4l-7 40\"/></g>"
	},
	"code-brackets": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 4c-2 0-5 1-5 5v9c0 3-5 5-5 5s5 2 5 5v11c0 4 3 5 5 5M32 4c2 0 5 1 5 5v9c0 3 5 5 5 5s-5 2-5 5v11c0 4-3 5-5 5\"/>"
	},
	"code-computer": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M21 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V21M24 34v8\"/><path d=\"m32 6l-4 4l4 4m6-8l4 4l-4 4M14 42h20\"/></g>"
	},
	"code-download": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M16 12L4 24.432L16 36m16-24l12 12.432L32 36\"/><path d=\"M24 17v14\"/><path stroke-linejoin=\"round\" d=\"m18 25l6 6l6-6\"/></g>"
	},
	"code-laptop": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M22 9H11a3 3 0 0 0-3 3v21h32V22\"/><path d=\"M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z\"/><path stroke-linecap=\"round\" d=\"m33 7l-4 4l4 4m6-8l4 4l-4 4\"/></g>"
	},
	"code-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m9 7l14 14L9 35m8 6h22\"/>"
	},
	"coffee-machine": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M8 42h29a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H17\"/><path d=\"M22 36c5.523 0 10-4.477 10-10H12c0 5.523 4.477 10 10 10Z\"/><path stroke-linecap=\"round\" d=\"M16 18v2m6-2v2m6-2v2\"/></g>"
	},
	cola: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m36 37l-2.79 6.4a1 1 0 0 1-.918.6H15.707a1 1 0 0 1-.916-.6L12 37m0-26l2.79-6.4a1 1 0 0 1 .918-.6h16.585a1 1 0 0 1 .916.6L36 11\"/><path d=\"M12 12a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m13 22.5l6.396-1.01a8.93 8.93 0 0 0 5.218-2.815v0a8.94 8.94 0 0 1 7.168-2.907L35.5 16m-23 16.5l5.553-.252a9.54 9.54 0 0 0 7.998-5.067v0a9.54 9.54 0 0 1 5.974-4.754L35.5 21.5M36 12v20M12 16v20\"/></g>"
	},
	"collapse-text-input": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 20H28V4M4 28h16v16\"/>"
	},
	"collect-computer": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9M24 34v8m-10 0h20m-.7-36C31.478 6 30 7.435 30 9.205c0 3.204 3.9 6.117 6 6.795c2.1-.678 6-3.59 6-6.795C42 7.435 40.523 6 38.7 6A3.33 3.33 0 0 0 36 7.362A3.33 3.33 0 0 0 33.3 6\"/>"
	},
	"collect-laptop": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M21 9H11a3 3 0 0 0-3 3v21h32V23\"/><path d=\"M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z\"/><path stroke-linecap=\"round\" d=\"M32.3 7C30.478 7 29 8.435 29 10.205c0 3.204 3.9 6.117 6 6.795c2.1-.678 6-3.59 6-6.795C41 8.435 39.523 7 37.7 7A3.33 3.33 0 0 0 35 8.362A3.33 3.33 0 0 0 32.3 7\"/></g>"
	},
	"collect-picture": {
		body: "<g fill=\"none\"><path fill=\"currentColor\" d=\"M44 21a2 2 0 1 0-4 0zM23 8a2 2 0 1 0 0-4zm16 32H9v4h30zM8 39V9H4v30zm32-18v18h4V21zM9 8h14V4H9zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1zM8 9a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 35l10.693-9.802a2 2 0 0 1 2.653-.044L32 36m-4-5l4.773-4.773a2 2 0 0 1 2.615-.186L42 31M33.3 6C31.478 6 30 7.435 30 9.205c0 3.204 3.9 6.117 6 6.795c2.1-.678 6-3.59 6-6.795C42 7.435 40.523 6 38.7 6A3.33 3.33 0 0 0 36 7.362A3.33 3.33 0 0 0 33.3 6\"/></g>"
	},
	"collection-files": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 44V4h23l9 10.5V44z\"/><path d=\"m24 15l3.084 6.755l7.378.846l-5.472 5.02l1.476 7.278L24 31.247l-6.466 3.652l1.476-7.278l-5.472-5.02l7.378-.846z\"/></g>"
	},
	"collection-records": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M40 22c0-9.941-8.059-18-18-18S4 12.059 4 22s8.059 18 18 18\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M33.3 30c-1.822 0-3.3 1.722-3.3 3.846c0 3.845 3.9 7.34 6 8.154c2.1-.813 6-4.31 6-8.154C42 31.722 40.523 30 38.7 30c-1.116 0-2.103.646-2.7 1.634c-.597-.988-1.584-1.634-2.7-1.634\"/><path d=\"M22 27a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/></g>"
	},
	"color-card": {
		body: "<defs><path id=\"ipOColorCard0\" stroke=\"currentColor\" d=\"M24.485 32H44v12H12.5\"/></defs><g fill=\"none\"><path d=\"M10 44a6 6 0 0 0 6-6V4H4v34a6 6 0 0 0 6 6\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 44a6 6 0 0 0 6-6V23.515M10 44a6 6 0 0 1-6-6V4h12v19.515M10 44h34V32H24.485M5.757 42.243a6 6 0 0 0 8.486 0L24.485 32M16 23.515L35.015 4.5l.47-.5l8.5 8.5l-19.5 19.5\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14.243 42.243L43.985 12.5l-8.5-8.5L16 23.515\"/><use href=\"#ipOColorCard0\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><use href=\"#ipOColorCard0\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 44a6 6 0 0 0 6-6V4H4v34a6 6 0 0 0 6 6\"/></g>"
	},
	"color-filter": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 40.944A11.96 11.96 0 0 0 32 44c6.627 0 12-5.373 12-12c0-5.591-3.824-10.29-9-11.622\"/><path d=\"M13 20.378C7.824 21.71 4 26.408 4 32c0 6.627 5.373 12 12 12s12-5.373 12-12c0-1.55-.294-3.03-.828-4.39\"/><path d=\"M24 28c6.627 0 12-5.373 12-12S30.627 4 24 4S12 9.373 12 16s5.373 12 12 12Z\"/></g>"
	},
	column: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39.3 6H8.7A2.7 2.7 0 0 0 6 8.7v30.6A2.7 2.7 0 0 0 8.7 42h30.6a2.7 2.7 0 0 0 2.7-2.7V8.7A2.7 2.7 0 0 0 39.3 6Z\"/><path stroke-linecap=\"round\" d=\"M24 6v36\"/></g>"
	},
	comb: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4.201 31.071L16.93 43.8L43.8 16.93L31.071 4.201M9.151 26.122l7.071 7.071m-1.414-12.728l7.07 7.071m-1.413-12.728l7.07 7.071M26.121 9.151l7.071 7.071M12.687 39.557l26.87-26.87\"/>"
	},
	come: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 40C10.128 35.564 7 26 4 19.5c-1.35-2.924 3.526-3.69 6.5-2.5c2.5 1 5.5 3 5.5 3v-8.5a3.5 3.5 0 1 1 7 0v-2a3.5 3.5 0 1 1 7 0v4a3.5 3.5 0 1 1 7 0v3a3.5 3.5 0 0 1 7-.002V29c0 3.5-2 8-7 11c-4.793 2.876-12 3-18 0\"/>"
	},
	command: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M9.455 14.91h5.454V9.454a5.455 5.455 0 1 0-5.454 5.454Zm0 18.18h5.454v5.455a5.455 5.455 0 1 1-5.454-5.454Z\"/><path stroke-linecap=\"round\" d=\"M14.909 14.909h18.182v18.182H14.909z\"/><path d=\"M38.545 14.91h-5.454V9.454a5.455 5.455 0 1 1 5.454 5.454Zm0 18.18a5.455 5.455 0 1 1-5.454 5.455v-5.454z\"/></g>"
	},
	comment: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 6H4v30h9v5l10-5h21zM14 19.5v3m10-3v3m10-3v3\"/>"
	},
	"comment-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 6H4v30h9v5l10-5h21zM14 21h20\"/>"
	},
	comments: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M33 38H22v-8h14v-8h8v16h-5l-3 3z\"/><path stroke-linejoin=\"round\" d=\"M4 6h32v24H17l-4 4l-4-4H4z\"/><path d=\"M12 22h6m-6-8h12\"/></g>"
	},
	commodity: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M9.781 9.752A2 2 0 0 1 11.766 8h24.468a2 2 0 0 1 1.985 1.752l3.5 28A2 2 0 0 1 39.734 40H8.266a2 2 0 0 1-1.985-2.248z\"/><path stroke-linecap=\"round\" d=\"M15 18s2 4 9 4s9-4 9-4\"/></g>"
	},
	communication: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M33 38H22v-8h14v-8h8v16h-5l-3 3z\"/><path stroke-linejoin=\"round\" d=\"M4 6h32v24H17l-4 4l-4-4H4z\"/><path d=\"M19 18h1m6 0h1m-15 0h1\"/></g>"
	},
	"commuter-bag": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M31.992 22q.008-.462.008-.927C32 9.515 28.418 4 24 4s-8 5.515-8 17.073q0 .466.008.927\"/><rect width=\"22\" height=\"22\" x=\"13\" y=\"22\" rx=\"2\"/></g>"
	},
	compass: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m12 44l10.688-28.5M36 44L25.313 15.5\"/><circle cx=\"24\" cy=\"12\" r=\"4\"/><path d=\"M37.57 33c-3.908 2.53-8.568 4-13.57 4s-9.662-1.47-13.57-4M24 8V4\"/></g>"
	},
	"compass-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M24 44c9.389 0 17-7.611 17-17s-7.611-17-17-17S7 17.611 7 27s7.611 17 17 17Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19 4h10m-9 23l4-7l4 7l-4 7zM7 27h4m26 0h4M24 10v4m0 26v4m-6.5-1.287A17 17 0 0 0 24 44c2.302 0 4.498-.458 6.5-1.287M8.287 20.5A17 17 0 0 0 7 27c0 2.302.458 4.498 1.287 6.5m31.426-13A17 17 0 0 1 41 27c0 2.302-.458 4.498-1.287 6.5m-22.705-22A16.9 16.9 0 0 1 24 10c2.492 0 4.86.536 6.992 1.5\"/></g>"
	},
	components: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m17 11l7-7l7 7l-7 7zm13 14l7-7l7 7l-7 7zM17 37l7-7l7 7l-7 7zM4 24l7-7l7 7l-7 7z\"/>"
	},
	composition: {
		body: "<g fill=\"none\"><path d=\"m39.828 21.786l-17.86 17.86c-3.414 3.414-9.03 3.332-12.545-.182c-3.515-3.515-3.597-9.132-.182-12.546L27.1 9.058\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"m39.828 21.786l-17.86 17.86c-3.414 3.414-9.03 3.332-12.545-.182c-3.515-3.515-3.597-9.132-.182-12.546L27.1 9.058M8.734 27.424l26.144-.688\"/><path fill=\"currentColor\" d=\"M29.393 20.907a2 2 0 1 0-2.828-2.829a2 2 0 0 0 2.828 2.829m-5.657 2.829a2 2 0 1 0-2.828-2.829a2 2 0 0 0 2.828 2.828\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"m23.565 5.522l19.798 19.8\"/></g>"
	},
	compression: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M8.92 8.714C8.495 7.39 9.476 6 10.867 6h26.266c1.391 0 2.372 1.39 1.947 2.714C37.9 12.4 36 19.09 36 24s1.9 11.6 3.08 15.286C39.505 40.61 38.524 42 37.133 42H10.867c-1.391 0-2.372-1.39-1.947-2.714C10.1 35.6 12 28.91 12 24S10.1 12.4 8.92 8.714M4 15c1.5 2 2 6 2 9s-.5 7-2 9\"/><path d=\"M18 15.5h12M18 24h12m-12 8h4\"/><path stroke-linejoin=\"round\" d=\"M44 15c-1.5 2-2 6-2 9s.5 6 2 9\"/></g>"
	},
	computer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19 32h10v9H19z\"/><rect width=\"38\" height=\"24\" x=\"5\" y=\"8\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M22 27h4M14 41h20\"/></g>"
	},
	"computer-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M10 6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M17 12h14\"/><circle cx=\"17\" cy=\"21\" r=\"2\" fill=\"currentColor\"/><circle cx=\"17\" cy=\"27\" r=\"2\" fill=\"currentColor\"/><circle cx=\"17\" cy=\"33\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"21\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"27\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"33\" r=\"2\" fill=\"currentColor\"/><circle cx=\"31\" cy=\"21\" r=\"2\" fill=\"currentColor\"/><circle cx=\"31\" cy=\"27\" r=\"2\" fill=\"currentColor\"/><circle cx=\"31\" cy=\"33\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"concept-sharing": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M28.367 36H24l-9-4.96l-10.991 4.042l3.002 5.944l7.072-2.953Q24.008 44 26.165 44T44 36\"/><path stroke-linejoin=\"round\" d=\"M28.992 26.988v-4.67c1.1-.457 2.543-1.125 3.372-1.954a9 9 0 1 0-12.728 0c.829.829 2.264 1.497 3.364 1.953q.009.503 0 4.67z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"m12 21l1-1m27 1l-1-1M15 5l-1-1m23 1l1-1m3 8h-1m-28 0h-1\"/></g>"
	},
	concern: {
		body: "<g fill=\"none\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-width=\"4\" d=\"M10.858 9.858A19.94 19.94 0 0 0 5 24a19.94 19.94 0 0 0 5.858 14.142m28.284 0A19.94 19.94 0 0 0 45 24a19.94 19.94 0 0 0-5.858-14.142M34.9 33.9A13.96 13.96 0 0 0 39 24a13.96 13.96 0 0 0-4.1-9.9m-19.8 0A13.96 13.96 0 0 0 11 24a13.96 13.96 0 0 0 4.1 9.9\"/><path stroke-linejoin=\"round\" stroke-width=\"3.5\" d=\"M28.182 20C30.29 20 32 21.612 32 23.6c0 2.588-2.546 4.8-3.818 6Q26.908 30.8 25 32q-1.909-1.2-3.182-2.4C20.545 28.4 18 26.188 18 23.6c0-1.988 1.71-3.6 3.818-3.6c1.328 0 2.498.64 3.182 1.61c.684-.97 1.854-1.61 3.182-1.61Z\"/></g>"
	},
	conditioner: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 24h32v20H8zm29 0v-7H11v7m6-7q3-3.25 3-13c3 0 10 5.417 10 12.733\"/><path d=\"M16 31h16v6H16z\"/></g>"
	},
	cone: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><ellipse cx=\"24\" cy=\"39\" stroke-linejoin=\"round\" rx=\"18\" ry=\"6\"/><path stroke-linecap=\"round\" d=\"M6 39h36\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 39L24 4l18 35\"/></g>"
	},
	cones: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 8L4 40h40z\"/><path stroke-linecap=\"round\" d=\"m30 32l-6-4l-6 4m6-4v-6\"/></g>"
	},
	config: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m24 4l-6 6h-8v8l-6 6l6 6v8h8l6 6l6-6h8v-8l6-6l-6-6v-8h-8z\"/><path d=\"M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z\"/></g>"
	},
	"confounded-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m32 17l-3 3l3 3m-16-6l3 3l-3 3m-1 8l3 3l3-3l3 3l3-3l3 3l3-3\"/></g>"
	},
	"confused-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 18v1m-14-1v1m0 13l14-2\"/></g>"
	},
	connect: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m2 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12m28 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12M22 28a8 8 0 1 0 0-16a8 8 0 0 0 0 16m12-16a4 4 0 1 0 0-8a4 4 0 0 0 0 8\" clip-rule=\"evenodd\"/><path d=\"m11 11l4 4m15-3l-2 2m6 19.5L28 26m-14 5l4-4\"/></g>"
	},
	"connect-address-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 24c0 9.941 8.059 18 18 18s18-8.059 18-18M24 14v28\"/><circle cx=\"24\" cy=\"10\" r=\"4\"/></g>"
	},
	"connect-address-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 24c0 9.941 8.059 18 18 18s18-8.059 18-18M24 14v28M6 24h6m24 0h6\"/><circle cx=\"24\" cy=\"10\" r=\"4\"/></g>"
	},
	connection: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"m39 34l5 5l-5 5\"/><path d=\"M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" d=\"M12 8h8a4 4 0 0 1 4 4v23a4 4 0 0 0 4 4h16\"/></g>"
	},
	"connection-arrow": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40.99 8.027H12.182C9.455 8.027 4 9.55 4 15.967S9.455 24 12.182 24h23.812C38.72 24 44 25.568 44 31.985s-5.279 8.018-8.006 8.018H6.065\"/><path d=\"m8.046 35.993l-3.979 4.066L8.046 44M38.043 3.954L42.02 8.02l-3.978 3.941\"/></g>"
	},
	"connection-box": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M43 4H5c-.552 0-1 .488-1 1.09v9.82c0 .602.448 1.09 1 1.09h38c.552 0 1-.488 1-1.09V5.09C44 4.489 43.552 4 43 4Zm0 28H5c-.552 0-1 .488-1 1.09v9.82c0 .602.448 1.09 1 1.09h38c.552 0 1-.488 1-1.09v-9.82c0-.602-.448-1.09-1-1.09Z\"/><path stroke-linecap=\"round\" d=\"M14 16v8.008l20 .01V32m-16 6h12M18 10h12\"/></g>"
	},
	"connection-point": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M5 24h38\"/><path d=\"M28 4h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM16 32H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Zm24 0h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M24 24v-8m12 16v-8m-24 8v-8\"/></g>"
	},
	"connection-point-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M36 8H13c-3 0-9 2-9 8s6 8 9 8h22c3 0 9 2 9 8s-6 8-9 8H12\"/><path d=\"M40 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM8 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/></g>"
	},
	consignment: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M8 14a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16 12v20m16-20v20m-4-20h8m-24 0h8m-8 20h8m8 0h8M4 38h40\"/><path stroke-linecap=\"round\" d=\"M18 38v2m-6-2v2m-6-2v2m18-2v2m6-2v2m6-2v2m6-2v2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M30 12V6H18v6\"/></g>"
	},
	consume: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 14a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"m19 19l5 5l5-5m-11 6h12m-12 6h12m-6-6v10M8 6h32\"/></g>"
	},
	contrast: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path d=\"M24 36V12c-6.627 0-12 5.373-12 12s5.373 12 12 12Z\"/></g>"
	},
	"contrast-view": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M7 7h17v34H7z\"/><path stroke-linecap=\"round\" d=\"M24 7h4m5 0h2m-2 34h2m6-34v2m0 6v2m0 6v2m0 6v2m0 6v2m-14 0h-3m0-37v40\"/></g>"
	},
	"contrast-view-circle": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20z\" clip-rule=\"evenodd\"/><path d=\"M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20z\"/><path stroke-linecap=\"round\" d=\"M24 36H9m15-8H5m19-8H5m19-8H9\"/></g>"
	},
	control: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"30\" height=\"40\" x=\"9\" y=\"4\" rx=\"2\"/><circle cx=\"24\" cy=\"31\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18 12h3m-3 6h3m6 0h3\"/></g>"
	},
	"converging-gateway": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M22.8 4.201L4.413 22.586a2 2 0 0 0 0 2.828L22.8 43.8a2 2 0 0 0 2.829 0l18.384-18.385a2 2 0 0 0 0-2.828L25.628 4.2a2 2 0 0 0-2.829 0Z\"/><path stroke-linecap=\"round\" d=\"M24.043 15.534v16.944m-8.472-8.472h16.944m-2.481-5.991L18.053 29.996m0-11.981l11.98 11.981\"/></g>"
	},
	cook: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 36V20H14v16a6 6 0 0 0 6 6h16a6 6 0 0 0 6-6M4 20h40M18 8v4m10-6v6m10-4v4\"/>"
	},
	cooking: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M6 42h36M6 36h36\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 25c0-8.284 6.716-15 15-15s15 6.716 15 15v11H9z\"/><path stroke-linecap=\"round\" d=\"M17 25v4\"/><path d=\"M28 10V8a4 4 0 0 0-8 0v2\"/></g>"
	},
	"cooking-pot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M10 44h28V20.947C38 14.901 31.732 10 24 10s-14 4.901-14 10.947z\" clip-rule=\"evenodd\"/><path d=\"M38 22.044v-1.097C38 14.901 31.732 10 24 10s-14 4.901-14 10.947v1.093z\"/><path stroke-linecap=\"round\" d=\"M4 22h40M21 4h6\"/></g>"
	},
	cool: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 41C13.5 38.25 8.001 31 5 26s3.313-9.687 7-6l4 4V7.5a3.5 3.5 0 1 1 7 0V17a3.5 3.5 0 1 1 7 0v1.5a3.5 3.5 0 1 1 7 0v-5a3.5 3.5 0 1 1 7 0v16.615c0 1.897-.422 3.789-1.573 5.297C41.133 37.106 39.017 39.354 36 41c-5.5 3-11.5 2.75-17 0\"/>"
	},
	"cooperative-handshake": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m24 40l12-12l-4 4l-4 4zm0 0L4 20L16 8l8 8\"/><path d=\"M17 23L32 8l12 12l-8 8l-8-8l-6 6zm0 0l7-7m4 20l-3-3m7-1l-3-3\"/></g>"
	},
	"coordinate-system": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m24 12l14 8v16l-14 8l-14-8V20z\"/><path stroke-linecap=\"round\" d=\"M24 6v6m-14 8l14 8l14-8m0 16l6 3M4 39l6-3m14-8v16\"/><path d=\"m31 16l7 4v8M17 16l-7 4v8m7 12l7 4l7-4\"/></g>"
	},
	copy: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M13 12.432v-4.62A2.813 2.813 0 0 1 15.813 5h24.374A2.813 2.813 0 0 1 43 7.813v24.375A2.813 2.813 0 0 1 40.188 35h-4.672\"/><path d=\"M32.188 13H7.811A2.813 2.813 0 0 0 5 15.813v24.374A2.813 2.813 0 0 0 7.813 43h24.375A2.813 2.813 0 0 0 35 40.188V15.811A2.813 2.813 0 0 0 32.188 13Z\"/></g>"
	},
	"copy-link": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M12 9.927V7a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3h-2.983\"/><rect width=\"34\" height=\"34\" x=\"4\" y=\"10\" stroke-linejoin=\"round\" rx=\"3\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m18.44 23.11l5.292-5.51c1.451-1.451 3.837-1.42 5.328.072s1.523 3.877.072 5.328l-1.91 2.023m-13.756 3.724c-.51.51-1.565 1.53-1.565 1.53c-1.452 1.451-1.492 4.038 0 5.53c1.49 1.49 3.876 1.523 5.328.071l5.164-4.688\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18.663 28.328a3.86 3.86 0 0 1-1.131-2.473A3.67 3.67 0 0 1 18.592 23m3.729 2.861c1.491 1.491 1.523 3.877.072 5.329\"/></g>"
	},
	"copy-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M13 38h28V16H30V4H13zM30 4l11 12\"/><path stroke-linejoin=\"round\" d=\"M7 20v24h21\"/><path d=\"M19 20h4m-4 8h12\"/></g>"
	},
	copyright: {
		body: "<g fill=\"none\"><circle cx=\"24\" cy=\"24\" r=\"20\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><path d=\"M24 17h-4v7h4c3 0 4-2 4-3.5S27 17 24 17\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 31v-7m0 0v-7h4c3 0 4 2 4 3.5S27 24 24 24h-1m-3 0h3m5 7l-5-7\"/></g>"
	},
	"corner-down-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m16 18l-8 8l8 8\"/><path d=\"M40 10v13a3 3 0 0 1-3 3H8\"/></g>"
	},
	"corner-down-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m32 18l8 8l-8 8\"/><path d=\"M8 10v13a3 3 0 0 0 3 3h29\"/></g>"
	},
	"corner-left-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m12 34l8 8l8-8\"/><path d=\"M36 10H23a3 3 0 0 0-3 3v29\"/></g>"
	},
	"corner-left-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m12 16l8-8l8 8\"/><path d=\"M36 40H23a3 3 0 0 1-3-3V8\"/></g>"
	},
	"corner-right-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m20 34l8 8l8-8\"/><path d=\"M12 10h13a3 3 0 0 1 3 3v29\"/></g>"
	},
	"corner-right-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m20 16l8-8l8 8\"/><path d=\"M12 40h13a3 3 0 0 0 3-3V8\"/></g>"
	},
	"corner-up-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m16 14l-8 8l8 8\"/><path d=\"M40 38V25a3 3 0 0 0-3-3H8\"/></g>"
	},
	"corner-up-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m32 14l8 8l-8 8\"/><path d=\"M8 38V25a3 3 0 0 1 3-3h29\"/></g>"
	},
	coronavirus: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7.635 35.5A20.1 20.1 0 0 0 13 40.706m14.868 2.92A20 20 0 0 1 24 44c-1.324 0-2.617-.129-3.869-.374M43.55 28.243a20.2 20.2 0 0 0 .017-8.4M40.365 12.5A20.1 20.1 0 0 0 35 7.294M20.155 4.37A20 20 0 0 1 24 4c1.315 0 2.6.127 3.845.37M7.635 12.5A20.1 20.1 0 0 1 13 7.294m27.5 28a20.1 20.1 0 0 1-5.365 5.206M16 24H4m6 14l8.343-8.343M24 32v12m14-6l-8.343-8.343M32 24h12m-6-14l-8.343 8.343M24 16V4m-14 6l8.343 8.343m-13.91 1.5A20 20 0 0 0 4 24c0 1.425.15 2.816.433 4.157M24 32a8 8 0 1 0 0-16a8 8 0 0 0 0 16\"/>"
	},
	correct: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m4 24l5-5l10 10L39 9l5 5l-25 25z\" clip-rule=\"evenodd\"/>"
	},
	"cosmetic-brush": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m16.1 25.829l22.627-19.8s2.12-2.12 4.242 0c2.121 2.122 0 4.243 0 4.243L23.17 32.9z\"/><path stroke-linecap=\"round\" d=\"m22.464 20.879l5.657 5.657\"/><path d=\"m5.493 30.778l10.607-4.95l7.07 7.072l-4.95 10.606s-4.95.707-9.192-3.535c-4.243-4.243-3.536-9.193-3.536-9.193Z\"/><path stroke-linecap=\"round\" d=\"m6.908 36.435l4.95-2.121m.707 7.778l1.415-2.828\"/><path d=\"m18.93 23.354l2.828-2.475l2.828-2.475m6.01 6.01l-2.475 2.828l-2.475 2.829\"/></g>"
	},
	coupon: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 19.313V9h40v10.313a5.5 5.5 0 0 0-3.636 5.187A5.5 5.5 0 0 0 44 29.687V40H4V29.687A5.5 5.5 0 0 0 7.636 24.5A5.5 5.5 0 0 0 4 19.313Z\"/><path stroke-linecap=\"round\" d=\"m19 16l5 5l5-5m-11 6h12m-12 6.167h12M24 22v12\"/></g>"
	},
	court: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 36h20V12H4v24zm0 0v-8m0-16v8\"/><circle cx=\"24\" cy=\"24\" r=\"4\"/><path d=\"M11 24a4 4 0 0 1-4 4H4v-8h3a4 4 0 0 1 4 4m26 0a4 4 0 0 0 4 4h3v-8h-3a4 4 0 0 0-4 4\"/></g>"
	},
	cpu: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 8H10a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 18H18v12h12z\"/><path d=\"M14.91 2v6z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14.91 2v6\"/><path d=\"M14.91 40v6z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14.91 40v6\"/><path d=\"M24 2v6z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 2v6\"/><path d=\"M24 40v6z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 40v6\"/><path d=\"M33.09 2v6z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33.09 2v6\"/><path d=\"M33.09 40v6z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33.09 40v6\"/><path d=\"M2 14.91h6z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M2 14.91h6\"/><path d=\"M40 14.91h6z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 14.91h6\"/><path d=\"M2 24h6z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M2 24h6\"/><path d=\"M40 24h6z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 24h6\"/><path d=\"M2 33.09h6z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M2 33.09h6\"/><path d=\"M40 33.09h6z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 33.09h6\"/></g>"
	},
	crab: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 17C5 12 6 2 17 6c.946 3.782-2 11-12 11m38 0c0-5-1-15-12-11c-.946 3.782 2 11 12 11\"/><rect width=\"32\" height=\"20\" x=\"8\" y=\"22\" rx=\"10\"/><path d=\"M27 22v-4m-6 4v-4m22-1c1 3 1 9-3 12M5 17c-1 3 0 8 3 12m22 13h14l-4-9m-22 9H4l4-9\"/></g>"
	},
	"creation-date-sort": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M6 5v25.004h36V5M30 37l-6 6l-6-6m6-7v13\"/><path d=\"M16 15.001h16M24 7v16\"/></g>"
	},
	creative: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 39V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3Z\"/><path d=\"m24 18.316l-2.896 5.91l-6.578.954l4.765 4.658l-1.139 6.478L24 33.199l5.849 3.117l-1.13-6.478l4.756-4.658l-6.541-.954z\"/><path stroke-linecap=\"round\" d=\"M18.316 12.632h11.368\"/></g>"
	},
	credit: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M38 15V7H10v8m33 12V15H5v26h38\"/><path d=\"m29 27l-5 7h19M26 21h-4m-6 0h-4\"/></g>"
	},
	crib: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 6v38m-28-4h28m-28-6h28M6 12h36m-7-6h6M7 6h6m-3 0v38m7-32v16m7-16v16m7-16v16\"/>"
	},
	croissant: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7 29s-.044 3.748 1.456 8.248c.873 2.616 1.914 4.219 3.223 5.003c1.677 1.005 3.397-.98 4.379-2.67c.962-1.657 2.375-3.353 3.49-4.581M33 7.911c2.623.44 5.532 1.006 6.626 1.508c1.426.654 2.86 1.986 3.431 3.411c.531 1.324-.847 2.34-2.093 3.034c-1.405.783-2.869 2.01-4.065 3.136\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24.202 29.776L21.7 31.513a2.97 2.97 0 0 0-1.036 1.27v0a2.97 2.97 0 0 1-3.886 1.566L8.803 30.98a2.96 2.96 0 0 1-1.61-3.792l.45-1.169a11.1 11.1 0 0 1 4.576-5.486v0m18.501 3.975l1.39-1.504l.912-.987a3.3 3.3 0 0 1 1.125-.795v0a3.305 3.305 0 0 0 1.812-4.146l-2.852-8.01a2.797 2.797 0 0 0-3.259-1.789l-1.218.279A10.8 10.8 0 0 0 22.114 12v0\"/><path d=\"M13.41 23.079a3.817 3.817 0 0 1-1.017-5.12a19 19 0 0 1 6.154-6.136a3.8 3.8 0 0 1 5.036.954l5.932 7.909a4 4 0 0 1-.913 5.682l-.24.167c-.301.21-.572.46-.804.743l-.684.832a4 4 0 0 1-5.416.716z\"/></g>"
	},
	"cross-ring": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM8 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm32 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" d=\"M12 24h24M24 12v24m13.305-20.89a16.1 16.1 0 0 0-4.415-4.415m-17.78 0a16.1 16.1 0 0 0-4.415 4.416zM10.696 32.89a16.1 16.1 0 0 0 4.416 4.415zm22.195 4.415a16.1 16.1 0 0 0 4.415-4.415z\"/></g>"
	},
	"cross-ring-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19.455 26.444C17.636 28.222 15.817 30 12.182 30C8.545 30 4 27.333 4 22s4.545-8 8.182-8c5.454 0 8.182 3.556 11.818 8s6.364 8 11.818 8C39.455 30 44 27.333 44 22s-4.545-8-8.182-8c-3.636 0-6.363 2.667-7.272 3.556\"/>"
	},
	"cross-society": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7 18h11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H30v11a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V30H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2\"/>"
	},
	crown: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M9 40L4 17l10 5L24 8l10 14l10-5l-5 23z\"/><path d=\"M24 33a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/></g>"
	},
	"crown-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 42h22l6-21l-10 5l-7-14l-7 14l-10-5z\"/><circle cx=\"7\" cy=\"18\" r=\"3\"/><circle cx=\"24\" cy=\"9\" r=\"3\"/><circle cx=\"41\" cy=\"18\" r=\"3\"/></g>"
	},
	"crown-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\"/><path d=\"M13 29V19l6 3l5-7l5 7l6-3v10z\"/></g>"
	},
	cruise: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m38 42l3.39-9.325a2 2 0 0 0-.984-2.472l-15.512-7.756a2 2 0 0 0-1.788 0L7.594 30.203a2 2 0 0 0-.985 2.472L10 42\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M35 14H13a2 2 0 0 0-2 2v12l12.162-5.613a2 2 0 0 1 1.676 0L37 28V16a2 2 0 0 0-2-2m-6 0V6a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v8\"/><path stroke-linecap=\"round\" d=\"M24 32v8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 44c4 0 4-2 7-2s3 2 6 2s3.5-2 7-2s4 2 7 2s3-2 6-2s3 2 7 2\"/></g>"
	},
	"crying-baby": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c9.941 0 18-8.059 18-18S33.941 8 24 8S6 16.059 6 26s8.059 18 18 18Z\"/><path stroke-linecap=\"round\" d=\"M24 8c-.25-1-2-4-6-4m6 4c.083-1 .6-3.2 2-4m5 31s-2-4-7-4s-7 4-7 4m17-15l-6-1m-8 0l-6 1m1 0v5m18-5v5M4 24v4m40-4v4\"/></g>"
	},
	cube: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15.5 9L7 14v20l8.5 5l8.5 5l8.5-5l8.5-5V14l-8.5-5L24 4zM41 14L24 24M7 14l17 10m0 20V24m8-5v20m9-15L24 34m0 0L7 24m9 15V19M32 9L16 19m16 0L16 9\"/>"
	},
	"cube-five": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m30 27l-6 17m-6-17l6 17m-6-17h12m11 7l-11-7m11-13L30 27m11-13l-17 3m6 10l-6-10m0-13v13M7 14l17 3m-6 10l6-10m-6 10L7 14m11 13L7 34m34.32-20L24 4L6.68 14v20L24 44l17.32-10z\"/>"
	},
	"cube-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m15.34 9l-8.66 5v20l8.66 5L24 44l8.66-5l8.66-5V14l-8.66-5L24 4zM24 24l-10.392 6M24 24V11zm0 0l10.392 6z\"/><path d=\"M26.815 35.375L24 37l-2.814-1.625m11.258-19.5l2.814 1.625v3.25m-22.516 0V17.5l2.814-1.625\"/></g>"
	},
	"cube-three": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15.5 9L7 14v20l8.5 5l8.5 5l8.5-5l8.5-5V14l-8.5-5L24 4zM24 4v20m17 10L24 24M7 34l17-10m0 20V34m17-20l-8 5M7 14l8 5\"/>"
	},
	"cube-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15.5 9L7 14v20l8.5 5l8.5 5l8.5-5l8.5-5V14l-8.5-5L24 4zM41 14L7 34M24 4v40M7 14l34 20\"/>"
	},
	cup: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M8.778 17.012c0-.559.453-1.012 1.012-1.012h23.976c.559 0 1.012.453 1.012 1.012V31c0 7.18-5.82 13-13 13s-13-5.82-13-13z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.778 23h26v8h-26zm13-19v6m-8-4v2m16-2v2\"/><path stroke-linecap=\"round\" d=\"M34.778 34a7 7 0 1 0 0-14\"/></g>",
		width: 49
	},
	"cup-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M14 25c0 2 1.071 7 15 7s15-5 15-7V10H14z\"/><path stroke-linecap=\"round\" d=\"M29 16h-6v5l3 3l3-3zm-3 0v-6M15 40h28\"/><path d=\"M14 14H4s1 5 2 8c.998 3 8 2 8 2\"/></g>"
	},
	"cup-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 17h28c2 0 6 0 6 3s-4 3-6 3v18a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V23c-2 0-6 0-6-3s4-3 6-3m31 0c0-5.873-5.541-7.681-13-9V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2c-7.459 1.319-13 3.127-13 9\"/>"
	},
	curling: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M38 42H10c-3.31 0-6-2.68-6-6v-8c0-3.31 2.68-6 6-6h28c3.31 0 6 2.68 6 6v8c0 3.32-2.68 6-6 6Z\"/><path stroke-linecap=\"round\" d=\"M4 32h40M10 22l6.48-14.8A1.98 1.98 0 0 1 18.31 6H35.5C37.43 6 39 7.57 39 9.5S37.43 13 35.5 13H22v9z\"/></g>"
	},
	currency: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m19 16l5 6l5-6\"/><path d=\"M9 14s7.5-11.5 20.5-7S42 24.5 42 24.5M39 34s-6 11-19.5 7.5S6 24 6 24M42 8v16M6 24v16m12-12h12m-12-6h12m-6 0v12\"/></g>"
	},
	"curve-adjustment": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 4H4v40h40z\"/><path stroke-linecap=\"round\" d=\"M38 10c-6 0-11 4-14 14s-8 14-14 14\"/></g>"
	},
	customer: {
		body: "<g fill=\"currentColor\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M8.609 36.987C5.32 33.378 3.32 28.614 3.32 23.39c0-11.264 9.297-20.395 20.765-20.395S44.85 12.127 44.85 23.39c0 7.965-4.65 14.86-11.427 18.218a30 30 0 0 1-13.898 3.387c-6.152 0-11.868-1.839-16.608-4.987c0 0 3.179-.347 5.69-3.022zm25.23-3.502c5.373-5.371 5.373-14.08 0-19.453a13.7 13.7 0 0 0-8.96-4.007c-.098-2.447 1.219-4.099 1.225-4.107h-.001l.001-.001a19.7 19.7 0 0 0-10.228 5.439a19.7 19.7 0 0 0-4.755 7.641q.207-.55.463-1.084q-.293.75-.533 1.532c-1.573 4.776-.463 10.242 3.335 14.04c5.372 5.372 14.082 5.372 19.454 0\"/><path d=\"M17.13 22.345v2.847a2.057 2.057 0 1 0 4.114 0v-2.847a2.057 2.057 0 1 0-4.114 0m10.183 0v2.847a2.057 2.057 0 0 0 4.114 0v-2.847a2.057 2.057 0 0 0-4.114 0\"/></g>"
	},
	cutting: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 10h32v32m-27.452-4.548L42.385 5.615\"/><path d=\"M42 38H10V6\"/></g>"
	},
	"cutting-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M11 42a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm26 0a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" d=\"m15.377 39.413l2.123-3.597l17-29.445\"/><path stroke-linecap=\"round\" d=\"m13.496 6.175l17 29.445l2.13 3.793\"/></g>"
	},
	cuvette: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M18 10h12v17l14 14v3H4v-3l14-14z\" clip-rule=\"evenodd\"/><path d=\"M40.5 37.5L37 34l-3.5-3.5m7 7L37 34l-3.5-3.5m-19 0L11 34l-3.5 3.5m7-7L11 34l-3.5 3.5M18 4h12m-6 23v1m0-10v3M10 35h28\"/></g>"
	},
	cycle: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M13 35H7v6m34 0h-6v-6m0-22h6V7M7 7h6v6\"/><path d=\"M13 7.294C7.578 10.871 4 17.018 4 24q.001 1.53.223 3M27 43.777A20 20 0 0 1 24 44c-6.982 0-13.129-3.578-16.706-9m36.483-14q.222 1.47.223 3c0 6.982-3.578 13.129-9 16.706M21 4.224A20 20 0 0 1 24 4c6.982 0 13.129 3.578 16.706 9\"/></g>"
	},
	"cycle-arrow": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17 16h-4a9 9 0 1 0 6.345 15.383C20.985 29.753 24 25 24 25s3.006-4.732 4.632-6.36A9 9 0 1 1 35 34h-4\"/><path d=\"m35 30l-4 4l4 4M13 12l4 4l-4 4\"/></g>"
	},
	"cycle-movement": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m20 15l4 4l4-4\"/><path d=\"M24 19V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v11M28 33l-4-4l-4 4\"/><path d=\"M24 29v11a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V29m29-9l-4 4l4 4\"/><path d=\"M29 24h11a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H29M15 28l4-4l-4-4\"/><path d=\"M19 24H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h11\"/></g>"
	},
	"cycle-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 20Q6 8 18 8m22 22q0 12-12 12m0-24c0-5.523 4.477-10 10-10h4v14H28zM6 28h14v4c0 5.523-4.477 10-10 10H6z\"/>"
	},
	cylinder: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 10c0 3.314-8.954 6-20 6S4 13.314 4 10s8.954-6 20-6s20 2.686 20 6m0 28c0 3.314-8.954 6-20 6S4 41.314 4 38s8.954-6 20-6s20 2.686 20 6m0-28v28M4 10v28\"/>"
	},
	"damage-map": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 10v28a2 2 0 0 0 2 2h11l-3-11l7-2l-1-7l8-4l-2-3l3-5H7a2 2 0 0 0-2 2m38 28V10a2 2 0 0 0-2-2h-3l-4 6l3 5l-9 4l1 8l-7 2l2 7h17a2 2 0 0 0 2-2\"/><path d=\"M14.5 18a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3\" clip-rule=\"evenodd\"/></g>"
	},
	"dark-mode": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"4\"><path d=\"m24.003 4l5.27 5.27h9.457v9.456l5.27 5.27l-5.27 5.278v9.456h-9.456L24.004 44l-5.278-5.27H9.27v-9.456L4 23.997l5.27-5.27V9.27h9.456z\"/><path d=\"M27 17c0 8-5 9-10 9c0 4 6.5 8 12 4s2-13-2-13\"/></g>"
	},
	dashboard: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M8.444 41.556A21.93 21.93 0 0 1 2 26C2 13.85 11.85 4 24 4s22 9.85 22 22a21.93 21.93 0 0 1-6.444 15.556\"/><path d=\"M14.1 35.9A13.96 13.96 0 0 1 10 26c0-7.732 6.268-14 14-14\"/><path stroke-linejoin=\"round\" d=\"M24 26v-8\"/></g>"
	},
	"dashboard-car": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6.572 37.428A21.9 21.9 0 0 1 2 24C2 11.85 11.85 2 24 2s22 9.85 22 22c0 5.056-1.705 9.713-4.572 13.428\"/><path d=\"M12.304 31.697A13.94 13.94 0 0 1 10 24c0-7.732 6.268-14 14-14s14 6.268 14 14c0 2.843-.847 5.488-2.303 7.697\"/><path d=\"m24 30l16 16H8z\" clip-rule=\"evenodd\"/></g>"
	},
	"dashboard-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24.778 7c-11.046 0-20 8.954-20 20c0 5.23 1.713 10.436 5 14h30c3.286-3.564 5-8.77 5-14c0-11.046-8.954-20-20-20\"/><circle cx=\"24.778\" cy=\"30\" r=\"4\"/><path d=\"M24.778 20v6m0-14v2m-15 14h2m2-10l1.414 1.414M37.778 28h2m-5-8.586L36.192 18\"/></g>",
		width: 49
	},
	"dashboard-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20a19.94 19.94 0 0 0-5.845-14.13A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.845 9.87A19.94 19.94 0 0 0 4 24c0 11.046 8.954 20 20 20M4 24h4M9.845 9.87l3.13 3.13M24 4v4m20 16h-4M38.155 9.87L35.025 13M24 20v12\"/><path d=\"M39.852 36.196C36.195 40.942 30.455 44 24 44s-12.195-3.058-15.852-7.804A31.85 31.85 0 0 1 24 32a31.85 31.85 0 0 1 15.852 4.196\"/></g>"
	},
	data: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 11v27c0 3.314-8.954 6-20 6S4 41.314 4 38V11\"/><path d=\"M44 29c0 3.314-8.954 6-20 6S4 32.314 4 29m40-9c0 3.314-8.954 6-20 6S4 23.314 4 20\"/><ellipse cx=\"24\" cy=\"10\" rx=\"20\" ry=\"6\"/></g>"
	},
	"data-all": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><ellipse cx=\"24\" cy=\"11\" rx=\"20\" ry=\"6\"/><path d=\"M10.77 15.5C6.62 16.6 4 18.208 4 20c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5c-3.526.933-8.158 1.5-13.23 1.5s-9.703-.567-13.23-1.5\"/><path d=\"M10.77 24.5C6.62 25.6 4 27.208 4 29c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5c-3.526.933-8.158 1.5-13.23 1.5s-9.703-.567-13.23-1.5\"/><path d=\"M10.77 33.5C6.62 34.6 4 36.208 4 38c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5c-3.526.934-8.158 1.5-13.23 1.5s-9.703-.566-13.23-1.5\"/></g>"
	},
	"data-arrival": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 42h36V6H30q-1.986 4.738-6 4.738T18 6H6z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"m15 24l6 6l12-12\"/></g>"
	},
	"data-display": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M22 8v12c0 2.21-4.03 4-9 4s-9-1.79-9-4V8\"/><path d=\"M22 14c0 2.21-4.03 4-9 4s-9-1.79-9-4m18-6c0 2.21-4.03 4-9 4s-9-1.79-9-4s4.03-4 9-4s9 1.79 9 4m10-2h6a4 4 0 0 1 4 4v6M16 42h-6a4 4 0 0 1-4-4v-6m29 6v6m6 0H29m15-6V26H26v12z\"/></g>"
	},
	"data-file": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 44V4h23l9 10.5V44z\"/><path d=\"M15 28h6v7h-6zm-1 7h20M21 23h6v12h-6zm6-5h6v17h-6z\"/></g>"
	},
	"data-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><ellipse cx=\"24\" cy=\"11\" rx=\"20\" ry=\"6\"/><path d=\"M10.77 15.5C6.62 16.6 4 18.208 4 20c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5\"/><path d=\"M10.77 24.5C6.62 25.6 4 27.208 4 29c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5\"/><path d=\"M10.77 33.5C6.62 34.6 4 36.208 4 38c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5c-3.526.934-8.158 1.5-13.23 1.5s-9.703-.566-13.23-1.5\"/></g>"
	},
	"data-lock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 28v4h-8v-4a4 4 0 0 1 8 0m-13 4h18v12H26zm6-26h6a4 4 0 0 1 4 4v6M16 42h-6a4 4 0 0 1-4-4v-6M22 8v12c0 2.21-4.03 4-9 4s-9-1.79-9-4V8\"/><path d=\"M22 14c0 2.21-4.03 4-9 4s-9-1.79-9-4m18-6c0 2.21-4.03 4-9 4s-9-1.79-9-4s4.03-4 9-4s9 1.79 9 4\"/></g>"
	},
	"data-null": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><ellipse cx=\"24\" cy=\"11\" rx=\"20\" ry=\"6\"/><path d=\"M10.77 15.5C6.62 16.6 4 18.208 4 20c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5\"/><path d=\"M10.77 24.5C6.62 25.6 4 27.208 4 29c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5\"/><path d=\"M10.77 33.5C6.62 34.6 4 36.208 4 38c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5\"/></g>"
	},
	"data-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><ellipse cx=\"24\" cy=\"11\" rx=\"20\" ry=\"6\"/><path d=\"M10.77 15.5C6.62 16.6 4 18.208 4 20c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5\"/><path d=\"M10.77 24.5C6.62 25.6 4 27.208 4 29c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5\"/><path d=\"M10.77 33.5C6.62 34.6 4 36.208 4 38c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5\"/></g>"
	},
	"data-screen": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"30\" x=\"4\" y=\"6\" rx=\"3\"/><path d=\"M24 36v7m8-29L16 28m-6 15h28\"/><circle cx=\"15\" cy=\"17\" r=\"3\"/><circle cx=\"33\" cy=\"25\" r=\"3\"/></g>"
	},
	"data-server": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3\"/><path d=\"M4 32h40\"/><path stroke-linejoin=\"round\" d=\"M10 38h1m15 0h12m6-1V27M4 37V27\"/></g>"
	},
	"data-sheet": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"32\" x=\"4\" y=\"8\" rx=\"2\"/><path d=\"M32 25v7m-8-16v16m-8-12v12\"/></g>"
	},
	"data-switching": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M22 8v12c0 2.21-4.03 4-9 4s-9-1.79-9-4V8\"/><path d=\"M22 14c0 2.21-4.03 4-9 4s-9-1.79-9-4m18-6c0 2.21-4.03 4-9 4s-9-1.79-9-4s4.03-4 9-4s9 1.79 9 4m22 20v12c0 2.21-4.03 4-9 4s-9-1.79-9-4V28\"/><path d=\"M44 34c0 2.21-4.03 4-9 4s-9-1.79-9-4m18-6c0 2.21-4.03 4-9 4s-9-1.79-9-4s4.03-4 9-4s9 1.79 9 4M32 6h6a4 4 0 0 1 4 4v6M16 42h-6a4 4 0 0 1-4-4v-6\"/></g>"
	},
	"data-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10.77 33.5C6.62 34.6 4 36.208 4 38c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5\"/><ellipse cx=\"24\" cy=\"11\" rx=\"20\" ry=\"6\"/><path d=\"M10.77 24.5C6.62 25.6 4 27.208 4 29c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5\"/><path d=\"M10.77 15.5C6.62 16.6 4 18.208 4 20c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5\"/><path d=\"M10.77 24.5C6.62 25.6 4 27.208 4 29c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5c-3.526.933-8.158 1.5-13.23 1.5s-9.703-.567-13.23-1.5\"/></g>"
	},
	"data-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><ellipse cx=\"24\" cy=\"11\" rx=\"20\" ry=\"6\"/><path d=\"M10.77 15.5C6.62 16.6 4 18.208 4 20c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5c-3.526.933-8.158 1.5-13.23 1.5s-9.703-.567-13.23-1.5\"/><path d=\"M10.77 24.5C6.62 25.6 4 27.208 4 29c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5\"/><path d=\"M10.77 33.5C6.62 34.6 4 36.208 4 38c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5\"/></g>"
	},
	"data-user": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M22 8v12c0 2.21-4.03 4-9 4s-9-1.79-9-4V8\"/><path d=\"M22 14c0 2.21-4.03 4-9 4s-9-1.79-9-4m18-6c0 2.21-4.03 4-9 4s-9-1.79-9-4s4.03-4 9-4s9 1.79 9 4m10-2h6a4 4 0 0 1 4 4v6M16 42h-6a4 4 0 0 1-4-4v-6\"/><circle cx=\"35\" cy=\"29\" r=\"5\"/><path d=\"M44 44H26a9 9 0 1 1 18 0\"/></g>"
	},
	"database-alert": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5\"/><path d=\"M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68M34 26v4m0 5v1\"/></g>"
	},
	"database-code": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68\"/><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10\"/><path d=\"m37 29l2 2l-2 2m-6 0l-2-2l2-2\"/></g>"
	},
	"database-config": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68\"/><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10m-10-4v4m3.464-2L34 31m3.464 2L34 31m0 4v-4m-3.464 2L34 31m-3.464-2L34 31\"/></g>"
	},
	"database-download": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10\"/><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68M34 26v10m0 0l4-4m-4 4l-4-4\"/></g>"
	},
	"database-enter": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10\"/><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68M39 31l-4-4m4 4l-4 4m4-4H29\"/></g>"
	},
	"database-fail": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10\"/><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68M37 34l-3-3m0 0l3-3m-3 3l-3-3m3 3l-3 3\"/></g>"
	},
	"database-first": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68\"/><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10\"/><path d=\"M34 35v-8l-2 2m2 6h2m-2 0h-2\"/></g>"
	},
	"database-forbid": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5\"/><path d=\"M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68M37 28l-6 6\"/></g>"
	},
	"database-lock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10\"/><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68M39 31a5 5 0 0 1-10 0zm-5-5a3 3 0 0 1 3 3v2h-6v-2a3 3 0 0 1 3-3\"/></g>"
	},
	"database-network": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10\"/><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68M34 41s-3.5-5.862-3.5-10c0-4.137 3.5-10 3.5-10m0 20s3.5-5.862 3.5-10c0-4.137-3.5-10-3.5-10m10 10H24\"/></g>"
	},
	"database-network-point": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 36v-6m-4 10H6m22 0h14m-14 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m9-23c0 7.18-5.82 13-13 13s-13-5.82-13-13m26 0c0-7.18-5.82-13-13-13S11 9.82 11 17m26 0H11\"/><path d=\"M29 17c0 7.18-2.239 13-5 13s-5-5.82-5-13s2.239-13 5-13s5 5.82 5 13m8 0H11\"/></g>"
	},
	"database-point": {
		body: "<defs><path id=\"ipODatabasePoint0\" d=\"M39 9c0 2.761-6.716 5-15 5S9 11.761 9 9s6.716-5 15-5s15 2.239 15 5\"/><path id=\"ipODatabasePoint1\" stroke=\"currentColor\" d=\"M39 9c0 2.761-6.716 5-15 5S9 11.761 9 9s6.716-5 15-5s15 2.239 15 5\"/></defs><g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 36v-6m-4 10H6m22 0h14m-14 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0M39 9v16c0 2.761-6.716 5-15 5S9 27.761 9 25V9\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M39 17c0 2.761-6.716 5-15 5S9 19.761 9 17\"/><use href=\"#ipODatabasePoint0\"/><use href=\"#ipODatabasePoint0\"/><use href=\"#ipODatabasePoint1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><use href=\"#ipODatabasePoint1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/></g>"
	},
	"database-position": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68\"/><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10\"/></g>"
	},
	"database-power": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10\"/><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68M34 26l-3 4l6 2l-3 4\"/></g>"
	},
	"database-proportion": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10\"/><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68M37 28l-6 6m0-6l1-1m5 8l1-1\"/></g>"
	},
	"database-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5\"/><path d=\"M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68m10.27 9.508L41 38m-3-7a4 4 0 0 1-1.172 2.828A4 4 0 1 1 38 31m6 0c0 5.523-4.477 10-10 10\"/></g>"
	},
	"database-setting": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5\"/><path d=\"M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68M34 27l3.464 2v4L34 35l-3.464-2v-4z\"/></g>"
	},
	"database-success": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10\"/><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68M38.5 29L33 34.5l-3-3\"/></g>"
	},
	"database-sync": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10\"/><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68M38 31a4 4 0 0 1-4 4m-4-4a4 4 0 0 1 4-4\"/></g>"
	},
	"database-time": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.98 9.98 0 0 1 34 21c5.523 0 10 4.477 10 10\"/><path d=\"M34 12v9a9.98 9.98 0 0 0-7.442 3.32A9.96 9.96 0 0 0 24 31q.002.87.144 1.698a10.01 10.01 0 0 0 4.93 7.007C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12\"/><path d=\"M34 12c0 2.761-6.716 5-15 5S4 14.761 4 12s6.716-5 15-5s15 2.239 15 5M4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68M38 31h-4v-4\"/></g>"
	},
	"date-comes-back": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M36 8H9a3 3 0 0 0-3 3v28a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V18\"/><path d=\"m32.243 12.485l4.242-4.242L32.243 4M24 17v17m8-10v10M16 24v10\"/></g>"
	},
	"deadline-sort": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M6 5v25.004h36V5M30 37l-6 6l-6-6m6-7v13\"/><path d=\"M18.344 20.658L29.658 9.344m-11.314-.001l11.313 11.314\"/></g>"
	},
	"death-star": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path stroke-linecap=\"round\" d=\"M5 25h39\"/><circle cx=\"19\" cy=\"15\" r=\"4\"/><path stroke-linecap=\"round\" d=\"M31 31h12m-9-14h8M25 37h14\"/><path d=\"M40 11.998A19.9 19.9 0 0 1 44 24c0 7.808-4.475 14.572-11 17.865M4.4 20c-.262 1.292-.4 2.63-.4 4c0 1.727.219 3.402.63 5\"/></g>"
	},
	deeplink: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M21 34.993v5.978c0 .569-.423 1.029-.944 1.029H4.944C4.423 42 4 41.54 4 40.971V7.03C4 6.46 4.423 6 4.944 6h15.112c.521 0 .944.46.944 1.029v5.978m6 0V7.03c0-.57.423-1.03.944-1.03h15.112c.521 0 .944.46.944 1.029V40.97c0 .569-.423 1.029-.944 1.029H27.944c-.521 0-.944-.46-.944-1.029v-5.978\"/><path fill=\"currentColor\" d=\"M12.5 38a2 2 0 1 0 0-4a2 2 0 0 0 0 4m23 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M16 23.5h16\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m27.223 28.273l1.591-1.591l3.182-3.182l-3.182-3.182l-1.59-1.591\"/></g>"
	},
	deer: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M36 27c0 7.217-5.373 17-12 17s-12-9.783-12-17c0-7.216 1.5-11 12-11s12 3.784 12 11Z\"/><ellipse stroke=\"currentColor\" stroke-width=\"4\" rx=\"5\" ry=\"3.5\" transform=\"scale(1 -1)rotate(45 40.625 38.327)\"/><ellipse cx=\"9\" cy=\"17.5\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"5\" ry=\"3.5\" transform=\"rotate(45 9 17.5)\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M12 4c0 6.627 5.373 12 12 12s12-5.373 12-12\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M18 7c0 4.97 2.686 9 6 9s6-4.03 6-9\"/><circle cx=\"20\" cy=\"26\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"34\" r=\"2\" fill=\"currentColor\"/><circle cx=\"28\" cy=\"26\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"degree-hat": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M2 17.4L23.022 9l21.022 8.4l-21.022 8.4z\"/><path stroke-linecap=\"round\" d=\"M44.044 17.51v9.223m-32.488-4.908v12.442S16.366 39 23.022 39c6.657 0 11.467-4.733 11.467-4.733V21.825\"/></g>"
	},
	"delete": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M9 10v34h30V10z\"/><path stroke-linecap=\"round\" d=\"M20 20v13m8-13v13M4 10h40\"/><path d=\"m16 10l3.289-6h9.488L32 10z\"/></g>"
	},
	"delete-five": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M8 11h32M18 5h12\"/><path d=\"M12 17h24v23a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3z\"/><path stroke-linecap=\"round\" d=\"m20 25l8 8m0-8l-8 8\"/></g>"
	},
	"delete-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M8 11h32M18 5h12\"/><path d=\"M12 17h24v23a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3z\"/></g>"
	},
	"delete-key": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18.424 10.538A2 2 0 0 1 19.788 10H42a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H19.788a2 2 0 0 1-1.364-.538L4 24zM36 19L26 29m0-10l10 10\"/>"
	},
	"delete-mode": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"4\" d=\"m24.003 4l5.27 5.27h9.457v9.456l5.27 5.27l-5.27 5.278v9.456h-9.456L24.004 44l-5.278-5.27H9.27v-9.456L4 23.997l5.27-5.27V9.27h9.456zM17 24h14\"/>"
	},
	"delete-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m15 12l1.2-7h15.6l1.2 7\"/><path stroke-linecap=\"round\" d=\"M6 12h36\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m37 12l-2 31H13l-2-31z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M19 35h10\"/></g>"
	},
	"delete-themes": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M8 15h32l-3 29H11z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M20.002 25.002v10m8-10.002v9.997\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 15L28.324 3L36 15\"/></g>"
	},
	"delete-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m17 31l14-14m-12 2l-2-2m14 14l-2-2\"/></g>"
	},
	"delete-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 11L4 24l10 13h30V11zm7 8l10 10m0-10L21 29\"/>"
	},
	delivery: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m20 33l6 2s15-3 17-3s2 2 0 4s-9 8-15 8s-10-3-14-3H4\"/><path d=\"M4 29c2-2 6-5 10-5s13.5 4 15 6s-3 5-3 5M16 18v-8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16\"/><path d=\"M25 8h10v9H25z\"/></g>"
	},
	deposit: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 16v28h24V16\"/><path d=\"m19 20l5 6l5-6M18 32h12m-12-6h12m-6 0v12M14 10h20m2 8h6V4H6v14h6\"/></g>"
	},
	descend: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m11.549 16.625l1.464-5.464s-4.794 1.152-7.1 2.857c-2.308 1.706-2.653 5.399.074 6.973s38.186 18.945 38.186 18.945l-2.768-8.794zM20 35l6 3\"/><path d=\"M29 25L26 9l-4-2l-3 13\"/></g>"
	},
	"desk-lamp": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M8 24.596C8 25.37 8.629 26 9.404 26h29.192C39.37 26 40 25.371 40 24.596V20c0-8.837-7.163-16-16-16S8 11.163 8 20z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 42V26m-9 6v-6m18 16H15\"/></g>"
	},
	"desk-lamp-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M6 40.999h36m-3-22v22m-12-27l12 10\"/><path d=\"M26.34 14.577a4.4 4.4 0 0 0 .567-.794c1.182-2.115.45-4.982-1.6-6.204c-2.048-1.22-4.819-.44-6.003 1.673c-.187.334-.29.595-.384.904c-3.576-.276-7.007 1.475-8.92 4.895L26.694 25c1.913-3.42 1.666-7.364-.354-10.423Z\"/></g>"
	},
	detection: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m6.45 34.85l3.99-3.348l.513-5.87l7.98-6.696l8.778-7.365l3.192-2.679a7.292 7.292 0 1 1 9.374 11.172l-3.192 2.678l-8.778 7.365l-7.98 6.696l-5.867-.51l-3.987 3.345a3.13 3.13 0 0 1-4.408-.386a3.125 3.125 0 0 1 .385-4.403Z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"m23.437 9.718l14.77 17.603M18.576 29l5.726-5\"/></g>"
	},
	devices: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M23 43h20V5H14v10\"/><path d=\"M5 15h18v28H5z\"/><path stroke-linecap=\"round\" d=\"M13 37h2m13 0h2\"/></g>"
	},
	diamond: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10.636 5h26.728L45 18.3L24 43L3 18.3z\" clip-rule=\"evenodd\"/><path d=\"M10.636 5L24 43L37.364 5M3 18.3h42\"/><path d=\"M15.41 18.3L24 5l8.591 13.3\"/></g>"
	},
	"diamond-necklace": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M17 32.41L24 29l7 3.41v7.5L24 44l-7-4.09zM8 4c.455 8.333 6 25 16 25S40 12.784 40 4\"/>"
	},
	"diamond-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"M5.939 13.934L23.036 4.53a2 2 0 0 1 1.928 0l17.097 9.404a2 2 0 0 1 .683 2.888l-17.098 24.79a2 2 0 0 1-3.292 0L5.256 16.823a2 2 0 0 1 .683-2.888Z\"/>"
	},
	"diamond-ring": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"25\" cy=\"29\" r=\"15\"/><path d=\"m18 8l3-4h8.054L32 8l-7 6z\"/></g>"
	},
	"diamond-three": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"M5.414 22.586L22.586 5.414a2 2 0 0 1 2.828 0l17.172 17.172a2 2 0 0 1 0 2.828L25.414 42.586a2 2 0 0 1-2.828 0L5.414 25.414a2 2 0 0 1 0-2.828Z\"/>"
	},
	"diamond-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"m8.923 22.788l13.486-17.7a2 2 0 0 1 3.182 0l13.486 17.7a2 2 0 0 1 0 2.424l-13.486 17.7a2 2 0 0 1-3.182 0l-13.486-17.7a2 2 0 0 1 0-2.424Z\"/>"
	},
	diamonds: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 8h24l8 10l-20 24L4 18zM4 18h40M24 42l-8-24m8 24l8-24\"/><path d=\"m8 13l-4 5l20 24l20-24l-4-5\"/></g>"
	},
	dianziqian: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m33 8l-9 5l10 6v10.214L14 18v11l20 12l9-5.893V13.893z\"/><path d=\"m24 35l-9 6l-10-6V14l10-6l9 5\"/></g>"
	},
	"diapers-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 6H6v18c0 4.5 2.5 18.5 18 18.5S42 28 42 24zM6 14h10m16 0h10\"/><path d=\"M42 24c-10 0-17 4.8-17 18M6 24c10 0 17 4.8 17 18\"/></g>"
	},
	"difference-set": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 40V19a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2M42 8v21a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V19a2 2 0 0 0-2-2H19a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2\"/>"
	},
	"digital-watches": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"22\" height=\"22\" x=\"13\" y=\"13\" rx=\"3\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M29 35v7a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-7m0-22V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7m6 8h2m-18 3h2m6 0h2\"/></g>"
	},
	direction: {
		body: "<g fill=\"none\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"3\"/><path fill=\"currentColor\" d=\"m23.293 10.565l-3.243 3.242c-.63.63-.183 1.708.707 1.708h6.486c.89 0 1.337-1.078.707-1.708l-3.243-3.242a1 1 0 0 0-1.414 0M10.565 24.707l3.242 3.243c.63.63 1.708.183 1.708-.707v-6.486c0-.89-1.078-1.337-1.708-.707l-3.242 3.243a1 1 0 0 0 0 1.414m14.142 12.728l3.243-3.242c.63-.63.183-1.708-.707-1.708h-6.486c-.89 0-1.337 1.078-.707 1.708l3.243 3.242a1 1 0 0 0 1.414 0m12.728-14.142l-3.242-3.243c-.63-.63-1.708-.183-1.708.707v6.486c0 .89 1.078 1.337 1.708.707l3.242-3.243a1 1 0 0 0 0-1.414\"/></g>"
	},
	"direction-adjustment": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m20 8l4-4m0 0l4 4m-4-4v12m-4 24l4 4m0 0l4-4m-4 4V32m16-12l4 4m0 0l-4 4m4-4H32M8 20l-4 4m0 0l4 4m-4-4h12\"/><circle cx=\"24\" cy=\"24\" r=\"2\"/></g>"
	},
	"direction-adjustment-three": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m18 10l6-6m0 0l6 6m-6-6v20m0 0v20m0-20h20m-20 0H4m14 14l6 6m0 0l6-6m8-20l6 6m0 0l-6 6M10 18l-6 6m0 0l6 6\"/>"
	},
	"direction-adjustment-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m18 10l6-6m0 0l6 6m-6-6v10m-6 24l6 6m0 0l6-6m-6 6V34m14-16l6 6m0 0l-6 6m6-6H34m-24-6l-6 6m0 0l6 6m-6-6h10\"/><circle cx=\"24\" cy=\"24\" r=\"4\"/></g>"
	},
	"disabaled-web": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M25 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v12.059\"/><circle cx=\"38\" cy=\"35\" r=\"6\" stroke=\"currentColor\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m34 31l8 8\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 10 14)\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 16 14)\"/></g>"
	},
	"disabled-computer": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23 5.998H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-7M24 34v8\"/><circle cx=\"36\" cy=\"12\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m32 8l8 8M14 41.998h20\"/></g>"
	},
	"disabled-laptop": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23 8.999H11a3 3 0 0 0-3 3v21h32v-7\"/><path stroke-linejoin=\"round\" d=\"M4 32.999h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z\"/><circle cx=\"36\" cy=\"13\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m32 9l8 8\"/></g>"
	},
	"disabled-picture": {
		body: "<g fill=\"none\"><path fill=\"currentColor\" d=\"M44 23.999a2 2 0 0 0-4 0zm-20-16a2 2 0 1 0 0-4zm15 32H9v4h30zm-31-1v-30H4v30zm32-15v15h4v-15zm-31-16h15v-4H9zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1zm-31-35a1 1 0 0 1 1-1v-4a5 5 0 0 0-5 5z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 35l10.693-9.802a2 2 0 0 1 2.653-.044L32 36m-4-5l4.773-4.773a2 2 0 0 1 2.615-.186L42 31\"/><circle cx=\"36\" cy=\"12\" r=\"6\" stroke=\"currentColor\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m32 8l8 8\"/></g>"
	},
	"disappointed-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m33 25l-4-2m-11 0l-4 2m17 10s-2-4-7-4s-7 4-7 4\"/></g>"
	},
	"discovery-index": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M16 6H8a2 2 0 0 0-2 2v8m10 26H8a2 2 0 0 1-2-2v-8m26 10h8a2 2 0 0 0 2-2v-8M32 6h8a2 2 0 0 1 2 2v8\"/><path d=\"M19 18h10v12H19z\"/><path stroke-linecap=\"round\" d=\"M24 18v-6m0 24v-6\"/></g>"
	},
	disk: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z\"/><path stroke-linejoin=\"round\" d=\"M34 4v18H15V4z\"/><path stroke-linecap=\"round\" d=\"M29 11v4M11.997 4h25.001\"/></g>"
	},
	"disk-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M12.778 17.012c0-.559.453-1.012 1.012-1.012h21.976c.559 0 1.012.453 1.012 1.012V32c0 6.627-5.373 12-12 12v0c-6.628 0-12-5.373-12-12z\"/><path d=\"M15.778 4h18v12h-18z\"/><path stroke-linecap=\"round\" d=\"M21.778 9v2m6-2v2m-15 21h24\"/></g>",
		width: 49
	},
	"disk-two": {
		body: "<g fill=\"none\"><rect width=\"32\" height=\"22\" x=\"4\" y=\"13\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 13h10v22H4zm32 6h8v10h-8\"/><circle cx=\"30\" cy=\"21\" r=\"2\" fill=\"currentColor\"/><circle cx=\"30\" cy=\"27\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	dislike: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m24 31l-3-5l7-6l-9-5l1-5.8C18.5 8.432 16.8 8 15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23c7-2 20-12 20-23c0-6.075-4.925-11-11-11c-1.8 0-3.5.433-5 1.2\"/>"
	},
	"dislike-two": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8\"/><path d=\"m28 20l-8 8z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m28 20l-8 8\"/><path d=\"m20 20l8 8z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m20 20l8 8\"/></g>"
	},
	display: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"20\" x=\"6\" y=\"6\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M14 13h8m-8 6h20M8 44l4.889-6h21.778L40 44M24 26v18\"/></g>"
	},
	distortion: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 19v21h13M4 19V8h13M4 19s9-6 20 0s20 0 20 0m0 0V8H17m27 11v21H17M4 29s9-6 20 0s20 0 20 0M17 8s6 8 0 16s0 16 0 16M31 8s6 8 0 16s0 16 0 16\"/>"
	},
	"distraught-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 29c5 0 7 4 7 4H17s2-4 7-4m8-12l-3 3l3 3m-16-6l3 3l-3 3\"/></g>"
	},
	"distribute-horizontal-spacing": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M8 43V5m32 38V5\"/><path stroke-linejoin=\"round\" d=\"M20 14h8v20h-8z\"/></g>"
	},
	"distribute-horizontally": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M30 10v28H18V10z\"/><path stroke-linecap=\"round\" d=\"M40 6v36M8 6v36\"/></g>"
	},
	"distribute-vertical-spacing": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M5 8h38M5 40h38\"/><path stroke-linejoin=\"round\" d=\"M14 20h20v8H14z\"/></g>"
	},
	"distribute-vertically": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M38 30H10V18h28z\"/><path stroke-linecap=\"round\" d=\"M42 40H6M42 8H6\"/></g>"
	},
	"dividing-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 24h38M21 38h6m10 0h6M21 10h6M5 38h6M5 10h6m26 0h6\"/>"
	},
	"dividing-line-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 24h40M8 10h4m8 0h8m8 0h4M8 38h4m8 0h8m8 0h4\"/>"
	},
	diving: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M31.8 6H10.2C7.88 6 6 7.79 6 10v8h11c0-2 1.5-4 4-4s4 2 4 4h11v-8c0-2.21-1.88-4-4.2-4M16 24c0 1.491 1.25 6 5 6s5-4.509 5-6M42 6v32c0 4-3 6-6 6s-6-2-6-6v-2\"/>"
	},
	"diving-bottle": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-miterlimit=\"2\" d=\"m4 40l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 40M14 11V4m17 7V4M21 8V4m17 4V4\"/><path d=\"M12 6h8m9 0h8\"/><rect width=\"8\" height=\"24\" x=\"10\" y=\"11\" rx=\"4\"/><rect width=\"8\" height=\"24\" x=\"27\" y=\"11\" rx=\"4\"/><path d=\"M27 15a4 4 0 0 1 8 0v4h-8zm-17 0a4 4 0 0 1 8 0v4h-8z\"/></g>"
	},
	"diving-suit": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M17 24h-2.91C8.52 24 4 19.52 4 14S8.52 4 14.09 4L20 9l5.91-5C31.48 4 36 8.48 36 14s-4.52 10-10.09 10H23m3 12H14v8h12z\"/><path d=\"M26 40h10c4.42 0 8-3.58 8-8V14h-8M21.22 30h-2.44c-1.46 0-2.57-1.31-2.33-2.74l1.22-7.29A2.354 2.354 0 0 1 20 18c1.15 0 2.14.83 2.33 1.97l1.22 7.29c.23 1.43-.88 2.74-2.33 2.74\"/></g>"
	},
	division: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"11\" r=\"5\"/><circle cx=\"24\" cy=\"37\" r=\"5\"/><path d=\"M44 24H4\"/></g>"
	},
	"dizzy-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m19 18l-4 4m0-4l4 4m14-4l-4 4m0-4l4 4\"/><rect width=\"8\" height=\"8\" x=\"20\" y=\"28\" stroke-linecap=\"round\" rx=\"4\"/></g>"
	},
	"doc-add": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M17 30h14m-14 6h7m-5-19h10m-5 5V12\"/>"
	},
	"doc-detail": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 4H11a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M17 30h14m-14 6h7\"/><path d=\"M17 12h14v10H17z\"/></g>"
	},
	"doc-fail": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M17 30h14m-14 6h7m-4-15l8-8m0 8l-8-8\"/>"
	},
	"doc-search": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2\"/><path d=\"M28 16c0 1.38-.56 2.63-1.465 3.535A5 5 0 1 1 28 16\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m30 23l-3.465-3.465m0 0a5 5 0 1 0-7.071-7.07a5 5 0 0 0 7.072 7.07M17 30h14m-14 6h7\"/></g>"
	},
	"doc-search-two": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 27V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h11m-4-32h14m-14 8h14m-14 8h6\"/><path d=\"M37 37c0 1.38-.56 2.63-1.465 3.535A5 5 0 1 1 37 37\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m39 44l-3.465-3.465m0 0a5 5 0 1 0-7.071-7.07a5 5 0 0 0 7.072 7.07\"/></g>"
	},
	"doc-success": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M38 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M17 30h14m-14 6h7\"/><path d=\"m30 13l-8 8l-4-4\"/></g>"
	},
	"document-folder": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M32 6H22v36h10zm10 0H32v36h10zM10 6l8 1l-3.5 35L6 41z\"/><path stroke-linecap=\"round\" d=\"M37 18v-3m-10 3v-3\"/></g>"
	},
	dog: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m17 10l-2-5c-2.167.833-6.8 5.8-6 13m22-8l2-5c2.167.833 6.8 5.8 6 13\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M42 28.5C42 38.165 33.941 43 24 43S6 38.165 6 28.5S14.059 9 24 9s18 9.835 18 19.5Z\"/><circle cx=\"20\" cy=\"17\" r=\"2\" fill=\"currentColor\"/><circle cx=\"28\" cy=\"17\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 26c0 1.657.5 5.5-3 5.5a3 3 0 0 1-3-3\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24.025 26c0 1.657-.5 5.5 3 5.5a3 3 0 0 0 3-3\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M26 25.75c0 .69-2 1.75-2 1.75s-2-1.06-2-1.75s.5-1.25 2-1.25s2 .56 2 1.25Z\"/></g>"
	},
	"dog-zodiac": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 44V19c0-5 3.6-9.4 14-15v9h7v6\"/><path d=\"M16 25c4.013 1.78 11.354 5.124 13 15c.5 3 6 7 12 0c1.994-2.136 2.321-5.651-3.236-7.432\"/><path d=\"M28 36c-3.333-.377-11 1-11 8\"/></g>"
	},
	dollar: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 2v44M35 6H20a9 9 0 1 0 0 18m-7 18h15a9 9 0 1 0 0-18h-8\"/>"
	},
	dolphin: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 7C14.23 1.613 9.686 8.632 8 11c-5.664 1.218-2.854 3.324-1 4c1.214.406 4.146 1.323 6 2c.405 3.248 1.663 6.154 2 7c0-.812 1.326-3.647 2-5c8.092 3.248 13.797 11.602 17 16c-1.214 2.436-2.494 6.308-3 8l6-3l7 2c0-3.248-4.145-6.647-6-8c.81-12.992-5.29-20.8-9-23c.405-1.624 1.157-4.323 2-5c-3.237-1.624-5.82.154-7 1\"/><circle cx=\"16\" cy=\"11\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	dome: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 43h40\"/><path d=\"M5 24s9-1 19-1s19 1 19 1M6 18s9.053-4 18-4s18 4 18 4M5 30s9 2 19 2s19-2 19-2\"/><path d=\"M24 6C12.954 6 4 14.954 4 26c0 7.809 3.475 13.706 10 17h20c6.525-3.294 10-9.191 10-17c0-11.046-8.954-20-20-20Z\"/><path d=\"M24 6c-3.866 0-7 8.954-7 20c0 7.177 1.012 13.472 3 17h8c1.988-3.528 3-9.823 3-17c0-11.046-3.134-20-7-20Z\"/></g>"
	},
	"dome-light": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24.778 8c-11.046 0-20 8.954-20 20h40c0-11.046-8.954-20-20-20m0-4v4m0 30c-5.523 0-10-4.477-10-10h20c0 5.523-4.477 10-10 10m16.034.977l-2.068-2.954m-27.691.202l-2.55 2.55M34.778 42l-1.147-1.638m-17.72.112l-1.414 1.414\"/>",
		width: 49
	},
	"done-all": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m14 24l1.25 1.25M44 14L24 34l-1.25-1.25M4 24l10 10l20-20\"/>"
	},
	dongchedi: {
		body: "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M38.16 33.56c-4.316-1.52-8.95-2.315-13.718-2.315c-5.06 0-9.967.895-14.502 2.6a15.5 15.5 0 0 0 1.557 3.142L6.455 40.24A21.7 21.7 0 0 1 3 28.45C3 16.619 12.385 7 24 7s21 9.62 21 21.449a21.7 21.7 0 0 1-3.753 12.24l-4.959-3.378a15.6 15.6 0 0 0 1.873-3.751m.44-8.676C37.034 18.062 31.08 13 24 13c-7.172 0-13.188 5.192-14.657 12.15c-.237 1.33.123 2.486 1.11 2.182a47.5 47.5 0 0 1 13.989-2.087c4.657 0 9.212.665 13.532 1.949c.854.253.981-.817.641-2.226l-.016-.084\" clip-rule=\"evenodd\"/>"
	},
	"door-handle": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"26\" height=\"40\" x=\"6\" y=\"4\" rx=\"2\"/><path d=\"M14 34h10m18-14v-6H23a5 5 0 1 0 0 6z\"/></g>"
	},
	dot: {
		body: "<path fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"4\" d=\"M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z\"/>"
	},
	"double-bed": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 12a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v11H8zM6 35v4m36-4v4\"/><path d=\"M20 18h-6a3 3 0 0 0-3 3v2h12v-2a3 3 0 0 0-3-3m14 0h-6a3 3 0 0 0-3 3v2h12v-2a3 3 0 0 0-3-3M4 26a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z\"/></g>"
	},
	"double-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 12L24 24L12 12m24 12L24 36L12 24\"/>"
	},
	"double-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 36L12 24l12-12m12 24L24 24l12-12\"/>"
	},
	"double-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m12 12l12 12l-12 12m12-24l12 12l-12 12\"/>"
	},
	"double-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m12 24l12-12l12 12M12 36l12-12l12 12\"/>"
	},
	doughnut: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"19\"/><circle cx=\"24\" cy=\"24\" r=\"7\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 28s3.389-2.958 6-1c4 3 6 1 6 1m11 1c.667-1 4-4.286 7-3c4 1.714 7 0 7-1\"/></g>"
	},
	down: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 18L24 30L12 18\"/>"
	},
	"down-c": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m33 21l-9 9l-9-9\"/></g>"
	},
	"down-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 19L24 31L12 19z\"/>"
	},
	"down-picture": {
		body: "<g fill=\"none\"><path fill=\"currentColor\" d=\"M44 24a2 2 0 1 0-4 0zM24 8a2 2 0 1 0 0-4zm15 32H9v4h30zM8 39V9H4v30zm32-15v15h4V24zM9 8h15V4H9zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1zM8 9a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 35l10.693-9.802a2 2 0 0 1 2.653-.044L32 36m-4-5l4.773-4.773a2 2 0 0 1 2.615-.186L42 31M32 13l5 5l5-5m-5-7v12\"/></g>"
	},
	"down-small": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24.008 35.9V12M36 24L24 36L12 24\"/>"
	},
	"down-square": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M34 19L24 29L14 19\"/></g>"
	},
	"down-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m5 24l19 18l19-18H31V6H17v18z\"/>"
	},
	download: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 24.008V42h36V24\"/><path d=\"m33 23l-9 9l-9-9m8.992-17v26\"/></g>"
	},
	"download-computer": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M26 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-6m-18 9v8m-10 0h20m-2-29l5 5l5-5m-5-7v12\"/>"
	},
	"download-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M24 29L12 17h8V6h8v11h8z\" clip-rule=\"evenodd\"/><path d=\"M42 37H6m28 7H14\"/></g>"
	},
	"download-laptop": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M25 9H11a3 3 0 0 0-3 3v21h32v-8\"/><path d=\"M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z\"/><path stroke-linecap=\"round\" d=\"m31 14l5 5l5-5m-5-7v12\"/></g>"
	},
	"download-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M11.678 20.271C7.275 21.318 4 25.277 4 30c0 5.523 4.477 10 10 10c.947 0 1.864-.132 2.733-.378m19.322-19.351c4.403 1.047 7.677 5.006 7.677 9.729c0 5.523-4.477 10-10 10c-.947 0-1.864-.132-2.732-.378M36 20c0-6.627-5.373-12-12-12s-12 5.373-12 12m5.065 10.119L24 37.076L31.132 30M24 20v13.538\"/>"
	},
	"download-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" d=\"m32 28l-8 8l-8-8m8-8v15.5M16 14h16\"/></g>"
	},
	"download-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40.518 34.316A9.21 9.21 0 0 0 44 24c-1.213-3.83-4.93-5.929-8.947-5.925h-2.321a14.737 14.737 0 1 0-25.31 13.429M24.008 41L24 23m6.364 11.636L24 41l-6.364-6.364\"/>"
	},
	"download-web": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M27 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v13M34 36l5 5l5-5m-5-7v12\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 10 14)\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 16 14)\"/></g>"
	},
	drag: {
		body: "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M19 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8m22-32a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8\" clip-rule=\"evenodd\"/>"
	},
	"dragon-zodiac": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"m34.021 42.494l3.74-3.74a6 6 0 0 0 0-8.485v0a6 6 0 0 0-8.485 0L27.045 32.5m-9.97-7l6.544-6.544a6 6 0 0 0 0-8.486v0a6 6 0 0 0-8.485 0l-7.071 7.071m9.012 7.959L8.77 33.806a6 6 0 0 0 0 8.485v0a6 6 0 0 0 8.485 0l9.766-9.766\"/><path stroke-linejoin=\"round\" d=\"M13 12V4m25 26l5-5\"/></g>"
	},
	dribble: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24a19.94 19.94 0 0 1-5.889 14.173A19.94 19.94 0 0 1 24 44C12.954 44 4 35.046 4 24a19.93 19.93 0 0 1 5.5-13.775A19.94 19.94 0 0 1 24 4a19.94 19.94 0 0 1 14.111 5.827A19.94 19.94 0 0 1 44 24\"/><path d=\"M44 24c-2.918 0-10.968-1.1-18.173 2.063C18 29.5 12.333 34.832 9.863 38.147\"/><path d=\"M16.5 5.454C19.63 8.343 26.46 15.698 29 23s3.48 16.28 4.06 18.835\"/><path d=\"M4.154 21.5c3.778.228 13.779.433 20.179-2.3s11.907-7.76 13.796-9.355M5.5 31.613a20.08 20.08 0 0 0 9 9.991\"/><path d=\"M4 24a19.93 19.93 0 0 1 5.5-13.775M24 4a19.94 19.94 0 0 0-14.5 6.225M32 5.664a20 20 0 0 1 6.111 4.163A19.94 19.94 0 0 1 44 24c0 2.462-.445 4.821-1.26 7M24 44a19.94 19.94 0 0 0 14.111-5.827\"/></g>"
	},
	drink: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M10 16h28\"/><path d=\"M14.153 18.143A2 2 0 0 1 16.148 16h15.704a2 2 0 0 1 1.995 2.142l-1.714 24A2 2 0 0 1 30.138 44H17.862a2 2 0 0 1-1.995-1.858z\"/><path stroke-linecap=\"round\" d=\"M24 10V6a2 2 0 0 1 2-2h3\"/><path d=\"M14.722 11.671A2 2 0 0 1 16.694 10h14.612a2 2 0 0 1 1.973 1.671L34 16H14z\"/></g>"
	},
	drone: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m12 12l7 7m17 17l-7-7m7-17l-7 7M12 36l7-7m0-10h10v10H19zm17 0a7 7 0 1 0-7-7m7 17a7 7 0 1 1-7 7m-17-7a7 7 0 1 0 7 7m-7-17a7 7 0 1 1 7-7\"/>"
	},
	"drone-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M29 18v-2a5 5 0 0 0-5-5v0a5 5 0 0 0-5 5v2m-2 0h14l-2.154 7h-9.692z\"/><path d=\"M5 22h7v7H5zm31 0h7v7h-7z\"/><path stroke-linecap=\"round\" d=\"M16 8H4m26 25l4 7m-16-7l-4 7M44 8H32\"/></g>"
	},
	"drop-down-list": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M40 28L24 40L8 28\"/><path d=\"M8 10h32M8 18h32\"/></g>"
	},
	"drop-shadow-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M24 37a15.95 15.95 0 0 0 11.314-4.686A15.95 15.95 0 0 0 40 21a15.95 15.95 0 0 0-4.686-11.314A15.95 15.95 0 0 0 24 5a15.95 15.95 0 0 0-11.314 4.686A15.95 15.95 0 0 0 8 21a15.95 15.95 0 0 0 4.686 11.314A15.95 15.95 0 0 0 24 37Z\" clip-rule=\"evenodd\"/><path d=\"M39.556 36.556A21.93 21.93 0 0 1 24 43a21.93 21.93 0 0 1-15.557-6.444\"/></g>"
	},
	"drop-shadow-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M27 40a15.95 15.95 0 0 0 11.314-4.686A15.95 15.95 0 0 0 43 24a15.95 15.95 0 0 0-4.686-11.314A15.95 15.95 0 0 0 27 8a15.95 15.95 0 0 0-11.314 4.686A15.95 15.95 0 0 0 11 24a15.95 15.95 0 0 0 4.686 11.314A15.95 15.95 0 0 0 27 40Z\" clip-rule=\"evenodd\"/><path d=\"M11.444 8.444A21.93 21.93 0 0 0 5 24a21.93 21.93 0 0 0 6.444 15.556\"/></g>"
	},
	"drop-shadow-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M21 40a15.95 15.95 0 0 0 11.314-4.686A15.95 15.95 0 0 0 37 24a15.95 15.95 0 0 0-4.686-11.314A15.95 15.95 0 0 0 21 8a15.95 15.95 0 0 0-11.314 4.686A15.95 15.95 0 0 0 5 24a15.95 15.95 0 0 0 4.686 11.314A15.95 15.95 0 0 0 21 40Z\" clip-rule=\"evenodd\"/><path d=\"M36.557 39.556A21.93 21.93 0 0 0 43 24a21.93 21.93 0 0 0-6.443-15.556\"/></g>"
	},
	"drop-shadow-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M24 43a15.95 15.95 0 0 0 11.314-4.686A15.95 15.95 0 0 0 40 27a15.95 15.95 0 0 0-4.686-11.314A15.95 15.95 0 0 0 24 11a15.95 15.95 0 0 0-11.314 4.686A15.95 15.95 0 0 0 8 27a15.95 15.95 0 0 0 4.686 11.314A15.95 15.95 0 0 0 24 43Z\" clip-rule=\"evenodd\"/><path d=\"M39.557 11.444A21.93 21.93 0 0 0 24 5a21.93 21.93 0 0 0-15.556 6.444\"/></g>"
	},
	dropbox: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m24 10l-12 8l12 8l12-8z\"/><path d=\"m24 10l12 8l5-7l-11-7zm0 0l-12 8l-5-7l11-7zm19 12l-7-4l-12 8l7 5zM5 22l7-4l12 8l-7 5z\"/><path stroke-linecap=\"round\" d=\"M36 28v9l-12 7l-12-7v-9\"/></g>"
	},
	drumstick: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m14.15 33.82l-1.413 9.9l-8.486-8.486zm9.9-26.87l-9.9 9.9c-4.686 4.686-4.686 12.284 0 16.97v0c4.687 4.687 12.285 4.687 16.97 0l9.9-9.9\"/><ellipse cx=\"32.535\" cy=\"15.435\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"12\" ry=\"7\" transform=\"rotate(45 32.535 15.435)\"/><circle cx=\"30.061\" cy=\"11.398\" r=\"2\" fill=\"currentColor\" transform=\"rotate(45 30.06 11.398)\"/><circle cx=\"37.132\" cy=\"18.469\" r=\"2\" fill=\"currentColor\" transform=\"rotate(45 37.132 18.47)\"/><circle cx=\"31.475\" cy=\"17.055\" r=\"2\" fill=\"currentColor\" transform=\"rotate(45 31.475 17.055)\"/></g>"
	},
	dubai: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M14 4v40\"/><path d=\"M14.5 6S28 13 32 22s1 22 1 22\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 44h40\"/><path stroke-linecap=\"round\" d=\"M10 15h22m-18 7h8m-8 7h12m-12 7h13\"/></g>"
	},
	duck: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 8c-3.052 4.517-5.987 5.81-8 5c.543 1.833 4.443 4.375 6.927 5.838c1.07.63 1.383 2.065.638 3.059C10.202 23.717 8.315 26.289 8 27C.954 39.79 16.482 44.648 24 44c22.144-1.908 21.355-19.197 18-26c-8.052 13.994-20.481 5.915-20 3s3.792-2.335 5-7C29.013 4.768 16.374.399 12 8\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 31c2.5 3.5 10 7 16 2\"/><circle cx=\"17\" cy=\"12\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"dumbbel-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13 10v28m31-14H4m31-14v28M7 14v20m34-20v20\"/>"
	},
	dumbbell: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 13.6c0-1.436-1.343-2.6-3-2.6s-3 1.164-3 2.6v20.8c0 1.436 1.343 2.6 3 2.6s3-1.164 3-2.6zm26 0c0-1.436-1.343-2.6-3-2.6s-3 1.164-3 2.6v20.8c0 1.436 1.343 2.6 3 2.6s3-1.164 3-2.6zM8 18.667C8 17.194 6.657 16 5 16s-3 1.194-3 2.667v10.666C2 30.806 3.343 32 5 32s3-1.194 3-2.667zm38 0C46 17.194 44.657 16 43 16s-3 1.194-3 2.667v10.666C40 30.806 41.343 32 43 32s3-1.194 3-2.667zM14 27h20v-6H14z\"/>"
	},
	dvi: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 16a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v7.802q0 .198-.039.392l-1.64 8.198A2 2 0 0 1 40.362 34H7.64a2 2 0 0 1-1.962-1.608l-1.64-8.198A2 2 0 0 1 4 23.802zm6 8h6m5-3h2m-2 6h2m5-6h2m-2 6h2m5-6h2m-2 6h2\"/>"
	},
	eagle: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 23c-4.04-7.043 3.624-11.136 8-12c14.541-12.844 26.485-.287 28 8c1.514 8.287 1.158 14.893 2 18c-6.463-8.7-10.877-7.158-12-5c-2.02 4.144-5.314 4.252-7 3c-4.04-3.314-10.476 3.202-13 7c4.847-8.7 5.505-14.273 5-16c-2.02-8.286-8.307-5.416-11-3\"/><circle cx=\"23\" cy=\"16\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	earth: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\" clip-rule=\"evenodd\"/><path d=\"M4 24h40\"/><path d=\"M24 44c4.418 0 8-8.954 8-20S28.418 4 24 4s-8 8.954-8 20s3.582 20 8 20\" clip-rule=\"evenodd\"/><path d=\"M9.858 10.142A19.94 19.94 0 0 0 24 16a19.94 19.94 0 0 0 14.142-5.858m0 27.716A19.94 19.94 0 0 0 24 32a19.94 19.94 0 0 0-14.142 5.858\"/></g>"
	},
	easy: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33 41c-5.48 3.003-10 3-16 1c-6.076-2.026-10-9-10-14c0-2.744 4.114-4.372 5.529-4.85a.69.69 0 0 0 .471-.648V15a3.5 3.5 0 1 1 7 0v-2.5a3.5 3.5 0 1 1 7 0V15a3.5 3.5 0 1 1 7 0V7.5a3.5 3.5 0 0 1 7 0v20.732c0 2.472-.592 4.928-2.038 6.934C37.492 37.205 35.357 39.708 33 41\"/>"
	},
	ecg: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 22h4l4-11l5 26l6-17l4 8l7-13l4 14l2-7h4\"/>"
	},
	edit: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M7 42h36\"/><path d=\"M11 26.72V34h7.317L39 13.308L31.695 6z\"/></g>"
	},
	"edit-movie": {
		body: "<g fill=\"none\"><path d=\"M43 9v30h-9v-8h9V17h-9V9zM5 17V9h9v8zv14h9v8H5z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M43 17V9h-9m9 8v14m0-14h-9M5 17V9h9m-9 8v14m0-14h9M5 31v8h9m-9-8h9m29 0v8h-9m9-8h-9m0-22v8m0-8h-4m4 30v-8m0 8h-4M14 9v8m0-8h4m-4 30v-8m0 8h4m-4-22h4m16 0h-4m4 14h-4m-16 0h4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M24 7v4m0 6v4m0 6v4m0 6v4\"/></g>"
	},
	"edit-name": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"11\" r=\"7\"/><path d=\"M4 41c0-8.837 8.059-16 18-16m9 17l10-10l-4-4l-10 10v4z\"/></g>"
	},
	"edit-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M29 4H9a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V20.005\"/><path d=\"M13 18h8m-8 10h12\"/><path stroke-linejoin=\"round\" d=\"M41 6.001L29.003 17.996\"/></g>"
	},
	"edit-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M42 26v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14\"/><path d=\"M14 26.72V34h7.317L42 13.308L34.695 6z\"/></g>"
	},
	editing: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"13\" cy=\"35\" r=\"7\"/><circle cx=\"35\" cy=\"35\" r=\"7\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m8 6l24 22m8-22L16 28\"/></g>"
	},
	editor: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M40 33v9a2 2 0 0 1-2 2h-6.5M40 16V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h6\"/><path d=\"M16 16h14m-7 28l17-21m-24 1h8\"/></g>"
	},
	eeg: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 16V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v7m0 16v7a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-7M5 24h8.075L20 16l7 16l6.975-8H43\"/>"
	},
	effects: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m24.95 42.36l5.466-11.99l12.689-3.72l-9.767-8.88l.368-13.163l-11.502 6.503l-12.46-4.416l2.657 12.9l-8.069 10.433l13.145 1.47zm11.228-6.306l8 7.964\"/>"
	},
	"efferent-four": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 5H10a2 2 0 0 0-2 2v34a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V24.75M28 5h12v12m-19 7L39 6\"/>"
	},
	"efferent-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V29m0-10L38 7l-12 4\"/><path d=\"M38 7c-5 15-8 18-18 22\"/></g>"
	},
	egg: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M44 24c0 2.633-.508 5.146-1.433 7.448c-.936 2.331-4.129.071-7.346 3.521c-3.216 3.45-.71 6.267-3.204 7.36A19.9 19.9 0 0 1 24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20Z\"/><path stroke-linecap=\"round\" d=\"M20 25s.21 1.21 1 2s2 1 2 1\"/></g>"
	},
	"egg-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M29 22.133C29 30.97 23.627 36 17 36S5 30.97 5 22.133C5 11.163 11.373 4 17 4s12 7.163 12 18.133Z\"/><path d=\"M29 24.068c8.536.634 14 5.554 14 9.932c0 4.69-6.268 10-15.867 10c-6.773 0-10.99-3.436-11.932-8\"/></g>"
	},
	eggplant: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"m35 18l-3.88 12.612c-.08.259-.155.514-.248.768c-.548 1.498-2.99 7.04-9.871 9.62C13 44 4.999 40 5 32.077S13 25 17 22s8-9 8-9\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M39.255 24.488S40.372 19.176 40 16c-.505-4.327-2.5-7.5-5-9s-7.748-2.5-12 0c-4.253 2.5-6.033 5.845-6.033 5.845l8.206-.767a1 1 0 0 1 1.055.72l1.497 5.24a1 1 0 0 0 1.236.688l5.282-1.51a1 1 0 0 1 1.145.468zM36 8l6-2\"/></g>"
	},
	"eiffel-tower": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M21 8c0 11-3.5 25-10 36M27 8c0 11 3.5 25 10 36M4 44h40\"/><path d=\"M14 30h20m-17-9h14M20 8h8m-4-4v4\"/><path stroke-linejoin=\"round\" d=\"M18 44s.813-2.812 2-4c1-1 2-2 4-2s3 1 4 2c1.344 1.344 2 4 2 4\"/></g>"
	},
	"eight-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M24 22a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 11a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/></g>"
	},
	"electric-drill": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M20 9h19.698a4 4 0 0 1 3.99 4.29l-.584 8a4 4 0 0 1-3.99 3.71H20z\"/><path d=\"M30.09 25H39l-4.089 11.244A4.19 4.19 0 0 1 30.977 39c-2.905 0-4.927-2.887-3.934-5.617zM14 12h6v10h-6z\"/><path stroke-linecap=\"round\" d=\"M14 17H4\"/></g>"
	},
	"electric-iron": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5 18.713c0-.394.319-.713.713-.713h13.439C32.322 18 43 28.677 43 41.848v0a.15.15 0 0 1-.152.152H5zM5 18V8h20\"/><circle cx=\"15\" cy=\"27\" r=\"4\"/><path stroke-linecap=\"round\" d=\"M5 36h37\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M29 20c1.333-2 5.4-6.4 9-4c3.5 2.334.5 8-1 10\"/></g>"
	},
	"electric-wave": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M12 25h3l4-11l3 22l5-13l4 6l3-4h3\"/></g>"
	},
	electrocardiogram: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M11 28.132h5.685L21.223 13l3.672 22l4.553-10.382l3.465 3.514H37\"/></g>"
	},
	"electronic-door-lock": {
		body: "<g fill=\"none\"><rect width=\"26\" height=\"40\" x=\"6\" y=\"4\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\"/><rect width=\"24\" height=\"8\" x=\"20\" y=\"30\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\"/><circle cx=\"12\" cy=\"18\" r=\"2\" fill=\"currentColor\"/><circle cx=\"12\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><circle cx=\"19\" cy=\"12\" r=\"2\" fill=\"currentColor\"/><circle cx=\"19\" cy=\"18\" r=\"2\" fill=\"currentColor\"/><circle cx=\"19\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"12\" r=\"2\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"18\" r=\"2\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"24\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"electronic-locks-close": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"24\" height=\"18\" x=\"12\" y=\"20\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M18 20v-6c0-3.682 2.686-6 6-6s6 2.318 6 6v6m-6 8v2M6 18v12m36-12v12\"/></g>"
	},
	"electronic-locks-open": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"24\" height=\"18\" x=\"12\" y=\"20\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M18 20v-6c0-3.682 2.686-6 6-6c1.85 0 3.503.722 4.604 2a5.6 5.6 0 0 1 1.102 2M24 28v2M6 18v12m36-12v12\"/></g>"
	},
	"electronic-pen": {
		body: "<g fill=\"none\"><rect width=\"12\" height=\"38\" x=\"35.193\" y=\"5.322\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"6\" transform=\"rotate(45 35.193 5.322)\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m18 23l8 8M6 43l6-6\"/><rect width=\"4\" height=\"4\" x=\"33.268\" y=\"12.34\" fill=\"currentColor\" rx=\"2\" transform=\"rotate(30 33.268 12.34)\"/></g>"
	},
	elephant: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16.794 12C12.742 11.112 4 12.193 4 21.787V40h5.87v-6.219h16.768V40h5.87V28.895c.698-.592 1.9 4.128 4.191 5.33c1.353.71 2.516 1.172 3.773.889c2.723-.613 4.025-2.399 3.354-6.663c-1.258 1.48-5.03 3.092-5.45 0V15.569c-.419-2.666-2.85-7.907-9.223-7.552h-6.869C19.35 8 14.99 12.015 15.996 17.345c.312 1.655 1.504 4.96 5.707 5.33c1.677.149 4.45-.532 6.127-4.441\"/><circle cx=\"33\" cy=\"19\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	elevator: {
		body: "<g fill=\"none\"><path d=\"M42 41V7H6v34z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 7v34m0-34H4h2v34M42 7h2m-2 34h2m-2 0H6m0 0H4M24 7v34m9-21v8m-3-5l3-3l3 3m-21 5v-8\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m12 25l3 3l3-3\"/></g>"
	},
	"email-block": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M44 35V9H4v28h22\"/><circle cx=\"35\" cy=\"35\" r=\"9\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m37 33l-4 4M4 9l20 13L44 9\"/></g>"
	},
	"email-delect": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24V9H4v30h20\"/><path d=\"m4 9l20 15L44 9M32 31h10l-2 10h-6zm4 0l2-4\"/></g>"
	},
	"email-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M36 15h8v26H4V15h8m12 4V5\"/><path d=\"m30 13l-6 6l-6-6\"/><path d=\"m4 15l20 15l20-15\"/></g>"
	},
	"email-fail": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24V9H4v30h20m16-8l-8 8m0-8l8 8\"/><path d=\"m4 9l20 15L44 9\"/></g>"
	},
	"email-lock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24V9H4v30h20\"/><path d=\"m4 9l20 15L44 9M31 33h12v8H31zm9 0v-3a3 3 0 1 0-6 0v3\"/></g>"
	},
	"email-push": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M36 15h8v26H4V15h8m12 4V5m6 6l-6-6l-6 6\"/><path d=\"m4 15l20 15l20-15\"/></g>"
	},
	"email-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M44 24V9H4v30h20\"/><circle cx=\"36\" cy=\"34\" r=\"5\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m40 37l4 3M4 9l20 15L44 9\"/></g>"
	},
	"email-security": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24V9H4v30h20\"/><path d=\"M30 30c0-1 5-3 5-3s5 2 5 3c0 8-5 10-5 10s-5-2-5-10M4 9l20 15L44 9\"/></g>"
	},
	"email-successfully": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24V9H4v30h20m7-3l5 4l8-10\"/><path d=\"m4 9l20 15L44 9\"/></g>"
	},
	"emotion-happy": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 18v1m-14-1v1m14 12s-2 4-7 4s-7-4-7-4\"/></g>"
	},
	"emotion-unhappy": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 18v1m-14-1v1m14 12s-2-4-7-4s-7 4-7 4\"/></g>"
	},
	empty: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9.439 42h3.184a2 2 0 0 0 1.868-1.286l2.2-5.753l.025-5.526q0-.175.032-.348L20.152 10.3a2 2 0 0 0-1.968-2.357h-7.321a2 2 0 0 0-2 2.056l.523 18.871l-1.77 3.33a2 2 0 0 0 .269 2.266l.561.633l-.963 4.48A2 2 0 0 0 9.438 42m7.279-12.74l-7.331-.39M38.578 42h-3.18a2 2 0 0 1-1.878-1.313l-2.093-5.726l-.025-5.526q0-.176-.032-.348L27.965 10.3a2 2 0 0 1 1.968-2.357h7.322a2 2 0 0 1 2 2.055l-.523 18.872l1.771 3.33a2 2 0 0 1-.27 2.266l-.561.633l.87 4.523A2 2 0 0 1 38.578 42M31.4 29.26l7.331-.39\"/>"
	},
	"end-time-sort": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M6 5v25.004h36V5M30 37l-6 6l-6-6m6-7v13\"/><path stroke-linejoin=\"round\" d=\"m18.96 10.979l5.037 5.014l-5.037 5.097\"/><path d=\"M29 10.002V22\"/></g>"
	},
	endless: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m31 21l4-3l9 6v10l-10 6l-10-6V13L13 7l-9 6v11l9 6l4-3\"/>"
	},
	endocrine: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M23.147 44C31.293 44 40 43.01 40 30.18q0-9.324-4.474-15.18q-4.18 7-6.196 7c-2.016 0 0-6.09-2.331-10.709Q24.668 6.671 18.729 4q.825 6.655-.357 9.655c-1.184 3-11.22 8.255-10.314 17.28S15 44 23.147 44Z\" clip-rule=\"evenodd\"/><path d=\"M21.708 24.008Q16 29.196 16.843 33.611c.483 2.534 2.406 3.765 3.854 4.163c1.123.307 3.067.48 4.803-1.067c1.84-1.639 1.107-3.968-1.56-6.85q-1.689-1.823-2.232-5.849Z\"/></g>"
	},
	"endpoint-displacement": {
		body: "<g fill=\"none\"><path d=\"M16 10a5 5 0 1 1-10 0a5 5 0 0 1 10 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 10a5 5 0 1 1-10 0a5 5 0 0 1 10 0m0 0h11m0 0l-4-4m4 4l-4 4\"/><path d=\"M32 38a5 5 0 1 0 10 0a5 5 0 0 0-10 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 38a5 5 0 1 0 10 0a5 5 0 0 0-10 0m0 0H21m0 0l4-4m-4 4l4 4\"/><path d=\"M33 11a5 5 0 1 0 10 0a5 5 0 0 0-10 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 16a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0 0v11m0 0l4-4m-4 4l-4-4\"/><path d=\"M5 37a5 5 0 1 1 10 0a5 5 0 0 1-10 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 32a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 0V21m0 0l4 4m-4-4l-4 4\"/></g>"
	},
	"endpoint-flat": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M43 40H7V27M43 8H7v13m36 3H10\"/><circle cx=\"7\" cy=\"24\" r=\"3\"/></g>"
	},
	"endpoint-round": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 24H26\"/><circle cx=\"22\" cy=\"24\" r=\"3\"/><path d=\"M42 40H22c-8.837 0-16-7.163-16-16S13.163 8 22 8h20\"/></g>"
	},
	"endpoint-square": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 40H6V8h36\"/><circle cx=\"24\" cy=\"24\" r=\"3\"/><path d=\"M42 24H27\"/></g>"
	},
	"energy-socket": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m4-23v-5m-8 5v-5\"/><path d=\"M24 32a8 8 0 0 0 8-8v-3H16v3a8 8 0 0 0 8 8m0 12V32\"/></g>"
	},
	"engineering-brand": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"38\" height=\"20\" x=\"5\" y=\"6\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M12 26v16m24-9H12m4 9H8m32 0h-8m4-16v16\"/></g>"
	},
	"engineering-vehicle": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M32 6h6M10 36H6v-8h26v8H18m14 0V12h6.5L44 24v12h-3\"/><path stroke-linejoin=\"round\" d=\"M4 8h22v14H7z\"/><circle cx=\"37\" cy=\"38\" r=\"4\"/><circle cx=\"14\" cy=\"38\" r=\"4\"/></g>"
	},
	english: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M13 31V17h8m-8 7h7.5M13 31h7.5m5.5 0V19m0 12v-6.5a4.5 4.5 0 0 1 4.5-4.5v0a4.5 4.5 0 0 1 4.5 4.5V31\"/></g>"
	},
	"english-mustache": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10.064 24.059c3.287-1.074 3.465-5.093 7.797-5.942c3.465-.679 5.547 1.709 6.064 4.244c.433 2.122-.866 7.639-7.797 7.639C7.465 30 4.578 24.483 4 22.361c.866.849 3.465 2.546 6.064 1.697Z\"/><path d=\"M37.936 24.059c-3.288-1.074-3.465-5.093-7.797-5.942c-3.465-.679-5.547 1.709-6.064 4.244c-.433 2.122.866 7.639 7.797 7.639c8.663 0 11.55-5.517 12.128-7.639c-.866.849-3.465 2.546-6.064 1.697Z\"/></g>"
	},
	enquire: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-miterlimit=\"2\" d=\"M37 16a5 5 0 1 1 0-10a5 5 0 0 1 0 10Zm-25-4a4 4 0 1 1 0-8a4 4 0 0 1 0 8Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m26 39l6-5v-6c0-3.466 2-6 5-6s5 2.534 5 6v14m-18-9l-6-5v-4c0-3.466-2-6-5-6s-5 2.534-5 6v18\"/></g>"
	},
	"enter-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 44V4H24v16H4v24z\"/><path d=\"m21 28l-4 4l4 4\"/><path d=\"M34 23v9H17\"/></g>"
	},
	"enter-key-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M23 23V5h20v38H5V23z\"/><path d=\"M33 13v20H13\"/><path d=\"m17 29l-4 4l4 4\"/></g>"
	},
	"enter-the-keyboard": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 7H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M12 19h2m7 0h2m6 0h7m-24 9h24\"/></g>"
	},
	entertainment: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M16 24c5.523 0 10-4.477 10-10S21.523 4 16 4S6 8.477 6 14s4.477 10 10 10Z\"/><path stroke-linecap=\"round\" d=\"M26 15.202q.021.021 14.126 17.764a1 1 0 0 1-.062 1.346l-4.084 4.084a1 1 0 0 1-1.346.062L17.822 24m8.648.47l2.829 2.829\"/><path stroke-linecap=\"round\" d=\"M17 44.086q2.876-3.747 6.99-3.747c4.116 0 8.973 5.17 13.116 4.459c4.144-.712 5.33-4.798 2.78-7.06\"/></g>"
	},
	envelope: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 4H8v40h32zm-16 8v24m16 0H8\"/><path d=\"m8 4l6 8h20l6-8\"/></g>"
	},
	"envelope-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M36 16V8H4v24h8\"/><path d=\"M12 40h32V16H12z\"/><path stroke-linecap=\"round\" d=\"m12 16l16 12l16-12\"/><path stroke-linecap=\"round\" d=\"M32 16H12v15\"/><path stroke-linecap=\"round\" d=\"M44 31V16H24\"/></g>"
	},
	"equal-ratio": {
		body: "<g fill=\"none\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"3\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M24 22.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15.5 17v14m17-14v14\"/></g>"
	},
	equalizer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M11 16v26m13-13v13m0-23V6m13 0v26\"/><path d=\"M11 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm13 13a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm13 13a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/></g>"
	},
	erase: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 42h40M31 4L7 28l6 6h8l20-20z\"/>"
	},
	error: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 11l5-5l13 13L37 6l5 5l-13 13l13 13l-5 5l-13-13l-13 13l-5-5l13-13z\" clip-rule=\"evenodd\"/>"
	},
	"error-computer": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M26 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-8M24 34v8M34 7l8 8m0-8l-8 8M14 42h20\"/>"
	},
	"error-picture": {
		body: "<g fill=\"none\"><path fill=\"currentColor\" d=\"M44 23.994a2 2 0 0 0-4 0zm-20-16a2 2 0 1 0 0-4zm15 32H9v4h30zm-31-1v-30H4v30zm32-15v15h4v-15zm-31-16h15v-4H9zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1zm-31-35a1 1 0 0 1 1-1v-4a5 5 0 0 0-5 5z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 35l10.693-9.802a2 2 0 0 1 2.653-.044L32 36m-4-5l4.773-4.773a2 2 0 0 1 2.615-.186L42 31M33 7l8 8m0-8l-8 8\"/></g>"
	},
	"error-prompt": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m8 18l12 12m0-12L8 30M34 8c5 4.36 8 9.931 8 16s-3 11.64-8 16m-7-26c3.75 2.726 6 6.207 6 10s-2.25 7.274-6 10\"/>"
	},
	escalators: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M35 13L13 35H4v9h9l22-22h9v-9zm-16 0l9-9m-6 0h6v6m-14 8l-9 9m6 0H5v-6\"/>"
	},
	"ethernet-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path stroke-linejoin=\"round\" d=\"M19 27h10v6H19zm-5-8h20v8H14z\"/><path d=\"M33 19v-4m-6 4v-4m-6 4v-4m-6 4v-4\"/></g>"
	},
	"ethernet-on": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path stroke-linejoin=\"round\" d=\"M19 27h10v6H19zm-5-12h20v12H14z\"/><path d=\"M21 19v-4m6 4v-4\"/></g>"
	},
	"every-user": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"14\" cy=\"29\" r=\"5\"/><circle cx=\"34\" cy=\"29\" r=\"5\"/><circle cx=\"24\" cy=\"9\" r=\"5\"/><path d=\"M24 44c0-5.523-4.477-10-10-10S4 38.477 4 44m40 0c0-5.523-4.477-10-10-10s-10 4.477-10 10m10-20c0-5.523-4.477-10-10-10s-10 4.477-10 10\"/></g>"
	},
	excel: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M8 15V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-9\"/><path d=\"M31 15h3m-6 8h6m-6 8h6\"/><path stroke-linejoin=\"round\" d=\"M4 15h18v18H4zm6 6l6 6m0-6l-6 6\"/></g>"
	},
	"excel-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M30 16H18m0 16V16m10 8H18m12 8H18\"/></g>"
	},
	exchange: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 16h5V4l15 15l-15 15V24H18V13L4 28l14 16V32h5\"/>"
	},
	"exchange-four": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3M15 21h18m-18 6h18m0-6l-7-7m-4 20l-7-7\"/>"
	},
	"exchange-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 18v24h30V18L24 6zm8 6h14m-14 6h14m0-6l-5-5m-4 16l-5-5\"/>"
	},
	"exchange-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 8.256L24.009 3L42 8.256v10.778A26.32 26.32 0 0 1 24.003 44A26.32 26.32 0 0 1 6 19.029z\"/><path stroke-linecap=\"round\" d=\"M17 19h14m-14 6h14m0-6l-5-5m-4 16l-5-5\"/></g>"
	},
	"exchange-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M9 18v24h30V18L24 6zm15 12v6m7-10v10m-14-4v4\"/><path d=\"m17 25l5-4l3 3l6-5\"/></g>"
	},
	"exclude-selection": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"27\" height=\"27\" x=\"16\" y=\"16\" rx=\"2\"/><rect width=\"27\" height=\"27\" x=\"5\" y=\"5\" rx=\"2\"/><path d=\"m25 32l-9 9m25-25l-9 9m-16-2l-9 9M32 7l-9 9m20 8L24 43m0-38L5 24m38 10l-9 9M14 5l-9 9\"/></g>"
	},
	"exclusive-gateway": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M22.8 4.201L4.413 22.586a2 2 0 0 0 0 2.828L22.8 43.8a2 2 0 0 0 2.829 0l18.384-18.385a2 2 0 0 0 0-2.828L25.628 4.2a2 2 0 0 0-2.829 0Z\"/><path stroke-linecap=\"round\" d=\"m18.043 29.987l12-11.962m-11.99-.009l11.98 11.98\"/></g>"
	},
	"expand-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 10a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z\"/><path stroke-linecap=\"round\" d=\"M6 32h36M20 16l4 4l4-4M6 26v12m36-12v12\"/></g>"
	},
	"expand-down-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 9h36M6 19h36M6 26l18 14l18-14\"/>"
	},
	"expand-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z\"/><path stroke-linecap=\"round\" d=\"M32 6v36M16 20l4 4l-4 4M26 6h12M26 42h12\"/></g>"
	},
	"expand-left-and-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 6v36M16 20l-4 4l4 4m16-8l4 4l-4 4M24 6v36M6 6v36\"/>"
	},
	"expand-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M18 6v36M11 6h25M11 42h25m-4-22l-4 4l4 4\"/></g>"
	},
	"expand-text-input": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22 42H6V26M26 6h16v16\"/>"
	},
	"expand-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M6 16h36M20 32l4-4l4 4M6 10v12m36-12v12\"/></g>"
	},
	expenses: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M31 34h12m-5 5l5-5l-5-5\"/><path d=\"M43 26V10a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v28a3 3 0 0 0 3 3h20.47\"/><path d=\"m15 15l5 6l5-6M14 27h12m-12-6h12m-6 0v12\"/></g>"
	},
	"expenses-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m30 36l5-5l-5-5m8 10l5-5l-5-5\"/><path d=\"M43 22V9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h21.47\"/><path d=\"m13 15l5 6l5-6M12 27h12m-12-6h12m-6 0v12\"/></g>"
	},
	experiment: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M12 4h24\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m10.777 30l7.242-14.961V4h12.01v11.039L37.245 30\"/><path stroke-linejoin=\"round\" d=\"M7.794 43.673a3.273 3.273 0 0 1-1.52-4.372L10.777 30S18 35 24 30s13.246 0 13.246 0l4.49 9.305A3.273 3.273 0 0 1 38.787 44H9.22c-.494 0-.981-.112-1.426-.327Z\"/></g>"
	},
	"experiment-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m10.777 30l7.242-14.961V4h12.01v11.039L37.245 30\"/><path d=\"M7.794 43.673a3.273 3.273 0 0 1-1.52-4.372L10.777 30S18 35 24 30s13.246 0 13.246 0l4.49 9.305A3.273 3.273 0 0 1 38.787 44H9.22c-.494 0-.981-.112-1.426-.327Z\"/></g>"
	},
	"export": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 27c0 6-4 16-18 16S6 33 6 27M24.008 5.1V33M12 17L24 5l12 12\"/>"
	},
	"express-delivery": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M8 31v11a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V31\"/><path d=\"M38 14H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M16 4v4m8-4v4m8-4v4M16 34h16\"/></g>"
	},
	"expressionless-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M16 19h4m8 0h4M16 31h16\"/></g>"
	},
	extend: {
		body: "<g fill=\"none\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"3\"/><path fill=\"currentColor\" d=\"M35 12h-4.586c-.89 0-1.337 1.077-.707 1.707l4.586 4.586c.63.63 1.707.184 1.707-.707V13a1 1 0 0 0-1-1m-23 1v4.586c0 .89 1.077 1.337 1.707.707l4.586-4.586c.63-.63.184-1.707-.707-1.707H13a1 1 0 0 0-1 1m1 23h4.586c.89 0 1.337-1.077.707-1.707l-4.586-4.586c-.63-.63-1.707-.184-1.707.707V35a1 1 0 0 0 1 1m23-1v-4.586c0-.89-1.077-1.337-1.707-.707l-4.586 4.586c-.63.63-.184 1.707.707 1.707H35a1 1 0 0 0 1-1\"/></g>"
	},
	"external-transmission": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M30 25h12m-6-6l6 6l-6 6M21 6v20c0 6.74-6.165 13.567-12 16\"/><path d=\"M42 14V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-3.5\"/></g>"
	},
	eyebrow: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 40c9.941 0 18-10 18-10s-8.059-10-18-10S6 30 6 30s8.059 10 18 10Z\"/><path d=\"M24 34a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm4-28c-7 0-18 3.5-21 6s-1 7 1 6s15.2-5.8 20-7s11.667.833 14 2c-2.333-2-7-7-14-7Z\"/></g>"
	},
	eyes: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M24 41c9.941 0 18-8.322 18-14s-8.059-14-18-14S6 21.328 6 27s8.059 14 18 14Z\" clip-rule=\"evenodd\"/><path stroke-linejoin=\"round\" d=\"M24 33a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z\"/><path stroke-linecap=\"round\" d=\"m13.264 11.266l2.594 3.62m19.767-3.176l-2.595 3.62M24.009 7v6\"/></g>"
	},
	"f-eight-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M30 24a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 9a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 16h-7v16m0-8h7\"/></g>"
	},
	"f-five-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M34 16h-8v6.919s1.833-1.419 4.5-1.419S34 23.659 34 27s-1.5 5-4.444 5C26.889 32 26 30.315 26 28.637M21 16h-7v16m0-8h7\"/></g>"
	},
	"f-four-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M32.733 32V16L26 26.397v1.619h9M21 16h-7v16m0-8h7\"/></g>"
	},
	"f-n-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M26 17v15m0-9c0-2.379 1.6-4 4-4s4 1.527 4 4v9\"/><path stroke-linejoin=\"round\" d=\"M21 16h-7v16m0-8h7\"/></g>"
	},
	"f-nine-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M30 24a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M26 29.124C26.618 30.81 28.108 32 29.848 32C32.14 32 34 30.549 34 28v-8m-13-4h-7v16m0-8h7\"/></g>"
	},
	"f-one-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"m27 21l5-5v16M21 16h-7v16m0-8h7\"/></g>"
	},
	"f-seven-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M26 16h8l-6 16m-7-16h-7v16m0-8h7\"/></g>"
	},
	"f-six-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M30 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M34 18.876C33.382 17.19 31.892 16 30.152 16C27.86 16 26 17.451 26 20v8m-5-12h-7v16m0-8h7\"/></g>"
	},
	"f-three-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M27 16h7l-4.9 7.2c2.8 0 4.9 1.8 4.9 4.8s-2 4-3.5 4c-1.667 0-3-1-3.5-2m-6-14h-7v16m0-8h7\"/></g>"
	},
	"f-two-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M26 20c0-2.533 2.133-4 4-4s4 1.467 4 4c0 4.56-8 7.947-8 12h8M21 16h-7v16m0-8h7\"/></g>"
	},
	"f-zero-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><rect width=\"8\" height=\"16\" x=\"26\" y=\"16\" rx=\"4\"/><path d=\"M21 16h-7v16m0-8h7\"/></g>"
	},
	"face-powder": {
		body: "<g fill=\"none\"><ellipse cx=\"24\" cy=\"30\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"16\" ry=\"6\"/><ellipse cx=\"24\" cy=\"14\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"16\" ry=\"10\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m23 10l-5 3m12 1l-5 3m15 21c0 3.314-7.163 6-16 6S8 41.314 8 38m32 0v-8M8 38v-8\"/><ellipse cx=\"24\" cy=\"30\" fill=\"currentColor\" rx=\"7\" ry=\"2\"/></g>"
	},
	"face-recognition": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M33 5h8a2 2 0 0 1 2 2v8m0 18v8a2 2 0 0 1-2 2h-8m-18 0H7a2 2 0 0 1-2-2v-8m0-18V7a2 2 0 0 1 2-2h8\"/><path d=\"M24 38c6.627 0 12-6.268 12-14s-5.373-14-12-14s-12 6.268-12 14s5.373 14 12 14Z\"/><path stroke-linecap=\"round\" d=\"M6 24h36m-21.93 6.106q1.9 1.406 3.93 1.406q2.028-.001 4.038-1.406\"/></g>"
	},
	"face-with-smiling-open-eyes": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 31s-2 4-7 4s-7-4-7-4\"/><circle cx=\"17\" cy=\"20\" r=\"4\" stroke-linecap=\"round\"/><circle cx=\"31\" cy=\"20\" r=\"4\" stroke-linecap=\"round\"/></g>"
	},
	"face-without-mouth": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 18v1m-14-1v1\"/></g>"
	},
	facebook: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"3.8\" d=\"M36 12.6h-6.013c-1.086 0-1.967.88-1.967 1.967v6.9H36l-1.169 7.597h-6.81V43h-8.776V29.064H12v-7.597h7.151l.094-7.21l-.013-1.31A7.87 7.87 0 0 1 27.099 5H36z\"/>"
	},
	"facebook-one": {
		body: "<g fill=\"none\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4.111 46A2.117 2.117 0 0 1 2 43.877V4.123C2 2.95 2.945 2 4.111 2H43.89C45.055 2 46 2.95 46 4.123v39.754A2.117 2.117 0 0 1 43.889 46z\"/><path fill=\"currentColor\" d=\"M38.662 17.887h-4.869a2.445 2.445 0 0 0-2.444 2.444v4.89h7.313l-1.071 7.332h-6.242V46h-8.042V32.553h-6.64v-7.331h6.554l.086-6.959l-.024-2.494a6.377 6.377 0 0 1 6.376-6.438h9.003z\"/></g>"
	},
	facetime: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linejoin=\"round\" d=\"M24 19H12v10h12zm11-1l-5 4v4l5 4z\"/></g>"
	},
	faceu: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M27 12v4c2.667.833 9 3 9 10s-6 10-12 10s-12-3-12-10c0-8 9.667-12.833 15-14\"/><ellipse cx=\"29\" cy=\"26\" fill=\"currentColor\" rx=\"3\" ry=\"4\"/><ellipse cx=\"19\" cy=\"26\" fill=\"currentColor\" rx=\"3\" ry=\"4\"/></g>"
	},
	"facial-cleanser": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15 34v10h18V34\"/><path d=\"M31.935 4h-15.95C9.043 4 8.514 8.605 9.25 11.04L14.989 34h17.942s4.644-17.817 5.888-22.96c.589-2.435.09-7.057-6.884-7.04Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.488 19.09c1.64-1.944 2.903-4.631 3.586-6.09c1.196 1.459 3.792 5.118 4.612 7.063c1.025 2.432-1.537 5.35-4.612 5.35c-3.074 0-5.636-3.89-3.586-6.322\"/></g>"
	},
	"facial-mask": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M10 15.114a3 3 0 0 1 1.991-2.825l11-3.929a3 3 0 0 1 2.018 0l11 3.929A3 3 0 0 1 38 15.114v16.49c0 .885-.39 1.725-1.092 2.264C34.468 35.742 28.434 40 24 40s-10.467-4.257-12.908-6.132A2.84 2.84 0 0 1 10 31.604z\"/><path stroke-linecap=\"round\" d=\"M10 28c-3.314 0-6-3.11-6-6.947S6.686 16 10 16m28 12c3.314 0 6-3.11 6-6.947S41.314 16 38 16\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m16 25l8-4l8 4m-13 6l5-2l5 2\"/></g>"
	},
	"factory-building": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 44V4h8v16l16-8v8l16-8v32z\"/><path d=\"M12 28h8v8h-8zm16 0h8v8h-8z\"/></g>"
	},
	"fail-picture": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"34\" height=\"34\" x=\"7\" y=\"7\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"m41 26l-6.612-4.96a2 2 0 0 0-2.614.187L27 26M7 28l11-10M6 6l36 36\"/></g>"
	},
	family: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M10 19s-5.143 2-6 9m34-9s5.143 2 6 9m-26-9s4.8 1.167 6 7m6-7s-4.8 1.167-6 7m-4 8s-4.2.75-6 6m14-6s4.2.75 6 6\"/><circle cx=\"24\" cy=\"31\" r=\"5\" stroke-linejoin=\"round\"/><circle cx=\"34\" cy=\"14\" r=\"6\" stroke-linejoin=\"round\"/><circle cx=\"14\" cy=\"14\" r=\"6\" stroke-linejoin=\"round\"/></g>"
	},
	fan: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 31v5m-9.987-8.245l-9.986-3.244a21 21 0 0 1 39.945 0l-9.986 3.244zm0 0a10.5 10.5 0 0 1 3.815-5.25zm0 0L24 31zm3.815-5.25A10.5 10.5 0 0 1 24 20.5zm0 0L24 31zM24 20.5a10.5 10.5 0 0 1 6.171 2.005zm0 0V31zm6.171 2.005a10.5 10.5 0 0 1 3.815 5.25zm0 0L24 31zm3.815 5.25L24 31z\"/>"
	},
	fanqiexiaoshuo: {
		body: "<path fill=\"currentColor\" d=\"M35.429 4.884c4.217 0 7.653 3.436 7.653 7.653V35.43c0 4.217-3.436 7.653-7.653 7.653H12.537c-4.217 0-7.653-3.436-7.653-7.653V12.537c0-4.217 3.436-7.653 7.653-7.653zm0-.884H12.537A8.52 8.52 0 0 0 4 12.537V35.43a8.52 8.52 0 0 0 8.537 8.537H35.43a8.52 8.52 0 0 0 8.537-8.537V12.537C44 7.81 40.156 4 35.429 4\"/><path fill=\"currentColor\" d=\"M29.102 4v8.401l3.23-1.836l3.232 1.836V4zm-5.068 14.286c-8.197 0-15.476 3.571-20.034 9.081v8.062a8.52 8.52 0 0 0 8.537 8.537H35.43a8.52 8.52 0 0 0 8.537-8.537v-8.164c-4.558-5.476-11.769-8.98-19.932-8.98m-9.422 19.387c-1.496 0-2.21-.544-2.21-1.258s.68-1.292 2.176-1.292c1.497 0 3.3 1.258 3.3 1.258s-1.77 1.292-3.266 1.292m1.225-6.462c-1.089-1.054-1.19-1.939-.68-2.449s1.394-.442 2.483.646c1.088 1.055 1.428 3.197 1.428 3.197s-2.177-.34-3.231-1.394m8.197-.748s-1.293-1.735-1.326-3.266c0-1.496.544-2.21 1.258-2.21s1.293.68 1.293 2.176c.034 1.53-1.225 3.3-1.225 3.3m6.326-1.089c1.089-1.054 1.973-1.122 2.483-.646c.51.51.409 1.394-.68 2.449s-3.231 1.36-3.231 1.36s.34-2.108 1.428-3.163m2.994 8.3c-1.497 0-3.266-1.327-3.266-1.327s1.77-1.258 3.3-1.258c1.496 0 2.21.612 2.177 1.292c0 .748-.715 1.292-2.211 1.292\"/>"
	},
	feelgood: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M23.142 15.858L11.828 27.172a4 4 0 0 0 0 5.656l9.9 9.9a4 4 0 0 0 5.657 0l9.9-9.9a4 4 0 0 0 0-5.656L25.97 15.858a2 2 0 0 0-2.829 0M25 13.84s4.554-5.11 6.373-7.266s3.768-1.878 5.392-.476s1.668 3.616 0 5.677S30.556 19 30.556 19M25 13.839s-4.554-5.11-6.373-7.266s-3.767-1.878-5.392-.476c-1.625 1.403-1.668 3.617 0 5.677C14.903 13.836 19.444 19 19.444 19\"/>"
	},
	"feelgood-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 6H4v30h21l10 5v-5h9z\"/><path d=\"M13 23s4 4 11 4s11-4 11-4\"/></g>"
	},
	feiyu: {
		body: "<g fill=\"currentColor\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M7.854 24.12A30.6 30.6 0 0 1 2 12.989a36.7 36.7 0 0 0 8.512 8.3c5.421-5.09 12.69-8.205 20.681-8.208c5.24.001 9.897 2.469 12.902 6.312q.254.303.471.633a7.36 7.36 0 0 1 1.207 3.478a36 36 0 0 0-14.568-3.064c-3.749 0-7.36.571-10.76 1.631a36 36 0 0 0-5.14 2.05q.251.122.507.243a36 36 0 0 0 4.633 1.805a36.1 36.1 0 0 0 11.722 1.618a36 36 0 0 0 9.79-1.616a36 36 0 0 0 3.81-1.43a7.3 7.3 0 0 1-1.684 4.121c-3.003 3.837-7.656 6.3-12.88 6.3c-8.001-.002-15.273-3.118-20.695-8.21a36.7 36.7 0 0 0-8.507 8.299a30.65 30.65 0 0 1 5.853-11.13\"/><path d=\"M32.597 27.382c1.53-.464 2.658-1.243 2.658-3.138c0-1.897-1.128-2.962-2.658-3.428l-.032-.01a3.2 3.2 0 0 0-.888-.128a29 29 0 0 1 .98.017c3.324.102 6.484.737 9.572 1.729c1.28.451 2.332.78 3.544 1.385v.397c0 .232 0 .107-.027.341c-1.324.553-2.237.875-3.516 1.327c-3.074.865-6.248 1.528-9.572 1.63l-.038.002q-.472.015-.945.014c.307 0 .605-.045.89-.127z\"/></g>"
	},
	female: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M38.379 9.851c-5.468-5.467-14.332-5.467-19.8 0a13.96 13.96 0 0 0-4.1 9.9a13.96 13.96 0 0 0 4.1 9.9c5.468 5.467 14.332 5.467 19.8 0c5.467-5.468 5.467-14.332 0-19.8Z\"/><path stroke-linecap=\"round\" d=\"M18.464 29.535L5.736 42.263m13.435-.707L6.443 28.828\"/></g>"
	},
	"fence-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 4v40m36-32H4m36 32L8 12m0 32l32-32M27 44L8 25m32 6L21 12M8 31l18-19m-5 32l19-19m4 19H4M40 4v40\"/>"
	},
	"fence-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 4v40m7-35v28m8-28v28m8-28v28m10 7H6m36-7H6M39 4v40m3-35H6\"/>"
	},
	"ferris-wheel": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"m9 44l15-22m15 22L24 22\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M9.132 24A15 15 0 0 1 9 22a14.95 14.95 0 0 1 1.5-6.546m.656 14.299A15.02 15.02 0 0 0 21 36.7m6 0a15.02 15.02 0 0 0 9.911-7.06M38.868 24q.131-.982.132-2a14.94 14.94 0 0 0-1.5-6.546M27 7.3a14.96 14.96 0 0 1 7 3.52M21 7.3a14.96 14.96 0 0 0-7.614 4.101\"/><circle cx=\"10\" cy=\"27\" r=\"3\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"24\" cy=\"37\" r=\"3\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"24\" cy=\"7\" r=\"3\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"12\" cy=\"13\" r=\"3\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"36\" cy=\"13\" r=\"3\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"38\" cy=\"27\" r=\"3\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"24\" cy=\"22\" r=\"4\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 44h8m20 0h8\"/></g>"
	},
	figma: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M18 18a3 3 0 0 1 3-3h3v6h-3a3 3 0 0 1-3-3Zm0 6a3 3 0 0 1 3-3h3v6h-3a3 3 0 0 1-3-3Zm0 6a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0Zm6-15h3a3 3 0 1 1 0 6h-3z\"/><path d=\"M24 24a3 3 0 1 1 6 0a3 3 0 0 1-6 0Z\"/></g>"
	},
	"figma-component": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m17 12l7-7l7 7l-7 7zm0 24l7-7l7 7l-7 7zm12-12l7-7l7 7l-7 7zM5 24l7-7l7 7l-7 7z\"/>"
	},
	"figma-flatten-selection": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m32 18l-8 8l-8-8m20 24H12m30-8H6M24 6v20\"/>"
	},
	"figma-mask": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M14 41.324C19.978 37.866 24 31.403 24 24S19.978 10.134 14 6.676C8.022 10.134 4 16.597 4 24s4.022 13.866 10 17.324\"/></g>"
	},
	"figma-reset-instance": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24L24 4L4 24l20 20l11-11\"/><path d=\"M22 24s12.5-.5 17.5 4.5S39 44 39 44\"/><path d=\"m26 20l-4 4l4 4\"/></g>"
	},
	"file-addition": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10m-16 7v14m-7-7h14\"/>"
	},
	"file-addition-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-15v14m-7-7h14\"/><path d=\"M30 4v10h10\"/></g>"
	},
	"file-cabinet": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M42 4H6v10h36zm0 15H6v10h36zm0 15H6v10h36z\"/><path stroke-linecap=\"round\" d=\"M21 9h6m-6 15h6m-6 15h6\"/></g>"
	},
	"file-code": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><path d=\"m27 24l5 5l-5 5m-6-10l-5 5l5 5\"/></g>"
	},
	"file-code-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m15-13l5 5l-5 5\"/><path d=\"m31 31l-5 5l5 5M30 4v10h10\"/></g>"
	},
	"file-collection": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><path d=\"M20.85 21C18.724 21 17 23.009 17 25.486c0 4.487 4.55 8.565 7 9.514c2.45-.949 7-5.027 7-9.514C31 23.01 29.276 21 27.15 21c-1.302 0-2.453.753-3.15 1.906C23.303 21.753 22.152 21 20.85 21\"/></g>"
	},
	"file-collection-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12\"/><path d=\"M30.85 30C28.724 30 27 32.009 27 34.486c0 4.487 4.55 8.565 7 9.514c2.45-.949 7-5.027 7-9.514C41 32.01 39.276 30 37.15 30c-1.302 0-2.453.753-3.15 1.906C33.303 30.753 32.152 30 30.85 30M30 4v10h10\"/></g>"
	},
	"file-conversion": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10M17 25h14m-14 6h14m0-6l-5-5m-4 16l-5-5\"/>"
	},
	"file-conversion-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m5-11h14m-14 6h14m0-6l-5-5m-4 16l-5-5\"/><path d=\"M30 4v10h10\"/></g>"
	},
	"file-date": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><circle cx=\"24\" cy=\"28\" r=\"8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23 25v4h4\"/></g>"
	},
	"file-date-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12\"/><circle cx=\"34\" cy=\"36\" r=\"8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M33 33v4h4M30 4v10h10\"/></g>"
	},
	"file-display": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 34c4.97 0 9-6 9-6s-4.03-6-9-6s-9 6-9 6s4.03 6 9 6Z\"/><path fill=\"currentColor\" d=\"M24 30a2 2 0 1 0 0-4a2 2 0 0 0 0 4\"/></g>"
	},
	"file-display-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33 41c4.97 0 9-6 9-6s-4.03-6-9-6s-9 6-9 6s4.03 6 9 6Z\"/><path fill=\"currentColor\" d=\"M33 37a2 2 0 1 0 0-4a2 2 0 0 0 0 4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 4v10h10\"/></g>"
	},
	"file-doc": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 38v6h28v-6m0-18v-6L30 4H10v16\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M28 4v10h10\"/><path stroke-linecap=\"round\" d=\"M16 12h4\"/><rect width=\"40\" height=\"18\" x=\"4\" y=\"20\" stroke-linejoin=\"round\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M10 25v8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 25h2a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-2\"/><ellipse cx=\"24\" cy=\"29\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"3\" ry=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M38 25h-2a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h2\"/></g>"
	},
	"file-editing": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><path d=\"m21 35l10-10l-4-4l-10 10v4z\"/></g>"
	},
	"file-editing-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m10 0l10-10l-4-4l-10 10v4z\"/><path d=\"M30 4v10h10\"/></g>"
	},
	"file-excel": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 4h20l10 10v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z\"/><path stroke-linecap=\"round\" d=\"M29 18H19v16h10m0-8H19\"/></g>"
	},
	"file-failed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10m-22 8l12 12m0-12L18 34\"/>"
	},
	"file-failed-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m7-14l12 12m0-12L29 42\"/><path d=\"M30 4v10h10\"/></g>"
	},
	"file-focus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><path d=\"m24 19l2.523 5.527l6.037.692l-4.477 4.108l1.207 5.954L24 32.293l-5.29 2.988l1.207-5.954l-4.477-4.108l6.037-.692z\"/></g>"
	},
	"file-focus-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12\"/><path d=\"m34 27l2.523 5.527l6.036.692l-4.476 4.108l1.207 5.954L34 40.293l-5.29 2.988l1.207-5.954l-4.477-4.108l6.037-.692zM30 4v10h10\"/></g>"
	},
	"file-gif": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 4h20l10 10v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z\"/><path stroke-linecap=\"round\" d=\"M31.008 18H17v16h14.008v-6.992H26\"/></g>"
	},
	"file-hash": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10M17 25h14m-14 6h14M21 21v14m6-14v14\"/>"
	},
	"file-hash-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m4-12h14m-14 6h14M30 28v14m6-14v14\"/><path d=\"M30 4v10h10\"/></g>"
	},
	"file-hiding": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><path d=\"M16 23a8.6 8.6 0 0 0 1.255 2.517C18.783 27.63 21.235 29 24 29s5.217-1.37 6.745-3.483A8.6 8.6 0 0 0 32 23m-10.478 6.068l-1.036 3.864m6-3.864l1.036 3.864m2.832-5.578l2.828 2.828M15 30.01l2.828-2.828\"/></g>"
	},
	"file-hiding-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12\"/><path d=\"M25 30a8.6 8.6 0 0 0 1.255 2.517C27.783 34.63 30.235 36 33 36s5.217-1.37 6.745-3.483A8.6 8.6 0 0 0 41 30m-10.478 6.068l-1.036 3.864m6-3.864l1.036 3.864m2.832-5.578l2.828 2.828M24 37.01l2.828-2.828M30 4v10h10\"/></g>"
	},
	"file-jpg": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M10 4h20l10 10v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M31 18H21m5 0v12\"/><path stroke-linecap=\"round\" d=\"M18 30a4 4 0 0 0 8 0\"/></g>"
	},
	"file-lock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><path d=\"M17 27h14v8H17zm11 0v-4c0-1.657-1-4-4-4s-4 2.343-4 4v4\"/></g>"
	},
	"file-lock-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12\"/><path d=\"M28 34h14v8H28zm10 0v-3a3 3 0 1 0-6 0v3M30 4v10h10\"/></g>"
	},
	"file-music": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><path d=\"m31 20l-6 2.969V33.5\"/><circle cx=\"21\" cy=\"33\" r=\"4\"/></g>"
	},
	"file-music-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m18-15l-4 .969V40.5\"/><circle cx=\"32\" cy=\"40\" r=\"4\"/><path d=\"M30 4v10h10\"/></g>"
	},
	"file-pdf": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M10 4h20l10 10v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18 18h12v7.992L18.008 26z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M18 18v16\"/></g>"
	},
	"file-pdf-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 38v6h28v-6m0-18v-6L30 4H10v16\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M28 4v10h10\"/><rect width=\"40\" height=\"18\" x=\"4\" y=\"20\" stroke-linejoin=\"round\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M21 25v8m-11-8v8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M32 33v-8h5m-5 5h5m-27-5h3.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5H10m11-5h2a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-2\"/><path stroke-linecap=\"round\" d=\"M16 12h4\"/></g>"
	},
	"file-ppt": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M25 41h13v-7M25 7h13v7M25 34.243V44l-15-5.381V34m15-20.027V4L10 9.381v4.592\"/><rect width=\"40\" height=\"20\" x=\"4\" y=\"14\" stroke-linejoin=\"round\" rx=\"2\"/><path d=\"M10 19v10m11-10v10\"/><path stroke-linejoin=\"round\" d=\"M35 20v8m-3-8h6m-28-1h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-3m11-6h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-3\"/></g>"
	},
	"file-protection": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><path d=\"M17 23.2c0-1.067 7-3.2 7-3.2s7 2.133 7 3.2c0 8.533-7 12.8-7 12.8s-7-4.267-7-12.8\"/></g>"
	},
	"file-protection-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12\"/><path d=\"M27 31.2c0-1.067 7-3.2 7-3.2s7 2.133 7 3.2c0 8.533-7 12.8-7 12.8s-7-4.267-7-12.8M30 4v10h10\"/></g>"
	},
	"file-quality": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><path d=\"M19.2 21h9.6l3.2 4.118L24 35l-8-9.882z\"/></g>"
	},
	"file-quality-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12\"/><path d=\"M28.2 30h9.6l3.2 4.118L33 44l-8-9.882zM30 4v10h10\"/></g>"
	},
	"file-question": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 31v-3c2.21 0 4-2.015 4-4.5S26.21 19 24 19s-4 2.015-4 4.5\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M24 39a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\" clip-rule=\"evenodd\"/></g>"
	},
	"file-removal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10M17 28h14\"/>"
	},
	"file-removal-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m4-9h14\"/><path d=\"M30 4v10h10\"/></g>"
	},
	"file-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M40 20.842V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h16\"/><path d=\"M14 17h6m8 0h6M14 28h6m-6 6h6m-3-14v-6m20.728 23.728l4.243 4.243\"/><circle cx=\"33.485\" cy=\"33.485\" r=\"6\" stroke-linejoin=\"round\" transform=\"rotate(45 33.485 33.485)\"/></g>"
	},
	"file-search-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12\"/><circle cx=\"31\" cy=\"34\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m36 38l5 4M30 4v10h10\"/></g>"
	},
	"file-search-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><circle cx=\"22\" cy=\"26\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m27 30l5 4\"/></g>"
	},
	"file-settings": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><circle cx=\"24\" cy=\"27\" r=\"5\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 19v3m0 10v3m5.828-14l-2.121 2.121M19.828 31l-2.121 2.121M18 21l2.121 2.121M28 31l2.121 2.121M16 27h3m10 0h3\"/></g>"
	},
	"file-settings-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12\"/><circle cx=\"34\" cy=\"36\" r=\"5\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M34 28v3m0 10v3m5.828-14l-2.121 2.121M29.828 40l-2.121 2.121M28 30l2.121 2.121M38 40l2.121 2.121M26 36h3m10 0h3M30 4v10h10\"/></g>"
	},
	"file-staff": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><circle cx=\"24\" cy=\"24\" r=\"4\"/><path d=\"M32 36a8 8 0 1 0-16 0\"/></g>"
	},
	"file-staff-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h10\"/><circle cx=\"34\" cy=\"32\" r=\"4\"/><path d=\"M42 44a8 8 0 1 0-16 0m4-40v10h10\"/></g>"
	},
	"file-success": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><path d=\"m17 29l6 5l9-11\"/></g>"
	},
	"file-success-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12\"/><path d=\"m26 38l6 5l9-11M30 4v10h10\"/></g>"
	},
	"file-text": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10m-16 8v14m-6-14h12\"/>"
	},
	"file-text-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m12-14v14m-6-14h12\"/><path d=\"M30 4v10h10\"/></g>"
	},
	"file-tips": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10m-16 5v10\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M24 39a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\" clip-rule=\"evenodd\"/></g>"
	},
	"file-tips-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-18v10\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M33 46a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 4v10h10\"/></g>"
	},
	"file-txt": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M10 4h20l10 10v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z\"/><path stroke-linecap=\"round\" d=\"M18 18.008h12m-5.992 0V34\"/></g>"
	},
	"file-txt-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M10 38v6h28v-6m0-18v-6L30 4H10v16\"/><path stroke-linejoin=\"round\" d=\"M28 4v10h10\"/><path d=\"M16 12h4\"/><rect width=\"40\" height=\"18\" x=\"4\" y=\"20\" stroke-linejoin=\"round\" rx=\"2\"/><path stroke-linejoin=\"round\" d=\"m21 25l6 8m0-8l-6 8m-8-8v8m-3-8h6m19 0v8m-3-8h6\"/></g>"
	},
	"file-withdrawal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><path d=\"m21 25l-5 5l5 5\"/><path d=\"M16 30h16v-8\"/></g>"
	},
	"file-withdrawal-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12\"/><path d=\"m31 33l-5 5l5 5\"/><path d=\"M26 38h16v-8M30 4v10h10\"/></g>"
	},
	"file-word": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 4h20l10 10v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z\"/><path stroke-linecap=\"round\" d=\"m16.008 20l3 14l5-10l5 10l3-14\"/></g>"
	},
	"file-zip": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 38v6h28v-6m0-18v-6L30 4H10v16\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M28 4v10h10\"/><path stroke-linecap=\"round\" d=\"M16 12h4\"/><rect width=\"40\" height=\"18\" x=\"4\" y=\"20\" stroke-linejoin=\"round\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11 25h6l-6 8h6\"/><path stroke-linecap=\"round\" d=\"M24 25v8m7-8v8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M31 25h3.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5H31\"/></g>"
	},
	fill: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M14 14h20v20H14zm20 9L23 34m2-20L14 25m20-11L14 34\"/><path d=\"M14 22v12h12m-4-20h12v12\"/></g>"
	},
	film: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M16 6v36M32 6v36M6 15h10m16 0h10M6 33h10M6 24h36m-10 9h10\"/></g>"
	},
	filter: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 9l14.4 16.818v12.626L27.6 42V25.818L42 9z\"/>"
	},
	"filter-one": {
		body: "<path fill=\"currentColor\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M24.489 8.398c-.243-.04-.215-.398.031-.398H39.5a.5.5 0 0 1 .5.5v14.98c0 .246-.359.274-.398.031l-1.966-12.317a1 1 0 0 0-.83-.83zm-18 18c-.243-.04-.215-.398.032-.398H21.5a.5.5 0 0 1 .5.5v14.98c0 .246-.359.274-.398.031l-1.966-12.317a1 1 0 0 0-.83-.83zm9-9c-.243-.04-.215-.398.031-.398H30.5a.5.5 0 0 1 .5.5v14.98c0 .246-.359.274-.398.031L28.75 20.91a2 2 0 0 0-1.66-1.66z\"/>"
	},
	finance: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M18 22h12m-12 6h12m-5.992-6v12M30 15l-6 6l-6-6\"/></g>"
	},
	financing: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><rect width=\"10\" height=\"10\" x=\"24\" y=\"16.929\" rx=\"2\" transform=\"rotate(45 24 16.929)\"/></g>"
	},
	"financing-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M15 14.385C19.126 16 24.01 16 24.01 16s4.87 0 8.99-1.615c4.502 5.254 7.657 12.18 9.73 18.013C44.829 38.303 40.2 44 33.934 44H14.02c-6.252 0-10.874-5.67-8.786-11.563C7.298 26.614 10.455 19.686 15 14.385Z\"/><path stroke-linecap=\"round\" d=\"M18 28h12m-12 6h12m-5.991-6v10M30 22l-6 6l-6-6\"/><path stroke-linecap=\"round\" d=\"M24 16c7.18 0 13-2.686 13-6s-5.82-6-13-6s-13 2.686-13 6s5.82 6 13 6\" clip-rule=\"evenodd\"/></g>"
	},
	"financing-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M12 9.927V7a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3h-2.983\"/><rect width=\"34\" height=\"34\" x=\"4\" y=\"10\" stroke-linejoin=\"round\" rx=\"3\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m15 17l6 6l6-6m-13 8h14m-14 6h14m-7-6v11\"/></g>"
	},
	find: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M4 7h40M4 23h11M4 39h11\"/><path d=\"M31.5 34a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17Z\"/><path stroke-linecap=\"round\" d=\"m37 32l7 7.05\"/></g>"
	},
	"find-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M23.8 14C29.433 14 34 18.477 34 24s-4.567 10-10.2 10c-2.612 0-4.995-.963-6.8-2.546\"/><path d=\"M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20a19.93 19.93 0 0 1-13.927-5.646A19.94 19.94 0 0 1 4 24a19.93 19.93 0 0 1 5.556-13.833\"/><path d=\"M9.556 10.167L24 24L10.073 38.354\"/></g>"
	},
	fingernail: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4\"/><path d=\"m38 9.472l.343 1.056h1.11l-.898.652l.343 1.056l-.898-.652l-.898.652l.343-1.056l-.898-.652h1.11z\"/><rect width=\"12\" height=\"24\" x=\"18\" y=\"13\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18 25c-2 0-5 2.118-5 6v9.784M30 25c2 0 5 2.118 5 6v9.5\"/></g>"
	},
	fingerprint: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M18 43V22a6 6 0 0 1 12 0v21\"/><path d=\"M12 40V22c0-6.627 5.373-12 12-12s12 5.373 12 12v18\"/><path d=\"M6 35V22c0-9.941 8.059-18 18-18s18 8.059 18 18v13m-18 9V31m0-6.375v-2.75\"/></g>"
	},
	"fingerprint-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42.43 12.04C37.703 7.382 31.155 4.5 23.919 4.5c-7.193 0-13.706 2.849-18.428 7.457m1.176 17.518v-.058c0-9.573 7.76-17.333 17.333-17.333m7.17 1.546c5.995 2.728 10.163 8.77 10.163 15.787v.013M14.25 37v-7.584c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75V37\"/><path d=\"M17.526 43.5c1.963-.485 3.224-2.554 3.224-4.304V30.5a3.25 3.25 0 0 1 6.5 0v8.696\"/></g>"
	},
	"fingerprint-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 44V22a6 6 0 0 1 12 0v22\"/><path d=\"M13 44V22c0-6.627 5.373-12 12-12s12 5.373 12 12v22\"/><path d=\"M7 44V22c0-9.941 8.059-18 18-18s18 8.059 18 18v22m-18 0V22\"/></g>"
	},
	fire: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44c8.235 0 15-6.526 15-14.902c0-2.056-.105-4.26-1.245-7.686s-1.369-3.868-2.574-5.984c-.515 4.317-3.27 6.117-3.97 6.655c0-.56-1.666-6.747-4.193-10.45C24.537 8 21.163 5.617 19.185 4c0 3.07-.863 7.634-2.1 9.96c-1.236 2.325-1.468 2.41-3.013 4.14s-2.253 2.265-3.545 4.365S9 27.362 9 29.418C9 37.794 15.765 44 24 44Z\"/>"
	},
	"fire-extinguisher": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 20a8 8 0 1 1 16 0v24H6z\"/><path d=\"M30 44h12l-6-18z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m36 26l-6 18h12zm0 0v-2c0-7.542 0-11.314-2.343-13.657S27.543 8 20 8h-2m-8 0H6\"/><circle cx=\"14\" cy=\"8\" r=\"4\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/></g>"
	},
	"fire-extinguisher-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M16 18a8 8 0 1 1 16 0v24a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"M24 24v10\"/><path d=\"M20 5h9v4h-9zm9 0l9-1v6l-9-1z\"/><path stroke-linecap=\"round\" d=\"M20 7c-3 0-7.5-.5-10 2c-2.417 2.416-2 5-2 9\"/></g>"
	},
	"fire-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 21c0 7.18-5.82 13-13 13s-13-5.82-13-13s5-10 7-17c8 3.5 8 14 8 14s2-6 8-7.5c.5 5.5 3 7.434 3 10.5M7 36l32 8M7 44l32-8\"/>"
	},
	fireworks: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 42l8.674-24.736L31 34.038z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m23 19l5-5q4-4 1-7m0 18l5-5q5-5 10 0\"/><path fill=\"currentColor\" d=\"M20 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m22-1a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 23a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-3 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4\"/></g>"
	},
	first: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24.68 20.037c-1.115-.299-4.415-1.357-9.51 2.055c-3.031 2.03-4.306 5.148-4.736 7.438c-.204 1.089.72 1.967 1.82 1.836c.796-.094 1.68-.241 2.348-.467c1.97-.667 1.712-1.93 2.717-3.453s3.533-2.04 5.612-.885c2.08 1.154 2.747 3.125 2.299 4.797s-1.453 3.194-3.981 3.71c-2.528.518-3.343-.895-5.98-2.199c-1.374-.68-3.167.202-4.25.899a1.514 1.514 0 0 0-.609 1.822c.175.463.415 1.005.729 1.548c.816 1.413 4.378 5.95 8.985 6.588s9.404-1.66 12.12-5.114c2.717-3.452 2.797-8.209.907-12.299\"/><path d=\"m33.046 26.42l-4.77-22.264c-.106-.5-.575-.845-1.069-.715c-1.161.307-2.636 1.077-2.705 2.87c-.09 2.305.364 20.038.97 23.256\"/></g>"
	},
	"first-aid-kit": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 20v18a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V20M5 14h38v6H5zm26-6H17v6h14z\"/><path stroke-linecap=\"round\" d=\"M20 30h8m-4-4v8\"/></g>"
	},
	fish: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15.38 32.844C9.725 31.429.532 34.965 9.725 38.501c3.535 9.192 7.07 0 5.657-5.657m7.1-22.596c-4.903-.014-11.232 1.536-12.029 3.727c-.577 1.589 2.425 3.702 6.25 4.818m21.275 6.949c.013 4.904-1.537 11.232-3.728 12.03c-1.589.577-3.702-2.425-4.818-6.251\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 25.765C44.662 19.7 40.124 8.09 40.124 8.09S28.108 4.56 22.45 10.216s-7.07 22.628-7.07 22.628s15.956-1.015 22.62-7.08\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38.008 25.773s-6.718-1.06-10.607-4.95c-3.89-3.889-4.95-10.606-4.95-10.606\"/><circle cx=\"33.766\" cy=\"14.459\" r=\"2\" fill=\"currentColor\" transform=\"rotate(45 33.766 14.46)\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M41 20.945c-.54 1.76-1.478 3.434-3 4.82c-1.648 1.5-3.864 2.69-6.266 3.633M27 7.656c-1.697.489-3.282 1.294-4.549 2.56c-1.184 1.186-2.183 2.867-3.022 4.784\"/></g>"
	},
	"fish-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 24c-1.215 4.69-7.962 8.467-11 9c-2.43 5.97-8.962 6.533-12 6l4-6c-4.456-.427-9.975-5.046-12-7c-2.614 2.85-6.806 5.08-9 5.969C7.646 24.294 5.519 17.309 4 15c2.835 0 7.143 3.224 9 5c2.025-2.132 8.962-5.112 12-6l-4-5c7.696-.853 11.156 2.868 12 5c7.696 1.706 10.662 7.69 11 10\"/><circle cx=\"36\" cy=\"24\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	fishing: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.987 34.552L12 29h27a3 3 0 1 1 0 6H22.564a3 3 0 0 1-1.577-.448\"/><path stroke-miterlimit=\"2\" d=\"M30 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" d=\"M34 32c4-3 2.5-9.566 1.5-11.5S32.55 16 32.55 16s-1.05 0-2.05 1c-2.678 2.679-4.5 6-7 6s-6-2-6-2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20 15c-3.596-4.496-6.385-6.566-12-6.938C6.899 7.989 6 8.895 6 10v18m1 15c4 0 2.938-2 6-2c3.063 0 2 2 5.5 2s2.5-2 6-2s2.938 2 6 2c3.063 0 1.5-2 5-2s2.563 2 6.5 2\"/></g>"
	},
	fist: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M34 41c-5.83 3.175-12.5 2.5-16 1S6 35.5 6 27c0-4.247 5.771-6.33 7.51-6.86a.69.69 0 0 0 .49-.652V12a3.5 3.5 0 1 1 7 0V9.5a3.5 3.5 0 0 1 7 0V12a3.5 3.5 0 1 1 7 0v4.493a3.5 3.5 0 0 1 7 .003V30c0 4-3.87 8.751-8 11\"/>"
	},
	fitness: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M43 26c-2.453-1.008-7-5-15 1c-2.103-1.176-6-4-12 1c-.701-2.856-.841-9.356 0-15c.35-.84 1.794-1.435 6 3l5-5c-.35-2.184-3-5-11-5c-3 0-5.738 2.565-7 7c-1.577 4.535-4 15-4 21c0 1.848 2.5 6 12 6c2 0 7.85.225 15-3l6 5\"/>"
	},
	five: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M11 40L6 25.5l-1.958-9.792a2 2 0 0 1-.042-.42v-.16c0-1.371 1.782-1.902 2.532-.755q.084.127.147.265l3.932 8.519a1 1 0 0 0 1.259.517l.13-.049l-1.87-13.68a2.32 2.32 0 0 1 .442-1.707a1.547 1.547 0 0 1 2.166-.31l.133.1c.41.308.719.73.886 1.215l4.112 11.879a.562.562 0 0 0 1.092-.22l-.883-13.685a2.7 2.7 0 0 1 .785-2.08a1.797 1.797 0 0 1 2.393-.132l.34.272a3 3 0 0 1 1.088 1.865l2.239 13.88a.568.568 0 0 0 1.127-.036l1.328-13.724a3 3 0 0 1 1.112-2.054l.206-.165a1.865 1.865 0 0 1 2.484.138c.525.524.82 1.236.82 1.978v19.51a1 1 0 0 0 1.54.84l4.472-2.874A4 4 0 0 1 40.175 24h2.068a1 1 0 0 1 .86 1.51L34.5 40S31 44 23 44s-11.333-2.667-12-4\"/>"
	},
	"five-ellipses": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M41 33c1.657 0 3-3.582 3-8s-1.343-8-3-8s-3 3.582-3 8s1.343 8 3 8M7 33c1.657 0 3-3.582 3-8s-1.343-8-3-8s-3 3.582-3 8s1.343 8 3 8m17 11c3.314 0 6-8.954 6-20S27.314 4 24 4s-6 8.954-6 20s2.686 20 6 20m10-4c2.21 0 4-7.163 4-16S36.21 8 34 8s-4 7.163-4 16s1.79 16 4 16m-20 0c2.21 0 4-7.163 4-16S16.21 8 14 8s-4 7.163-4 16s1.79 16 4 16\"/>"
	},
	"five-five": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14.223 37.471L6.55 26.984a4.423 4.423 0 0 1 6.696-5.738L16 24V7.25a3.25 3.25 0 0 1 6.5 0v-1a3.25 3.25 0 0 1 6.5 0v1a3.25 3.25 0 0 1 6.5 0v4a3.25 3.25 0 0 1 6.5 0v19.058c0 2.73-.838 5.417-2.38 7.671C37.056 41.726 32.785 44 28.245 44H27.09a15.94 15.94 0 0 1-12.867-6.529\"/>"
	},
	"five-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M29 14.01h-9v7.024C20 21 22 20 25 20s4 2.034 4 6s-1 7-5 7c-3 0-4-2-4-3.992\"/></g>"
	},
	"five-star-badge": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M23.103 20.817a1 1 0 0 1 1.794 0l2.985 6.048a1 1 0 0 0 .753.548l6.675.97a1 1 0 0 1 .554 1.705l-4.83 4.708a1 1 0 0 0-.288.885l1.14 6.648a1 1 0 0 1-1.45 1.054l-5.97-3.138a1 1 0 0 0-.931 0l-5.97 3.138a1 1 0 0 1-1.452-1.054l1.14-6.648a1 1 0 0 0-.287-.885l-4.83-4.708a1 1 0 0 1 .554-1.706l6.675-.97a1 1 0 0 0 .753-.547zM36 4H12v10l12 5l12-5z\"/>"
	},
	flag: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 44h8m-4 0V4m28 2H12v16h28l-4-8z\"/>"
	},
	"flash-payment": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M31 4H16l-6 23h8l-4 17l26-28H28z\"/><path d=\"m21 11l-2 8\"/></g>"
	},
	flashlamp: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m23 14l-5 10h12l-5 10\"/></g>"
	},
	flashlight: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17 22.196a.4.4 0 0 0-.157-.314A19.6 19.6 0 0 1 9 6.196V4h30v2.196a19.6 19.6 0 0 1-7.843 15.686a.4.4 0 0 0-.157.314V44H17z\"/><path stroke-linecap=\"round\" d=\"M38 11H10m14 17.008v4M17 22A20 20 0 0 1 9 6V4m30 0v2a20 20 0 0 1-8 16v0\"/></g>"
	},
	flask: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M37.845 35.022L44 41.316V44H4v-2.684l6.118-6.257z\"/><path stroke-linecap=\"round\" d=\"M10.104 35.074L18 27V6h12v21l7.873 8.05M11 35h26m-7-21h-6m6 6h-6\"/></g>"
	},
	"flight-airflow": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M6 25c0-9.941 8.283-18 18.5-18S43 15.059 43 25\"/><path stroke-linejoin=\"round\" d=\"m10 35l-1.064-5s-3.435 3.109-4.58 5.74C3.211 38.37 4.852 41 8 41h36l-8-5.978z\"/><path stroke-linejoin=\"round\" d=\"M29 35L18 25h-3l2 10\"/></g>"
	},
	"flight-safety": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M38.986 23c-.313 10.709-5.866 16.522-13.984 20c-4.393-1.881-8.034-4.447-10.502-8.101M39 19v-8.744L25.007 5L11 10.256v11.773c0 2.587.294 4.9.848 6.971\"/><path stroke-linecap=\"round\" d=\"M9.268 30.632c-1.373-1.257-2.99-3.877-3.587-4.027c0 0-1.798 4.434-1.68 7.395c.117 2.96 2.896 4.635 5.824 3.22S44 20 44 20l-9-2z\"/><path stroke-linecap=\"round\" d=\"m28 21l-9-3l-2 1l3 6\"/></g>"
	},
	"flip-camera": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 11h5l2-4h10l2 4h5v16H12z\"/><circle cx=\"24\" cy=\"18\" r=\"4\"/><path d=\"M24 38C12.954 38 4 33.523 4 28c0-1.422.594-2.775 1.664-4M24 38l-4-4m4 4l-4 4m12-4.832C39.064 35.625 44 32.1 44 28c0-1.422-.594-2.775-1.664-4\"/></g>"
	},
	"flip-horizontally": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 6v36\"/><path d=\"m4 34l12-22v22zm40 0H32V12z\"/></g>"
	},
	"flip-vertically": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M42 24H6\"/><path d=\"m14 4l22 12H14zm0 40V32h22z\"/></g>"
	},
	flirt: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M26 21c-2-.5-4.753-1.638-8.83 1.092c-3.03 2.03-4.305 5.148-4.735 7.438c-.205 1.089.72 1.967 1.82 1.836c.796-.094 1.68-.24 2.347-.467c1.97-.667 1.712-1.93 2.717-3.453s3.533-2.04 5.613-.885c2.08 1.154 2.746 3.125 2.298 4.797s-1.453 3.194-3.98 3.711s-3.344-.896-5.981-2.2c-1.374-.68-3.166.202-4.249.899a1.514 1.514 0 0 0-.61 1.822c.175.463.415 1.005.729 1.548c.816 1.413 4.378 5.951 8.985 6.588s9.404-1.66 12.12-5.114c2.718-3.452 2.798-8.209.907-12.299\"/><path d=\"M35.046 26.42L32.001 14l-9.293-9.293c-.39-.39-1.02-.384-1.335.07c-.753 1.085-1.751 3.154-.372 5.223c.487.731 4 5 4 5s2.097 12.574 2.472 14.567\"/></g>"
	},
	float: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 40c11.046 0 20-7.163 20-16S35.046 8 24 8S4 15.163 4 24s8.954 16 20 16Z\"/><path d=\"M24 28c5.523 0 10-2.686 10-6s-4.477-6-10-6s-10 2.686-10 6s4.477 6 10 6Z\"/><path stroke-linecap=\"round\" d=\"M24 16V8m8 10s2.625-4 7-4m-23 4s-2-4-7-4m9 13s-6 2-7 9m19-9s6.5 2 7 9\"/></g>"
	},
	"floor-tile": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M28 6L6 28m36-8L20 42M40 8L8 40m4-18l7 7m10-10l7 7\"/></g>"
	},
	fm: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"22\" r=\"4\"/><path d=\"M21.524 33.054c1.238-1.405 3.714-1.405 4.952 0s0 10.307-.825 11.243c-.826.937-2.476.937-3.302 0c-.825-.936-2.063-9.838-.825-11.243m9.443-2.541A10.98 10.98 0 0 0 35 22c0-6.075-4.925-11-11-11s-11 4.925-11 11c0 3.431 1.571 6.496 4.033 8.513\"/><path d=\"M31.926 38.166C37.893 35.235 42 29.096 42 22c0-9.941-8.059-18-18-18S6 12.059 6 22c0 7.097 4.107 13.234 10.074 16.166\"/></g>"
	},
	focus: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 6H8a2 2 0 0 0-2 2v8m10 26H8a2 2 0 0 1-2-2v-8m26 10h8a2 2 0 0 0 2-2v-8M32 6h8a2 2 0 0 1 2 2v8\"/><rect width=\"20\" height=\"20\" x=\"14\" y=\"14\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"10\"/><circle r=\"3\" fill=\"currentColor\" transform=\"matrix(-1 0 0 1 24 24)\"/></g>"
	},
	"focus-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 6H8a2 2 0 0 0-2 2v8m10 26H8a2 2 0 0 1-2-2v-8m26 10h8a2 2 0 0 0 2-2v-8M32 6h8a2 2 0 0 1 2 2v8\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"4\" d=\"M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-14v-4m0 22v-4m11-7h-4m-14 0h-4\"/><path fill=\"currentColor\" d=\"M24 26a2 2 0 1 0 0-4a2 2 0 0 0 0 4\"/></g>"
	},
	fog: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M9.455 30.994A13.95 13.95 0 0 1 4 19.885C4 12.217 10.105 6 17.636 6c6.297 0 11.598 4.346 13.166 10.253a8.9 8.9 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.257c0 3.795-2.244 7.058-5.455 8.486\"/><path d=\"M22.243 15.757a6 6 0 0 0-8.485 8.485M20 34h8m-18 8h10m8 0h10M26 26h8\"/></g>"
	},
	"fold-up-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 10h36M6 20h36M6 40l18-14l18 14\"/>"
	},
	folder: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M7 6a2 2 0 0 1 2-2h30a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zm9 23h4m-4 6h10\"/><path d=\"M8 5s3.765 13 16 13S40 5 40 5\"/><circle cx=\"24\" cy=\"18\" r=\"4\"/><path d=\"M15 4H9a2 2 0 0 0-2 2v6m26-8h6a2 2 0 0 1 2 2v6\"/></g>"
	},
	"folder-block": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><circle cx=\"25\" cy=\"27\" r=\"7\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m27 25l-4 4\"/></g>"
	},
	"folder-block-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15\"/><circle cx=\"35\" cy=\"35\" r=\"8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m37 33l-4 4\"/></g>"
	},
	"folder-close": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm38 14H5\"/><path stroke-linecap=\"round\" d=\"M5 16v12m38-12v12\"/></g>"
	},
	"folder-code": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"m28 22l5 5l-5 5m-8-10l-5 5l5 5\"/></g>"
	},
	"folder-code-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15m16-13l5 5l-5 5\"/><path d=\"m30 29l-5 5l5 5\"/></g>"
	},
	"folder-conversion": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"M17 24h14m-14 6h14m0-6l-5-5m-4 16l-5-5\"/></g>"
	},
	"folder-conversion-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15m5-11h14m-14 6h14m0-6l-5-5m-4 16l-5-5\"/>"
	},
	"folder-download": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"m30 28l-6.007 6L18 28.013M24 20v14\"/></g>"
	},
	"folder-failed": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"m19 22l10 10m0-10L19 32\"/></g>"
	},
	"folder-failed-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15m8-12l10 10m0-10L30 40\"/>"
	},
	"folder-focus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"m24 20l2.243 4.913l5.366.615l-3.98 3.651l1.073 5.293L24 31.816l-4.702 2.656l1.073-5.293l-3.98-3.651l5.366-.615z\"/></g>"
	},
	"folder-focus-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15\"/><path d=\"m35 27l2.243 4.913l5.365.615l-3.979 3.651l1.073 5.293L35 38.816l-4.702 2.656l1.073-5.293l-3.98-3.651l5.366-.615z\"/></g>"
	},
	"folder-lock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"M17 26h14v8H17zm10 0v-3a3 3 0 1 0-6 0v3\"/></g>"
	},
	"folder-lock-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15\"/><path d=\"M29 34h14v8H29zm10 0v-3a3 3 0 1 0-6 0v3\"/></g>"
	},
	"folder-minus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 9a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"M17.95 28h12\"/></g>"
	},
	"folder-music": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"m30 20l-4 .969V30.5\"/><circle cx=\"22\" cy=\"30\" r=\"4\" stroke-linecap=\"round\"/></g>"
	},
	"folder-music-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15\"/><path d=\"m40 28l-4 .969V38.5\"/><circle cx=\"32\" cy=\"38\" r=\"4\"/></g>"
	},
	"folder-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v36a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z\"/><circle cx=\"11\" cy=\"35\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M11 11v14M23.978 9.756l10.06-2.515a1 1 0 0 1 1.21.72l7.5 29.063a1 1 0 0 1-.725 1.22l-10.06 2.515a1 1 0 0 1-1.211-.72l-7.5-29.063a1 1 0 0 1 .726-1.22\"/><circle cx=\"35\" cy=\"32\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m31 16l2.5 10\"/></g>"
	},
	"folder-open": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 9v32l5-20h30.5v-6a2 2 0 0 0-2-2H24l-5-6H6a2 2 0 0 0-2 2\"/><path d=\"m40 41l4-20H8.813L4 41z\"/></g>"
	},
	"folder-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"M18 27h12m-6-6v12\"/></g>"
	},
	"folder-protection": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"M18 22.8c0-.933 6-2.8 6-2.8s6 1.867 6 2.8c0 7.467-6 11.2-6 11.2s-6-3.733-6-11.2\"/></g>"
	},
	"folder-protection-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15\"/><path d=\"M28 30.8c0-.933 6-2.8 6-2.8s6 1.867 6 2.8c0 7.467-6 11.2-6 11.2s-6-3.733-6-11.2\"/></g>"
	},
	"folder-quality": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"M19.8 21h8.4l2.8 3.53L24 33l-7-8.47z\"/></g>"
	},
	"folder-quality-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15\"/><path d=\"M29.8 29h8.4l2.8 3.53L34 41l-7-8.47z\"/></g>"
	},
	"folder-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><circle cx=\"22\" cy=\"26\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m27 30l5 4\"/></g>"
	},
	"folder-search-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15\"/><circle cx=\"32\" cy=\"32\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m37 36l5 4\"/></g>"
	},
	"folder-settings": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><circle cx=\"24\" cy=\"28\" r=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 21v3m0 8v3m4.828-12l-2.121 2.121M20.828 31l-2.121 2.121M19 23l2.121 2.121M27 31l2.121 2.121M17 28h3m8 0h3\"/></g>"
	},
	"folder-settings-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15\"/><circle cx=\"35\" cy=\"35\" r=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M35 28v3m0 8v3m4.828-12l-2.121 2.121M31.828 38l-2.121 2.121M30 30l2.121 2.121M38 38l2.121 2.121M28 35h3m8 0h3\"/></g>"
	},
	"folder-success": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"m18 29l5 4l9-11\"/></g>"
	},
	"folder-success-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15m7-4l5 4l9-11\"/>"
	},
	"folder-upload": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"M30 25.987L24 20l-6 6m6-6v14\"/></g>"
	},
	"folder-withdrawal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"m21 23l-5 5l5 5\"/><path stroke-linecap=\"round\" d=\"M16 28h16v-6\"/></g>"
	},
	"folder-withdrawal-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15m10-9l-5 5l5 5\"/><path d=\"M27 38h16v-8\"/></g>"
	},
	"follow-up-date-sort": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M6 5v25.004h36V5M30 37l-6 6l-6-6m6-7v13\"/><path stroke-linejoin=\"round\" d=\"M27.989 10.979L33 16l-5.011 5.09\"/><path d=\"M15 16.001h18\"/></g>"
	},
	"font-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><circle cx=\"22.834\" cy=\"22.834\" r=\"17\" stroke-linejoin=\"round\"/><path d=\"m35 35l6 6\"/><path stroke-linejoin=\"round\" d=\"M23 17v14m-5-14h10\"/></g>"
	},
	"font-size": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 10.933V6h32v4.933M24 6v36m-8 0h16\"/>"
	},
	"font-size-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 44L24 4l20 40M12 28h24\"/>"
	},
	foot: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 8c1.766 7.879 2.783 24.837-5.693 28.618c-.481.316-2.15.851-5.618.473c-2.006-.219-4.284 2.263-1.123 5.673c.776.838 2.504 1.702 6.741.945h7.705c1.926 0 5.105-2.363 8.186-8.036c1.124-1.576 4.334-4.822 8.187-5.2c2.408-.158 6.838-2.08 5.297-8.51C39.926 15.506 33.54 9.296 32 4\"/>"
	},
	football: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\"/><path d=\"m30.093 6.5l-6.024 4.359v4.359l7.745 6.102l4.302-1.743l2.581-6.974M18.046 6.5l6.023 4.359v4.359l-7.744 6.102l-4.302-1.743l-2.582-6.974\"/><path d=\"m6 22.192l6.023-2.615l4.303 1.743l2.581 9.59l-2.581 3.487H8.58\"/><path d=\"M16.325 40.5v-6.103l2.582-3.487h10.325l2.582 3.487V40.5\"/><path d=\"M39.558 34.397h-7.744l-2.582-3.487l2.582-9.59l4.302-1.743L43 23.064\"/></g>"
	},
	forbid: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\" clip-rule=\"evenodd\"/><path d=\"m15 15l18 18\"/></g>"
	},
	fork: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M37 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-26 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm13 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" d=\"M11 12v3c0 7 13 10 13 17v4v-4c0-7 13-10 13-17v-3\"/></g>"
	},
	"fork-spoon": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 4v40M8 5v10c0 5 6 5 6 5s6 0 6-5V5m14 15v24m6-32c0 4.418-2.686 8-6 8s-6-3.582-6-8s2.686-8 6-8s6 3.582 6 8\"/>"
	},
	form: {
		body: "<g fill=\"none\"><rect width=\"40\" height=\"32\" x=\"4\" y=\"8\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\"/><path d=\"M4 29h40z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 29h40\"/><path d=\"M4 19h40z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 19h40\"/><path d=\"M17 40V19z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M17 40V19\"/><path d=\"M4 38V17z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 38V17\"/><path d=\"M44 38V17z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 38V17\"/><path d=\"M31 40V19z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M31 40V19M9 40h30\"/></g>"
	},
	"form-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M6 14h34m-10 8h12m-12 8h12m-19-8h1m-1 8h1M14 6v36\"/></g>"
	},
	format: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M8 24h32v18H8zM4 13h14V6h12v7h14v11H4z\"/><path d=\"M16 32v10\"/></g>"
	},
	"format-brush": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34 5H6v15h28z\"/><path stroke-linecap=\"round\" d=\"M34.025 12H43v16.101l-24 3.1V43\"/></g>"
	},
	formula: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m40 9l-3-3H8l18 18L8 42h29l3-3\"/>"
	},
	"foundation-makeup": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13 19a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v19s0 6-6 6h-8c-6 0-6-6-6-6zm5-7h10v5H18zm0 0V9c0-3 3-5 6-5h11s-7 2-7 6v2\"/>"
	},
	four: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13 40L8 25.5l-1.958-9.792a2 2 0 0 1-.042-.42v-.16c0-1.371 1.782-1.902 2.532-.755q.084.127.147.265l3.932 8.519a1 1 0 0 0 1.259.517l.13-.049l-1.87-13.68a2.32 2.32 0 0 1 .442-1.707a1.547 1.547 0 0 1 2.166-.31l.133.1c.41.308.719.73.886 1.215l4.112 11.879a.562.562 0 0 0 1.092-.22l-.883-13.685a2.7 2.7 0 0 1 .785-2.08a1.797 1.797 0 0 1 2.393-.132l.34.272a3 3 0 0 1 1.088 1.865l2.239 13.88a.568.568 0 0 0 1.127-.036l1.328-13.724a3 3 0 0 1 1.112-2.054l.206-.165a1.865 1.865 0 0 1 2.485.138c.524.524.819 1.236.819 1.978V19.91a1 1 0 0 0 .017.175c.112.514.79 3.183 2.983 3.914c.907.302 2.364 2.8 3.373 4.727c.74 1.414.669 3.097-.106 4.492L36.5 40S33 44 25 44s-11.333-2.667-12-4\"/>"
	},
	"four-arrows": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m24 24l-5-5m5-11v16zm0 16l5-5zm0 0l-5 5m5 11V24zm0-16l5 5zm-4-12a4 4 0 1 0 0-8a4 4 0 0 0 0 8M8 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-8h32m0 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8M28 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8\"/>"
	},
	"four-four": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M25.745 44h-.896c-5.21 0-10.07-2.626-12.925-6.984l-2.195-3.35a5.63 5.63 0 0 1 1.072-7.382l2.288-1.936c.26-.22.411-.545.411-.887V7.25a3.25 3.25 0 0 1 6.5 0v-1a3.25 3.25 0 0 1 6.5 0v1a3.25 3.25 0 0 1 6.5 0v4a3.25 3.25 0 0 1 6.5 0v19.058c0 2.73-.838 5.417-2.38 7.671C34.556 41.726 30.285 44 25.745 44\"/>"
	},
	"four-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M26.977 34V14L18 26.997v2.023h12\"/></g>"
	},
	"four-leaves": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 4S33.59 2.201 30 8c-2.672 4.317 1 9 1 9M44 4L31 17M44 4s1.799 10.41-4 14c-4.317 2.672-9-1-9-1m0 0l-3 3m3 11l-3-3m16 16s-10.41 1.799-14-4c-2.672-4.317 1-9 1-9zm0 0s1.799-10.41-4-14c-4.317-2.672-9 1-9 1zm0 0L31 31zM17.264 17l3 3m-16-16s10.41-1.799 14 4c2.672 4.317-1 9-1 9zm0 0s-1.8 10.41 4 14c4.316 2.672 9-1 9-1zm0 0l13 13zm13 27l3-3m-16 16s10.41 1.799 14-4c2.672-4.317-1-9-1-9zm0 0s-1.8-10.41 4-14c4.316-2.672 9 1 9 1zm0 0l13-13z\"/>"
	},
	"four-point-connection": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 28v12h12m8 0h12V28m0-8V8H28m-8 0H8v12m36 0h-8v8h8zm-32 0H4v8h8zm16 16h-8v8h8zm0-32h-8v8h8zm-4 14v12m-6-6h12M28 8l12 12M20 8L8 20m12 20L8 28m32 0L29 40\"/>"
	},
	"four-round-point-connection": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12\"/><path d=\"M6.283 14.71A19.9 19.9 0 0 0 4.4 20M14.71 6.283A19.9 19.9 0 0 1 20 4.4M38 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12\"/><path d=\"M33.29 6.283A19.9 19.9 0 0 0 28 4.4m13.716 10.31A19.9 19.9 0 0 1 43.6 20M38 44a6 6 0 1 0 0-12a6 6 0 0 0 0 12\"/><path d=\"M41.716 33.29A19.9 19.9 0 0 0 43.6 28M33.29 41.716A19.9 19.9 0 0 1 28 43.6M10 44a6 6 0 1 0 0-12a6 6 0 0 0 0 12\"/><path d=\"M14.71 41.716A19.9 19.9 0 0 0 20 43.6M6.283 33.29A19.9 19.9 0 0 1 4.4 28M24 30V18m-6 6h12z\"/></g>"
	},
	foursquare: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 4H14v40l10-18h8zm-3 11H25m11.636-6l-3.273 12\"/>"
	},
	"freeze-column": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M40 6H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M16.123 6L6 15m13-3L6 24m13-3L6 33m13-3L6 42M19 6v36\"/></g>"
	},
	"freeze-line": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M40 6H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M6 19.059h36M16.123 6L6 15m36-4.993L32 19M26.123 6l-14.2 12.624M36.123 6l-14.2 12.624\"/></g>"
	},
	"freezing-line-column": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M40 6H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M16.123 6L6 15m20.003-9L6 24M35 6L6 33m13-3L6 42m35-32L29.243 20.853M19 21v21m0-21h23\"/></g>"
	},
	"french-fries": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 22V12a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v9m21 0v-7a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v8m0 0V6a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v16\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7 18s7 5 17 5s17-5 17-5l-4.818 26H11.818z\"/><ellipse cx=\"24\" cy=\"33\" rx=\"6\" ry=\"3\"/></g>"
	},
	"friends-circle": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\"/><path d=\"M31 7v17z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M31 7v17\"/><path d=\"m16.636 6.636l14.142 14.142z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m16.636 6.636l14.142 14.142\"/><path d=\"M7 17h17z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7 17h17\"/><path d=\"M20.364 17.636L6.222 31.778z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20.364 17.636L6.222 31.778\"/><path d=\"M17 25v17z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M17 25v17\"/><path d=\"m17.636 27.636l14.142 14.142z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m17.636 27.636l14.142 14.142\"/><path d=\"M24 31h18z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 31h18\"/><path d=\"M42.364 16.636L28.222 30.778z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42.364 16.636L28.222 30.778M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14\"/></g>"
	},
	frigate: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M11 12v12l13-5l13 5V12zm8-5v5h10V7a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3\"/><path d=\"M12 44L6 26l18-7l18 7l-6 18\"/><path d=\"M4 42s4.663 2 8 2c5 0 7-2 12-2s7 2 12 2c3.337 0 8-2 8-2M24 19v23\"/></g>"
	},
	frog: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19.102 10.894c.424.775.641 1.629.67 2.512a28 28 0 0 1 3.728-.245c1.63 0 3.212.138 4.725.397a5.6 5.6 0 0 1 .673-2.664c1.76-3.209 6.415-3.846 10.4-1.423c3.983 2.422 5.787 6.988 4.028 10.198a5.2 5.2 0 0 1-1.745 1.877C42.496 23.1 43 24.8 43 26.58C43 33.99 34.27 40 23.5 40S4 33.992 4 26.58c0-1.98.624-3.861 1.744-5.554a5.2 5.2 0 0 1-1.07-1.357c-1.76-3.21.045-7.776 4.029-10.198s8.64-1.786 10.399 1.423Z\"/><circle cx=\"12\" cy=\"17\" r=\"2\" fill=\"currentColor\"/><circle cx=\"20.156\" cy=\"28.576\" r=\"2\" fill=\"currentColor\"/><circle cx=\"28.156\" cy=\"28.576\" r=\"2\" fill=\"currentColor\"/><circle cx=\"36\" cy=\"17\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"frowning-face-whit-open-mouth": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 29c5 0 7 4 7 4H17s2-4 7-4m7-9v1m-14-1v1\"/></g>"
	},
	fruiter: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 32c-4 0-13 .13-13-9.059c0-1.749.594-5.244 3.865-7.328a2.73 2.73 0 0 0 1.235-1.897C11.6 10.226 14.11 4 22 4c2.293 0 5.988.3 8.384 3.93c.416.631 1.096 1.059 1.838 1.204C35.79 9.83 42.058 13.276 42 20c.06 2.17-.443 5.346-4.506 7.37c-.846.421-1.379 1.313-1.546 2.243C35.497 32.117 33.277 35.375 27 36\"/><path d=\"M16 44c7.093-12.93 2.956-18.653 0-20l14-2c-6.72 9.339-3.422 18.558-.933 22z\"/></g>"
	},
	"full-dress-longuette": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m18 18l-4-8h20l-4 8v6l10.5 20H7l11-20zm2-14v6m8-6v6M18 21h12m-12-2v4m12-4v4\"/>"
	},
	"full-screen": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33 6h9v9m0 18v9h-9m-18 0H6v-9m0-18V6h9\"/>"
	},
	"full-screen-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 6l10 9.9m-10 26L16 32m26 9.9L32.1 32m9.8-26L32 15.9M33 6h9v9m0 18v9h-9m-18 0H6v-9m0-18V6h9\"/>"
	},
	"full-screen-play": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M16 40H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v6\"/><path d=\"M42 24H26a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V26a2 2 0 0 0-2-2Z\"/></g>"
	},
	"full-screen-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 6h12v12M18 6H6v12m24 24h12V30M18 42H6V30M42 6L29 19M19 29L6 42\"/>"
	},
	"full-selection": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34 5H8a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" d=\"M44 13.002V42a2 2 0 0 1-2 2H13.003M13 20.486l6 5.525l10-10.292\"/></g>"
	},
	fullwidth: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 6v36M17 19l-5 5m0 0l5 5m-5-5h24m-5-5l5 5m0 0l-5 5M6 6v36\"/>"
	},
	funds: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><ellipse cx=\"14\" cy=\"10\" rx=\"10\" ry=\"5\"/><path d=\"M4 10v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7\"/><path d=\"M4 17v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7\"/><path d=\"M4 24v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7\"/><path d=\"M4 31v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7\"/><ellipse cx=\"34\" cy=\"24\" rx=\"10\" ry=\"5\"/><path d=\"M24 24v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7\"/><path d=\"M24 31v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7\"/></g>"
	},
	"future-build-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M14 24c1.217-8.296 10-19 10-19s8.782 10.704 10 19c1.09 7.432-3 20-3 20H17s-4.091-12.568-3-20\"/><path d=\"M18 14h12m-15 6h18m-19 6h20m-19 6h18m-17 6h16\"/><path stroke-linejoin=\"round\" d=\"M4 44h40\"/><path d=\"M24 4v2\"/></g>"
	},
	"future-build-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m20 8l4-4l4 4v36h-8z\"/><path stroke-linecap=\"round\" d=\"m12 20l8-8v32h-8zM4 35l8-7v16H4zm24-23l8 8v24h-8zm8 16l8 6.5V44h-8z\"/></g>"
	},
	"future-build-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 44h40\"/><ellipse cx=\"24.5\" cy=\"7\" rx=\"13.5\" ry=\"3\"/><path d=\"M16 9s4.16 8.883 5 15c1.069 7.776-1 20-1 20M32.227 9s-4.16 8.883-5 15C26.157 31.776 28 44 28 44\"/></g>"
	},
	game: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M38.512 9.536A20.43 20.43 0 0 0 24.5 4C13.178 4 4 13.178 4 24.5S13.178 45 24.5 45a20.43 20.43 0 0 0 14.405-5.914L24 24z\"/><path d=\"M40 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" d=\"M17 13v8m-4-4h8\"/></g>"
	},
	"game-console": {
		body: "<g fill=\"none\"><rect width=\"28\" height=\"40\" x=\"10\" y=\"4\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 34h8m-4-4v8\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 10h16v9H16z\"/><circle cx=\"31\" cy=\"30\" r=\"2\" fill=\"currentColor\"/><circle cx=\"31\" cy=\"38\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"game-console-one": {
		body: "<g fill=\"none\"><rect width=\"28\" height=\"40\" x=\"10\" y=\"4\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 12h16v10H16zm0 20h8m-4 4v-8\"/><rect width=\"4\" height=\"4\" x=\"27\" y=\"33\" fill=\"currentColor\" rx=\"2\"/><rect width=\"4\" height=\"4\" x=\"30\" y=\"26\" fill=\"currentColor\" rx=\"2\"/></g>"
	},
	"game-emoji": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 30H10a6 6 0 0 0 0 12h28a6 6 0 0 0 0-12m-2-8a8 8 0 1 0 0-16a8 8 0 0 0 0 16M4 14l9-9l9 9l-9 9z\"/>"
	},
	"game-handle": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M32 18H16C9.373 18 4 23.373 4 30s5.373 12 12 12h16c6.627 0 12-5.373 12-12s-5.373-12-12-12Z\"/><path stroke-linecap=\"round\" d=\"M16 26v8m-4-4h8m4-14V9.714h8V4\"/><path d=\"M32 34a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/></g>"
	},
	"game-ps": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 28H28v16h16zM13 4l9 16H4zm23 16a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z\"/><path stroke-linecap=\"round\" d=\"m4 28l16 16m0-16L4 44\"/></g>"
	},
	"game-three": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 30v3a7 7 0 0 1-7 7v0a7 7 0 0 1-7-7V19m24 11v3a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7V19\"/><rect width=\"38\" height=\"22\" x=\"5\" y=\"8\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"11\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M21 19h-8m4-4v8\"/><rect width=\"4\" height=\"4\" x=\"32\" y=\"15\" fill=\"currentColor\" rx=\"2\"/><rect width=\"4\" height=\"4\" x=\"28\" y=\"20\" fill=\"currentColor\" rx=\"2\"/></g>"
	},
	"game-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m20 15l4 4l4-4V4h-8zm0 18l4-4l4 4v11h-8zm13-5l-4-4l4-4h11v8zm-18-8l4 4l-4 4H4v-8z\"/>"
	},
	gamepad: {
		body: "<g fill=\"none\"><rect width=\"40\" height=\"28\" x=\"4\" y=\"13\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"14\"/><circle cx=\"31\" cy=\"22\" r=\"2\" fill=\"currentColor\"/><circle cx=\"35\" cy=\"27\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 27h10m-10 0h10m2-20v6m0-6v6m-7 9v10\"/></g>"
	},
	garage: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M6 5h36v38H6z\"/><path stroke-linejoin=\"round\" d=\"M12 12h24v6H12z\"/><path d=\"M16 18v25m16-25v25M16 24h16m-16 6h16m-16 6h16\"/></g>"
	},
	garlic: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M27 21c0 8 3 6 4 11c1.024 5.123-3.262 10-8.5 10c-5.239 0-9.5-4.775-9.5-10c0-4.61 2.5-7.5 5-9s5-3 5-7\"/><path d=\"M33 23c1 0 5.5 2 6 7c.452 4.523-2.5 11.5-15 12\"/><path d=\"M16.001 40c-7.847 0-11.999-4.703-12-10c0-5.705 8-11 10-12s3-2.952 3-5V9c0-1.38.62-2 2-2h9c1.14 0 2 1 2 2v3c0 2.051 1.27 3.673 3.087 4.578c.76.38 1.561.742 2.38 1.077c3.31 1.354 8.533 3.49 8.533 9.345c0 4.881-3.403 9-6 9\"/></g>"
	},
	gas: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M23.049 9.789c1.626-.436 3.291.508 3.72 2.109s-.541 3.25-2.167 3.686S6.708 17 6.708 17s14.715-6.776 16.34-7.211Zm.058 28.658c1.625.435 3.291-.509 3.72-2.11s-.542-3.25-2.168-3.686c-1.625-.436-17.893-1.647-17.893-1.647s14.715 7.007 16.34 7.443Z\"/><path stroke-linecap=\"round\" d=\"M34 16.004a5 5 0 1 1 4 8H16\"/></g>"
	},
	gastrointestinal: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M23 5q-1.719 6.69 0 9.938c1.719 3.247 5.7 5.042.574 9.373c-5.126 4.332-10.323.697-13.532.697S4.023 28.621 4.023 34q0 5.379 1.978 9\"/><path stroke-linejoin=\"round\" d=\"M29.984 5q-2.162 7.993.985 10.14c3.148 2.145 3.389-2.336 9.172.33s4.28 11.961.953 16.746C37.768 37 30.668 41.835 24.008 41s-9.135-8.98-9.992-8.98s-2.668.025-3.022 3.397q-.353 3.372 2.01 7.583\"/><path d=\"M35.645 28.29q-.867 2.568-2.93 4.01q-2.062 1.442-5.237 1.7\"/></g>"
	},
	gate: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M13 10v25m22-25v25\"/><path d=\"M8 18h32\"/><path stroke-linejoin=\"round\" d=\"M24 10v8m15-8H9L5 4s11.07 1 19 1s19-1 19-1zM10 35h6v9h-6zm22 0h6v9h-6z\"/></g>"
	},
	"gate-machine": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M6 42v-8h6v8zm30 0v-8h6v8zM24 14v3m0-11v2m0 18v4M9 6v28M39 6v28m-15 4v4m-4-21H9v9zm8 0h11v9z\"/><path d=\"M18 15H9m21 0h9\"/></g>"
	},
	gauze: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"26\" cy=\"24\" r=\"17\"/><circle cx=\"26\" cy=\"24\" r=\"7\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5 41h21\"/></g>"
	},
	gavel: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M11.075 37.08c-3.386 1.46-5.039 3.444-5.71 4.83c-.266.548.181 1.09.79 1.09h21.232c.742 0 1.212-.776.779-1.38c-1.75-2.438-4.384-3.977-5.777-4.552a.9.9 0 0 0-.357-.068h-10.57a1 1 0 0 0-.387.08\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m14.732 18.856l5-8.66l8.66 5l-5 8.66z\"/><path fill=\"currentColor\" d=\"m27.392 16.928l1-1.732a2 2 0 0 0-2.732.732zm-3 5.196l-1.732-1a2 2 0 0 0 .732 2.732zm2-3.464l12.99 7.5l2-3.464l-12.99-7.5zm11.99 9.232l-12.99-7.5l-2 3.464l12.99 7.5zm-12.258-4.768l3-5.196l-3.464-2l-3 5.196zm13.625 4.402a1 1 0 0 1-1.367.366l-2 3.464a5 5 0 0 0 6.83-1.83zm-.367-1.366a1 1 0 0 1 .367 1.366l3.464 2a5 5 0 0 0-1.83-6.83z\"/><rect width=\"14\" height=\"6\" x=\"21\" y=\"4\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"3\" transform=\"rotate(30 21 4)\"/><rect width=\"14\" height=\"6\" x=\"13\" y=\"17.856\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"3\" transform=\"rotate(30 13 17.856)\"/></g>"
	},
	gemini: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 6s11.588 8 20 8s20-8 20-8M4 42s11.588-8 20-8s20 8 20 8M15 12v24m18-24v24\"/>"
	},
	"general-branch": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M40 9H8a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M15 5v4m18-4v4M6 17h36M18 30h12m-6-6v12M6 11v12m36-12v12\"/></g>"
	},
	"geometric-flowers": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M28.991 27.991c3.515-3.514 1.3-11.429-4.95-17.677C17.794 4.065 9.88 1.849 6.365 5.364s-1.299 11.43 4.95 17.678c6.248 6.248 14.163 8.464 17.677 4.95\"/><path d=\"M28.991 19.065c3.515 3.514 1.299 11.429-4.95 17.677c-6.248 6.249-14.162 8.465-17.677 4.95s-1.299-11.43 4.95-17.678c6.248-6.248 14.163-8.464 17.677-4.95\"/><path d=\"M20.009 27.991c-3.515-3.514-1.299-11.429 4.95-17.677c6.248-6.249 14.162-8.465 17.677-4.95s1.299 11.43-4.95 17.678c-6.248 6.248-14.163 8.464-17.677 4.95\"/><path d=\"M20.009 19.065c-3.515 3.514-1.299 11.429 4.95 17.677c6.248 6.249 14.162 8.465 17.677 4.95s1.299-11.43-4.95-17.678c-6.248-6.248-14.163-8.464-17.677-4.95\"/></g>"
	},
	germs: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44c1.336 0 2.364-3.75 3.626-4c1.3-.257 2.833 2.979 4.03 2.483c1.217-.505.75-3.616 1.831-4.34c1.091-.73 3.73.924 4.655 0c.925-.925-1.478-4.052-.748-5.143c.725-1.082 4.584-.127 5.089-1.344c.496-1.197-3.304-3.543-3.047-4.843C39.686 25.55 44 25.336 44 24c0-1.335-3.75-2.64-4-3.903c-.257-1.3 2.979-2.556 2.483-3.752c-.505-1.218-4.364-.263-5.089-1.345c-.73-1.09 1.673-4.217.748-5.142S34.091 10.95 33 10.22c-1.082-.724-.127-4.196-1.345-4.701C30.46 5.022 28.3 7.905 27 7.648C25.738 7.397 25.336 4 24 4s-1.88 3.398-3.142 3.647c-1.3.258-3.317-2.625-4.513-2.13c-1.218.506-.263 3.617-1.345 4.341c-1.09.73-4.217-.925-5.142 0s1.667 4.052.937 5.142c-.725 1.082-4.773.127-5.278 1.345C5.021 17.54 8.257 19.24 8 20.54c-.25 1.262-4 2.125-4 3.46c0 1.336 4.097 1.927 4.347 3.19c.257 1.3-3.326 3.27-2.83 4.466c.505 1.217 4.29.262 5.014 1.344c.73 1.09-1.598 4.218-.673 5.142s4.051-1.287 5.142-.557c1.082.725.127 4.393 1.345 4.898c1.196.496 3.212-2.74 4.513-2.483c1.262.25 1.806 4 3.142 4Z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M29 29a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path fill=\"currentColor\" d=\"M16.5 26a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\"/></g>"
	},
	ghost: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m8 44l4-4l4 4l4-6l4 6l4-6l4 6l4-4l4 4V20c0-8.837-7.163-16-16-16S8 11.163 8 20z\"/><path stroke-linecap=\"round\" d=\"M19 20h2m10 0h2\"/></g>"
	},
	gift: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M41 44V20H7v24zm-17 0V20m17 24H7\"/><path d=\"M4 12h40v8H4z\"/><path stroke-linecap=\"round\" d=\"m16 4l8 8l8-8\"/></g>"
	},
	"gift-bag": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"36\" height=\"28\" x=\"6\" y=\"14\" stroke-linejoin=\"round\" rx=\"3\"/><path stroke-linejoin=\"round\" d=\"M6 32h36v7a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z\"/><circle cx=\"19\" cy=\"9\" r=\"5\"/><circle cx=\"28\" cy=\"10\" r=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m17 20l7-6l7 6\"/></g>"
	},
	"gift-box": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zM4 24h40M24 44V4M6 30V18m36 12V18M30 42H18M30 6H18\"/><path d=\"M24 24s7.897-3.546 9.099-4.747a3.077 3.077 0 1 0-4.352-4.352C27.546 16.103 24 24 24 24m0 0s-7.897-3.546-9.099-4.747m9.1 4.747s-3.547-7.897-4.748-9.099M24 24s7.897 3.546 9.099 4.747M24 24s3.546 7.897 4.747 9.099M24 23.999s-7.897 3.547-9.099 4.748a3.077 3.077 0 1 0 4.352 4.352c1.201-1.202 4.747-9.1 4.747-9.1\"/></g>"
	},
	girl: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"10\" r=\"6\"/><path d=\"M27.23 16h-6.46L10 36h28zM27 36v8m-6-8v8\"/></g>"
	},
	"girl-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"11\" r=\"7\"/><path d=\"M27 24h-6L8 44h32z\"/></g>"
	},
	"girl-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"10\" r=\"6\"/><path d=\"M28 44v-8h10L27.23 16h-6.46L10 36h10v8\"/></g>"
	},
	github: {
		body: "<g fill=\"currentColor\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24s-10.745 24-24 24S0 37.255 0 24\"/><path d=\"M19.183 45.472q-.29-.375 0-6.674q-3.107.108-3.927-.431c-.819-.539-1.64-2.2-2.367-3.371s-2.343-1.356-2.995-1.618c-.652-.261-.816-1.328 1.797-.522c2.613.807 2.74 3.005 3.565 3.518c.825.514 2.796.29 3.689-.122s.827-1.944.987-2.551c.201-.567-.509-.693-.524-.697c-.873 0-5.454-.997-6.713-5.433c-1.258-4.437.363-7.337 1.228-8.583q.864-1.248-.153-5.314Q17.466 13.2 19.473 16c.002.01 1.756-1.043 4.527-1.043s3.755.858 4.514 1.043s1.366-3.266 6.053-2.326c-.979 1.923-1.798 4.326-1.173 5.314c.626.987 3.08 4.127 1.573 8.583q-1.509 4.455-5.929 5.433q-.506.162-.506.522c0 .36.456.399 1.114 2.086q.66 1.686.096 9.635q-1.427.363-2.22.488c-.937.147-1.955.23-2.955.261c-1 .032-1.347.029-2.73-.1a20 20 0 0 1-2.654-.424\"/></g>"
	},
	"github-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M29.344 30.477c2.404-.5 4.585-1.366 6.28-2.638C38.52 25.668 40 22.314 40 19c0-2.324-.881-4.494-2.407-6.332c-.85-1.024 1.636-8.667-.573-7.638c-2.21 1.03-5.45 3.308-7.147 2.805A20.7 20.7 0 0 0 24 7c-1.8 0-3.532.223-5.147.634C16.505 8.232 14.259 6 12 5.03c-2.26-.97-1.026 6.934-1.697 7.765C8.84 14.605 8 16.73 8 19c0 3.314 1.79 6.668 4.686 8.84c1.93 1.446 4.348 2.368 7.054 2.822m0 0q-1.738 1.913-1.738 3.632v8.717m11.343-12.534q1.646 2.16 1.646 3.88v8.654M6 31.216q1.349.165 2 1.24c.652 1.074 3.074 5.062 5.825 5.062h4.177\"/>"
	},
	gitlab: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M23.963 42L42 27.415L36.996 6l-6.03 12.994H17.993L11.015 6L6 27.415z\"/>"
	},
	glasses: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"12\" cy=\"35\" r=\"7\"/><circle cx=\"36\" cy=\"35\" r=\"7\"/><path d=\"M5 34V10.883c0-1.391 0-2.087.378-2.61c.377-.525 1.037-.745 2.357-1.185L11 6m32 28V10.883c0-1.391 0-2.087-.377-2.61c-.378-.525-1.038-.745-2.358-1.185L37 6m-8 28a5 5 0 0 0-10 0\"/></g>"
	},
	"glasses-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"14.5\" cy=\"24.5\" r=\"6.5\"/><circle r=\"6.5\" transform=\"matrix(-1 0 0 1 33.5 24.5)\"/><path d=\"M4 24h4m36 0h-4m-20-3c.5-2 2-4 4-4s3.5 2 4 4\"/></g>"
	},
	"glasses-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"12\" cy=\"33\" r=\"7\"/><path stroke-linecap=\"round\" d=\"M29 33c0-3.314-1.5-6-5-6s-5 2.686-5 6\"/><circle cx=\"36\" cy=\"33\" r=\"7\"/><path stroke-linecap=\"round\" d=\"M14 8h-2a6 6 0 0 0-6 6v8M34 8h2a6 6 0 0 1 6 6v8\"/></g>"
	},
	globe: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M37.826 4A19.63 19.63 0 0 1 44 18.316C44 29.187 35.187 38 24.316 38A19.63 19.63 0 0 1 10 31.826\"/><path d=\"M24 32c7.732 0 14-6.268 14-14S31.732 4 24 4s-14 6.268-14 14s6.268 14 14 14\" clip-rule=\"evenodd\"/><path d=\"M24 38v6m-6 0h12\"/></g>"
	},
	glove: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 42h27.833v-8S41 20.582 42 18s-.5-5.335-4-5s-6.889 8.33-6.889 8.33S30.5 13 30 10.5S29 4 19.306 4S8 11.12 8 15z\"/>"
	},
	"go-ahead": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M38 33c0-7.299-4.103-13.583-10-16.408A16.15 16.15 0 0 0 21 15c-9.389 0-17 8.059-17 18\"/><path d=\"m30 28l8 5l6-8\"/></g>"
	},
	"go-end": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m14 12l12 12l-12 12m20-24v24\"/>"
	},
	"go-on": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m36 7l7 6.461L36 21\"/><path d=\"M40 14H17.006C10.123 14 4.278 19.62 4.01 26.5C3.726 33.77 9.733 40 17.006 40h16.996\"/></g>"
	},
	"go-start": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M34 36L22 24l12-12m-20 0v24\"/>"
	},
	goblet: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33 44H13m10-16v16m12-28c0 6.5-5.373 12-12 12s-12-5.373-12-12c0-6.5 4-12 4-12h16s4 5.5 4 12\"/>"
	},
	"goblet-cracking": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M33 44H13m10-16v16m12-28c0 6.5-5.373 12-12 12s-12-5.373-12-12c0-6.5 4-12 4-12h16s4 5.5 4 12\"/><path d=\"m23 4l-2 6l4 1l-2 6M15 4h16\"/></g>"
	},
	"goblet-full": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M33 44H13m10-16v16m12-28c0 1.675-.357 3.284-1 4.75C32.148 24.97 27.92 28 23 28a12 12 0 0 1-10.79-6.742A11.95 11.95 0 0 1 11 16c0-2.373.533-4.613 1.21-6.5C13.387 6.217 15 4 15 4h16s1.815 2.496 3 6.112c.574 1.752 1 3.767 1 5.888\"/><path d=\"M35 16s-7 3-12 0s-12 0-12 0\"/><path d=\"M34 10.112c.574 1.752 1 3.767 1 5.888c0 1.675-.357 3.284-1 4.75M12.21 9.5C11.533 11.387 11 13.627 11 16c0 1.886.435 3.67 1.21 5.258\"/></g>"
	},
	"goblet-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m5.736 24.121l4.95 4.95c5.077 5.077 13.308 5.077 18.385 0v0c5.077-5.077 5.077-13.308 0-18.385l-4.95-4.95\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" d=\"m30 30l6 6\"/><ellipse cx=\"14\" cy=\"14\" rx=\"13\" ry=\"7\" transform=\"rotate(-45 14 14)\"/><ellipse cx=\"38\" cy=\"38\" rx=\"6\" ry=\"3\" transform=\"rotate(-45 38 38)\"/></g>"
	},
	"gold-medal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 4H31l-4 10.3A15.02 15.02 0 0 1 37.27 22zM17 4H4l6.73 18A15.02 15.02 0 0 1 21 14.3z\"/><path d=\"M39 29c0 8.284-6.716 15-15 15S9 37.284 9 29c0-2.528.625-4.91 1.73-7A15.02 15.02 0 0 1 21 14.3c.97-.197 1.973-.3 3-.3s2.03.103 3 .3A15.02 15.02 0 0 1 37.27 22A14.94 14.94 0 0 1 39 29\"/><path d=\"M24 35V22l-3 1m3 12h4m-4 0h-4\"/></g>"
	},
	"gold-medal-two": {
		body: "<g fill=\"none\"><path d=\"M36 32a11.97 11.97 0 0 0-4-8.944A11.96 11.96 0 0 0 24 20a11.96 11.96 0 0 0-8 3.056A11.97 11.97 0 0 0 12 32c0 6.627 5.373 12 12 12s12-5.373 12-12\"/><path d=\"M16 4h16v19.056A11.96 11.96 0 0 0 24 20a11.96 11.96 0 0 0-8 3.056z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 4h16M16 4H8v10l8 6m0-16v16M32 4h8v10l-8 6m0-16v16m-16 3.056A11.96 11.96 0 0 1 24 20c3.073 0 5.877 1.155 8 3.056m-16 0A11.97 11.97 0 0 0 12 32c0 6.627 5.373 12 12 12s12-5.373 12-12a11.97 11.97 0 0 0-4-8.944m-16 0V20m16 3.056V20\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 4h8v10l-8 6M16 4H8v10l8 6m20 12a11.97 11.97 0 0 0-4-8.944A11.96 11.96 0 0 0 24 20a11.96 11.96 0 0 0-8 3.056A11.97 11.97 0 0 0 12 32c0 6.627 5.373 12 12 12s12-5.373 12-12\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 4h16v19.056A11.96 11.96 0 0 0 24 20a11.96 11.96 0 0 0-8 3.056zm8 33V27l-2 1m2 9h2m-2 0h-2\"/></g>"
	},
	"golf-course": {
		body: "<g fill=\"none\"><ellipse cx=\"24\" cy=\"34\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"20\" ry=\"10\"/><circle cx=\"32\" cy=\"34\" r=\"2\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><path d=\"M24 9L13 4v10z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13 34V14m0 0V4l11 5z\"/></g>"
	},
	gongfu: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"22\" cy=\"8\" r=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 18h10v11h-7v14m25.182-25H26v10.86L40 43\"/></g>"
	},
	good: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8.006 19.197C12.443 10.325 22 7 28.506 4.197c2.958-1.274 3.69 3.526 2.5 6.5c-1 2.5-3 5.303-3 5.303h8.5a3.5 3.5 0 1 1 0 7h2a3.5 3.5 0 1 1 0 7h-4a3.5 3.5 0 1 1 0 7h-3a3.5 3.5 0 0 1 .002 7H19.006c-3.5 0-8-1.803-11-6.803c-2.875-4.793-3-12 0-18\"/>"
	},
	"good-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m35.912 41.544l5.37-19A2 2 0 0 0 39.355 20h-11.48a1.094 1.094 0 0 1-1.066-1.34l.5-2.164c.458-1.985.605-4.03.436-6.06l-.092-1.103A5.02 5.02 0 0 0 26.2 6.2A4.1 4.1 0 0 0 23.304 5h-.24c-.657 0-1.262.356-1.58.93l-2.659 4.785a12.96 12.96 0 0 1-5.124 5.085l-6.659 3.63A2 2 0 0 0 6 21.188V41a2 2 0 0 0 2 2h25.987a2 2 0 0 0 1.924-1.456\"/>"
	},
	"good-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4.189 22.173A2 2 0 0 1 6.181 20H10a2 2 0 0 1 2 2v19a2 2 0 0 1-2 2H7.834a2 2 0 0 1-1.993-1.827zM18 21.375c0-.836.52-1.584 1.275-1.94c1.649-.778 4.458-2.341 5.725-4.454c1.633-2.724 1.941-7.645 1.991-8.772c.007-.158.003-.316.024-.472c.271-1.953 4.04.328 5.485 2.74c.785 1.308.885 3.027.803 4.37c-.089 1.436-.51 2.823-.923 4.201l-.88 2.937h10.857a2 2 0 0 1 1.925 2.543l-5.37 19.016A2 2 0 0 1 36.986 43H20a2 2 0 0 1-2-2z\"/>"
	},
	google: {
		body: "<g fill=\"none\"><path d=\"m34.5 7l-5 7.5c-1-.532-3-1.5-5.5-1.5c-6 0-11 5-11 10.5S17 35 24 35c5.6 0 9.5-4 9.5-7H24v-7h20c.5 7.5-1.71 11.9-4.5 15.5C35.324 41.888 29.171 44 24 44C14 44 4 36 4 23.5C4 11.5 14.724 4 23 4s11.5 3 11.5 3\"/><path fill=\"currentColor\" d=\"m29.5 14.5l-.939 1.766a2 2 0 0 0 2.603-.657zm5-7.5l1.664 1.11a2 2 0 0 0-.302-2.574zM44 21l1.996-.133A2 2 0 0 0 44 19zm-20 0v-2a2 2 0 0 0-2 2zm0 7h-2a2 2 0 0 0 2 2zm9.5 0h2a2 2 0 0 0-2-2zm6 8.5l-1.58-1.225zm-8.336-20.89l5-7.5l-3.328-2.22l-5 7.5zM34.5 7a150 150 0 0 0 1.36-1.466l-.001-.002l-.014-.012l-.082-.072a9 9 0 0 0-.804-.592a14 14 0 0 0-2.35-1.208C30.518 2.796 27.385 2 23 2v4c3.89 0 6.508.704 8.099 1.352a10 10 0 0 1 1.676.855a5 5 0 0 1 .385.278l-.002-.002l-.008-.007l-.006-.006l-.003-.003l-.002-.001c0-.001-.002-.002 1.361-1.466M23 2c-4.693 0-9.91 2.101-13.948 5.77C4.978 11.47 2 16.86 2 23.5h4c0-5.361 2.384-9.72 5.741-12.77C15.134 7.65 19.417 6 23 6zM2 23.5C2 37.2 12.993 46 24 46v-4c-8.993 0-18-7.2-18-18.5zM44 21v-2H24v4h20zm-22 0v7h4v-7zm2 9h9.5v-4H24zm7.5-2c0 .698-.522 1.933-1.919 3.08C28.248 32.174 26.317 33 24 33v4c3.283 0 6.102-1.173 8.119-2.829c1.953-1.602 3.381-3.868 3.381-6.17zM24 33c-5.617 0-9-4.804-9-9.5h-4C11 29.804 15.617 37 24 37zm-9-9.5c0-4.336 4.044-8.5 9-8.5v-4c-7.044 0-13 5.836-13 12.5zm9-8.5c2 0 3.645.779 4.561 1.266l1.878-3.532C29.355 12.158 26.999 11 24 11zm0 31c5.672 0 12.46-2.312 17.08-8.275l-3.16-2.45C34.188 40.089 28.67 42 24 42zm17.08-8.275c3.038-3.919 5.453-8.79 4.916-16.858l-3.992.266c.463 6.933-1.543 10.862-4.085 14.142z\"/></g>"
	},
	"google-ads": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M41.355 34.153L29.522 8.776a6 6 0 0 0-10.876 5.072L30.48 39.224a6 6 0 1 0 10.876-5.071Z\"/><path stroke-linecap=\"round\" d=\"M23.438 26.536L17.52 39.224a6 6 0 0 1-7.974 2.902v0a6 6 0 0 1-2.902-7.973L18.374 9\"/><circle cx=\"12.083\" cy=\"36.688\" r=\"6\" transform=\"rotate(25 12.083 36.688)\"/></g>"
	},
	gopro: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 7h13v34H5z\"/><rect width=\"19\" height=\"22\" x=\"24\" y=\"13\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"3\"/><circle cx=\"33.5\" cy=\"24.5\" r=\"3.5\" stroke=\"currentColor\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 24h6\"/><rect width=\"5\" height=\"5\" x=\"9\" y=\"15\" fill=\"currentColor\" rx=\"2.5\"/></g>"
	},
	gps: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\" clip-rule=\"evenodd\"/><path d=\"m24 13l-7 21l7-5l7 5z\"/></g>"
	},
	"graphic-design": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 32c-7.732 0-14-6.268-14-14S11.268 4 19 4s14 6.268 14 14\"/><path d=\"M44 18H18v26h26z\"/></g>"
	},
	"graphic-design-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M15.65 28.238A13.98 13.98 0 0 1 10 17c0-7.732 6.268-14 14-14s14 6.268 14 14c0 4.535-2.157 8.567-5.5 11.125\"/><path d=\"m24 17l20 27H4z\" clip-rule=\"evenodd\"/></g>"
	},
	"graphic-stitching": {
		body: "<g fill=\"none\" fill-rule=\"evenodd\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" clip-rule=\"evenodd\"><path d=\"m24 24l10-10c0-5.523-4.477-10-10-10S14 8.477 14 14z\"/><path d=\"m14 34l10-10l-10-10C8.477 14 4 18.477 4 24s4.477 10 10 10m20 0c5.523 0 10-4.477 10-10s-4.477-10-10-10L24 24z\"/><path d=\"M24 44c5.523 0 10-4.477 10-10L24 24L14 34c0 5.523 4.477 10 10 10\"/></g>"
	},
	"graphic-stitching-four": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M39 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10M9 44a5 5 0 1 0 0-10a5 5 0 0 0 0 10m5-40H4v10h10zm30 30H34v10h10zM34 9H14m20 30H14m-5-5V14m30 20V14\"/>"
	},
	"graphic-stitching-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0 30a5 5 0 1 0 0-10a5 5 0 0 0 0 10M14 19H4v10h10zm30 0H34v10h10z\"/><path d=\"M19 9H9v10m10 20H9V29M29 9h11v10M29 39h10V29\"/></g>"
	},
	"great-wall": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 9v31h40V9h-8v7h-8V9h-8v7h-8V9zm0 15h40M4 32h40m-20-8v8m-8 0v8m0-24v8m16 8v8m0-24v8\"/>"
	},
	"green-house": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 20v24H6V20L24 4z\"/><path stroke-linecap=\"round\" d=\"M6 24h36M13 14v30m22-30v30M20 32h8v12h-8z\"/></g>"
	},
	"green-new-energy": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42.336 16C39.249 8.936 32.2 4 24 4S8.75 8.936 5.664 16\"/><path d=\"M24 14a19.94 19.94 0 0 0-6 14.283q0 .75.055 1.488A19.94 19.94 0 0 1 24 44a19.94 19.94 0 0 1 5.945-14.23q.055-.736.055-1.487A19.94 19.94 0 0 0 24 14\"/><path d=\"M4 24c0 11.046 8.954 20 20 20a19.94 19.94 0 0 0-5.945-14.23A19.94 19.94 0 0 0 4 24\"/><path d=\"M44 24c0 11.046-8.954 20-20 20a19.94 19.94 0 0 1 5.945-14.23A19.94 19.94 0 0 1 44 24\"/></g>"
	},
	"grid-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"38\" height=\"38\" x=\"5\" y=\"5\" rx=\"2\"/><path d=\"M24 5v38M5 24h38\"/></g>"
	},
	"grid-nine": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"38\" height=\"38\" x=\"5\" y=\"5\" stroke-linejoin=\"round\" rx=\"2\"/><path d=\"M5 18h38M5 30h38M17 5v38M30 5v38\"/></g>"
	},
	"grid-sixteen": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"40\" x=\"4\" y=\"4\" stroke-linejoin=\"round\" rx=\"2\"/><path d=\"M14 4v40M24 4v40M34 4v40\"/><path stroke-linejoin=\"round\" d=\"M4 14h40M4 34h40M4 24h40\"/></g>"
	},
	"grid-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39.3 6H8.7A2.7 2.7 0 0 0 6 8.7v30.6A2.7 2.7 0 0 0 8.7 42h30.6a2.7 2.7 0 0 0 2.7-2.7V8.7A2.7 2.7 0 0 0 39.3 6Z\"/><path stroke-linecap=\"round\" d=\"M15 6v36m27-25H6\"/></g>"
	},
	"grid-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39.3 6H8.7A2.7 2.7 0 0 0 6 8.7v30.6A2.7 2.7 0 0 0 8.7 42h30.6a2.7 2.7 0 0 0 2.7-2.7V8.7A2.7 2.7 0 0 0 39.3 6Z\"/><path stroke-linecap=\"round\" d=\"M24 6v36M6 24h36\"/></g>"
	},
	"grimacing-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 18v1m-14-1v1\"/><rect width=\"18\" height=\"8\" x=\"15\" y=\"28\" stroke-linecap=\"round\" rx=\"4\"/></g>"
	},
	"grinning-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 35c5 0 7-4 7-4H17s2 4 7 4m7-15v1m-14-1v1\"/></g>"
	},
	"grinning-face-with-open-mouth": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 35c5 0 7-4 7-4H17s2 4 7 4m7-17v4m-14-4v4\"/></g>"
	},
	"grinning-face-with-squinting-eyes": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 35c5 0 7-4 7-4H17s2 4 7 4m-3-14s-1-4-4-4s-4 4-4 4m22 0s-1-4-4-4s-4 4-4 4\"/></g>"
	},
	"grinning-face-with-tightly-closed-eyes": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M17 31s2 4 7 4s7-4 7-4M16 16l3 3l-3 3m16-6l-3 3l3 3\"/></g>"
	},
	"grinning-face-with-tightly-closed-eyes-open-mouth": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 35c5 0 7-4 7-4H17s2 4 7 4m8-18l-3 3l3 3m-16-6l3 3l-3 3\"/></g>"
	},
	group: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 4H4v8h8zm32 32h-8v8h8zm-32 0H4v8h8zM44 4h-8v8h8z\"/><path stroke-linecap=\"round\" d=\"M8 36V12m32 24V12M12 8h24M12 40h24\"/><path stroke-linecap=\"round\" d=\"M16 16h9.6v6.4H32V32h-9.6v-6.4H16z\" clip-rule=\"evenodd\"/></g>"
	},
	"guide-board": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 4v37\"/><path d=\"M24 8h15.545L42 12l-2.455 4H24zm0 14H8.455L6 26l2.455 4H24z\"/><path stroke-linecap=\"round\" d=\"M16 42h16\"/></g>"
	},
	gymnastics: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M24 22a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m23 29l-2 7l-9-2l-5 10m14-8l2 8h11M7 23l16 6l12-2l6.04-4.97M12 4c14-2 24 2 32 11\"/></g>"
	},
	"gymnastics-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M27 24a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m23 29l-2 7l-9-3l-4 11m13-8l1.49 6.48A2 2 0 0 0 24.43 44h10.58M7 23l16 6l-9-9l-1-9m-1-7h5c12 0 27 1.45 27 28\"/></g>"
	},
	h: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 5v38M36 5v38M12 24h24\"/>"
	},
	h1: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 8v32M25 8v32M6 24h19m9.226 0L39 19.017V40\"/>"
	},
	h2: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 8v32M24 8v32M7 24h16m9 1c0-3.167 2.667-5 5-5s5 1.833 5 5c0 5.7-10 9.933-10 15h10\"/>"
	},
	h3: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 8v32M24 8v32M7 24h16m9-4h10l-7 9c4 0 7 2 7 6s-3 5-5 5c-2.381 0-4-1-5-2.1\"/>"
	},
	"hair-brush": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M18.197 31.424c3.124 3.124 10.722.592 16.97-5.657c6.249-6.248 8.781-13.846 5.657-16.97M27.389 6.675l1.414 1.415m-6.363 3.535l1.414 1.414m-5.658 4.243l1.414 1.414m-2.828 5.657l1.414 1.414M35.167 4.554l1.414 1.414m-2.828 7.072l2.828 2.828m-7.777 2.122l2.828 2.828m-8.485 1.414l2.828 2.828\"/><rect width=\"6\" height=\"14\" x=\"16.075\" y=\"29.303\" rx=\"3\" transform=\"rotate(45 16.075 29.303)\"/></g>"
	},
	"hair-clip": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M38.848 5.339c-6.964 1.228-14.584 6.88-17.534 14.58c-3.225 8.417-4.097 9.338-8.03 11.468C9.502 33.435 4.6 35.072 4.6 35.072\"/><path d=\"M9.638 33.107c4.22-2.54 9.708.083 12.165 1.804c2.457 1.72 4.956 1.64 6.39-.409s.656-4.424-1.801-6.144c-1.639-1.147-7.127-3.77-5.078-8.44\"/><path d=\"M43.189 9.6c-10.323 2.538-14.42 5.773-18.435 17.61m-3.77 7.127c-.778 1.693-2.295 5.718-2.131 8.274\"/></g>"
	},
	"hair-dryer": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m19.193 21.544l2.319 18.552a3.473 3.473 0 0 1-6.892.862l-2.374-18.989\"/><path d=\"M13 4a9 9 0 0 0 0 18c1.578 0 3.74-.175 6.193-.456l12.403-2.022L44 17.5v-9L28.5 6.25zm24 4.2v9.6m7-.3l-12.403 2.022M44 8.5L28.5 6.25\"/><path d=\"M16 13a3 3 0 1 1-6 0a3 3 0 0 1 6 0\"/></g>"
	},
	"hair-dryer-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M11 12.138c0-.079.059-.146.137-.156L32.082 9.28C37.342 8.6 42 12.697 42 18s-4.659 9.399-9.918 8.72l-20.945-2.702a.16.16 0 0 1-.137-.156z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11 12L4 8v20l7-4\"/><path d=\"m38 25l-6.694 15.898A5.07 5.07 0 0 1 26.634 44c-3.625 0-6.078-3.695-4.672-7.036L27 25\"/><circle cx=\"35\" cy=\"18\" r=\"9\"/></g>"
	},
	halo: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-6.636-14a12.05 12.05 0 0 0-3.453 3.5m-1.713 8.68a12.1 12.1 0 0 1 0-4.36M17.364 34a12.05 12.05 0 0 1-3.453-3.5m12.449 5.268a12.1 12.1 0 0 1-4.72 0M30.636 34a12.1 12.1 0 0 0 3.453-3.5m1.714-4.32a12.1 12.1 0 0 0 0-4.36M30.636 14a12.1 12.1 0 0 1 3.453 3.5M21.64 12.232a12.1 12.1 0 0 1 4.72 0M44 24a20.2 20.2 0 0 0-.4-4M4 24a20.2 20.2 0 0 1 .4-4m34.246 17.62a20 20 0 0 1-2.796 2.493M9.354 37.62a20 20 0 0 0 2.796 2.493m3.562-34.32a20 20 0 0 0-3.562 2.094m20.138-2.094a20 20 0 0 1 3.562 2.094m-9.603-3.762a20.2 20.2 0 0 0-4.494 0m4.494 39.75a20 20 0 0 0 4.253-.955m-8.747.955a20 20 0 0 1-4.253-.955M8.155 11.794a20 20 0 0 0-1.908 2.986m33.598-2.985a20 20 0 0 1 1.908 2.985M6.247 33.22a20 20 0 0 1-1.378-3.372m36.884 3.372a20 20 0 0 0 1.378-3.372\"/>"
	},
	hamburger: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 22c0-9.941-8.954-18-20-18S4 12.059 4 22z\" clip-rule=\"evenodd\"/><path d=\"M4 38h40v6H4zm0-10l5.455 4l7.272-4L24 32l7.273-4l7.272 4L44 28\"/></g>"
	},
	"hamburger-button": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7.95 11.95h32m-32 12h32m-32 12h32\"/>"
	},
	"hamburger-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 22v-1c0-8.837-7.163-16-16-16S8 12.163 8 21v1m0 12s-2 5 2 7s24 2 28 0s2-7 2-7\"/><rect width=\"38\" height=\"14\" x=\"5\" y=\"21\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"7\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m11 29l1.592-.796A6 6 0 0 1 17.5 28l.424.17A4.98 4.98 0 0 0 22 28v0a4.98 4.98 0 0 1 4.076-.17l.96.384a4.7 4.7 0 0 0 3.857-.16v0a4.71 4.71 0 0 1 4.214 0L37 29\"/><circle cx=\"17\" cy=\"15.05\" r=\"2.5\" fill=\"currentColor\"/><circle cx=\"23.75\" cy=\"12.3\" r=\"2.5\" fill=\"currentColor\"/></g>"
	},
	"hammer-and-anvil": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 14C6 4 14 4 14 4v20H6zm8-4h28v6H14zM6 30h36s0 8-6 8h-7l2 6H13l2-6H6z\"/>"
	},
	"hand-cream": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M19 17c-2.731 1.137-2.488 4.578-2 6h14c3.902-5.687-4.216-11.849-4.216-9.479S22.414 15.578 19 17m-6 6h22v8H13z\"/></g>"
	},
	"hand-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M7.053 10h22V4h-22z\"/><path d=\"M29.053 10q9.78 10.684 11.222 12.384c1.443 1.7.837 3.62-2.775 3.62s-5.695-5.285-8.447-5.285q-.024-.004-.003 20.277a3 3 0 0 1-2.998 3.005h-.003a3.004 3.004 0 0 1-3.004-3.005v-8.01q-11.96-1.812-13.004-2c-1.044-.187-2.988-1.184-2.988-4.053V10z\" clip-rule=\"evenodd\"/></g>"
	},
	"hand-drag": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M9.583 27.182Q7.009 28.94 7.009 33c0 4.06 4.991 11 9.492 11h11.515c4.405 0 7.08-3.85 7.08-6.94V24.6a3.253 3.253 0 0 0-3.243-3.253a3.235 3.235 0 0 0-3.245 3.226v.11\"/><path d=\"M10.981 29.445V7.662a3.217 3.217 0 0 1 6.435 0v15.986\"/><path stroke-linejoin=\"round\" d=\"M17.416 24v-4.192a2.804 2.804 0 0 1 5.608 0v4.62\"/><path stroke-linejoin=\"round\" d=\"M23 24.658v-2.85a2.804 2.804 0 0 1 5.608 0v3.195\"/><path d=\"M11 8h30\"/><path stroke-linejoin=\"round\" d=\"m36 12.5l1.667-1.5L41 8l-3.333-3L36 3.5\"/></g>"
	},
	"hand-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 41V19h-6v22z\"/><path d=\"M38 19Q27.343 9.145 25.643 7.7c-1.7-1.446-3.62-.839-3.62 2.779s5.263 5.765 5.263 8.521q.006.026-20.282.003A3 3 0 0 0 4 22.002v.003a3.004 3.004 0 0 0 3.004 3.005h7.013q1.81 11.952 1.997 12.999C16.202 39.054 17.2 41 20.068 41H38z\" clip-rule=\"evenodd\"/></g>"
	},
	"hand-painted-plate": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M18 10h24a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H18M4 12a2 2 0 0 1 2-2h12v30H6a2 2 0 0 1-2-2z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M11 17v4m26-5L25 33\"/><rect width=\"4\" height=\"4\" x=\"9\" y=\"25\" fill=\"currentColor\" rx=\"2\"/><rect width=\"4\" height=\"4\" x=\"9\" y=\"31\" fill=\"currentColor\" rx=\"2\"/></g>"
	},
	"hand-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10.026 40.974v-22h-6v22z\"/><path d=\"M10.026 18.974Q20.71 9.194 22.41 7.752c1.7-1.443 3.62-.837 3.62 2.775s-5.285 5.695-5.285 8.447q-.005.024 20.277.003a3 3 0 0 1 3.004 2.998v.003a3.004 3.004 0 0 1-3.004 3.004h-8.01q-1.812 11.959-2 13.004c-.188 1.044-1.185 2.988-4.054 2.988H10.026z\" clip-rule=\"evenodd\"/></g>"
	},
	"hand-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M41 38H19v6h22z\"/><path d=\"M19 38Q9.221 27.316 7.778 25.616c-1.443-1.7-.837-3.62 2.775-3.62s5.695 5.285 8.447 5.285q.025.006.003-20.277A3 3 0 0 1 22.001 4h.003a3.004 3.004 0 0 1 3.005 3.004v8.01q11.958 1.812 13.003 2C39.057 17.202 41 18.2 41 21.068V38z\" clip-rule=\"evenodd\"/></g>"
	},
	handbag: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 14a6 6 0 0 1 6-6h9a6 6 0 0 1 6 6v2H14zM4 25l19.515 4.879c.318.08.652.08.97 0L44 25v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 27v-9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9\"/><path fill=\"currentColor\" d=\"M26.5 23a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0\"/></g>"
	},
	handheld: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M42 18v26H6V18\"/><path d=\"M42 4H6v14h36z\"/><path stroke-linecap=\"round\" d=\"M16 27v8m-4-4h8\"/><path d=\"M32 35a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/></g>"
	},
	"handle-a": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M24 11L14 33m4-7h12m-6-15l10 22\"/></g>"
	},
	"handle-b": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M24.792 23C27.668 23 30 20.761 30 18s-2.332-5-5.208-5H18v10zm2.039 12C29.686 35 32 32.314 32 29s-2.314-6-5.169-6H18v12z\" clip-rule=\"evenodd\"/></g>"
	},
	"handle-c": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M32 17.618c-.898-1.83-3.593-5.031-8.983-4.574c-5.39.458-9.433 5.49-8.983 11.893S19.424 35 23.915 35C29.305 35 32 30.609 32 30.609\"/></g>"
	},
	"handle-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linecap=\"round\" rx=\"3\"/><path d=\"M34 20L24 30L14 20z\"/></g>"
	},
	"handle-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linecap=\"round\" rx=\"3\"/><path d=\"M28 34L18 24l10-10z\"/></g>"
	},
	"handle-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linecap=\"round\" rx=\"3\"/><path d=\"m20 14l10 10l-10 10z\"/></g>"
	},
	"handle-round": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><circle cx=\"24\" cy=\"24\" r=\"12\"/></g>"
	},
	"handle-square": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M14 14h20v20H14z\"/></g>"
	},
	"handle-triangle": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"m12 31l12-20l12 20z\"/></g>"
	},
	"handle-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linecap=\"round\" rx=\"3\"/><path d=\"m14 28l10-10l10 10z\"/></g>"
	},
	"handle-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M33 15L15 33m0-18l18 18\"/></g>"
	},
	"handle-y": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"m15 15l9 14l9-14m-9 13v9\"/></g>"
	},
	"handle-z": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M14 16h20L14 32h20\"/></g>"
	},
	hands: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"13\" r=\"9\" stroke-linejoin=\"round\"/><path d=\"M4.5 44c0-6 7-16 19.5-16c0 0 2.759 0 5.782 1.09C32.744 30.16 36.5 31.149 36.5 28V7.75a3.75 3.75 0 1 1 7.5 0V44\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2 44h44\"/></g>"
	},
	handwashing: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 24h7v20H4zm28-8c-1.5-3.5 4-10 4-10s5.5 6.5 4 10s-6.5 3.5-8 0m-1 26.5c-9 0-16-2.5-20-2.5V30c7 0 6.5-2.5 11-4s8 0 7.5 3s-5.5 6-5.5 6c8 0 8-2 12-5s8-2 8 1s-4 11.5-13 11.5\"/>"
	},
	"handwashing-fluid": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 4v7m5 6v-6H19v6M31 4H19.8C17.142 4 15 5.2 15 8m23 18.978V26a9 9 0 0 0-9-9H19a9 9 0 0 0-9 9v9a9 9 0 0 0 9 9h5\"/><path d=\"M40 39.77c0 2.336-2.015 4.23-4.5 4.23S31 42.106 31 39.77S33.94 33 35.5 33s4.5 4.433 4.5 6.77Z\"/></g>"
	},
	"hanfu-chinese-style": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m9 9l9-5h12l9 5l4 16l-8 4v15H13V29l-8-4zm9-5l6 10.5\"/><path d=\"m30 4l-6 10.5L13 29\"/></g>"
	},
	hanger: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M20.73 27.126a6 6 0 0 1 6.54 0l15.55 10.107A2.593 2.593 0 0 1 41.407 42H6.593a2.593 2.593 0 0 1-1.413-4.767z\" clip-rule=\"evenodd\"/><path d=\"M24 25s6-8.686 6-12a6 6 0 0 0-12 0\"/></g>"
	},
	"hanger-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 4v40m8-40l-8 6m-8-1l8 6m-8 5l8 6m8-11l-8 6m6 23H18\"/>"
	},
	"hanger-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M37 32h3.91a3.09 3.09 0 0 0 1.382-5.854L24 17L5.708 26.146A3.09 3.09 0 0 0 7.09 32H11\"/><path d=\"M11 30h26v14H11zm13-13s4-6.79 4-9a4 4 0 0 0-8 0\"/></g>"
	},
	"hard-disk": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 29H4v13h40z\"/><path fill=\"currentColor\" d=\"M35.5 38a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 29L9.038 4.999H39.02l4.98 24\"/></g>"
	},
	"hard-disk-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M32 6H16v10h16zM17 36h14\"/></g>"
	},
	harm: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 9.256L24.009 4L42 9.256v10.778A26.32 26.32 0 0 1 24.003 45A26.32 26.32 0 0 1 6 20.029z\"/><path stroke-linecap=\"round\" d=\"M29.5 18.408L18.186 29.722m0-11.314L29.5 29.722\"/></g>"
	},
	"hashtag-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M19 16v16m10-16v16M16 19h16M16 29h16\"/></g>"
	},
	hat: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M9 16a8 8 0 0 1 8-8h14a8 8 0 0 1 8 8v16H9z\"/><rect width=\"40\" height=\"8\" x=\"4\" y=\"32\" rx=\"2\"/><path d=\"M9 22h8m14 0h8\"/></g>"
	},
	hdd: {
		body: "<g fill=\"none\"><rect width=\"30\" height=\"40\" x=\"9\" y=\"4\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\"/><circle cx=\"32\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><circle cx=\"16\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><circle cx=\"32\" cy=\"38\" r=\"2\" fill=\"currentColor\"/><circle cx=\"16\" cy=\"38\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 30a8 8 0 1 0-8-8m8 0l-6 6\"/></g>"
	},
	"hdmi-cable": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 16a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8.646c0 .818-.502 1.556-1.18 2.014c-1.219.825-3.026 2.49-3.622 5.352C38.973 33.093 38.105 34 37 34H11c-1.105 0-1.973-.907-2.198-1.988c-.596-2.863-2.403-4.527-3.623-5.352C4.502 26.202 4 25.464 4 24.646zm10 12h20m-20 0v-3m7 3v-3m6 3v-3m7 3v-3m-23-5h2m6 0h2m6 0h2m6 0h2\"/>"
	},
	"hdmi-connector": {
		body: "<g fill=\"none\"><circle cx=\"24\" cy=\"24\" r=\"20\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M29 43a5 5 0 0 0-10 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15.5 42.11A19.9 19.9 0 0 0 24 44c3.04 0 5.92-.678 8.5-1.89\"/><circle cx=\"15\" cy=\"15\" r=\"3\" fill=\"currentColor\"/><circle cx=\"11\" cy=\"23\" r=\"3\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"11\" r=\"3\" fill=\"currentColor\"/><circle cx=\"33\" cy=\"15\" r=\"3\" fill=\"currentColor\"/><circle cx=\"37\" cy=\"23\" r=\"3\" fill=\"currentColor\"/></g>"
	},
	"headphone-sound": {
		body: "<g fill=\"none\"><path d=\"M4 28a2 2 0 0 1 2-2h4v12H6a2 2 0 0 1-2-2zm34-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 36V24c0-7.732 6.268-14 14-14s14 6.268 14 14v12M10 26H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4zm28 0h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 32h4l2-6l4 12l2-6h4\"/></g>"
	},
	headset: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 30v-5.538C42 14.266 33.941 6 24 6S6 14.266 6 24.462V30\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M34 32a4 4 0 0 1 4-4h4v14h-4a4 4 0 0 1-4-4z\"/><path fill=\"currentColor\" d=\"M42 32h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2zM6 32H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2z\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 28h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6z\"/></g>"
	},
	"headset-one": {
		body: "<g fill=\"none\"><path d=\"M36 32a8 8 0 1 0 0-16\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 32a8 8 0 1 0 0-16\"/><path d=\"M12 16a8 8 0 1 0 0 16\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 16a8 8 0 1 0 0 16\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 32V16c0-6.627 5.373-12 12-12s12 5.373 12 12v16c0 6.627-5.373 12-12 12\"/></g>"
	},
	"headset-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M21 16h-6v9a3 3 0 1 0 6 0z\"/><path d=\"M18 28v10h-6m9-22V4H10.5C8 4 5 6 5 10s3.5 6 6 6zm6 6V10h10.5c2.5 0 5.5 2 5.5 6s-3.5 6-6 6zm6 0h-6v9a3 3 0 1 0 6 0z\"/><path d=\"M30 34v10h6\"/></g>"
	},
	headwear: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12.417 43C10.095 40.068 8 35.779 8 31c0-8.837 7.163-16 16-16s16 7.163 16 16c0 4.779-2.095 9.068-4.417 12\"/><path d=\"M34 13.5L43 5l-3 12l-5 1zm-20 0L5 5l3 12l5 1z\"/></g>"
	},
	health: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M27.3 12c-1.823 0-3.3 1.435-3.3 3.204c0 3.205 3.9 6.118 6 6.796c2.1-.678 6-3.59 6-6.796C36 13.435 34.523 12 32.7 12a3.33 3.33 0 0 0-2.7 1.362A3.33 3.33 0 0 0 27.3 12\"/></g>"
	},
	"health-products": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M33 12H15l-5 5.843v20.249L15 44h18l5-5.908v-20.25zm-14 8h10m4-8V7a3 3 0 0 0-3-3H18a3 3 0 0 0-3 3v5\"/><circle cx=\"24\" cy=\"32\" r=\"5\"/></g>"
	},
	"healthy-recognition": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 33v6a3 3 0 0 0 3 3h6m18 0h6a3 3 0 0 0 3-3v-6m0-18V9a3 3 0 0 0-3-3h-6M6 15V9a3 3 0 0 1 3-3h6m19 18L24 34L14 24c-1-1-1.5-3 0-5s4.5-2 6-1s2 2 4 2s2.5-1 4-2s4.5-1 6 1s1 4 0 5\"/>"
	},
	heart: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14.54 20.019q-2.532-3.113-4.754-1.337C7.563 20.458 6.925 26.65 8.713 32.11s5.267 12.893 12.289 12.893S29.684 37.522 32.548 33c2.865-4.522 4.38-8.885 1.573-14.318\"/><path stroke-linecap=\"round\" d=\"M11 18.037A643 643 0 0 0 7 12c-1.446-2.145 2.251-4.918 4-3.032q1.749 1.887 4.647 5.557\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.024 25.64q-.727-9.096 1.182-11.845c1.91-2.75 5.457-3.792 8.798-3.792q2.983 0 5.448 2.541\"/><path d=\"M41 12.613c.586 2.036-.37 3.897-3.316 4.318s-5.153 1.902-6.745 3.148s-4.44 5.026-5.003 6.923s-3.776.153-4.639-.605c-.863-.757-1.712-2.416 0-4.151s1.341-2.081 1.341-3.84c0-1.76 9.362-7.58 14.635-8.112c1.172-.068 3.142.282 3.727 2.319Z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M23.008 4v5.263m-2.701 1.455q-4.527-5.69-7.3-6.35m3.997 2.661l.99-4.067m17.619 7.756q-.483 1.656 0 3.106q.484 1.45 2.071 3.107\"/></g>"
	},
	"heart-ballon": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M17.333 4C13.333 4 12 7.156 12 11.05C12 18.1 19.8 24.51 24 26c4.2-1.49 12-7.9 12-14.95C36 7.156 34.312 4 30.667 4C28.434 4 25.194 7.077 24 8.889C22.806 7.077 19.566 4 17.333 4M24 26c-2 1.09-5 3.5-5 7s10 2.5 10 6s-11 5-11 5\"/>"
	},
	"heart-rate": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M31.879 37c-2.826 2.074-5.655 3.587-7.879 4.326C17 39 4 29 4 18C4 11.925 8.925 7 15 7c3.72 0 7.01 1.847 9 4.674A10.99 10.99 0 0 1 33 7c6.075 0 11 4.925 11 11c0 1.747-.328 3.468-.907 5.137\"/><path d=\"M27 29h4l3-4l3 8l2.962-4H44\"/></g>"
	},
	heartbeat: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-miterlimit=\"2\" d=\"m11 32l7-9l6 9l6-9l5 8h9\"/><path d=\"M44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326c1.194-.397 2.562-1.016 4.01-1.826\"/></g>"
	},
	"heater-resistor": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"28\" height=\"12\" x=\"9.858\" y=\"29.657\" rx=\"2\" transform=\"rotate(-45 9.858 29.657)\"/><path stroke-linecap=\"round\" d=\"m7.03 40.97l7.07-7.07m19.801-19.8l7.071-7.07M14.808 24.707l8.485 8.485m-3.535-13.435l8.485 8.486m-3.536-13.435l8.485 8.485m-20.505 3.536l14.142-14.142m-5.657 22.627l14.142-14.142\"/></g>"
	},
	"heavy-metal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m22.219 7.378l11.668 9.244L36.177 24l-10.914 2.085l-12.674-11.554l2.692-5.53z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"m15.28 9.001l11.206 9.6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m25.263 26.085l1.224-7.953l7.4-1.51m-8.894 14.401l2.286 7.08l-11.678 2.276L4 29.014l2.57-6.389l5.458-1.271\"/><path stroke-linecap=\"round\" d=\"m6.57 22.625l10.714 10.133\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m15.601 39.865l1.885-7.733l7.505-1.088\"/><path stroke-linejoin=\"round\" d=\"M34.887 29.608L34 36.8l9.236-1.801l-1.955-6.812z\" clip-rule=\"evenodd\"/></g>"
	},
	"heavy-rain": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9.455 30.994A13.95 13.95 0 0 1 4 19.885C4 12.217 10.105 6 17.636 6c6.297 0 11.598 4.346 13.166 10.253a8.9 8.9 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.257c0 3.795-2.244 7.058-5.455 8.486M16 28v10m8-6v10m8-14v10\"/>"
	},
	"heavy-wind": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 19.885C4 12.217 10.105 6 17.636 6c6.297 0 11.598 4.346 13.166 10.253a8.9 8.9 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.257c0 3.642-2.066 6.793-5.07 8.304c-.25.126-.53.182-.81.182H15m0 0h-3a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h3\"/><path d=\"M22 18h-3a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h3m-3 0h13\"/></g>"
	},
	helmet: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M42.34 32c1.07-2.45 1.66-5.16 1.66-8c0-11.05-8.95-20-20-20S4 12.95 4 24h20l.01 8c0 3.87 3.13 7 7 7s7-3.13 7-7z\"/><path fill=\"currentColor\" d=\"M31 34c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M24 32L6 36c2.23 3.17 4.45 6.37 8 8l12-7\"/></g>"
	},
	"helmet-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 11c-9.389 0-17 7.815-17 17.455V35h34v-6.546C41 18.815 33.389 11 24 11M4 35h40v6H4z\"/><path d=\"M21 6h6v18h-6z\"/></g>"
	},
	help: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 28.625v-4a6 6 0 1 0-6-6\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M24 37.625a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\" clip-rule=\"evenodd\"/></g>"
	},
	helpcenter: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 28.625v-4a6 6 0 1 0-6-6\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M24 37.625a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\" clip-rule=\"evenodd\"/></g>"
	},
	"hexagon-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"m23.029 43.46l-16-8.888A2 2 0 0 1 6 32.823V15.177a2 2 0 0 1 1.029-1.748l16-8.89a2 2 0 0 1 1.942 0l16 8.89A2 2 0 0 1 42 15.176v17.646a2 2 0 0 1-1.029 1.749l-16 8.888a2 2 0 0 1-1.942 0Z\"/>"
	},
	"hexagon-strip": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 4h10v11.34l9.82-5.67l5 8.66L34 24l9.82 5.67l-5 8.66L29 32.66V44H19V32.66l-9.82 5.67l-5-8.66L14 24l-9.82-5.67l5-8.66L19 15.34z\"/>"
	},
	hexagonal: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7 14h34M7 34L24 4m17 30L24 4m17 30H7m34-20L24 44M7 14l17 30M15.5 9L7 14v20l8.5 5l8.5 5l8.5-5l8.5-5V14l-8.5-5L24 4z\"/>"
	},
	hi: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M37 43H17.476a.26.26 0 0 1-.218-.121L7.86 27.727a4.095 4.095 0 1 1 7.011-4.23l2.462 4.194V8.576a3 3 0 0 1 3.522-2.955L37.52 8.563A3 3 0 0 1 40 11.517V40a3 3 0 0 1-3 3\"/>"
	},
	"high-heeled-shoes": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M29.183 20C31.264 15.054 36.35 10.667 39 8c1.104.667 5 2.604 5 7c0 4-1.455 7.111-3 8l-5.987 4.191a23 23 0 0 0-6.533 7.01L25 40H4v-4c2.429-1.333 9.82-5.867 13-8c7 4 10.5-4 12.183-8M43 21v19\"/>"
	},
	"high-light": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 44V25h6v-8h24v8h6v19z\"/><path stroke-linecap=\"round\" d=\"M17 17V8l14-4v13\"/></g>"
	},
	"high-speed-rail": {
		body: "<g fill=\"none\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 20v10a8 8 0 0 0 8 8h14a8 8 0 0 0 8-8V20m-5 18v4m-20-4v4m6 2h8\"/><path stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 16.36C9 13 15 4 24 4s15 9 15 12.36V20H9z\"/><path fill=\"currentColor\" d=\"M20.5 32a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm10 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22 11h4\"/></g>"
	},
	hippo: {
		body: "<g fill=\"none\"><rect width=\"34\" height=\"18\" x=\"7\" y=\"25\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"6\"/><circle cx=\"17\" cy=\"34\" r=\"3\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"31\" cy=\"34\" r=\"3\" stroke=\"currentColor\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M11 19a6 6 0 0 1 6-6h14a6 6 0 0 1 6 6v6H11z\"/><circle cx=\"20\" cy=\"19\" r=\"2\" fill=\"currentColor\"/><circle cx=\"28\" cy=\"19\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 5a3 3 0 0 1 3 3v5h-6V8a3 3 0 0 1 3-3Zm12 0a3 3 0 0 1 3 3v5h-6V8a3 3 0 0 1 3-3Z\"/></g>"
	},
	histogram: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M4 44h40\"/><path stroke-linejoin=\"round\" d=\"M7 44s5.313-34 17-34s17 34 17 34M4 4v40\"/></g>"
	},
	history: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5.818 6.727V14h7.273\"/><path d=\"M4 24c0 11.046 8.954 20 20 20v0c11.046 0 20-8.954 20-20S35.046 4 24 4c-7.402 0-13.865 4.021-17.323 9.998\"/><path d=\"m24.005 12l-.001 12.009l8.48 8.48\"/></g>"
	},
	"history-query": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M42 24V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h15\"/><circle cx=\"32\" cy=\"32\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m37 36l5 4M14 16h20m-20 8h8\"/></g>"
	},
	hockey: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"m36 4l-5.77 27.41c-.2.93-1.01 1.59-1.96 1.59H9c-1.66 0-3 1.34-3 3v1.55c0 3.48 2.95 6.23 6.43 5.98l17.06-1.22a5.996 5.996 0 0 0 5.44-4.75L42 4zM15 16c4.418 0 8-1.343 8-3s-3.582-3-8-3s-8 1.343-8 3s3.582 3 8 3\"/><path d=\"M23 13v6c0 1.66-3.58 3-8 3s-8-1.34-8-3v-6\"/></g>"
	},
	hold: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m20 24l6 2s15-3 17-3s2 2 0 4s-9 8-15 8s-10-3-14-3H4\"/><path d=\"M4 20c2-2 6-5 10-5s13.5 4 15 6s-3 5-3 5\"/></g>"
	},
	"hold-interface": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m20 33l6 2s15-3 17-3s2 2 0 4s-9 8-15 8s-10-3-14-3H4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 29c2-2 6-5 10-5s13.5 4 15 6s-3 5-3 5\"/><rect width=\"16\" height=\"6\" x=\"26\" y=\"15\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M26 9h16\"/></g>"
	},
	"hold-seeds": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m20 33l6 2s15-3 17-3s2 2 0 4s-9 8-15 8s-10-3-14-3H4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 29c2-2 6-5 10-5s13.5 4 15 6s-3 5-3 5\"/><circle cx=\"34\" cy=\"22\" r=\"3\"/><circle cx=\"22\" cy=\"15\" r=\"3\"/><circle cx=\"34\" cy=\"7\" r=\"3\"/></g>"
	},
	"holding-hands": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"m4.46 12.84l17.775-3.778a2 2 0 0 1 1.506.28l8.098 5.259a2 2 0 0 0 1.505.279l4.081-.868a2 2 0 0 1 2.372 1.54l.624 2.935a2 2 0 0 1-1.54 2.372l-7.015 1.491a2 2 0 0 1-1.506-.279l-8.098-5.259a2 2 0 0 0-1.506-.279l-3.102.66M43.54 33.16l-17.775 3.777a2 2 0 0 1-1.506-.279l-8.098-5.26a2 2 0 0 0-1.506-.278l-4.08.867a2 2 0 0 1-2.372-1.54l-.624-2.935a2 2 0 0 1 1.54-2.372l7.015-1.49a2 2 0 0 1 1.506.278l8.098 5.26a2 2 0 0 0 1.506.279l3.102-.66\"/>"
	},
	"holy-sword": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m17 13l7-9l7 9l-5 26h-4zm0 26h14m-7 0v6\"/>"
	},
	home: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 18v24h30V18L24 6z\"/><path stroke-linejoin=\"round\" d=\"M19 29v13h10V29z\"/><path stroke-linecap=\"round\" d=\"M9 42h30\"/></g>"
	},
	"home-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 44V20L24 4L4 20v24h12V26h16v18z\"/><path stroke-linecap=\"round\" d=\"M24 44V34\"/></g>"
	},
	homestay: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 26c2.319.197 10 2 10 5s-4.135 1.989-6 2c-1.601-.136-6 0-6 3s7 5 14 6s18 1 18 1M8 20l6-6m14-8h10l4 4m-12 4l6 6H20l-6-6zm12 8v-6M26 30v-4m6 8v-8\"/>"
	},
	honey: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"m14.613 4.843l-4.69 4.689a3.316 3.316 0 1 0 4.69 4.689l4.689-4.69a3.316 3.316 0 0 0-4.69-4.688Zm10.16 8.597l-6.252 6.252a3.316 3.316 0 1 0 4.69 4.69l6.252-6.253a3.316 3.316 0 1 0-4.69-4.69Z\"/><path d=\"m28.68 18.91l13.77 13.77c1.028 1.028.811 2.91-.483 4.206c-1.295 1.295-3.178 1.511-4.206.484L23.991 23.6M22.428 6.406L11.487 17.347a3.316 3.316 0 1 0 4.69 4.69l10.94-10.942a3.316 3.316 0 1 0-4.689-4.69Z\"/><path stroke-linecap=\"round\" d=\"M13.854 23.142q2.136 6.656-.71 9.834c-2.847 3.179-2.405 11.166 4.026 11.166s8.32-7.987 2.872-10.79\"/></g>"
	},
	"honey-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"11\" height=\"5\" x=\"4.929\" y=\"13.224\" rx=\"2\" transform=\"rotate(-46.025 4.929 13.224)\"/><rect width=\"11\" height=\"5\" x=\"19.321\" y=\"27.111\" rx=\"2\" transform=\"rotate(-46.025 19.321 27.11)\"/><rect width=\"17\" height=\"5\" x=\"6.443\" y=\"18.855\" rx=\"2\" transform=\"rotate(-46.025 6.443 18.855)\"/><rect width=\"17\" height=\"5\" x=\"13.641\" y=\"25.798\" rx=\"2\" transform=\"rotate(-46.025 13.64 25.798)\"/><rect width=\"25\" height=\"5\" x=\"7.265\" y=\"25.205\" rx=\"2\" transform=\"rotate(-46.025 7.265 25.205)\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m25.003 28.424l4.166-4.318l14.407 13.9l-4.166 4.318z\"/><path stroke-linejoin=\"round\" d=\"M21 40.25c0 2.071-1.79 3.75-4 3.75s-4-1.679-4-3.75S17 34 17 34s4 4.179 4 6.25Z\"/></g>"
	},
	"horizontal-spacing-between-items": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M6 40h6V8H6\"/><path d=\"M24 34V14\"/><path stroke-linejoin=\"round\" d=\"M42 40h-6V8h6\"/></g>"
	},
	"horizontal-tidy-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7 8h6v32H7zm14 0h6v32h-6zm14 0h6v32h-6z\"/>"
	},
	"horizontally-centered": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M16 16h16v16H16z\"/><path d=\"M5 40V8m38 32V8\"/></g>"
	},
	"horse-zodiac": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M18 4C13 4 4 8 4 18.298V25m31 5v14M18.014 22c.486 1.5 1.986 4.5 6.382 3.738C26.98 25.427 33.082 26.14 36 31c1.5 2.5 5.447 2.496 8-3.86\"/><path stroke-linejoin=\"round\" d=\"m26 16l-2-2.5s-1.617-1.755-3-2.5c-1.383-.744-4-1.5-7 0c-1.297.815-4 2-4 6.943V44\"/><path d=\"M27 44v-3a5 5 0 0 0-5-5v0a5 5 0 0 0-5 5v3\"/></g>"
	},
	hospital: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M33 5H5v38h28z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M33 21h10v22H33\"/><path stroke-linecap=\"round\" d=\"M13 21h12m-6-6v12\"/></g>"
	},
	"hospital-bed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 17v22m36-14v14M26 15h12m-27 7h6M6 28h36M6 34h36M32 9v12\"/>"
	},
	"hospital-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 8a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v34H6a2 2 0 0 1-2-2z\"/><path d=\"M21 42v-9a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v9m17-18h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H28z\"/><path stroke-linecap=\"round\" d=\"M12 18h8m14 12h4m-4 6h4M16 14v8M7 42h18\"/></g>"
	},
	"hospital-three": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M11 26v18h26V26L24 13z\"/><path fill=\"currentColor\" d=\"M3.586 21.586a2 2 0 1 0 2.828 2.828zM24 4l1.414-1.414a2 2 0 0 0-2.828 0zm17.586 20.414a2 2 0 1 0 2.828-2.828zm-35.172 0l19-19l-2.828-2.828l-19 19zm16.172-19l19 19l2.828-2.828l-19-19z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 31h10m-5-5v10\"/></g>"
	},
	"hospital-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M32 11h8l4 10H4l4-10h8M8 21h32v22H8z\"/><path d=\"M16 5h16v16H16zm0 24h8v14h-8zm8 0h8v14h-8zm-3-16h6m9 30H12m12-27v-6\"/></g>"
	},
	"hot-air-balloon": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M39 18.352C39 27.855 31 36 24 36S9 27.855 9 18.352C9 10.654 14.893 4 24 4s15 6.654 15 14.352\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M25 4c3.7 3.819 7 10.12 7 16c0 5.807-3.38 12.192-7 16M23 4c-4.317 4.087-7 9.706-7 16c0 6.215 2.777 11.924 7 16\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22 16.018s5.065 1.017 9 0C34.935 15 38 13 38 13M9 20s5 2.5 9 3.5s8 .5 8 .5\"/><path d=\"m18 35l1.4 7.095S22.125 44 24 44s4.6-1.905 4.6-1.905l1.394-7.065L24 36z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m30 35l-.006.03m0 0L28.6 42.095S25.875 44 24 44s-4.6-1.905-4.6-1.905L18 35l6 1z\"/></g>"
	},
	"hot-pot": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 11V4m8 7V7m-16 4V7m28 10H4c0 5.586 3.578 10.503 9 13.365C16.156 32.03 19.936 33 24 33s7.844-.97 11-2.635c5.422-2.862 9-7.78 9-13.365M10.467 39h27.066M13 30.365L9 44m26-13.635L39 44M20 25h8\"/>"
	},
	"hot-pot-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M24 36c12 0 17-8.059 17-18H7c0 9.941 5 18 17 18\"/><path stroke-linejoin=\"round\" d=\"m17 35l-3 9h20l-3-9m-2-17L27.889 4H20.11L19 18\"/><path d=\"M15 25s.07 1.07 1 2s2 1 2 1\"/></g>"
	},
	hotel: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 4h40\"/><rect width=\"32\" height=\"40\" x=\"8\" y=\"4\" stroke-linejoin=\"round\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20 32h8v12h-8z\"/><path stroke-linecap=\"round\" d=\"M15 12h2m-2 6h2m6-6h2m-2 6h2m6-6h2m-2 6h2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 44h40M28 32h2c.552 0 1.01-.452.904-.994C30.352 28.166 27.471 26 24 26s-6.352 2.165-6.904 5.006c-.106.542.352.994.904.994h2\"/></g>"
	},
	"hotel-do-not-clean": {
		body: "<g fill=\"none\"><path d=\"M13 27s20 0 20-12v29H13z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33 15v-1c0-5.523-4.477-10-10-10S13 8.477 13 14m20 1c0 12-20 12-20 12v17h20zM20 32l6 6m0-6l-6 6\"/></g>"
	},
	"hotel-please-clean": {
		body: "<g fill=\"none\"><path d=\"M13 27s20 0 20-12v29H13z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33 15v-1c0-5.523-4.477-10-10-10S13 8.477 13 14m20 1c0 12-20 12-20 12v17h20z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m19 34l3 3l5-5\"/></g>"
	},
	hourglass: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 4h32M8 44h32M12 4v12l9 10m15 18V29.5L27 21M12 44V30l6.5-6.5\"/><path d=\"M36 4v12l-6.5 7.5M18 33h1m10.147-.353l.707.707M24 38h1\"/></g>"
	},
	"hourglass-full": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M7 4h34M7 44h34\"/><path d=\"M11 44q4-20.009 13-20t13 20z\"/><path d=\"M37 4q-4 20.009-13 20T11 4z\"/><path stroke-linecap=\"round\" d=\"M21 15h6m-8 23h10\"/></g>"
	},
	"hourglass-null": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M7 4h34M7 44h34\"/><path d=\"M11 44q4-20.009 13-20t13 20z\"/><path d=\"M37 4q-4 20.009-13 20T11 4z\"/></g>"
	},
	"html-five": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M37.804 5H10.196a2 2 0 0 0-1.991 2.187l2.688 28.666a2 2 0 0 0 1.153 1.63l11.116 5.13a2 2 0 0 0 1.676 0l11.116-5.13a2 2 0 0 0 1.154-1.63l2.687-28.666A2 2 0 0 0 37.804 5Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M32 12H16l1 9h14l-1 11l-6 3l-6-3l-.5-5\"/></g>"
	},
	"hunting-gear": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M44 29H4v13h40zM4 29L9.038 4.999H39.02l4.98 24\"/><path stroke-linecap=\"round\" d=\"M19 12a5 5 0 0 0 0 10m10 0a5 5 0 0 0 0-10m-9 5h8\"/></g>"
	},
	huoshanzhibo: {
		body: "<path fill=\"currentColor\" d=\"M35.393 16.04c-3.284-.697-5.573-3.582-5.622-6.916h-5.075v20.448c-.1 2.338-2.04 4.18-4.378 4.13s-4.18-1.99-4.18-4.329c.05-2.338 1.941-4.229 4.28-4.229c.447 0 .845.05 1.243.2v-5.225c-.398-.05-.846-.05-1.244-.05h-.199c-5.174.15-9.253 4.379-9.154 9.553s4.329 9.254 9.503 9.204s9.303-4.279 9.303-9.403V19.025a12.13 12.13 0 0 0 7.115 2.288V16.19a8 8 0 0 1-1.592-.15\"/><path fill=\"currentColor\" d=\"M33.95 44h-19.9C8.478 44 4 39.473 4 33.95v-19.9C4 8.478 8.478 4 14.05 4h19.9C39.473 4 44 8.478 44 14.05v19.9C44 39.473 39.473 44 33.95 44M14.1 4.448c-5.324 0-9.652 4.328-9.652 9.652v19.75c0 5.324 4.328 9.652 9.652 9.652h19.75c5.324 0 9.652-4.328 9.652-9.651V14.1c0-5.324-4.328-9.652-9.651-9.652z\"/><path fill=\"currentColor\" d=\"M36.139 35.741v-.448c0-.05.05-.05.05-.05c.05 0 .596.498.596.498M20.42 33.204c2.04 0 3.681-1.592 3.78-3.632V27.98c-.944-.398-1.89-.746-2.885-.995c-.1-.05-.199-.05-.298-.05v.299c0 2.239-.647 4.08-1.692 5.771c.299.1.647.15.995.15c0 .049.05.049.1.049\"/><path fill=\"currentColor\" d=\"M36.538 35.542c-.05-.05-.199-.1-.248-.05c-.1.05-.15.1-.15.2c-.05 1.591-.447 3.134-1.044 4.527c.05-.15-.25-.747-.299-.896c-.1-.298-.199-.597-.348-.895a27 27 0 0 0-.796-1.742c-.597-1.094-1.294-2.189-2.04-3.134c-.497-.647-1.045-1.194-1.642-1.741c-1.094 4.229-4.875 7.413-9.452 7.462h-.1a9.9 9.9 0 0 1-5.373-1.592c-.348.299-.746.598-1.095.896a14.2 14.2 0 0 1-2.139-2.985c-.05-.1-.1-.2-.1-.299c-.099.1-.198.15-.298.25a28.8 28.8 0 0 0-4.627 5.273l.348.348c.05-.05.1-.15.15-.199l1.243 1.094l.796.349c-.1.05-.149.15-.248.199c.149.1.298.15.447.249c.1-.1.2-.15.299-.25l1.84.847l4.528.298h14.975c0 .05 0 .1-.05.15h2.04l.15-.15c0-.05.05-.05.05-.1l2.736-.248l2.736-1.144l1.84-1.394c.05.1.1.15.15.25l.348-.349a30.3 30.3 0 0 0-4.627-5.224\"/><path fill=\"currentColor\" d=\"M20.518 38.776c4.428-.05 8.16-3.184 9.055-7.363a22 22 0 0 0-3.732-2.637l-1.194-.597v1.344c-.1 2.288-1.99 4.129-4.278 4.129h-.1c-.447 0-.845-.1-1.244-.249c-.945 1.393-2.189 2.687-3.582 3.88c1.443.896 3.135 1.444 4.976 1.444c0 .05.05.05.099.05m-2.19-3.582c-.049 0 0 0 0 0\"/>"
	},
	"i-mac": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 6h40v22H4z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 28v8H4v-8\"/><path fill=\"currentColor\" d=\"M13.09 18h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91m0-6h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91m8 6h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91m0-6h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91m8 6h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91m0-6h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91m8 0h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20.846 36L16 42h16l-4.846-6\"/></g>"
	},
	icecream: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M33 18H15l6 22s1 3 3 3s3-3 3-3z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M36 18H12c0-8 5-14 12-14s12 6 12 14\"/></g>"
	},
	"icecream-five": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M14 14c0-5.523 4.477-10 10-10s10 4.477 10 10v17.73a.27.27 0 0 1-.27.27H14.27a.27.27 0 0 1-.27-.27z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 16v6m6-6v6m-6 10v9a3 3 0 1 0 6 0v-9\"/></g>"
	},
	"icecream-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m18.843 13.723l13.435 13.435L11.679 40.5l-6.045-6.045zm19.93 5.787c-1.06 1.061-1.76 1.07-2.812 1.431c-.033 2.796.006 5.61-3.542 6.304L18.603 13.429s-.009-1.37 1.396-2.085c.495-.232 1.499-.123 2.097-.025c1.406-3.025 3.535-3.536 5.903-2.558c1.135-1.718 3.94-2.45 6.028-1.775c2.089.675 2.072 2.073 3.462 2.755c1.39.683 2.804-.731 2.812-1.43c.008-.7-.114-2.036.828-1.794c.575.156 1.038.715 1.596 3.044c.31 1.308.13 3.242-.987 4.429c-.686.729-2.217 1.11-2.916 1.327c.066.19 1.012 3.133-.05 4.193\"/><path d=\"M38.822 15.316c-2.813 1.43-4.901.756-6.974-1.316\"/></g>"
	},
	"icecream-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17 4h14l3 28H14zm4 28v9a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v-9\"/><path d=\"M16 14a5.657 5.657 0 0 0 8 0v0a5.657 5.657 0 0 1 8 0v0m-17 8a6.04 6.04 0 0 0 8.76.716L24 22.5l.24-.216A6.04 6.04 0 0 1 33 23v0\"/></g>"
	},
	"icecream-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M14 14c0-5.523 4.477-10 10-10s10 4.477 10 10v17.73a.27.27 0 0 1-.27.27H14.27a.27.27 0 0 1-.27-.27z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 32v9a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v-9M14 16a7.07 7.07 0 0 0 10 0v0a7.07 7.07 0 0 1 10 0v0\"/></g>"
	},
	"icecream-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M15.34 22.5L21 37l3 6l3-6l5.66-14.5\"/><path d=\"M19 32h10\"/><path stroke-linejoin=\"round\" d=\"M24 3c-6 0-8 6-8 6s-6 2-6 7s5 7 5 7s3.5-2 9-2s9 2 9 2s5-2 5-7s-6-7-6-7s-2-6-8-6\"/></g>"
	},
	"id-card": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 8H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z\"/><path d=\"M36 16h-8v8h8z\"/><path stroke-linecap=\"round\" d=\"M12 32h24M12 16h6m-6 8h6\"/></g>"
	},
	"id-card-h": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"32\" x=\"4\" y=\"8\" rx=\"2\"/><path d=\"M17 25a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" d=\"M23 31a6 6 0 0 0-12 0m17-11h8m-6 8h6\"/></g>"
	},
	"id-card-v": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"32\" height=\"40\" x=\"8\" y=\"4\" rx=\"2\"/><path d=\"M24 19a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" d=\"M30 25a6 6 0 0 0-12 0m0 6h12m-12 6h7\"/></g>"
	},
	"image-files": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><circle cx=\"18\" cy=\"17\" r=\"4\"/><path d=\"M15 28v9h18V21l-9.51 10.5z\"/></g>"
	},
	imbalance: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 19V4M12 22l12-3l12-3m-8 14l8-14m8 14l-8-14M20 36l-8-14M4 36l8-14\"/><path d=\"M12 44a8 8 0 0 0 8-8H4a8 8 0 0 0 8 8m24-6a8 8 0 0 0 8-8H28a8 8 0 0 0 8 8\" clip-rule=\"evenodd\"/></g>"
	},
	"import-and-export": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3.99\" d=\"m14 26l-9 9l9 9m-9-8.992h17.5M34 18l9 9l-9 9m9-8.992H25.5M4.5 24V7.5h39V15\"/>"
	},
	"in-flight": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M12 40c0-7.18 5.373-13 12-13s12 5.82 12 13\"/><path d=\"M13 37c0 1 2.5 2 4 1s1.96-3.505 3.5-3.074S22 38.5 24 40s5.5 1 7-1.5s-.08-3.175 1.061-4.797c.76-1.081 1.73-.816 1.939-.703\"/><path stroke-linejoin=\"round\" d=\"M23 21h2m7.151 1.47l1.696 1.06m-19.696 0l1.697-1.06m23.211 5.664l1 1.732m-32 0l1-1.732m32.836 8.872l.209 1.989m-37.209 0l.209-1.99\"/><path d=\"M42 10L9 18\"/><path stroke-linejoin=\"round\" d=\"m16 7l13 6l-12 3l-5-7zM9 18l-3-4\"/></g>"
	},
	inbox: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M4 30L9 6h30l5 24\"/><path d=\"M4 30h10.91l1.817 6h14.546l1.818-6H44v13H4z\"/><path stroke-linecap=\"round\" d=\"M19 14h10m-13 8h16\"/></g>"
	},
	"inbox-download-r": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M4 31h11l2 4h14l2-4h11m-2 5V26m-24-4l6 6l6-6m-6 6V12M6 36V26\"/></g>"
	},
	"inbox-in": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"m5 30l5-24h28l5 24\"/><path d=\"M5 30h9.91l1.817 6h14.546l1.818-6H43v13H5z\"/><path stroke-linecap=\"round\" d=\"m18 20l6 6l6-6m-6 6V14\"/></g>"
	},
	"inbox-out": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M4 30L9 6h30l5 24\"/><path d=\"M4 30h10.91l1.817 6h14.546l1.818-6H44v13H4z\"/><path stroke-linecap=\"round\" d=\"m18 20l6-6l6 6m-6 6V14\"/></g>"
	},
	"inbox-r": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M4 31h11l2 4h14l2-4h11m-2 5V26M6 36V26m11-11h14m-14 8h14\"/></g>"
	},
	"inbox-success": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M4 30L9 6h30l5 24\"/><path d=\"M4 30h10.91l1.817 6h14.546l1.818-6H44v13H4z\"/><path stroke-linecap=\"round\" d=\"M19 19.214L23 24l8-8\"/></g>"
	},
	"inbox-success-r": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M4 31h11l2 4h14l2-4h11m-2 5V26M6 36V26m11-7.385L22.6 24L33 14\"/></g>"
	},
	"inbox-upload-r": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M4 31h11l2 4h14l2-4h11m-2 5V26m-24-8l6-6l6 6m-6-6v16M6 36V26\"/></g>"
	},
	"inclusive-gateway": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M22.8 4.201L4.413 22.586a2 2 0 0 0 0 2.828L22.8 43.8a2 2 0 0 0 2.829 0l18.384-18.385a2 2 0 0 0 0-2.828L25.628 4.2a2 2 0 0 0-2.829 0Z\"/><path d=\"M24 32a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z\"/></g>"
	},
	income: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M31 34h12m0-8V10a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v28a3 3 0 0 0 3 3h20.47\"/><path d=\"m36 39l-5-5l5-5M15 15l5 6l5-6M14 27h12m-12-6h12m-6 0v12\"/></g>"
	},
	"income-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m35 38l-5-5l5-5m8 10l-5-5l5-5\"/><path d=\"M43 22V9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h21.47\"/><path d=\"m13 15l5 6l5-6M12 27h12m-12-6h12m-6 0v12\"/></g>"
	},
	incoming: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M18 13a4 4 0 1 0-8 0a4 4 0 0 0 8 0Zm19 0a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z\"/><path stroke-linecap=\"round\" d=\"M4 13h6m8 0h11m8 0h7\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m10 29l-6 6l6 6m-6-6h40\"/></g>"
	},
	increase: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M41 25c0 9.941-8.059 18-18 18S5 34.941 5 25S13.059 7 23 7\"/><path d=\"M12 28.5c8.5 0 12-.5 19-9.5\"/><path d=\"M23 19h8v8m0-22v4.5M43.5 17H39m1.89-10L37 10.89\"/></g>"
	},
	"increase-the-scale": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M24 9a5 5 0 0 0-10 0v10a5 5 0 0 0 10 0zm18 0a5 5 0 0 0-10 0v10a5 5 0 0 0 10 0z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m36 32l6 6l-6 6\"/><path stroke-linecap=\"round\" d=\"M6 24h1\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M42 38H19\"/></g>"
	},
	"indent-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 9h36M19 19h23M19 29h23M11 19l-5 5l5 5M6 39h36\"/>"
	},
	"indent-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 9H6m23 10H6m23 10H6m31-10l5 5l-5 5m5 10H6\"/>"
	},
	"index-finger": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M12.566 26.182Q10 27.941 10 32c0 4.06 4.975 11 9.462 11h11.48C35.332 43 38 39.15 38 36.06V23.01a3 3 0 0 0-3-3h-.01A2.99 2.99 0 0 0 32 23\"/><path d=\"M13.981 28.445V8.005a3 3 0 0 1 3.006-2.997a3.014 3.014 0 0 1 3.006 3.015v15.569\"/><path stroke-linejoin=\"round\" d=\"M19.993 23.008v-3.992a3.016 3.016 0 0 1 6.03 0v3.992\"/><path stroke-linejoin=\"round\" d=\"M26 22.716v-2.713a3 3 0 0 1 6 0v3\"/></g>"
	},
	"induction-lock": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 18v24h30V18L24 6zm15 4v12m7-8v4m-14-4v4\"/>"
	},
	"industrial-scales": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 32h28l4 8H6z\"/><path stroke-linecap=\"round\" d=\"M16 40v4m8-32v20\"/><path d=\"M17 4h14v8H17z\"/><path stroke-linecap=\"round\" d=\"M32 40v4\"/></g>"
	},
	info: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M24 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24.5 34V20h-2M21 34h7\"/></g>"
	},
	infusion: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M38 30c0 7.732-6.268 14-14 14s-14-6.268-14-14S24 4 24 4s14 18.268 14 26Z\"/><path stroke-linecap=\"round\" d=\"M18 30h12m-6-6v12\"/></g>"
	},
	injection: {
		body: "<g fill=\"none\"><path d=\"M38.168 22.262L19.077 41.354L6.349 28.626L25.44 9.534\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38.168 22.262L19.077 41.354L6.349 28.626L25.44 9.534\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"m21.905 5.999l19.8 19.799m-26.871 2.828l4.243 4.243M6.35 41.353l6.363-6.363m19.092-19.092l3.534-3.535\"/></g>"
	},
	inline: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m37 9l-3-3H8l17 18L8 42h26l3-3M5 24h10m18 0h10\"/>"
	},
	"inner-shadow-bottom-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z\" clip-rule=\"evenodd\"/><path d=\"M24 38a13.96 13.96 0 0 1-9.9-4.1A13.96 13.96 0 0 1 10 24\"/></g>"
	},
	"inner-shadow-bottom-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z\" clip-rule=\"evenodd\"/><path d=\"M24 38a13.96 13.96 0 0 0 9.9-4.1A13.96 13.96 0 0 0 38 24\"/></g>"
	},
	"inner-shadow-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z\" clip-rule=\"evenodd\"/><path d=\"M33.9 33.9A13.96 13.96 0 0 1 24 38a13.96 13.96 0 0 1-9.9-4.1\"/></g>"
	},
	"inner-shadow-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z\" clip-rule=\"evenodd\"/><path d=\"M14.1 14.1A13.96 13.96 0 0 0 10 24a13.96 13.96 0 0 0 4.1 9.9\"/></g>"
	},
	"inner-shadow-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z\" clip-rule=\"evenodd\"/><path d=\"M33.9 33.9A13.96 13.96 0 0 0 38 24a13.96 13.96 0 0 0-4.1-9.9\"/></g>"
	},
	"inner-shadow-top-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z\" clip-rule=\"evenodd\"/><path d=\"M24 10a13.96 13.96 0 0 0-9.9 4.1A13.96 13.96 0 0 0 10 24\"/></g>"
	},
	"inner-shadow-top-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z\" clip-rule=\"evenodd\"/><path d=\"M38 24a13.96 13.96 0 0 0-4.1-9.9A13.96 13.96 0 0 0 24 10\"/></g>"
	},
	"inner-shadow-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z\" clip-rule=\"evenodd\"/><path d=\"M33.9 14.1A13.96 13.96 0 0 0 24 10a13.96 13.96 0 0 0-9.9 4.1\"/></g>"
	},
	"insert-card": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M10 18H4V6h40v12h-6\"/><path d=\"M12 12L4 41h40l-8-29z\"/></g>"
	},
	"insert-table": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39.3 6H8.7A2.7 2.7 0 0 0 6 8.7v30.6A2.7 2.7 0 0 0 8.7 42h30.6a2.7 2.7 0 0 0 2.7-2.7V8.7A2.7 2.7 0 0 0 39.3 6Z\"/><path stroke-linecap=\"round\" d=\"M18 6v36M30 6v36M6 18h36M6 30h36\"/></g>"
	},
	inspection: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M43 33V19H5v22a2 2 0 0 0 2 2h17\"/><path stroke-linejoin=\"round\" d=\"M5 10a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v9H5z\"/><path stroke-linecap=\"round\" d=\"M16 5v8m16-8v8\"/><circle cx=\"30\" cy=\"32\" r=\"7\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m36 37l6 5\"/></g>"
	},
	instagram: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M34 6H14a8 8 0 0 0-8 8v20a8 8 0 0 0 8 8h20a8 8 0 0 0 8-8V14a8 8 0 0 0-8-8Z\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 32a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z\"/><path fill=\"currentColor\" d=\"M35 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4\"/></g>"
	},
	"instagram-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"9\" cy=\"8\" r=\"4\"/><path stroke-linejoin=\"round\" d=\"M5 18h8v25H5zm16 9.5V43h7V29c0-2.5 1.5-4.5 4-4.5s4 2.5 4 4.5v14h7V27.5c0-3-3.5-9.5-11-9.5s-11 6.5-11 9.5Z\"/></g>"
	},
	install: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M41.4 11.551L36.333 5H11.667l-5.083 6.551\"/><path d=\"M6 13a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v27a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z\"/><path stroke-linecap=\"round\" d=\"m32 27l-8 8l-8-8m7.992-8v16\"/></g>"
	},
	instruction: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"32\" x=\"4\" y=\"8\" stroke-linejoin=\"round\" rx=\"2\"/><path stroke-linejoin=\"round\" d=\"M4 10a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v6H4z\"/><path d=\"m25 23l-2 11\"/><path stroke-linejoin=\"round\" d=\"m31 23l6 5l-6 6M17 23l-6 5l6 6\"/></g>"
	},
	intercom: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M13 14a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v11l-2 6v10a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V31l-2-6z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19 11V4m9 7V7m0 12h-8m6 7h-4\"/></g>"
	},
	"intermediate-mode": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"4\"><path d=\"m24.003 4l5.27 5.27h9.457v9.456l5.27 5.27l-5.27 5.278v9.456h-9.456L24.004 44l-5.278-5.27H9.27v-9.456L4 23.997l5.27-5.27V9.27h9.456z\"/><path d=\"M24 16c3.993.5 7 4 7 8s-3 7.5-7 7.955\"/></g>"
	},
	"internal-data": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 18V9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v9m-10 6v7m-8-16v16m-8-12v12M6 30v9a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9\"/>"
	},
	"internal-expansion": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 42h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2\"/><path d=\"M42 8a2 2 0 0 0-2-2H28v14h14z\" clip-rule=\"evenodd\"/><path d=\"m13 35l10-10m0 0v7m0-7h-7\"/></g>"
	},
	"internal-reduction": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 42h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2\"/><path d=\"M42 8a2 2 0 0 0-2-2H28v14h14z\" clip-rule=\"evenodd\"/><path d=\"M23 25L13 35m0 0v-7m0 7h7\"/></g>"
	},
	"internal-transmission": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 25H30m6-6l-6 6l6 6M21 6v20c0 6.74-6.165 13.567-12 16\"/><path d=\"M42 14V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-3.5\"/></g>"
	},
	international: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.955 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M6 30.986q3.948 1.582 5.684 0c1.736-1.584.238-6.388 2.67-7.713c2.43-1.325 6.135 4.548 9.597 2.616c3.462-1.933-.326-7.087 2.076-9.176s5.527.267 6.073-3.227s-2.548-1.978-3.142-5.28q-.592-3.3 0-3.47m.062 38.614q-2.81-2.877-2.023-5.348c.787-2.472 2.086-2.326 2.652-3.854s-1.033-3.705 2.515-5.565q3.549-1.86 9.759 4.311\"/></g>"
	},
	"intersect-selection": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"27\" height=\"27\" x=\"16\" y=\"16\" rx=\"2\"/><rect width=\"27\" height=\"27\" x=\"5\" y=\"5\" rx=\"2\"/><path d=\"M27 16L16 27m16-6L21 32\"/></g>"
	},
	intersection: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M31 31h9a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H19a2 2 0 0 0-2 2v9\"/><path d=\"M17 17H8a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h21a2 2 0 0 0 2-2v-9\"/><rect width=\"14\" height=\"14\" x=\"17\" y=\"17\" rx=\"2\"/></g>"
	},
	"invalid-files": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 44V4h23l9 10.5V44z\"/><path d=\"M34 25c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10a9.97 9.97 0 0 1 6.865 2.729A9.97 9.97 0 0 1 34 25m-17-7l14 14\"/><path d=\"M34 25c0 5.523-4.477 10-10 10M14 25c0-5.523 4.477-10 10-10\"/></g>"
	},
	"invert-camera": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M9 14s7.5-11.5 20.5-7S42 24.5 42 24.5M39 34s-6 11-19.5 7.5S6 24 6 24M42 8v16M6 24v16\"/><path stroke-linecap=\"round\" d=\"M14 20h12v8H14z\"/><path d=\"m34 28l-2-1.333v-5.334L34 20z\"/></g>"
	},
	"invert-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 15c0 7.299 4.103 13.583 10 16.408A16.15 16.15 0 0 0 27 33c9.389 0 17-8.059 17-18\"/><path d=\"m18 20l-8-5l-6 8\"/></g>"
	},
	"invert-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M38 15c0 7.299-4.103 13.583-10 16.408A16.15 16.15 0 0 1 21 33c-9.389 0-17-8.059-17-18\"/><path d=\"m30 20l8-5l6 8\"/></g>"
	},
	"ios-face-recognition": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 34v10h10m20 0h10V34M34 4h10v10M14 4H4v10m12 20s3 3 8 3s8-3 8-3m-8-20v9c0 2-2 4-4 4h-1m15-13v2m-20-2v2\"/>"
	},
	ipad: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"30\" height=\"38\" x=\"9\" y=\"5\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M22 36h4\"/></g>"
	},
	"ipad-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"38\" height=\"30\" x=\"5\" y=\"10\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11 27v-4\"/></g>"
	},
	iphone: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"26\" height=\"40\" x=\"11\" y=\"4\" rx=\"3\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M22 10h4m-6 28h8\"/></g>"
	},
	ipo: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 18.313V7h40v11.313a5.5 5.5 0 0 0-3.636 5.187A5.5 5.5 0 0 0 44 28.687V40H4V28.687A5.5 5.5 0 0 0 7.636 23.5A5.5 5.5 0 0 0 4 18.313Z\"/><path stroke-linecap=\"round\" d=\"M13 18v11m5-11v11\"/><path d=\"M18 18h3a3 3 0 1 1 0 6h-3z\"/><ellipse cx=\"32\" cy=\"24\" rx=\"3\" ry=\"5\"/></g>"
	},
	iron: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 40h40l-2-16H20c-8.837 0-16 7.163-16 16M16 8h24l2 16m-25 8h2m6 0h2m6 0h2\"/>"
	},
	"iron-disable": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 40h40l-2-16H20c-8.837 0-16 7.163-16 16M16 8h24l2 16\"/><circle cx=\"24\" cy=\"24\" r=\"9\"/><path d=\"m26 26l-2-2l-2-2m4 0l-2 2l-2 2\"/></g>"
	},
	"iron-three": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 40h40l-2-16H20c-8.837 0-16 7.163-16 16M16 8h24l2 16m-25 8h2m6 0h2\"/>"
	},
	"iron-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 40h40l-2-16H20c-8.837 0-16 7.163-16 16M16 8h24l2 16m-25 8h2\"/>"
	},
	iwatch: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M36 12H10v24h26z\"/><path stroke-linejoin=\"round\" d=\"M27 24a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z\"/><path stroke-linecap=\"round\" d=\"M15 12q0-.11.025-.217l1.607-7A1.026 1.026 0 0 1 17.641 4h10.743c.484 0 .903.326 1.008.783l1.608 7M15 36q0 .11.025.217l1.607 7c.105.458.524.783 1.009.783h10.743c.484 0 .903-.325 1.008-.783l1.608-7M39 16v4\"/></g>"
	},
	"iwatch-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"22\" height=\"24\" x=\"13\" y=\"12\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 12v6m-3-6h6m-3 18v6m-3 0h6m8-12.066L29 24m6-3v6m-16-3l-6 .066M13 21v6m18-15V4H17v8m14 24v7a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-7M7 20v8m34-8v8\"/></g>"
	},
	"iwatch-two": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M15.417 10.5C18.237 7.7 21.942 6 26 6c8.837 0 16 8.059 16 18s-7.163 18-16 18c-4.058 0-7.763-1.7-10.583-4.5\"/><rect width=\"10\" height=\"28\" x=\"6\" y=\"10\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\"/><rect width=\"4\" height=\"4\" x=\"13\" y=\"18\" fill=\"currentColor\" rx=\"2\" transform=\"rotate(90 13 18)\"/><rect width=\"4\" height=\"4\" x=\"13\" y=\"25\" fill=\"currentColor\" rx=\"2\" transform=\"rotate(90 13 25)\"/></g>"
	},
	jewelry: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M20 24c0-6.364 2.628-8.646 4-9c1.22.177 4 2.212 4 9s-2.78 9-4 9c-1.372-.177-4-2.636-4-9Z\"/><path d=\"M20 23c-1.554-1.538-6.382-1.16-8-1c-.485 1.762.352 5.492 2.293 7.414C16.72 31.817 18.661 33 24 33m4-10c1.436-1.533 5.504-1.16 7-1c.3 1.597.14 5.188-2.372 7.87C30.115 32.555 25.5 33 24 33\"/></g>"
	},
	jinritoutiao: {
		body: "<path fill=\"currentColor\" d=\"M36.883 44h-25.77C7.192 44 4 40.808 4 36.883v-25.77C4 7.192 7.192 4 11.113 4h25.77c3.92 0 7.113 3.192 7.113 7.113v25.77C44 40.808 40.808 44 36.883 44M11.113 4.303a6.82 6.82 0 0 0-6.81 6.81v25.77a6.82 6.82 0 0 0 6.814 6.814h25.77a6.82 6.82 0 0 0 6.815-6.814v-25.77a6.82 6.82 0 0 0-6.815-6.815H11.113z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"m4 36.887l40-2.092V11.113L4 13.205zm20.963-18.333s.933.677 1.035.745c.667.459 1.548 1.065 2.917 1.694c-1.26.386-2.709.768-4.382 1.136v2.314c3.191-.686 5.692-1.463 7.667-2.251c1.95.564 4.472 1.079 7.781 1.446v-2.314a52 52 0 0 1-4.474-.702a17.5 17.5 0 0 0 3.614-2.682v-.354h.004v-2.169h-.004l-.525.028l-8.974.47l-2.324-.963zm3.547-.412l7.475-.392c-.82.6-1.978 1.305-3.715 2.04c-1.73-.553-2.902-1.137-3.76-1.648m-11.798-2.094l2.459-.128c-.062 4.621-.148 7.388-.82 9.557l5.095-.267v2.17l-6.107.318c-.976 1.569-2.493 3.046-4.867 5.14l-3.874.205q.215-.183.416-.358l.074-.064c2.388-2.07 4.03-3.494 5.142-4.76l-6.228.324V26.02l7.718-.405c.86-1.97.928-4.717.992-9.567m-1.81 1.419v2.42L9.43 19.39v-2.417zM9.43 21.064v2.42l5.472.499v-2.42zm21.552 5.922l-6.449.338v-2.17l6.45-.337v-1.235l2.518-.128v1.23l6.48-.339v2.17l-6.48.34v4.888l-2.519.132zM21.06 28.59l-2.97.153l2.386 3.682l2.97-.153zm13.587-.712l2.966-.154l2.386 3.682l-2.966.154zm-4.75.247l-2.97.158l-2.386 3.929l2.97-.154z\" clip-rule=\"evenodd\"/>"
	},
	journey: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M24 40c8.284 0 15-6.716 15-15s-6.716-15-15-15S9 16.716 9 25s6.716 15 15 15\"/><path d=\"M20 11c1.805 1.008 3.5 2.5 3.358 4.445c-.114 1.555-1.443 1.902-1.721 3.026s1.33 2.35-1.39 4.165C18.431 23.846 12.97 26.145 9 24\"/><path stroke-linejoin=\"round\" d=\"M9.5 24.5C6.5 26.388 2.068 31.521 4 35c2.5 4.5 12 .69 23-8S42.23 5.606 42.23 5.606L37 7\"/><path d=\"M26 40s.5-5 4-8s8-3 8-3\"/></g>"
	},
	joystick: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 33H4v10h40z\"/><path stroke-linecap=\"round\" d=\"M38 26H26v7h12z\"/><path d=\"M18 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" d=\"M16 14L9 33\"/></g>"
	},
	juice: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15 24h18l-1.8 20H16.8z\"/><rect width=\"26\" height=\"6\" x=\"11\" y=\"18\" rx=\"3\"/><path d=\"M24 8c-5.523 0-10 4.477-10 10h20c0-5.523-4.477-10-10-10Z\"/><path stroke-linecap=\"round\" d=\"m28 4l-2 4\"/></g>"
	},
	jump: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m8 10l12 10.254v9.714L10.857 44M40 10L28 20.254v9.714L37.143 44\"/><circle cx=\"24\" cy=\"8\" r=\"4\"/></g>"
	},
	"kagi-map": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 42h4V24h7v18h4.94V6h8.04v27.066h6.04V16.125h6.049V42H44\"/>"
	},
	kettle: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6.778 37h36v7h-36zm32-1l-2-26h-32l6.566 7.55a3 3 0 0 1 .727 2.206L10.778 36m16-18h-5m5 6h-5m5 6h-5m15-20h8v16h-6m-19-17V4h9v5\"/>",
		width: 49
	},
	"kettle-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M13 14h17s8 4.148 8 13.8c0 9.65-8 14.2-8 14.2H13s-7-6.022-7-14s7-14 7-14\"/><path d=\"M38 28c-13-3-19 6-32 0m25-14h9s4 4 4 16M9 6l23 2.667L31 14H13z\"/></g>"
	},
	key: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M22.868 24.298a9.87 9.87 0 0 1 2.63 9.588a9.93 9.93 0 0 1-7.065 7.028a9.99 9.99 0 0 1-9.64-2.615a9.863 9.863 0 0 1 .122-13.878c3.839-3.82 10.046-3.873 13.951-.121z\"/><path stroke-linecap=\"round\" d=\"M23 24L40 7\"/><path d=\"m30.305 16.9l5.429 5.4l6.333-6.3l-5.428-5.4z\"/></g>"
	},
	"key-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"15\" cy=\"33\" r=\"8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m29 16l6.5 6M20 26L37 7m-2 4l7 6.5\"/></g>"
	},
	"key-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"15\" cy=\"33\" r=\"8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m29 16l7 6m-16 4L36 8l7 6\"/></g>"
	},
	keyboard: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M15 19a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m9-8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m9-8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M17 33h14\"/></g>"
	},
	"keyboard-one": {
		body: "<g fill=\"none\"><rect width=\"40\" height=\"24\" x=\"4\" y=\"18\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\"/><circle cx=\"14\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><circle cx=\"16\" cy=\"30\" r=\"2\" fill=\"currentColor\"/><circle cx=\"10\" cy=\"30\" r=\"2\" fill=\"currentColor\"/><circle cx=\"20\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><circle cx=\"22\" cy=\"30\" r=\"2\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><circle cx=\"28\" cy=\"30\" r=\"2\" fill=\"currentColor\"/><circle cx=\"32\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><circle cx=\"34\" cy=\"30\" r=\"2\" fill=\"currentColor\"/><circle cx=\"38\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M17 36h14m2-18v-4.875a1 1 0 0 1 1-1h5a1 1 0 0 0 1-1V6\"/></g>"
	},
	keyhole: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\" clip-rule=\"evenodd\"/><path d=\"M24 15a5 5 0 0 0-3 9l-1 8h8l-1-8a5 5 0 0 0-3-9\"/></g>"
	},
	keyline: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 6h36v36H6z\"/><path d=\"M36 24c0 6.627-5.373 12-12 12s-12-5.373-12-12s5.373-12 12-12s12 5.373 12 12M4 4l40 40m0-40L4 44\"/></g>"
	},
	"kitchen-knife": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 30v10c0 6 8 6 8 0V30m0 7h-8\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M14 6a2 2 0 0 1 2-2h16.635c.319 0 .632.075.888.265C34.542 5.025 37.198 7.582 38 14c.773 6.182-1.369 12.364-2.382 14.855c-.288.71-.985 1.145-1.75 1.145H14z\"/><circle cx=\"22\" cy=\"10\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"knife-fork": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 4v40M8 5v10c0 5 6 5 6 5s6 0 6-5V5\"/><path d=\"M30 12c0-8 8-8 8-8v17h-8z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 21h-8v-9c0-8 8-8 8-8zm0 0v23\"/></g>"
	},
	"koala-bear": {
		body: "<g fill=\"none\"><circle cx=\"24\" cy=\"26\" r=\"15\" stroke=\"currentColor\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M21 31.563C21 29.664 24 24 24 24s3 5.664 3 7.563C27 33.46 25.657 35 24 35s-3-1.539-3-3.437Z\"/><circle cx=\"17.039\" cy=\"23.493\" r=\"2\" fill=\"currentColor\"/><circle cx=\"31.039\" cy=\"23.493\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M17 11.927C15.621 9.524 8.495 6.093 5.35 9.306C4.014 10.418 2.986 15.45 5.727 23L10 19.98m21-8.053c1.379-2.403 8.505-5.834 11.65-2.621c1.336 1.112 2.364 6.144-.377 13.694L38 19.98\"/></g>"
	},
	kungfu: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M11 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m20 18l8 6l-3 18m3-18l16-13\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M28 16.8L27 8l-7 10l-4 9l-6 3\"/></g>"
	},
	label: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M9 4h30v40L24 33.429L9 44z\"/><path d=\"M9 4h30v12H9z\"/></g>"
	},
	ladder: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 42V10c0-6 6-6 6-6m-6 10h18m-18 8h18m-18 8h18m-18 8h18m6 5V11c0-6 6-6 6-6\"/>"
	},
	"ladder-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M17 17h18m-20 9h18m-21 9h18m-1.435 8l9.74-35.47A2 2 0 0 0 36.377 5H22.214a2 2 0 0 0-1.91 1.41L9 43m8-25l4 24m14-24l4 24\"/>"
	},
	lamp: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M14 9.5a3.5 3.5 0 1 1 7 0V21h-7zm13 0a3.5 3.5 0 1 1 7 0V21h-7z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18 34h12v8H18z\"/><path d=\"M10 22a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v4a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8z\"/></g>"
	},
	"land-surveying": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 26v18m0-18l12 18M24 26L12 44m12-30v6m-5 0h10\"/><path d=\"M10 6h26v8H10z\"/><path stroke-linecap=\"round\" d=\"M40 8v4\"/></g>"
	},
	landing: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 43h38M4 25V14.99c1.216 0 4.818 4.179 6 6.01l11 2V5l4 2l5.831 18.978L40 28c4 1 4 3.5 4 4c0 3-3.5 3-4 3c-4 0-36-10-36-10\"/>"
	},
	landscape: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M14 28c3 0 12.5 1.5 12.5 5s-5.106 2.739-7.5 3c-2.073 0-7 0-7 3c0 4 20.545 5 24.5 5\"/><path d=\"M31 15c0-4.267-4.27-11-10.195-11s-10.472 8-12.26 15.467C6.757 26.933 7.013 36 7.013 36M26 24c0-2.5 1.4-7 6-7c4 0 6.2 4.042 7 7.5s1 8.5 1 8.5\"/></g>"
	},
	laptop: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 8h32v20H8zm0 20L4 41h40l-4-13\"/><path d=\"M19.9 35h8.2l1.9 6H18z\"/></g>"
	},
	"laptop-computer": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"38\" height=\"24\" x=\"5\" y=\"8\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 40h40M22 14h4\"/></g>"
	},
	"laptop-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 11a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v21H8zM4 32h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z\"/>"
	},
	lark: {
		body: "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M41.072 5.994L3.31 16.52l9.075 9.294l8.414.146l9.683-9.44q-.384-.787-.384-1.318c0-.794.311-1.422.796-1.868q1.244-1.145 2.994-.342zm1.03.734L31.578 44.49l-9.294-9.075L22.137 27l9.375-9.518a2.54 2.54 0 0 0 1.664.495c.902-.05 1.485-.596 1.759-.917a2.35 2.35 0 0 0 .567-1.649a2.57 2.57 0 0 0-.52-1.464z\" clip-rule=\"evenodd\"/>"
	},
	"lark-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M3.494 17.72L41.678 6.321L30.364 44.59l-8.88-8.88l.041-9.234l-9.546-.27z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M27.535 14.89a4 4 0 1 0 5.657 5.658a4 4 0 0 0-5.657-5.657\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M41.678 6.406L30.364 17.719\"/></g>"
	},
	"lattice-pattern": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 8h4m4 8h4M16 6v4m-8 4v4M22 8h4m4 8h4M32 6v4m-8 4v4M38 8h4m-2 6v4M6 24h4m4 8h4m-2-10v4m-8 4v4m14-10h4m4 8h4m-2-10v4m-8 4v4m14-10h4m-2 6v4M6 40h4m6-2v4m6-2h4m6-2v4m6-2h4\"/>"
	},
	layers: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 11.914L24 19l20-7.086L24 5z\"/><path stroke-linecap=\"round\" d=\"m4 20l20 7l20-7M4 28l20 7l20-7M4 36l20 7l20-7\"/></g>"
	},
	"layout-five": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M6 16h36M6 13v6m36-6v6M17 30h25M17 16v26m-3 0h6m22-15v6\"/></g>"
	},
	"layout-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M6 28h18m0-8h18M6 25v6m36-14v6M24 42V6m-3 0h6m-6 36h6\"/></g>"
	},
	"layout-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M6 16h36M6 13v6m36-5v6m-10-4v26m-3 0h6\"/></g>"
	},
	"layout-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M6 22h36m-13 0V6m-3 0h6M6 19v6m36-6v6\"/></g>"
	},
	"layout-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M6 24h36M6 21v6m36-6v6\"/></g>"
	},
	leaf: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M37 24c0 14.094-13 20-13 20s-13-4.625-13-20S24 4 24 4s13 5.906 13 20M24 36l5-5m-5-2l-5-5m5-1l5-5m-5 26V14\"/>"
	},
	leaves: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M31 43s-13 1-20-7S4 4 4 4s24-1 32 5s6 23 6 23\"/><path d=\"M44 44s-11.18-8.449-18-16s-10-15-10-15m10 15l1-13m-1 13l-10-1\"/></g>"
	},
	"leaves-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M37 23.879C37 30.573 31.18 36 24 36s-13-5.427-13-12.121S24 4 24 4s13 13.184 13 19.879Z\"/><path stroke-linecap=\"round\" d=\"M24 4v32m0 0v8\"/><path d=\"M37 23.879C37 30.573 31.18 36 24 36s-13-5.427-13-12.12m26-.001C37 17.184 24 4 24 4S11 17.184 11 23.879\"/></g>"
	},
	"leaves-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M21 17c8.385-2.12 17.665-8.76 21-12c0 15-3.801 23.472-6 26c-10 11.5-20.935 6.16-23 2c-4.855-9.777 2.07-14.5 8-16M6 43c.412-2 2.388-6.6 7-9\"/>"
	},
	"led-diode": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 24a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v6H6zm13 6v14m10-14v14M24 4c-7.732 0-14 6.268-14 14v4h28v-4c0-7.732-6.268-14-14-14\"/><circle cx=\"24\" cy=\"13\" r=\"3\"/></g>"
	},
	left: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M31 36L19 24l12-12\"/>"
	},
	"left-alignment": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 14h36M6 24h24M6 34h8\"/>"
	},
	"left-and-right-branch": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13 8c1.5 0 4.05 0 5.014 5.061C18.99 18.18 19.33 22.848 21 24m14 16c-1.5 0-4.05.001-5.014-5.061C29.01 29.82 28.67 25.152 27 24M13 40c1.5 0 4.05.001 5.014-5.061C18.99 29.82 19.33 25.152 21 24M35 8c-1.5 0-4.05 0-5.014 5.061C29.01 18.18 28.67 22.848 27 24\"/><circle r=\"4\" fill=\"currentColor\" transform=\"matrix(-1 0 0 1 21 24)\"/><circle r=\"4\" fill=\"currentColor\" transform=\"matrix(-1 0 0 1 27 24)\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M21 24h-8m14 0h8M7 24H5m38 0h-2M7 8H5m38 0h-2M7 40H5m38 0h-2\"/></g>"
	},
	"left-bar": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M16 6v36m-3 0h6M13 6h6\"/></g>"
	},
	"left-branch": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M26 8c1.5-.012 5.5 0 6.571 5.062C33.655 18.179 38.143 22.848 40 24M26 40c1.5 0 5.5 0 6.571-5.062C33.655 29.821 38.143 25.152 40 24\"/><circle r=\"4\" fill=\"currentColor\" transform=\"matrix(-1 0 0 1 40 24)\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 24H26m-8 0H6M18 8H6m12 32H6\"/></g>"
	},
	"left-c": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m27 33l-9-9l9-9\"/></g>"
	},
	"left-expand": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"28\" height=\"36\" x=\"6\" y=\"6\" rx=\"2\"/><path d=\"M42 6v36\"/></g>"
	},
	"left-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 36L18 24l12-12z\"/>"
	},
	"left-small": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 23.992h24M24 36L12 24l12-12\"/>"
	},
	"left-small-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m15 33l17-17m1 17H15V15\"/>"
	},
	"left-small-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 32L15 15m0 18V15h18\"/>"
	},
	"left-square": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M29 34L19 24l10-10\"/></g>"
	},
	"left-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 5L6 24l18 19V31h18V17H24z\"/>"
	},
	lemon: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M36 26c0-6.408-4.383-12.811-9-14.473L24 8l-3 3.527c-4.617 1.662-9 8.065-9 14.473s4.383 12.811 9 14.473c.954.343 1.96 3.527 3 3.527s2.046-3.184 3-3.527c4.617-1.662 9-8.065 9-14.473\"/><path d=\"M35.142 4.232c1.011.13 1.586 1.124 1.192 2.065c-.534 1.275-1.505 2.957-3.138 3.9c-1.632.942-3.575.942-4.946.767c-1.011-.13-1.586-1.124-1.192-2.065c.534-1.274 1.506-2.956 3.138-3.899c1.633-.943 3.575-.943 4.946-.768Z\"/></g>"
	},
	"lens-alignment": {
		body: "<g fill=\"none\"><path d=\"M14 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 10a4 4 0 0 1-4 4m4-4a4 4 0 1 0-4 4m4-4h6m-10 4v6\"/><path d=\"M14 38a4 4 0 1 0-8 0a4 4 0 0 0 8 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 38a4 4 0 0 0-4-4m4 4a4 4 0 1 1-4-4m4 4h6m-10-4v-6\"/><path d=\"M34 38a4 4 0 1 1 8 0a4 4 0 0 1-8 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M34 38a4 4 0 0 1 4-4m-4 4a4 4 0 1 0 4-4m-4 4h-6m10-4v-6\"/><path d=\"M34 10a4 4 0 1 0 8 0a4 4 0 0 0-8 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M34 10a4 4 0 0 0 4 4m-4-4a4 4 0 1 1 4 4m-4-4h-6m10 4v6m-21 4h14m-7 7V17\"/></g>"
	},
	leo: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"13\" cy=\"27\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 21c0-5.5 2-16 11-16c4.5 0 12.72 2.332 9.536 15.561c-.28 1.166-1.382 3.414-1.382 3.414l-1.604 3.602c-1.659 3.341-3.802 11.877 2.986 15.034c2.058.957 6.481.339 7.464-4.01\"/></g>"
	},
	level: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 42L4 18.5L9.695 6h28.61L44 18.5z\"/><path d=\"m32 18l-8 9l-8-9\"/></g>"
	},
	"level-adjustment": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m11.114 18l3.763-14.044l27.046 7.247L40.102 18M7.898 30l-1.82 6.797l27.045 7.247L36.886 30\"/><path stroke-dasharray=\"2 6\" d=\"M4 24h40\"/></g>"
	},
	"level-eight-title": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 8v32M24 8v32M7 24h16\"/><path d=\"M37 29a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 11a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/></g>"
	},
	"level-five-title": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 8v32M24 8v32M7 24h16m17-2.99h-8v7.024C32 28 34 27 37 27s4 2.534 4 6.5s-1 6.5-5 6.5c-3 0-4-2-4-3.992\"/>"
	},
	"level-four-title": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 8v32M24 8v32M7 24h16m16.977 16V20L31 32.997v2.023h12\"/>"
	},
	"level-nine-title": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 8v32M24 8v32M7 24h16\"/><path d=\"M36.5 21a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M31 36c.818 2.193 2.548 4 5.5 4c3.038 0 5.5-2.686 5.5-6v-7\"/></g>"
	},
	"level-seven-title": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 8v32M24 8v32M7 24h16m8.998-2H42l-8.006 18\"/>"
	},
	"level-six-title": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 8v32M24 8v32M7 24h16\"/><path d=\"M36.5 40a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M41.596 24.74C40.778 22.545 38.804 21 36.5 21c-3.038 0-5.5 2.686-5.5 6v7\"/></g>"
	},
	libra: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M4 39h40M4 27h11.5m17 0H44\"/><path d=\"M15.514 27a11 11 0 0 1-.735-1A10.95 10.95 0 0 1 13 20c0-6.075 4.925-11 11-11s11 4.925 11 11a10.95 10.95 0 0 1-2.514 7\"/></g>"
	},
	lifebuoy: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M38.142 38.142c7.81-7.81 7.81-20.474 0-28.284s-20.474-7.81-28.284 0s-7.81 20.474 0 28.284s20.474 7.81 28.284 0m-5.657-22.627c4.687 4.686 4.687 12.284 0 16.97c-4.686 4.687-12.284 4.687-16.97 0c-4.687-4.686-4.687-12.284 0-16.97c4.686-4.687 12.284-4.687 16.97 0\" clip-rule=\"evenodd\"/><path d=\"m38.142 38.142l-5.657-5.657M9.858 38.142l5.657-5.657M9.858 9.858l5.657 5.657m22.627-5.657l-5.657 5.657m0 16.97c4.687-4.686 4.687-12.284 0-16.97c-4.686-4.687-12.284-4.687-16.97 0c-4.687 4.686-4.687 12.284 0 16.97c4.686 4.687 12.284 4.687 16.97 0\"/></g>"
	},
	light: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 16v6m14.142-.142L33.9 26.1M44 36h-6M4 36h6m-.142-14.142L14.1 26.1M18 36h12\"/>"
	},
	"light-house": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M6 44h36M17 20h14\"/><path d=\"M19 20h10l3 24H16z\"/><path stroke-linecap=\"round\" d=\"m19 9l2 11h6l2-11\"/><path stroke-linecap=\"round\" d=\"m32 12l-3-3l-5-5l-5 5l-3 3m21-5l3-3M11 7L8 4m29 15l3 3m-29-3l-3 3m30-9h4m-32 0H6m12 15h12m-13 8h14\"/><path d=\"m29 20l3 24M19 20l-3 24\"/></g>"
	},
	"light-member": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M35.056 15L18.463 7.665a2 2 0 0 0-2.447.682L11.359 15\"/><path d=\"M43 15H5a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1V16a1 1 0 0 0-1-1Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m19 23l5.103 10L29 23\"/></g>"
	},
	"light-rain": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9.455 30.994A13.95 13.95 0 0 1 4 19.885C4 12.217 10.105 6 17.636 6c6.297 0 11.598 4.346 13.166 10.253a8.9 8.9 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.257c0 3.795-2.244 7.058-5.455 8.486M16 23v4m8 0v4m8-8v4m-16 7v4m8 0v4m8-8v4\"/>"
	},
	lightning: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 4h18L26 18h15L17 44l5-19H8z\"/>"
	},
	like: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8\"/>"
	},
	lincoln: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M30.19 4H17.81a2 2 0 0 0-1.99 1.801l-1.8 18a2 2 0 0 0 0 .398l1.8 18A2 2 0 0 0 17.81 44h12.38a2 2 0 0 0 1.99-1.801l1.8-18a2 2 0 0 0 0-.398l-1.8-18A2 2 0 0 0 30.19 4Z\"/><path stroke-linecap=\"round\" d=\"M14 24h20M24 4v40M20 4h8m-8 40h8M15 14l-.98 9.801a2 2 0 0 0 0 .398L15 34m18-20l.98 9.801q.02.199 0 .398L33 34\"/></g>"
	},
	link: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24.707 9.565L9.858 24.415a9 9 0 0 0 0 12.727v0a9 9 0 0 0 12.728 0l17.678-17.677a6 6 0 0 0 0-8.486v0a6 6 0 0 0-8.486 0L14.101 28.657a3 3 0 0 0 0 4.243v0a3 3 0 0 0 4.242 0l14.85-14.85\"/>"
	},
	"link-break": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 15h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H32M17 15H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11m7-27v36M12 24h4m16 0h4\"/>"
	},
	"link-cloud": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M13 33c-3.333 0-9-1.5-9-7.5c0-7 7-8.5 9-8.5c1-3.5 3-9 11-9c7 0 10 4 11 7.5c0 0 9 1 9 9.5c0 6-5 8-9 8H22\"/><path d=\"m27 28l-5 5l5 5\"/></g>"
	},
	"link-cloud-faild": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 33c-3.333 0-8-1.5-8-7.5c0-7 7-8.5 9-8.5c1-3.5 3-9 11-9c7 0 10 4 11 7.5c0 0 9 1 9 9.5c0 6-4 8-8 8m-7-5L19 38m0-10l10 10\"/>"
	},
	"link-cloud-sucess": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 33c-3.333 0-8-1.5-8-7.5c0-7 7-8.5 9-8.5c1-3.5 3-9 11-9c7 0 10 4 11 7.5c0 0 9 1 9 9.5c0 6-4 8-8 8\"/><path d=\"m18 33l6 5l8-10\"/></g>"
	},
	"link-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18 24h13\"/><path d=\"M4 17a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/></g>"
	},
	"link-in": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 12V4h16v8m0 24v8H16v-8m2-12H4m40 0H30m-6 10V14m-11 5l5 5l-5 5m22-10l-5 5l5 5\"/>"
	},
	"link-interrupt": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M27 14h15a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M11 14H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h15M14 6l20 34m-2-17h4m-24 0h4\"/>"
	},
	"link-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 12V4h16v8m0 24v8H24v-8m0-12H4m28 10V14m-20 2l-8 8l8 8\"/>"
	},
	"link-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m26.24 16.373l-9.14-9.14c-2.661-2.661-7.035-2.603-9.768.131s-2.793 7.107-.131 9.769l7.935 7.935m17.767-2.065l7.935 7.935c2.661 2.662 2.603 7.035-.13 9.769c-2.735 2.734-7.108 2.792-9.77.13l-9.14-9.14\"/><path d=\"M26.11 26.142c2.733-2.734 2.792-7.108.13-9.769m-4.441 5.425c-2.734 2.734-2.792 7.108-.131 9.769\"/></g>"
	},
	"link-out": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 12V4h16v8m0 24v8H16v-8m2-12H4m40 0H30m-6 10V14m15 5l5 5l-5 5M9 19l-5 5l5 5\"/>"
	},
	"link-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 12V4h16v8m0 24v8H8v-8m36-12H24m-8 10V14m20 2l8 8l-8 8\"/>"
	},
	"link-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"14\" height=\"18\" x=\"34.607\" y=\"3.494\" rx=\"2\" transform=\"rotate(45 34.607 3.494)\"/><rect width=\"14\" height=\"18\" x=\"16.223\" y=\"21.879\" rx=\"2\" transform=\"rotate(45 16.223 21.879)\"/><path stroke-linecap=\"round\" d=\"M31.072 16.929L16.93 31.071\"/></g>"
	},
	"link-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M30 19H20a8 8 0 1 0 0 16h16a8 8 0 0 0 6-13.292\"/><path d=\"M6 24.292A8 8 0 0 1 12 11h16a8 8 0 1 1 0 16H18\"/></g>"
	},
	"lip-gloss": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M24 12H8s0 4 1 14s3 18 3 18h8s2-8 3-18s1-14 1-14m18 22H28s0 2 1 5s2.5 5 2.5 5h7s1.5-2 2.5-5s1-5 1-5\"/><path d=\"M35 34V13\"/><path stroke-linejoin=\"round\" d=\"M31 7h8l-2 6h-4zM11 6h10v6H11z\"/></g>"
	},
	"lip-tattoo": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M25 19.89c-1.5-2.52-5.5-2.52-7 0c-1.115 1.874-5 4.61-6 5.053C13.667 27.295 19.5 32 25 32c6.5 0 11.167-4.704 13-7.057c-1-.443-3.164-2.123-5.5-5.053c-2-2.508-6-2.508-7.5 0\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 25c3.79.755 14.296 1.811 26 0\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4\"/><path d=\"m39 8.472l.343 1.056h1.11l-.898.652l.343 1.056l-.898-.652l-.898.652l.343-1.056l-.898-.652h1.11z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M35 22.656c1.294 1.249 2.374 2.01 3 2.287A21 21 0 0 1 33.763 29m-17.665-7c-1.543 1.374-3.442 2.652-4.098 2.943c.941 1.329 3.211 3.407 6 4.965\"/></g>"
	},
	lipstick: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M29 24h12v20H29zM7 24h14v20H7zm3-12.545V24h8V4c-6.5 0-8 5.636-8 7.454M7 32h14\"/>"
	},
	"lipstick-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m39.435 5.323l1.414 1.414a4 4 0 0 1 0 5.657l-7.071 7.07l-4.243-4.242zm-11.314 8.485l7.071 7.071l-11.314 11.314l-7.07-7.071z\"/><path d=\"m15.394 23.707l9.9 9.9l-9.9 9.899l-9.9-9.9z\"/></g>"
	},
	liqueur: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M23 31L7.41 13h31.177zm0 1v10\"/><path d=\"M17 44h12\"/><path stroke-linejoin=\"round\" d=\"M16 23h14m5-5h3a6 6 0 1 0-5.917-5M11 17.144L19.534 27M35 17.144l-8.79 10.149\"/></g>"
	},
	list: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m5 10l3 3l6-6M5 24l3 3l6-6M5 38l3 3l6-6m7-11h22M21 38h22M21 10h22\"/>"
	},
	"list-add": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 28h16M8 37h16M8 19h32M8 10h32M30 33h10m-5-5v10\"/>"
	},
	"list-alphabet": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 9h22M20 19h22M20 29h22M20 39h22M6 29h6L6 39h6\"/><path d=\"M11 9H7l-.7 7h5.4z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 19l.3-3m5.7 3l-.3-3m0 0L11 9H7l-.7 7m5.4 0H6.3\"/></g>"
	},
	"list-bottom": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 42a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0-30a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z\"/><path stroke-linecap=\"round\" d=\"M20 24h24M20 38h24M20 10h24\"/></g>"
	},
	"list-checkbox": {
		body: "<g fill=\"none\"><path d=\"M20 24h24z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 24h24\"/><path d=\"M20 38h24z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 38h24\"/><path d=\"M20 10h24z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 10h24\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 34h8v8H4zm0-14h8v8H4zM4 6h8v8H4z\"/></g>"
	},
	"list-fail": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M20 10h24M20 24h24M20 38h24M5 7l6 6m0-6l-6 6\"/><circle cx=\"8\" cy=\"24\" r=\"4\"/><circle cx=\"8\" cy=\"38\" r=\"4\"/></g>"
	},
	"list-middle": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0-16a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 28a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z\"/><path stroke-linecap=\"round\" d=\"M20 24h24M20 38h24M20 10h24\"/></g>"
	},
	"list-numbers": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 9h22M20 19h22M20 29h22M20 39h22M6 29h6v3l-6 6v1h6M7 11l2-2v10m0 0H7m2 0h2\"/>"
	},
	"list-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18 6h16v6H18zm0 15h20v6H18zm0 15h26v6H18z\"/><circle cx=\"8\" cy=\"9\" r=\"2\"/><circle cx=\"8\" cy=\"24\" r=\"2\"/><circle cx=\"8\" cy=\"39\" r=\"2\"/></g>"
	},
	"list-success": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M20 10h24M20 24h24M20 38h24\"/><circle cx=\"8\" cy=\"24\" r=\"4\"/><circle cx=\"8\" cy=\"38\" r=\"4\"/><path d=\"m4 10l3 3l6-6\"/></g>"
	},
	"list-top": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z\"/><path stroke-linecap=\"round\" d=\"M20 24h24M20 38h24M20 10h24\"/></g>"
	},
	"list-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M9 42a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0-28a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" d=\"M21 24h22M21 38h22M21 10h22\"/></g>"
	},
	"list-view": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"36\" x=\"4\" y=\"6\" rx=\"3\"/><path d=\"M4 14h40M20 24h16m-16 8h16m-24-8h2m-2 8h2\"/></g>"
	},
	loading: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 24c0 11.046 8.954 20 20 20v0c11.046 0 20-8.954 20-20S35.046 4 24 4\"/><path d=\"M36 24c0-6.627-5.373-12-12-12s-12 5.373-12 12s5.373 12 12 12v0\"/></g>"
	},
	"loading-four": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4\"/>"
	},
	"loading-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464\"/>"
	},
	"loading-three": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0-32v3m8.485.515l-2.121 2.121M36 24h-3m-.515 8.485l-2.121-2.121M24 36v-3m-8.485-.515l2.121-2.121M12 24h3m.515-8.485l2.121 2.121\"/>"
	},
	"loading-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 4v8m14.142-2.142l-5.657 5.657M44 24h-8m2.142 14.142l-5.657-5.657M24 44v-8M9.858 38.142l5.657-5.657M4 24h8M9.858 9.858l5.657 5.657m.832-9.993l1.53 3.696M5.522 16.346l3.696 1.53M5.522 31.654l3.696-1.531m7.129 12.355l1.53-3.696m13.777 3.696l-1.531-3.696m12.355-7.128l-3.696-1.531m3.696-13.777l-3.696 1.53M31.654 5.522l-1.531 3.696\"/>"
	},
	local: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M9.858 32.757C6.238 33.843 4 35.343 4 37c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.657-2.239-3.157-5.858-4.243\"/><path d=\"M24 35s13-8.496 13-18.318C37 9.678 31.18 4 24 4S11 9.678 11 16.682C11 26.504 24 35 24 35Z\"/><path d=\"M24 22a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/></g>"
	},
	"local-pin": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z\"/><path stroke-linecap=\"round\" d=\"M24 20v18m-8-6h-4L4 44h40l-8-12h-4\"/></g>"
	},
	"local-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44s15-12 15-25c0-8.284-6.716-15-15-15S9 10.716 9 19c0 13 15 25 15 25Z\"/><path d=\"M24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z\"/></g>"
	},
	lock: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"22\" x=\"6\" y=\"22\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M14 22v-8c0-5.523 4.477-10 10-10s10 4.477 10 10v8m-10 8v6\"/></g>"
	},
	"lock-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"30\" r=\"14\"/><path stroke-linejoin=\"round\" d=\"M31 18v-7a7 7 0 1 0-14 0v7\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 26v8\"/></g>"
	},
	"locking-computer": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-4m-18 7v8\"/><rect width=\"12\" height=\"8\" x=\"30\" y=\"12\" rx=\"3\"/><path d=\"M36 6a3 3 0 0 1 3 3v3h-6V9a3 3 0 0 1 3-3Z\"/><path stroke-linecap=\"round\" d=\"M14 42h20\"/></g>"
	},
	"locking-laptop": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 9H11a3 3 0 0 0-3 3v21h32v-5\"/><path d=\"M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z\"/><rect width=\"12\" height=\"8\" x=\"30\" y=\"13\" rx=\"3\"/><path d=\"M36 7a3 3 0 0 1 3 3v3h-6v-3a3 3 0 0 1 3-3Z\"/></g>"
	},
	"locking-picture": {
		body: "<g fill=\"none\"><path fill=\"currentColor\" d=\"M44 26a2 2 0 1 0-4 0zM24 8a2 2 0 1 0 0-4zm15 32H9v4h30zM8 39V9H4v30zm32-13v13h4V26zM9 8h15V4H9zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1zM8 9a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 35l10.693-9.802a2 2 0 0 1 2.653-.044L32 36m-4-5l4.773-4.773a2 2 0 0 1 2.615-.186L42 31\"/><rect width=\"12\" height=\"8\" x=\"30\" y=\"12\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"3\"/><path d=\"M36 6a3 3 0 0 1 3 3v3h-6V9a3 3 0 0 1 3-3\"/><path fill=\"currentColor\" d=\"M39 12v2a2 2 0 0 0 2-2zm-6 0h-2a2 2 0 0 0 2 2zm4-3v3h4V9zm2 1h-6v4h6zm-4 2V9h-4v3zm0-3a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5zm6 0a5 5 0 0 0-5-5v4a1 1 0 0 1 1 1z\"/></g>"
	},
	"locking-web": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v12.059\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z\"/><rect width=\"12\" height=\"8\" x=\"32\" y=\"33\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"3\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 27a3 3 0 0 1 3 3v3h-6v-3a3 3 0 0 1 3-3Z\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 10 14)\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 16 14)\"/></g>"
	},
	log: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M13 10h28v34H13z\"/><path stroke-linecap=\"round\" d=\"M35 10V4H8a1 1 0 0 0-1 1v33h6m8-16h12m-12 8h12\"/></g>"
	},
	login: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M23.992 6H6v36h18\"/><path d=\"m25 33l-9-9l9-9m17 8.992H16\"/></g>"
	},
	logout: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M23.992 6H6v36h18m9-9l9-9l-9-9m-17 8.992h26\"/>"
	},
	lollipop: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M36.214 34.312A15.95 15.95 0 0 1 26 38a9 9 0 0 1-.692-.022a15.95 15.95 0 0 1-10.62-4.67a15.9 15.9 0 0 1-3.516-5.291A15.9 15.9 0 0 1 10 21.997c0-2.075.393-4.102 1.172-6.018a15.9 15.9 0 0 1 3.516-5.292a15.9 15.9 0 0 1 5.293-3.515A15.9 15.9 0 0 1 26 6c2.075 0 4.103.393 6.019 1.172a15.9 15.9 0 0 1 5.293 3.515a15.8 15.8 0 0 1 3.87 6.252a16.2 16.2 0 0 1 .692 7.078a16 16 0 0 1-.7 3.07c-1.025 3.02-2.364 5.066-4.96 7.225\"/><path d=\"M22.105 19.489a3.47 3.47 0 0 1 3.703-3.216a4.1 4.1 0 0 1 2.842 1.416a4.1 4.1 0 0 1 1.007 3.01a4.95 4.95 0 0 1-1.705 3.421a4.98 4.98 0 0 1-3.628 1.211c-3.33-.234-5.855-3.132-5.621-6.464c.284-4.06 3.82-7.133 7.882-6.849a9 9 0 0 1 6.194 3.086a8.97 8.97 0 0 1 2.199 6.56a11.04 11.04 0 0 1-3.8 7.61A11.02 11.02 0 0 1 23.903 32q-.393 0-.798-.025c-2.788-.192-5.427-.738-7.604-2.475A13.54 13.54 0 0 1 11 23m3 11l-8 8.485\"/></g>"
	},
	"loop-once": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M43.823 25.23a14 14 0 0 1-2.837 6.448A13.98 13.98 0 0 1 30 37H16C9.397 37 4 31.679 4 25c0-6.65 5.396-12 12-12h28\"/><path d=\"m38 7l6 6l-6 6\"/></g>"
	},
	lotion: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17 37h14v7H17zM36 4H12s0 8 1 17s4 16 4 16h14s3-7 4-16s1-17 1-17\"/><path d=\"M20.643 21.889c1.431-1.88 2.535-4.479 3.131-5.889c1.044 1.41 3.31 4.948 4.026 6.829c.894 2.35-1.342 5.171-4.026 5.171s-4.92-3.76-3.131-6.111M13 10h22\"/></g>"
	},
	lotus: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 16c.196-2.143 1.235-7.143 5-10c1.372 1.667 4.53 6 5 10\"/><path d=\"M23.752 42C15.282 40.545-.3 31.31 5.12 6c7.152 1.636 20.892 11.127 18.633 36\"/><path d=\"M24.248 42C32.718 40.545 48.3 31.31 42.88 6c-7.152 1.636-20.892 11.127-18.633 36\"/></g>"
	},
	"loudly-crying-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 35s-2-4-7-4s-7 4-7 4m18-17l-7-1m5 1v9M20 17l-7 1m2 0v9\"/></g>"
	},
	"loudly-crying-face-whit-open-mouth": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 29c5 0 7 4 7 4H17s2-4 7-4m11-11l-7-1m5 1v9M20 17l-7 1m2 0v9\"/></g>"
	},
	"love-and-help": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15 7C8.925 7 4 11.925 4 18c0 11 13 21 20 23.326C31 39 44 29 44 18c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 7m3 17h12m-6-6v12\"/>"
	},
	"lower-branch": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 23c0-1.5 1.999-5.5 7.061-6.571C18.18 15.346 22.848 10.857 24 9m18 14c.012-1.5-2-5.5-7.062-6.571C29.821 15.346 25.152 10.857 24 9\"/><circle r=\"4\" fill=\"currentColor\" transform=\"matrix(0 1 1 0 24 9)\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 9v14M5 33h6m-6 8h6m26-8h6m-6 8h6m-22-8h6m-6 8h6\"/></g>"
	},
	luggage: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"32\" height=\"26\" x=\"8\" y=\"14\" stroke-linejoin=\"round\" rx=\"2\"/><path d=\"M20 23v8\"/><path stroke-linejoin=\"round\" d=\"M15 40v4m18-4v4\"/><path d=\"M28 23v8\"/><path stroke-linejoin=\"round\" d=\"M19 4h10m-5 0v10\"/></g>"
	},
	luminous: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 16v10m14.142-4.142l-7 7M44 36H34M4 36h10M9.858 21.858l7 7M22 36h4\"/>"
	},
	lung: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4.571\"><path d=\"M18.244 22.263q-.439-7.433-3.523-7.698c-3.32-.284-8.41 5.144-9.92 12.772s-.764 13.092 1.211 13.46c1.975.37 4.844-1.78 6.205-1.78s6.079 1.04 6.079-.844V30.07m11.328-7.7q.422-7.538 3.53-7.805c3.32-.284 8.41 5.144 9.919 12.772s.764 13.092-1.21 13.46c-1.975.37-4.845-1.78-6.206-1.78c-1.36 0-6.079 1.04-6.079-.844V30.07\"/><path d=\"M20.556 5v14.91q-.066 3.438-5.737 3.438M27.292 5v14.91q.065 3.438 5.736 3.438\"/><path stroke-linejoin=\"round\" d=\"M15 30.07q5.932 0 9-2.818q3.09 2.819 9.029 2.818\"/></g>"
	},
	"mac-finder": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 38V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2\"/><path d=\"M25 8s-5 10-4 17h6l1 15m6 0H22m8-32H18m16 8v2m-20-2v2\"/><path d=\"M13 29s4.19 3 11 3s11-3 11-3\"/></g>"
	},
	"macadamia-nut": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 43c10.493 0 19-8.059 19-18h-8l-3 3l-3-3H5c0 9.941 8.507 18 19 18m16.945-18c.124-.815 0-1.65 0-2.5C40.945 13.387 33.582 5 24.5 5c-3.823 0-8.338 1.309-11.131 3.504A5 5 0 0 1 14.033 11a4.986 4.986 0 0 1-6.004 4.895c-.63 1.75-.974 4.637-.974 6.605c0 .85-.124 1.685 0 2.5M6 31h10\"/>"
	},
	magic: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m20.1 8.1l4.243 4.243M30 4v6zm9.9 4.1l-4.243 4.243zM44 18h-6zm-4.1 9.9l-4.243-4.243zM30 32v-6zm-9.9-4.1l4.243-4.243zM16 18h6zm13.586.414L5.544 42.456\"/>"
	},
	"magic-hat": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 10c.5 3 1 4.5 1.5 8c.4 2.8.5 7.167.5 9c-2.167 1-7 3-7 7s5 9 19 9s19-5 19-9s-7-7-7-7s0-5.5.5-9s1-5 1.5-8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M36 27c0 4-1 8-12.5 8\"/><ellipse cx=\"24\" cy=\"10\" rx=\"14\" ry=\"5\"/></g>"
	},
	"magic-wand": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7.58 35.42A19.9 19.9 0 0 1 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20a19.9 19.9 0 0 1-11.42-3.58m-5-5a20.1 20.1 0 0 0 5 5m-5-5L16 27m-3.42 13.42L21 32m-5-5l4-4l5 5l-4 4m-5-5l5 5m-4-18h4m-2-2v4m9 1h6m-3-3v6m1 9h4m-2-2v4\"/>"
	},
	magnet: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 10v16c0 9.941 8.059 18 18 18s18-8.059 18-18V10m-28 0v16c0 5.523 4.477 10 10 10s10-4.477 10-10V10M14 4H6v6h8zm20 0h8v6h-8z\"/>"
	},
	mail: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 39h40V9H4z\"/><path stroke-linecap=\"round\" d=\"m4 9l20 15L44 9\"/><path stroke-linecap=\"round\" d=\"M24 9H4v15m40 0V9H24\"/></g>"
	},
	"mail-download": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 18H4v24h40V18h-6\"/><path d=\"M38 6H10v16.5L24 33l14-10.5z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 22.5L24 33l14-10.5m-28 0V6h28v16.5m-28 0L4 18m34 4.5l6-4.5m-25 1l5 5m0 0l5-5m-5 5V13\"/></g>"
	},
	"mail-edit": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24V9H4v30h20m11 0l8-7l-4-4l-8 7v4z\"/><path d=\"m4 9l20 15L44 9\"/></g>"
	},
	"mail-open": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 18v21.818C44 41.023 43.105 42 42 42H6c-1.105 0-2-.977-2-2.182V18l20 13z\"/><path stroke-linecap=\"round\" d=\"M4 17.784L24 4l20 13.784\"/></g>"
	},
	"mail-package": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 42h40V18H4z\"/><path stroke-linecap=\"round\" d=\"m4 18l20 15l20-15\"/><path stroke-linecap=\"round\" d=\"M24 18H4v15m40 0V18H24m-12-6h24M16 6h16\"/></g>"
	},
	"mail-review": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24v16.818C44 42.023 43.105 43 42 43H6c-1.105 0-2-.977-2-2.182V24l20 13z\"/><path stroke-linecap=\"round\" d=\"m4 23.784l10-6.892m30 6.892l-10-6.892\"/><path d=\"M34 5H14v24.415a2 2 0 0 0 .91 1.677l8 5.2a2 2 0 0 0 2.18 0l8-5.2a2 2 0 0 0 .91-1.677z\"/><path stroke-linecap=\"round\" d=\"M20 13h4m-4 6h8\"/></g>"
	},
	"mail-unpacking": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 18v21.818C44 41.023 43.105 42 42 42H6c-1.105 0-2-.977-2-2.182V18l20 16z\"/><path stroke-linecap=\"round\" d=\"M4 17.784L24 4l20 13.784\"/><path d=\"M34 18H14v8l10 8l10-8z\"/></g>"
	},
	"maill-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M36 16H12v16h24z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m36 16l-12 8l-12-8\"/></g>"
	},
	makeups: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4\"/><path d=\"m37.61 9.472l.255.786h.827l-.669.486l.255.786l-.668-.486l-.669.486l.255-.786l-.668-.486h.826z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16 31s2 4 8 4s8-4 8-4\"/><circle cx=\"17\" cy=\"22\" r=\"3\"/><circle cx=\"31\" cy=\"22\" r=\"3\"/></g>"
	},
	male: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M41.952 15.048v-9h-9\"/><path d=\"M10.414 38c5.467 5.468 14.331 5.468 19.799 0a13.96 13.96 0 0 0 4.1-9.899a13.96 13.96 0 0 0-4.1-9.9c-5.468-5.467-14.332-5.467-19.8 0c-5.467 5.468-5.467 14.332 0 19.8Z\"/><path stroke-linecap=\"round\" d=\"m30 18l9.952-9.952\"/></g>"
	},
	"mall-bag": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 12.6V41a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V12.6z\"/><path stroke-linecap=\"round\" d=\"M42 12.6L36.333 5H11.667L6 12.6v0m25.555 6.6c0 4.198-3.382 7.6-7.555 7.6s-7.556-3.402-7.556-7.6\"/></g>"
	},
	"manual-gear": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 12v12H8m16-12v24M8 12v24\"/><path d=\"M44 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0M28 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0M12 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m16 32a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m28 4a4 4 0 1 0 0-8a4 4 0 0 0 0 8\"/></g>"
	},
	"many-to-many": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M42 7H6a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M30 30V18l8 12V18M10 30V18l8 12V18\"/><path stroke-linecap=\"round\" d=\"M24 20v1m0 6v1\"/></g>"
	},
	"map-distance": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39.3 6H8.7A2.7 2.7 0 0 0 6 8.7v30.6A2.7 2.7 0 0 0 8.7 42h30.6a2.7 2.7 0 0 0 2.7-2.7V8.7A2.7 2.7 0 0 0 39.3 6Z\"/><path stroke-linecap=\"round\" d=\"m36 27l-7 3m-8 3l-7 3\"/><path d=\"M16 29q3-4.343 3-6a3 3 0 1 0-6 0q0 1.657 3 6Zm16-7q3-4.343 3-6a3 3 0 1 0-6 0q0 1.657 3 6Z\"/></g>"
	},
	"map-draw": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17 12L4 6v30l13 6l14-6l13 6V12L31 6zm14-6v30M17 12v30\"/><path d=\"m10.5 9l6.5 3l14-6l6.5 3m-27 30l6.5 3l14-6l6.5 3\"/></g>"
	},
	"map-road": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" d=\"m33 12l4 24M16 12l-4 24m12-24v4m0 6v4m0 6v4\"/></g>"
	},
	"map-road-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 4H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M10 22l28-10\"/><path stroke-dasharray=\"2 6\" d=\"m10 29l28-10\"/><path d=\"m10 36l28-10m-22-7l-3-8m24 25l-3-8\"/></g>"
	},
	"map-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 10H4v30h40z\"/><path stroke-linecap=\"round\" d=\"m10 16l28 18m0-18L24 35m0-19L10 34\"/></g>"
	},
	margin: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M34 6v36M14 6v36m17 0h6m-26 0h6M11 6h6m13 0h6\"/></g>"
	},
	"margin-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M6 34h36M6 14h36M6 11v6m0 14v6m36-6v6m0-26v6\"/></g>"
	},
	mark: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M11 6v36\"/><path d=\"M11 9h14l7 3h7a2 2 0 0 1 2 2v17a2 2 0 0 1-2 2h-7l-7-3H11z\"/><path stroke-linecap=\"round\" d=\"M7 42h8\"/></g>"
	},
	market: {
		body: "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"m24 3l.349.003C35.726 3.189 45 12.468 45 24.074l-.003.35C44.81 35.837 35.42 45 24 45l-.349-.003C12.274 44.811 3 35.532 3 24.074C3 12.35 12.465 3 24 3m14.38 22.387l-17.313 4.337q-.247.06-.49.06l-.187-.009a2 2 0 0 1-1.16-.512l-1.69 5.878l-.022.13c-.21 1.517 1.56 2.757 3.399 1.82L36.9 27.996l.191-.115c1.111-.7 1.538-1.623 1.288-2.495m-20.4-12.609c-1.21-.927-3.158-.015-3.266 2.042l-.116 18.389c-.009 1.44.591 2.354 1.52 2.585l4.901-17.16l.055-.165a2 2 0 0 1 1.263-1.196l-4.246-4.403zm3.082-1.498c-1.163-.612-2.175-.52-2.805.132L30.67 24.236c.484.5.656 1.19.52 1.823l5.935-1.477l.135-.05c1.408-.584 1.592-2.728-.135-3.849l-15.867-9.295z\" clip-rule=\"evenodd\"/>"
	},
	"market-analysis": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 11a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v9h40zM4.112 39.03l12.176-12.3l6.58 6.3L30.91 26l4.48 4.368\"/><path d=\"M44 18v19a3 3 0 0 1-3 3H12m7.112-26h18M11.11 14h2M4 18v9\"/></g>"
	},
	mascara: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M28 16h12v28H28zM8 28h12v16H8zm6-24v24\"/><path d=\"M20 36H8\"/><path stroke-linejoin=\"round\" d=\"M20 32v8M8 32v8M18 9h-8m10 6H8m10 6h-8\"/></g>"
	},
	mask: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M14 14h20c5.523 0 10 4.477 10 10v3c0 7.18-5.82 13-13 13H17C9.82 40 4 34.18 4 27v-3c0-5.523 4.477-10 10-10Z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M18 27h12m-6-6v12\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 25.042V12.014A4.168 4.168 0 0 1 11.047 9q2.399 2.29 3.424 5M44 25.042V12.766A4.478 4.478 0 0 0 36 10a111 111 0 0 0-3 4\"/></g>"
	},
	"mask-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M7.366 16.344A21.9 21.9 0 0 0 6 24c0 2.712.486 5.297 1.366 7.655m3.906 6.487c1.658 1.842 3.638 3.327 5.838 4.34a16.4 16.4 0 0 0 13.78 0c2.2-1.013 4.18-2.498 5.838-4.34m3.906-6.487A21.9 21.9 0 0 0 42 24a21.9 21.9 0 0 0-1.366-7.656m-3.906-6.486C35.07 8.015 33.09 6.53 30.89 5.518A16.4 16.4 0 0 0 24 4c-4.97 0-9.47 2.238-12.728 5.858\"/><path d=\"M18 23a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm12 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-6 12c2.761 0 5-1.343 5-3s-2.239-3-5-3s-5 1.343-5 3s2.239 3 5 3Z\"/></g>"
	},
	"mask-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M31 5.26C23.407 8.096 18 15.416 18 24s5.407 15.903 13 18.74M37 9L18 22m23-8L19 29m24-9L22 35m21-7L26 40\"/></g>"
	},
	"maslow-pyramids": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m24 4l-9 15.98h18z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M24 19.98L24.008 44\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.347 25.975L2 42h15.005\"/><path stroke-linecap=\"round\" d=\"M9.1 30.995h7.904\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M36.748 25.975L46.094 42H31\"/><path stroke-linecap=\"round\" d=\"M39.094 30.995H31.1\"/></g>"
	},
	"massage-chair": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"38\" height=\"38\" x=\"5\" y=\"5\" rx=\"3\"/><path d=\"M18 24v-8.348C18 14.435 19.2 12 24 12s6 2.435 6 3.652V24m-14 0v6h16v-6\"/><path d=\"M12 20v4h24v-4M18 36h12m-6-6v6\"/></g>"
	},
	"massage-chair-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M15 28V15.652C15 13 18 10 24 10s9 3 9 5.652V28m-21 6v-6h24v6zm8-30h8\"/><path d=\"M8 16v12h32V16M17 43h14m-7-9v9m0-39v6\"/></g>"
	},
	"massage-table": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M14 17a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v6H14z\"/><path stroke-linecap=\"round\" d=\"M26 23L14 37m18-14l12 14M14 23H6m33 8H19M6 13v10m8 0v17m30-17v17M9 14l-6-2\"/></g>"
	},
	master: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 38V6a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v32\"/><rect width=\"28\" height=\"12\" x=\"10\" y=\"32\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"6\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m20 16l4-4l4 4l4-4l-3 11H19l-3-11z\"/><circle cx=\"32\" cy=\"38\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	material: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 36c6.627 0 12-5.373 12-12\"/></g>"
	},
	"material-three": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 15V9.564c0-.892.087-1.215.25-1.54c.164-.327.404-.583.71-.757S10.567 7 11.403 7h25.192c.836 0 1.14.093 1.445.267s.545.43.709.756s.25.65.25 1.54V15\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 15h38v26H5z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M13 26a3 3 0 1 0 0-6a3 3 0 0 0 0 6\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5.57 40.39L15 30l5 4l6-7l16.394 13.39\"/></g>"
	},
	"material-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 36c6.627 0 12-5.373 12-12\"/></g>"
	},
	maximum: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 4v40h40\"/><path d=\"M10 38S15.313 4 27 4s17 34 17 34\"/><path stroke-dasharray=\"2 6\" d=\"M10 4h34\"/></g>"
	},
	maya: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M4 34h40v8H4zm3-7h34v7H7zm3-6h28v6H10zm3-6h22v6H13zm7-8h8v8h-8z\"/><path d=\"m20 15l-6 27m14-27l6 27\"/></g>"
	},
	"mayura-gesture": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m20.995 36l-1.901-4.01l5.11-.417a3.782 3.782 0 0 0 0-7.565h-8.207C12.61 24.008 9 27.584 9 31.042s.787 5.439 1.647 7.297c.859 1.858 3.15 5.661 9.355 5.661h8.953c5.248 0 9.045-4.855 9.032-11q-.012-5.745.007-17a2.99 2.99 0 0 0-2.985-2.996h-.005a2.99 2.99 0 0 0-2.99 2.99V16q.015 7.712.015 9.051q0 4.34-4.022 2.992M25.955 24l.04-17a2.993 2.993 0 0 0-2.986-3h-.007a3 3 0 0 0-3 3v16.04\"/><path d=\"M14.006 24V10a2.996 2.996 0 0 1 2.996-2.996h.004c1.657.003 3 1.347 3 3.005V24m6.001-3.98v-1a3 3 0 0 1 6 0v1\"/></g>"
	},
	me: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\" clip-rule=\"evenodd\"/><path d=\"M24 23a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" d=\"M10.022 38.332C10.366 33.121 14.702 29 20 29h8c5.291 0 9.623 4.11 9.977 9.311\"/></g>"
	},
	"measuring-cup": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 6h8l-1.936 14H36M9 6h27v34a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2l-.001-23.5c0-.944-.444-1.828-1.16-2.443C5.148 11.75-.591 6 8.999 6M26 15h4m-4 8h4m-4 8h4\"/>"
	},
	"medal-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m6 6l10 12M42 6L32 18M31 4l-5 12M17 4l5 12\"/><circle cx=\"24\" cy=\"30\" r=\"14\"/><circle cx=\"24\" cy=\"30\" r=\"7\"/></g>"
	},
	mediaeditor: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M35 32.133V34a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-2.867L44 12\"/><path d=\"M35 15.867V14a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.867L44 36\"/></g>"
	},
	"medical-box": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M41 17H7a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h34a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2ZM34 7H14v10h20z\"/><path stroke-linecap=\"round\" d=\"M19 29h10m-5-5v10\"/></g>"
	},
	"medical-files": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23 42H9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v11.5\"/><path stroke-linejoin=\"round\" d=\"M36.636 27C39.046 27 41 28.88 41 31.2c0 3.02-2.91 5.6-4.364 7Q35.182 39.6 33 41q-2.182-1.4-3.636-2.8C27.909 36.8 25 34.22 25 31.2c0-2.32 1.954-4.2 4.364-4.2c1.517 0 2.854.746 3.636 1.878A4.4 4.4 0 0 1 36.636 27Z\"/><path stroke-linecap=\"round\" d=\"M15 14h16\"/></g>"
	},
	"medical-mark": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M16 15a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3z\"/><path stroke-linecap=\"round\" d=\"M8 4v40m0-25h8M8 29h8m6-5h12m-6-6v12\"/></g>"
	},
	"medication-time": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"24\" height=\"10\" x=\"9\" y=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 5v8m-6-8v8m12-8v8m0 27H8a2 2 0 0 1-2-2V17a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v9m-2 6v4h4\"/><circle cx=\"35\" cy=\"35\" r=\"9\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 5h16M13 15h16\"/></g>"
	},
	"medicine-bottle": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M34 10H14a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M12 18h24\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 15v6m24-6v6\"/><path stroke-linejoin=\"round\" d=\"M32 4H16v6h16z\"/><path stroke-linecap=\"round\" d=\"M20 31h8m-4-4v8\"/></g>"
	},
	"medicine-bottle-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M13 7a3 3 0 0 1 3-3h16a3 3 0 1 1 0 6H16a3 3 0 0 1-3-3Zm.1 10.12A3 3 0 0 1 15.437 16h17.124a3 3 0 0 1 2.339 1.12l4.438 5.523a3 3 0 0 1 .661 1.88V41a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V24.523a3 3 0 0 1 .661-1.88z\"/><path stroke-linecap=\"round\" d=\"M18 30h12m-6-6v12\"/></g>"
	},
	"medicine-chest": {
		body: "<g fill=\"none\"><rect width=\"38\" height=\"26\" x=\"5\" y=\"16\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"3\"/><path fill=\"currentColor\" d=\"M19 8h10V4H19zm11 1v7h4V9zm-12 7V9h-4v7zm11-8a1 1 0 0 1 1 1h4a5 5 0 0 0-5-5zM19 4a5 5 0 0 0-5 5h4a1 1 0 0 1 1-1z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 29h12m-6-6v12\"/></g>"
	},
	memory: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M8 6v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V13.61a2 2 0 0 0-.605-1.433l-7.813-7.61A2 2 0 0 0 30.187 4H10a2 2 0 0 0-2 2Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M40 21H8m32 8H30m10 7H30m0 8V21M18 44V21m0 12H8\"/></g>"
	},
	"memory-card": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 40H8a2 2 0 0 1-2-2V19.106a2 2 0 0 1 .336-1.11l6.07-9.105A2 2 0 0 1 14.07 8H40a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2M18 16V8m6 8V8m6 8V8m6 8V8\"/><path d=\"M15 28h18v12H15z\"/></g>"
	},
	"memory-card-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 9a3 3 0 0 1 3-3h21.336a3 3 0 0 1 2.122.879l3.858 3.858l4.805 4.805A3 3 0 0 1 42 17.664V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z\"/><path d=\"M31 26H17a3 3 0 0 0-3 3v13h20V29a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" d=\"M29 16H17a3 3 0 0 1-3-3V6\"/></g>"
	},
	"memory-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 28h38v14H5zM5 6h38v14H5z\"/><rect width=\"4\" height=\"4\" x=\"11\" y=\"11\" fill=\"currentColor\" rx=\"2\"/><rect width=\"4\" height=\"4\" x=\"11\" y=\"33\" fill=\"currentColor\" rx=\"2\"/><rect width=\"4\" height=\"4\" x=\"19\" y=\"11\" fill=\"currentColor\" rx=\"2\"/><rect width=\"4\" height=\"4\" x=\"19\" y=\"33\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M31 13h4m-4 22h4\"/></g>"
	},
	"men-jacket": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m6 10l12-6h12l12 6l-2 25h-6v9H14v-9H8zm8 25V20m20 15V20\"/><path d=\"M24 10a6 6 0 0 0 6-6H18a6 6 0 0 0 6 6\"/></g>"
	},
	"menu-fold": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 11h32M8 24h32M8 37h32m-26.343-7.343L8 24l5.657-5.657\"/>"
	},
	"menu-fold-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M8 10.5h32m-16 9h16m-16 9h16m-32 9h32\"/><path d=\"m8 19l8 5l-8 5z\"/></g>"
	},
	"menu-unfold": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 11h32M8 24h34M8 37h32m-3.657-7.343L42 24l-5.657-5.657\"/>"
	},
	"menu-unfold-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M8 10.5h32m-16 9h16m-16 9h16m-32 9h32\"/><path d=\"m16 19l-8 5l8 5z\"/></g>"
	},
	merge: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"20\" height=\"22\" x=\"4\" y=\"24\" rx=\"2\" transform=\"rotate(-45 4 24)\"/><rect width=\"20\" height=\"20\" x=\"16\" y=\"24\" rx=\"2\" transform=\"rotate(-45 16 24)\"/></g>"
	},
	"merge-cells": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M20 14V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9m8 0v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H29a1 1 0 0 0-1 1v9m0 10h16M5 24h15\"/><path stroke-linejoin=\"round\" d=\"m32.749 28.818l-1.592-1.59l-3.181-3.183l3.182-3.182l1.59-1.59m-17.373 9.545l1.591-1.59l3.182-3.183l-3.182-3.182l-1.591-1.59\"/></g>"
	},
	message: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 24c0 11.046-8.954 20-20 20H4V24C4 12.954 12.954 4 24 4s20 8.954 20 20m-30-6h18m-18 8h18m-18 8h10\"/>"
	},
	"message-emoji": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 7H4v30h7v5l10-5h23zm-13 9v1m-14-1v1\"/><path d=\"M31 25s-2 4-7 4s-7-4-7-4\"/></g>"
	},
	"message-failed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M25.5 37H21l-10 5v-5H4V7h40v11m-32-3h6m-6 6h12m8 4l12 12m0-12L32 37\"/>"
	},
	"message-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M4 6h40v30H29l-5 5l-5-5H4z\"/><path d=\"M23 21h2.003m7.998 0H35m-21.999 0H15\"/></g>"
	},
	"message-privacy": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M25.5 37H21l-10 5v-5H4V7h40v11\"/><path d=\"M30 27h14v8H30zm10 0v-3a3 3 0 1 0-6 0v3M12 15h6m-6 6h12\"/></g>"
	},
	"message-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M25.5 37H21l-10 5v-5H4V7h40v11\"/><circle cx=\"34\" cy=\"28\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m39 32l5 4M12 15h6m-6 6h12\"/></g>"
	},
	"message-security": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M25.5 37H21l-10 5v-5H4V7h40v11\"/><path d=\"M29 25.2c0-1.067 7-3.2 7-3.2s7 2.133 7 3.2c0 8.533-7 12.8-7 12.8s-7-4.267-7-12.8M12 15h6m-6 6h12\"/></g>"
	},
	"message-sent": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24c0 11.046-8.954 20-20 20H4V24C4 12.954 12.954 4 24 4s20 8.954 20 20\"/><path d=\"m14 26l6 6l13-13\"/></g>"
	},
	"message-success": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M25.5 36H21l-10 5v-5H4V6h40v11m-32-3h6m-6 6h12\"/><path d=\"m29 30l6 5l9-11\"/></g>"
	},
	"message-unread": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 16v20H29l-5 5l-5-5H4V6h30\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M23 20h2.003m7.998 0H35m-21.999 0H15\"/><circle cx=\"43\" cy=\"7\" r=\"3\" fill=\"currentColor\"/></g>"
	},
	messages: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M35 23c0 5.523-4.477 10-10 10H15V23c0-5.523 4.477-10 10-10s10 4.477 10 10m-13-2h6m-6 6h2\"/></g>"
	},
	"messages-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linejoin=\"round\" d=\"M34 23c0 3.862-2.703 7.157-6.5 8.433c-1.09.367-2.269.567-3.5.567c-4 0-9 2-9 2l1.132-2.446c.563-1.216.204-2.63-.57-3.723C14.572 26.436 14 24.778 14 23c0-4.97 4.477-9 10-9s10 4.03 10 9Z\"/></g>"
	},
	"micro-sd": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13 7a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-5l5-4v-4H8v-3l5-6zm19 4v4m-12-4v4m6-4v4\"/>"
	},
	"micro-slr-camera": {
		body: "<g fill=\"none\"><path d=\"M44 26c0 2.64-.73 5.108-2 7.215A14.1 14.1 0 0 1 37.215 38c-2.107 1.27-4.576 2-7.215 2s-5.108-.73-7.215-2C18.719 35.55 16 31.093 16 26s2.72-9.55 6.785-12c2.107-1.27 4.576-2 7.215-2s5.108.73 7.215 2A14.1 14.1 0 0 1 42 18.785c1.27 2.107 2 4.576 2 7.215\"/><path d=\"M4 14v24h18.785C18.719 35.55 16 31.093 16 26s2.72-9.55 6.785-12z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M37.215 14c-2.107-1.27-4.576-2-7.215-2s-5.108.73-7.215 2m14.43 0H42v4.785M37.215 14A14.1 14.1 0 0 1 42 18.785M22.785 14H4v24h18.785m0-24C18.719 16.45 16 20.907 16 26s2.72 9.55 6.785 12m14.43 0c-2.107 1.27-4.576 2-7.215 2s-5.108-.73-7.215-2m14.43 0H42v-4.785M37.215 38A14.1 14.1 0 0 0 42 33.215m0-14.43c1.27 2.107 2 4.576 2 7.215s-.73 5.108-2 7.215M8 9h9v5H8zm2 13v8m26-4a6 6 0 0 1-6 6m-6-6a6 6 0 0 1 6-6\"/></g>"
	},
	microphone: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"16\" height=\"28\" x=\"16\" y=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 21v3c0 7.732 6.268 14 14 14v0c7.732 0 14-6.268 14-14v-3M24 5v6m-8 5h5m6 0h5m-16 6h5m6 0h5\"/><path d=\"M24 38v6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16 44h16\"/></g>"
	},
	"microphone-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M15 26.314s4.596-.354 7.778-3.536S26.314 15 26.314 15l7.752 12.182a4.986 4.986 0 0 1-6.884 6.884z\"/><circle cx=\"15\" cy=\"15\" r=\"11\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.657 25.456L25.456 5.657M34 33l8 8h-9\"/></g>"
	},
	microscope: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M26 44q6.52-4.512 6.95-9.122q.429-4.61-2.784-6.878\"/><path d=\"M27.655 28.223a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m24.288 27l-5.51 5.577l-9.192-9.192L27.97 5l9.192 9.192l-6.187 6.187\"/><path stroke-linecap=\"round\" d=\"m6.558 28.136l7.861 7.678M6 44h36\"/></g>"
	},
	"microscope-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"m29.003 18.373l1.105-1.105l.53-.53a5.5 5.5 0 0 0 0-7.778v0a5.5 5.5 0 0 0-7.778 0L9.172 22.648a.143.143 0 0 0 0 .202l6.97 6.97a1 1 0 0 0 1.414 0l3.713-3.713l1.105-1.105\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m28.163 6.485l1.768-1.767a3.5 3.5 0 0 1 4.95 4.95l-1.768 1.767zM10.485 24.163l-4.242 4.243l4.95 4.95l4.242-4.243z\"/><circle cx=\"26.041\" cy=\"22.042\" r=\"4.5\" transform=\"rotate(45 26.041 22.042)\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m6 20l12.728 12.728M10 44h32M31 22c4 0 8 4 8 10c0 6.4-5.167 9.833-8 12\"/></g>"
	},
	"microwave-oven": {
		body: "<g fill=\"none\"><rect width=\"40\" height=\"30\" x=\"4\" y=\"6\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 15h-4m4 6h-4m-24-6h17v12H10z\"/><circle cx=\"36\" cy=\"27\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 36v6m24-6v6\"/></g>"
	},
	microwaves: {
		body: "<g fill=\"none\"><rect width=\"24\" height=\"38\" x=\"5\" y=\"34\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"2\" transform=\"rotate(-90 5 34)\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 19h4m-11 6h22m-23 9v4m8-4v4m8-4v4m8-4v4\"/><path fill=\"currentColor\" d=\"M15 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0\"/></g>"
	},
	"middle-finger": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M14.972 26.975Q9.992 27.862 9.99 33c0 5.138 5.153 11 9.8 11h11.89c4.547 0 7.31-3.85 7.31-6.94V24.01a3 3 0 0 0-3-3h-.01A2.99 2.99 0 0 0 32.99 24\"/><path d=\"M14.972 30.04v-9.027a3.003 3.003 0 0 1 3.002-3.003h.003a3.01 3.01 0 0 1 3.006 3.01v4.003\"/><path stroke-linejoin=\"round\" d=\"M20.983 24.008V7.015a3.016 3.016 0 0 1 6.031 0v16.993\"/><path stroke-linejoin=\"round\" d=\"M26.99 23.716v-2.713a3 3 0 0 1 6 0v3\"/></g>"
	},
	milk: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 19.574a2 2 0 0 1 .304-1.06L17 11h14l4.696 7.514a2 2 0 0 1 .304 1.06V42a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2z\"/><path d=\"M19 33v-9l5 6l5-6v9M17 4h14v7H17z\"/></g>"
	},
	"milk-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 22h26v22H6z\"/><path d=\"M14 38V28l5 6l5-6v10m18-18L30 10M20 6v6l10-2V4zm12 16l10-2v21l-10 3zM19.482 12L6 22h26z\"/></g>"
	},
	min: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 4v40h40\"/><path d=\"M10 4s5.313 34 17 34S44 4 44 4\"/><path stroke-dasharray=\"2 6\" d=\"M10 38h34\"/></g>"
	},
	"mind-mapping": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM42 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z\"/><path stroke-linecap=\"round\" d=\"M32 6H20v36h12M12 24h20\"/></g>"
	},
	"mindmap-list": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M26 24h18m-30 0h4m0 14h26M6 38h4m8-28h26M6 10h4\"/>"
	},
	"mindmap-map": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M26 24h16M26 38h16M26 10h16M18 24H6h4m8 14c-6-2-2-14-8-14m8-14c-6 2-2 14-8 14\"/>"
	},
	"mini-sd-card": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M13.998 18.739L8 21.923V44h32V4H13.998z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M21 12v6m12-6v6m-6-6v6\"/></g>"
	},
	minus: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10.5 24h28\"/>"
	},
	"minus-the-bottom": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 41V21a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2\"/><path d=\"M19 27V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H21a2 2 0 0 1-2-2\"/></g>"
	},
	"minus-the-top": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 41V21a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2\"/><path d=\"M43 7v20a2 2 0 0 1-2 2H31a2 2 0 0 1-2-2v-6a2 2 0 0 0-2-2h-6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2\"/></g>"
	},
	mirror: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M34 44H14c-5 0-7-1-7-4v-6h11l1 4h11l1-4h10v6c0 3-2 4-7 4M12 34c-2.045-3.118-5-7-5-12.146C7 11.422 14.611 4 24 4s17 7.422 17 17.854C41 27 38.044 30.882 36 34\"/>"
	},
	"mirror-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"20\" r=\"16\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 36v8m-10 0h20\"/></g>"
	},
	"mirror-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"17\" r=\"13\"/><path d=\"M42 17c0 9.941-8.059 18-18 18S6 26.941 6 17m36 0h-4m-28 0H6m24 27H18m6 0v-8\"/></g>"
	},
	"misaligned-semicircle": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M20 30c-6.627 0-12-5.373-12-12S13.373 6 20 6\"/><path d=\"M20 22a4 4 0 0 1 0-8m8 20a4 4 0 0 0 0-8\"/><path d=\"M28 42c6.627 0 12-5.373 12-12s-5.373-12-12-12\"/></g>"
	},
	mitsubishi: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m17 19l7 11l7-11l-7-11zm13.667 21L24 30h13.333L44 40zm-13.334 0L24 30H10.667L4 40z\"/>"
	},
	modify: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m20.07 9.586l-4.242-4.243a2 2 0 0 0-2.828 0L7.343 11a2 2 0 0 0 0 2.829l4.243 4.242m17.343 19.343l4.242 4.243a2 2 0 0 0 2.829 0L41.657 36a2 2 0 0 0 0-2.828l-4.243-4.243\"/><rect width=\"12\" height=\"42\" x=\"34.606\" y=\"4.908\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\" transform=\"rotate(45 34.606 4.908)\"/><circle cx=\"24\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><circle cx=\"20\" cy=\"28\" r=\"2\" fill=\"currentColor\"/><circle cx=\"28\" cy=\"20\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"modify-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"40\" height=\"30\" x=\"4\" y=\"9\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16 9v30\"/><path stroke-linecap=\"round\" d=\"M20 9h-8m8 30h-8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m23 31l14-14m-12 2l-2-2m14 14l-2-2\"/></g>"
	},
	monitor: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 10h32v28H4z\"/><path stroke-linecap=\"round\" d=\"m44 14l-8 6.75v6.5L44 34z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"m17 19l6 5l-6 5\"/></g>"
	},
	"monitor-camera": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 34c8.284 0 15-6.716 15-15S32.284 4 24 4S9 10.716 9 19s6.716 15 15 15Z\"/><path d=\"M24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z\"/><path stroke-linecap=\"round\" d=\"M19.369 34L16 44h16l-3.396-10z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M12 44h24\"/></g>"
	},
	"monitor-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 12v26h26M18 10h18v17\"/><path d=\"m44 14l-8 6.75v6.5L44 34z\" clip-rule=\"evenodd\"/><path d=\"M44 44L4 4\"/></g>"
	},
	"monitor-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 8a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 26a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm17-14l-4 5m10-3l-3 4\"/><circle cx=\"24\" cy=\"29\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m17 34l-3 8h20l-3-8\"/></g>"
	},
	"monitor-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42.5 16.387a20 20 0 0 0-4-6.162A19.94 19.94 0 0 0 24 4C12.954 4 4 12.954 4 24h10l5 8l9-18l7 10h9c0 11.046-8.954 20-20 20c-5.45 0-10.392-2.18-14-5.717A20 20 0 0 1 5.664 32\"/>"
	},
	monkey: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M13.2 21a10.44 10.44 0 0 1-1.2-4.861C12 9.987 17.373 5 24 5s12 4.987 12 11.139c0 1.743-.431 3.392-1.2 4.861\"/><ellipse cx=\"24\" cy=\"31\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"15\" ry=\"12\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M30.518 33.874c-3.67 3.67-9.721 3.566-13.518-.23M12 23c-3.314 0-6-2.239-6-5s2.686-5 6-5m24 10c3.314 0 6-2.239 6-5s-2.686-5-6-5\"/><circle cx=\"20\" cy=\"14\" r=\"2\" fill=\"currentColor\"/><circle cx=\"28\" cy=\"14\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"monkey-zodiac": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M21.593 18.135c1.34-1.465 2.915-4.978-1.508-7.32c-1.006-.652-1.585-2.315-2.514-5.37C13.718 3.332 5 3 4 14v30\"/><path d=\"M17 25c4.582 1.673 11.033 5.254 15 16c1.533 3.754 8.507 4.87 11.5-1c.998-1.957.5-5.496-3.918-7.55C36.462 31 34 26 38.5 24c1.848-.603 3.93.08 5.5 3\"/><path d=\"M29 35c-4.345-1.106-13.228-.481-14 9\"/></g>"
	},
	"monument-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M14 38h20v6H14zm4 0l2-29l4-5l4 5l2 29z\"/><path stroke-linecap=\"round\" d=\"M4 44h40\"/></g>"
	},
	"monument-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M4 44h40\"/><path d=\"m18 44l2-36.842L28 4l2 40z\"/></g>"
	},
	moon: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M28.053 4.41c-5.47 1.427-9.507 6.4-9.507 12.317c0 7.03 5.698 12.728 12.727 12.728c5.916 0 10.89-4.038 12.316-9.508A20 20 0 0 1 44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4c1.389 0 2.744.141 4.053.41Z\"/>"
	},
	more: {
		body: "<circle cx=\"12\" cy=\"24\" r=\"3\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"24\" r=\"3\" fill=\"currentColor\"/><circle cx=\"36\" cy=\"24\" r=\"3\" fill=\"currentColor\"/>"
	},
	"more-app": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 24H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2ZM42 4H30a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M28 28h16m-8 8h8m-16 8h16\"/></g>"
	},
	"more-four": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m17 11l7.071-7.071L31.142 11l-7.07 7.071zm13 13l7.071-7.071L44.142 24l-7.07 7.071zM4 24l7.071-7.071L18.142 24l-7.07 7.071zm13 13l7.071-7.071L31.142 37l-7.07 7.071z\"/>"
	},
	"more-one": {
		body: "<circle cx=\"24\" cy=\"12\" r=\"3\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"24\" r=\"3\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"35\" r=\"3\" fill=\"currentColor\"/>"
	},
	"more-three": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M21.5 14a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0m0 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0M24 36.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5\" clip-rule=\"evenodd\"/></g>"
	},
	"more-two": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><circle cx=\"14\" cy=\"24\" r=\"3\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"24\" r=\"3\" fill=\"currentColor\"/><circle cx=\"34\" cy=\"24\" r=\"3\" fill=\"currentColor\"/></g>"
	},
	mosaic: {
		body: "<path fill=\"currentColor\" d=\"M44 36h-8v8h8zm-16 0h-8v8h8zm-16 0H4v8h8zm32-16h-8v8h8zm-16 0h-8v8h8zm-16 0H4v8h8zM44 4h-8v8h8zM28 4h-8v8h8zM12 4H4v8h8zm8 8h-8v8h8zm0 16h-8v8h8zm16-16h-8v8h8zm0 16h-8v8h8z\"/>"
	},
	mountain: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m18 10l14 28H4z\"/><path stroke-linecap=\"round\" d=\"m28 29l5.647-7L44 38H32M12 22h12m-10-4l-4 8m12-8l4 8\"/></g>"
	},
	mounted: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 7h12m6 0h12\"/><path stroke-linejoin=\"round\" d=\"M19 36h-3a3 3 0 0 1-3-3v-9a8 8 0 0 1 8-8h6a8 8 0 0 1 8 8v9a3 3 0 0 1-3 3h-3\"/><circle cx=\"24\" cy=\"7\" r=\"3\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M29 35v1.4a1.6 1.6 0 0 1-1.6 1.6h-6.8a1.6 1.6 0 0 1-1.6-1.6V35a5 5 0 0 1 10 0\"/><path stroke-linejoin=\"round\" d=\"M21 38v3a3 3 0 1 0 6 0v-3\"/></g>"
	},
	mouse: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 16H12v16c0 6.627 5.373 12 12 12s12-5.373 12-12V16z\" clip-rule=\"evenodd\"/><path d=\"M36 16c0-6.627-5.373-12-12-12v12zM24 4c-6.627 0-12 5.373-12 12h12z\"/></g>"
	},
	"mouse-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"24\" height=\"32\" x=\"12\" y=\"12\" rx=\"12\"/><path d=\"M12 24c0-6.627 5.373-12 12-12s12 5.373 12 12v1H12z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 25V12c0-4 1.5-8 7-8c6 0 8 5 8 9\"/></g>"
	},
	"mouse-zodiac": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 35H4c0-8 5-18 10-18l2 9m12 9c0-5 2-8.01 9-8\"/><path d=\"M44 28.537C45 33.511 42 35 40 34s-1.5-6-3-10c-3.14-8.375-15-10-22-3\"/></g>"
	},
	mouth: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 24s6-9 10-9s8 2 10 2s6-2 10-2s10 9 10 9s-10 10-20 10S4 24 4 24m0 0h40\"/>"
	},
	move: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22 43c-4.726-1.767-8.667-7.815-10.64-11.357c-.852-1.53-.403-3.408.964-4.502a3.83 3.83 0 0 1 5.1.283L19 29V17.5a2.5 2.5 0 0 1 5 0v6a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1 5 0v7.868c0 1.07-.265 2.128-.882 3.003C37.095 39.82 35.256 42.034 33 43c-3.5 1.5-6.63 1.634-11 0M10 8h22m-18 4l-4-4l4-4m14 0l4 4l-4 4\"/>"
	},
	"move-in": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m20 12l4 4l4-4m-4 4V4m-4 32l4-4l4 4m-4-4v12m12-24l-4 4l4 4m-4-4h12m-32-4l4 4l-4 4m4-4H4m20 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4\"/>"
	},
	"move-in-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m28 28l14 2.8l-4.2 2.8l4.2 4.2l-4.2 4.2l-4.2-4.2l-2.8 4.2z\" clip-rule=\"evenodd\"/><path d=\"M42 22V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h13\"/></g>"
	},
	"move-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m8 6l35 19l-19 2l-10.005 17z\"/>"
	},
	movie: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linejoin=\"round\" d=\"M24 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-9-9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm18 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z\"/><path stroke-linecap=\"round\" d=\"M24 44h20\"/></g>"
	},
	"movie-board": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 16H4v26h40zm0 0V6H4v10zM26 6l4 10M18 6l4 10M10 6l4 10M34 6l4 10m-26 8h24m-24 8h12\"/>"
	},
	"moving-picture": {
		body: "<g fill=\"none\" stroke=\"currentColor\"><rect width=\"20\" height=\"20\" x=\"6\" y=\"22\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"3\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 6h12v12\"/><circle cx=\"34\" cy=\"42\" r=\"1.5\" fill=\"currentColor\"/><circle r=\"1.5\" fill=\"currentColor\" transform=\"matrix(1 0 0 -1 6 14)\"/><circle cx=\"42\" cy=\"42\" r=\"1.5\" fill=\"currentColor\"/><circle r=\"1.5\" fill=\"currentColor\" transform=\"matrix(1 0 0 -1 6 6)\"/><circle cx=\"42\" cy=\"34\" r=\"1.5\" fill=\"currentColor\"/><circle r=\"1.5\" fill=\"currentColor\" transform=\"matrix(1 0 0 -1 14 6)\"/><circle cx=\"42\" cy=\"26\" r=\"1.5\" fill=\"currentColor\"/><circle r=\"1.5\" fill=\"currentColor\" transform=\"matrix(1 0 0 -1 22 6)\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 34l6.12-4.59a3 3 0 0 1 3.7.078L25 37M42 6L30 18\"/></g>"
	},
	"multi-circular": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path d=\"M24 44c7.732 0 14-6.268 14-14s-6.268-14-14-14s-14 6.268-14 14s6.268 14 14 14Z\"/><path d=\"M24 44a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z\"/></g>"
	},
	"multi-function-knife": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M30 10a6 6 0 0 0-12 0v28a6 6 0 0 0 12 0zm0 10.314l7.243 7.242A4 4 0 0 0 42.9 21.9L30 9z\"/><path d=\"m18.071 27.414l-7.243-7.242a4 4 0 1 0-5.656 5.656l12.9 12.9z\"/><path stroke-linecap=\"round\" d=\"M24 10v1m0 26v1\"/></g>"
	},
	"multi-picture-carousel": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"30\" x=\"4\" y=\"6\" rx=\"2\"/><path d=\"M20 42h8m6 0h2M4 42h2m36 0h2m-32 0h2\"/></g>"
	},
	"multi-rectangle": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 39h32V7H12v8\"/><path d=\"M8 39h24V15H8v8\"/><path d=\"M20 23H4v16h16z\"/></g>"
	},
	"multi-ring": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M30 10a6 6 0 0 0-12 0v14a6 6 0 0 0 12 0z\"/><path d=\"M38.142 18.343a6 6 0 0 0-8.485-8.485l-9.9 9.9a6 6 0 1 0 8.486 8.485z\"/><path d=\"M38 30a6 6 0 0 0 0-12H24a6 6 0 0 0 0 12z\"/><path d=\"M29.657 38.142a6 6 0 1 0 8.485-8.485l-9.9-9.9a6 6 0 1 0-8.485 8.486z\"/><path d=\"M18 38a6 6 0 0 0 12 0V24a6 6 0 0 0-12 0z\"/><path d=\"M9.858 29.657a6 6 0 1 0 8.485 8.485l9.9-9.9a6 6 0 1 0-8.486-8.485z\"/><path d=\"M10 18a6 6 0 0 0 0 12h14a6 6 0 0 0 0-12z\"/><path d=\"M18.343 9.858a6 6 0 0 0-8.485 8.485l9.9 9.9a6 6 0 1 0 8.485-8.485z\"/></g>"
	},
	"multi-triangular": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 6L4 41h40zm15 26.25L34 41m-5-26.25L14 41m20-17.5L24 41\"/>"
	},
	"multi-triangular-four": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 41h40L24 6zM24 6v35M14 24l30 17M34 24L4 41\"/>"
	},
	"multi-triangular-three": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 41h40L24 6zm20-11V6m0 24L4 41m20-11l20 11\"/>"
	},
	"multi-triangular-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 41h40L24 6z\"/><path d=\"M34 23.5L24 41L14 23.5z\"/></g>"
	},
	multicast: {
		body: "<g fill=\"none\" stroke=\"currentColor\"><path stroke-width=\"4\" d=\"M24 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" stroke-width=\"4\" d=\"M24 15v8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 33V23l23 .013V33\"/><path stroke-linecap=\"round\" stroke-width=\"5\" d=\"M41 41v1M7 41v1m11-1v1m12-1v1\"/></g>"
	},
	"multilayer-sphere": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path stroke-linecap=\"round\" d=\"M4.4 20c1.853 9.129 9.924 16 19.6 16s17.747-6.871 19.6-16\"/><path stroke-linecap=\"round\" d=\"M5.664 16C8.75 23.064 15.8 28 24 28s15.25-4.936 18.336-12\"/><path stroke-linecap=\"round\" d=\"M7.999 12c3.648 4.858 9.458 8 16.001 8s12.353-3.142 16.015-8M11.998 8c3.343 2.512 7.499 4 12.002 4s8.659-1.488 12.002-4\"/></g>"
	},
	muscle: {
		body: "<g fill=\"none\"><path d=\"M21.37 36c1.45-5.25 6.52-9 12.36-8.38c5.56.59 9.98 5.28 10.26 10.86c.07 1.47-.13 2.88-.56 4.19c-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7l-8.57 6.13L15 14\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M21.37 36c1.45-5.25 6.52-9 12.36-8.38c5.56.59 9.98 5.28 10.26 10.86c.07 1.47-.13 2.88-.56 4.19c-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7l-8.57 6.13L15 14m2.44 3.13L22 34\"/></g>"
	},
	"museum-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 44h40\"/><path stroke-linejoin=\"round\" d=\"M8 8.364L24 4l16 4.364V14H8z\"/><path stroke-linecap=\"round\" d=\"M10 14v24m7-24v24m7-24v24m7-24v24m7-24v24\"/><path stroke-linejoin=\"round\" d=\"M7 38h34v6H7z\"/></g>"
	},
	"museum-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M4 44h40\"/><path d=\"M8 7.273S15 4 24 4s16 3.273 16 3.273V13H8z\"/><path stroke-linecap=\"round\" d=\"M10 13v25m7-25v25m7-25v25m7-25v25m7-25v25\"/><path d=\"M7 38h34v6H7z\"/></g>"
	},
	music: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M30 34.5a3.5 3.5 0 0 1 3.5-3.5H41v3.4a3.6 3.6 0 0 1-3.6 3.6h-3.9a3.5 3.5 0 0 1-3.5-3.5Zm-24 4A3.5 3.5 0 0 1 9.5 35H16v3.4a3.6 3.6 0 0 1-3.6 3.6H9.5A3.5 3.5 0 0 1 6 38.5Z\"/><path stroke-linecap=\"round\" d=\"m16 18.044l25-5.919M16 38V10l25-6v29.692\"/></g>"
	},
	"music-cd": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M26 14v14\"/><path stroke-linejoin=\"round\" d=\"M14 28.666C14 26.64 15.934 25 18.32 25H26v4.334C26 31.36 24.066 33 21.68 33h-3.36C15.934 33 14 31.359 14 29.334z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m32 15l-6-1\"/></g>"
	},
	"music-list": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 19h16m-16-9h16M8 38h32M8 28h32\"/><path d=\"m8 10l8 5l-8 5z\"/></g>"
	},
	"music-menu": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M29 6v29\"/><path d=\"M15 36.04A5.04 5.04 0 0 1 20.04 31H29v5.96A5.04 5.04 0 0 1 23.96 42h-3.92A5.04 5.04 0 0 1 15 36.96z\"/><path stroke-linecap=\"round\" d=\"m29 14.066l12.883 3.056V9.013L29 6z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M6 8h14M6 16h14M6 24h10\"/></g>"
	},
	"music-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 6v29\"/><path d=\"M10 36.04A5.04 5.04 0 0 1 15.04 31H24v5.96A5.04 5.04 0 0 1 18.96 42h-3.92A5.04 5.04 0 0 1 10 36.96z\"/><path stroke-linecap=\"round\" d=\"m24 14.066l12.883 3.056V9.013L24 6z\" clip-rule=\"evenodd\"/></g>"
	},
	"music-rhythm": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 42h5m-5-6h5m-5-6h5m-5-6h5m6 18h5m-5-6h5m-5-6h5m-5-6h5m-5-6h5m-5-6h5m-5-6h5m6 36h5m6 0h5m-16-6h5m6 0h5m-16-6h5m6 0h5m-5-6h5m-5-6h5\"/>"
	},
	mute: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path d=\"M29 14v20c-3.85 0-6.71-5.09-6.71-5.09H18.1c-.608 0-1.1-.497-1.1-1.11v-7.683c0-.614.492-1.111 1.1-1.111h4.19S25.15 14 29 14Z\"/></g>"
	},
	"nail-polish": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M18.895 5.89A2 2 0 0 1 20.892 4h6.216a2 2 0 0 1 1.997 1.89l.778 14A2 2 0 0 1 27.886 22h-7.772a2 2 0 0 1-1.997-2.11zM11 28a6 6 0 0 1 6-6h14a6 6 0 0 1 6 6v13a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3z\"/><circle cx=\"24\" cy=\"33\" r=\"3\" fill=\"currentColor\"/></g>"
	},
	"nail-polish-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"32\" height=\"24\" x=\"8\" y=\"20\" rx=\"2\"/><path d=\"M17 4h14v16H17zm5 28h4l1 5h-6zm2-12v12m7-12H17\"/></g>"
	},
	nasal: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M16.988 4q.18 9.375-.97 13.01c-1.152 3.633-9.936 13.753-9.936 19.092c0 5.34 6.305 8.287 9.709 6.277M32.002 4q-.337 9.375.814 13.01c1.15 3.633 10.143 12.44 10.143 18.282s-6.512 9.097-9.917 7.087\"/><path d=\"M13.006 34.834q2.565-1.46 4.46 0C19.36 36.292 19.956 40 24.008 40c4.053 0 6.04-4.157 7.992-5.166q1.953-1.01 4 0M20.285 22.146c-.794.854-1.634 1.807-2.247 3.468c-.465 1.259-.558 1.989-.622 2.81\"/></g>"
	},
	"natural-mode": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"4\"><path d=\"M24 27c-5.657 0-9.935-4.343-9.935-10L14 7l5 4l5-6l5 6l5-4v10c0 5.657-4.342 10-10 10m-.514 16.314c1.562-1.562-.337-5.995-4.242-9.9c-3.906-3.905-8.338-5.805-9.9-4.242s.337 5.994 4.243 9.9c3.905 3.904 8.337 5.804 9.9 4.242\"/><path d=\"M24.829 42.97c1.562 1.563 5.994-.337 9.9-4.242c3.905-3.905 5.804-8.338 4.242-9.9s-5.994.338-9.9 4.243c-3.905 3.905-5.804 8.337-4.242 9.9\"/></g>"
	},
	navigation: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24.5 4L9 44l15.5-9.09L40 44z\"/>"
	},
	necktie: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m15 36l6-23h6l6 23l-9 8zm6-32h6l3 2l-3 7h-6l-3-7z\"/>"
	},
	needle: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M39 23L25 9m19 8L31 4m3.999 14.999l5-5m-11-1l5-5M11 37l-5 5\"/><path d=\"M28 12L12 28l-1 9l9-1l16-16z\"/></g>"
	},
	"negative-dynamics": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M17 33.95v8.16M9 40v2.056M25 27v15.071m8-23.11v23.127m8-31.118v31.113M7 33L34 6M7 22v11\"/>"
	},
	"nested-arrows": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M30 17V4H4v26h13\"/><path d=\"M43 43V17H17v26zM33 30H17m16 0l-5-5zm0 0l-5 5zM17 17v26\"/></g>"
	},
	nests: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M4.999 32.314L20.034 5.943Q21.42 3 25.04 3c3.62 0 5.977 4.987 5.977 4.987L35 8.58q-6.016.098-6.957 2.42c-.94 2.322 2.456 4.731 2.975 8.004s-1.55 8.801-6.529 11.563Q19.51 33.33 12.058 32l-6.1 11\"/><path d=\"M14.942 26.978q3.87-6.975 5.087-8.956c1.219-1.982 6.246-1.385 4.44 3.563q-1.806 4.947-9.527 5.393Zm18.026 6.006q1.713-4.105 5.003-4.975t6 1.06q-1.688 3.893-5.005 4.992q-3.316 1.099-5.998-1.077Z\" clip-rule=\"evenodd\"/><path d=\"M26.985 35.114q1.136 4.084 6.014 5.461q4.879 1.38 8.033-1.575q-3.9-4.545-7.03-4.99q-3.13-.444-7.017 1.104Z\" clip-rule=\"evenodd\"/></g>"
	},
	"network-drive": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40.518 36.316A9.21 9.21 0 0 0 44 26c-1.213-3.83-4.93-5.929-8.947-5.925h-2.321a14.737 14.737 0 1 0-25.31 13.429\"/><path d=\"M14 35h20v6H14zm20-7H22m-6 0h-2\"/></g>"
	},
	"network-tree": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 34h8v8H4zM8 6h32v12H8zm16 28V18\"/><path d=\"M8 34v-8h32v8m-4 0h8v8h-8zm-16 0h8v8h-8zm-6-22h2\"/></g>"
	},
	neural: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M20.5 33c1.966 0 2.79-3.538 4.5-4.247c1.772-.735 4.417 1.336 5.753 0c1.336-1.335-.306-4.302.43-6.074C31.89 20.97 35 20.466 35 18.5s-3.538-2.44-4.247-4.15c-.735-1.772 1.336-4.767 0-6.103s-4.487.735-6.26 0C22.783 7.538 22.466 4 20.5 4s-2.496 3.965-4.206 4.674c-1.772.735-4.711-1.762-6.047-.427c-1.336 1.336.735 3.981 0 5.753C9.538 15.71 6 16.534 6 18.5s3.538 2.47 4.247 4.18c.735 1.771-1.336 4.738 0 6.073c1.336 1.336 4.275-.735 6.047 0c1.71.71 2.24 4.247 4.206 4.247Z\" clip-rule=\"evenodd\"/><path stroke-linejoin=\"round\" d=\"M20 22a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" d=\"M16.57 30q-1.814 10.2 2.143 12.766c3.958 2.568 6.734.561 8.183-.91s6.153-7.912 10.18-7.912c4.026 0 5.238 3.88 4.856 6q-.381 2.12-1.97 3.136\"/></g>"
	},
	"neutral-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 18v1m-14-1v1m0 12h14\"/></g>"
	},
	"new-afferent": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 19V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h10\"/><path d=\"m32 24l-8 8l8 8m-8-8h18\"/></g>"
	},
	"new-computer": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"28\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M14 42h20m-10-8v8\"/></g>"
	},
	"new-dianziqian": {
		body: "<g fill=\"none\"><path d=\"M31 20v7L10 39l-6-4V13l6-4l14 8l-6.5 3.5L10 16v16z\"/><path fill=\"currentColor\" d=\"m31 27l.992 1.736A2 2 0 0 0 33 27zm0-7h2v-3.446l-2.992 1.71zM10 32H8a2 2 0 0 0 2.992 1.736zm0-16l1.029-1.715A2 2 0 0 0 8 16zm7.5 4.5l-1.029 1.715a2 2 0 0 0 1.977.046zM24 17l.948 1.76a2 2 0 0 0 .044-3.497zM10 9l.992-1.736a2 2 0 0 0-2.101.072zm-6 4l-1.11-1.664A2 2 0 0 0 2 13zm0 22H2a2 2 0 0 0 .89 1.664zm6 4l-1.11 1.664a2 2 0 0 0 2.102.072zm23-12v-7h-4v7zm-2.992-8.736l-21 12l1.984 3.473l21-12zM12 32V16H8v16zM8.971 17.715l7.5 4.5l2.058-3.43l-7.5-4.5zm9.477 4.546l6.5-3.5l-1.896-3.522l-6.5 3.5zm6.544-6.997l-14-8l-1.984 3.472l14 8zM8.891 7.336l-6 4l2.218 3.328l6-4zM2 13v22h4V13zm.89 23.664l6 4l2.22-3.328l-6-4zm8.102 4.072l21-12l-1.984-3.472l-21 12z\"/><path d=\"M17 28v-7L38 9l6 4v22l-6 4l-14-8l6.5-3.5L38 32V16z\"/><path fill=\"currentColor\" d=\"m17 21l-.992-1.736A2 2 0 0 0 15 21zm0 7h-2v3.446l2.992-1.71zm21-12h2a2 2 0 0 0-2.992-1.736zm0 16l-1.029 1.715A2 2 0 0 0 40 32zm-7.5-4.5l1.029-1.715a2 2 0 0 0-1.977-.046zM24 31l-.948-1.76a2 2 0 0 0-.044 3.497zm14 8l-.992 1.736a2 2 0 0 0 2.101-.072zm6-4l1.11 1.664A2 2 0 0 0 46 35zm0-22h2a2 2 0 0 0-.89-1.664zm-6-4l1.11-1.664a2 2 0 0 0-2.102-.072zM15 21v7h4v-7zm2.992 8.737l21-12l-1.984-3.473l-21 12zM36 16v16h4V16zm3.029 14.285l-7.5-4.5l-2.058 3.43l7.5 4.5zm-9.477-4.546l-6.5 3.5l1.896 3.522l6.5-3.5zm-6.544 6.997l14 8l1.984-3.472l-14-8zm16.101 7.928l6-4l-2.218-3.328l-6 4zM46 35V13h-4v22zm-.89-23.664l-6-4l-2.22 3.328l6 4zm-8.102-4.072l-21 12l1.984 3.473l21-12z\"/></g>"
	},
	"new-efferent": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 19V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h10\"/><path d=\"m34 24l8 8l-8 8m-10-8h18\"/></g>"
	},
	"new-lark": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M17 29c4 0 8-2.066 11-5.593C36 14 41.424 16.817 44 18c-5.5 3-3.5 11.623-11 18c-4.618 3.926-9.506 5.014-14 5c-6.477-.02-12.138-3.236-15-5.594V17\"/><path fill=\"currentColor\" d=\"M5.648 15.867a2 2 0 1 0-3.296 2.266zM36.002 35.73a2 2 0 0 0-2.004-3.462zM2.352 18.133c2.892 4.206 8.447 10.011 14.535 14.09c3.047 2.044 6.33 3.723 9.562 4.51c3.246.789 6.596.71 9.553-1.002l-2.004-3.462c-1.793 1.038-4.005 1.209-6.603.577c-2.612-.636-5.454-2.05-8.282-3.945c-5.662-3.795-10.856-9.24-13.465-13.034z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33.595 17c-.755-2.297-2.74-7.06-6-10h-16C15.217 10.676 23 16 27 24\"/></g>"
	},
	"new-picture": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"m6 28l10.693-9.802a2 2 0 0 1 2.653-.044L32 29m-4-5l4.773-4.773a2 2 0 0 1 2.615-.186L42 24M6 20v10m36-10v10\"/></g>"
	},
	newlybuild: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 10V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2h-4\"/><rect width=\"24\" height=\"24\" x=\"5\" y=\"18\" rx=\"2\"/><path d=\"M17 25v10m-5-5h10\"/></g>"
	},
	"newspaper-folding": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m22 44l-1-8m21 8V12H26l1 8l1 8l1 8l-7 8zM28 28h5m-6-8h6\"/><path d=\"M6 4h19l1 8l1 8l1 8l1 8H6zm6 8h7m-7 8h8m-8 8h9\"/></g>"
	},
	next: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 40.836q7.34-8.96 13.036-10.168t10.846-.365V41L44 23.545L27.882 7v10.167Q18.359 17.242 11.69 24Q5.023 30.758 4 40.836Z\" clip-rule=\"evenodd\"/>"
	},
	"nine-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M24.5 14a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19 29c.818 2.193 2.548 4 5.5 4c3.038 0 5.5-2.686 5.5-6v-7\"/></g>"
	},
	"nine-points-connected": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m26.829 37.172l10.343-10.343m-16 0L10.829 37.172m16-16l10.343-10.343M10.829 21.172l10.343-10.343M12 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0 16a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0 16a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0-16a4 4 0 1 1-8 0a4 4 0 0 1 8 0m16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0\"/>"
	},
	"nintendo-switch": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 18c0-5.657 0-8.485 1.757-10.243C9.515 6 12.343 6 18 6h2v36h-2c-5.657 0-8.485 0-10.243-1.757C6 38.485 6 35.657 6 30zm36 0c0-5.657 0-8.485-1.757-10.243C38.485 6 35.657 6 30 6h-2v36h2c5.657 0 8.485 0 10.243-1.757C42 38.485 42 35.657 42 30zm-7-5v2M13 33v2\"/>"
	},
	nmr: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M32.485 15.515A11.96 11.96 0 0 0 24 12a11.96 11.96 0 0 0-8.485 3.515\"/><path stroke-linejoin=\"round\" d=\"M34 24H14v8h20z\"/><path stroke-linecap=\"round\" d=\"M17.045 32L17 42.715M31.046 32L31 42.715\"/></g>"
	},
	"no-shooting": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m15 12l3-6h12l3 6zm26 0H7c-1.657 0-3 1.254-3 2.8v24.4C4 40.746 5.343 42 7 42h34c1.657 0 3-1.254 3-2.8V14.8c0-1.546-1.343-2.8-3-2.8Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m28 20l-8 14\"/><circle cx=\"24\" cy=\"27\" r=\"8\" stroke-linecap=\"round\"/></g>"
	},
	"node-flat": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 42V27m18-3H27\"/><circle cx=\"24\" cy=\"24\" r=\"3\"/><path d=\"M42 6H6v36\"/></g>"
	},
	"node-round": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 42V27m18-3H27\"/><circle cx=\"24\" cy=\"24\" r=\"3\"/><path d=\"M42 6H24C14.059 6 6 14.059 6 24v18\"/></g>"
	},
	"node-square": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 42V27m18-3H27\"/><circle cx=\"24\" cy=\"24\" r=\"3\"/><path d=\"M42 6H24L6 24v18\"/></g>"
	},
	noodles: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 24c0 11.046 6.667 20 20 20s20-8.954 20-20z\" clip-rule=\"evenodd\"/><path d=\"M16 24V8m8 16V6m8 18V4M8 24V10m-4 3l40-9\"/></g>"
	},
	notebook: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"M34 6v36M6 14h8M6 24h8M6 34h8M27 4h12M27 44h12\"/></g>"
	},
	"notebook-and-pen": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 6v36h26V6zm8 36V6m32 0h-8v32l4 4l4-4zm-8 6h8M30 6H4m26 36H4M36 6v16m8-16v16\"/>"
	},
	"notebook-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"M16 4v40m8-32h8m-8 8h8M10 4h12M10 44h12\"/></g>"
	},
	notepad: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M18 8h-7a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-7\"/><path d=\"M18 13V8h3.95a.05.05 0 0 0 .05-.05V6a3 3 0 1 1 6 0v1.95c0 .028.022.05.05.05H32v5a1 1 0 0 1-1 1H19a1 1 0 0 1-1-1Z\"/></g>"
	},
	notes: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 6a2 2 0 0 1 2-2h20l10 10v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"M16 20h16m-16 8h16\"/></g>"
	},
	"nuclear-plant": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 44h40M12 14h24\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 14h20l.877 7.017c.082.654.228 1.298.436 1.922l3.334 10.003a10 10 0 0 1 .464 2.167L40 44H8l.889-8.89a10 10 0 0 1 .464-2.168l3.334-10.003c.208-.624.354-1.268.436-1.922z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m24 8l.828-.828A4 4 0 0 1 27.657 6h.686a4 4 0 0 0 2.829-1.172L32 4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M17 31a7.01 7.01 0 0 0 4.272 6.448M31 31a7.01 7.01 0 0 1-4.272 6.448M18.934 26.17A6.98 6.98 0 0 1 24 24a6.98 6.98 0 0 1 5.067 2.17\"/><circle cx=\"24\" cy=\"31\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"nurse-cap": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 10c-11.257 0-18.015 6.748-19.625 8.558a.92.92 0 0 0-.148.982l7.326 17.397c.236.561.917.794 1.467.532C14.824 36.608 18.876 35 24 35s9.176 1.608 10.98 2.47c.55.261 1.231.028 1.467-.533l7.326-17.397a.92.92 0 0 0-.148-.982C42.015 16.748 35.257 10 24 10m-4 14.001h8M24 20v8\"/>"
	},
	nut: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M37.699 6c-.527.534-2.46 2.672-3.69 3.741c-.175.535 2.109 2.672 2.636 3.207s6.85-3.207 6.324-3.741c-.422-.428-3.69-2.316-5.27-3.207M11.372 16.722a6 6 0 0 1-.03-.264a19.6 19.6 0 0 0-4.3 6.142a3.515 3.515 0 1 1-1.506 6.866c-.02 3.546 1.15 6.955 3.58 9.601c3.505 3.815 8.81 5.151 14.03 4.064c3.214-.668 6.395-2.254 9.106-4.745a20 20 0 0 0 3.39-4.051c-2.225.67-4.675-.412-5.601-2.598a3.68 3.68 0 0 0-2.577-2.155l-1.682-.381a5.97 5.97 0 0 1-4.24-3.65l-.091-.231a5.58 5.58 0 0 0-4.857-3.539a5.58 5.58 0 0 1-5.19-4.826z\"/><path d=\"m13.154 11.658l-.251.27a5.87 5.87 0 0 0-1.53 4.794l.03.233a5.58 5.58 0 0 0 5.191 4.826a5.58 5.58 0 0 1 4.857 3.54l.09.23a5.97 5.97 0 0 0 4.241 3.65l1.683.381a3.68 3.68 0 0 1 2.576 2.155c.996 2.35 3.755 3.425 6.1 2.416c2.368-1.019 4.084-3.199 4.483-5.746l.207-1.33a10 10 0 0 0 .1-2.166l-.108-1.69a17.27 17.27 0 0 0-3.504-9.38l-.252-.331a15.79 15.79 0 0 0-14.1-6.138l-1.406.138a13.3 13.3 0 0 0-8.407 4.148\"/></g>"
	},
	nutrition: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M24 42h5.955q.124-4.106 1.204-4.515C38.669 34.635 44 27.434 44 19H4c0 8.251 5.103 15.323 12.357 18.294q1.137.466 1.699 4.706z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M14.443 26.023q.54 1.78 1.427 2.942a11.3 11.3 0 0 0 2.14 2.104M32.2 8.018a16.8 16.8 0 0 0-4.047-1.613M22.05 6c-7.123.823-12.906 6.098-14.55 13m33-.003a17.14 17.14 0 0 0-3.883-7.434\"/></g>"
	},
	oceanengine: {
		body: "<path fill=\"currentColor\" d=\"m21.483 8.474l2.397 8.153H4.758l2.458-8.153zM9.134 18.125l8.212 1.979l-9.531 16.545L2 30.473zm2.158 15.526l5.815-6.174l9.591 16.545L18.426 46zm28.773 5.815H25.798L23.4 31.373h19.123m2.757-13.907l-7.133 12.409l-8.212-1.979l9.53-16.545m-3.476 2.998l-5.815 6.174l-9.591-16.605L28.856 2z\"/>"
	},
	octagon: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"M15.41 42.389L5.56 32.18A2 2 0 0 1 5 30.792V17.208a2 2 0 0 1 .56-1.39l9.85-10.207A2 2 0 0 1 16.85 5h14.3a2 2 0 0 1 1.44.611l9.85 10.208a2 2 0 0 1 .56 1.389v13.584a2 2 0 0 1-.56 1.39l-9.85 10.207a2 2 0 0 1-1.44.611h-14.3a2 2 0 0 1-1.44-.611Z\"/>"
	},
	"off-screen": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33 6v9h9M15 6v9H6m9 27v-9H6m27 9v-9h8.9\"/>"
	},
	"off-screen-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 6l10 9.9m-10 26L16 32m26 9.9L32.1 32m9.8-26L32 15.9M32 7v9h9M16 7v9H7m9 25v-9H7m25 9v-9h8.9\"/>"
	},
	"off-screen-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M41 19H29V7M18 6H6v12m24 24h12V30M7 29h12v12M42 6L29 19M19 29L6 42\"/>"
	},
	"oil-industry": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 6h28v36H10z\"/><path stroke-linecap=\"round\" d=\"M20.643 23.889c1.431-1.88 2.535-4.479 3.131-5.889c1.044 1.41 3.31 4.948 4.026 6.829c.894 2.35-1.342 5.171-4.026 5.171s-4.92-3.76-3.131-6.111M6 6h36M6 42h36M6 24h4m28 0h4\"/></g>"
	},
	okay: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M15.114 24.946c-2.403 2.746-2.827 6.087-2.65 8.41c.085 1.105 1.205 1.713 2.234 1.303c.744-.297 1.56-.668 2.146-1.06c1.731-1.153 1.154-2.307 1.731-4.038c.577-1.73 3.117-3.138 5.425-2.561s3.229 2.561 3.229 4.292S26.5 35 24.344 35.907c-2.378 1.001-3.461 0-6.346-.577c-1.503-.3-3.006 1.015-3.871 1.968a1.514 1.514 0 0 0-.118 1.918c.289.402.661.863 1.105 1.306c1.154 1.154 5.769 4.616 10.384 4.039s8.653-4.038 10.384-8.077s.577-8.653-2.307-12.115s-8.077-4.038-9.23-4.038c-1.155 0-5.193 0-9.231 4.615\"/><path d=\"M31.562 22.639L12.643 8.17c-.398-.304-.967-.271-1.264.133c-.713.97-1.386 2.507-.303 3.95c1.384 1.846 6.73 6.539 9.23 8.654\"/><path d=\"M35 26L23.142 4.198c-.239-.44-.772-.641-1.208-.394c-1.046.594-2.289 1.723-1.89 3.483c.51 2.25 2.539 6.261 3.957 9.213\"/><path d=\"m36 28l-.95-20.308c-.023-.5-.414-.913-.914-.882c-1.201.077-2.813.55-3.223 2.307c-.524 2.247-.9 5.608-.913 8.883\"/></g>"
	},
	one: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"m11 40l-4.06-8.798a5 5 0 0 1 2.1-6.46l11.257-6.29a3 3 0 0 1 3.264.218l1.026.77a1 1 0 0 0 1.595-.697L27.37 7.25a3 3 0 0 1 1.11-2.034l.215-.172a1.865 1.865 0 0 1 2.484.138c.525.524.82 1.236.82 1.978v22.26a1 1 0 0 0 1.624.782L37 27.5c1.653-1.322 3.875-.459 5.255.445c.439.287.504.881.192 1.303L34.5 40S31 44 23 44s-11.333-2.667-12-4Z\"/>"
	},
	"one-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M21.226 18L26 13.017V34\"/></g>"
	},
	"one-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M25.745 44h-.896c-5.21 0-10.07-2.626-12.925-6.984l-2.195-3.35a5.63 5.63 0 0 1 1.072-7.382l2.288-1.936c.26-.22.411-.545.411-.887V7.25a3.25 3.25 0 0 1 6.5 0v9a3.25 3.25 0 0 1 6.5 0v1.5a3.25 3.25 0 0 1 6.5 0v4a3.25 3.25 0 0 1 6.5 0v10.219c0 1.649-.498 3.26-1.43 4.62l-.973 1.423A13.76 13.76 0 0 1 25.745 44\"/>"
	},
	"one-third-rotation": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 40.015A20 20 0 0 1 24 44c-7.403 0-13.866-4.022-17.324-10H15M32 5.664C39.064 8.75 44 15.8 44 24c0 3.643-.974 7.058-2.676 10l-4.042-7M4.099 26A20 20 0 0 1 4 24C4 12.954 12.954 4 24 4l-4.042 7M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12\"/>"
	},
	"one-to-many": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M42 7H6a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11 20.58L15 18v12m14 0V18l8 12V18\"/><path stroke-linecap=\"round\" d=\"M22 20v1m0 6v1\"/></g>"
	},
	"one-to-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M42 7H6a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 20.58L16 18v12m15-9.42L35 18v12\"/><path stroke-linecap=\"round\" d=\"M24 20v1m0 6v1\"/></g>"
	},
	onesies: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M7 21L4 11c1.833-1.333 9-6 20-6s18 4.667 20 6l-3 10h-7v16c0 4-3 7-7 7h-6c-4 0-7-3-7-7V21z\"/><path d=\"M34 34s-9 0-9 10M14 34s9 0 9 10m6.811-38.5a6 6 0 1 1-11.622 0\"/><path d=\"M36 6.99C32.81 5.883 28.784 5 24 5s-8.843.883-12.054 1.99M14 31v6m20-6v6m-13 7h6\"/></g>"
	},
	"online-meeting": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M44 8H4v30h15l5 5l5-5h15z\"/><path d=\"M12 19v8m8-11v14m8-9v4m8-6v8\"/></g>"
	},
	open: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m27.947 16.828l12.81-9.09a1.832 1.832 0 0 1 2.451 2.686L41 13l-5.276 7.035a2 2 0 0 0-.207 2.056l7.13 15.053A2 2 0 0 1 40.84 40h-8.204a2 2 0 0 1-1.96-1.604L27.52 22.774l-.406-4.119a2 2 0 0 1 .833-1.827M28 23l7-2m-15.064-3.897L7.209 8.196a1.812 1.812 0 0 0-2.405 2.675L7 13.39l5.232 6.636a2 2 0 0 1 .237 2.095L5.353 37.144A2 2 0 0 0 7.16 40h8.162a2 2 0 0 0 1.97-1.652L20 23l.753-3.878a2 2 0 0 0-.817-2.02M13 21l7 2\"/>"
	},
	"open-an-account": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 24V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h15m15.05-9v10M44 37.95H34\"/><circle cx=\"24\" cy=\"18\" r=\"5\"/><path d=\"M33 31c0-4.418-4.03-8-9-8s-9 3.582-9 8\"/></g>"
	},
	"open-door": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M20 4v40l22-6V10z\"/><path stroke-linecap=\"round\" d=\"M6 10h14v28H6z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M28 22v4\"/></g>"
	},
	"open-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 18V9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v9m-21 8l12-13m-7 8l4 4m1-9l4 4M6 30v9a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9\"/><circle cx=\"18\" cy=\"30\" r=\"5\"/></g>"
	},
	optimize: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m19 8l9 8l10.032-5.89L33 21l9 8l-12-1l-4.5 10L23 27l-12-1l10.508-6.35z\"/><path d=\"M8 42.02L23 27\"/></g>"
	},
	optional: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3\"/><path d=\"m14 28l8-8l4 7l8-8\"/></g>"
	},
	orange: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M41 26c0 9.941-6 18-17 18S7 35.94 7 26c0-3.68 1.104-7.102 3-9.953C13.225 11.197 17.74 13 24 13s10.775-1.803 14 3.047c1.895 2.85 3 6.273 3 9.953\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m26 13l3-4h-3l-2-2l-2 2h-3l3 4\"/><circle cx=\"18\" cy=\"20\" r=\"2\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"27\" r=\"2\" fill=\"currentColor\"/><circle cx=\"21\" cy=\"25\" r=\"2\" fill=\"currentColor\"/><circle cx=\"18\" cy=\"32\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"orange-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34.15 34.85c8.202-8.202 8.202-21.498 0-29.7L4.453 34.85c8.201 8.2 21.498 8.2 29.699 0M19.301 20l14.85 14.85M19.302 20v21.213m0-21.213l20.506.707\"/><path d=\"M39.755 14.997c1.664 6.88-.189 14.437-5.56 19.808c-5.372 5.372-12.93 7.225-19.809 5.56m-.034-15.415l8.485-8.486\"/></g>"
	},
	"orange-station": {
		body: "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M17.06 9.615c6.049 1.269 7.214 3.424 7.216 3.427C22.039.115 15.19 3.28 13.733 4.029a.62.62 0 0 0-.332.47c-.129 1.014-.276 4.291 3.66 5.116m-2.408 13.077c-.574 1.595-.746 3.383-.437 5.227c.776 4.624 4.6 7.976 9.07 8.341l1.53.545c.6.194 1.387.386 2.31.52c1.366.199 2.768.229 4.155.032c3.366-.478 6.203-2.21 8.178-5.501l.444-.777c-1.211 6.676-5.966 12.817-13.565 14.24c-5.29.99-10.29-.375-14.027-3.348l.044.086c-2.47-4.792-2.91-9.113-1.78-12.966c.54-1.844 1.478-3.493 2.706-4.955a16 16 0 0 1 1.346-1.419zm2.736-8.356c2.51-.396 6.605-.374 8.903 2.193c.033.036 0 .094-.048.084c-1.227-.25-2.891-.255-4.17-.04c-2.693.451-4.864 1.887-6.262 3.882l-.492.372a17.4 17.4 0 0 0-2.805 2.666c-1.312 1.563-2.317 3.331-2.9 5.317c-1.016 3.463-.84 7.27.795 11.393a17 17 0 0 1-3.365-5.458c-1.837-4.809-1.277-11.068 1.878-15.108c2.25-2.881 5.564-4.843 8.466-5.301M31.68 7.039C36.283.877 41.802 5.381 42.528 6.02c.053.047.086.11.094.18c.098.955.356 7.845-12.901 7.612c3.609.885 7.434 3.892 9.036 7.194c.536 1.107.95 2.259 1.169 3.469c.213 1.176.305 2.378.281 3.584c-.053.278-.235.735-.517 1.305l-.115.227l-.24.453l-.552.986c-1.821 3.225-4.46 4.886-7.643 5.338a13.6 13.6 0 0 1-3.87-.031q-.674-.1-1.23-.231a10 10 0 0 0 6.527-4.447c.33-.44.61-.925.83-1.466c1.006-2.476 1.14-4.942.36-7.709c-1.249-4.428-4.592-7.668-8.81-9.121c-.037-.013-.038-.064 0-.075c.554-.16 2.893-1.107 6.733-6.248\" clip-rule=\"evenodd\"/>"
	},
	order: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M33.05 7H38a2 2 0 0 1 2 2v33a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7v3h14V7z\"/><path stroke-linecap=\"round\" d=\"M17 4h14v6H17zm10 15l-8 8.001h10.004l-8.004 8\"/></g>"
	},
	"ordered-list": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 4v9m3 0H6m6 14H6m0-7s3-3 5 0s-5 7-5 7m0 7.5s2-3 5-1s0 4.5 0 4.5s3 2.5 0 4.5s-5-1-5-1m5-3.5H9M9 4L6 6m15 18h22M21 38h22M21 10h22\"/>"
	},
	orthopedic: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m23.028 36l10.975 6.999V24q11.511-7.815 8.457-14.434c-3.055-6.619-8-6.182-11.453-4.564Q27.552 6.619 26 14.04q-4.557-9.7-12.8-9.7c-8.242 0-8.906 9.724-7.725 12.105S7.773 20.112 13.001 24q-.113 17.345 1.442 18.656q2.85 2.209 8.585-6.656Z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M27 25v6\"/></g>"
	},
	oscillator: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7 9v15a6 6 0 0 0 6 6h22a6 6 0 0 0 6-6V9\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7 10a6 6 0 0 1 6-6h22a6 6 0 0 1 0 12H13a6 6 0 0 1-6-6\"/><circle cx=\"15\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><circle cx=\"21\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><circle cx=\"27\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><circle cx=\"33\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 30v14m10-14v14\"/></g>"
	},
	other: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M22.799 4.201L4.414 22.586a2 2 0 0 0 0 2.828L22.8 43.8a2 2 0 0 0 2.828 0l18.385-18.385a2 2 0 0 0 0-2.828L25.627 4.2a2 2 0 0 0-2.828 0Z\"/><path stroke-linecap=\"round\" d=\"M18 24h12m-6-6v12\"/></g>"
	},
	outbound: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M40 24H24m10-6l6 6l-6 6\"/><circle cx=\"20\" cy=\"24\" r=\"4\"/><path stroke-linecap=\"round\" d=\"M40.706 13A20 20 0 0 0 38 9.717A19.93 19.93 0 0 0 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20c5.45 0 10.392-2.18 14-5.717A20 20 0 0 0 40.706 35\"/></g>"
	},
	outdoor: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m4 42l14-32l10 24l4-12l12 20zm33-28a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/>"
	},
	outgoing: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M18 35a4 4 0 1 0-8 0a4 4 0 0 0 8 0Zm19 0a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z\"/><path stroke-linecap=\"round\" d=\"M4 35h6m8 0h11m8 0h7\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m38 19l6-6l-6-6M4 13h40\"/></g>"
	},
	"oval-love": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M29.516 17.5c5.523 9.566 4.96 20.23-1.258 23.82S12.523 40.067 7 30.5S2.04 10.27 8.258 6.68S23.994 7.934 29.516 17.5\"/><path d=\"M18.258 17.5c-5.523 9.566-4.96 20.23 1.258 23.82s15.736-1.254 21.259-10.82s4.96-20.23-1.259-23.82C33.3 3.09 23.781 7.934 18.258 17.5\"/><path d=\"M23.753 10.344c2.145 1.908 4.13 4.325 5.764 7.156c5.522 9.566 4.959 20.23-1.259 23.82c-1.298.75-2.74 1.132-4.26 1.18\"/></g>"
	},
	"oval-love-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M23.784 10.372c-5.11-4.56-11.14-6.225-15.526-3.692C2.04 10.27 1.477 20.934 7 30.5c3.63 6.29 8.989 10.538 14 11.69\"/><path d=\"M18.258 17.5c-5.523 9.566-4.96 20.23 1.258 23.82s15.736-1.254 21.259-10.82s4.96-20.23-1.259-23.82C33.3 3.09 23.781 7.934 18.258 17.5\"/></g>"
	},
	"oval-one": {
		body: "<ellipse cx=\"24\" cy=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"14\" ry=\"20\"/>"
	},
	oven: {
		body: "<g fill=\"none\"><rect width=\"40\" height=\"28\" x=\"4\" y=\"8\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\"/><rect width=\"16\" height=\"12\" x=\"12\" y=\"16\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"1\"/><circle cx=\"37\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 22h2m-2 7h2m-26 7v6m24-6v6\"/></g>"
	},
	"oven-tray": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"32\" x=\"4\" y=\"8\" rx=\"2\"/><path d=\"M4 16h40M4 24h40M4 32h40\"/></g>"
	},
	"overall-reduction": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15 15h18v18H15zm-4 28v-6H5m32 6v-6h6M11 5v6H5m32-6v6h6\"/>"
	},
	owl: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.358 7.31c2.662 3.848 6.186 5.092 7.86 5.215c2.855-1.398 6.203-2.202 9.782-2.202c3.58 0 6.927.804 9.782 2.201c1.674-.122 5.198-1.366 7.86-5.214c.757-.821 3.03-.439 2.164 6.573c-.289 1.756-1.087 5.585-1.616 7.49c.488 1.361.75 2.8.75 4.289C42.94 34.132 34.46 41 24 41S5.06 34.133 5.06 25.662c0-1.489.262-2.928.75-4.289c-.529-1.905-1.327-5.735-1.616-7.49C3.328 6.871 5.6 6.49 6.358 7.31\"/><path stroke-linejoin=\"round\" d=\"M25 31.25c0 .69-1 3.75-1 3.75s-1-3.06-1-3.75s.448-1.25 1-1.25s1 .56 1 1.25Z\"/><circle cx=\"17\" cy=\"22\" r=\"4\"/><circle cx=\"31\" cy=\"22\" r=\"4\"/></g>"
	},
	pacifier: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m30.656 21.586l4.103-4.104a6 6 0 1 0-4.243-4.243l-4.102 4.104\"/><path d=\"M41.263 32.192L15.807 6.736l-3.889 3.89l7.778 11.313l-2.828 4.243l4.596 4.596l4.243-2.828l11.667 8.131z\"/><path d=\"M19.32 21.885a10 10 0 0 0-9.877 2.529c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0a10 10 0 0 0 2.53-9.877\"/></g>"
	},
	pad: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 4H6v27h36z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 31v13H6V31\"/><path fill=\"currentColor\" d=\"M16 9h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m0 7h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m9.5-7h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m0 7h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m1 21.5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0M35 9h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1\"/></g>"
	},
	page: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M6 17h36M17 42V17\"/></g>"
	},
	"page-template": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M23 4H4v22h19zm21 30H4v9h40zm0-30H31v8h13zm0 14H31v8h13z\"/>"
	},
	pagoda: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M18 16h12s2.424 2.672 4.5 3.429c1.301.474 3.5.571 3.5.571s-1.242.775-2.1 1.143C34.815 21.608 33 22 33 22H15s-1.815-.392-2.9-.857C11.242 20.775 10 20 10 20s2.199-.098 3.5-.571C15.576 18.673 18 16 18 16Zm-1 12h14s2.627 2.672 5 3.429c1.487.474 4 .571 4 .571s-1.42.775-2.4 1.143C36.36 33.608 34 34 34 34H14s-2.36-.392-3.6-.857C9.42 32.775 8 32 8 32s2.513-.098 4-.571C14.373 30.673 17 28 17 28Zm1-20.571C20.45 6.299 24 4 24 4s3.55 2.298 6 3.429c.772.356 2 .857 2 .857s-.726.556-1.2.857C30.183 9.535 29 10 29 10H19s-1.183-.465-1.8-.857c-.474-.301-1.2-.857-1.2-.857s1.228-.501 2-.857Z\"/><path stroke-linecap=\"round\" d=\"M21 10v6m6-6v6m-8 6v6m10-6v6m-13 6v10h16V34\"/></g>"
	},
	paint: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m15.536 22.898l9.899 9.9m-9.899-9.9L7.05 31.383a7 7 0 1 0 9.9 9.9l8.485-8.486m-9.899 0l-4.243 4.243m14.142-4.243l14.907-6.432c2.688-1.16 3.809-4.379 2.086-6.745C38.264 13.903 32.65 8.89 28.51 5.823c-2.29-1.696-5.33-.64-6.46 1.975l-6.514 15.1z\"/>"
	},
	"painted-eggshell": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M24 44c10.252 0 16-6.954 16-18S31.132 4 24 4S8 14.954 8 26s5.748 18 16 18Z\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" d=\"M21 38a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M16 29.668a2 2 0 1 0 0-4a2 2 0 0 0 0 4\" clip-rule=\"evenodd\"/></g>"
	},
	"painted-screen": {
		body: "<g fill=\"none\"><rect width=\"38\" height=\"28\" x=\"5\" y=\"10\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"3\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13 24v-7\"/><rect width=\"4\" height=\"4\" x=\"15\" y=\"29\" fill=\"currentColor\" rx=\"2\" transform=\"rotate(90 15 29)\"/></g>"
	},
	palace: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 18h40L24 6zm40 24H4m5-24v24m10-24v24m10-24v24m10-24v24\"/>"
	},
	palm: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M18.333 35.813L8.62 24.933a3.8 3.8 0 1 1 5.803-4.905L16 22V8.994a3 3 0 1 1 6 0V7a3 3 0 1 1 6 0v1.83a3 3 0 1 1 6 0v3.316a3 3 0 0 1 6 0v13.682c0 2.14-.678 4.227-1.937 5.958l-2.833 3.898a.77.77 0 0 1-.621.316H18.75a.56.56 0 0 1-.417-.187\"/><rect width=\"16\" height=\"8\" x=\"19\" y=\"36\" rx=\"1\"/></g>"
	},
	panda: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><ellipse cx=\"24\" cy=\"27\" rx=\"18\" ry=\"17\"/><ellipse cx=\"16.933\" cy=\"24.64\" rx=\"3\" ry=\"4\" transform=\"rotate(15 16.933 24.64)\"/><ellipse rx=\"3\" ry=\"4\" transform=\"scale(-1 1)rotate(15 -109.047 -105.16)\"/><path stroke-linecap=\"round\" d=\"M41 20.999c3.124-3.124 3.438-8.219.313-11.343S32.124 6.876 29 10M7 21c-3.124-3.125-3.468-8.22-.344-11.343C9.781 6.532 15.876 6.875 19 10\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20 35c.5 1.294 2.2 3.277 5 .862c2.8 2.415 4.5.431 5-.862\"/></g>"
	},
	pangle: {
		body: "<path fill=\"currentColor\" d=\"m38.45 23.017l-5.256-3.007a.168.168 0 0 0-.253.151v7.48c0 .14.076.254.19.33l5.257 3.007a.168.168 0 0 0 .252-.152v-7.48a.4.4 0 0 0-.19-.329m-7.34-4.142l-5.256-3.008a.168.168 0 0 0-.252.152v11.638c0 .101.075.177.177.177h5.357a.173.173 0 0 0 .177-.177v-8.454a.42.42 0 0 0-.202-.328M18.678 30.942l5.256-3.007a.38.38 0 0 0 .19-.329V15.172c0-.126-.14-.214-.253-.151l-5.257 3.007a.38.38 0 0 0-.19.329V30.79c0 .139.14.215.253.151m21.429-6.673v3.411c0 .102.076.177.177.177h5.965c.177 0 .24-.24.088-.316l-5.964-3.411c-.127-.076-.266.012-.266.139m-23.413-5.141L2.085 27.505c-.151.089-.088.316.089.316H16.78a.173.173 0 0 0 .177-.177V19.28c-.013-.139-.152-.215-.265-.152\"/>"
	},
	"panorama-horizontal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 11s9 4 20 4s20-4 20-4v26s-9-4-20-4s-20 4-20 4z\"/>"
	},
	panties: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M44 15c-3-3-5-9-5-9s-5 3.5-15 3.5S9 6 9 6s-1 5-5 9c0 12 17 27 17 27h6s17-15 17-27\"/><path d=\"M44 15s-9 1-13 8s-4 19-4 19M4 15s9 1 13 8s4 19 4 19\"/></g>"
	},
	"paper-money": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 7H9a5 5 0 0 0-5 5v24a5 5 0 0 0 5 5h30a5 5 0 0 0 5-5V12a5 5 0 0 0-5-5Z\"/><path stroke-linecap=\"round\" d=\"m18 15l6 6l6-6m-13 8h14m-14 6h14m-7-6v11\"/></g>"
	},
	"paper-money-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 13h40v24H4z\"/><path stroke-linecap=\"round\" d=\"M4 21a8 8 0 0 0 8-8H4zm0 8a8 8 0 0 1 8 8H4zm40 0v8h-8a8 8 0 0 1 8-8m0-8a8 8 0 0 1-8-8h8z\" clip-rule=\"evenodd\"/><path d=\"M24 31c2.761 0 5-2.686 5-6s-2.239-6-5-6s-5 2.686-5 6s2.239 6 5 6Z\"/></g>"
	},
	"paper-ship": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"m4 24l8.571 18L24 29zm40 0l-8.571 18L24 29zM13 42h22L24 29z\"/><path d=\"M12 26L24 4l12 22\"/></g>"
	},
	paperclip: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m26.122 37.435l14.142-14.142c2.828-2.828 4.243-9.9-.707-14.85s-12.02-3.535-14.85-.706L5.617 26.829c-1.414 1.414-3.536 6.364.707 10.606c4.243 4.243 9.192 2.121 10.607.707l18.384-18.385c1.414-1.414 2.122-4.95 0-7.07c-2.121-2.122-5.657-1.415-7.07 0L14.807 26.121\"/>"
	},
	parabola: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 25h2c6 0 10-16 18-16s12 16 18 16h2M4 33v6m20-6v6m20-6v6M4 36h40\"/>"
	},
	parachute: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M16.727 24q3.636-3.636 7.273-3.636T31.273 24q4.243-3.636 6.363-3.636q2.122 0 6.364 3.636c0-11.046-8.954-20-20-20S4 12.954 4 24q4.243-3.636 6.364-3.636T16.727 24Z\"/><path stroke-linecap=\"round\" d=\"m4 24l20 20l-7.273-20m14.546 0L24 44l20-20\"/></g>"
	},
	"paragraph-alphabet": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 9h18M24 19h18M6 29h36M6 39h36\"/><path d=\"m11 9l-4 8h8z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 19l1-2m9 2l-1-2m-8 0l4-8l4 8m-8 0h8\"/></g>"
	},
	"paragraph-break": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 4v40M42 4v40M18 26l-4 4l4 4\"/><path d=\"M15 30h13a6 6 0 0 0 0-12H14\"/></g>"
	},
	"paragraph-break-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 9h36M6 19h36M6 29h18M6 39h10m8 0h13a5 5 0 0 0 0-10h-5m-8 10l4-4m-4 4l4 4\"/>"
	},
	"paragraph-cut": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 4v40M42 4v40M14 15h20M14 33h28\"/>"
	},
	"paragraph-rectangle": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 9h18M24 19h18M6 29h36M6 39h36M6 9h10v10H6z\"/>"
	},
	"paragraph-round": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 9h18M24 19h18M6 29h36M6 39h36\"/><circle cx=\"12\" cy=\"14\" r=\"5\"/></g>"
	},
	"paragraph-triangle": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 9h18M24 19h18M6 29h36M6 39h36M6 9.766a1 1 0 0 1 1.515-.857l7.056 4.233a1 1 0 0 1 0 1.716L7.515 19.09A1 1 0 0 1 6 18.234z\"/>"
	},
	"paragraph-unfold": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 4v40M38 4v4m0 14v4m0 14v4M14 15h28M14 33h28\"/>"
	},
	"parallel-gateway": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M22.8 4.201L4.413 22.586a2 2 0 0 0 0 2.828L22.8 43.8a2 2 0 0 0 2.829 0l18.384-18.385a2 2 0 0 0 0-2.828L25.628 4.2a2 2 0 0 0-2.829 0Z\"/><path stroke-linecap=\"round\" d=\"M24.043 15.534v16.944m-8.472-8.472h16.944\"/></g>"
	},
	parallelogram: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"M41.28 8H15.47a2 2 0 0 0-1.909 1.403l-8.75 28A2 2 0 0 0 6.721 40H32.53a2 2 0 0 0 1.909-1.404l8.75-28A2 2 0 0 0 41.279 8Z\"/>"
	},
	"parenting-book": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 31v13H13.625C9.875 44 8 42 8 37V4h12\"/><circle cx=\"33\" cy=\"17\" r=\"9\" stroke=\"currentColor\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22 18v-2m22 2v-2M33 8c-.167-1-1.2-3.2-4-4m4 4c.083-1 .6-3.2 2-4\"/><circle cx=\"36\" cy=\"16\" r=\"2\" fill=\"currentColor\"/><circle cx=\"30\" cy=\"16\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 36h30\"/></g>"
	},
	parking: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44s16-12 16-25c0-8.284-7.163-15-16-15S8 10.716 8 19c0 13 16 25 16 25Z\"/><path stroke-linecap=\"round\" d=\"M21 14v16\"/><path d=\"M21 14h6a4 4 0 0 1 0 8h-6z\"/></g>"
	},
	"party-balloon": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M34 16c1-8-2.873-12-9.873-12S13 9 14 16s7.255 12 10.127 12S33 24 34 16m-9 12c-2 .97-5 3.889-5 7s10 1.444 10 4.556C30 42.666 19 44 19 44\"/>"
	},
	passport: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 10h28v34H10zm0 0l22-6v6\"/><circle cx=\"24\" cy=\"24\" r=\"4\"/><path d=\"M20 34h8\"/></g>"
	},
	"passport-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M13 40H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4\"/><rect width=\"34\" height=\"28\" x=\"13\" y=\"44\" rx=\"2\" transform=\"rotate(-90 13 44)\"/><circle cx=\"27\" cy=\"27\" r=\"8\"/><path stroke-linecap=\"round\" d=\"M35 28s-3-.5-5 1s-2.599 5.102-2 6m-4-8c0 2-2 4-4 4m11-11s0 4-3 4\"/></g>"
	},
	pause: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 12v24m16-24v24\"/>"
	},
	"pause-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M19 18v12m10-12v12\"/></g>"
	},
	"pay-code": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 4H4v40h40z\"/><path stroke-linecap=\"round\" d=\"M12 16v16m8-16v16m8-16v16m8-16v16\"/></g>"
	},
	"pay-code-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 6h10v10H32zm0 26h10v10H32zM6 32h10v10H6zM6 6h10v10H6zm2 18h22m8 0h2M24 37v2m0-22v14m0-23v2\"/>"
	},
	"pay-code-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 6H8a2 2 0 0 0-2 2v8m10 26H8a2 2 0 0 1-2-2v-8m26 10h8a2 2 0 0 0 2-2v-8M32 6h8a2 2 0 0 1 2 2v8m-18 0v16m8-16v16M16 16v16\"/>"
	},
	"payment-method": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 10L10 38M6 6l6 8l6-8M5 14h14M5 20h14m-7-6v12m20.846 0H42v16H22v-5.85\"/>"
	},
	paypal: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M33.031 28C39 28 43 25.5 43 20s-4-8-9.969-8H22l-5 31h9l2-15z\" clip-rule=\"evenodd\"/><path d=\"M18 36h-8l5-31h11.031C32 5 36 7.5 36 13s-4 8-9.969 8H21\"/></g>"
	},
	peach: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M10.077 13.432C15.047 7.87 23.687 10.314 27 12c1.657-.632 6.197-1.357 9.18.665c3.727 2.528 8.423 9.24 4.074 18.719C36.775 38.968 27.69 42.157 24.376 43c-2.485-1.053-7.946-3.168-13.77-8.448c-5.28-4.788-6.741-14.169-.529-21.12Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M27 12c-1.924.75-5.772 2.25-7.87 6.75c-2.256 4.836-.525 9 0 11.25\"/><path stroke-linecap=\"round\" d=\"M21 4c.333.167 2.5.5 3 2.5c.437 1.749-.333 2.833-.5 4\"/><path d=\"M28.479 11.329a1.477 1.477 0 0 1-1.416-1.808c.27-1.287.882-3.044 2.267-4.129s3.236-1.259 4.55-1.213a1.477 1.477 0 0 1 1.417 1.807c-.27 1.288-.883 3.045-2.267 4.13s-3.236 1.258-4.551 1.213Z\"/></g>"
	},
	pear: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M16.64 12.746a8.081 8.081 0 0 1 14.72 0l3.061 6.754l3.686 6.322a9.88 9.88 0 0 1-1.652 12.063l-1.19 1.156a8.013 8.013 0 0 1-10.634.472a1 1 0 0 0-1.262 0a8.013 8.013 0 0 1-10.634-.472l-1.19-1.156a9.88 9.88 0 0 1-1.652-12.063L13.58 19.5z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M21.5 4c.667.5 2.1 1.9 2.5 3.5s.167 3.333 0 4\"/><circle cx=\"16\" cy=\"28\" r=\"2\" fill=\"currentColor\"/><circle cx=\"18\" cy=\"34\" r=\"2\" fill=\"currentColor\"/><circle cx=\"23\" cy=\"30\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"pearl-of-the-orient": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"33\" r=\"6\"/><circle cx=\"24\" cy=\"13\" r=\"3\"/><path stroke-linecap=\"round\" d=\"M24 40v4m-2-28l-2 12m6-12l2 12m-9 9l-3 7m13-7l3 7M24 4v6\"/></g>"
	},
	peas: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M27 12s7 7 7 16s-4.445 16.223-8 16c-3.556-.223-7-7-6-16s7-16 7-16m0 0s1-4.124 4-6.062S39.89 9 39 12s-4 3-5 0s4-6.5 7-6.062S44.257 11.18 44 14c-.501 5.5-2 10-2 10\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M27 12s0 8-7 16s-13.675 9.7-16 7s0-10 7-17s16-6 16-6\"/><circle cx=\"27.243\" cy=\"27.408\" r=\"2.5\" fill=\"currentColor\"/><circle cx=\"26.243\" cy=\"34.408\" r=\"2.5\" fill=\"currentColor\"/></g>"
	},
	pencil: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m31 8.999l8 8m-31 15L36 4l8 7.999l-28 28l-10 2zm23-23l8 8m-30 15l7 7m-3-4l22-22\"/>"
	},
	pennant: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 44h4M12 6V4zm0 16v22zm0 22H8zm-4 0h8M12 6v16l28-8z\"/>"
	},
	"pentagon-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"m25.23 4.958l17.63 13.743a2 2 0 0 1 .654 2.25l-7.04 19.721A2 2 0 0 1 34.59 42H13.41a2 2 0 0 1-1.884-1.328l-7.04-19.721a2 2 0 0 1 .654-2.25L22.77 4.958a2 2 0 0 1 2.46 0Z\"/>"
	},
	people: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M6 40.8V42h36v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C35.92 28 33.68 28 29.2 28H18.8c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8\"/>"
	},
	"people-bottom": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14m13-4l6 6l6-6M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8\"/>"
	},
	"people-bottom-card": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 39H4V9h15l5-5l5 5h15z\"/><circle cx=\"24\" cy=\"20\" r=\"5\"/><path d=\"M33 33c0-4.418-4.03-8-9-8s-9 3.582-9 8\"/></g>"
	},
	"people-delete": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z\"/><path stroke-linecap=\"round\" d=\"m33 31l8 8m-8 0l8-8m-14-3h-8.2c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8V42h21\"/></g>"
	},
	"people-delete-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14m23-5l-8 8m0-8l8 8M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8\"/>"
	},
	"people-download": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z\"/><path stroke-linecap=\"round\" d=\"M37 40V30m-4 6l4 4l4-4m-14-8h-8.2c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8V42h21\"/></g>"
	},
	"people-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14m25-9l-6 6l6 6M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8\"/>"
	},
	"people-minus": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z\"/><path d=\"M30 35h12z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 35h12m-15-7h-8.2c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8V42h21\"/></g>"
	},
	"people-minus-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8\"/><path d=\"M32 19h12z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 19h12\"/></g>"
	},
	"people-plus": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z\"/><path d=\"M36 29v12zm-6 6h12z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 29v12m-6-6h12m-15-7h-8.2c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8V42h21\"/></g>"
	},
	"people-plus-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8\"/><path d=\"M38 13v12zm-6 6h12z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 13v12m-6-6h12\"/></g>"
	},
	"people-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14m19-9l6 6l-6 6M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8\"/>"
	},
	"people-safe": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 9.256L24.009 4L42 9.256v10.778C42 31.362 34.75 40.419 24.003 44C13.253 40.42 6 31.36 6 20.029z\"/><circle cx=\"24\" cy=\"18\" r=\"5\" stroke-linecap=\"round\"/><path stroke-linecap=\"round\" d=\"M32 31a8 8 0 1 0-16 0\"/></g>"
	},
	"people-safe-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"11\" r=\"7\"/><path d=\"M4 41c0-8.837 8.059-16 18-16m6 4.2c0-1.067 7-3.2 7-3.2s7 2.133 7 3.2c0 8.533-7 12.8-7 12.8s-7-4.267-7-12.8\"/></g>"
	},
	"people-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z\"/><path stroke-linecap=\"round\" d=\"M27 28h-8.2c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8V42h21m13-1l-3.172-3.171M38 35a4 4 0 0 1-1.172 2.828A4 4 0 1 1 38 35\"/></g>"
	},
	"people-search-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"11\" r=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 41c0-8.837 8.059-16 18-16\"/><circle cx=\"35\" cy=\"34\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m40 38l4 3\"/></g>"
	},
	"people-speak": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M33 8s2.25 4.5 0 10m7-14s4.5 8.1 0 18M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8\"/>"
	},
	"people-top": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14m13 0l6-6l6 6M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8\"/>"
	},
	"people-top-card": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 8H4v30h15l5 5l5-5h15z\"/><circle cx=\"24\" cy=\"19\" r=\"5\"/><path d=\"M33 32c0-4.418-4.03-8-9-8s-9 3.582-9 8\"/></g>"
	},
	"people-unknown": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14\"/><path d=\"M32 22h12z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 22h12\"/><path d=\"M32 16h12z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 16h12\"/><path d=\"M35 13v12z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M35 13v12\"/><path d=\"M41 13v12z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M41 13v12M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8\"/></g>"
	},
	"people-upload": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z\"/><path stroke-linecap=\"round\" d=\"M37 30v10m4-6l-4-4l-4 4m-6-6h-8.2c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8V42h21\"/></g>"
	},
	peoples: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M32.608 7A7 7 0 0 1 36 13a7 7 0 0 1-3.392 6M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8M44 42v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496\"/>"
	},
	"peoples-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M12 7.255A6.99 6.99 0 0 0 9 13a7 7 0 0 0 3.392 6M36 7.255A6.99 6.99 0 0 1 39 13a6.99 6.99 0 0 1-3 5.746M12 40v2h24v-2c0-3.727 0-5.591-.609-7.062a8 8 0 0 0-4.33-4.329C29.592 28 27.728 28 24 28s-5.591 0-7.061.609a8 8 0 0 0-4.33 4.33C12 34.409 12 36.273 12 40m32 2v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496M4 42v-1.2c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496\"/>"
	},
	percentage: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"11\" cy=\"11\" r=\"5\"/><circle cx=\"37\" cy=\"37\" r=\"5\"/><path d=\"M42 6L6 42\"/></g>"
	},
	performance: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20a19.94 19.94 0 0 0-2.358-9.43\"/><path d=\"M35 10c2.21 0 4-1.343 4-3s-1.79-3-4-3s-4 1.343-4 3s1.79 3 4 3ZM24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z\"/><path stroke-linecap=\"round\" d=\"M31 6.5V24\"/></g>"
	},
	perfume: {
		body: "<g fill=\"none\"><rect width=\"16\" height=\"10\" x=\"16\" y=\"4\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"3\"/><rect width=\"36\" height=\"24\" x=\"6\" y=\"20\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"12\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 33c3.042-3.867 12-3 18-1s14 5 18 0\"/><path fill=\"currentColor\" d=\"M25 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0\"/></g>"
	},
	"perfumer-bottle": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"38\" height=\"24\" x=\"5\" y=\"17\" rx=\"2\"/><path d=\"M14 7h20v10H14zm4 18h12v8H18zm12 4h13M5 29h13M5 24v10m38-10v10\"/></g>"
	},
	period: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"square\" stroke-width=\"4\" d=\"M8 4q6.003 5.006 6.003 10.005c0 5-4.003 7.239-6.003 9.995s-2.995 5.931-2.995 10.003Q5.005 38.075 8 44M40.003 4Q34 9.006 34 14.005c0 5 4.004 7.239 6.004 9.995s2.995 5.931 2.995 10.003q0 4.072-2.995 9.997m-26-14.817q3.783-.363 6.281 1.08c2.5 1.445 3.707 3.097 3.715 4.694q.009 1.598 0 9.043m10.004-14.817q-3.782-.363-6.281 1.08c-2.5 1.445-3.707 3.097-3.715 4.694\"/>"
	},
	permissions: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M20 10H6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-2.5\"/><path d=\"M10 23h8m-8 8h24\"/><circle cx=\"34\" cy=\"16\" r=\"6\" stroke-linejoin=\"round\"/><path stroke-linejoin=\"round\" d=\"M44 28.419C42.047 24.602 38 22 34 22s-5.993 1.133-8.05 3\"/></g>"
	},
	"personal-collection": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"11\" r=\"7\"/><path d=\"M4 41c0-8.837 8.059-16 18-16m9.85 3C29.724 28 28 30.009 28 32.486c0 4.487 4.55 8.565 7 9.514c2.45-.949 7-5.027 7-9.514C42 30.01 40.276 28 38.15 28c-1.302 0-2.453.753-3.15 1.906C34.303 28.753 33.152 28 31.85 28\"/></g>"
	},
	"personal-privacy": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"11\" r=\"7\"/><path d=\"M4 41c0-8.837 8.059-16 18-16m5 6h14v10H27zm10 0v-3a3 3 0 1 0-6 0v3\"/></g>"
	},
	perspective: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 28v8l-13 2.6M44 28L4 32m40-4v-8M4 32v12l13-2.6M4 32V16m40 4v-8L31 9.4M44 20L4 16m0 0V4l13 2.6m14 2.8v29.2m0-29.2L17 6.6m14 32l-14 2.8m0-34.8v34.8\"/>"
	},
	pesticide: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M15 11.368V4h18v7.368l6 6.119V42a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V17.486z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 23h8v12H9\"/><path stroke-linecap=\"round\" d=\"M15 11.5h18M31 23v6m0 5v1\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 38V20\"/></g>"
	},
	petrol: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 42V6h-3l-9 10H12l-6 6v20z\"/><path stroke-linecap=\"round\" d=\"M12 16L22 6h18M20.643 28.889c1.431-1.88 2.535-4.479 3.131-5.889c1.044 1.41 3.31 4.948 4.026 6.829c.894 2.35-1.342 5.171-4.026 5.171s-4.92-3.76-3.131-6.111M11 8l-7 7\"/></g>"
	},
	phone: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M8 30h32v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2zm32 0V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v24\"/><path stroke-linecap=\"round\" d=\"M22 37h4\"/></g>"
	},
	"phone-booth": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 34h20v9H14zm0-30h20v6H14zm0 6v24m6-24v24m2-18v4m10 6H14m20-16v24M4 44h40\"/>"
	},
	"phone-call": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M41.78 20.607a13.1 13.1 0 0 0-.25-5.102a12.94 12.94 0 0 0-3.415-6.018a12.94 12.94 0 0 0-6.018-3.416a13.1 13.1 0 0 0-5.102-.249m7.195 13.982a5.99 5.99 0 0 0-1.692-5.132a5.99 5.99 0 0 0-5.132-1.692\"/><path d=\"M14.376 8.794a2 2 0 0 1 1.748 1.03l2.447 4.406a2 2 0 0 1 .04 1.866l-2.357 4.713s.683 3.512 3.541 6.37c2.859 2.858 6.359 3.53 6.359 3.53l4.712-2.357a2 2 0 0 1 1.867.041l4.42 2.457a2 2 0 0 1 1.027 1.748v5.074c0 2.583-2.4 4.45-4.848 3.623c-5.028-1.696-12.832-4.927-17.78-9.873c-4.946-4.947-8.176-12.752-9.873-17.78c-.826-2.448 1.04-4.848 3.624-4.848z\"/></g>"
	},
	"phone-incoming": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M15.376 9.794a2 2 0 0 1 1.748 1.03l2.447 4.406a2 2 0 0 1 .04 1.866l-2.357 4.713s.683 3.512 3.542 6.37s6.358 3.53 6.358 3.53l4.713-2.357a2 2 0 0 1 1.866.041l4.42 2.457a2 2 0 0 1 1.027 1.748v5.074c0 2.583-2.4 4.45-4.847 3.623c-5.028-1.696-12.833-4.927-17.78-9.873c-4.947-4.947-8.177-12.752-9.874-17.78c-.826-2.448 1.04-4.848 3.624-4.848z\"/><path stroke-linecap=\"round\" d=\"M29 20L42 7.5M42 20H29V7\"/></g>"
	},
	"phone-incoming-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M13.376 9.794a2 2 0 0 1 1.748 1.03l2.447 4.406a2 2 0 0 1 .04 1.866l-2.357 4.713s.683 3.512 3.542 6.37s6.358 3.53 6.358 3.53l4.712-2.357a2 2 0 0 1 1.867.041l4.42 2.457a2 2 0 0 1 1.027 1.748v5.074c0 2.583-2.4 4.45-4.848 3.623c-5.028-1.696-12.832-4.927-17.78-9.873c-4.946-4.947-8.176-12.752-9.873-17.78c-.826-2.448 1.04-4.848 3.624-4.848z\"/><path stroke-linecap=\"round\" d=\"m34.24 6l-8 8l8 8m8-7.992h-16\"/></g>"
	},
	"phone-missed": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M15.996 8.686a2 2 0 0 1 1.749 1.03l2.446 4.406a2 2 0 0 1 .04 1.865l-2.356 4.714s.683 3.511 3.541 6.37c2.859 2.858 6.358 3.53 6.358 3.53l4.713-2.357a2 2 0 0 1 1.866.04l4.42 2.458A2 2 0 0 1 39.8 32.49v5.073c0 2.584-2.4 4.45-4.848 3.624c-5.028-1.697-12.833-4.927-17.78-9.874c-4.946-4.947-8.177-12.751-9.873-17.78c-.826-2.447 1.04-4.847 3.624-4.847z\"/><path stroke-linecap=\"round\" d=\"M38.735 9.286L30.25 17.77m0-8.484l8.485 8.485\"/></g>"
	},
	"phone-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19.444 21.5c-.427-1.067-.57-1.8-.57-1.8l2.358-4.713a2 2 0 0 0-.04-1.865l-2.447-4.407a2 2 0 0 0-1.749-1.03h-5.072c-2.584 0-4.45 2.403-3.623 4.851c1.211 3.59 3.204 8.595 6.046 12.964m12.33 3.412c1.227.521 2.097.688 2.097.688l4.713-2.356a2 2 0 0 1 1.866.04l4.42 2.458A2 2 0 0 1 40.8 31.49v5.073c0 2.584-2.404 4.449-4.852 3.623c-3.747-1.265-9.035-3.381-13.533-6.424M40 8L8 40\"/>"
	},
	"phone-one": {
		body: "<g fill=\"none\"><rect width=\"38\" height=\"38\" x=\"5\" y=\"5\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"3\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M11 12h8v24h-8zm14 0h12v6H25z\"/><circle cx=\"25\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><circle cx=\"25\" cy=\"30\" r=\"2\" fill=\"currentColor\"/><circle cx=\"25\" cy=\"36\" r=\"2\" fill=\"currentColor\"/><circle cx=\"31\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><circle cx=\"31\" cy=\"30\" r=\"2\" fill=\"currentColor\"/><circle cx=\"31\" cy=\"36\" r=\"2\" fill=\"currentColor\"/><circle cx=\"37\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><circle cx=\"37\" cy=\"30\" r=\"2\" fill=\"currentColor\"/><circle cx=\"37\" cy=\"36\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"phone-outgoing": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M28 20L41 7.5M28 7h13v13\"/><path d=\"M14.376 9.794a2 2 0 0 1 1.748 1.03l2.447 4.406a2 2 0 0 1 .04 1.866l-2.357 4.713s.683 3.512 3.542 6.37s6.358 3.53 6.358 3.53l4.713-2.357a2 2 0 0 1 1.866.041l4.42 2.457a2 2 0 0 1 1.027 1.748v5.074c0 2.583-2.4 4.45-4.847 3.623c-5.028-1.696-12.833-4.927-17.78-9.873c-4.947-4.947-8.177-12.752-9.874-17.78c-.826-2.448 1.04-4.848 3.624-4.848z\"/></g>"
	},
	"phone-outgoing-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M14.376 9.794a2 2 0 0 1 1.748 1.03l2.447 4.406a2 2 0 0 1 .04 1.866l-2.357 4.713s.683 3.512 3.541 6.37c2.859 2.858 6.359 3.53 6.359 3.53l4.712-2.357a2 2 0 0 1 1.867.041l4.42 2.457a2 2 0 0 1 1.027 1.748v5.074c0 2.583-2.4 4.45-4.848 3.623c-5.028-1.696-12.832-4.927-17.78-9.873c-4.946-4.947-8.176-12.752-9.873-17.78c-.826-2.448 1.04-4.848 3.624-4.848z\"/><path stroke-linecap=\"round\" d=\"m35 6l8 8l-8 8m-8-7.992h16\"/></g>"
	},
	"phone-telephone": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16.996 7.686a2 2 0 0 1 1.749 1.03l2.446 4.406a2 2 0 0 1 .04 1.865l-2.356 4.714s.683 3.511 3.541 6.37c2.859 2.858 6.358 3.53 6.358 3.53l4.713-2.357a2 2 0 0 1 1.866.04l4.42 2.458A2 2 0 0 1 40.8 31.49v5.073c0 2.584-2.4 4.45-4.848 3.624c-5.028-1.697-12.833-4.927-17.78-9.874c-4.946-4.947-8.177-12.751-9.873-17.78c-.826-2.447 1.04-4.847 3.624-4.847z\"/>"
	},
	"phone-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\"><path stroke-width=\"4\" d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linejoin=\"round\" stroke-width=\"3.918\" d=\"M19.44 14c.444 0 .854.241 1.07.63l1.496 2.695c.196.353.205.78.024 1.14L21 21s.252 2.252 2 4s4 2 4 2l2.527-1.038c.36-.18.788-.17 1.141.025l2.703 1.503c.388.216.629.625.629 1.07v3.103c0 1.58-1.468 2.721-2.965 2.216c-3.076-1.038-7.85-3.013-10.875-6.04c-3.026-3.025-5.001-7.798-6.039-10.874c-.505-1.497.636-2.965 2.216-2.965z\"/></g>"
	},
	"phone-video-call": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M14.376 9.794a2 2 0 0 1 1.748 1.03l2.447 4.406a2 2 0 0 1 .04 1.865l-2.357 4.714s.683 3.511 3.541 6.37c2.859 2.858 6.358 3.53 6.358 3.53l4.714-2.357a2 2 0 0 1 1.866.04l4.42 2.458a2 2 0 0 1 1.027 1.748v5.073c0 2.584-2.4 4.45-4.848 3.624c-5.028-1.696-12.832-4.927-17.78-9.873c-4.946-4.947-8.176-12.752-9.873-17.78c-.826-2.448 1.04-4.848 3.624-4.848z\"/><path stroke-linecap=\"round\" d=\"M39 15H27V5h12v3l5-2v8l-5-2z\"/></g>"
	},
	phonograph: {
		body: "<g fill=\"none\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"3\"/><circle cx=\"24\" cy=\"25\" r=\"11\" stroke=\"currentColor\" stroke-width=\"4\"/><rect width=\"4\" height=\"4\" x=\"22\" y=\"23\" fill=\"currentColor\" rx=\"2\"/><rect width=\"4\" height=\"4\" x=\"34\" y=\"34\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m28 20l8-8\"/></g>"
	},
	photograph: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"bevel\" d=\"M34 13V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h15\"/><path stroke-linejoin=\"round\" d=\"M28 42c-7-4-3.668-9.774-5.023-11c-1.652-1.495-2.59-2.888-2.977-5c-.388-2.112 1.07-4.526 2.977-3C24.885 24.526 28 31 28 31l2-2l1-11s-1-4-1-6s4 1 6 4c0 10.442 1.5 20 6 28\"/><path stroke-linejoin=\"round\" d=\"M25 17.4L21 11l-8 16h7M6 22l6-11l5 7\"/></g>"
	},
	piano: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 8h40v16H4zm0 16h40v16H4zm6 0v8m6-8v8m10-8v8m6-8v8m6-8v8\"/>"
	},
	pic: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M5 10a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M14.5 18a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3\" clip-rule=\"evenodd\"/><path d=\"m15 24l5 4l6-7l17 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4z\"/></g>"
	},
	"pic-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m9 37l8-9l16 13\"/><circle cx=\"18\" cy=\"17\" r=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m24 33l8-10l10 8\"/></g>"
	},
	picture: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3\"/><path d=\"M18 23a5 5 0 1 0 0-10a5 5 0 0 0 0 10m9.79 3.22a2 2 0 0 1 3.243.053l8.775 12.583c.924 1.326-.025 3.144-1.64 3.144H16z\"/></g>"
	},
	"picture-album": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"30\" height=\"30\" x=\"6\" y=\"6\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M42 12v27a3 3 0 0 1-3 3H12M6 25l7.656-6.806a2 2 0 0 1 2.674.015L26 27\"/><path stroke-linecap=\"round\" d=\"m22 23l4.785-3.988a2 2 0 0 1 2.48-.063L36 24M6 19v8m30-8v8\"/></g>"
	},
	"picture-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3\"/><path d=\"M18 23a5 5 0 1 0 0-10a5 5 0 0 0 0 10m24 13L31 26l-10 9l-7-6l-8 6\"/></g>"
	},
	pie: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M24 4a20 20 0 0 1 7.363 1.404L24 24z\"/></g>"
	},
	"pie-five": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M24 4a20 20 0 1 1-13.69 34.58L24 24z\"/></g>"
	},
	"pie-four": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M24 4a20 20 0 0 1 0 40z\"/></g>"
	},
	"pie-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M24 4a20 20 0 0 1 14.58 6.31L24 24z\"/></g>"
	},
	"pie-seven": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M24 4a20 20 0 1 1-14.58 6.31L24 24z\"/></g>"
	},
	"pie-six": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M24 4A20 20 0 1 1 4 24h20z\"/></g>"
	},
	"pie-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M24 4a20 20 0 0 1 14.58 33.69L24 24z\"/></g>"
	},
	"pie-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M24 4a20 20 0 0 1 20 20H24z\"/></g>"
	},
	pig: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14.054 9.644a9 9 0 0 1 1.414 1.845a15.95 15.95 0 0 1 8.483-2.426c3.146 0 6.08.906 8.555 2.471c.4-.691.886-1.337 1.44-1.89c2.521-2.516 6.946-3.624 8.991-1.583c2.045 2.04.934 6.456-1.587 8.972a9.4 9.4 0 0 1-2.638 1.824a15.9 15.9 0 0 1 1.24 6.175c0 8.819-7.164 15.968-16 15.968C15.113 41 7.95 33.85 7.95 25.032c0-2.204.447-4.304 1.256-6.214a9.3 9.3 0 0 1-2.556-1.785c-2.522-2.516-3.632-6.932-1.587-8.972s6.47-.933 8.99 1.583Z\"/><ellipse cx=\"24\" cy=\"29\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"8\" ry=\"7\"/><circle cx=\"17\" cy=\"18\" r=\"2\" fill=\"currentColor\"/><circle cx=\"21\" cy=\"29\" r=\"2\" fill=\"currentColor\"/><circle cx=\"31\" cy=\"18\" r=\"2\" fill=\"currentColor\"/><circle cx=\"27\" cy=\"29\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"pig-zodiac": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M13 27c2.073-.542 6.014-3.167 7-4v-7l-6-2c-.41-1.62-1.685-4.889-3-6l-1.448 4.514C6.95 13.67 2.7 18.889 5 25c1 2 3.077 9 6 14m13-25.794c4.391-.727 13.525.072 14.93 9.08c.292 1.332-.176 7.723-4.391 10.629C33.689 33.5 33 36 33 39\"/><path d=\"M26 40a4 4 0 0 0-8 0\"/><path stroke-linejoin=\"round\" d=\"M39 24c.5 1 2.699 1.67 4.228.102c.89-.913 1.619-3.768-.63-5.102\"/></g>"
	},
	pigeon: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 26c-1.04-1.793-2.15-5.551 2.008-10.244c1.213-1.141 2.806-2.64 5.716-3.423C24.842 10.867 26.401 8.52 24.323 5C25.882 5.978 29 9.693 29 16.733\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16.253 27.93C8 23.57 4.51 30.195 4 33.755c4 0 8.679 2.911 10.721 5.823c3.676 4.66 9.36 3.56 11.742 2.427c7.352-3.883 9.87-3.56 10.21-2.912c.41 3.106 1.532 3.883 2.043 3.883c3.676.388 4.935-4.045 5.105-6.31c.817-9.319-1.361-9.707-2.552-8.736c-4.902 5.824-7.829 6.957-8.68 6.795c-3.675-.777-3.233-2.265-2.552-2.913C36.572 26.377 36.504 14.34 35.653 9c-2.45 5.825-6.467 8.251-8.169 8.737c-10.21 2.718-11.742 7.928-11.231 10.193\"/><circle cx=\"12\" cy=\"31.412\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	pill: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5.615 22.585a3 3 0 0 1 0-4.242L18.343 5.615a3 3 0 0 1 4.243 0l19.799 19.799a3 3 0 0 1 0 4.242L29.657 42.384a3 3 0 0 1-4.243 0z\"/><circle cx=\"14.808\" cy=\"20.465\" r=\"2\" fill=\"currentColor\" transform=\"rotate(-45 14.808 20.465)\"/><circle cx=\"23.293\" cy=\"28.949\" r=\"2\" fill=\"currentColor\" transform=\"rotate(-45 23.293 28.95)\"/><circle cx=\"19.05\" cy=\"24.707\" r=\"2\" fill=\"currentColor\" transform=\"rotate(-45 19.05 24.707)\"/><circle cx=\"27.536\" cy=\"33.193\" r=\"2\" fill=\"currentColor\" transform=\"rotate(-45 27.536 33.193)\"/><circle cx=\"20.464\" cy=\"14.807\" r=\"2\" fill=\"currentColor\" transform=\"rotate(-45 20.464 14.807)\"/><circle cx=\"28.95\" cy=\"23.293\" r=\"2\" fill=\"currentColor\" transform=\"rotate(-45 28.95 23.293)\"/><circle cx=\"24.707\" cy=\"19.051\" r=\"2\" fill=\"currentColor\" transform=\"rotate(-45 24.707 19.05)\"/><circle cx=\"33.193\" cy=\"27.535\" r=\"2\" fill=\"currentColor\" transform=\"rotate(-45 33.193 27.535)\"/></g>"
	},
	pills: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"m9.973 22.062l7.278-6.106l7.277-6.107c4.442-3.727 11.065-3.148 14.793 1.294s3.148 11.066-1.294 14.793l-7.278 6.107l-7.277 6.106c-4.443 3.728-11.066 3.148-14.793-1.294c-3.728-4.442-3.148-11.065 1.294-14.793Z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m19.689 21.861l5.737 6.838\"/></g>"
	},
	pin: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10.696 17.504c2.639-2.638 5.774-2.565 9.182-.696L32.62 9.745l-.721-4.958L43.213 16.1l-4.947-.71l-7.074 12.73c1.783 3.638 1.942 6.544-.697 9.182l-7.778-7.778L6.443 41.556l11.995-16.31z\"/>"
	},
	pineapple: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M20.5 14.5C20 14 20 13.15 20 11c0-3.866 4-7 4-7s3 3.134 3 7c0 1.922 0 3-.5 3.5\"/><path d=\"M17 17c-1.21-2.918-4.138-6.567-6-8c5.411-1.014 9.774 2.3 12 5m7 2c1.452-2.697 4.304-5.695 6-7c-5.643-1.058-9.871 2.261-12 5\"/><path d=\"M16.725 17.374A39 39 0 0 0 15 19c-4.19 4.19-4.898 11.864-4.997 15.28c-.034 1.15-.026 2.322.409 3.387C10.879 38.81 11.875 40.406 14 42c4 3 16 3 20 0c2.116-1.587 3.112-3.175 3.581-4.318c.441-1.074.45-2.258.415-3.419c-.1-3.425-.812-11.08-4.996-15.263q-.9-.898-1.726-1.626c-4.258-3.767-10.291-3.767-14.55 0M32 18L11 29m5-11l21 11m-2 12L11 27m26 0L13 41\"/></g>"
	},
	pinwheel: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M21 4v17H11zm6 40V27h10zm0-33l17 10H27zm-6 26L4 27h17z\"/>"
	},
	pisces: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 24h40M10 7s6 9.82 6 17s-6 17-6 17M38 7s-6 9.96-6 17s6 17 6 17\"/>"
	},
	"pivot-table": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M42 4H6a2 2 0 0 0-2 2l.001 36a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.009 34.008H33.5v-14\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24.5 38.5L23 37l-3-3l3-3l1.5-1.5m4.5-5l1.5-1.5l3-3l3 3l1.5 1.5\"/><path stroke-linecap=\"round\" d=\"M14 4v40M4 14.038L44 14\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 4h20M8 44h20\"/><path stroke-linecap=\"round\" d=\"M44 8v10M4 8v10\"/></g>"
	},
	plan: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M5 19h38v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm0-9a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v9H5z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m16 31l6 6l12-12\"/><path stroke-linecap=\"round\" d=\"M16 5v8m16-8v8\"/></g>"
	},
	planet: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16Z\"/><path stroke-linecap=\"round\" d=\"M37.564 15.51c4.22.368 7.115 1.662 7.686 3.796c1.144 4.268-7.443 10.277-19.18 13.421S3.893 34.962 2.75 30.694c-.6-2.236 1.472-4.95 5.269-7.48\"/></g>"
	},
	"plastic-surgery": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" stroke-width=\"4.667\" d=\"M19.036 44q-1.47-4.794-4.435-7.147c-2.965-2.353-7.676-.89-9.416-3.318s1.219-6.892 2.257-9.526s-3.98-3.566-3.394-4.313q.585-.748 7.609-4.316Q13.652 4 26.398 4C39.144 4 44 14.806 44 21.679s-5.88 14.277-14.256 15.874q-1.123 1.636 3.24 6.447\"/><path stroke-width=\"4\" d=\"M21.022 4.59q-1.782 7.843 0 12.205c1.782 4.362 9.659 3.692 9.659 7.761c0 4.07-4.59 4.852-3.978 7.676q.613 2.823 2.725 7.324M17 30.55c.235 0 2.4-.138 3.959-1.75q1.558-1.614 1.558-3.8\"/></g>"
	},
	platte: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c5.96 0 2.336-8.864 6-13c3.126-3.53 14-1.914 14-7c0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20Z\"/><path d=\"M28 17a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-12 4a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm1 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z\"/></g>"
	},
	play: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path d=\"M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z\"/></g>"
	},
	"play-basketball": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M32 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"m23 40l8.11-2.06c.78-.19 1.02-1.19.42-1.72L23 29l4-8l-10.41-3.74c-.5-.18-.9-.54-1.13-1.02L11 8\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"m23 29l-6.97 8.79c-.21.25-.47.45-.77.57L5 42m22-21l9.9 2.79c.47.14.88.44 1.14.85L42 31\"/><path fill=\"currentColor\" d=\"M18 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/></g>"
	},
	"play-cycle": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 25c0-6.65 5.396-12 12-12h28\"/><path d=\"m38 7l6 6l-6 6m6 4c0 6.65-5.396 12-12 12H4\"/><path d=\"m10 41l-6-6l6-6\"/></g>"
	},
	"play-once": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M43.823 25.23a14 14 0 0 1-2.837 6.448A13.98 13.98 0 0 1 30 37H16C9.397 37 4 31.679 4 25c0-6.65 5.396-12 12-12h28\"/><path d=\"m38 7l6 6l-6 6m-14 0v12m0-12l-3 3l-1.5 1.5\"/></g>"
	},
	"play-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15 24V11.876l10.5 6.062L36 24l-10.5 6.062L15 36.124z\"/>"
	},
	"play-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linecap=\"round\" rx=\"3\"/><path d=\"M18.5 24v-7.794l6.75 3.897L32 24l-6.75 3.897l-6.75 3.897z\"/></g>"
	},
	"play-volleyball": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M29 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path fill=\"currentColor\" d=\"M41 24a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"m16 24l-2.27 11.26a2 2 0 0 1-2.81 1.5L4 34m34-4L23.76 19.07c-.77-.57-1.83-.51-2.54.13l-4.84 4.43a.996.996 0 0 0 .09 1.55L26 32.15c.72.53 1.01 1.48.69 2.32L23.12 44\"/></g>"
	},
	"play-wrong": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-11 9l8 8m0-8l-8 8\"/><path d=\"M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z\"/></g>"
	},
	"playback-progress": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 5h40v26H4z\"/><path d=\"m22 14l6 4l-6 4zM11 40H6m11 0h25m-25 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0\"/></g>"
	},
	plug: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 14h36v10q-6 12-18 12T6 24z\"/><path stroke-linecap=\"round\" d=\"m33 34l-1 10H16l-1-10m7-10h4M16 4v8m16-8v8\"/></g>"
	},
	"plug-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"24\" height=\"24\" x=\"12\" y=\"12\" rx=\"3\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 36v5a3 3 0 0 1-3 3H8m12-32V4m8 8V4m-6 20h4\"/></g>"
	},
	plus: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m24.06 10l-.036 28M10 24h28\"/>"
	},
	"plus-cross": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 4H18v14H4v12h14v14h12V30h14V18H30z\"/>"
	},
	point: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 41C13.5 38.25 8.001 30 5 25s3.313-9.687 7-6l4 4V7.5a3.5 3.5 0 1 1 7 0V16a3.5 3.5 0 1 1 7 0v1.5a3.5 3.5 0 0 1 7-.002V22.5a3.5 3.5 0 0 1 7 0v8.744c0 1.155-.262 2.3-.913 3.254C41.917 36.212 39.602 39.035 36 41c-5.5 3-11.5 2.75-17 0\"/>"
	},
	"point-out": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M37 44H17.476a.26.26 0 0 1-.218-.121L7.86 28.727a4.095 4.095 0 1 1 7.011-4.23l2.462 4.194V7.942a3.942 3.942 0 0 1 7.884 0v9.329c0 .585.465 1.066 1.05 1.085l11.621.388A2.185 2.185 0 0 1 40 20.928V41a3 3 0 0 1-3 3\"/>"
	},
	"pokeball-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><circle cx=\"24\" cy=\"24\" r=\"6\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 24h14M4 24h14\"/><circle cx=\"24\" cy=\"24\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	poker: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 4H12v40h30z\"/><path stroke-linecap=\"round\" d=\"M4 11.79L12 10v34z\" clip-rule=\"evenodd\"/><path d=\"m27 18l-5 6l5 6l5-6z\"/><path stroke-linecap=\"round\" d=\"M18 10v4m18 20v4\"/></g>"
	},
	popcorn: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33.696 40.868L39 17H7l5.304 23.868c.334 1.501.5 2.252 1.049 2.692s1.317.44 2.856.44H29.79c1.539 0 2.308 0 2.856-.44c.549-.44.715-1.19 1.05-2.692M27 44l1-27m-9 27l-1-27m13 27H15m16-27H15m-4 0s-1-3 .5-4.5s4.5-1 4.5-1s0-3 2-4s5 .5 5 .5s2-3.357 5-2.5s3 4.5 3 4.5s2.5 0 4 2s0 5 0 5\"/>"
	},
	"popcorn-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M7 16h34l-7 28H14zm13 0v28m8-28v28m5-35a4 4 0 0 0-2.646 7h5.292A4 4 0 0 0 33 9m-9 0a4 4 0 0 0-2.646 7h5.292A4 4 0 0 0 24 9m-9 0a4 4 0 0 0-2.646 7h5.292A4 4 0 0 0 15 9\"/><path d=\"M22.874 9a4 4 0 1 0-7.748 0m17.748 0a4 4 0 1 0-7.748 0M16 16h16M16 44h16\"/></g>"
	},
	"positive-dynamics": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M17 33.95v8.16M9 40v2.056M25 27v15.071m8-23.11v23.127m8-31.118v31.113M7 33L34 6M23.5 6H34\"/>"
	},
	pot: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m34 28l10-4M4 28h30l-.439 3.802A7 7 0 0 1 26.607 38H11.393a7 7 0 0 1-6.954-6.198zm15-18v10m-8-8v6m16-6v6\"/>"
	},
	potentiometer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><ellipse cx=\"24\" cy=\"20\" rx=\"20\" ry=\"8\"/><path d=\"M24 4v15m-8 15v8m8-8v10m8-10v8M4 20v12.364s1.11 2.397 4.5 4.665M44 20v12.364s-1.11 2.397-4.5 4.665\"/></g>"
	},
	pound: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 16h36M16 6v36M32 6v36M6 32h36\"/>"
	},
	"pound-sign": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M36 17H12m24 14H12m5 5V12m14 24V12\"/>"
	},
	"pouting-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 29c5 0 7 4 7 4H17s2-4 7-4m9-11l-4 2m-14-2l4 2\"/></g>"
	},
	powder: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 40V20a3 3 0 0 0-3-3h-5.285c-1.541 0-2.892 1.243-3.924 2.388C30.633 20.674 28.377 22 24 22s-6.633-1.326-7.791-2.612C15.177 18.243 13.826 17 12.285 17H7a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3Z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33 17c0 2.761-4.03 5-9 5s-9-2.239-9-5\"/><ellipse cx=\"24\" cy=\"10\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"9\" ry=\"5\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33 17v-7m-18 7v-7\"/><ellipse cx=\"27\" cy=\"10\" fill=\"currentColor\" rx=\"2\" ry=\"1\"/><ellipse cx=\"21\" cy=\"10\" fill=\"currentColor\" rx=\"2\" ry=\"1\"/></g>"
	},
	power: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14.5 8a19 19 0 0 0-4.75 3.84C6.794 15.146 5 19.49 5 24.246C5 34.603 13.507 43 24 43s19-8.397 19-18.754c0-4.757-1.794-9.1-4.75-12.406A19 19 0 0 0 33.5 8M24 4v20\"/>"
	},
	"power-supply": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32.297 6H15.704a1 1 0 0 0-.942.662l-6.67 18.581a1 1 0 0 0-.04.525l1.793 9.42a1 1 0 0 0 .982.812h26.346a1 1 0 0 0 .982-.813l1.794-9.419a1 1 0 0 0-.041-.525l-6.67-18.58A1 1 0 0 0 32.297 6M24 36v8m0-32v6m-7.5 5.402l3 5.196m12-5.196l-3 5.196\"/>"
	},
	"power-supply-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33 34H15L8 17.75L10 9h28l2 8.75zM18 4v5m12-5v5m-6 25v10h16v-7.368M18 21h12\"/>"
	},
	powerpoint: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19 15h10v10H19z\"/><path stroke-linecap=\"round\" d=\"M19 33V15\"/></g>"
	},
	ppt: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 8h40\"/><path d=\"M8 8h32v26H8z\" clip-rule=\"evenodd\"/><path d=\"m22 16l5 5l-5 5m-6 16l8-8l8 8\"/></g>"
	},
	"pregnant-women": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M33 4v7.519q10.968 6.291 9.906 16.742T33 44M13.772 4q-3.207.555-4.616 3.758C7.746 10.96 5 21.964 5 23.726s3.568 6.509 12.052 13.71c3.931 3.336 6.255 3.166 7.513.928s-.407-3.674-2.515-5.327c-3.863-3.029-8.948-7.822-8.948-9.926q0-2.104 3.95-12.824\"/><path d=\"M8.201 28.94a95 95 0 0 0 2.8 15M33 19.944q2.32 1.542 3 4.012q.68 2.472.396 4.506\"/></g>"
	},
	preschool: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M7 35h34a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2Zm7-21v14m20-14v14M24 17v8m-4-4h8\"/><path stroke-linejoin=\"round\" d=\"M4 41h40\"/></g>"
	},
	prescription: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M8 8a2 2 0 0 1 2-2h17v12h13v22a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m27 6l13 12M27.024 6v12.082H40\"/><path stroke-linecap=\"round\" d=\"M14 30h12m-6-6v12\"/></g>"
	},
	press: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22 43c-4.726-1.767-8.667-7.815-10.64-11.357c-.852-1.53-.403-3.408.964-4.502a3.83 3.83 0 0 1 5.1.283L19 29V17.5a2.5 2.5 0 0 1 5 0v6a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1 5 0v7.868c0 1.07-.265 2.128-.882 3.003C37.095 39.82 35.256 42.034 33 43c-3.5 1.5-6.63 1.634-11 0m7-31a8 8 0 1 0-15.748 2m0 0q.133.515.33 1z\"/>"
	},
	"preview-close": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 16c.635 1.22 1.596 2.35 2.823 3.355C12.26 22.173 17.779 24 24 24s11.739-1.827 15.177-4.645C40.404 18.35 41.365 17.22 42 16m-13.022 8l2.07 7.727m6.306-10.373l5.656 5.656M5 27.01l5.657-5.657m6.271 10.375L18.998 24\"/>"
	},
	"preview-close-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9.858 18C6.238 21 4 24 4 24s8.954 12 20 12c1.37 0 2.708-.185 4-.508M20.032 12.5c1.282-.318 2.61-.5 3.968-.5c11.046 0 20 12 20 12s-2.239 3-5.858 6m-17.828-9.379a5 5 0 0 0 7.186 6.95M42 42L6 6\"/>"
	},
	"preview-open": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 36c11.046 0 20-12 20-12s-8.954-12-20-12S4 24 4 24s8.954 12 20 12Z\"/><path d=\"M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/></g>"
	},
	printer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M37 32H11v12h26z\"/><path stroke-linecap=\"round\" d=\"M4 20h40v18h-6.983v-6H10.98v6H4z\" clip-rule=\"evenodd\"/><path d=\"M38 4H10v16h28z\"/></g>"
	},
	"printer-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M32 33h10a2 2 0 0 0 2-2V15a2 2 0 0 0-2-2H32M16 33H6a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2h10\"/><path d=\"M12 13v6h24v-6m-20 0V5h16v8M16 29v14h16V29m-10 6h4m-13-8h22\"/></g>"
	},
	"printer-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M38 20V8a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v12\"/><rect width=\"36\" height=\"22\" x=\"6\" y=\"20\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20 34h15v8H20zm-8-8h3\"/></g>"
	},
	prison: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M6 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4M6 7h14m8 15H6v22h22m-12 0V13m-6 9v-9m3-9v3m14 6v3m8-3v3m8-3v3\"/><path stroke-linejoin=\"round\" d=\"M43 44V16H27v28z\"/><path d=\"M35 34v10m-4 0h8\"/></g>"
	},
	"process-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 40h10M4 32h20m-2 8h5m10 0h7m-9-8h9m-12-8h12m-28 0h6M4 24h2m-2-8h4M4 8h7l8 8h25M22 8h22\"/>"
	},
	projector: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 16h6v16H4V16h20M6 38v-6h6v6zm36 0v-6h-6v6zM10 24h8\"/><circle cx=\"31\" cy=\"16\" r=\"7\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><circle cx=\"31\" cy=\"16\" r=\"3\" fill=\"currentColor\"/></g>"
	},
	"projector-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M21 21V10H10v11\"/><rect width=\"40\" height=\"16\" x=\"4\" y=\"21\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"2\"/><rect width=\"4\" height=\"4\" x=\"14\" y=\"27\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M28 29h8\"/></g>"
	},
	"projector-three": {
		body: "<g fill=\"none\"><path d=\"M6 38v-6h36v6h-6v-6H12v6z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 38v-6h-6v6zM6 38v-6h6v6zm18-22H4v16h40V16h-6m-28 8h8\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M31 23a7 7 0 1 0 0-14a7 7 0 0 0 0 14\"/><path fill=\"currentColor\" d=\"M31 19a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/></g>"
	},
	"projector-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M4 12a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 19h6m-6 6h4m-2 15v-6m20 6v-6\"/><circle cx=\"31\" cy=\"22\" r=\"5\"/></g>"
	},
	"proportional-scaling": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M22.268 7c.77-1.333 2.694-1.333 3.464 0l17.32 30c.77 1.333-.192 3-1.731 3H6.679c-1.54 0-2.501-1.667-1.732-3z\"/><path stroke-linecap=\"round\" d=\"m19 40l13-22m0 22l6-11\"/></g>"
	},
	protect: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 9.256L24.009 4L42 9.256v10.778A26.32 26.32 0 0 1 24.003 45A26.32 26.32 0 0 1 6 20.029z\"/><path stroke-linecap=\"round\" d=\"m15 23l7 7l12-12\"/></g>"
	},
	protection: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M42 24c0-9.389-8.059-17-18-17S6 14.611 6 24z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 24.008v14.537C24 41.558 21.514 44 18.5 44S13 41.558 13 38.545\"/><path stroke-linecap=\"round\" d=\"M24 4v3\"/></g>"
	},
	"public-toilet": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"15\" cy=\"10\" r=\"4\"/><circle cx=\"33\" cy=\"10\" r=\"4\"/><path d=\"M10 20h10l-2 22h-6zm18 0h10l2 11h-3l-1 11h-6l-1-11h-3z\"/></g>"
	},
	"pull-door": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 8v32l18.2 4V4zm18.2 0H42v32H24.2M18 22v4\"/>"
	},
	"pull-requests": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M37 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM11 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" d=\"M11 12v24m13-26h9a4 4 0 0 1 4 4v22\"/><path stroke-linecap=\"round\" d=\"m30 16l-6-6l6-6\"/></g>"
	},
	pumpkin: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"40\" height=\"26\" x=\"4\" y=\"14\" rx=\"13\"/><ellipse cx=\"24\" cy=\"27\" rx=\"8\" ry=\"13\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M30 6h-3a3 3 0 0 0-3 3v5\"/></g>"
	},
	"pure-natural": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M11 41q6.25-2.686 11.775-2.898Q28.298 37.889 37 40\"/><path stroke-linecap=\"round\" d=\"M23.045 44q-1.15-14.16.955-22\"/><path stroke-linejoin=\"round\" d=\"M24 23.176q2.385-9.027 8.4-10.766q6.014-1.74 11.6 1.594q.028 7.338-6.37 10.751q-6.4 3.414-13.63-1.579Zm-.208-1.062q1.25-10.78-5.01-15.185T4.284 4.96Q2.846 14.906 8.683 20q5.838 5.094 15.109 2.114Z\" clip-rule=\"evenodd\"/></g>"
	},
	"push-door": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 6h36v36H6\"/><path d=\"M6 6v36l18-6V12zm12 16v4\"/></g>"
	},
	pushpin: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 4H16l4 3l-4 13s-6 4-6 8h10l4 16l4-16h10c0-4-4-6.833-6-8L28 7z\"/>"
	},
	puzzle: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 24V12h9v-2a6 6 0 0 1 12 0v2h9v12h4a6 6 0 0 1 0 12h-4v8H4v-8h4a6 6 0 0 0 0-12z\"/>"
	},
	pyramid: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m21 12l17 30H4z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M36.5 42H44l-8-14l-3 5M21 12l-8 30\"/></g>"
	},
	"pyramid-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m19 14l14 28H5z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m24 25l-9 17m18 0h10.5L35 28l-4.5 8\"/><path stroke-linecap=\"round\" d=\"M25.984 26.396c6.228-1.582 9.994-7.914 8.412-14.142s-7.914-9.995-14.142-8.412c-6.229 1.582-9.995 7.913-8.413 14.142a11.6 11.6 0 0 0 1.937 4.078\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20 42H10m12.5-21l5 10\"/></g>"
	},
	"qingniao-clue": {
		body: "<g fill=\"currentColor\"><path d=\"M1.387 27.28c1.962 9.4 11.124 15.472 20.559 13.7l-.006.004c10.992-1.795 16.14-8.437 20.323-11.761c2.225-1.767 3.39-2.8 4.53-3.396c-.746.126-1.226-.101-1.87-.328c-.712-.25-1.624-.502-3.315-.278c-3.223.428-6.043 3.65-6.043 3.65l-1.72 1.528a17.6 17.6 0 0 1-7.234 3.323a17.66 17.66 0 0 1-12.378-1.963c-4.227-2.415-7.437-6.549-8.507-11.673a17.44 17.44 0 0 1 .416-8.77C2.114 15.365.134 21.283 1.387 27.281\"/><path fill-rule=\"evenodd\" d=\"m21.946 40.98l-.006.004c10.992-1.795 16.14-8.437 20.323-11.761c2.225-1.767 3.39-2.8 4.53-3.396c-.746.126-1.226-.101-1.87-.328c-.712-.25-1.624-.502-3.315-.278c-3.223.428-6.043 3.65-6.043 3.65l-1.72 1.528a17.6 17.6 0 0 1-7.234 3.323a17.66 17.66 0 0 1-12.378-1.963c-4.227-2.415-7.437-6.549-8.507-11.673a17.44 17.44 0 0 1 .416-8.77C2.114 15.365.134 21.283 1.387 27.281c1.962 9.398 11.124 15.471 20.559 13.698\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M35.75 28.586c-2.675 9.346-12.453 14.764-21.841 12.102C5.724 38.367.538 30.668 1.116 22.538A16.375 16.375 0 0 0 12.955 36.56c8.722 2.475 17.807-2.56 20.293-11.244c.718-2.511.806-5.052.357-7.455a16.4 16.4 0 0 0-3.887-7.9a17.66 17.66 0 0 1 5.623 7.731a17.45 17.45 0 0 1 .408 10.895\" clip-rule=\"evenodd\"/><path d=\"m27.459 32.468l.527.919l.857-.353l.79-.352c1.593-.795 1.518-.674 3.434-1.943s2.928-2.04 4.4-3.815l-.818-.649c-.969 1.222-2.038 2.138-3.87 3.351c-1.154.765-2.93 1.714-5.32 2.842\"/><path fill-rule=\"evenodd\" d=\"M18.696 6.118c2.35 0 4.63.47 6.727 1.335c-8.67 2.447-14.15 11.076-12.552 19.99l.002.013q.037.202.078.403l.006.027l.01.056q.037.172.077.342l.015.066q.016.07.036.144q.266 1.093.665 2.127c-2.95-2.101-4.878-4.667-6.12-7.34c-1.65-3.553-1.89-7.647-.607-12.8a17.6 17.6 0 0 1 8.781-4.127c.967-.16 1.93-.236 2.882-.236M5.386 17.417l.014.35a17.4 17.4 0 0 1 .063-3.218q-.124 1.477-.077 2.868\" clip-rule=\"evenodd\"/></g>"
	},
	qiyehao: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m28 19l-13.137-6.914C12.199 10.684 9 12.616 9 15.626V30\"/><path d=\"m9 30l9-7v-9\"/><path d=\"m11 12l9-7l16 8l-8 6m-8 10l13.137 6.914c2.664 1.402 5.863-.53 5.863-3.54V18\"/><path d=\"m39 18l-9 7v9\"/><path d=\"m37 36l-9 7l-16-8l8-6\"/></g>"
	},
	"quadrangular-pyramid": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24L24 4L4 24l20 20zM4 24h40\"/><path d=\"m24 44l-6-20l6-20m0 40l6-20l-6-20\"/></g>"
	},
	quadrilateral: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"M28.038 8H7a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h32.413c2.163 0 3.616-2.22 2.748-4.203l-11.375-26A3 3 0 0 0 28.038 8Z\"/>"
	},
	quote: {
		body: "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185\" clip-rule=\"evenodd\"/>"
	},
	rabbit: {
		body: "<g fill=\"none\"><ellipse cx=\"24\" cy=\"32\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"17\" ry=\"12\"/><circle cx=\"18\" cy=\"29.412\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"35.412\" r=\"2\" fill=\"currentColor\"/><circle cx=\"30\" cy=\"29.412\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12.667 22c-1.315-3.167-3.607-10.887-2.254-16.087c.376-1 1.803-2.7 4.509-1.5c.375.166 1.24.8 1.69 2C17.74 8.413 16.05 21 16.05 21m19.337 1c1.316-3.167 3.545-10.887 2.192-16.087c-.376-1-1.804-2.7-4.51-1.5c-.376.166-1.24.8-1.691 2c-1.128 2 .626 13.587.626 13.587\"/></g>"
	},
	"rabbit-zodiac": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 44V24c.167-1.667 1.2-6.8 6-10l-4-4c-2-2.452-.5-8 5-6c2 1 3 2.5 4.5 4l6.5 7c.667 1 2.5 2.809 2 7.452\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 25c5 0 15 3 18 11c.667 2.262 1.5 6 2 8\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 44c0-3.89 2.8-12.042 14-10.548\"/><circle cx=\"40.5\" cy=\"41.452\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	radar: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\" clip-rule=\"evenodd\"/><path stroke-linejoin=\"round\" d=\"M24 34c5.523 0 10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10\" clip-rule=\"evenodd\"/><path stroke-linejoin=\"round\" d=\"M24 4v40\"/><path d=\"m4 24l14 .009\"/><path stroke-linejoin=\"round\" d=\"M4 24.008h40\"/></g>"
	},
	"radar-chart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m24 3l21.874 15.893L38 45H10L2.125 18.893z\"/><path stroke-linecap=\"round\" d=\"m38 45l-7-8m-21 8l7-8M2 19l10 3m34-3l-10 3M24 3v10\"/><path d=\"m24 13l6.007 4.57L36 22l-5 15H17l-5-15l5.993-4.43zM7.594 14.92l-5.469 3.973l1.97 6.526m3.936 13.054L10 45h7m14 0h7l1.968-6.527m.437-23.553l5.469 3.973l-1.969 6.526M29.468 6.973L24 3l-5.47 3.973\"/></g>"
	},
	"radar-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 4v17\"/><path stroke-linecap=\"round\" d=\"M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20c0-4.626-1.57-8.885-4.207-12.273\"/><path stroke-linecap=\"round\" d=\"M24 13c-6.075 0-11 4.925-11 11s4.925 11 11 11s11-4.925 11-11c0-2.544-.864-4.887-2.314-6.75\"/><circle cx=\"24\" cy=\"24\" r=\"3\"/></g>"
	},
	"radar-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 20V4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20\"/><path d=\"M24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8\" clip-rule=\"evenodd\"/></g>"
	},
	radiation: {
		body: "<g fill=\"none\"><path fill=\"currentColor\" d=\"M24.004 27a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19.04 31.476A8.94 8.94 0 0 0 24 32.969a8.94 8.94 0 0 0 4.96-1.493l6.061 9.207A19.87 19.87 0 0 1 24 44c-4.073 0-7.861-1.22-11.021-3.317zm-4.024-6.992l-10.98.661A20.06 20.06 0 0 1 15.053 6l4.92 9.869a9.03 9.03 0 0 0-4.958 8.615Zm13.01-8.615L32.946 6a20.06 20.06 0 0 1 11.019 19.145l-10.98-.661q.015-.27.015-.54a9.03 9.03 0 0 0-4.974-8.075Z\"/></g>"
	},
	radio: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"38\" height=\"28\" x=\"5\" y=\"13\" rx=\"2\"/><circle cx=\"18\" cy=\"28\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M30 24h6m-6 8h6M7 13l18-9\"/></g>"
	},
	"radio-nanny": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M36 42.001V21.688C36 15.313 31.09 10 24 10s-12 5.313-12 11.688V42c0 1.105.895 1.999 2 1.999h20c1.105 0 2-.894 2-1.999Z\"/><circle cx=\"24\" cy=\"23\" r=\"4\"/><path d=\"M18 34h2m6 4h4M12 20V4\"/></g>"
	},
	"radio-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"38\" height=\"28\" x=\"5\" y=\"14\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M32 22h4m-4 6h4m-4 6h4\"/><circle cx=\"18\" cy=\"28\" r=\"7\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 14V6h28v8\"/></g>"
	},
	"radio-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><circle cx=\"24\" cy=\"24\" r=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g>"
	},
	radish: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M37 23.2C37 32 24 44 24 44S11 32 11 23.2C11 15.91 16.82 10 24 10s13 5.91 13 13.2\"/><path stroke-linejoin=\"round\" stroke-miterlimit=\"2\" d=\"M24 4v6m-6-5l4 5m8-5l-4 5M12 20h8m9 7h7m-20 7h6\"/><path stroke-linejoin=\"round\" d=\"M13.812 15A13.27 13.27 0 0 0 11 23.2c0 5.555 5.18 12.384 9 16.666\"/><path d=\"M37 23.2c0 2.774-1.291 5.866-3.06 8.8\"/></g>"
	},
	"radish-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 15c2.183.555 4 1.5 4 4s-3 3-5 3M26 10c0-3 1.749-5 4-5c2 0 3.048.62 4 3m-3 4s.951-2.132 2.123-2.91c1.87-1.243 4.377-1.372 5.749 0a4.057 4.057 0 0 1 0 5.748C37.28 16.43 35.997 17 35.997 17\"/><path d=\"M10 14c-5.084 5.085-6.417 12.913-3.41 19.103C6.59 33.103 5 41 6 42s8.862-.592 8.862-.592A15.96 15.96 0 0 0 21.802 43c4.334 0 8.97-1.853 12.199-5c3.184-3.184 4.607-7.298 4.607-11.764c0-4.507-1.607-8.236-4.953-11.711c-3.346-3.476-7.254-5.212-11.766-5.212c-4.507 0-8.704 1.503-11.888 4.687\"/><path d=\"M5 28s5-1 7 3m6 11s1-4-1-6m4.803 7a15.95 15.95 0 0 1-6.94-1.592\"/><path d=\"M6.59 33.103C3.582 26.913 4.915 19.085 10 14\"/></g>"
	},
	railway: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2z\"/><circle cx=\"18\" cy=\"26\" r=\"2\" fill=\"currentColor\"/><circle cx=\"30\" cy=\"26\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 20h24M21 38h6m-9 6h12\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"m17 32l-6 12m20-12l6 12\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 15v10M12 15v10\"/></g>"
	},
	ranking: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M17 18H4v24h13z\"/><path d=\"M30 6H17v36h13z\"/><path stroke-linecap=\"round\" d=\"M43 26H30v16h13z\"/></g>"
	},
	"ranking-list": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M42 8H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M24 17v14m8-7v7m-16-9v9\"/></g>"
	},
	rattle: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"30.075\" cy=\"15.562\" r=\"11\" transform=\"rotate(40 30.075 15.562)\"/><path d=\"M21.649 8.491c-4.61.049-6.327-3.35-8.577-.67c-2.032 2.423.493 5.636-1.435 7.934m13.665 10.162l-5.785 6.894c-1.607 1.915-1.682 5.116-3.61 7.414s-4.746 2.545-7.044.616s-2.545-4.746-.617-7.044c1.929-2.298 5.068-2.928 6.675-4.843s5.163-5.893 5.785-6.894\"/><circle cx=\"11.24\" cy=\"19.339\" r=\"3\" transform=\"rotate(40 11.24 19.34)\"/><circle cx=\"28.462\" cy=\"37.707\" r=\"3\" transform=\"rotate(40 28.462 37.707)\"/><path d=\"M37.216 24.165c.63 3.139 2.853 8.268.863 9.862s-6.525-1.559-7.687 1.382\"/></g>"
	},
	"rattle-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"29.463\" cy=\"16.989\" r=\"11\" transform=\"rotate(40 29.463 16.989)\"/><path d=\"M38.533 23.293s-5.636.493-10.998-4.006S21.68 9.152 21.68 9.152m5.186 18.711c-3.46 1.012-5.068 2.928-6.675 4.843s-1.682 5.115-3.61 7.414s-4.746 2.544-7.044.616s-2.545-4.746-.617-7.044c1.929-2.298 5.068-2.928 6.675-4.843s3.214-3.83 3.61-7.414M38.832 10.49a3 3 0 0 0-4.596-3.856\"/></g>"
	},
	razor: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"38\" height=\"20\" x=\"5\" y=\"5\" rx=\"2\"/><path d=\"M14 5v20M34 5v20M30 5h8M5 11h38M5 19h38M5 21V9m38 12V9M10 5h8m12 20h8m-28 0h8m14 0a8 8 0 1 1-16 0\"/><path d=\"m28 32l-1 5v7m-7-12l1 5v7\"/></g>"
	},
	"read-book": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 21v23c-3.291-4-13.371-4-18-4V18c9.874 0 16.114 2 18 3m0 0v23c3.291-4 13.371-4 18-4V18c-9.874 0-16.114 2-18 3\"/><circle cx=\"24\" cy=\"12\" r=\"8\"/></g>"
	},
	receive: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M4.592 19.467A2 2 0 0 1 6.537 17h34.926a2 2 0 0 1 1.945 2.467l-5.04 21A2 2 0 0 1 36.423 42H11.577a2 2 0 0 1-1.945-1.533z\"/><path stroke-linejoin=\"round\" d=\"M11 7h8v10h-8zm8 10l6.5-9L38 17\"/><path d=\"M15 25h8\"/></g>"
	},
	receiver: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9.858 38.142c7.81 7.81 20.474 7.81 28.284 0L9.858 9.858c-7.81 7.81-7.81 20.474 0 28.284M33.9 33.9l5.27-21.986M24 24l13.172-13.172M14.1 14.1l21.986-5.27M44 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0\"/>"
	},
	"recent-views-sort": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 5v25h36V5M30 37l-6 6l-6-6m6-7v13\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 21q6.075 0 11-6q-4.925-6-11-6t-11 6q4.925 6 11 6Z\"/><path fill=\"currentColor\" d=\"M24 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/></g>"
	},
	record: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"38\" height=\"24\" x=\"5\" y=\"18\" stroke-linecap=\"round\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M8 12h32M15 6h18m-7 18v6\"/><path d=\"M18 32.75c0-1.52 1.29-2.75 2.88-2.75H26v3.25c0 1.52-1.29 2.75-2.88 2.75h-2.24C19.29 36 18 34.77 18 33.25z\"/><path stroke-linecap=\"round\" d=\"m31 25l-5-1\"/></g>"
	},
	"record-disc": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 12c-6.627 0-12 5.373-12 12m12 12c6.627 0 12-5.373 12-12\"/><path d=\"M24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/></g>"
	},
	"record-player": {
		body: "<g fill=\"none\"><rect width=\"38\" height=\"32\" x=\"5\" y=\"8\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13 8v32\"/><circle cx=\"28\" cy=\"24\" r=\"9\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"28\" cy=\"24\" r=\"3\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 16h8m-8 8h8m-8 8h8\"/></g>"
	},
	rectangle: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"M38 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z\"/>"
	},
	"rectangle-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"M42 8H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z\"/>"
	},
	"rectangle-small": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"M36 14H12a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2Z\"/>"
	},
	"rectangle-tear": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 8v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2\"/><path d=\"m27 6l-6 6l6 6l-6 6l6 6l-6 6l6 6M18 6h16M18 42h16\"/></g>"
	},
	"rectangle-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 4L4 24l20 20l20-20z\"/><path stroke-linecap=\"round\" d=\"M44 4L4 44M4 4l40 40\"/></g>"
	},
	"rectangular-circular-connection": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 19a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm5 12H7v10h10z\"/><path stroke-linecap=\"round\" d=\"M25.68 13H42v23H25\"/></g>"
	},
	"rectangular-circular-separation": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 19a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm30 12H32v10h10z\"/><path stroke-linecap=\"round\" d=\"M4 25h40\"/></g>"
	},
	"rectangular-vertebra": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m12 9l12-5l12 5l8 29l-20 6l-20-6zm12 35V14m12-5l-12 5M12 9l12 5M5 38l19-6m20 6l-20-6\"/>"
	},
	"recycle-bin": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m16 18l8-13.5L32 18m6 10.5L46 42H30m-12.309-.322l-15.69.178L10 28\"/><path d=\"M17 29h13.822\"/></g>"
	},
	recycling: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M33.526 19.5L25.793 6.105c-.783-1.356-2.75-1.327-3.493.052L17 16m8 24h16.42c1.566 0 2.524-1.716 1.704-3.048L37 27m-24-4L4.773 36.986C3.989 38.319 4.95 40 6.497 40H17\"/><path d=\"m29 36l-4 4l4 4m-1-25.8l5.464 1.465l1.464-5.465M7.5 24.464L12.964 23l1.464 5.464\"/></g>"
	},
	"recycling-pool": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m20 16l4 4l4-4m4 13l4 4l4-4M8 29l4 4l4-4m8-9V4\"/><path d=\"M36 32.867v-13.23a4 4 0 0 1 4-4h4m-32 17.23v-13.23a4 4 0 0 0-4-4H4M4 36v4a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4v-4\"/></g>"
	},
	"red-cross": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M27 12h-6v9h-9v6h9v9h6v-9h9v-6h-9z\"/></g>"
	},
	"red-envelope": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 4H9v6l15 4l15-4zm0 13v27H9V17\"/><path d=\"m19 19l5 6l5-6M18 31h12m-12-6h12m-6 0v12\"/></g>"
	},
	"red-envelopes": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M40 4H8v40h32z\"/><path stroke-linecap=\"round\" d=\"M40 10c-4 5.762-7.68 9.32-11.68 10.892m-8.583-.114C15.737 19.207 12 15.763 8 10z\"/><path d=\"M24 27a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Z\"/></g>"
	},
	redo: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M36.728 36.728A17.94 17.94 0 0 1 24 42c-9.941 0-18-8.059-18-18S14.059 6 24 6c4.97 0 9.47 2.015 12.728 5.272C38.386 12.93 42 17 42 17\"/><path d=\"M42 8v9h-9\"/></g>"
	},
	reduce: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M16 24h16\"/></g>"
	},
	"reduce-decimal-places": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M27 9a5 5 0 0 0-10 0v10a5 5 0 0 0 10 0z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m25 32l-6 6l6 6\"/><path stroke-linecap=\"round\" d=\"M8 24h1\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M40 38H19\"/></g>"
	},
	"reduce-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M16 24h16\"/></g>"
	},
	"reduce-two": {
		body: "<g fill=\"none\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"3\"/><path fill=\"currentColor\" d=\"M17 30h-4.586c-.89 0-1.337 1.077-.707 1.707l4.586 4.586c.63.63 1.707.184 1.707-.707V31a1 1 0 0 0-1-1m13 1v4.586c0 .89 1.077 1.337 1.707.707l4.586-4.586c.63-.63.184-1.707-.707-1.707H31a1 1 0 0 0-1 1m1-13h4.586c.89 0 1.337-1.077.707-1.707l-4.586-4.586c-.63-.63-1.707-.184-1.707.707V17a1 1 0 0 0 1 1m-13-1v-4.586c0-.89-1.077-1.337-1.707-.707l-4.586 4.586c-.63.63-.184 1.707.707 1.707H17a1 1 0 0 0 1-1\"/></g>"
	},
	"reduce-user": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"12\" r=\"8\"/><path d=\"M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44m13-5h10\"/></g>"
	},
	reel: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M31 10L14 20m20-3L14 29m20-3L15 38M9 4h30v6H9zm0 34h30v6H9zm5-28v28\"/><path d=\"M34 10v28\"/></g>"
	},
	refraction: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m24 9l16.454 28.5H7.545z\"/><path d=\"m24 9l16.454 28.5H7.545zM4 22l15.5-5m8.5-1l16-3m-14 6.5L44 21m-11.3 3L44 29\"/></g>"
	},
	refresh: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 8v16M6 24v16m36-16c0-9.941-8.059-18-18-18a17.95 17.95 0 0 0-12.952 5.5M6 24c0 9.941 8.059 18 18 18a17.94 17.94 0 0 0 12.5-5.048\"/>"
	},
	"refresh-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"10\" height=\"10\" x=\"17\" y=\"24.071\" stroke-linejoin=\"round\" rx=\"2\" transform=\"rotate(-45 17 24.071)\"/><path d=\"M40.12 16c-2.945-5.927-9.06-10-16.129-10C16.924 6 10.945 10.073 8 16m0-8v8m6.78 0H8m0 16c2.945 5.927 9.061 10 16.129 10c7.067 0 13.046-4.073 15.991-10m0 8v-8m-6.78 0h6.78\"/></g>"
	},
	refrigerator: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"28\" height=\"36\" x=\"9\" y=\"4\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M9 22h28M9 20v4m28-4v4m-22 5v4m0-22v4m18 25v4m-20-4v4\"/></g>"
	},
	reject: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19.01 42H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v10.03m0 10.005V41a1 1 0 0 1-1 1H29.037M42 29.035H18\"/><path d=\"m23 23l-6 6l6 6\"/></g>"
	},
	"relational-graph": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 35h40\"/><path d=\"M24 32c0-4.418-3.806-8-8.5-8S7 27.582 7 32\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M41 32c0-11.046-7.611-20-17-20S7 20.954 7 32\"/><circle cx=\"41\" cy=\"35\" r=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"24\" cy=\"35\" r=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"7\" cy=\"35\" r=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g>"
	},
	"relieved-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 31s-2 4-7 4s-7-4-7-4m3-12s-1 2-3 2s-3-2-3-2m20 0s-1 2-3 2s-3-2-3-2\"/></g>"
	},
	reload: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M22 43c-4.726-1.767-8.667-7.815-10.64-11.357c-.852-1.53-.403-3.408.964-4.502a3.83 3.83 0 0 1 5.1.283L19 29V17.5a2.5 2.5 0 0 1 5 0v6a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1 5 0v7.868c0 1.07-.265 2.128-.882 3.003C37.095 39.82 35.256 42.034 33 43c-3.5 1.5-6.63 1.634-11 0m14-31l-4 4l-4-4\"/><path d=\"M14 13a9 9 0 1 1 17.849 1.651\"/></g>"
	},
	remind: {
		body: "<g fill=\"none\"><path d=\"M24 4c-7.732 0-14 6.268-14 14v20h28V18c0-7.732-6.268-14-14-14\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 38V18c0-7.732 6.268-14 14-14s14 6.268 14 14v20M4 38h40m-20 6a5 5 0 0 0 5-5v-1H19v1a5 5 0 0 0 5 5\"/></g>"
	},
	"remind-disable": {
		body: "<g fill=\"none\"><path d=\"M24 4c-7.732 0-14 6.268-14 14v20h28V18c0-7.732-6.268-14-14-14\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 38V18c0-7.732 6.268-14 14-14s14 6.268 14 14v20M4 38h40m-20 6a5 5 0 0 0 5-5v-1H19v1a5 5 0 0 0 5 5m-5-27l10 10m0-10L19 27\"/></g>"
	},
	"remote-control": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"26\" height=\"40\" x=\"11\" y=\"4\" rx=\"2\"/><circle cx=\"24\" cy=\"34\" r=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18 10h12v8H18zm5 14h2\"/></g>"
	},
	"remote-control-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M11 5.446C11 4.647 11.647 4 12.446 4h23.108C36.353 4 37 4.647 37 5.446V31c0 7.18-5.82 13-13 13s-13-5.82-13-13z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M17 16h3m8 0h3\"/><circle cx=\"17\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"31\" r=\"7\" stroke=\"currentColor\" stroke-width=\"4\"/></g>"
	},
	renal: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M16 44q-2.193-6.524-1.415-11q.777-4.477 4.836-5.852q-3.02 9.16 2.475 13.385c5.495 4.225 18.738 2.282 19.455-12.01c.718-14.292-6.156-24.61-16.32-24.61s-11.685 11-4.526 14.734q-9.5 2.07-12.058 8.5T8.05 44\"/><path d=\"M30.6 15q-4.347 2.591-3.15 4.746q1.196 2.156 5.424 0m.373 6.494q-5.61-1.143-6.748.828c-1.137 1.97 3.87 4.826 5.686 5.183\"/></g>"
	},
	renault: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 4H18L8 24h9l5-10h4l5 10h9zm0 40H18L8 24h9l5 10h4l5-10h9z\"/>"
	},
	repair: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M17 14h12m-6 14V15m-2.857 27H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v9.717M27 38l10.5-14.5L42 27L31 42h-4z\"/>"
	},
	"replay-five": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M11.272 36.728A17.94 17.94 0 0 0 24 42c9.941 0 18-8.059 18-18S33.941 6 24 6c-4.97 0-9.47 2.015-12.728 5.272C9.614 12.93 6 17 6 17\"/><path d=\"M6 9v8h8m14 1h-7v5.71c.985-.647 1.469-.71 3-.71c3 0 4 1.989 4 5s-2 4-4 4c-1.5 0-3-1-3-2\"/></g>"
	},
	"replay-music": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M21 24v-6l5 3l5 3l-5 3l-5 3z\"/><path stroke-linecap=\"round\" d=\"M11.272 36.728A17.94 17.94 0 0 0 24 42c9.941 0 18-8.059 18-18S33.941 6 24 6c-4.97 0-9.47 2.015-12.728 5.272C9.614 12.93 6 17 6 17\"/><path stroke-linecap=\"round\" d=\"M6 9v8h8\"/></g>"
	},
	report: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M36 35H12V21c0-6.627 5.373-12 12-12s12 5.373 12 12z\"/><path stroke-linecap=\"round\" d=\"M8 42h32M4 13l3 1m6-10l1 3m-4 3L7 7\"/></g>"
	},
	repositioning: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M33 22c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0\"/><path d=\"M24 25a3 3 0 1 0 0-6a3 3 0 0 0 0 6M9 14s7.5-11.5 20.5-7S42 24.5 42 24.5M42 8v16m-3 10s-6 11-19.5 7.5S6 24 6 24m0 0v16\"/></g>"
	},
	resistor: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M9.858 31.071a2 2 0 0 1 0-2.829l2.95-2.95a2 2 0 0 1 1.414-.585h2.585a2 2 0 0 0 1.415-.586l5.899-5.9a2 2 0 0 0 .586-1.413v-2.586a2 2 0 0 1 .586-1.415l2.95-2.95a2 2 0 0 1 2.828 0l7.07 7.072a2 2 0 0 1 0 2.828l-2.949 2.95a2 2 0 0 1-1.414.586h-2.586a2 2 0 0 0-1.414.586l-5.9 5.9a2 2 0 0 0-.585 1.413v2.586a2 2 0 0 1-.586 1.414l-2.95 2.95a2 2 0 0 1-2.828 0z\"/><path stroke-linecap=\"round\" d=\"m7.03 40.97l6.363-6.364m21.214-21.213l6.364-6.364\"/></g>"
	},
	respect: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 42H31l-2.956-13.793a2 2 0 0 1-.044-.419V15l-7.43-5.964a1.962 1.962 0 0 1 2.19-3.24L32 11l3.947 14.803q.053.197.144.38zm-8-16l-8 2\"/><path d=\"m19.379 25.52l.064.054a2 2 0 0 0 3-.508L24 22.463V17.77L20.32 15l-6.36.846l-4.145 8.096q-.075.145-.125.3L4 42h11.96V29L17 24.087L17.5 22H19l-.304 1.617a2 2 0 0 0 .683 1.904M10 25l6 3\"/></g>"
	},
	resting: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 26v12m0-32v20m0-22v2M8 40h26l6-6m-25 6v4m17-4v4M24 6C14.059 6 6 14.034 6 23.944V26c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5v-2.056C42 14.034 33.941 6 24 6\"/><path d=\"M15 26s-1.5-5.5 1-11s8-9 8-9m9 20s.5-4.5-2-11s-7-9-7-9m0 19V6\"/><path d=\"M28.5 21c2.485 0 4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5m-9 0c-2.485 0-4.5 2.522-4.5 5c0-2.478-2.015-5-4.5-5m-9 0c2.485 0 4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5M15.733 8C18.21 6.722 21.02 6 24 6s5.79.722 8.266 2\"/></g>"
	},
	"retro-bag": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M35 14c0-5.523-4.925-10-11-10S13 8.477 13 14m-6 2a2 2 0 0 1 2-2h30a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v0a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zm3 14v14h28V30\"/><path d=\"M20 26h8v6h-8z\"/></g>"
	},
	"return": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m13 8l-7 6l7 7\"/><path d=\"M6 14h22.994c6.883 0 12.728 5.62 12.996 12.5c.284 7.27-5.723 13.5-12.996 13.5H11.998\"/></g>"
	},
	"reverse-lens": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 25V10h6l2-3h6l2 3h6v15zm7 10l4 4l-4 4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M32 38.168C39.064 36.625 45 33.1 45 29c0-2.252-1.488-4.33-4-6.001M24 39C12.954 39 3 34.523 3 29c0-2.252 1.488-4.33 4-6.001\"/><path stroke-miterlimit=\"10\" d=\"M24 20a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z\"/></g>"
	},
	"reverse-lens-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m15 12l3-6h12l3 6zm26 0H7c-1.657 0-3 1.254-3 2.8v24.4C4 40.746 5.343 42 7 42h34c1.657 0 3-1.254 3-2.8V14.8c0-1.546-1.343-2.8-3-2.8Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M32 19v8m-16 0v8\"/><path stroke-linecap=\"round\" d=\"M16 27a8 8 0 0 0 11 7.419M32 27a8 8 0 0 0-11-7.419\"/></g>"
	},
	"reverse-operation-in": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 5h18v32H6zm18 6h18v32H24z\"/><path d=\"m13 17l4 3.79L13.333 25M35 23l-4 3.79L34.667 31\"/></g>"
	},
	"reverse-operation-out": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 5h18v32H6zm18 6h18v32H24z\"/><path d=\"m17 17l-4 3.79L16.667 25M31 23l4 3.79L31.333 31\"/></g>"
	},
	"reverse-rotation": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34 6.676C39.978 10.134 44 16.597 44 24M34 6.676V14m0-7.324h7.324m0 27.324C37.866 39.978 31.403 44 24 44m17.324-10H34m7.324 0v7.324m-27.324 0C8.022 37.866 4 31.403 4 24m10 17.324V34m0 7.324H6.676m0-27.324C10.134 8.022 16.597 4 24 4M6.676 14H14m-7.324 0V6.676\"/><path d=\"M41.324 34C37.866 39.978 31.403 44 24 44m17.324-10H34m7.324 0v7.324m-27.324 0C8.022 37.866 4 31.403 4 24m10 17.324V34m0 7.324H6.676m0-27.324C10.134 8.022 16.597 4 24 4M6.676 14H14m-7.324 0V6.676m27.324 0C39.978 10.134 44 16.597 44 24M34 6.676V14m0-7.324h7.324\"/></g>"
	},
	rice: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M24 38c9.389 0 17-7.059 17-17H7c0 9.941 7.611 17 17 17Zm6-17c0-5.523-4.253-10-9.5-10S11 15.477 11 21\"/><path d=\"M39 21c0-3.314-2.766-6-6.178-6c-1.443 0-2.77.48-3.822 1.286\"/><path stroke-linecap=\"round\" d=\"m33 15l3-10m2 13l4-7\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m18 37l-2 6h16l-2-6\"/></g>"
	},
	riding: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-miterlimit=\"2\" d=\"M33 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" d=\"M40 23h-7.63c-.56 0-1.1-.24-1.48-.65l-5.34-5.78a2.01 2.01 0 0 0-2.53-.36l-7.45 4.58a1 1 0 0 0 0 1.7l7.46 4.57c.59.36.96 1.01.96 1.71L24 38\"/><circle cx=\"36.5\" cy=\"36.5\" r=\"7.5\"/><circle cx=\"11.5\" cy=\"36.5\" r=\"7.5\"/></g>"
	},
	"riding-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.58 27.514L4 28.319v-5.638l12.258-5.237V10s5.72 1.403 6.537 2.611s0 4.028 0 4.028c4.086 1.477 7.99 6.042 7.99 9.667S29 34.5 29 34.5c-1.98 0-2.71 4.292-1.484 5.5\"/><path stroke-linecap=\"round\" d=\"M22 26c0 2.761-1.79 4-4 4s-4-1.239-4-4m3.38 4c.439 0 .877 3.2.439 4.8S16.943 37.2 13 40\"/><path stroke-miterlimit=\"2\" d=\"M37 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" d=\"M27 30c2.435.084 6.11-1.773 8-3.066c2.272-1.56.135-4.011 2.724-4.556L39.55 21S41 23.066 42 25s1.6 7.9 0 11.5h-8l3 3\"/></g>"
	},
	right: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m19 12l12 12l-12 12\"/>"
	},
	"right-angle": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 9.115c0-1.82 2.235-2.694 3.47-1.356l29.432 31.884c1.182 1.282.273 3.357-1.47 3.357H10a2 2 0 0 1-2-2z\" clip-rule=\"evenodd\"/>"
	},
	"right-bar": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M32 6v36m-3 0h6M29 6h6\"/></g>"
	},
	"right-branch": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22 8.012c-1.5 0-5.929-.074-7 4.989c-1.083 5.117-5.143 9.847-7 11\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22 40c-1.5 0-5.929.063-7-5c-1.083-5.116-5.143-9.848-7-11\"/><circle cx=\"8\" cy=\"24\" r=\"4\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 24h14m8 0h12M30 8.001h12m-12 32h12\"/></g>"
	},
	"right-branch-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M6 24h16\"/><path d=\"M42 8H30a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h12\"/></g>"
	},
	"right-branch-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 24h10M44 8c-3.284.464-8.955 2.783-14.776 8.348C23.902 21.436 17.433 23.768 14 24m0 0c3.284.464 8.955 2.783 14.776 8.348C34.098 37.436 40.567 39.768 44 40\"/>"
	},
	"right-c": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m21 33l9-9l-9-9\"/></g>"
	},
	"right-expand": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"28\" height=\"36\" x=\"14\" y=\"6\" rx=\"2\"/><path d=\"M6 6v36\"/></g>"
	},
	"right-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m20 12l12 12l-12 12z\"/>"
	},
	"right-run": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 5h18v32H6zm18 6h18v32H24z\"/><path d=\"m13 17l4 3.79L13.333 25M31 23l4 3.79L31.333 31\"/></g>"
	},
	"right-small": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 24.008H12M24 12l12 12l-12 12\"/>"
	},
	"right-small-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m32.353 32.353l-17-17m17-.999v18h-18\"/>"
	},
	"right-small-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m16 32l17-17m-18 0h18v18\"/>"
	},
	"right-square": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"m19 14l10 10l-10 10\"/></g>"
	},
	"right-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m24 43l18-19L24 5v12H6v14h18z\"/>"
	},
	"right-user": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"12\" r=\"8\"/><path d=\"M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44\"/><path d=\"m30 36l-8 8l-4-4\"/></g>"
	},
	ring: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 11.619c2.093 0 3.79-1.706 3.79-3.81S26.093 4 24 4s-3.79 1.706-3.79 3.81s1.697 3.809 3.79 3.809ZM9.79 40.19c2.092 0 3.789-1.705 3.789-3.809s-1.697-3.81-3.79-3.81S6 34.278 6 36.382s1.697 3.81 3.79 3.81Zm28.42 0c2.093 0 3.79-1.705 3.79-3.809s-1.697-3.81-3.79-3.81s-3.79 1.706-3.79 3.81s1.697 3.81 3.79 3.81Z\"/><path stroke-linecap=\"round\" d=\"M33.143 10.314A18.1 18.1 0 0 1 42 25.904q0 .867-.08 1.711v0m-10.906 14.96A17.9 17.9 0 0 1 24 44c-2.488 0-4.858-.507-7.014-1.425M6.08 27.615a18 18 0 0 1-.08-1.71a18.1 18.1 0 0 1 8.857-15.59\"/></g>"
	},
	"ring-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 11.273A3.636 3.636 0 1 0 24 4a3.636 3.636 0 0 0 0 7.273ZM24 44a3.636 3.636 0 1 0 0-7.273A3.636 3.636 0 0 0 24 44ZM7.636 27.636a3.636 3.636 0 1 0 0-7.272a3.636 3.636 0 0 0 0 7.272Zm32.728 0a3.636 3.636 0 1 0 0-7.273a3.636 3.636 0 0 0 0 7.273Z\"/><path stroke-linecap=\"round\" d=\"M32.734 10.16a16.45 16.45 0 0 1 5.107 5.106m-.001 17.468a16.45 16.45 0 0 1-5.106 5.106m-17.467 0a16.45 16.45 0 0 1-5.107-5.106m0-17.468a16.45 16.45 0 0 1 5.107-5.106\"/></g>"
	},
	rings: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M13 43c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8m22 0c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8M6 5h36\"/><path stroke-linecap=\"square\" d=\"M13 27V5m22 22V5\"/><path stroke-linecap=\"round\" d=\"M9 19h8m14 0h8\"/></g>"
	},
	ripple: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 36s5-3 10-3c7.298 0 12.702 6 20 6c5 0 10-3 10-3M4 24s5-3 10-3c7.298 0 12.702 6 20 6c5 0 10-3 10-3M4 12s5-3 10-3c7.298 0 12.702 6 20 6c5 0 10-3 10-3\"/>"
	},
	road: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M11 6L6 42M37 6l4.964 35.955M24 6v6m0 23v7m0-22v7\"/>"
	},
	"road-cone": {
		body: "<g fill=\"none\"><path d=\"M27 6h-6l-1.25 4.5L18.5 15L16 24l-2.5 9l-1.25 4.5L11 42h26l-1.5-5.4L32 24l-2.5-9l-1.25-4.5z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m37 42l-1.5-5.4L32 24l-2.5-9l-1.25-4.5L27 6h-6l-1.25 4.5L18.5 15L16 24l-2.5 9l-1.25 4.5L11 42m26 0H11zm0 0H6zm0 0h5zm-23.5-9h21M32 24H16m13.5-9h-11m9.75-4.5l7.25 26.1m-23.25.9l7.5-27\"/></g>"
	},
	"road-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 6v36M24 6v4m0 10v8m0 10v4M40 6v36\"/>"
	},
	"road-sign": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 10v12h32l6-6l-6-6z\"/><path stroke-linecap=\"round\" d=\"M23 22v22m0-40v6m-5 34h10\"/></g>"
	},
	"road-sign-both": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 8v8h28l4-4l-4-4zm28 15v8H10l-4-4l4-4z\"/><path stroke-linecap=\"round\" d=\"M24 31v13m0-28v7m0-19v4m-5 36h10\"/></g>"
	},
	robot: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"30\" height=\"26\" x=\"9\" y=\"17\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m33 9l-5 8M15 9l5 8\"/><circle cx=\"34\" cy=\"7\" r=\"2\"/><circle cx=\"14\" cy=\"7\" r=\"2\"/><rect width=\"16\" height=\"8\" x=\"16\" y=\"24\" rx=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 24H4v10h5m30-10h5v10h-5\"/></g>"
	},
	"robot-one": {
		body: "<g fill=\"none\"><rect width=\"30\" height=\"24\" x=\"9\" y=\"18\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"2\"/><circle cx=\"17\" cy=\"26\" r=\"2\" fill=\"currentColor\"/><circle cx=\"31\" cy=\"26\" r=\"2\" fill=\"currentColor\"/><path fill=\"currentColor\" d=\"M20 32a2 2 0 1 0 0 4zm8 4a2 2 0 1 0 0-4zm-8 0h8v-4h-8z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 10v8M4 26v8m40-8v8\"/><circle cx=\"24\" cy=\"8\" r=\"2\" stroke=\"currentColor\" stroke-width=\"4\"/></g>"
	},
	"robot-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5 35a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v7H5zm37-17h-8l-6-6l6-6h8\"/><circle cx=\"8\" cy=\"12\" r=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 12h16m-18 4l8 17\"/></g>"
	},
	rock: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M23.5 20.5c-1.154 0-4.348-.169-8.386 4.446c-2.403 2.746-2.827 6.087-2.65 8.41c.085 1.105 1.205 1.714 2.234 1.303c.744-.297 1.56-.668 2.146-1.06c1.731-1.153 1.154-2.307 1.731-4.037c.577-1.731 2.885-2.885 5.192-2.308s3.19 2.329 3.462 4.038C27.5 33 26.5 35 24.344 35.907c-2.378 1.001-3.461 0-6.346-.576c-1.503-.301-3.006 1.014-3.871 1.967a1.514 1.514 0 0 0-.118 1.918c.289.402.661.863 1.105 1.307c1.154 1.153 5.769 4.615 10.384 4.038s8.653-4.038 10.384-8.077S37 27 33 24\"/><path d=\"M33 24L23.129 4.24c-.23-.46-.776-.677-1.221-.42c-1.041.597-2.26 1.722-1.864 3.467C20.553 9.537 25.581 27.048 27 30\"/><path d=\"m36 27l-.948-19.31c-.024-.499-.415-.911-.914-.88c-1.201.077-2.814.548-3.225 2.307c-.524 2.247-.9 5.608-.913 8.883\"/></g>"
	},
	"rock-gesture": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 25V7.5c0-1.281.5-3.5 3-3.5s3 2.219 3 3.5V30l7-7c1.297-1.297 3.078-1.922 4.5-.5s1.594 2.906 0 4.5L35 33.5S29.094 44 26 44H13s-3 0-5-2s-2-4.5-2-4.5V12.781C6 12.062 6.5 10 9 10s3 2 3 2.781V25\"/><rect width=\"6\" height=\"12\" x=\"12\" y=\"19\" rx=\"3\"/><rect width=\"6\" height=\"12\" x=\"18\" y=\"19\" rx=\"3\"/></g>"
	},
	rocket: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M18.705 7.894L24 4l5.295 3.894A14 14 0 0 1 35 19.172V37H13V19.173a14 14 0 0 1 5.705-11.279Z\"/><path stroke-linecap=\"round\" d=\"m13 17l-6 6v8l6-3zm22 0l6 6v8l-6-3z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M18 39v3m6-3v5m6-5v3\"/></g>"
	},
	"rocket-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m20.906 6.063l1.43-.954a3 3 0 0 1 3.328 0l1.43.954A20 20 0 0 1 36 22.703V33H12V22.704a20 20 0 0 1 8.906-16.641\"/><circle cx=\"24\" cy=\"20\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m12 22l-6 6.217V33h36v-4.783L36 22M24 38v6m-8-4v2m16-2v2\"/></g>"
	},
	"rocking-horse": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 29s-3-5-3-11h16s0-4.5 3-8s6-5 6-5l8 8.5v5L36 16c-4 5-2 13-2 13zm16 0l5 12M18 29l-5 12m-9-4s6 6 20 6s20-6 20-6M11 18c0-3-2-6-7-6\"/>"
	},
	rollerskates: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M44 4H28v8h16zm0 8v22c0 1.11-.89 2-2 2H8c-2.21 0-4-1.79-4-4v-6c0-4.42 3.58-8 8-8h16v-6zM14 24v-6m7 6v-6m2 0H12M9 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10.33 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10.34 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8M40 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8\"/>"
	},
	romper: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m6.572 19.575l-2.165-7.217c-.244-.813.048-1.696.765-2.15C8.057 8.377 14.642 5 24 5c9.343 0 15.8 3.366 18.759 5.198c.748.463 1.068 1.377.816 2.22l-2.147 7.157A2 2 0 0 1 39.512 21H36c-1.105 0-2 .891-2 1.996v10.006c0 1.104-.905 2.011-1.973 2.295c-1.299.345-2.952 1.09-4.027 2.703c-2 3-2 6-2 6h-4s0-3-2-6c-1.075-1.613-2.728-2.358-4.027-2.703c-1.068-.284-1.973-1.19-1.973-2.295V22.996A1.996 1.996 0 0 0 12 21H8.488a2 2 0 0 1-1.916-1.425\"/><path d=\"M29.811 5.5a6 6 0 1 1-11.622 0\"/><path d=\"M13.5 6.494A37 37 0 0 1 24 5c4.043 0 7.545.63 10.457 1.494\"/></g>"
	},
	"rope-skipping": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 32V11a7 7 0 1 1 14 0v26a7 7 0 1 0 14 0V16\"/><path d=\"M41 4v12h-6V4z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 16h3m9 0h-3m0 0V4h-6v12m6 0h-6\"/><path d=\"M7 44V32h6v12z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 32h-3m-9 0h3m0 0v12h6V32m-6 0h6\"/></g>"
	},
	"rope-skipping-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-miterlimit=\"2\" d=\"M7 40V22S8 8 15 5s15 6 15 15c0 5-2 9-6 9s-6-4-6-9c0-9 8-18 15-15s8 17 8 17v18\"/><path d=\"M4 31h6m28 0h6\"/></g>"
	},
	rotate: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 24h30v18H12z\"/><path stroke-linecap=\"round\" d=\"M6 8v9h9\"/><path stroke-linecap=\"round\" d=\"M38.475 13.299C35.195 8.87 29.933 6 24 6c-5.821 0-10.997 2.763-14.287 7.05L6 17\"/></g>"
	},
	"rotate-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M44 24c0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20c6.957 0 13.084-3.552 16.667-8.94M44 24H30\"/><circle cx=\"24\" cy=\"24\" r=\"6\"/></g>"
	},
	"rotating-add": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6.676 14C10.134 8.022 16.597 4 24 4M6.676 14H14m-7.324 0V6.676M14 41.324C8.022 37.866 4 31.403 4 24m10 17.324V34m0 7.324H6.676M41.324 34C37.866 39.978 31.403 44 24 44m17.324-10H34m7.324 0v7.324M34 6.676C39.978 10.134 44 16.597 44 24M34 6.676V14m0-7.324h7.324M18 24h12m-6 6V18\"/>"
	},
	"rotating-forward": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 6.676C8.022 10.134 4 16.597 4 24M14 6.676V14m0-7.324H6.676m0 27.324C10.134 39.978 16.597 44 24 44M6.676 34H14m-7.324 0v7.324m27.324 0C39.978 37.866 44 31.403 44 24M34 41.324V34m0 7.324h7.324m0-27.324C37.866 8.022 31.403 4 24 4m17.324 10H34m7.324 0V6.676\"/>"
	},
	rotation: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4\"/><path stroke-dasharray=\"2 6\" d=\"M24 44C12.954 44 4 35.046 4 24S12.954 4 24 4\"/></g>"
	},
	"rotation-horizontal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m20 31l4 4l-4 4\"/><path d=\"M32 34.168C39.064 32.625 44 29.1 44 25c0-5.523-8.954-10-20-10S4 19.477 4 25s8.954 10 20 10\"/></g>"
	},
	"rotation-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 4v36h36\"/><path d=\"M28 40c0-11.046-8.954-20-20-20v20z\"/></g>"
	},
	"rotation-vertical": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m38 28l-4-4l-4 4\"/><path d=\"M33.168 16C31.625 8.936 28.1 4 24 4c-5.523 0-10 8.954-10 20s4.477 20 10 20s10-8.954 10-20\"/></g>"
	},
	round: {
		body: "<circle cx=\"24\" cy=\"24\" r=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"/>"
	},
	"round-caliper": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\"/><path d=\"M24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8m20-4a20 20 0 0 1-9.284 16.887l-4.286-6.755A12 12 0 0 0 36 24zM13.423 40.975A20 20 0 0 1 4 24.165l8-.066a12 12 0 0 0 5.654 10.086zm1.019-34.543a20 20 0 0 1 19.27.084l-3.885 6.994a12 12 0 0 0-11.562-.051z\"/></g>"
	},
	"round-distortion": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path stroke-linecap=\"round\" d=\"M24 44c-5.523 0-10-4.477-10-10s4.477-10 10-10s10-4.477 10-10S29.523 4 24 4\"/><path stroke-linecap=\"round\" d=\"M44 24c0 5.523-4.477 10-10 10s-10-4.477-10-10s-4.477-10-10-10S4 18.477 4 24\"/></g>"
	},
	"round-mask": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\"/><path d=\"M24 44c8.955 0 16.536-5.886 19.084-14H4.916C7.464 38.114 15.045 44 24 44\"/></g>"
	},
	"round-socket": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m15 26l2 6m16-6l-2 6m-7-19v6\"/></g>"
	},
	"round-trip": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m9 24l-4-4s-1.4 4.728-1.076 7.578S7.274 32.574 10 31c2.727-1.574 34-21 34-21l-9-2z\"/><path d=\"m26 13l-15.202-1.615L8 13l7 7m14 24l-4-5h17v-4m-10-7l4 5H19v4\"/></g>"
	},
	router: {
		body: "<g fill=\"none\"><rect width=\"40\" height=\"14\" x=\"4\" y=\"28\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 35h8\"/><rect width=\"4\" height=\"4\" x=\"30\" y=\"33\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 28V8m24 20V8\"/></g>"
	},
	"router-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 24L4 38h40l-6-14z\"/><path d=\"M10 4v20z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 4v20\"/><path d=\"M38 4v20z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 4v20\"/><path d=\"M24 4v20z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 4v20M4 38v6h40v-6\"/></g>"
	},
	"row-height": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m16 35l-6 6l-6-6m12-22l-6-6l-6 6m6-6v34M44 9H22m14 10H22m22 10H22m14 10H22\"/>"
	},
	rowing: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M30.02 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m42 31l-7 13m-2.99-4L26 29L9 40l12-20l23 5M4 40h40\"/></g>"
	},
	"rs-male": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4.31 16.27A2 2 0 0 1 6.29 14h35.42a2 2 0 0 1 1.981 2.27l-2.454 18A2 2 0 0 1 39.254 36H8.746a2 2 0 0 1-1.982-1.73zM19 22h2m2 6h2m-14-6h2m2 6h2m10-6h2m2 6h2m2-6h2\"/>"
	},
	rss: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 44V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v38l-16-8.273z\"/><path stroke-linecap=\"round\" d=\"M23.95 13.95v12m-6-6h12\"/></g>"
	},
	rugby: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M33.9 33.9c9.372-9.373 12.538-21.403 7.07-26.87c-5.467-5.468-17.497-2.302-26.87 7.07c-9.372 9.373-12.538 21.403-7.07 26.87c5.467 5.468 17.497 2.302 26.87-7.07M21.171 21.172l5.657 5.656m-1.414-9.899l5.657 5.657M16.93 25.414l5.656 5.657m-9.894 4.249L35.32 12.692M5.615 28.243l14.142 14.142m8.486-36.77l14.142 14.142\"/>"
	},
	"rugby-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M4 24c2.292 8.63 10.377 15 20 15s17.708-6.37 20-15C41.708 15.37 33.623 9 24 9S6.292 15.37 4 24Z\"/><path stroke-linecap=\"round\" d=\"M40 24h4m-30 0h20M4 24h4m9-4v8m14-8v8m-7-8v8\"/></g>"
	},
	"rule-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 13C11 13 4 22.85 4 35h40c0-12.15-7-22-20-22Z\"/><path stroke-linecap=\"round\" d=\"M10 31v4m7-4v4m7-4v4m7-4v4m7-4v4\"/><path d=\"M24 20c-4.554 0-10 2.134-10 6h20c0-3.866-5.446-6-10-6Z\"/></g>"
	},
	ruler: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 14L34 4l-3.75 3.75l-3.75 3.75L19 19l-7.5 7.5l-3.75 3.75L4 34l10 10zM30.25 7.75l-22.5 22.5M9 29l4 4m1-9l6 6m-1-11l4 4m1-9l6 6M29 9l4 4\"/>"
	},
	"ruler-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M43 41H23M38.718 5H21L5 41h17.662zM9.959 29.882h8.028m-4.722-7.412h8.028m-4.519-7.87h8.029\"/><path d=\"M21 5L5 41\"/></g>"
	},
	"run-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 5h18v32H6zm18 6h18v32H24z\"/><path d=\"m17 17l-4 3.79L16.667 25M35 23l-4 3.79L34.667 31\"/></g>"
	},
	"s-turn-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 17v-4c0-4 3-7 7-7s7 3 7 7v19M10 6v29c0 4 3 7 7 7s7-3 7-7V17\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m15 11l-5-5l-5 5\"/><circle cx=\"38\" cy=\"37\" r=\"5\"/></g>"
	},
	"s-turn-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M42 38H13c-4 0-7-3-7-7s3-7 7-7h6m0 0h16c4 0 7-3 7-7s-3-7-7-7H17\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m37 43l5-5l-5-5\"/><circle cx=\"12\" cy=\"10\" r=\"5\" transform=\"rotate(-180 12 10)\"/></g>"
	},
	"s-turn-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M30 24H13c-4 0-7-3-7-7s3-7 7-7h19M8 38h27c4 0 7-3 7-7s-3-7-7-7h-5\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m13 43l-5-5l5-5\"/><circle cx=\"37.176\" cy=\"10\" r=\"5\" transform=\"rotate(-180 37.176 10)\"/></g>"
	},
	"s-turn-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 31v4c0 4-3 7-7 7s-7-3-7-7V16m28 26V13c0-4-3-7-7-7s-7 3-7 7v18\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m33 37l5 5l5-5\"/><circle cx=\"10\" cy=\"11\" r=\"5\" transform=\"rotate(-180 10 11)\"/></g>"
	},
	"safe-retrieval": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M7 9.127L24.008 4L41 9.127v10.515C41 30.695 34.153 40.506 24.003 44C13.849 40.506 7 30.692 7 19.638z\"/><path d=\"M24 30a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z\"/><path stroke-linecap=\"round\" d=\"m29 29l6 7\"/><path d=\"M41 19.643C41 30.695 34.153 40.507 24.002 44\"/></g>"
	},
	sagittarius: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M21 7h20v20m0-20L7 41m2-20l18 18\"/>"
	},
	sailboat: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"m8 28l-2-4h36l-2 4M28 4L10 24h18zm0 7l10 13H28zM4 34l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 34M4 40l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 40\"/>"
	},
	"sailboat-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M21 31V5L7 31zm6 0V13l14 18zM5 37h38l-5 6H10z\"/>"
	},
	sailing: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M19 30h-8l8-9m20 9C39 17.008 28.994 4 19 4v26zm-6.349 11.577L42 36H6l2 6h23.114a3 3 0 0 0 1.537-.423M19 30v6\"/><path d=\"M29 21h12\"/></g>"
	},
	"sales-report": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M41 14L24 4L7 14v20l17 10l17-10z\"/><path stroke-linecap=\"round\" d=\"M24 22v8m8-12v12m-16-4v4\"/></g>"
	},
	sandals: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"bevel\" d=\"m11.2 6.854l-.708.225c-3.487 1.104-5.536 4.71-4.898 8.312c.73 4.115 1.291 8.04 2.095 11.661c.785 3.537.447 6.689.25 10.032c-.192 3.266 2.409 5.843 5.672 6.07c4.623.321 8.182-4.082 7.297-8.63c-.684-3.516-1.202-7.318-.969-10.024c.25-2.904.277-7.29.23-11.251c-.055-4.616-4.568-7.788-8.968-6.395Zm23.61-1.131l-.77.144c-3.455.648-5.892 3.761-5.926 7.277C28.071 17.701 27.831 22.15 28 26c.156 3.553-.437 6.153-1.017 9.053c-.626 3.13 1.443 6.044 4.54 6.815c4.485 1.116 8.712-2.698 8.577-7.318c-.093-3.175.03-6.512.681-8.95c.79-2.96 1.547-7.903 2.129-12.314c.61-4.632-3.509-8.424-8.1-7.563Z\"/><path stroke-linejoin=\"round\" stroke-miterlimit=\"2\" d=\"M8 29c1-9 6-14 6-14c1.636 2 4 8 6 14m20 1c.5-8-5-16-5-16c-1.636 2-7 5.278-7 11.5\"/></g>"
	},
	sandstorm: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 22h32a8 8 0 1 0-8-8M10 29H4m23 0h-6m23 0h-6m-28 6H4m23 0h-6m23 0h-6m-22 7H4m40 0H32\"/>"
	},
	sandwich: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 36V22H6v14a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4M6 30h36M6 26v8m36-8v8M6.067 22H42c0-2.016-11.807-10.582-17.967-14.613S12.74 8.9 8.633 13.937C5.348 17.97 6.067 19.986 6.067 22\"/>"
	},
	"sandwich-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17.799 40.142s4.16 4.16 8.652 2.995s15.805-12.478 16.97-16.97c1.165-4.493-2.995-8.652-2.995-8.652M7.9 30.243s-4.16-4.16-2.995-8.652c1.164-4.492 12.478-15.806 16.97-16.97c4.492-1.165 8.652 2.994 8.652 2.994\"/><rect width=\"40\" height=\"14\" x=\"5.071\" y=\"33.071\" rx=\"7\" transform=\"rotate(-45 5.071 33.071)\"/><path d=\"m15.678 33.779l.563-1.689a6 6 0 0 1 3.326-3.615l.42-.18a4.98 4.98 0 0 0 2.762-3.002v0a4.98 4.98 0 0 1 2.762-3.002l.95-.407a4.7 4.7 0 0 0 2.614-2.84v0a4.71 4.71 0 0 1 2.98-2.981l2.008-.67\"/></g>"
	},
	sapling: {
		body: "<g fill=\"none\"><path d=\"M27 8c-4.686 4.686-3.965 13.035-3.965 13.035S31.314 21.686 36 17s4.006-12.965 4.006-12.965S31.686 3.314 27 8\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M23.035 21.035L31 13.07m-7.965 7.965S22.314 12.686 27 8s13.006-3.965 13.006-3.965S40.686 12.314 36 17s-12.965 4.035-12.965 4.035\"/><path d=\"M20 21c3.85 3.843 2.971 10.971 2.971 10.971s-7.122.872-10.97-2.971c-3.85-3.843-2.969-10.971-2.969-10.971S16.151 17.157 20 21\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22.971 31.971L16.001 25m6.97 6.971s.878-7.128-2.97-10.971c-3.85-3.843-10.969-2.971-10.969-2.971S8.151 25.157 12 29s10.971 2.971 10.971 2.971M23 4v40\"/></g>"
	},
	save: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 9a3 3 0 0 1 3-3h25.281L42 13.207V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z\"/><path d=\"M24.008 6L24 13.385c0 .34-.448.615-1 .615h-8c-.552 0-1-.275-1-.615V6\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24.008 6L24 13.385c0 .34-.448.615-1 .615h-8c-.552 0-1-.275-1-.615V6z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 6h25.281M14 26h20m-20 8h10.008\"/></g>"
	},
	"save-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M39.3 6H8.7A2.7 2.7 0 0 0 6 8.7v30.6A2.7 2.7 0 0 0 8.7 42h30.6a2.7 2.7 0 0 0 2.7-2.7V8.7A2.7 2.7 0 0 0 39.3 6Z\"/><path stroke-linejoin=\"round\" d=\"M32 6v18H15V6z\"/><path stroke-linecap=\"round\" d=\"M26 13v4M10.997 6H36\"/></g>"
	},
	scale: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M30 6h12v12M31 29H19V17M42 6L19 29\"/><path d=\"M22 6H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V26\"/></g>"
	},
	"scale-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M18 14H5V9l13-5h12l13 5v5H30\"/><path d=\"M18 4h12v40H18z\"/><path stroke-linecap=\"round\" d=\"M18 12h4m-4 18h5m-5-12h5m-5 6h4m-4 12h4m-4-26v28\"/></g>"
	},
	scallion: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M20 24s2.5-4.5 3-9s-1-8-1-8l5-3s1 6 1 9\"/><path d=\"M6 43c-2-1.5-2-6.91 2-10s4.186-2.283 9-6S34 4 34 4l4.5 3.5l-12.19 16.24c-2.984 3.977-3.758 9.313-6.26 13.61C18.102 40.7 16 42 14 43s-6 1.5-8 0\"/><path d=\"M23 30s3-2 7-4s13-2 13-2l-3-7s-8 0-11 3\"/></g>"
	},
	scan: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7 24h34M24 7v34\"/><path fill=\"currentColor\" d=\"M5 5h4v4H5zm9 0h4v4h-4zm16 0h4v4h-4zm9 0h4v4h-4zm0 9h4v4h-4zM5 14h4v4H5zm0 25h4v4H5zm9 0h4v4h-4zm16 0h4v4h-4zm9 0h4v4h-4zm0-9h4v4h-4zM5 30h4v4H5z\"/></g>"
	},
	"scan-code": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 15V6h9m0 36H6v-9m36 0v9h-9m0-36h9v9m-32 9h28\"/>"
	},
	"scan-setting": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"38\" height=\"38\" x=\"5\" y=\"5\" rx=\"3\"/><path d=\"m34 21l3 3l-3 3m-20-6l-3 3l3 3m13-13l-3-3l-3 3m6 20l-3 3l-3-3\"/></g>"
	},
	scanning: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 6H8a2 2 0 0 0-2 2v8m10 26H8a2 2 0 0 1-2-2v-8m26 10h8a2 2 0 0 0 2-2v-8M32 6h8a2 2 0 0 1 2 2v8m-8 8H14m13-8h-6m6 16h-6\"/>"
	},
	"scanning-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 6H8a2 2 0 0 0-2 2v8m10 26H8a2 2 0 0 1-2-2v-8m26 10h8a2 2 0 0 0 2-2v-8M32 6h8a2 2 0 0 1 2 2v8m-8 8H14m20-8H14m20 16H14\"/>"
	},
	"scatter-alignment": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 14h28M10 24h28M6 34h28\"/>"
	},
	schedule: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"30\" x=\"4\" y=\"10\" stroke-linejoin=\"round\" rx=\"2\"/><path d=\"M14 6v8m11 9H14m20 8H14M34 6v8\"/></g>"
	},
	school: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M4 33a2 2 0 0 1 2-2h6v-7l12-8l12 8v7h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4z\"/><path stroke-linecap=\"round\" d=\"M24 6v10\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M36 12V6s-1.5 3-6 0s-6 0-6 0v6s1.5-3 6 0s6 0 6 0m-8 32V31h-8v13m-2 0h12\"/></g>"
	},
	scissors: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"38\" height=\"38\" x=\"5\" y=\"5\" rx=\"3\"/><path d=\"M19 19c2 3 2 7 0 10m17-15L21 24l15 10\"/><circle cx=\"16\" cy=\"16\" r=\"4\"/><circle cx=\"16\" cy=\"32\" r=\"4\"/></g>"
	},
	scoreboard: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"28\" x=\"4\" y=\"12\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M14 6v6m20-6v6M10.227 24L15 19.017V33m9-21v28\"/><ellipse cx=\"34\" cy=\"26\" rx=\"3\" ry=\"7\"/><path stroke-linecap=\"round\" d=\"M21 12h6m-6 28h6\"/></g>"
	},
	scorpio: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M16 12a6 6 0 0 0-12 0m24 0a6 6 0 0 0-12 0m24 22a6 6 0 0 1-12 0M4 12v18m12-18v18\"/><path d=\"M28 12v22m12-11v11\"/><path stroke-linejoin=\"round\" d=\"m36 27l4-4l4 4\"/></g>"
	},
	"screen-rotation": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 24c0 11.046 8.954 20 20 20l-5-5m25-15c0-11.046-8.954-20-20-20l5 5m1 32L7 18L18 7l23 23z\"/>"
	},
	screenshot: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 42a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z\"/><path stroke-linecap=\"round\" d=\"M40.062 8C24 28.433 15.805 38.68 14.242 40.243a6 6 0 0 1-8.485 0\"/><path d=\"M38 42a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z\"/><path stroke-linecap=\"round\" d=\"M42.242 40.243a6 6 0 0 1-8.485 0C32.195 38.68 24 28.446 8 8\"/></g>"
	},
	"screenshot-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16 6H8a2 2 0 0 0-2 2v8m10 26H8a2 2 0 0 1-2-2v-8m26 10h8a2 2 0 0 0 2-2v-8M32 6h8a2 2 0 0 1 2 2v8\"/><rect width=\"20\" height=\"20\" x=\"14\" y=\"14\" rx=\"2\"/></g>"
	},
	"screenshot-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 24V4h40v20\"/><path d=\"M10 44a6 6 0 1 0 0-12a6 6 0 0 0 0 12\" clip-rule=\"evenodd\"/><path d=\"M36 12C20.39 33.266 15.805 40.68 14.243 42.243a6 6 0 0 1-8.486 0\"/><path d=\"M38 44a6 6 0 1 0 0-12a6 6 0 0 0 0 12\" clip-rule=\"evenodd\"/><path d=\"M42.243 42.243a6 6 0 0 1-8.486 0C32.195 40.68 27.61 33.266 12 12\"/></g>"
	},
	screwdriver: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 24h10v5c.961.976 2.039 2.524 3 3.5V44H16V32.5l3-3.5z\"/><path stroke-linecap=\"round\" d=\"M21 13v11h6V13l2-3l-2-6h-6l-2 6z\"/></g>"
	},
	sd: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15.402 5.683A2 2 0 0 1 16.907 5H37a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V24h4v-6H9v-5zM33 11v4m-12-4v4m6-4v4\"/>"
	},
	"sd-card": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M8 12v32h32V4H14z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M15 15v6m6-9v6m12-6v6m-6-6v6\"/></g>"
	},
	seal: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M5 37a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path d=\"M5 31a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18.763 15.664a1 1 0 0 1 .942-.664h8.59a1 1 0 0 1 .942.664L34 29H14z\"/><rect width=\"18\" height=\"10.8\" x=\"15\" y=\"4\" rx=\"5.4\"/></g>"
	},
	search: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z\"/><path stroke-linecap=\"round\" d=\"M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485\"/></g>"
	},
	seat: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M17 21.458c-4.057 1.274-7 5.065-7 9.542c0 5.523 4.477 10 10 10a9.99 9.99 0 0 0 8.662-5\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M38 20c-4 0-7.5-.5-14-3v12h14v14\"/><circle cx=\"24\" cy=\"8\" r=\"4\"/></g>"
	},
	security: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 26v-4c0-9.941-8.059-18-18-18v0C14.059 4 6 12.059 6 22v4\"/><path d=\"M32 27V12a8 8 0 0 0-8-8v0a8 8 0 0 0-8 8v15\"/><path d=\"M24 24v14a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-2.889M12 24h30\"/></g>"
	},
	"security-stall": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M16 29h16v15H16zM12 4h24v6H12z\"/><path d=\"M16 10v19m16-19v19\"/><path stroke-linejoin=\"round\" d=\"M4 44h40\"/></g>"
	},
	seedling: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 42V26m17.942-15.993c-.776 13.024-9.13 17.236-15.946 17.896C24.896 28.009 24 27.104 24 26v-8.372c0-.233.04-.468.125-.684C27.117 9.199 34.283 8.155 40 8.02c1.105-.027 2.006.884 1.94 1.987M7.998 6.072c9.329.685 14.197 6.091 15.836 9.558c.115.242.166.508.166.776v7.504c0 1.14-.96 2.055-2.094 1.94C7.337 24.384 6.11 14.786 6.009 8C5.993 6.894 6.897 5.99 8 6.072\"/>"
	},
	selected: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 4H4v8h8zm32 32h-8v8h8zm-32 0H4v8h8zM44 4h-8v8h8z\"/><path stroke-linecap=\"round\" d=\"M8 36V12m32 24V12M12 8h24M12 40h24\"/></g>"
	},
	"selected-focus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 4H4v8h8zm32 32h-8v8h8zm-32 0H4v8h8zM44 4h-8v8h8z\"/><path stroke-dasharray=\"1 5\" stroke-linecap=\"round\" d=\"M8 36V12m32 24V12M12 8h24M12 40h24\"/></g>"
	},
	selfie: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M29.234 6.98c3.714-1.568 11.276-2.47 13.794 5.891s-8.307 14.612-8.026 8.099c.28-6.514 7.995-1.152 7.83 3.562s-5.062 5.232-5.062 5.232\"/><rect width=\"26\" height=\"12\" x=\"4.241\" y=\"15.778\" rx=\"2\" transform=\"rotate(-30 4.241 15.778)\"/><path stroke-linecap=\"round\" d=\"M21.5 19.67L29 32.66\"/><rect width=\"6\" height=\"10\" x=\"26.401\" y=\"34.16\" rx=\"3\" transform=\"rotate(-30 26.401 34.16)\"/><path stroke-linecap=\"round\" d=\"m11.401 8.18l5.197-3m5.303 21.186l5.197-3\"/></g>"
	},
	send: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M43 5L29.7 43l-7.6-17.1L5 18.3z\"/><path stroke-linecap=\"round\" d=\"M43 5L22.1 25.9\"/></g>"
	},
	"send-backward": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 14h36V6H6zm0 14h36v-8H6z\"/><path stroke-linecap=\"round\" d=\"m30 36l-6 6l-6-6v0m6 6V28m0-14v6\"/></g>"
	},
	"send-email": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24V9H4v30h20m20-5H30m9-5l5 5l-5 5\"/><path d=\"m4 9l20 15L44 9\"/></g>"
	},
	"send-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 6L4 20.138l20 3.87L29.005 44z\"/><path stroke-linecap=\"round\" d=\"m24.008 24.008l5.657-5.656\"/></g>"
	},
	"send-to-back": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M14 21H5V5h16v9\"/><path stroke-linecap=\"round\" d=\"M32 27h11v16H27V32\"/><path d=\"M14 32V14h18v18z\"/></g>"
	},
	"sent-to-back": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M30 18h11a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H19a1 1 0 0 1-1-1V30M9.97 6H6v4.034M9.997 30H6v-3.988\"/><path stroke-linejoin=\"round\" d=\"M26 30h3.997v-3.988M26.002 6H30v3.998\"/><path d=\"M16.028 6h3.98\"/><path stroke-linejoin=\"round\" d=\"M6 16v4.015M30 16v4.015M15.992 30H20\"/></g>"
	},
	seo: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"40\" height=\"32\" x=\"4\" y=\"8\" rx=\"1.633\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16 18.948c-2-2.948-5.502-1.01-5.251 2.02C11 24 15 24 15.249 27.032C15.5 30.062 12 32 10 29.051M26 18h-4v13h4m-4-6h4\"/><rect width=\"6\" height=\"13\" x=\"32\" y=\"18\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"3\"/></g>"
	},
	"seo-folder": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m14 22l5 5l-5 5\"/><path stroke-linecap=\"round\" d=\"M26 32h8\"/></g>"
	},
	server: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 4H4v16h40zm0 24H4v16h40z\"/><path fill=\"currentColor\" d=\"M13 10h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m0 24h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m8-24h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m0 24h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/></g>"
	},
	"set-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-miterlimit=\"2\" d=\"M29 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" d=\"m24 19l-4.29 8l7.6 6.02c.31.24.53.57.66.94L31.31 44m-11.6-17l-5.2 7.64C12.973 36.888 10.5 39.5 9.5 41\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" d=\"m42 24l-6.94.1c-.36 0-.72-.09-1.04-.27l-3.27-1.91c-4.01-2.35-8.4-3.96-12.97-4.78l-3.22-.57L12 21\"/><path stroke-linejoin=\"round\" d=\"m8.652 19.103l6.373 3.68l-4.5 7.794l-6.373-3.68z\"/></g>"
	},
	setting: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M36.686 15.171a15.4 15.4 0 0 1 2.529 6.102H44v5.454h-4.785a15.4 15.4 0 0 1-2.529 6.102l3.385 3.385l-3.857 3.857l-3.385-3.385a15.4 15.4 0 0 1-6.102 2.529V44h-5.454v-4.785a15.4 15.4 0 0 1-6.102-2.529l-3.385 3.385l-3.857-3.857l3.385-3.385a15.4 15.4 0 0 1-2.529-6.102H4v-5.454h4.785a15.4 15.4 0 0 1 2.529-6.102l-3.385-3.385l3.857-3.857l3.385 3.385a15.4 15.4 0 0 1 6.102-2.529V4h5.454v4.785a15.4 15.4 0 0 1 6.102 2.529l3.385-3.385l3.857 3.857z\"/><path d=\"M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/></g>"
	},
	"setting-computer": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-5m-18 8v8m-10 0h20\"/><circle cx=\"37\" cy=\"13\" r=\"3\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M37 20v-4m0-6V6m-6.062 10.5l3.464-2m5.196-3l3.464-2m-12.124 0l3.464 2m5.196 3l3.464 2\"/></g>"
	},
	"setting-config": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M41.5 10h-6m-8-4v8m0-4h-22m8 14h-8m16-4v8m22-4h-22m20 14h-6m-8-4v8m0-4h-22\"/>"
	},
	"setting-laptop": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 9H11a3 3 0 0 0-3 3v21h32v-7\"/><path stroke-linejoin=\"round\" d=\"M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z\"/><circle cx=\"35\" cy=\"14\" r=\"3\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M35 21v-4m0-6V7m-6.062 10.5l3.464-2m5.196-3l3.464-2m-12.124 0l3.464 2m5.196 3l3.464 2\"/></g>"
	},
	"setting-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m34 41l10-17L34 7H14L4 24l10 17z\"/><path d=\"M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/></g>"
	},
	"setting-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"15\"/><path d=\"M24 39v5m15-21h5M4 23h5M24 4v5m10.606 25.606l3.536 3.536M33.9 12.687l3.535-3.536M9.15 37.435l3.536-3.535M9.858 9.858l3.535 3.535\"/></g>"
	},
	"setting-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M18.284 43.171a20 20 0 0 1-8.696-5.304a6 6 0 0 0-5.182-9.838A20 20 0 0 1 4 24c0-2.09.32-4.106.916-6H5a6 6 0 0 0 5.385-8.65a20 20 0 0 1 8.267-4.627A6 6 0 0 0 24 8a6 6 0 0 0 5.348-3.277a20 20 0 0 1 8.267 4.627A6 6 0 0 0 43.084 18A20 20 0 0 1 44 24c0 1.38-.14 2.728-.406 4.03a6 6 0 0 0-5.182 9.838a20 20 0 0 1-8.696 5.303a6.003 6.003 0 0 0-11.432 0Z\"/><path d=\"M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z\"/></g>"
	},
	"setting-web": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v12.059\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 10 14)\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 16 14)\"/><circle cx=\"37\" cy=\"34\" r=\"3\" stroke=\"currentColor\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M37 41v-4m0-6v-4m-6.062 10.5l3.464-2m5.196-3l3.464-2m-12.124 0l3.464 2m5.196 3l3.464 2\"/></g>"
	},
	"seven-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M18.998 15H29l-8.006 18\"/></g>"
	},
	shade: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 6C14.059 6 6 14.034 6 23.944V26c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5v-2.056C42 14.034 33.941 6 24 6\"/><path d=\"M15 26s-1.5-5.5 1-11s8-9 8-9m9 20s.5-4.5-2-11s-7-9-7-9m0 19v14.5a4.5 4.5 0 0 1-4.5 4.5v0a4.5 4.5 0 0 1-4.5-4.5v-1.318M24 25V6m0 0V4\"/><path d=\"M28.5 21c2.485 0 4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5m-9 0c-2.485 0-4.5 2.522-4.5 5c0-2.478-2.015-5-4.5-5m-9 0c2.485 0 4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5M15.733 8C18.21 6.722 21.02 6 24 6s5.79.722 8.266 2\"/></g>"
	},
	shake: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"m4 10l4 4.667l-4 4.666L8 24l-4 4.667l4 4.666L4 38m40-28l-4 4.667l4 4.666L40 24l4 4.667l-4 4.666L44 38\"/><path d=\"M34 6H14v36h20z\"/><path stroke-linecap=\"round\" d=\"M22 35h4\"/></g>"
	},
	share: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9\"/>"
	},
	"share-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M35 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10ZM13 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" d=\"m30 13.575l-12.66 7.67m-.001 5.319l13.34 7.883\"/><path d=\"M35 32a5 5 0 1 1 0 10a5 5 0 0 1 0-10Z\"/></g>"
	},
	"share-sys": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10.365 41.632A19.95 19.95 0 0 1 4 27C4 15.954 12.954 7 24 7s20 8.954 20 20a19.95 19.95 0 0 1-6.365 14.632\"/><path d=\"M15.138 36.51A12.97 12.97 0 0 1 11 27c0-7.18 5.82-13 13-13s13 5.82 13 13a12.96 12.96 0 0 1-4.138 9.51\"/><path d=\"M19.91 31.39a6 6 0 1 1 8.18 0\"/></g>"
	},
	"share-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 38v4H6v-4M30 6l10 10l-10 10\"/><path d=\"M40 16C20 16 6 19 6 32\"/></g>"
	},
	"share-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m26 4l18 18l-18 17V28C12 28 6 43 6 43c0-17 5-28 20-28z\"/>"
	},
	shaver: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M20.785 18.73a.72.72 0 0 1 1.016 0l7.469 7.469a.72.72 0 0 1 0 1.016L17.757 38.728a6 6 0 0 1-8.485-8.486z\"/><path d=\"M42.581 22.389a.894.894 0 0 0 0-1.264L26.874 5.418a.894.894 0 0 0-1.263 0l-.783.783c-4.686 4.686-4.686 12.284 0 16.97c4.687 4.687 12.285 4.687 16.97 0z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m19.879 28.121l-1.415 1.414m9.193-12.02l2.828 2.828\"/></g>"
	},
	"shaver-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M36 14H12V6.02L16.474 4l4.245 2.02L24.193 4l3.474 2.02L31.912 4L36 6.02zm-24 0v19c0 15 24 15 24 0V14M20 35h8\"/><circle cx=\"24\" cy=\"25\" r=\"4\"/></g>"
	},
	shaving: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"20\" height=\"27\" x=\"14\" y=\"17\" rx=\"2\"/><path d=\"M19 12h10v5H19zm0 0V9c0-1 0-5 8-5h9v5h-7v3\"/></g>"
	},
	"sheep-zodiac": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M5 14c-1.5-2.5-2-8 3-9c2-.15 3.5.5 6 3l11 12l-3 4\"/><path stroke-linejoin=\"round\" d=\"M19 14c-4.071.707-12 4-11 14c.5 3 1.86 5.946 5 9v5m16-25c4.221-.43 13.312.439 15 8c.563 1.861.066 7.157-5 13v4\"/><path d=\"M33 42c0-3.866-3.4-6-7-6s-7 2.134-7 6\"/></g>"
	},
	shield: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 8.256L24.009 3L42 8.256v10.778A26.32 26.32 0 0 1 24.003 44A26.32 26.32 0 0 1 6 19.029z\"/>"
	},
	"shield-add": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 8.256L24.009 3L42 8.256v10.778A26.32 26.32 0 0 1 24.003 44A26.32 26.32 0 0 1 6 19.029z\"/><path stroke-linecap=\"round\" d=\"M23.95 14.95v16m-8-8h16\"/></g>"
	},
	ship: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M6 20.377L24 14l18 6.377L36.667 34H11.333z\" clip-rule=\"evenodd\"/><path d=\"M13 8h22l-.002 9.896L24 14l-11 3.896z\"/><path stroke-linecap=\"round\" d=\"M24 8V4m0 20v-8M10 40l3.5 4l3.5-4l3.5 4l3.5-4l3.5 4l3.5-4l3.5 4l3.5-4\"/></g>"
	},
	shop: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 12h40v8l-1.398.84a7 7 0 0 1-7.203 0L34 20l-1.398.84a7 7 0 0 1-7.203 0L24 20l-1.398.84a7 7 0 0 1-7.203 0L14 20l-1.399.84a7 7 0 0 1-7.202 0L4 20z\"/><path d=\"M8 22.489V44h32V22M8 11.822V4h32v8\"/><path d=\"M19 32h10v12H19z\"/></g>"
	},
	shopping: {
		body: "<g fill=\"none\"><path d=\"M39 32H13L8 12h36z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M3 6h3.5L8 12m0 0l5 20h26l5-20z\"/><circle cx=\"13\" cy=\"39\" r=\"3\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><circle cx=\"39\" cy=\"39\" r=\"3\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/></g>"
	},
	"shopping-bag": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 17h38l-4.2 26H9.2zm30 0c0-6.627-4.925-12-11-12s-11 5.373-11 12\"/><circle cx=\"17\" cy=\"26\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 33s2 3 6 3s6-3 6-3\"/><circle cx=\"31\" cy=\"26\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"shopping-bag-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"28\" height=\"30\" x=\"10\" y=\"12\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M30 18v-8a6 6 0 0 0-6-6v0a6 6 0 0 0-6 6v8\"/></g>"
	},
	"shopping-cart": {
		body: "<g fill=\"none\"><path d=\"M39 32H13L8 12h36z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M3 6h3.5L8 12m0 0l5 20h26l5-20z\"/><circle cx=\"13\" cy=\"39\" r=\"3\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><circle cx=\"39\" cy=\"39\" r=\"3\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22 22h8m-4 4v-8\"/></g>"
	},
	"shopping-cart-add": {
		body: "<g fill=\"none\"><path d=\"M39 32H13L8 12h36z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M3 6h3.5L8 12m0 0l5 20h26l5-20z\"/><circle cx=\"13\" cy=\"39\" r=\"3\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><circle cx=\"39\" cy=\"39\" r=\"3\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22 22h8m-4 4v-8\"/></g>"
	},
	"shopping-cart-del": {
		body: "<g fill=\"none\"><path d=\"M39 32H13L8 12h36z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M3 6h3.5L8 12m0 0l5 20h26l5-20z\"/><circle cx=\"13\" cy=\"39\" r=\"3\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><circle cx=\"39\" cy=\"39\" r=\"3\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22 22h8\"/></g>"
	},
	"shopping-cart-one": {
		body: "<g fill=\"none\"><circle cx=\"20.5\" cy=\"41.5\" r=\"3.5\" fill=\"currentColor\"/><circle cx=\"37.5\" cy=\"41.5\" r=\"3.5\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m5 6l9 6l5 22h20l5-17H25m0 9h16\"/></g>"
	},
	"shopping-cart-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5 7h6l7 17h17.5L43 10m-22 2h12m-6-6v12m-9 6l-4 6h26\"/><circle cx=\"19\" cy=\"39\" r=\"3\"/><circle cx=\"35\" cy=\"39\" r=\"3\"/></g>"
	},
	"shopping-mall": {
		body: "<g fill=\"none\"><path d=\"M8 44V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v38\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 44V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v38m0-29l10 6v23\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M4 44h40\"/></g>"
	},
	"short-skirt": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m12 9l5-5h14l5 5l7 26s-3 9-19 9s-19-9-19-9zm1 33l4-16\"/><path d=\"M5 35s3 9 19 9\"/></g>"
	},
	shorts: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M37 6H11v10L4 33l15 9l5-6l5 6l15-9l-7-17z\"/><path fill=\"currentColor\" d=\"M11 14a2 2 0 1 0 0 4zm26 4a2 2 0 1 0 0-4zm-26 0h26v-4H11z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M37 14v2l1.75 4.25M11 14v2l-1.75 4.25\"/></g>"
	},
	"shoulder-bag": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M4.682 23.564A3 3 0 0 1 7.63 20h32.74a3 3 0 0 1 2.947 3.564l-3.062 16A3 3 0 0 1 37.309 42H10.691a3 3 0 0 1-2.947-2.436z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m24 6l-9 14h18z\"/><circle cx=\"24\" cy=\"31\" r=\"3\"/></g>"
	},
	shovel: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M13 4h22l-1 9l-8.5 6h-3L14 13zm11 15v11\"/><rect width=\"6\" height=\"14\" x=\"21\" y=\"30\" rx=\"3\"/></g>"
	},
	"shovel-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M11 4h26l-2.833 20H13.833z\"/><path d=\"M21 11v6m6-6v6m-3 7v20\"/></g>"
	},
	"shower-head": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M27 20v2H9v-2c0-3.314 4.03-6 9-6s9 2.686 9 6\"/><path d=\"M42 44V12.5C42 7.806 36.627 4 30 4s-12 3.806-12 8.5V14m0 15v-1m-7.829.03l-.342.94M4.171 43.03l-.342.94M18 44v-1m0-6v-2m-10.658.06l-.684 1.88\"/></g>"
	},
	shrimp: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20.623 11H39s0 5-3 8s-6 4-7 4s-10.5 1-13 3s-3.999 5.5 0 9s11 5 16 3s8-8 8-8l4 10s-8 3-15 4s-14 0-20-6s-7.001-13.5-2-20c4.166-5.416 10.414-6.666 12.382-6.933A9 9 0 0 1 20.623 11\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"m26 23l-6-12\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 4h14a7 7 0 0 1 7 7v0\"/><circle cx=\"30\" cy=\"16\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	shuffle: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 42h12V30m0-12V6H30m12 0L6 42m25.5-10.5L34 34l5 5l2.5 2.5l.5.5M24 24L6 6z\"/>"
	},
	"shuffle-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m40 33l4 4l-4 4m0-34l4 4l-4 4\"/><path d=\"M44 11h-7c-7.18 0-13 5.82-13 13s5.82 13 13 13h7M4 37h7c7.18 0 13-5.82 13-13s-5.82-13-13-13H4\"/></g>"
	},
	"shutter-priority": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m15 12l3-6h12l3 6zm26 0H7c-1.657 0-3 1.254-3 2.8v24.4C4 40.746 5.343 42 7 42h34c1.657 0 3-1.254 3-2.8V14.8c0-1.546-1.343-2.8-3-2.8Z\"/><path stroke-linecap=\"round\" d=\"M28 20c-3 .13-9 1.089-9 3.889c0 3.5 10 2.722 10 6.222c0 2.8-6.667 3.76-10 3.889\"/></g>"
	},
	sickbed: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4 23l36 12\"/><circle cx=\"12\" cy=\"16\" r=\"3\"/><path stroke-linejoin=\"round\" d=\"M29 36v-4.5L19 28v8z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18 27.5L23 14l18.374 7a3 3 0 0 1 1.8 3.686L40 35\"/></g>"
	},
	signal: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 6v36M29 16v26M19 26v16M8 36v6\"/>"
	},
	"signal-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M38.142 38.142A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142m-28.284 0A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142M15.1 14.1A13.96 13.96 0 0 0 11 24a13.96 13.96 0 0 0 4.1 9.9m17.8 0A13.96 13.96 0 0 0 37 24a13.96 13.96 0 0 0-4.1-9.9\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44V34m0-30v10\"/><path fill=\"currentColor\" d=\"M24 27a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/></g>"
	},
	"signal-strength": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38.142 38.142c7.81-7.81 7.81-20.474 0-28.284s-20.474-7.81-28.284 0s-7.81 20.474 0 28.284m22.627-5.657c4.687-4.686 4.687-12.284 0-16.97c-4.686-4.687-12.284-4.687-16.97 0c-4.687 4.686-4.687 12.284 0 16.97\"/><path d=\"M28 24a4 4 0 1 1-8 0a4 4 0 0 1 8 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 0v16m0 0h4m-4 0h-4\"/></g>"
	},
	"signal-tower": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17.081 6c-6.12 4.285-7.607 12.72-3.322 18.84s12.72 7.608 18.84 3.323zM22 31v11\"/><path d=\"M13 24.5L6 42h36M40 6L25 17M17 6h23l-7 21.5\"/></g>"
	},
	"signal-tower-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m12 44l8-40h8l8 40\"/><path d=\"M15 10h18\"/><path stroke-linejoin=\"round\" d=\"M12 26h24m-21 1l20 12m-2-12L14 39m16-28L15 26m3-15l15 15\"/></g>"
	},
	sim: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 4h24.889L40 11.273V44H8z\"/><path d=\"M33 26H15v10h18z\"/><path stroke-linecap=\"round\" d=\"M15 12v6m6-6v6m6-6v6\"/></g>"
	},
	"sim-card": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M10 44h28a2 2 0 0 0 2-2V14.885a2 2 0 0 0-.655-1.48L29.572 4.52A2 2 0 0 0 28.227 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2Z\"/><circle cx=\"17\" cy=\"14\" r=\"3\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 23h16v14H16z\"/></g>"
	},
	"single-bed": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 12a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v11H8zM6 35v4m36-4v4\"/><path d=\"M29 18H19a3 3 0 0 0-3 3v2h16v-2a3 3 0 0 0-3-3M4 26a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z\"/></g>"
	},
	sinusoid: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 24S6 4 14 4s9 15 10 20s4 20 11 20s9-20 9-20m-33 0h6m14 0h6\"/>"
	},
	"sippy-cup": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m34 44l3-28H11l3.5 28zM24 10l-2-6M6 16h36m-5.005 9s5.47 0 4.973 4.404C41.471 33.81 36 32.929 36 32.929M11.005 25s-5.47 0-4.973 4.404C6.529 33.81 12 32.929 12 32.929M37 10H11v6h26z\"/>"
	},
	six: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 41C13.5 38.25 8 30 5 25s3.313-9.687 7-6l4 4v-5.5a3.5 3.5 0 1 1 7 0V16a3.5 3.5 0 1 1 7 0v1.5a3.5 3.5 0 1 1 7 0v-10a3.5 3.5 0 1 1 7 0v21.466c0 2.003-.37 4.008-1.456 5.691C41.264 36.645 39.112 39.303 36 41c-5.5 3-11.5 2.75-17 0\"/>"
	},
	"six-circular-connection": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M37.856 20v8M27.464 38l3.464-2l3.464-2m-13.856 4l-3.465-2l-3.464-2m-3.463-14v8m3.463-14l3.465-2l3.464-2m6.928 0l3.464 2l3.464 2\"/><path d=\"M24 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-32a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8M10 20a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8\"/></g>"
	},
	"six-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"3\"/><path d=\"M24.5 33a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M29.596 17.74C28.778 15.545 26.804 14 24.5 14c-3.038 0-5.5 2.686-5.5 6v7\"/></g>"
	},
	"six-points": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 24V12m0 12l-10.5 6.062zm0 0l10.5 6.062zm-10-8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0 16a4 4 0 1 1-8 0a4 4 0 0 1 8 0m14 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m14-8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0-16a4 4 0 1 1-8 0a4 4 0 0 1 8 0M28 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0\"/>"
	},
	skate: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M44 39.82H4l32.54-18H44zM3.857 19.201L7.09 20.8l17.321-10l.232-3.598\"/><path fill=\"currentColor\" d=\"M12.33 24.88a3 3 0 1 0 0-6a3 3 0 0 0 0 6m11.12-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/></g>"
	},
	skates: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 5h26v8H5zm4 31V13h18v10c14 0 14 9 14 13zm-2 0h36v6H7z\"/>"
	},
	skating: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M44 4H28v8h16zm0 8v22c0 1.11-.89 2-2 2H8c-2.21 0-4-1.79-4-4v-6c0-4.42 3.58-8 8-8h16v-6zM14 24v-6m7 6v-6m-7 26v-8m22 8v-8M23 18H12m32 26H6a2 2 0 0 1-2-2v-1.37\"/>"
	},
	sketch: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M18.6 16h10.8l3.6 4.706L24 32l-9-11.294z\"/></g>"
	},
	"skiing-nordic": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M34 24h-6l-6-5l-3 10l6 6l2 9M17 34l-2 5l-6 5\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5 44h34l5-7M34 24v20\"/></g>"
	},
	skull: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m11.263 44l3.364-8.315C10.031 32.593 7 27.293 7 21.273C7 11.733 14.611 4 24 4s17 7.733 17 17.273c0 6.02-3.031 11.32-7.627 14.412L36.737 44z\"/><path stroke-linecap=\"round\" d=\"M20 38v6m8-6v6\"/><path d=\"M17 23a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm14 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z\"/><path stroke-linecap=\"round\" d=\"M32 44h-8m0 0h-8\"/></g>"
	},
	slave: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 38v-7.5M10 38V6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v1\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M25 13h-1a6 6 0 0 0-6 6v0a6 6 0 0 0 6 6h1m8-12h1a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6h-1m-8-6h8M10 38a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H16a6 6 0 0 1-6-6\"/><circle cx=\"32\" cy=\"38\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	sleaves: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M31 43s-13 1-20-7S4 4 4 4s24-1 32 5s6 23 6 23\"/><path d=\"M44 44s-11.18-8.449-18-16s-10-15-10-15m10 15l1-13m-1 13l-10-1\"/></g>"
	},
	sleep: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M16.866 7.47A18 18 0 0 0 16 13c0 9.941 8.059 18 18 18a17.9 17.9 0 0 0 7.134-1.47C38.801 36.767 32.012 42 24 42c-9.941 0-18-8.059-18-18c0-7.407 4.473-13.768 10.866-16.53Z\"/><path stroke-linecap=\"round\" d=\"M31.66 10H41l-10 8h10\"/></g>"
	},
	"sleep-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M7 6h17.143L7 24h18m4-9h12L29 29h12m-26 3h9.048L15 42h10\"/>"
	},
	"sleep-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 12v24m40-7v7m0-7H4m18-13v13h22V19a3 3 0 0 0-3-3z\"/><circle cx=\"13\" cy=\"20\" r=\"3\"/></g>"
	},
	slide: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M41 5.5H7v28h34z\"/><path stroke-linecap=\"round\" d=\"m16 41.5l8-8l8 8M13.924 24.663l5.642-5.508l4.442 4.345l9.959-9.98M4 5.5h40\"/></g>"
	},
	"slide-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 8h40\"/><path d=\"M8 8h32v26H8z\" clip-rule=\"evenodd\"/><path d=\"m31 18l3 3l-3 3m-14 0l-3-3l3-3m-1 24l8-8l8 8\"/></g>"
	},
	"sliding-horizontal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m28 20l4 4l-4 4m-8-8l-4 4l4 4\"/></g>"
	},
	"sliding-vertical": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m20 20l4-4l4 4m-8 8l4 4l4-4\"/></g>"
	},
	"slightly-frowning-face-whit-open-mouth": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 29c5 0 7 4 7 4H17s2-4 7-4m7-11v4m-14-4v4\"/></g>"
	},
	"slightly-smiling-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 18v1m-14-1v1m14 12s-2 4-7 4s-7-4-7-4\"/></g>"
	},
	slippers: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 29h40v6H4zm19.53-16c-3.5 4-3.5 12-3.5 16h20v-8.5S28 15 23.53 13\"/>"
	},
	"slippers-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 29h40v6H4zm3-7c-3 4-3 7-3 7h26v-8c0-2.5-1.5-5.5-5-6s-13.124.5-18 7\"/>"
	},
	"sly-face-whit-smile": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m34 21l-4-2m-11 0l-4 2m16 10s-2 4-7 4s-7-4-7-4\"/></g>"
	},
	"smart-optimization": {
		body: "<g fill=\"none\" fill-rule=\"evenodd\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" clip-rule=\"evenodd\"><path d=\"M24 45c3.22 0 8.728-4.2 8.728-21S27.22 3 24 3s-8.727 4.483-8.727 21S20.78 45 24 45\"/><path d=\"M5.105 35c1.61 2.812 8.143 5.421 23.259-3.379s16.142-15.809 14.531-18.62c-1.61-2.813-8.397-5.274-23.258 3.378C4.775 25.031 3.495 32.188 5.105 35\"/><path d=\"M5.105 13c-1.61 2.812-.585 9.821 14.532 18.621c15.116 8.8 21.648 6.191 23.258 3.38c1.61-2.813.33-9.97-14.531-18.622S6.715 10.188 5.105 13\"/></g>"
	},
	"smiling-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 31s-2 4-7 4s-7-4-7-4m14-13v4m-14-4v4\"/></g>"
	},
	"smiling-face-with-squinting-eyes": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 31s-2 4-7 4s-7-4-7-4m4-10s-1-4-4-4s-4 4-4 4m22 0s-1-4-4-4s-4 4-4 4\"/></g>"
	},
	snacks: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 14h36V8h-4l-2-4H12l-2 4H6z\"/><path stroke-linecap=\"round\" d=\"m36 44l2-30H10l2 30z\"/></g>"
	},
	"snake-zodiac": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"m35.786 39.083l2.828-2.828a6 6 0 0 0 0-8.486v0a6 6 0 0 0-8.485 0l-2.462 2.462m-10.266-6.705l7.071-7.07a6 6 0 0 0 0-8.486v0a6 6 0 0 0-8.485 0l-7.071 7.071\"/><path d=\"m18.283 22.645l-8.66 8.66a6 6 0 0 0 0 8.486v0a6 6 0 0 0 8.485 0l9.9-9.9\"/><path stroke-linejoin=\"round\" d=\"M15 9H7\"/></g>"
	},
	snow: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9.455 30.994A13.95 13.95 0 0 1 4 19.885C4 12.217 10.105 6 17.636 6c6.297 0 11.598 4.346 13.166 10.253a8.9 8.9 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.257c0 3.795-2.244 7.058-5.455 8.486M18 23v6m-3-3h6m10 0v6m-3-3h6m-10 7v6m-3-3h6\"/>"
	},
	snowflake: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 4v40M6.725 14l34.64 20M6.72 33.977l34.56-19.954M12 10l3 9l-9 2m0 6l9 2l-3 9m24-28l-3 9l9 2m0 6l-9 2l3 9M18 7l6 6l6-6M18 41l6-6l6 6\"/>"
	},
	snowman: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m12 24l-8-4m4 2v-4m32 4v-4\"/><circle cx=\"24\" cy=\"10\" r=\"6\" stroke=\"currentColor\" stroke-width=\"4\"/><ellipse cx=\"24\" cy=\"30\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"13\" ry=\"14\"/><circle cx=\"24\" cy=\"26\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"31\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"36\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m44 20l-8 4\"/></g>"
	},
	"soap-bubble": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><ellipse cx=\"22\" cy=\"30\" stroke-linejoin=\"round\" rx=\"16\" ry=\"14\"/><path d=\"M26 24c1.333.167 4 1 5 5\"/><circle cx=\"8\" cy=\"8\" r=\"4\" stroke-linejoin=\"round\"/><circle cx=\"41\" cy=\"13\" r=\"3\" stroke-linejoin=\"round\"/></g>"
	},
	soccer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M17.817 4.98C7.31 8.39 1.57 19.677 4.98 30.176c3.41 10.498 14.698 16.247 25.196 12.838c10.508-3.41 16.247-14.698 12.838-25.196C39.603 7.309 28.315 1.57 17.817 4.98\"/><path d=\"m34 21l-10-8l-10 8l4 12h12zm0 0l9-3m-7 22l-6-7m-12 0l-6 7m2-19l-9-3m19-5V4\"/></g>"
	},
	"soccer-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M29 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path fill=\"currentColor\" d=\"M19 46a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M24.38 18.91L20 27l7.31 6.02c.31.24.53.57.66.94L31 44M20 27l-5.49 7.64c-.54.79-1.56 1.09-2.44.72L4 32\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M42 24h-7c-.36 0-.72-.09-1.04-.27l-3.21-1.81c-4.01-2.35-8.4-3.96-12.97-4.78l-3.22-.57c-.45-.08-.92 0-1.32.22L7 20\"/></g>"
	},
	socks: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 18c-3 0-8 0-10 5s.5 9.5 3 12M18 10h22\"/><path d=\"M20 4h18a2 2 0 0 1 2 2v18.288c0 3.432-1.6 6.667-4.336 8.74C32.022 35.788 27.088 39.508 25 41c-3.5 2.5-10 5-15 0c-4.999-5-3.749-11.557.001-15s8-6.848 8-6.848V6a2 2 0 0 1 2-2\"/></g>"
	},
	sofa: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 21H4v14h8zm32 0h-8v14h8z\"/><path stroke-linecap=\"round\" d=\"M36 27H12v8h24zM8 20V8h32v12M8 36v4m32-4v4\"/></g>"
	},
	"sofa-two": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 38V18h-8v13H12V18H4v20z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 6H12v25h24z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M10 44a4 4 0 0 0 4-4c-1.097.004-7.3 0-8 0a4 4 0 0 0 4 4m28 0a4 4 0 0 0 4-4c-1.905-.007-7.137 0-8 0a4 4 0 0 0 4 4\" clip-rule=\"evenodd\"/></g>"
	},
	softball: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M24 44c11.05 0 20-8.95 20-20S35.05 4 24 4S4 12.95 4 24s8.95 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M10 38c3.7-3.63 6-8.41 6-14c0-5.52-2.38-10.38-6-14m28 28c-3.7-3.63-6-8.41-6-14c0-5.52 2.38-10.38 6-14M28 24h8m-24 0h8m10 10l6-3m0-14l-6-3M18 34l-6-3m0-14l6-3\"/></g>"
	},
	"solar-energy": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"40\" height=\"24\" x=\"4\" y=\"8\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M30 32V8M18 32V8m24 12H6m18 21v-9m7 9H17\"/></g>"
	},
	"solar-energy-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M10 30h6a6 6 0 0 1 0 12h-6z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 28v16M4 32h6m-6 6h6m12-2h8a2 2 0 0 0 2-2V23m0-19v7m-9.121-3.121l4.243 4.243m-4.243 12.999l4.243-4.242m13.999-13l-4.242 4.243m4.242 12.999L36.88 20.88\"/><circle cx=\"32\" cy=\"17\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20 17h6m12 0h6\"/></g>"
	},
	"solid-state-disk": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 29H4v13h40z\"/><path fill=\"currentColor\" d=\"M35.5 38a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 29L9.038 4.999H39.02l4.98 24\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M10 35.5h17\"/></g>"
	},
	"sorcerer-hat": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 40c11.046 0 20-1.79 20-4c0-1.439-3.299-2.7-9-3.405L27 12L15 8l3 6l-5 18.595C7.299 33.3 4 34.56 4 36c0 2.21 8.954 4 20 4\"/>"
	},
	sort: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m24 42l-9-13h18zm0-36l-9 13h18z\"/>"
	},
	"sort-amount-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M23 8h20M14 41l-8-8m8-26v34m9-23h16M23 28h12M23 38h8\"/>"
	},
	"sort-amount-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M23 9h20M5 16l8-8m0 0v34m10-23h16M23 29h12M23 39h8\"/>"
	},
	"sort-four": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 11.988L23.994 4L32 12m0 24.012L24.006 44L16 36m8-32v40\"/>"
	},
	"sort-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 11.5h23m-23 13h23m7-13v26l6-7m-36 7h23\"/>"
	},
	"sort-three": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m25 14l-9-9l-9 9m8.992 17V5M42 34l-9 9l-9-9m8.992-17v26\"/>"
	},
	"sort-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 6v36M7 17.9l12-12m10 36.2v-36m0 36l12-12\"/>"
	},
	sound: {
		body: "<g fill=\"none\"><rect width=\"32\" height=\"40\" x=\"8\" y=\"4\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\"/><circle cx=\"24\" cy=\"15\" r=\"5\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"14\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><circle cx=\"14\" cy=\"38\" r=\"2\" fill=\"currentColor\"/><circle cx=\"34\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><circle cx=\"34\" cy=\"38\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"32\" r=\"6\" stroke=\"currentColor\" stroke-width=\"4\"/></g>"
	},
	"sound-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M9 7a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v34a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3z\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 29a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z\"/><rect width=\"4\" height=\"4\" x=\"30\" y=\"8\" fill=\"currentColor\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M27 36h2m-10 0h2\"/></g>"
	},
	"sound-wave": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 14v-2a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v2m-10 4v12m8-10v8M24 15v18m-8-15v12M8 20v8m-2 6v2a6 6 0 0 0 6 6h24a6 6 0 0 0 6-6v-2\"/>"
	},
	"source-code": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M23 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v14.882\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m34 33l-4 4l4 4m6-8l4 4l-4 4\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 10 14)\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 16 14)\"/></g>"
	},
	"soybean-milk-maker": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M35 10h5.064a1 1 0 0 1 .998.934l.867 13A1 1 0 0 1 40.93 25H32M7 5h28l-4 26H15l-3-21zm8 26h16l4 12H11zm6 6h4\"/>"
	},
	"spa-candle": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6.54 26.434A2 2 0 0 1 8.494 24h31.014a2 2 0 0 1 1.952 2.434l-3.111 14A2 2 0 0 1 36.396 42H11.604a2 2 0 0 1-1.952-1.566zM20.643 9.889C22.074 8.009 23.178 5.41 23.774 4c1.044 1.41 3.31 4.948 4.026 6.829c.894 2.35-1.342 5.171-4.026 5.171s-4.92-3.76-3.131-6.111M24 16v8\"/>"
	},
	"space-colony": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M42 43V6a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v18\"/><path d=\"M24 22c-9.941 0-18 8.059-18 18v4h36v-4c0-9.941-8.059-18-18-18Z\"/><path stroke-linecap=\"round\" d=\"M8 31V8m8 16V14\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M31 14h11\"/><path d=\"M17 42v-3c0-9.389 3.134-17 7-17s7 7.611 7 17v3\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 44h40\"/><path d=\"M7 35s10.35-1 17-1s17 1 17 1\"/></g>"
	},
	spanner: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30.442 5c1.964 0 3.823.448 5.479 1.246l-3.204 3.18a4.67 4.67 0 0 0 0 6.64a4.753 4.753 0 0 0 6.687 0l2.853-2.832c.48 1.322.743 2.748.743 4.234c0 6.887-5.623 12.469-12.558 12.469c-1.66 0-3.244-.32-4.693-.9L13.07 41.625a4.75 4.75 0 0 1-6.685 0a4.67 4.67 0 0 1 0-6.637L18.952 22.51a12.35 12.35 0 0 1-1.069-5.042C17.883 10.583 23.506 5 30.442 5Z\"/>"
	},
	speaker: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M38 2H10a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z\"/><path d=\"M24 38a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0-20a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/></g>"
	},
	"speaker-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 15h11v18H4zm11 0l18-7v32l-18-7m25-16h2m-3 8h5m-4 8h2\"/>"
	},
	speed: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M34.023 6.69A19.9 19.9 0 0 0 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20c0-3.627-.966-7.03-2.654-9.962\"/><path d=\"M31.95 16.05S28.562 25.095 27 26.657A4 4 0 0 1 21.343 21c1.562-1.562 10.607-4.95 10.607-4.95Z\"/></g>"
	},
	"speed-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M30.297 18.779s-3.23 9.102-4.764 10.691a4 4 0 0 1-5.754-5.557c1.534-1.59 10.518-5.134 10.518-5.134Z\"/><path stroke-linecap=\"round\" d=\"M38.85 38.85A20.94 20.94 0 0 0 45 24c0-11.598-9.402-21-21-21S3 12.402 3 24c0 5.799 2.35 11.049 6.15 14.85M24 4v4m14.845 3.142l-3.108 2.517m6.785 13.574l-3.897-.9m-33.148.9l3.898-.9m-.22-15.191l3.108 2.517\"/></g>"
	},
	sperm: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M18.237 24.475c1.856 1.299 2.33 2.674 3.609 3.57c1.4.98 2.947 1.5 4.169 1.014c2.307-.916 3.976-3.908 6.011-6.815c3.96-5.655 3.954-14.385.26-16.971c-3.692-2.586-11.843.433-15.802 6.088c-1.935 2.763-4.47 6.445-4.317 8.002c.129 1.311.57 2.042 1.958 3.275s2.132.45 4.112 1.837Z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M13.618 22.317q-5.312 5.847-1.403 8.885q3.908 3.038 9.815-2.995\"/><path stroke-linecap=\"round\" d=\"M12.239 31.227q-4.645 5.081-1.71 9.477c2.937 4.396 8.755 4.155 11.595.879s8.184-11.396 14.059-9.727s4.877 8.088.939 8.762\"/></g>"
	},
	sphere: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 32c11.046 0 20-3.582 20-8s-8.954-8-20-8s-20 3.582-20 8s8.954 8 20 8\"/><path stroke-linecap=\"round\" d=\"M32 24c0 11.046-3.582 20-8 20s-8-8.954-8-20s3.582-20 8-20s8 8.954 8 20\"/><circle cx=\"24\" cy=\"24\" r=\"20\"/></g>"
	},
	"spider-man": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M33 24c3.5 3 4.613 8.446 2.882 12.484c-1.73 4.038-5.769 7.5-10.384 8.076s-9.23-2.884-10.384-4.038a10.6 10.6 0 0 1-1.105-1.307a1.514 1.514 0 0 1 .118-1.917c.865-.954 2.368-2.269 3.871-1.968c2.885.577 3.968 1.578 6.346.577C26.5 35 27.23 33.023 27.23 31.292c0-1.73-1.154-3.462-3.462-4.038c-2.307-.577-4.615.576-5.192 2.307s0 2.885-1.73 4.038c-.588.392-1.403.763-2.147 1.06c-1.03.41-2.15-.199-2.234-1.303c-.177-2.324.247-5.664 2.65-8.41c1.246-1.424 2.411-2.392 3.461-3.051\"/><path d=\"M33 24L23.128 4.24c-.23-.46-.776-.677-1.222-.42c-1.04.597-2.26 1.722-1.863 3.467c.51 2.25 3.537 12.761 4.956 15.713m-2.5-6l-6.87-6.52c-.36-.343-.925-.373-1.264-.009c-.822.88-1.674 2.333-.764 3.895C14.763 16.36 17.761 20.61 20 23\"/></g>"
	},
	spikedshoes: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M44 6H28v8h16zm0 8v22c0 1.11-.89 2-2 2H8c-2.21 0-4-1.79-4-4v-6c0-4.42 3.58-8 8-8h16v-6zM14 26v-6m7 6v-6m-6 22v-4m-7 4v-4m14 4v-4m12 4v-4m7 4v-4M23 20H12\"/>"
	},
	"spinning-top": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M24 44v-3m20-21L24 41L4 20zm0-8H4v8h40zm-20 0V4\"/>"
	},
	split: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19 10V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2h-4\"/><rect width=\"24\" height=\"24\" x=\"5\" y=\"18\" rx=\"2\"/></g>"
	},
	"split-branch": {
		body: "<g fill=\"none\"><path d=\"M44 44V4H24v13l9 9v18zM4 4v40h21V30l-9-9V4z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 44V4H24v13l9 9v18zM4 4v40h21V30l-9-9V4z\"/></g>"
	},
	"split-cells": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M4 14V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v38a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9m40 0v9a1 1 0 0 1-1 1H29a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9M28 24l16 .013m-40 0L20 24\"/><path stroke-linejoin=\"round\" d=\"m39.228 28.778l1.59-1.591l3.183-3.182l-3.182-3.182l-1.592-1.591M8.755 28.786l-1.59-1.59l-3.183-3.183l3.182-3.182l1.591-1.59\"/></g>"
	},
	"split-turn-down-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M37 22H21a8 8 0 0 0-8 8v14\"/><circle cx=\"37\" cy=\"8.944\" r=\"5\" transform=\"rotate(-90 37 8.944)\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M37 14v29m5-4l-5 5l-5-5m-14 0l-5 5l-5-5\"/></g>"
	},
	"split-turn-down-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 22h16a8 8 0 0 1 8 8v14\"/><circle cx=\"13\" cy=\"8.944\" r=\"5\" transform=\"rotate(-90 13 8.944)\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 14v29m5-4l-5 5l-5-5m34 0l-5 5l-5-5\"/></g>"
	},
	spoon: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"20\" height=\"20\" x=\"14\" y=\"4\" rx=\"10\"/><path d=\"M24 24v12\"/><rect width=\"6\" height=\"8\" x=\"21\" y=\"36\" rx=\"3\"/></g>"
	},
	sport: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M36 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m12 16.77l8.003-2.772L31 19.247l-10.997 8.197L31 34.684l-6.992 9.314M35.32 21.643l2.682 1.459L44 17.466M16.849 31.545l-2.97 3.912l-9.875 5.54\"/></g>"
	},
	sporting: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"8\" r=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7 18h12v16m22-16H29v26\"/></g>"
	},
	square: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/>"
	},
	"square-small": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"M34 12H14a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z\"/>"
	},
	ssd: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 38V6a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v32m15-24h-2m2 8h-2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 38a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H16a6 6 0 0 1-6-6m7 1v5m5-5v5m5-5v5\"/><circle cx=\"32\" cy=\"38\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M29 44H15\"/></g>"
	},
	"stack-light": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17 4h14v30H17z\"/><path stroke-linecap=\"round\" d=\"M17 14h14M17 24h14M6.879 7.879l4.243 4.243M6.879 33.121l4.243-4.243M41.121 7.879l-4.242 4.243m4.242 20.999l-4.242-4.243M4 21h6m28 0h6\"/><path d=\"M20 34h8v10h-8z\"/></g>"
	},
	stamp: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 8.8L8.8 5l3.8 2.85L16.4 5l3.8 2.85L24 5l3.8 2.85L31.6 5l3.8 2.85L39.2 5L43 8.8l-2.85 3.8L43 16.4l-2.85 3.8L43 24l-2.85 3.8L43 31.6l-2.85 3.8L43 39.2L39.2 43l-3.8-2.85L31.6 43l-3.8-2.85L24 43l-3.8-2.85L16.4 43l-3.8-2.85L8.8 43L5 39.2l2.85-3.8L5 31.6l2.85-3.8L5 24l2.85-3.8L5 16.4l2.85-3.8z\"/><circle cx=\"24\" cy=\"24\" r=\"9\"/></g>"
	},
	"stand-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M17 22.458c-4.057 1.274-7 5.065-7 9.542c0 5.523 4.477 10 10 10a9.99 9.99 0 0 0 8.662-5\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m17 18l1.5-2H30l-7 14h14v14\"/><circle cx=\"34\" cy=\"8\" r=\"4\"/></g>"
	},
	stapler: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M42 35v8H6v-8h25m7.384-13.193L8.314 10.862l-2.736 7.517l24.175 8.8M8.37 10.778l14.512 5.38a.03.03 0 0 0 .04-.018v0a5.285 5.285 0 0 0-3.119-6.792l-9.502-3.523a.09.09 0 0 0-.115.053zm8.385 11.942l-1.368 3.759a1 1 0 0 1-1.282.597l-6.578-2.394a1 1 0 0 1-.598-1.281l1.368-3.76\"/><circle cx=\"36\" cy=\"30\" r=\"7\"/></g>"
	},
	star: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013z\"/>"
	},
	"star-one": {
		body: "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"m16.871 33.044l-.873 11.66c-.062.82.667 1.383 1.318 1.018c4.613-2.584 19.062-12.074 26.386-32.932c.336-.957-.567-1.82-1.337-1.28c-4.326 3.03-13.78 9.29-19.623 10.484c0 0 3.742-2.6 5.981-6.588a1.2 1.2 0 0 0-.043-1.245L20.513 2.389c-.484-.697-1.478-.408-1.652.481l-2.543 12.937L4.384 26.223c-.598.522-.476 1.577.215 1.856zm21.104-4.596c-.756 1.055-2.384 3.224-3.887 4.55c-.3.265-.26.709.084.925l7.943 4.986c.478.3 1.123-.056 1.043-.576c-.37-2.383-1.434-7.351-4.125-9.959c-.3-.29-.819-.26-1.059.074\" clip-rule=\"evenodd\"/>"
	},
	"start-time-sort": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M6 5v25h36V5\"/><path stroke-linejoin=\"round\" d=\"M30.037 10L25 15.014l5.037 5.098M30 37l-6 6l-6-6m6-7v13\"/><path d=\"M20 9.002V21\"/></g>"
	},
	"steering-wheel": {
		body: "<defs><path id=\"ipOSteeringWheel0\" d=\"M32 24a8 8 0 1 1-16 0a8 8 0 0 1 16 0\"/></defs><g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0 0V32M4 24h12m28 0H32\"/><use href=\"#ipOSteeringWheel0\"/><use href=\"#ipOSteeringWheel0\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 24a8 8 0 1 1-16 0a8 8 0 0 1 16 0\"/></g>"
	},
	steoller: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 24H12l2.5 10H36zm-28 0l-4-9H3.5\"/><circle cx=\"20\" cy=\"41\" r=\"3\"/><circle cx=\"31\" cy=\"41\" r=\"3\"/><path d=\"m23 8l5 16h12s3.5-8-2.5-14S25.667 6.667 23 8\"/></g>"
	},
	"stereo-nesting": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17 40L4 33V17l13-7l13 7v12\"/><path d=\"m30 8l13 7v16l-13 7l-13-7V19\"/></g>"
	},
	"stereo-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"30\" height=\"38\" x=\"9\" y=\"5\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 18h30\"/><circle cx=\"24\" cy=\"30\" r=\"6\"/></g>"
	},
	"stereo-perspective": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 44V14L14 4h30v30L34 44zm30-30v30M14 4v30M4 14h30M44 4L34 14M4 44l10-10m0 0h30\"/>"
	},
	stethoscope: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M21.947 4v6M10.053 7H4v14c0 5 4 11 12 11s12-6 12-11V7zm0-3v6zM40 23a4 4 0 1 0 0-8a4 4 0 0 0 0 8\"/><path d=\"M16 32c0 6.627 5.373 12 12 12s12-5.373 12-12v-9\"/></g>"
	},
	stickers: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44c11.046 0 20-8.954 20-20c0 0-10.5 3-17-4S24 4 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20m20-20L24 4\"/>"
	},
	"stock-market": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 20h8v14H6zm14-6h8v26h-8z\"/><path stroke-linecap=\"round\" d=\"M24 44v-4\"/><path d=\"M34 12h8v9h-8z\"/><path stroke-linecap=\"round\" d=\"M10 20V10m28 24V21m0-9V4\"/></g>"
	},
	stopwatch: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c9.389 0 17-7.611 17-17s-7.611-17-17-17S7 17.611 7 27s7.611 17 17 17Z\"/><path stroke-linecap=\"round\" d=\"M31 4H17m21 6l-3 3m-11 5v9\"/></g>"
	},
	"stopwatch-start": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c9.389 0 17-7.611 17-17s-7.611-17-17-17S7 17.611 7 27s7.611 17 17 17Z\"/><path stroke-linecap=\"round\" d=\"M18 4h12m-6 15v8m8 0h-8m0-23v4\"/></g>"
	},
	"storage-card-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M33.778 4h-18v8h18z\"/><path stroke-linecap=\"round\" d=\"M15.366 4h-4.588a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H34.19\"/><path stroke-linecap=\"round\" d=\"m27.778 20l-8 8.001h10.004l-8.004 8\"/></g>",
		width: 49
	},
	"storage-card-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"32\" height=\"40\" x=\"8\" y=\"4\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14 4v10h20V4M14 24h20v20H14zm0 8h20m0-3v6m-20-6v6\"/></g>"
	},
	"straight-razor": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"38\" height=\"6\" x=\"3.609\" y=\"36.534\" rx=\"2\" transform=\"rotate(-10 3.61 36.534)\"/><path d=\"m44 40l-4-4M8 4l18.385 18.385l-4.243 4.242L9.414 13.9c-2.828-2.83-2.828-4.243-2.828-5.657C6.586 6.828 8 4 8 4m0 0l18 18l9 9\"/></g>"
	},
	"straw-hat": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M34 22c0-5.523-4.477-10-10-10s-10 4.477-10 10m0 1c-5.978 1.204-10 3.456-10 6.034C4 32.881 12.954 36 24 36s20-3.119 20-6.966c0-2.578-4.022-4.83-10-6.034\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14 22c1 .833 4 4 10 4s9-3 10-4m-15 3l2-5\"/></g>"
	},
	stretching: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23 6H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V25\"/><path stroke-linecap=\"round\" d=\"M24.001 16v8M42 6v8m-9.999 10h-8\"/><path d=\"M42 6L24 24\"/><path stroke-linecap=\"round\" d=\"M42 6h-8\"/></g>"
	},
	"stretching-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"8\" r=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m41 8l-12 9.59V44M10.111 23.25L19 18v10.917L7 41\"/></g>"
	},
	strikethrough: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 24h38m-19 0c16 6 10 20 0 20s-12-8-12-8m24-24s-3-8-12-8s-12.564 7.6-8.39 14\"/><path d=\"M12 36s4 8 12 8s12.564-7.6 8.39-14\"/></g>"
	},
	strongbox: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3\"/><path fill=\"currentColor\" d=\"M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 24a2 2 0 1 0 0-4a2 2 0 0 0 0 4m24-24a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 24a2 2 0 1 0 0-4a2 2 0 0 0 0 4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18\"/></g>"
	},
	"subtract-selection": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"27\" height=\"27\" x=\"16\" y=\"16\" rx=\"2\"/><path d=\"M16 32H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h23a2 2 0 0 1 2 2v9m-3 0L16 30m22-14L16 40m27-19L23 43m20-11L33 43\"/></g>"
	},
	"subtract-selection-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M32 16h9a2 2 0 0 1 2 2v23a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-9\"/><rect width=\"27\" height=\"27\" x=\"5\" y=\"5\" rx=\"2\"/><path d=\"M18 5L5 19M27 5L5 29m27-19L12 32m20-11L22 32\"/></g>"
	},
	subway: {
		body: "<g fill=\"none\"><rect width=\"32\" height=\"26\" x=\"8\" y=\"6\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"2\"/><circle cx=\"14\" cy=\"27\" r=\"2\" fill=\"currentColor\"/><circle cx=\"34\" cy=\"27\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 12h20v10H14zm18 20l8 9m-23-9l-9 9\"/></g>"
	},
	success: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012z\"/><path d=\"m17 24l5 5l10-10\"/></g>"
	},
	"success-picture": {
		body: "<g fill=\"none\"><path fill=\"currentColor\" d=\"M44 22a2 2 0 1 0-4 0zM24 8a2 2 0 1 0 0-4zm15 32H9v4h30zM8 39V9H4v30zm32-17v17h4V22zM9 8h15V4H9zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1zM8 9a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 35l10.693-9.802a2 2 0 0 1 2.653-.044L32 36m-4-5l4.773-4.773a2 2 0 0 1 2.615-.186L42 31\"/><path fill=\"currentColor\" d=\"M31.414 9.586a2 2 0 1 0-2.828 2.828zM34 15l-1.414 1.414a2 2 0 0 0 2.828 0zm9.414-6.586a2 2 0 1 0-2.828-2.828zm-14.828 4l4 4l2.828-2.828l-4-4zm6.828 4l8-8l-2.828-2.828l-8 8z\"/></g>"
	},
	sum: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19 7v12H7a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V29h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H21a2 2 0 0 0-2 2\"/>"
	},
	sun: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"m9.15 9.15l2.228 2.228M3 24h3.15m3 14.85l2.228-2.228M38.85 38.85l-2.228-2.228M45 24h-3.15m-3-14.85l-2.228 2.228M24 3v3.15\"/><path fill=\"currentColor\" d=\"M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12s-12 5.373-12 12s5.373 12 12 12Z\"/><path stroke-linecap=\"round\" d=\"M24 45v-3.15\"/></g>"
	},
	"sun-hat": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 10a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v10H12zm32 25c-1.108 1.333-2.375 5-7.6 5c-2.737 0-6.456-1.684-11.4-3\"/><path d=\"M4 35s6-9 8-15h24c2 6 8 15 8 15c-6-4-25 5-32 5c-5.5 0-6.833-3.667-8-5\"/></g>"
	},
	"sun-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 37c7.18 0 13-5.82 13-13s-5.82-13-13-13s-13 5.82-13 13s5.82 13 13 13Z\"/><path fill=\"currentColor\" d=\"M24 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m14.5 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m6 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-6 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M24 47a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M9.5 41a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-6-14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m6-14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\"/></g>"
	},
	sunbath: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M11 36v4\"/><path stroke-linejoin=\"round\" d=\"M6 36h34M8 30h16m13-19l-3 5\"/><path d=\"M35 36v4\"/><path stroke-linejoin=\"round\" d=\"M44 10L29 36m10-17l5 9\"/></g>"
	},
	sunny: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30.783 24.565a6.783 6.783 0 1 0-6.683-7.947\"/><path fill=\"currentColor\" d=\"M33 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9 5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4M22 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9.455 39.994A13.95 13.95 0 0 1 4 28.885C4 21.217 10.105 15 17.636 15c6.297 0 11.598 4.346 13.166 10.253a8.9 8.9 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.256c0 3.796-2.244 7.059-5.455 8.487\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22.243 24.757a6 6 0 0 0-8.485 8.485\"/></g>"
	},
	sunrise: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 24h3m3-14l2 2m12-8v3M14 24c0-5.522 4.478-10 10-10s10 4.478 10 10a9.99 9.99 0 0 1-4.215 8.158M38 10l-2 2m8 12h-3m-3.019 13.982l-1.62-1.62\"/><path d=\"M23.5 28c-3 0-9.5.2-9.5 3s4.606 2.79 7 3c2 .175 5.462 1.688 5 4c-1 5-17 4-21 4\"/></g>"
	},
	sunset: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"m19 8l14 26H5z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m29 26l5-6l9 14H32m-22 7h28\"/><circle cx=\"38\" cy=\"10\" r=\"3\"/></g>"
	},
	sunshade: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40.103 25.817c-.896 2.283-9.672 3.009-18.741.578c-9.07-2.43-14.78-6.843-14.1-9.378c1.533-5.724 9.712-14.555 21.41-10.328c11.696 4.226 12.965 13.404 11.431 19.128\"/><path d=\"M28 7s-4 6.5-7 17s-3 18-3 18M28 7S17.794 8.844 15 17M28 7s6 6 3 15\"/><path d=\"M10 43s9-1.5 16-1.5s13 .5 13 .5M28 7c1 0 3-1 3.814-2.58M34 41c0-1.657-1-4-4-4s-4 2.343-4 4\"/></g>"
	},
	"surprised-face-with-open-big-mouth": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 18v1m-14-1v1\"/><rect width=\"12\" height=\"12\" x=\"18\" y=\"24\" stroke-linecap=\"round\" rx=\"6\"/></g>"
	},
	"surprised-face-with-open-mouth": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 18v1m-14-1v1\"/><rect width=\"8\" height=\"8\" x=\"20\" y=\"28\" stroke-linecap=\"round\" rx=\"4\"/></g>"
	},
	"surveillance-cameras": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M43 6H5m18 17V6M8.425 19.58l31.876 8.54l-1.743 2.64l-4.002 7.21l-1.743 2.639l-28.011-7.506z\"/><path d=\"m38.558 30.76l3.864 1.035l-2.07 7.727l-5.796-1.552\"/></g>"
	},
	"surveillance-cameras-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 26v16m0-9h7l4-6M7 20l26.474 17.649a1 1 0 0 0 1.069.025L44 32\"/><path d=\"M7.078 12.719a1 1 0 0 1-.11-1.58l7.46-6.63a1 1 0 0 1 1.212-.09l27.065 17.732a1 1 0 0 1-.011 1.68l-9.144 5.82a1 1 0 0 1-1.092-.012z\"/></g>"
	},
	"surveillance-cameras-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M19.006 26.276V37H5m37.62-15.785l-3.863-1.035l-4.003 7.21l5.796 1.553z\"/><path d=\"m38.757 20.18l-4.003 7.21l-1.742 2.639L5 22.523L8.623 9L40.5 17.541z\"/></g>"
	},
	swallow: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M8.999 33.314L24.034 6.942Q25.42 4 29.04 4c3.62 0 5.977 4.986 5.977 4.986L39 9.58q-6.016.098-6.957 2.42c-.94 2.322 2.456 4.73 2.975 8.004s-1.55 8.801-6.529 11.563Q23.51 34.329 16.058 33l-6.1 11\"/><path d=\"M18.942 27.978q3.87-6.974 5.087-8.957c1.219-1.982 6.246-1.384 4.44 3.563q-1.806 4.947-9.527 5.394Z\" clip-rule=\"evenodd\"/></g>"
	},
	sweater: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 37H6V24l5-15l8-5h10l9 5l4 15v13h-8v7H14zm20-9v9m-20-9v9\"/>"
	},
	"swimming-pool": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M36 27V8c0-2.21 1.79-4 4-4h4M10 27V8c0-2.21 1.79-4 4-4h4m-8 8h26m-26 8h26M4 34l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 34M4 40l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 40\"/>"
	},
	"swimming-ring": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M28 33.168A10.04 10.04 0 0 0 33.168 28m-18.336 0A10.04 10.04 0 0 0 20 33.168m0-18.336A10.04 10.04 0 0 0 14.832 20M28 14.832A10.04 10.04 0 0 1 33.168 20M30 40.976A18.05 18.05 0 0 0 40.976 30M7.024 30A18.05 18.05 0 0 0 18 40.976m0-33.952A18.05 18.05 0 0 0 7.024 18M30 7.024A18.05 18.05 0 0 1 40.976 18\"/><path stroke-linejoin=\"round\" stroke-miterlimit=\"2\" d=\"M27 17h-6L18 7l2-3h8l2 3zm-10 4v6L7 30l-3-2v-8l3-2zm4 10h6l3 10l-2 3h-8l-2-3zm10-4v-6l10-3c1.08.8 1.92 1.2 3 2v8c-1.08.8-1.92 1.2-3 2z\"/></g>"
	},
	swimsuit: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M14 4v7m20-7v7M12 31h24v5c-3 0-10 3-10 8h-5c0-5-6-8-9-8z\"/><circle cx=\"14\" cy=\"18\" r=\"7\"/><circle cx=\"34\" cy=\"18\" r=\"7\"/><path d=\"M21 18h6\"/></g>"
	},
	swing: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 36c-2-3.5-2.001-10-2-19c0-3 4-4 6-1c1.107 1.662 1.816 6.264 1.816 6.264l6.495-11.25a2.52 2.52 0 1 1 4.365 2.52l.388-.67a2.52 2.52 0 1 1 4.366 2.52l-.388.671a2.52 2.52 0 1 1 4.365 2.52l-1.552 2.69a2.523 2.523 0 0 1 4.373 2.518l-9.17 15.962c-.097.17-.197.337-.32.489C28.167 40.94 26.143 43 22 43c-4.66 0-9.522-2.661-12-7M37 5c1.379.733 3.505 1.758 5 4c1 1.5 1.5 3.5 1.79 6\"/>"
	},
	swipe: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m6 15l13.371 10.538C20.5 26.5 22.828 28 25 26c2.29-2.108.5-4.5 0-5l-8-6M4 8h23l11 10M9 33l35 .02\"/><path d=\"M9 18v22h35V18H22\"/></g>"
	},
	"switch": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 19H6M30 7l12 12M6.799 29h36m-36 0l12 12\"/>"
	},
	"switch-button": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M36 4H12a8 8 0 1 0 0 16h24a8 8 0 1 0 0-16Zm0 24H12a8 8 0 1 0 0 16h24a8 8 0 1 0 0-16Z\"/><path d=\"M36 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM12 38a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z\"/></g>"
	},
	"switch-contrast": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 10h10c1.886 0 2.828 0 3.414.586S44 12.114 44 14v20c0 1.886 0 2.828-.586 3.414S41.886 38 40 38H30M18 10H8c-1.886 0-2.828 0-3.414.586S4 12.114 4 14v20c0 1.886 0 2.828.586 3.414S6.114 38 8 38h10m6-32v36\"/>"
	},
	"switch-nintendo": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M6 12a8 8 0 0 1 8-8h5a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2h-5a8 8 0 0 1-8-8zm36 2a8 8 0 0 0-8-8h-6a2 2 0 0 0-2 2v34a2 2 0 0 0 2 2h6a8 8 0 0 0 8-8z\"/><rect width=\"5\" height=\"5\" x=\"11\" y=\"30\" fill=\"currentColor\" rx=\"2.5\"/><rect width=\"5\" height=\"5\" x=\"31.5\" y=\"14\" fill=\"currentColor\" rx=\"2.5\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15 17h-3m22 11v6m-3-3h6\"/></g>"
	},
	"switch-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"19\"/><rect width=\"10.519\" height=\"24.012\" x=\"36.006\" y=\"19.334\" rx=\"5.259\" transform=\"rotate(90 36.006 19.334)\"/><rect width=\"10\" height=\"10\" x=\"36.006\" y=\"29.852\" rx=\"5\" transform=\"rotate(-180 36.006 29.852)\"/></g>"
	},
	"switch-themes": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M23 4v23h20.993L44 4z\" clip-rule=\"evenodd\"/><path d=\"M31.005 44H18.658c-1.702 0-3.742-.568-5.11-2.387c-.925-1.23-1.543-3.03-1.543-5.613V25\"/><path stroke-linejoin=\"round\" d=\"m4 33l8.005-8l8.009 8\"/><path d=\"M30 19h7m-7-7h7\"/></g>"
	},
	"switch-track": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 4v14L8 30v14m0-22v-5m0-8V4m32 40v-5m0-8v-5\"/>"
	},
	"switching-done": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M29.633 4h-7.64v23h22v-6.037\"/><path stroke-linejoin=\"round\" d=\"m29.002 13.003l4.563 4.442L45 6\"/><path d=\"M30.005 44H17.658c-1.702 0-3.742-.568-5.11-2.387c-.925-1.23-1.543-3.03-1.543-5.613V25\"/><path stroke-linejoin=\"round\" d=\"m3 33l8.005-8l8.009 8\"/></g>"
	},
	symbol: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 40.003h14.004Q8 33.452 8 24c0-9.453 7.017-16 16.008-16C33 8 40 15 40 24q0 9-9.993 16.003H44\"/>"
	},
	"symbol-double-x": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m10 4l14 14L38 4M10 44l14-14l14 14m5-34L29 24l14 14M4 10l14 14L4 38\"/>"
	},
	symmetry: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m4 15l20-6v30L4 33zm20-6l20 6v18l-20 6z\"/><path stroke-linecap=\"round\" d=\"M24 4v40\"/></g>"
	},
	sync: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 7.979L19 8v10H4v14h17m-1 10l11-.021v-10.4h13V18H30.345\"/>"
	},
	system: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 6H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 22H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Zm17-8a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm5 8H30a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Z\"/>"
	},
	"t-shirt": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m9 9l9-5h12l9 5l4 15l-8 6v14H13V30l-8-6zm4 22v-7m22 7v-7\"/>"
	},
	table: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"32\" height=\"40\" x=\"8\" y=\"4\" rx=\"2\"/><path d=\"M14 16h20m-20 8h20m-20 8h20M18 12v24\"/></g>"
	},
	"table-file": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 6H6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M4 18h40m-26.5 0v24m13-24v24M4 30h40m0-22v32a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8\"/></g>"
	},
	"table-lamp": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m31 44l11-16l-20-16M6 12l10 10l8-14l-4-4zm32 32H12m5 0v-4\"/>"
	},
	"table-report": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 7a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v37H8a3 3 0 0 1-3-3zm30 17a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v17a3 3 0 0 1-3 3h-5z\"/><path stroke-linecap=\"round\" d=\"M11 12h8m-8 7h12\"/></g>"
	},
	tabletennis: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M31.45 16.96a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"m36 34l-2-11l-11 5l-13-3M4 41.03h40\"/><circle cx=\"9\" cy=\"25\" r=\"5\" fill=\"currentColor\"/><circle cx=\"6\" cy=\"17\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"m34 23l10 6l-15 5\"/></g>"
	},
	tag: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M8 44V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v38l-16-8.273z\"/><path stroke-linecap=\"round\" d=\"M16 18h16\"/></g>"
	},
	"tag-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42.17 29.245L29.262 42.151a3.6 3.6 0 0 1-5.094 0L8 26V8h18l16.17 16.17a3.6 3.6 0 0 1 0 5.075Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M18.5 21a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\" clip-rule=\"evenodd\"/></g>"
	},
	tailoring: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M12 4v32h32\"/><path stroke-linejoin=\"round\" d=\"M20 12h16v16\"/><path d=\"M12 12H4m32 32v-8\"/></g>"
	},
	"tailoring-two": {
		body: "<g fill=\"none\"><path fill=\"currentColor\" d=\"M42 5h-4.586c-.89 0-1.337 1.077-.707 1.707l4.586 4.586c.63.63 1.707.184 1.707-.707V6a1 1 0 0 0-1-1M8 43h4.586c.89 0 1.337-1.077.707-1.707l-4.586-4.586c-.63-.63-1.707-.184-1.707.707V42a1 1 0 0 0 1 1\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 4v28a2 2 0 0 0 2 2h28\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M21 13h14v14\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M14 13H6m30 29v-8\"/></g>"
	},
	"taj-mahal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M16 28H8a2 2 0 0 0-2 2v14m26-16h8a2 2 0 0 1 2 2v14M20 24h8s5.165-5.678 4-9c-.755-2.15-2.439-3.34-4-5c-1.563-1.66-4-4-4-4s-2.439 2.34-4 4c-1.563 1.66-3.246 2.85-4 5c-1.166 3.322 4 9 4 9Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 44h40M16 24h16v20H16z\"/><path stroke-linecap=\"round\" d=\"M24 34v10m0-40v3M10 24v4m28-4v4M20 44h8\"/></g>"
	},
	"take-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m22 29l-8.224 4.112a3 3 0 0 1-3.287-.4L4 27.18l3.562-1.365a3 3 0 0 1 1.986-.057l3.28 1.047a3 3 0 0 0 2.27-.182l22.262-11.3A3 3 0 0 1 38.718 15H44l-1.553 3.106a3 3 0 0 1-1.341 1.341L32 24\"/><path d=\"m22 29l-4 2l5 10l9-17m-15 1l-5-9l16 4\"/></g>"
	},
	"take-off-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4.997 40.988h38M8.52 31.264l-4.612-7.99c.97-.56 5.771 1.115 7.559 2.032l9.702-3.473l-8.296-14.368l4.115-.247l13.4 12.462l8.25-2.612c3.655-1.045 4.807.95 5.037 1.35c1.383 2.394-1.411 4.007-1.81 4.238c-3.193 1.843-33.344 8.608-33.344 8.608\"/>"
	},
	taobao: {
		body: "<path fill=\"currentColor\" d=\"M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48S0 37.255 0 24S10.745 0 24 0m0 4.364C13.155 4.364 4.364 13.155 4.364 24S13.155 43.636 24 43.636S43.636 34.845 43.636 24S34.845 4.364 24 4.364m-4.873 7.254l3.636.745q-.15 1.05-.709 2.375a22 22 0 0 1 3.412-.946c2.387-.447 4.242-.701 6.081-.701s3.254.019 5.05 1.435q1.674 1.323 2.06 3.479l.049.312V30.99q0 1.27-.677 2.62q-.634 1.267-2.44 1.432l-.247.017h-7.54q-.723-2.113 0-2.495c.724-.382 3.503.642 4.724 0q1.14-.6 1.16-2.233l-.003-.239v-11.96c0-1.853-1.133-3.133-4.625-2.943q-2.843.155-6.639 1.412l.822.25l.992.338v.325c0 .552.41 1.01.944 1.082l.125.009l7.298.14v2.01h-5.455v2.498H32.6v1.553h-5.515l.06 4.874a2.9 2.9 0 0 0 1.521-.314a1.86 1.86 0 0 0 .787-.724l-.364-.72l-.001-.002a1.09 1.09 0 0 1 .373-1.401l.11-.064l1.254-.631a1.09 1.09 0 0 1 1.482.52l.046.118l.743 2.294a1.09 1.09 0 0 1-.398 1.22l-.109.07l-.9.5l-.038.02a1.09 1.09 0 0 1-1.402-.37l-.064-.11l-.014-.023q-.828.898-1.568 1.377c-.816.528-1.697.958-2.713 1.027l-.28.009h-5.255c-.426 0-1.198-.277-1.992-1.036q-.728-.696-.884-2.172l-.024-.275v-2.741h4.156q.05 1.779.333 2.741q.264.9 1.398.718l.167-.031v-4.874h-6.055v-1.553h6.055v-2.499H22.35l-1.835 2.296l-1.999-1.264q1.845-2.078 2.255-2.691q.412-.614 0-2.114l.047.182l-.041.017q-1.062 1.605-2.812 3.11l-.383.323l-2.506-2.476q1.71-1.33 2.506-2.473q.794-1.142 1.544-4.046m-7.695 6.17l3.576 3.362a4.36 4.36 0 0 1 1.085 4.745l-.089.214l-3.71 8.308l-4.087-2.84l5.202-5.51a2.18 2.18 0 0 0-.181-3.166l-.142-.11l-3.714-2.638zm2.204-6.879a2.727 2.727 0 1 1 0 5.455a2.727 2.727 0 0 1 0-5.455\"/>"
	},
	tape: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 12a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"M14.27 10c-1.696 0-2.622 1.978-1.536 3.28l1.666 2a2 2 0 0 0 1.537.72h16.126a2 2 0 0 0 1.537-.72l1.666-2c1.086-1.302.16-3.28-1.536-3.28z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M6 10h36\"/><path d=\"M33 31a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-18 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/></g>"
	},
	"tape-measure": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 15v-3a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v7\"/><path stroke-linejoin=\"round\" d=\"M4 27c0-6.627 5.373-12 12-12s12 5.373 12 12v12H4zm24 0h16v12H28z\"/><circle cx=\"16\" cy=\"27\" r=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M39 27v4m-6-4v4m-3-4h12\"/></g>"
	},
	target: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M21.417 18.583a6 6 0 1 0 8 8\"/><path d=\"M28.28 11.72C26.94 11.255 25.5 11 24 11c-7.18 0-13 5.82-13 13s5.82 13 13 13s13-5.82 13-13c0-1.5-.254-2.94-.72-4.28\"/><path d=\"M33.568 6.433A19.9 19.9 0 0 0 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20a19.9 19.9 0 0 0-2.432-9.567M44 4L24 24\"/></g>"
	},
	"target-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M23.889 39.889c8.84 0 16-7.16 16-16s-7.16-16-16-16s-16 7.16-16 16s7.16 16 16 16Z\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M23.889 31.889c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8Z\"/><path fill=\"currentColor\" d=\"M23.889 25.889c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M23.889 7.889v-4m14 40l-4-7m-20 0l-4 7\"/></g>"
	},
	"target-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M24 41c9.39 0 17-7.61 17-17S33.39 7 24 7S7 14.61 7 24s7.61 17 17 17Z\"/><path d=\"M24 32c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8Z\"/><path stroke-linecap=\"round\" d=\"M4 24h40M24 4v40\"/></g>"
	},
	taurus: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"31\" r=\"9\"/><path stroke-linecap=\"round\" d=\"M44 8c0 7.732-8.954 14-20 14S4 15.732 4 8\"/></g>"
	},
	taxi: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 35v-7.29a6 6 0 0 1 3.319-5.368l.682-.34l2.31-7.91A4 4 0 0 1 14.205 11h19.688a4 4 0 0 1 3.904 3.128l2.205 7.874l.68.34A6 6 0 0 1 44 27.708V35a3 3 0 0 1-3 3h-1.997v1a4 4 0 0 1-4 4A4 4 0 0 1 31 39v-1H17v1a4 4 0 1 1-8 0v-1H7a3 3 0 0 1-3-3Z\"/><path fill=\"currentColor\" d=\"M13.5 33a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m21 0a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 11h12l-.991-4.956C28.887 5.434 28.399 5 27.837 5h-7.674c-.563 0-1.05.434-1.172 1.044z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15 23h18\"/></g>"
	},
	tea: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M11 18.167c0-.092.075-.167.167-.167h23.666c.092 0 .167.075.167.167V30c0 6.627-5.373 12-12 12s-12-5.373-12-12z\"/><path d=\"M35 30a6 6 0 0 0 0-12\"/><path stroke-linejoin=\"round\" d=\"M11 8v3m24-3v3M23 5v6\"/></g>"
	},
	"tea-drink": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M2 20c0 12.15 6 22 18 22s18-9.85 18-22z\" clip-rule=\"evenodd\"/><path d=\"M20 14V6m10 8v-4m-20 4v-4m26.19 20.623c.99-2.584 1.574-5.486 1.752-8.572Q38.46 22 39 22c3.866 0 7 2.015 7 4.5S42.866 31 39 31c-1 0-1.95-.135-2.81-.377\"/></g>"
	},
	teapot: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M23.001 13c-7.3 0-13.458 5.07-15.379 12H38.38c-1.92-6.93-8.079-12-15.379-12m-16 16.593c0 4.418 1.665 8.433 4.381 11.407H34.62c2.716-2.974 4.381-6.989 4.381-11.407c0-1.594-.217-3.134-.62-4.593H7.62C7.217 26.459 7 28 7 29.593M27 13v-2a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v2\"/><path d=\"M7 28s-1.985-.131-3-2.5C2.5 22 5 20 6 17c.761-2.282-.793-3.986-1.58-4.67c-.252-.22-.42-.53-.42-.865v-.618c0-.489.354-.903.843-.92C5.878 9.887 7.663 9.996 9 11c2 1.5 3 6 3 6M9 41h28m2-16a5 5 0 1 0-4.584-7\"/></g>"
	},
	teeth: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M13.117 5h.886c4.666.69 5.931 3.338 9.997 3.338S29.331 5.69 33.998 5h.502a9.5 9.5 0 0 1 9.5 9.5v.626c0 2.903-3.09 6.217-4 9.357c-.965 3.334-1.626 6.06-1.82 8.911C37.725 40.075 35.447 43 33 43c-3.654 0-6.898-14.975-8.937-14.975C22.023 28.025 17.978 43 15 43c-1.817 0-4.17-1.075-5.054-9.606C9.594 30 9 27.941 8 24.483c-.88-3.04-3.848-6.672-4-9.932A9.127 9.127 0 0 1 13.117 5Z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"m15.482 12.463l16.519 5.326m-16.519 0l16.519-5.326\"/></g>"
	},
	telegram: {
		body: "<path fill=\"currentColor\" d=\"M41.42 7.309s3.885-1.515 3.56 2.164c-.107 1.515-1.078 6.818-1.834 12.553l-2.59 16.99s-.216 2.489-2.159 2.922c-1.942.432-4.856-1.515-5.396-1.948c-.432-.325-8.094-5.195-10.792-7.575c-.756-.65-1.62-1.948.108-3.463L33.649 18.13c1.295-1.3 2.59-4.33-2.806-.65l-15.11 10.28s-1.727 1.083-4.964.109l-7.016-2.165s-2.59-1.623 1.835-3.246c10.793-5.086 24.068-10.28 35.831-15.15\"/>"
	},
	telescope: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"12\" height=\"38\" x=\"6\" y=\"5\" rx=\"6\"/><rect width=\"12\" height=\"38\" x=\"30\" y=\"5\" rx=\"6\"/><path d=\"M12 43a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm24 0a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z\"/><path stroke-linecap=\"round\" d=\"M30 21a6 6 0 0 0-12 0m12 10a6 6 0 0 0-12 0\"/></g>"
	},
	"tencent-qq": {
		body: "<path fill=\"currentColor\" d=\"M23.793 44.518c-3.659 0-7.017-1.225-9.179-3.053c-1.098.328-2.503.855-3.389 1.51c-.759.56-.664 1.13-.527 1.361c.6 1.013 10.296.647 13.095.332zm0 0c3.659 0 7.017-1.225 9.179-3.053c1.097.328 2.502.855 3.389 1.51c.758.56.663 1.13.527 1.361c-.6 1.013-10.296.647-13.095.332z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M36.339 20.933c-1.641.448-6.483 1.617-12.525 1.658h-.044c-6.195-.042-11.128-1.27-12.643-1.691c-.311-.087-.481-.267-.481-.267a75 75 0 0 1-.025-1.462c0-8.065 3.807-16.17 13.171-16.171s13.172 8.105 13.172 16.171c0 .479-.024 1.407-.025 1.463c0 0-.21.192-.6.299m2.49 4.417c.517 1.35 1.028 2.755 1.403 3.96c1.786 5.748 1.207 8.126.767 8.18c-.946.114-3.68-4.327-3.68-4.327c0 4.513-4.074 11.441-13.403 11.505h-.247c-9.33-.064-13.404-6.992-13.404-11.505c0 0-2.734 4.44-3.68 4.327c-.44-.054-1.018-2.432.768-8.18c.374-1.204.885-2.61 1.403-3.96c0 0 .35-.022.526.03c1.45.418 2.994.789 4.563 1.1c-.267 1.654-.42 3.703-.276 6.122c.384 6.434 4.205 10.479 10.104 10.537h.24c5.898-.058 9.718-4.103 10.103-10.537c.144-2.42-.008-4.467-.276-6.123a55 55 0 0 0 4.64-1.122c.15-.043.448-.007.448-.007m-5.089 1.13c-3.44.68-6.995 1.07-9.926 1.035h-.044c-2.93.035-6.486-.355-9.925-1.036l.042-.256c3.427.676 6.964 1.062 9.882 1.027h.045c2.918.036 6.457-.351 9.883-1.027q.023.127.043.256M18.038 11.686c.068 1.84 1.153 3.287 2.424 3.229c1.269-.057 2.242-1.595 2.173-3.436s-1.154-3.287-2.423-3.23c-1.27.058-2.243 1.596-2.174 3.437m9.087 3.229c1.27.057 2.356-1.39 2.424-3.23c.07-1.84-.904-3.378-2.174-3.436c-1.27-.056-2.354 1.39-2.423 3.23c-.07 1.84.904 3.38 2.173 3.436m-3.31 1.009c4.232 0 7.65.837 7.99 1.59a.25.25 0 0 1 .025.106a.26.26 0 0 1-.047.145c-.286.418-4.082 2.478-7.968 2.478h-.046c-3.886 0-7.682-2.061-7.968-2.478a.26.26 0 0 1-.047-.144q0-.057.025-.108c.34-.751 3.758-1.59 7.99-1.59z\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" d=\"M22.022 11.714c.058.727-.34 1.373-.89 1.443c-.549.07-1.04-.461-1.1-1.188c-.057-.727.341-1.373.89-1.443c.55-.071 1.042.461 1.1 1.188m3.49.243c.112-.201.877-1.259 2.46-.874c.415.102.608.25.648.309c.06.086.077.21.016.375c-.12.329-.369.32-.506.256c-.09-.042-1.192-.777-2.208.32c-.07.075-.195.1-.313.012c-.119-.09-.167-.272-.097-.398M15.504 26.712v6.332s2.9.585 5.807.18v-5.841a53 53 0 0 1-5.807-.671\"/><path fill=\"currentColor\" d=\"M36.939 20.634s-5.643 1.78-13.125 1.831h-.044c-7.47-.05-13.105-1.825-13.124-1.831l-1.89 4.716c4.726 1.425 10.584 2.343 15.014 2.29h.044c4.43.053 10.287-.865 15.014-2.29z\"/>"
	},
	tennis: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 4q-.15 10.003-4.912 15.004Q14.328 24.007 4 24.008\"/><path stroke-linecap=\"round\" d=\"M43.968 25.005q-9.768-.67-14.929 4.176Q23.88 34.026 24.004 44\"/></g>"
	},
	tent: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 12L4 36h12\"/><path d=\"M38 12H10l6 24h28zm-26 6h27m-29-6l3 12m25-12l3 12\"/></g>"
	},
	"tent-banner": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M7 43h32L23 17z\"/><path d=\"M18.077 25L23 28l4.923-3M23 17V4m12 0H23v8h12l-3-4z\"/></g>"
	},
	terminal: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"40\" height=\"32\" x=\"4\" y=\"8\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"m12 18l7 6l-7 6m11 2h13\"/></g>"
	},
	"termination-file": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M40 16.398V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h10\"/><path d=\"M16 14h13m-13 7h5\"/><path stroke-linejoin=\"round\" d=\"M34 44c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10\"/><path d=\"m27 27l14 14\"/><path stroke-linejoin=\"round\" d=\"M24 34c0-5.523 4.477-10 10-10m0 20c5.523 0 10-4.477 10-10\"/></g>"
	},
	terrace: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M5 24v16a2 2 0 0 0 2 2h34a2 2 0 0 0 2-2V24m0 7H5\"/><path d=\"M32 23a8 8 0 1 0-16 0\"/><path stroke-linejoin=\"round\" d=\"M24 6v2m11.414 2L34 11.414M12 10l1.414 1.414\"/></g>"
	},
	"test-tube": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M18 4h12\"/><path d=\"M24 44a6 6 0 0 0 6-6V10H18v28a6 6 0 0 0 6 6\" clip-rule=\"evenodd\"/><path d=\"M24 27v1m0-10v3m-5 14h11\"/></g>"
	},
	text: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M16 19v-3h16v3M22 34h4m-2-16v16\"/></g>"
	},
	"text-bold": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 24c5.506 0 9.969-4.477 9.969-10S29.506 4 24 4H11v20zm4.031 20C33.537 44 38 39.523 38 34s-4.463-10-9.969-10H11v20z\" clip-rule=\"evenodd\"/>"
	},
	"text-italic": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 6h16M12 42h16m1-36.048L19 42\"/>"
	},
	"text-message": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M44 7H4v30h15l5 5l5-5h15z\"/><path d=\"M14 16h6m-6 8h2m13-10l7 14m-7-14l-7 14m2-4h10\"/></g>"
	},
	"text-recognition": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 33v6a3 3 0 0 0 3 3h6m18 0h6a3 3 0 0 0 3-3v-6m0-18V9a3 3 0 0 0-3-3h-6M6 15V9a3 3 0 0 1 3-3h6m9 9v20m-7-20h14\"/>"
	},
	"text-rotation-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m29 35l-8-3.667M29 13l-8 3.667m0 0L17 18.5L5 24l12 5.5l4 1.833m0-14.666v14.666M37 6v36l6-6\"/>"
	},
	"text-rotation-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m13 29l3.667-8M35 29l-3.667-8m0 0L29.5 17L24 5l-5.5 12l-1.833 4m14.666 0H16.667M42 37H6l6 6\"/>"
	},
	"text-rotation-none": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m13 29l3.667-8M35 29l-3.667-8m0 0L29.5 17L24 5l-5.5 12l-1.833 4m14.666 0H16.667M6 37h36l-6 6\"/>"
	},
	"text-rotation-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m29 35l-8-3.667M29 13l-8 3.667m0 0L17 18.5L5 24l12 5.5l4 1.833m0-14.666v14.666M37 42V6l6 6\"/>"
	},
	"text-style": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 6h10v10M17 32l2.188-5M31 32l-2.187-5m-9.625 0L24 16l4.813 11m-9.625 0h9.625M16 6H6v10m26 26h10V32M16 42H6V32\"/>"
	},
	"text-style-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m4 42l4.941-12M32 42l-4.941-12m0 0L25 25L18 8l-7 17l-2.059 5m18.118 0H8.94M28 10h16M32 20h12m-8 10h8m-4 10h4\"/>"
	},
	"text-underline": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M8 44h32\"/><path d=\"M37 6.097V22c0 7.18-5.82 13-13 13s-13-5.82-13-13V6.097\"/></g>"
	},
	"text-wrap-overflow": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M8 10v28M24 4v12m-8 8h26\"/><path stroke-linejoin=\"round\" d=\"m37.056 19.011l5.037 5.015l-5.037 5.097\"/><path d=\"M24 32v12\"/></g>"
	},
	"text-wrap-truncation": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M8 8v32M40 8v32M20.052 24.008H40\"/>"
	},
	textarea: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16 4c7 0 8 6 8 8v24c0 2-1 8-8 8M32 4c-6 0-8 6-8 8v24c0 2 1 8 8 8M17 24h14\"/>"
	},
	texture: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m12 6l-6 6m36 24l-6 6M22 6L6 22M32 6L6 32M42 6L6 42m36-26L16 42m26-16L26 42\"/>"
	},
	"texture-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M40 4H8a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4m-28 8v8m16 8v8m-8-24v8m8-8h8M12 28h8m8-8h8M12 36h8m16-8v8\"/>"
	},
	"the-single-shoulder-bag": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M28 27c0-8.819-1.22-23-4-23c-3.429 0-4 14.181-4 23m-5 0h18v17H15z\"/><path d=\"M15 27h18l-5.294 9h-7.941z\"/></g>"
	},
	theater: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M8 6h32a2 2 0 0 1 2 2v28L32 22.005q-4 2.378-8 2.378t-8-2.378L6 36V8a2 2 0 0 1 2-2Z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M6 42h36\"/></g>"
	},
	theme: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 6a6 6 0 0 0 12 0h5.455L42 15.818l-5.727 4.91V42H11.727V20.727L6 15.818L12.546 6z\"/>"
	},
	thermometer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M18 26V10a6 6 0 0 1 12 0v16a9.99 9.99 0 0 1 4 8c0 5.523-4.477 10-10 10s-10-4.477-10-10a9.99 9.99 0 0 1 4-8Z\"/><path stroke-linecap=\"round\" d=\"M24 17v13\"/><path d=\"M24 38a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/></g>"
	},
	"thermometer-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44a9 9 0 0 0 4-17.064V10c0-2 0-6-4-6s-4 4-4 6v16.936A9 9 0 0 0 24 44Z\"/>"
	},
	"thermos-cup": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 31s.071 6 14 6s14-6 14-6V15H10z\"/><path stroke-linecap=\"round\" d=\"M24 4v6m-8-5v4m16-4v4M14 36v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5\"/></g>"
	},
	thin: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M33 25H15c-1.59 0-3.77-.23-5-1c-3.65-2.31-4.34-7.37-2-11l6-9c3.93 8.43 16.04 8.42 20 0l6 9c2.34 3.63 1.64 8.69-2 11c-1.23.78-3.41 1-5 1m-21 0l2.52 9.55c.87 3.38-.06 6.97-2.52 9.45m24-19l-2.52 9.58c-.87 3.38.06 6.94 2.52 9.42m-12-2v-2\"/>"
	},
	"thinking-problem": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m38 21l5 9l-5 1v6h-3l-6-1l-1 7H13l-2-10.381C7.92 29.703 6 25.576 6 21c0-8.837 7.163-16 16-16s16 7.163 16 16\"/><path d=\"M17 19a5 5 0 1 1 5 5v3m0 6v1\"/></g>"
	},
	three: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m11 40l-4.208-9.117a5 5 0 0 1 1.767-6.255l1.904-1.27a1 1 0 0 1 1.085-.016l.452.283l-1.87-13.68a2.32 2.32 0 0 1 .442-1.707a1.547 1.547 0 0 1 2.166-.31l.133.1c.41.308.719.73.886 1.215l4.112 11.879a.562.562 0 0 0 1.092-.22l-.883-13.685a2.7 2.7 0 0 1 .785-2.08a1.797 1.797 0 0 1 2.393-.132l.34.272a3 3 0 0 1 1.088 1.865l2.239 13.88a.568.568 0 0 0 1.127-.036l1.328-13.724a3 3 0 0 1 1.112-2.054l.206-.165a1.865 1.865 0 0 1 2.484.138c.525.524.82 1.236.82 1.978V19.91a1 1 0 0 0 .017.175c.112.514.79 3.183 2.983 3.914c.907.302 2.364 2.8 3.373 4.727c.74 1.414.669 3.097-.106 4.492L34.5 40S31 44 23 44s-11.333-2.667-12-4\"/>"
	},
	"three-d-glasses": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M19.6 34.5h8.8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.303 27.39L9.958 9.563L14.949 7m30.856 20.633L38.05 9.562L33.059 7\"/><path d=\"M3.4 26.8h15.317a1.294 1.294 0 0 1 1.29 1.396l-.927 11.712a1.294 1.294 0 0 1-1.29 1.192H4.328a1.294 1.294 0 0 1-1.29-1.192l-.927-11.712A1.294 1.294 0 0 1 3.4 26.8Zm25.884 0H44.6a1.294 1.294 0 0 1 1.29 1.396l-.928 11.712a1.294 1.294 0 0 1-1.29 1.192h-13.46a1.294 1.294 0 0 1-1.29-1.192l-.928-11.712a1.294 1.294 0 0 1 1.29-1.396Z\" clip-rule=\"evenodd\"/></g>"
	},
	"three-hexagons": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m24 27l-10-6l-10 6v12l10 6l10-6zm20 0l-10-6l-10 6v12l10 6l10-6z\"/><path d=\"M34 9L24 3L14 9v12l10 6l10-6z\"/></g>"
	},
	"three-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M19 14h10l-7 9c4 0 7 2 7 6s-3 5-5 5c-2.381 0-4-1-5-2.1\"/></g>"
	},
	"three-slashes": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 10l36-6v7L6 17zm0 14l36-6v7L6 31zm0 14l36-6v7L6 45z\"/>"
	},
	"three-three": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M25.745 44h-.896c-5.21 0-10.07-2.626-12.925-6.984l-2.195-3.35a5.63 5.63 0 0 1 1.072-7.382l2.288-1.936c.26-.22.411-.545.411-.887V7.25a3.25 3.25 0 0 1 6.5 0v-1a3.25 3.25 0 0 1 6.5 0v1a3.25 3.25 0 0 1 6.5 0v14.5a3.25 3.25 0 0 1 6.5 0v10.219c0 1.649-.498 3.26-1.43 4.62l-.973 1.423A13.76 13.76 0 0 1 25.745 44\"/>"
	},
	"three-triangles": {
		body: "<g fill=\"none\"><path d=\"m17 7l7 12.124L29.99 29.5H4.01z\"/><path d=\"m31 7l12.99 22.5H18.01L24 19.124zM11.01 41.5h25.98l-7-12H18.01z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M29.99 29.5L24 19.124M18.01 29.5l-7 12h25.98l-7-12zm0 0h25.98L31 7l-7 12.124zm0 0L24 19.124zm0 0h11.98zm11.98 0H4.01L17 7l7 12.124z\"/></g>"
	},
	"thumbs-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M20.38 29.4v7.2a5.4 5.4 0 0 0 5.4 5.4l7.2-16.2V6H12.062a3.6 3.6 0 0 0-3.6 3.06L5.98 25.26a3.6 3.6 0 0 0 3.6 4.14z\"/><path d=\"M32.98 6h4.806a4.16 4.16 0 0 1 4.194 3.6v12.6c-.283 2.09-2.086 3.838-4.194 3.8H32.98z\"/></g>"
	},
	"thumbs-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M27.6 18.6v-7.2A5.4 5.4 0 0 0 22.2 6L15 22.2V42h20.916a3.6 3.6 0 0 0 3.6-3.06L42 22.74a3.6 3.6 0 0 0-3.6-4.14zM15 22h-4.806C8.085 21.963 6.283 23.71 6 25.8v12.6a4.16 4.16 0 0 0 4.194 3.6H15z\"/>"
	},
	thunderbolt: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 26a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v5.36c0 .954-.683 1.781-1.52 2.238c-1.187.65-2.724 1.943-3.273 4.416C38.967 39.092 38.105 40 37 40H11c-1.105 0-1.967-.908-2.207-1.986c-.55-2.474-2.086-3.767-3.273-4.416C4.683 33.141 4 32.314 4 31.36zm10 5h20M25 4l-6 7h10l-6 7\"/>"
	},
	thunderstorm: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M9.455 30.994A13.95 13.95 0 0 1 4 19.885C4 12.217 10.105 6 17.636 6c6.297 0 11.598 4.346 13.166 10.253a8.9 8.9 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.257c0 3.795-2.244 7.058-5.455 8.486M17.414 22.586l-2.828 2.828\"/><path d=\"m27 24l-8 8.001h10.004l-8.004 8m12.414-1.415l-2.828 2.828\"/></g>"
	},
	"thunderstorm-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M20.53 20L17 31.5l6.177.885L20.529 43L32 29.73l-7.059-1.768L30.235 20z\"/><path stroke-linecap=\"round\" d=\"M9.455 29.994A13.95 13.95 0 0 1 4 18.885C4 11.217 10.105 5 17.636 5c6.297 0 11.598 4.346 13.166 10.253a8.9 8.9 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.257c0 3.795-2.244 7.058-5.455 8.486\"/></g>"
	},
	ticket: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M9 16L34 6l4 10M4 16h40v6c-3 0-6 2-6 5.5s3 6.5 6 6.5v6H4v-6c3 0 6-2 6-6s-3-6-6-6z\"/><path d=\"M17 25.385h6m-6 6h14\"/></g>"
	},
	"ticket-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M4 8h7s1 5 6 5s6-5 6-5h21v32H23s-1-5-6-5s-6 5-6 5H4z\"/><path d=\"M17 19v2m0 6v2m8-8h11m-11 6h11\"/></g>"
	},
	"tickets-checked": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M34 30v-1.011A2.99 2.99 0 0 1 36.989 26v0a2.99 2.99 0 0 1 2.989 2.985l.012 8.2A6.805 6.805 0 0 1 33.185 44h-7.538a13.93 13.93 0 0 1-11.192-5.637l-4.265-5.757a2.99 2.99 0 0 1-.162-3.32v0a2.992 2.992 0 0 1 4.682-.576L16 30V16a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v11.875v-6.849A3.026 3.026 0 0 1 25.026 18v0a3.026 3.026 0 0 1 3.027 3.026V29v-1.101a2.974 2.974 0 0 1 2.973-2.974v0A2.974 2.974 0 0 1 34 27.899z\"/><path d=\"M32 4v8\"/><path stroke-linejoin=\"round\" d=\"M16 20H6v-4c2 0 4-1.5 3.974-4S8 8 6 8V4h36v4c-2 0-3.948 1.5-3.974 4S40 16 42 16v4H28\"/></g>"
	},
	"tickets-one": {
		body: "<g fill=\"none\"><rect width=\"26\" height=\"38\" x=\"5\" y=\"42\" stroke=\"currentColor\" stroke-linejoin=\"bevel\" stroke-width=\"4\" rx=\"2\" transform=\"rotate(-90 5 42)\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 16L32 5l5 11\"/><circle cx=\"13\" cy=\"23\" r=\"2\" fill=\"currentColor\"/><circle cx=\"13\" cy=\"29\" r=\"2\" fill=\"currentColor\"/><circle cx=\"13\" cy=\"35\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M21 35h4l11-12m-12 6h6\"/></g>"
	},
	"tickets-two": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 30c3 0 5 1.88 5 4h6V4h-6c0 2-2 4-5 4s-5-2-5-4h-6v14\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 44h-6c0-2.12-2-4-5-4s-5 1.88-5 4H8V14h6c0 2 2 4 5 4s5-2 5-4h6z\"/><circle cx=\"14\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><circle cx=\"19\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"24\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"tiger-zodiac": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 44V15c0-1.5 1-5.2 5-8L8.5 4c1.667 0 5.6.6 8 3c4.167-.333 13.5 2 10 8c-.89 1.335-2.5 2-5.5 2\"/><path d=\"M19 24c4 0 12 5 12 14c0 2 1 4.883 5.134 4.401C39 42.067 41.627 40.052 43 35.877\"/><path d=\"M17 44c0-4 2-9 10-9h3\"/></g>"
	},
	tiktok: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"3.833\" d=\"M21.358 19.14q-8.833-.426-12.28 6.298c-3.446 6.725-.598 17.729 10.9 17.729c11.5 0 11.832-11.112 11.832-12.276V17.875q3.69 2.336 6.22 2.813q2.533.476 3.22.422v-6.476q-2.342-.282-4.05-1.076c-1.709-.794-5.096-2.997-5.096-6.226q.003.024 0-2.499h-7.118q-.031 23.724 0 26.058c.031 2.334-1.78 5.6-5.45 5.6c-3.672 0-5.483-3.263-5.483-5.367c0-1.288.443-3.155 2.272-4.538c1.085-.82 2.59-1.148 5.033-1.148z\"/>"
	},
	time: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24.008 12v12.01l8.479 8.48\"/></g>"
	},
	"timed-mail": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M44 35V9H4v28h22\"/><circle cx=\"35\" cy=\"35\" r=\"9\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M34 32v4h4M4 9l20 13L44 9\"/></g>"
	},
	timeline: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M13 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0Zm18 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0ZM13 36a4 4 0 1 0 8 0a4 4 0 0 0-8 0Z\"/><path stroke-linecap=\"round\" d=\"M4 36h9m8 0h23M4 12h9m8 0h23\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 4v40\"/><path stroke-linecap=\"round\" d=\"M4 24h27m8 0h5\"/></g>"
	},
	timer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"28\" r=\"16\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M28 4h-8m4 0v8m11 4l3-3M24 28v-6m0 6h-6\"/></g>"
	},
	tips: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40 20c0 6.808-4.252 12.622-10.244 14.934H18.244C12.252 32.622 8 26.808 8 20c0-8.837 7.163-16 16-16s16 7.163 16 16\"/><path d=\"m29.756 34.934l-.68 8.15a1 1 0 0 1-.996.916h-8.16a1 1 0 0 1-.996-.917l-.68-8.15M18 17v6l6-3l6 3v-6\"/></g>"
	},
	"tips-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M44 8H4v30h15l5 5l5-5h15z\"/><path d=\"M24 23v9m0-16v1\"/></g>"
	},
	"tire-swing": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 4s6 6 20 6s20-6 20-6m-20 6v6\"/><ellipse cx=\"30\" cy=\"30\" rx=\"8\" ry=\"14\"/><ellipse cx=\"30\" cy=\"30\" rx=\"3\" ry=\"6\"/><path d=\"M18 44c-4.418 0-8-6.268-8-14s3.582-14 8-14m12 0H18m12 28H18m4-15H10m13-7H12m11 15H12\"/></g>"
	},
	"title-level": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M6 8v32M24 8v32M7 24h16\"/><path d=\"M32 24v16m0-8.976C32 28.46 34 26 37 26s5 2.358 5 5.024v8.99\"/></g>"
	},
	"to-bottom": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24.008 33.9V6M36 22L24 34L12 22m24 20H12\"/>"
	},
	"to-bottom-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 14L24 26L12 14m0 20h24\"/>"
	},
	"to-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 23.992h28M26 36L14 24l12-12M5 36V12\"/>"
	},
	"to-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M34 24.008H6M22 12l12 12l-12 12m20-24v24\"/>"
	},
	"to-top": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24.008 14.1V42M12 26l12-12l12 12M12 6h24\"/>"
	},
	"to-top-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m12 33l12-12l12 12M12 13h24\"/>"
	},
	toilet: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.999 10h8v12h-8zM17 35l-5 9h24l-5-9\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M33.999 22V5a1 1 0 0 0-1-1h-18a1 1 0 0 0-1 1v17\"/><path d=\"M6.08 22.364A.3.3 0 0 1 6.372 22h35.254a.3.3 0 0 1 .292.364c-1.224 5.508-4.635 10.452-10 12.2C29.436 35.374 26.656 36 24 36s-5.436-.627-7.92-1.436c-5.365-1.749-8.776-6.692-10-12.2Z\"/></g>"
	},
	tomato: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-7.387 20-16.5c0-6.442-4.475-11.799-11-14.516L29.5 14.5L30 20l-6.5-2l-6.5 2v-5.5l-3-1.516C8.022 15.837 4 21.393 4 27.5C4 36.613 12.954 44 24 44\"/><path d=\"m23.5 4l3.809 5.117L36 9.91l-6.337 4.573L31.5 21l-8-3l-8 3l1.837-6.517L11 9.91l8.691-.793z\"/></g>"
	},
	tool: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 16c0 6.627-5.373 12-12 12c-2.027 0-3.936-.503-5.61-1.39L9 44l-5-5l17.39-17.39A11.95 11.95 0 0 1 20 16c0-6.627 5.373-12 12-12c2.027 0 3.936.502 5.61 1.39L30 13l5 5l7.61-7.61A11.95 11.95 0 0 1 44 16\"/>"
	},
	toolkit: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M8 25v13a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V25\"/><path d=\"M5 15a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"M31 13V9a2 2 0 0 0-2-2H19a2 2 0 0 0-2 2v4m-2 10v6m18-6v6\"/></g>"
	},
	"top-bar": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M6 16h36M6 13v6m36-6v6\"/></g>"
	},
	topbuzz: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m18.905 18.168l-8.58-1.824a1.03 1.03 0 0 1-.794-1.224l1.931-9.087a1.03 1.03 0 0 1 1.225-.795l29.28 6.223c.558.119.914.667.796 1.225l-1.932 9.087a1.03 1.03 0 0 1-1.224.795l-8.506-1.808q-.581-.123-.69.385l-3.97 18.676a1.03 1.03 0 0 1-1.223.795l-9.088-1.931a1.03 1.03 0 0 1-.795-1.225l3.971-18.681q.107-.503-.4-.611Z\"/>"
	},
	topic: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24a19.94 19.94 0 0 0 3.368 11.112Q7.733 35.657 6 42q6.344-1.733 6.888-1.368A19.94 19.94 0 0 0 24 44Z\"/><path stroke-linecap=\"round\" d=\"M16.605 19.82h16.779m-11.537-4.082l-2.914 16.524m9.914-16.524l-2.914 16.524M14.605 28h16.779\"/></g>"
	},
	"topic-discussion": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M44 8H4v30h15l5 5l5-5h15z\"/><path d=\"m21 15l-1 17m8-17l-1 17m6-12H16m16 7H15\"/></g>"
	},
	torch: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M27 34h-6v10h6zm4 0H17l-3-8h20zM21 14c2-4.61 6-10 6-10s6.36 11.49 6.36 15.23S30.74 26 27 26h-8c-2.64 0-4.36-2.14-4.36-4.78S19 10 19 10s.96 2.01 2 4\"/>"
	},
	"tour-bus": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 23h30v11a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2zM9 8a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v15H9z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15 42a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3m18 0a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M6 12v4m36-4v4\"/><circle cx=\"15\" cy=\"30\" r=\"2\" fill=\"currentColor\"/><circle cx=\"33\" cy=\"30\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"m31 6l-9 10m16-9l-5 6\"/></g>"
	},
	towel: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M36 18H4v8h32z\"/><path d=\"M36 12v20a4 4 0 0 1-4 4H12m0 0H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32c0 2.21-1.79 4-4 4H16c-2.21 0-4-1.79-4-4z\"/></g>"
	},
	tower: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M17 31h14v13H17zm2-14h10v14H19zm2-13h6v13h-6z\"/><path stroke-linecap=\"round\" d=\"M4 44h40\"/></g>"
	},
	"tower-of-babel": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 14.5V4h8v9.5M14 25v-9.538L34 13v10M11 35v-9l26-3v9m3 12H8v-8l32-4z\"/>"
	},
	"tower-of-pisa": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 44h40\"/><path stroke-linejoin=\"round\" d=\"m21.25 7.474l15.455 4.142L28 44H11z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m19.317 6.957l19.319 5.176M16.21 18.548l19.32 5.176\"/><path stroke-linecap=\"round\" d=\"m25.482 20.932l1.036-3.864\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m13.106 30.14l19.318 5.176\"/><path stroke-linecap=\"round\" d=\"m22.482 31.932l1.036-3.864\"/><rect width=\"10\" height=\"4\" x=\"25.183\" y=\"4.387\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"1\" transform=\"rotate(15 25.183 4.387)\"/><path stroke-linecap=\"round\" d=\"m19.482 42.932l1.036-3.864\"/></g>"
	},
	toxins: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M33.958 44s.024-3.47 0-4.24a19 19 0 0 0 4.477-3.325A18.94 18.94 0 0 0 44 23c0-10.493-8.507-19-19-19S6 12.507 6 23a18.94 18.94 0 0 0 5.565 13.435a19 19 0 0 0 2.879 2.365c.515.345 1.01.666 1.56.96V44z\" clip-rule=\"evenodd\"/><path d=\"M18 27a4 4 0 0 0 4-4l-4-4a4 4 0 0 0 0 8Zm14 0a4 4 0 0 1-4-4l4-4a4 4 0 0 1 0 8Z\"/><path stroke-linecap=\"round\" d=\"m22 34l2.938-3L28 33.897\"/></g>"
	},
	trace: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 6C14.059 6 6 14.059 6 24s8.059 18 18 18s18-8.059 18-18\"/><path stroke-linecap=\"round\" d=\"M24 15a9 9 0 1 0 9 9m-9 0l6.3-6.306\"/><path d=\"M30.3 11.426V17.7h6.325L42 12.3h-6.297V6z\"/></g>"
	},
	trademark: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><path d=\"M12 19h8m-4 0v10m10 0V19l5 6l5-6v10\"/></g>"
	},
	"traditional-chinese-medicine": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M24 43h5.955q.124-4.106 1.204-4.515C38.669 35.635 44 28.434 44 20H4c0 8.251 5.103 15.323 12.357 18.294q1.137.466 1.699 4.706z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M14.443 27.023q.54 1.78 1.427 2.942a11.3 11.3 0 0 0 2.14 2.104m7.204-12.043a3301 3301 0 0 0 6.622-13.708c1.05-2.21 3.18-2.742 5.145-1.902s2.76 3.242 1.935 4.917q-.765 1.552-5.19 10.671\"/></g>"
	},
	train: {
		body: "<g fill=\"none\" stroke=\"currentColor\"><path stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 8.84c0-.933.438-1.807 1.271-2.225C12.247 5.625 16.613 4 24 4s11.754 1.625 13.728 2.615C38.563 7.033 39 7.907 39 8.839V36a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M34 38v4m-20-4v4\"/><path fill=\"currentColor\" d=\"M20.5 32a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm10 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 44h8\"/><path stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 12h30v14H9z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 12v14m-4-14h8m-8 14h8\"/></g>"
	},
	transaction: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3\"/><path d=\"m21 31l5 4l8-10M14 15h20m-20 8h8\"/></g>"
	},
	"transaction-order": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"30\" height=\"36\" x=\"9\" y=\"8\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M18 4v6m12-6v6m-14 9h16m-16 8h12m-12 8h8\"/></g>"
	},
	transfer: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M37 28.392v7.015C37 39.048 34.089 42 30.497 42s-6.503-2.952-6.503-6.593l.012-22.264C24.006 9.198 21.095 6 17.503 6S11 9.198 11 13.143v15.25\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m43 31l-6-6l-6 6m12-20.273C43 15.182 37 19 37 19s-6-3.818-6-8.273c0-1.519.632-2.975 1.757-4.05A6.15 6.15 0 0 1 37 5a6.15 6.15 0 0 1 4.243 1.677A5.6 5.6 0 0 1 43 10.727m-26 24C17 39.182 11 43 11 43s-6-3.818-6-8.273c0-1.519.632-2.975 1.757-4.05A6.15 6.15 0 0 1 11 29a6.15 6.15 0 0 1 4.243 1.677A5.6 5.6 0 0 1 17 34.728\"/><circle cx=\"37\" cy=\"11\" r=\"2\" fill=\"currentColor\"/><circle cx=\"11\" cy=\"35\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	"transfer-data": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m10 8l-6 6l6 6m28 8l6 6l-6 6M4 14h40M4 34h40\"/>"
	},
	transform: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"13.715\" cy=\"13.714\" r=\"6.857\"/><circle cx=\"34.286\" cy=\"34.285\" r=\"6.857\"/><path d=\"M24.001 44c-11.046 0-20-8.954-20-20l6.667 3.333M24.001 4c11.046 0 20 8.954 20 20l-6.667-3.333\"/></g>"
	},
	translate: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M28.286 37h11.428M42 42l-2.286-5zm-16 0l2.286-5zm2.286-5L34 24l5.714 13zM16 6l1 3M6 11h22m-18 5s1.79 6.26 6.263 9.74C20.737 29.216 28 32 28 32\"/><path d=\"M24 11s-1.79 8.217-6.263 12.783C13.263 28.348 6 32 6 32\"/></g>"
	},
	translation: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m17 32l2.188-5M31 32l-2.187-5m-9.625 0L24 16l4.813 11m-9.625 0h9.625\"/><path d=\"M43.2 20c-1.853-9.129-9.924-16-19.6-16S5.853 10.871 4 20l6-2M4 28c1.853 9.129 9.924 16 19.6 16s17.747-6.871 19.6-16L38 30\"/></g>"
	},
	transport: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"28\" height=\"18\" x=\"16\" y=\"12\" stroke-linejoin=\"round\" rx=\"3\"/><path stroke-linecap=\"round\" d=\"M24 18v6m12-6v6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M36 12V6H24v6m20 24H12a2 2 0 0 1-2-2V11a2 2 0 0 0-2-2H4m15 33a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3m18 0a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3\"/></g>"
	},
	transporter: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 8H20a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM4 34h14V20h-7l-7 6.462z\"/><path stroke-linecap=\"round\" d=\"M18 36a4 4 0 0 1-8 0m30 0a4 4 0 0 1-8 0\"/></g>"
	},
	trapezoid: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"M31.794 8H16.206a3 3 0 0 0-2.864 2.105l-8.125 26A3 3 0 0 0 8.081 40h31.838a3 3 0 0 0 2.864-3.895l-8.125-26A3 3 0 0 0 31.794 8Z\"/>"
	},
	tray: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"28\" height=\"30\" x=\"24.762\" y=\"3.243\" rx=\"2\" transform=\"rotate(45 24.762 3.243)\"/><path d=\"m38.197 16.678l4.242-4.243l-7.07-7.071l-4.244 4.242M18 21h12m-12 6h4m6 0h2\"/></g>"
	},
	treadmill: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M39.75 44H9.31C6.38 44 4 41.62 4 38.69v-5.42c0-1.21 1.06-2.14 2.25-1.99l34.02 4.25c2.13.27 3.73 2.08 3.73 4.22C44 42.1 42.1 44 39.75 44M16 32L4 4h6.43M6 31l6-8m13-8H9\"/>"
	},
	"treadmill-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M30 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m11 21l6-5l8 3l-3 6l7 6l2 7\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m22 25l-5 8l-8-1M6 44h34l4-9M25 19l8 5l6-2\"/></g>"
	},
	"treadmill-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 39v5m32-5v5m-4-13l6-16l-4-6m-5 5L43 4\"/><rect width=\"40\" height=\"8\" x=\"4\" y=\"31\" rx=\"4\"/></g>"
	},
	"treasure-chest": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 4H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M4 24h13m14 0h13\"/><path d=\"M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z\"/></g>"
	},
	tree: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13.045 14C13.55 8.393 18.262 4 24 4s10.45 4.393 10.955 10H35a9 9 0 1 1 0 18H13a9 9 0 1 1 0-18zM24 28l5-5m-5 2l-6-6m6 25V18\"/>"
	},
	"tree-diagram": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"10\" cy=\"24\" r=\"4\"/><circle cx=\"38\" cy=\"10\" r=\"4\"/><circle cx=\"38\" cy=\"24\" r=\"4\"/><circle cx=\"38\" cy=\"38\" r=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M34 38H22V10h12M14 24h20\"/></g>"
	},
	"tree-list": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M38 20H18v8h20zM32 6H18v8h14zm12 28H18v8h26z\"/><path stroke-linecap=\"round\" d=\"M17 10H5m12 14H5m12 14H5m0 6V4\"/></g>"
	},
	"tree-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><ellipse cx=\"24\" cy=\"20\" rx=\"15\" ry=\"16\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 14v22\"/><path d=\"M30 34.669A14.15 14.15 0 0 1 24 36a14.2 14.2 0 0 1-6-1.331\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 36v8m0-22l6-6m-6 13l-6-6\"/></g>"
	},
	"tree-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M11 24s-3 2-3 6c0 6 10 8 10 8m19-14s3 2 3 6c0 6-10 8-10 8m-6-22.001v28\"/><path d=\"M19.126 13.5a6 6 0 1 1 9.748 0\"/><path stroke-linejoin=\"round\" d=\"M13 13s-4 2.5-4 6s3 6 3 6m23-12s4 2.5 4 6s-3 6-3 6\"/></g>"
	},
	trend: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" d=\"m13.44 29.835l5.657-5.657l4.388 4.377L34 18\"/><path stroke-linecap=\"round\" d=\"M26 18h8v8\"/></g>"
	},
	"trend-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M4 44h40\"/><path d=\"m4 26l8 2v10H4zm16-2l8-4v18h-8zm16-8l8-4v26h-8z\"/><path stroke-linecap=\"round\" d=\"m4 18l8 2L44 4H34\"/></g>"
	},
	"trending-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M29 35h12V23\"/><path d=\"m6 13l10.339 12.5l9.846-6L41 35\"/></g>"
	},
	"trending-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M41 27V15H29\"/><path d=\"m6 37l10.339-12.5l9.846 6L41 15\"/></g>"
	},
	triangle: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M22.27 6.99c.77-1.33 2.69-1.33 3.46 0l18.532 32.008c.772 1.333-.19 3.002-1.73 3.002H5.468c-1.54 0-2.503-1.669-1.731-3.002z\" clip-rule=\"evenodd\"/>"
	},
	"triangle-round-rectangle": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 29H6v14h14zm4-25l10 17H14zm12 40a8 8 0 1 0 0-16a8 8 0 0 0 0 16\"/>"
	},
	"triangle-ruler": {
		body: "<defs><path id=\"ipOTriangleRuler0\" d=\"M13 35h12L13 23z\"/><path id=\"ipOTriangleRuler1\" stroke=\"currentColor\" d=\"M13 35h12L13 23z\"/></defs><g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 44L4 4v40z\"/><use href=\"#ipOTriangleRuler0\" clip-rule=\"evenodd\"/><use href=\"#ipOTriangleRuler0\" clip-rule=\"evenodd\"/><use href=\"#ipOTriangleRuler0\" clip-rule=\"evenodd\"/><use href=\"#ipOTriangleRuler0\" clip-rule=\"evenodd\"/><use href=\"#ipOTriangleRuler1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" clip-rule=\"evenodd\"/><use href=\"#ipOTriangleRuler1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" clip-rule=\"evenodd\"/><use href=\"#ipOTriangleRuler1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" clip-rule=\"evenodd\"/><use href=\"#ipOTriangleRuler1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 44v-3m-6 3v-3m-6 3v-3m-6 3v-3m-8-5h3m-3-6h3m-3-6h3m-3-6h3\"/></g>"
	},
	"triangular-pyramid": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m24 44l18-9L24 4L6 35zm0 0V4\"/>"
	},
	trophy: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 30c6.627 0 12-5.53 12-12.353V4H12v13.647C12 24.47 17.373 30 24 30Z\"/><path stroke-linecap=\"round\" d=\"M12 21V11H4c0 6.667 4 10 8 10m24 0V11h8c0 6.667-4 10-8 10\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M24 32v4\"/><path d=\"m15 42l3.69-6h10.353L33 42z\"/></g>"
	},
	"trousers-bell-bottoms": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m16 12l2-8h12l2 8v12l4 17l-12 3l-12-3l4-17zm8 32V16\"/><path d=\"m12 41l12 3l12-3\"/></g>"
	},
	truck: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 39a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm23 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" d=\"M8 35H2V11h29v24H16m15 0V18h8.571L46 26.5V35h-6.189\"/></g>"
	},
	trumpet: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M32 28h6v11a3 3 0 1 1-6 0z\"/><path stroke-linecap=\"round\" d=\"M29 12h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H28\"/><path stroke-linejoin=\"round\" d=\"M14 14h-2a6 6 0 0 0 0 12h2\"/><path d=\"M14.198 33a.2.2 0 0 1-.198-.198V6.198c0-.11.089-.198.198-.198H17.5C24.956 6 31 12.044 31 19.5S24.956 33 17.5 33z\"/></g>"
	},
	trunk: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"24\" height=\"28\" x=\"12\" y=\"12\" rx=\"4\"/><path d=\"M20 12V6m8 6V6M16 4h16M18 40v4m12-4v4M20 25h8\"/></g>"
	},
	tub: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M40 23V12a7 7 0 0 0-7-7v0a7 7 0 0 0-7 7v1m14 16v-6H8v6a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8Zm3-6H5\"/><path stroke-linejoin=\"round\" d=\"m17 37l-4 6m18-6l4 6\"/></g>"
	},
	tuchong: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5 39h38V28h-6v5H11V15h12V9H5z\"/><path stroke-linecap=\"round\" d=\"M43 16v6c-8 0-14-5-14-13h6c0 4 2 7 8 7\"/></g>"
	},
	tumblr: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path fill=\"currentColor\" d=\"M15 22v-5h5v-3l6-2v5h5v5h-5v7s0 1.5 2 2s5-1 5-1l-2 6h-5c-3.5 0-6-3.5-6-6v-8z\"/></g>"
	},
	turkey: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 36h40l-5 8H9zm7-6v6h26v-5c0-6-3-8-3-8c2-2.5 3-6 0-8s-5.5 0-7 2c0 0-16-2-16 13\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M21 24s-1 .5-2 2s-1 3-1 3\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"m39 9l-5 6\"/><circle cx=\"38.356\" cy=\"7.483\" r=\"2.5\" fill=\"currentColor\" transform=\"rotate(35.072 38.356 7.483)\"/><circle cx=\"40.811\" cy=\"9.206\" r=\"2.5\" fill=\"currentColor\" transform=\"rotate(35.072 40.81 9.206)\"/></g>"
	},
	"turn-around": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10m3 6h-6c-.929 0-1.393 0-1.784.038a8 8 0 0 0-7.177 7.178C12 27.607 12 28.07 12 29h24c0-.929 0-1.393-.038-1.784a8 8 0 0 0-7.178-7.178C28.393 20 27.93 20 27 20\"/><path d=\"M41 26.784c1.902 1.224 3 2.669 3 4.216c0 4.418-8.954 8-20 8S4 35.418 4 31c0-1.547 1.098-2.992 3-4.216\"/><path d=\"m19 34l5 5l-5 5\"/></g>"
	},
	"turn-off-bluetooth": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M20.672 11.778V4l14.584 11.111l-7.179 4.445M32.5 35.974L20.675 44V29.628z\"/><path d=\"m4 12.5l40 23\"/><path stroke-linejoin=\"round\" d=\"m7.444 34l13.231-4.373\"/></g>"
	},
	"turn-on": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke-width=\"4\" d=\"M21 43c-4.726-1.767-8.667-7.815-10.64-11.357c-.852-1.53-.403-3.408.964-4.502a3.83 3.83 0 0 1 5.1.283L18 29V17.5a2.5 2.5 0 0 1 5 0v6a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1 5 0v7.868c0 1.07-.265 2.128-.882 3.003C36.095 39.82 34.256 42.034 32 43c-3.5 1.5-6.63 1.634-11 0\"/><path stroke-width=\"3\" d=\"m12 9l3 3m4-8l1 6m7-2l-2 3\"/></g>"
	},
	tv: {
		body: "<g fill=\"none\"><rect width=\"38\" height=\"28\" x=\"5\" y=\"14\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m24 14l14-8m-15 8L10 6m25 14v6\"/><rect width=\"4\" height=\"4\" x=\"33\" y=\"32\" fill=\"currentColor\" rx=\"2\"/></g>"
	},
	"tv-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 12H6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z\"/><path d=\"M31 19H11v16h20z\"/><path stroke-linecap=\"round\" d=\"m14 4.5l9.09 7.5L34 2m4 16v1m0 6v1\"/></g>"
	},
	twitter: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 35.762c1.929 1.067 15.891 9.115 25.82 2.912s9.38-16.89 9.38-21.788c.9-1.884 2.8-2.842 2.8-7.942q-2.799 2.585-5.565 1.76q-2.709-4.131-7.456-3.655c-4.746.477-6.482 5.133-5.971 11.158c-7.318 3.7-13.056-2.683-16.014-7.503c-.988 3.796-1.94 8.354 0 13.395q1.942 5.042 9.331 8.526Q9.835 36.685 5 35.762Z\"/>"
	},
	two: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m11 40l-4.107-8.898a5 5 0 0 1 1.996-6.4l5.541-3.274a3 3 0 0 1 3.116.038l.687.43a1 1 0 0 0 1.524-.965L18.148 7.26a2.62 2.62 0 0 1 .748-2.155a1.744 1.744 0 0 1 2.323-.129l.378.302a3 3 0 0 1 1.087 1.865l2.239 13.88a.568.568 0 0 0 1.127-.036l1.328-13.724a3 3 0 0 1 1.112-2.054l.206-.165a1.865 1.865 0 0 1 2.484.138c.525.524.82 1.236.82 1.978v22.26a1 1 0 0 0 1.624.782L37 27.5c1.653-1.322 3.875-.459 5.255.445c.439.287.504.881.192 1.303L34.5 40S31 44 23 44s-11.333-2.667-12-4\"/>"
	},
	"two-dimensional-code": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M20 6H6v14h14zm0 22H6v14h14zM42 6H28v14h14z\"/><path stroke-linecap=\"round\" d=\"M29 28v14m12-14v14\"/></g>"
	},
	"two-dimensional-code-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M18 6H6v12h12zm0 24H6v12h12zm24 0H30v12h12zm0-24H30v12h12z\"/><path stroke-linecap=\"round\" d=\"M24 6v18m0 6v12m0-18H6m36 0H30\"/></g>"
	},
	"two-dimensional-code-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M18 6H6v12h12zm0 24H6v12h12zM42 6H30v12h12z\"/><path stroke-linecap=\"round\" d=\"M24 6v12m18 6H6m28 6v12m8-12v12M26 30v12\"/></g>"
	},
	"two-ellipses": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M40.579 7.349c3.765 3.764-.622 14.255-9.799 23.431s-19.667 13.564-23.43 9.8c-3.765-3.765.622-14.255 9.798-23.432S36.814 3.584 40.58 7.35\"/><path d=\"M7.485 7.349c-3.764 3.764.623 14.255 9.799 23.431s19.667 13.564 23.432 9.799s-.623-14.255-9.799-23.432S11.25 3.584 7.485 7.35\"/></g>"
	},
	"two-fingers": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M12.566 27.182Q10 28.941 10 33c0 4.06 4.975 11 9.462 11h11.48C35.332 44 38 40.15 38 37.06V24.01a3 3 0 0 0-3-3h-.01A2.99 2.99 0 0 0 32 24\"/><path d=\"M13.981 29.445v-18.44a3 3 0 0 1 3.006-2.997a3.014 3.014 0 0 1 3.006 3.015v13.569\"/><path stroke-linejoin=\"round\" d=\"M19.993 24.008V7.015a3.016 3.016 0 0 1 6.03 0v16.993\"/><path stroke-linejoin=\"round\" d=\"M26 23.716v-2.713a3 3 0 0 1 6 0v3\"/></g>"
	},
	"two-hands": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m37 19.976l-.983 3.957l-8.706 6.307l.05 11.718L34 42l-.373-8.485Q44.01 27.02 44.01 24V6.06M11 20.051l1.033 3.95l8.368 6.415l.359 11.712L14 42l.203-8.091q-10.19-5.862-10.19-8.928V6.03\"/>"
	},
	"two-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M19 19c0-3.167 2.667-5 5-5s5 1.833 5 5c0 5.7-10 9.933-10 15h10\"/></g>"
	},
	"two-semicircles": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 25c0-11.046-8.954-20-20-20S4 13.954 4 25zm-30 7c0 5.523 4.477 10 10 10s10-4.477 10-10z\" clip-rule=\"evenodd\"/>"
	},
	"two-triangles": {
		body: "<g fill=\"none\"><path d=\"m24 4l17.32 30H6.68z\"/><path d=\"m24 44l17.32-30H6.68z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m24 4l17.32 30H6.68z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m24 44l17.32-30H6.68z\"/></g>"
	},
	"two-triangles-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24L4 4v40z\"/><path d=\"m4 24l40 20V4z\"/></g>"
	},
	"two-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M26.745 44h-.896c-5.21 0-10.07-2.626-12.925-6.984l-2.195-3.35a5.63 5.63 0 0 1 1.072-7.382l2.288-1.936c.26-.22.411-.545.411-.887V7.25a3.25 3.25 0 0 1 6.5 0v-1a3.25 3.25 0 0 1 6.5 0v11.5a3.25 3.25 0 0 1 6.5 0v4a3.25 3.25 0 0 1 6.5 0v10.219c0 1.649-.498 3.26-1.43 4.62l-.973 1.423A13.76 13.76 0 0 1 26.745 44\"/>"
	},
	"type-drive": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 12a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/><path d=\"M15.414 32.586A2 2 0 0 1 16.828 32H30.26a2 2 0 0 1 1.302.481L38 38H10zM39 38H9\"/><circle cx=\"15\" cy=\"21\" r=\"4\"/><circle cx=\"33\" cy=\"21\" r=\"4\"/><path d=\"M15 25h18m-18-8h18\"/></g>"
	},
	"u-disk": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M30 12V4H18v8\"/><path d=\"M13 12.374c0-.207.167-.374.373-.374h21.254c.206 0 .373.167.373.373V33c0 6.075-4.925 11-11 11s-11-4.925-11-11z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20 21h8m-8 8h8\"/></g>"
	},
	"u-turn-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M35 34V15c0-6.075-4.925-11-11-11v0c-6.075 0-11 4.925-11 11v29\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m18 39l-5 5l-5-5\"/><circle cx=\"35\" cy=\"39\" r=\"5\" transform=\"rotate(90 35 39)\"/></g>"
	},
	"u-turn-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14 13h19c6.075 0 11 4.925 11 11v0c0 6.075-4.925 11-11 11H4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m9 40l-5-5l5-5\"/><circle cx=\"9\" cy=\"13\" r=\"5\"/></g>"
	},
	"u-turn-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M34 13H15C8.925 13 4 17.925 4 24v0c0 6.075 4.925 11 11 11h29\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m39 30l5 5l-5 5\"/><circle cx=\"39\" cy=\"13\" r=\"5\"/></g>"
	},
	"u-turn-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 14v19c0 6.075 4.925 11 11 11v0c6.075 0 11-4.925 11-11V4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m30 9l5-5l5 5\"/><circle cx=\"13\" cy=\"9\" r=\"5\" transform=\"rotate(-90 13 9)\"/></g>"
	},
	ulikecam: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" d=\"M22 44c9.941 0 18-8.059 18-18S31.941 8 22 8S4 16.059 4 26s8.059 18 18 18Zm19-34a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z\"/>"
	},
	umbrella: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M16.727 27q3.636-3.636 7.273-3.636T31.273 27q4.243-3.636 6.363-3.636q2.122 0 6.364 3.636c0-11.046-8.954-20-20-20S4 15.954 4 27q4.243-3.636 6.364-3.636T16.727 27Z\"/><path stroke-linecap=\"round\" d=\"M24 24v14.554c0 3.014 2.486 5.457 5.5 5.457s5.5-2.443 5.5-5.457M24 3v4\"/></g>"
	},
	"umbrella-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 24c0-11.046-8.954-20-20-20S4 12.954 4 24z\"/><path stroke-linecap=\"round\" d=\"M24 24v14.554c0 3.014 2.486 5.457 5.5 5.457s5.5-2.443 5.5-5.457\"/></g>"
	},
	"umbrella-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M27 24v13.125C27 39 26.638 44 23 44c-3.429 0-4-4.375-4-5.625M24 4c14.5 0 19.375 13.333 20 20H4c.625-6.667 5.5-20 20-20\"/><path d=\"m19 14l4 4l6-7\"/></g>"
	},
	undo: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M11.272 36.728A17.94 17.94 0 0 0 24 42c9.941 0 18-8.059 18-18S33.941 6 24 6c-4.97 0-9.47 2.015-12.728 5.272C9.614 12.93 6 17 6 17\"/><path d=\"M6 9v8h8\"/></g>"
	},
	ungroup: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M11.273 4H4v7.273h7.273zM44 36.727h-7.273V44H44zM11.273 24H4v7.273h7.273zM24 36.727h-7.273V44H24zM31.273 4H24v7.273h7.273zM44 16.727h-7.273V24H44z\"/><path stroke-linecap=\"round\" d=\"M11.273 7.636H24m0 32.728h12.727M11.273 27.637h16.364V11.273m1.191 9.09h7.899M20.363 36.727v-9.099zM7.637 11.273V24m32.726 0v12.727\"/></g>"
	},
	unicast: {
		body: "<g fill=\"none\" stroke=\"currentColor\"><path stroke-width=\"4\" d=\"M24 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" stroke-width=\"4\" d=\"M24 15v8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M18 33V23l6 .003\"/><path stroke-linecap=\"round\" stroke-width=\"5\" d=\"M41 41v1M7 41v1m11-1v1m12-1v1\"/></g>"
	},
	"union-selection": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M32 16h9a2 2 0 0 1 2 2v23a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-9\"/><path d=\"M32 16V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v23a2 2 0 0 0 2 2h9m25-16L17 40M32 7L7 32m25-16L16 32m27-8L24 43m0-38L5 24m38 10l-9 9M14 5l-9 9\"/></g>"
	},
	universal: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M24 38c7.732 0 14-6.268 14-14s-6.268-14-14-14s-14 6.268-14 14s6.268 14 14 14Z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M11 29c1.509.624 4 1 5.259-.468c1.258-1.469.136-3.78 1.53-4.564c1.528-.86 2.631 2.064 5.502 1.548S28 21 28 19s-1.715-2-1.838-3.946C26 12.5 28 11 28 11m0 26c-1.086-.909-2-1.5-2-3s1-1 2-2s.5-3 1.5-3.5s4.108.556 6.5 2.5\"/><circle cx=\"24\" cy=\"4\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"44\" r=\"2\" fill=\"currentColor\"/><circle cx=\"44\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><circle cx=\"38\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><circle cx=\"10\" cy=\"38\" r=\"2\" fill=\"currentColor\"/><circle cx=\"4\" cy=\"24\" r=\"2\" fill=\"currentColor\"/><circle cx=\"10\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><circle cx=\"38\" cy=\"38\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 24c0 3.815 1.526 7.273 4 9.798M24 38c7.732 0 14-6.268 14-14M24 10c3.815 0 7.273 1.526 9.798 4\"/></g>"
	},
	unlike: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326c1.194-.397 2.562-1.016 4.01-1.826M34.959 27l6.878 8.5m.001-8.5l-6.879 8.5\"/>"
	},
	unlink: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m25.893 16.03l-7.779-7.778c-2.863-2.863-7.41-2.959-10.157-.213s-2.65 7.293.214 10.157l7.778 7.778m15.967-3.904l7.778 7.779c2.864 2.864 3.235 7.274.214 10.157s-7.294 2.65-10.157-.213l-7.779-7.779m-.734-10.938l-3.889-3.89M30.313 30.15l-3.889-3.889\"/>"
	},
	unlock: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"34\" height=\"22\" x=\"7\" y=\"22.048\" rx=\"2\"/><path stroke-linecap=\"round\" d=\"M14 22v-7.995c-.005-5.135 3.923-9.438 9.086-9.954S32.967 6.974 34 12.006M24 30v6\"/></g>"
	},
	"unlock-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"24\" cy=\"30\" r=\"14\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M31 12v-1a7 7 0 0 0-7-7v0a7 7 0 0 0-7 7v6m7 9v8\"/></g>"
	},
	"unordered-list": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 18v9m3 0H5m6-15H5m0-7s3-3 5 0s-5 7-5 7m0 22.5s2-3 5-1s0 4.5 0 4.5s3 2.5 0 4.5s-5-1-5-1m5-3.5H8m0-20l-3 2m15 4h22M20 38h22M20 10h22\"/>"
	},
	up: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m13 30l12-12l12 12\"/>"
	},
	"up-and-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 36v8h32V12h-8v8h-8v8h-8v8zm6-23l9-9m-6 0h6v6M10 27H4v-6m9-3l-9 9\"/>"
	},
	"up-c": {
		body: "<defs><path id=\"ipOUpC0\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\"/></defs><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><use href=\"#ipOUpC0\" clip-rule=\"evenodd\"/><use href=\"#ipOUpC0\" stroke-linejoin=\"round\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m33 27l-9-9l-9 9\"/></g>"
	},
	"up-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m12 29l12-12l12 12z\"/>"
	},
	"up-small": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24.008 12.1V36M12 24l12-12l12 12\"/>"
	},
	"up-square": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"m14 29l10-10l10 10\"/></g>"
	},
	"up-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 24L24 6l19 18H31v18H17V24z\"/>"
	},
	"update-rotation": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\"/><path d=\"M33.542 27c-1.274 4.057-5.064 7-9.542 7s-8.268-2.943-9.542-7v6m19.084-18v6c-1.274-4.057-5.064-7-9.542-7s-8.268 2.943-9.542 7\"/></g>"
	},
	upload: {
		body: "<mask id=\"ipOUpload0\" width=\"48\" height=\"48\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:alpha\"><path fill=\"currentColor\" d=\"M48 0H0v48h48z\"/></mask><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" mask=\"url(#ipOUpload0)\"><path d=\"M6 24.008V42h36V24m-9-9l-9-9l-9 9m8.992 17V6\"/></g>"
	},
	"upload-computer": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M25 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-7M24 34v8m-10 0h20m3-24V6m-5 5l5-5l5 5\"/>"
	},
	"upload-laptop": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M25 9H11a3 3 0 0 0-3 3v21h32v-9\"/><path d=\"M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z\"/><path stroke-linecap=\"round\" d=\"M37 19V7m-5 5l5-5l5 5\"/></g>"
	},
	"upload-logs": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M24 44H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v18m-4.5 20V31\"/><path stroke-linejoin=\"round\" d=\"m31 34.5l1.5-1.5l3-3l3 3l1.5 1.5\"/><path d=\"M16 16h16m-16 8h8\"/></g>"
	},
	"upload-one": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M11.678 20.271C7.275 21.318 4 25.277 4 30c0 5.523 4.477 10 10 10c.947 0 1.864-.132 2.733-.378m19.322-19.351c4.403 1.047 7.677 5.006 7.677 9.729c0 5.523-4.477 10-10 10c-.947 0-1.864-.132-2.732-.378M36 20c0-6.627-5.373-12-12-12s-12 5.373-12 12m5.065 7.881L24 20.924L31.132 28M24 38V24.462\"/>"
	},
	"upload-picture": {
		body: "<g fill=\"none\"><path fill=\"currentColor\" d=\"M44 24a2 2 0 1 0-4 0zM24 8a2 2 0 1 0 0-4zm15 32H9v4h30zM8 39V9H4v30zm32-15v15h4V24zM9 8h15V4H9zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1zM8 9a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 35l10.693-9.802a2 2 0 0 1 2.653-.044L32 36m-4-5l4.773-4.773a2 2 0 0 1 2.615-.186L42 31m-5-13V6m-5 5l5-5l5 5\"/></g>"
	},
	"upload-three": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" d=\"m32 28l-8-8l-8 8m8 8V20.5M16 14h16\"/></g>"
	},
	"upload-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24.008 41L24 23m16.518 11.316A9.21 9.21 0 0 0 44 24c-1.213-3.83-4.93-5.929-8.947-5.925h-2.321a14.737 14.737 0 1 0-25.31 13.429\"/><path d=\"M30.364 27.636L24 21.272l-6.364 6.364\"/></g>"
	},
	"upload-web": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M28 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v12.059M39 41V29m-5 5l5-5l5 5\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 10 14)\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 16 14)\"/></g>"
	},
	"upside-down-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4Z\"/><path stroke-linecap=\"round\" d=\"M17 30v-1m14 1v-1M17 17s2-4 7-4s7 4 7 4\"/></g>"
	},
	usb: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 22a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm24 6a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z\"/><path stroke-linecap=\"round\" d=\"m19 9l5-5l5 5m-4 30L12 28.263V22m24 6v4.79L24 41m0-37v39m-3 1h6\"/></g>"
	},
	"usb-memory-stick": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 22a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2zm7-18h18v16H15zm6 6v2m6-2v2\"/>"
	},
	"usb-micro-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 18a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z\"/><path d=\"M11 15h26v8H11zm10 8v-2m6 2v-2m5 2v-2m-16 2v-2m-8-6h32\"/></g>"
	},
	"usb-micro-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 18a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v6.14a3 3 0 0 1-.456 1.59l-3.663 5.86A3 3 0 0 1 37.337 33H10.663a3 3 0 0 1-2.544-1.41l-3.663-5.86A3 3 0 0 1 4 24.14z\"/><path d=\"M11 15h26v8H11zm10 8v-2m6 2v-2m5 2v-2m-16 2v-2m-8-6h32\"/></g>"
	},
	"usb-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M42 21H6v21h36z\"/><path stroke-linecap=\"round\" d=\"M14 21V6h20v15m-14-9v2m8-2v2\"/></g>"
	},
	"usb-type-c": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M15 15h18c15 0 15 18 0 18H15C0 33 0 15 15 15m6 12v-6m6 6v-6m6 6v-6m-18 6v-6m21 3H12\"/>"
	},
	user: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"12\" r=\"8\"/><path d=\"M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44\"/></g>"
	},
	"user-business": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"12\" r=\"8\"/><path d=\"M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44\"/><path d=\"m24 44l4-5l-4-13l-4 13z\"/></g>"
	},
	"user-positioning": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"16\" r=\"6\"/><path d=\"M36 36c0-6.627-5.373-12-12-12s-12 5.373-12 12M36 4h8v8M12 4H4v8m32 32h8v-8m-32 8H4v-8\"/></g>"
	},
	"user-to-user-transmission": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M14 18a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm20 0a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z\"/><path stroke-linecap=\"round\" d=\"M4 44v-9c0-5.523 3.77-10 8.421-10h5.053C21.559 25 24 29.027 24 29.027\"/><path stroke-linecap=\"round\" d=\"M44 44v-9c0-5.523-3.815-10-8.521-10h-5.113c-3.961 0-6.374 4.027-6.366 4.027M11 40h27\"/><path stroke-linecap=\"round\" d=\"m34.295 36.258l1.24 1.247L38.015 40l-2.48 2.561l-1.24 1.281m-19.965-7.61l-1.26 1.254l-2.518 2.507l2.518 2.548l1.26 1.275\"/></g>"
	},
	uterus: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M32 18c-.923 6-3 11.5-7.5 11.5s-6-5-7.5-11.5s0-12 7.5-12s8.423 6 7.5 12Z\"/><path stroke-linecap=\"round\" d=\"M32.5 12.5c1.75-1.632 3.533-2.17 6.34-1.996c4.212.262 5.16 3.144 5.16 7.452m0 0c0 4.309-1.651 8.227-4.941 7.34c-3.29-.886-2.83-4.386-1.291-6.027c1.538-1.641 4.23-2.31 6.232-1.313ZM16.5 12c-1.77-1.544-3.86-1.67-6.413-1.495C6.257 10.767 4 13.692 4 18m0 0c0 4.308 2.897 8.182 5.888 7.296s2.574-4.387 1.175-6.028C9.663 17.63 5.82 17.003 4 18.001Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20 27v16m9-16v16\"/></g>"
	},
	vacation: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m11 14.999l-6 1c1.63-7.514 6.364-9.993 11-10c2.997-.005 5.952 1.026 8 2c2.048-.974 5-2 8-2c4.611 0 9.37 2.486 11 10l-6-1c.559 2.1 1.788 5.792 0 9c-2.98-2.673-9.87-6.709-13-9c-3.13 2.291-10.02 6.327-13 9c-1.788-3.207-.559-6.9 0-9\"/><path d=\"M24 15c-.755 3.889-1.811 13.533 0 21\"/><path d=\"M12 42h24c-4.787-4.585-7-5.995-12-6s-10.108 3.382-12 6\"/></g>"
	},
	"vacuum-cleaner": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M26 22.5V10c0-3 2-6 6-6s6 3 6 6v24\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M32.75 34h10.5l.75 6H32zM10 40h15.886c.063 0 .114-.05.114-.114V23.255C26 15.935 20.066 10 12.745 10v0A5.745 5.745 0 0 0 7 15.745V29\"/><circle cx=\"10\" cy=\"34\" r=\"6\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14 10v19\"/></g>"
	},
	"vegetable-basket": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 14H7.378a3 3 0 0 0-2.98 3.354L7.12 40.236A2 2 0 0 0 9.105 42h30.368a2 2 0 0 0 1.991-1.807l2.218-22.904A3 3 0 0 0 40.696 14H38M5 22h38m-28 7h18m-16 7h14\"/><path d=\"M24 6c-4.418 0-8 6.925-8 15.467q0 .267.005.533h15.99q.005-.266.005-.533C32 12.925 28.418 6 24 6\"/></g>"
	},
	vegetables: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M32 7.902c1.5-.402 3.33-.29 4.44 0c2.501.658 4.325 1.788 5.416 3.36c1.263 1.817 1.481 4.137.652 6.894c-1.699 5.64-8.6 9.14-9.008 9.344m-6.253 13.77q.774.148 1.562.151c1.47 0 2.735-.415 3.757-1.234c1.113-.885 1.934-2.187 2.267-3.909s-.153-3.335-.68-4.91c-.373-1.118-.618-2.804-.653-3.868m-20.5-1s-5.81-2.706-7.507-8.344c-.83-2.756-.611-5.074.651-6.894c1.093-1.571 2.914-2.7 5.416-3.36c1.111-.29 2.174-.439 3.162-.439M13.5 27c.5 1 .068 2.796-.46 4.372c-.527 1.576-1.071 3.202-.68 4.91c.39 1.706 1.153 3.023 2.264 3.908c1.024.818 1.906 1.31 3.376 1.31c.523-.002 2-.5 2-.5\"/><path d=\"M23.5 4C28.747 4 33 6.643 33 14.375S23.5 32 23.5 32S14 22.107 14 14.375C14 6.642 18.253 4 23.5 4\"/><path d=\"M24 42.229c-2.01 0-3.72-.662-4.87-1.67c-1.327-1.166-2.003-2.826-2.003-4.932c0-1.756.95-3.221 1.867-4.64c.652-1.007 1.554-2.99 1.554-2.99s.475-1.636.397-2.7c-.145-1.964-2.052-3.443-2.362-4.457c-.375-1.26-.283-2.028.285-2.412c.175-.12.845-.16.845-.16s-.126-1.846-.047-2.455c.095-.73.476-1.772 1.372-1.848c.62-.053 1.11.04 1.428.707c.102.216.173.477.272.839a26 26 0 0 0 1.257 3.532a26 26 0 0 0 1.26-3.532c.1-.361.17-.623.273-.84c.318-.667.81-.758 1.43-.705c.755.066 1.275 1.119 1.37 1.847c.08.609.064 1.42-.047 2.454h.047c.215 0 .626.04.802.16c.569.384.602 1.519.283 2.413C29 22 27.203 23.133 27 25c-.129 1.177.095 1.87.451 2.998c.396 1.255.9 1.983 1.554 2.989c.918 1.418 1.867 2.885 1.867 4.64c0 2.106-.674 3.765-2.004 4.931c-1.152 1.008-2.859 1.67-4.869 1.671\"/></g>"
	},
	"vertical-spacing-between-items": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M8 6v6h32V6\"/><path d=\"M14 24h20\"/><path stroke-linejoin=\"round\" d=\"M8 42v-6h32v6\"/></g>"
	},
	"vertical-tidy-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8 7h32v6H8zm0 14h32v6H8zm0 14h32v6H8z\"/>"
	},
	"vertical-timeline": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M4 5h40M4 43h40M8 36v7\"/><path stroke-linejoin=\"round\" d=\"M12 28H4v8h8zm16-8h-8v8h8zm16-8h-8v8h8z\"/><path stroke-linecap=\"round\" d=\"M40 20v23M8 12v1m0 7v1m15-9v1m1 15v15\"/></g>"
	},
	"vertically-centered": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\"><path d=\"M6 7h36\"/><path stroke-linejoin=\"round\" d=\"M16 16h16v16H16z\"/><path d=\"M6 41h36\"/></g>"
	},
	vest: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36 4h-5l-7 20v20h16V19l-4-6zM12 4h5l7 20v20H8V19l4-6z\"/>"
	},
	vial: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M30 33V4H18v28.968M30 14h-5m5 6h-5\"/><path d=\"M18 33v4.699C18 41.179 20.686 44 24 44s6-2.821 6-6.301v-4.635z\"/></g>"
	},
	"vicia-faba": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 31c0-6.5 4-8.963 7-9.981S16 20 19 17s3-9 9-11s13.091 1 15 8c1.908 7-3.5 16-6 19s-7.501 8-16 9c-8.5 1-17-4.5-17-11Z\"/><path stroke-linecap=\"round\" d=\"M12 21.044c7 8.956 17 0 10-9.044\"/><path stroke-linecap=\"round\" d=\"M11 21.019C14 20 16 20 19 17s3-9 9-11\"/></g>"
	},
	video: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 10a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" d=\"M36 8v32M12 8v32m26-22h6m-6 12h6M4 18h6m-6-2v4M9 8h6M9 40h6M33 8h6m-6 32h6M4 30h6m-6-2v4m40-4v4m0-16v4\"/><path d=\"m21 19l8 5l-8 5z\"/></g>"
	},
	"video-conference": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 10a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v9l8-6v23l-8-6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 6v4m5-6v8m5-6v4\"/>"
	},
	"video-file": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10\"/><path d=\"M14 21h13.493v3.5L34 22v11l-6.507-2.5V34H14z\"/></g>"
	},
	"video-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 10a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v9l8-6v23l-8-6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/><circle cx=\"17\" cy=\"21\" r=\"5\"/></g>"
	},
	"video-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3\"/><path d=\"M20.5 28v-6.062l5.25 3.03L31 28l-5.25 3.031l-5.25 3.031zM6 15h36m-9-9l-6 9m-6-9l-6 9\"/></g>"
	},
	videocamera: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"32\" height=\"26\" x=\"4\" y=\"11\" rx=\"2\"/><circle cx=\"20\" cy=\"24\" r=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m36 29l8 4V15l-8 4\"/></g>"
	},
	"videocamera-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"31\" height=\"20\" x=\"4\" y=\"21\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20 27h9v8h-9z\"/><circle cx=\"27\" cy=\"13\" r=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"13\" cy=\"13\" r=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m35 35l9 4V23l-9 4\"/></g>"
	},
	viencharts: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"17\" r=\"12\"/><circle cx=\"16\" cy=\"31\" r=\"12\"/><circle cx=\"32\" cy=\"31\" r=\"12\"/></g>"
	},
	"view-grid-card": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M13 13h8v8h-8zm14 0h8v8h-8zM13 27h8v8h-8zm14 0h8v8h-8z\"/></g>"
	},
	"view-grid-detail": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M13 13h8v8h-8z\"/><path stroke-linecap=\"round\" d=\"M27 13h8m-8 7h8m-22 8h22m-22 7h22\"/></g>"
	},
	"view-grid-list": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path d=\"M13 13h8v8h-8zm0 14h8v8h-8z\"/><path stroke-linecap=\"round\" d=\"M27 28h8m-8 7h8m-8-22h8m-8 7h8\"/></g>"
	},
	"view-list": {
		body: "<g fill=\"none\"><rect width=\"32\" height=\"40\" x=\"8\" y=\"4\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M21 14h12M21 24h12M21 34h12\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M15 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4\" clip-rule=\"evenodd\"/></g>"
	},
	viewfinder: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16 6H8a2 2 0 0 0-2 2v8m10 26H8a2 2 0 0 1-2-2v-8m26 10h8a2 2 0 0 0 2-2v-8M32 6h8a2 2 0 0 1 2 2v8M13 33V18h6l2-3h6l2 3h6v15z\"/><path stroke-miterlimit=\"10\" d=\"M24 28a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z\"/></g>"
	},
	vigo: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"3.833\"><path d=\"M24 44.125c9.527 0 17.25-7.616 17.25-17.01c0-2.306-.315-4.5-.99-6.591c-.39-1.207-.704-1.783-1.167-2.894s-1.079-2.05-1.78-2.993c-.7-.943-2.067-2.798-3.012-3.17c0 1.461-2.873 6.568-3.975 6.824c-1.103.257.815-5.369-1.628-9.217S22.305 2.7 22.305 4.43s-1.093 4.632-2.194 6.072c-1.1 1.439-2.886 2.675-4.13 3.256s-.793-2.908-1.726-2.292c-.94.621-2.278 2.351-2.98 3.437c-2.462 3.801-4.525 7.515-4.525 12.212c0 9.394 7.723 17.01 17.25 17.01Z\"/><path fill=\"currentColor\" d=\"M19.296 23.733v8.737a1.878 1.878 0 0 0 2.863 1.599l8.385-5.169a.94.94 0 0 0 0-1.598l-8.385-5.168a1.878 1.878 0 0 0-2.863 1.599Z\"/></g>"
	},
	vip: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 4H4l11 40h8z\"/><path stroke-linecap=\"round\" d=\"M23 44L44 4\"/></g>"
	},
	"vip-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m4.503 16.366l8.013-8.694A2.13 2.13 0 0 1 14.082 7h19.836a2.13 2.13 0 0 1 1.566.672l8.013 8.694a1.85 1.85 0 0 1-.035 2.572L24.75 40.15a1 1 0 0 1-1.5 0L4.538 18.938a1.85 1.85 0 0 1-.035-2.572\"/><path d=\"m16 20l8 9l8-9\"/></g>"
	},
	virgo: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M30 17c4 0 11.088-.112 11.959 6.64C42.417 27.192 39.238 32.674 24 43\"/><path fill=\"currentColor\" d=\"M16 11a2 2 0 1 0 4 0zM4 11a2 2 0 1 0 4 0zm4 0a4 4 0 0 1 4-4V3a8 8 0 0 0-8 8zm4-4a4 4 0 0 1 4 4h4a8 8 0 0 0-8-8z\"/><path fill=\"currentColor\" d=\"M28 11a2 2 0 1 0 4 0zm-12 0a2 2 0 1 0 4 0zm4 0a4 4 0 0 1 4-4V3a8 8 0 0 0-8 8zm4-4a4 4 0 0 1 4 4h4a8 8 0 0 0-8-8z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 11v18m12-18v18\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M30 11v18c0 5 2.5 10 12 10\"/></g>"
	},
	"virtual-reality-glasses": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 16h38a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H30l-5.992-5.999L18 40H5a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1Z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M14 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8m20 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8\"/><path d=\"M6 10h36z\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M6 10h36\"/></g>"
	},
	voice: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"14\" height=\"27\" x=\"17\" y=\"4\" rx=\"7\"/><path stroke-linecap=\"round\" d=\"M9 23c0 8.284 6.716 15 15 15s15-6.716 15-15M24 38v6\"/></g>"
	},
	"voice-input": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 30c0 6.627 5.373 12 12 12s10-4 11-7l1.538-5L35 9l9 33m-3.273-12H28.54\"/><path d=\"M22 15a6 6 0 0 0-12 0v15a6 6 0 0 0 12 0z\"/></g>"
	},
	"voice-message": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path fill=\"currentColor\" d=\"M17 25.9a2 2 0 1 0 0-4a2 2 0 0 0 0 4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M21.95 28.85A6.98 6.98 0 0 0 24 23.9a6.98 6.98 0 0 0-2.05-4.95m4.95 14.849a13.96 13.96 0 0 0 4.1-9.9c0-3.866-1.567-7.366-4.1-9.899\"/></g>"
	},
	"voice-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M31 24V11a7 7 0 1 0-14 0v13a7 7 0 1 0 14 0Z\"/><path stroke-linecap=\"round\" d=\"M9 23c0 8.284 6.716 15 15 15c1.753 0 3.436-.3 5-.853M39 23a14.95 14.95 0 0 1-1.248 6M24 38v6m18-2L6 6\"/></g>"
	},
	"voice-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M30 18v12m6-8v4m-18-8v12m-6-8v4m12-12v20\"/></g>"
	},
	voicemail: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M11 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm26 0a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z\"/><path stroke-linecap=\"round\" d=\"M12 31h24\"/></g>"
	},
	volkswagen: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m7 14l9 23l6-11h4l6 11l9-23\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m16 6l6 13h4l6-13\"/><path stroke-linecap=\"round\" d=\"M44 24a19.95 19.95 0 0 0-6.77-15A19.92 19.92 0 0 0 24 4a19.92 19.92 0 0 0-13.23 5A19.95 19.95 0 0 0 4 24\"/></g>"
	},
	volleyball: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M31.81 42.405c10.168-4.318 14.907-16.056 10.598-26.213C38.098 6.035 26.351 1.276 16.193 5.595S1.276 21.65 5.595 31.808S21.652 46.724 31.81 42.405Z\"/><path stroke-linecap=\"round\" d=\"M16 6c-1.494 7.01 1.937 14.197 8 18M12 40c6.97-2.26 11.74-8.68 12-16m20 1c-5.45-4.672-14.5-4.597-20-1\"/><path d=\"M17 16s11.56-8.49 24-2M20 33S7.59 28.02 7 14m27 8s1.56 14.5-10.28 22.03\"/></g>"
	},
	"volume-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z\"/><path stroke-linecap=\"round\" d=\"M32 24h12\"/></g>"
	},
	"volume-mute": {
		body: "<mask id=\"ipOVolumeMute0\" width=\"13\" height=\"13\" x=\"30\" y=\"18\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:alpha\"><path fill=\"currentColor\" d=\"M30 18h13v13H30z\"/></mask><g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><g stroke-linecap=\"round\" mask=\"url(#ipOVolumeMute0)\"><path d=\"m40.735 20.286l-8.486 8.485m.001-8.485l8.485 8.485\"/></g><path d=\"M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z\"/></g>"
	},
	"volume-notice": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M32 15a12 12 0 0 1 1.684 1.859A12.07 12.07 0 0 1 36 24c0 2.654-.846 5.107-2.278 7.09A12 12 0 0 1 32 33\"/><path stroke-linecap=\"round\" d=\"M34.236 41.186C40.084 37.696 44 31.305 44 24c0-7.192-3.796-13.496-9.493-17.02\"/></g>"
	},
	"volume-small": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z\"/><path stroke-linecap=\"round\" d=\"M32 15a12 12 0 0 1 1.684 1.859A12.07 12.07 0 0 1 36 24c0 2.654-.846 5.107-2.278 7.09A12 12 0 0 1 32 33\"/></g>"
	},
	"volume-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z\"/><path stroke-linecap=\"round\" d=\"M32 24h12m-6-6v12\"/></g>"
	},
	"vr-glasses": {
		body: "<g fill=\"none\" fill-rule=\"evenodd\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" clip-rule=\"evenodd\"><path d=\"M2 12h44v24H30l-6-6l-6 6H2z\"/><path d=\"M13 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8m22 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8\"/></g>"
	},
	waistline: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M13 31c3.056 1.51 13.2 3.622 22 0\"/><circle cx=\"24\" cy=\"25.412\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M10 5c1.856 3.278 4.971 10.258 5 17c.009 2.065-.319 4.107-1 6.014C12.18 33.1 9.453 36.042 9 43M38 5c-1.856 3.278-4.971 10.258-5 17c-.009 2.065.319 4.107 1 6.014C35.82 33.1 38.546 36.042 39 43M8 18s1 2 1 4c0 1.61-1 4-1 4m32-8s-1 2-1 4c0 1.61 1 4 1 4\"/></g>"
	},
	wallet: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.982 11.969L31.785 4l4.612 7.989z\" clip-rule=\"evenodd\"/><path stroke-linejoin=\"round\" d=\"M4 14a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/><path stroke-linejoin=\"round\" d=\"M35.25 33H44V23h-8.75c-2.9 0-5.25 2.239-5.25 5s2.35 5 5.25 5Z\"/><path stroke-linecap=\"round\" d=\"M44 16.5v24\"/></g>"
	},
	"wallet-one": {
		body: "<g fill=\"none\"><rect width=\"38\" height=\"26\" x=\"5\" y=\"13\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M25 20h18v11H25zm18-2v15M32 13c0-5-3.5-6-5-6H12.5C8.9 7 8 9.866 8 11.299V13\"/><circle cx=\"33.5\" cy=\"25.5\" r=\"1.5\" fill=\"currentColor\"/></g>"
	},
	"wallet-three": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M39 16V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h27a3 3 0 0 0 3-3v-7\"/><rect width=\"20\" height=\"16\" x=\"22\" y=\"16\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"3\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 30 24)\"/></g>"
	},
	"wallet-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 8h40v8s-10 2-10 8s10 8 10 8v8H4z\"/><path stroke-linecap=\"round\" d=\"M44 24h-2\"/></g>"
	},
	warehousing: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M34 24H18m6-6l-6 6l6 6\"/><circle cx=\"38\" cy=\"24\" r=\"4\"/><path stroke-linecap=\"round\" d=\"M40.706 13A20 20 0 0 0 38 9.717A19.93 19.93 0 0 0 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20c5.45 0 10.392-2.18 14-5.717A20 20 0 0 0 40.706 35\"/></g>"
	},
	"washing-machine": {
		body: "<g fill=\"none\"><rect width=\"32\" height=\"40\" x=\"8.778\" y=\"4\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M8.778 15.5h32\"/><circle cx=\"28.778\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><circle cx=\"34.778\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24.778\" cy=\"30\" r=\"7\" stroke=\"currentColor\" stroke-width=\"4\"/></g>",
		width: 49
	},
	"washing-machine-one": {
		body: "<g fill=\"none\"><rect width=\"32\" height=\"40\" x=\"8\" y=\"4\" stroke=\"currentColor\" stroke-width=\"4\" rx=\"2\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M8 12a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2z\"/><circle cx=\"14\" cy=\"9\" r=\"2\" fill=\"currentColor\"/><circle cx=\"20\" cy=\"9\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"29\" r=\"7\" stroke=\"currentColor\" stroke-width=\"4\"/></g>"
	},
	watch: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34.956 31L31 44H17l-3.956-13m0-14L17 4h14l3.956 13\"/><path d=\"M37 24c0 2.577-.75 4.98-2.044 7A12.99 12.99 0 0 1 24 37a12.99 12.99 0 0 1-10.956-6A12.94 12.94 0 0 1 11 24c0-2.577.75-4.98 2.044-7A12.99 12.99 0 0 1 24 11a12.99 12.99 0 0 1 10.956 6A12.94 12.94 0 0 1 37 24\"/><path d=\"M24 17v7l4 4\"/></g>"
	},
	"watch-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M19 14V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8m0 20v8a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8\"/><circle cx=\"24\" cy=\"24\" r=\"11\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 25h4m0-4v4\"/></g>"
	},
	water: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 29a5 5 0 0 0 5-5a5 5 0 0 0 10 0a5 5 0 0 0 10 0a5 5 0 0 0 10 0c0 11.046-8.954 20-20 20S4 35.046 4 24a5 5 0 0 0 5 5m19-16a4 4 0 0 1-8 0c0-2.21 4-9 4-9s4 6.79 4 9\"/>"
	},
	"water-level": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M24 44c8.284 0 15-6.716 15-15C39 15 24 4 24 4S9 15 9 29c0 8.284 6.716 15 15 15\" clip-rule=\"evenodd\"/><path d=\"M9 29c0 8.284 6.716 15 15 15s15-6.716 15-15c0 0-9 3-15 0S9 29 9 29Z\"/></g>"
	},
	"water-no": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M9 29a5 5 0 0 0 5-5a5 5 0 0 0 10 0a5 5 0 0 0 10 0a5 5 0 0 0 10 0c0 11.046-8.954 20-20 20S4 35.046 4 24a5 5 0 0 0 5 5M19 5l10 10m0-10L19 15\"/>"
	},
	"water-rate": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c8.837 0 16-6.512 16-14.545Q40 17.635 24 4Q8 17.636 8 29.455C8 37.488 15.163 44 24 44Z\"/><path stroke-linecap=\"round\" d=\"M18.857 19L24 24.368L29.143 19M18 26.158h12m-12 5.368h12m-6-5.368V36\"/></g>"
	},
	"water-rate-two": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c8.837 0 16-7.164 16-16C40 15 24 4 24 4S8 15 8 28c0 8.837 7.163 16 16 16\" clip-rule=\"evenodd\"/><path d=\"m24 20l-4 8h8l-4 8\"/></g>"
	},
	"waterfalls-h": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 6H6v11h14zm22 25H28v11h14zm0-25H28v17h14zM20 25H6v17h14z\"/>"
	},
	"waterfalls-v": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M23 20V6H6v14zm19 22V28H25v14zM31 6v14h11V6zM6 28v14h11V28z\"/>"
	},
	watermelon: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M23 34c11.046 0 20-8.954 20-20H3c0 11.046 8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M23 23v3m-6.364-5.636l-2.121 2.121m14.849-2.121l2.122 2.121\"/></g>"
	},
	"watermelon-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m24 4l17 29.92S36.046 38 24 38S7 33.92 7 33.92z\"/><circle cx=\"24\" cy=\"17\" r=\"2\" fill=\"currentColor\"/><circle cx=\"27\" cy=\"23\" r=\"2\" fill=\"currentColor\"/><circle cx=\"21\" cy=\"23\" r=\"2\" fill=\"currentColor\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M41 39.92S36.046 44 24 44S7 39.92 7 39.92\"/></g>"
	},
	waterpolo: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"m4 34l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 34M4 40l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 40m-.412-12c.79-3.829.46-7.938-1.19-11.807C38.089 6.026 26.343 1.277 16.186 5.596C7.29 9.375 2.55 18.833 4.39 27.94\"/><path d=\"M16 6c-1.53 7.17 1.79 14.11 8 18m-.61 4c.35-1.29.56-2.63.61-4m20 2c-5.45-4.91-13.53-5.44-20-2\"/><path d=\"M18 16s10.56-8.49 23-2M13 28c-2.99-3.27-5.74-7.71-6-14m27.31 8.09s.22 2.5-.38 5.95\"/></g>"
	},
	"waterpolo-one": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"m4 35l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 35M4 41l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 41\"/><path stroke=\"currentColor\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M25 18a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"m25 29l-1-4M4 11l7 11l13 2.93h18\"/><path fill=\"currentColor\" d=\"M11 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/></g>"
	},
	waves: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M2 23.355h9L17.889 4l11 40L37 23.355h9\"/>"
	},
	"waves-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M24 17v14m9-20v26M6 17v14m36-13v12M15 4v40\"/>"
	},
	"waves-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M24 11v26m9-33v40M6 11v26m36-22v18M15 18v12\"/>"
	},
	"weary-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M24 29c5 0 7 4 7 4H17s2-4 7-4m-5-11l-4 2m14-2l4 2\"/></g>"
	},
	"web-page": {
		body: "<g fill=\"none\"><rect width=\"40\" height=\"32\" x=\"4\" y=\"8\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" rx=\"3\"/><path stroke=\"currentColor\" stroke-width=\"4\" d=\"M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 10 14)\"/><circle r=\"2\" fill=\"currentColor\" transform=\"matrix(0 -1 -1 0 16 14)\"/></g>"
	},
	webcam: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M7.825 29.766C11.462 34.756 17.352 38 24 38s12.538-3.243 16.175-8.234C43.79 33.508 46 38.508 46 44H2c0-5.492 2.209-10.492 5.825-14.234Z\"/><path d=\"M24 30c7.18 0 13-5.82 13-13S31.18 4 24 4S11 9.82 11 17s5.82 13 13 13Z\"/><path d=\"M24 22a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/></g>"
	},
	wechat: {
		body: "<g fill=\"none\"><path d=\"M36.997 21.711C36.843 13.008 29.74 6 21 6C12.163 6 5 13.163 5 22c0 4.17 1.595 7.968 4.209 10.815l-1.199 7.21l7.115-3.055q4.702 1.563 8.875.782\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M36.997 21.711C36.843 13.008 29.74 6 21 6C12.163 6 5 13.163 5 22c0 4.17 1.595 7.968 4.209 10.815l-1.199 7.21l7.115-3.055q4.702 1.563 8.875.782\"/><path fill=\"currentColor\" d=\"M15.125 20.467a2.26 2.26 0 0 0 2.25-2.267a2.26 2.26 0 0 0-2.25-2.267a2.26 2.26 0 0 0-2.25 2.267a2.26 2.26 0 0 0 2.25 2.267m9 0a2.26 2.26 0 0 0 2.25-2.267a2.26 2.26 0 0 0-2.25-2.267a2.26 2.26 0 0 0-2.25 2.267a2.26 2.26 0 0 0 2.25 2.267\"/><path d=\"M38.762 39.93A10.45 10.45 0 0 1 32.5 42C26.701 42 22 37.299 22 31.5S26.701 21 32.5 21S43 25.701 43 31.5c0 1.6-.358 3.116-.998 4.473\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38.762 39.93A10.45 10.45 0 0 1 32.5 42C26.701 42 22 37.299 22 31.5S26.701 21 32.5 21S43 25.701 43 31.5c0 1.6-.358 3.116-.998 4.473\"/><path d=\"M42.002 35.973L43 42l-4.238-2.07\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42.002 35.973L43 42l-4.238-2.07\"/><path fill=\"currentColor\" d=\"M35.688 30.8A1.694 1.694 0 0 1 34 29.1c0-.939.755-1.7 1.688-1.7c.931 0 1.687.761 1.687 1.7s-.755 1.7-1.687 1.7m-6.75 0a1.694 1.694 0 0 1-1.688-1.7c0-.939.756-1.7 1.688-1.7s1.687.761 1.687 1.7s-.756 1.7-1.687 1.7\"/></g>"
	},
	weibo: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4.159\" d=\"M12.562 16.41c-3.344 3.25-10.399 12.736-5.2 19.522c5.2 6.785 19.92 4.168 25.997-.613c6.077-4.78 5.477-7.734 4.16-9.036s-5.163.014-6.24-1.757s1.917-6.195-.634-7.595c-2.55-1.4-6.954 3.65-8.943 2.338c-1.99-1.312 2.189-5.596 0-6.83c-2.19-1.235-5.796.722-9.14 3.972Z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4.159\" d=\"M43.379 16.516a12.95 12.95 0 0 0-3.642-8.073a12.96 12.96 0 0 0-7.723-3.84m5.278 12.328c-.13-1.64-.867-3.117-2-4.228a7.25 7.25 0 0 0-4.24-2.01\"/><path fill=\"currentColor\" d=\"M25 30c0 2.21-2.686 4-6 4s-6-1.79-6-4s2.686-4 6-4s6 1.79 6 4\"/></g>"
	},
	weight: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"M12 19.054q4.987-6 12-6q7.012 0 12 6\"/><path fill=\"currentColor\" d=\"M24 31a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"4\" d=\"m19 21l5.008 7\"/></g>"
	},
	weightlifting: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M24 27a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 9h40M4 4v10M44 4v10M11 9v17.1L24 34l13-8V9M24 34v10\"/></g>"
	},
	"weixin-cards-offers": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 12l36 4v24L6 36zm32 3.555V8L6 12\"/>"
	},
	"weixin-favorites": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 14l18-8l18 8M6 14l18 8M6 14v20l18 8m18-28l-18 8m18-8v20l-18 8m0-20v20\"/>"
	},
	"weixin-games": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M6 24L24 6l18 18l-18 18zm18 5v13m-5-18H6m18-5V6m5 18h13\"/><path d=\"M29 24a5 5 0 1 1-10 0a5 5 0 0 1 10 0\"/></g>"
	},
	"weixin-market": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M38 14H10a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2\"/><path d=\"M17 18v-7a7 7 0 1 1 14 0v7\"/></g>"
	},
	"weixin-mini-app": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20\"/><path d=\"M29 24a5 5 0 1 0-5-5v10a5 5 0 1 1-5-5\"/></g>"
	},
	"weixin-people-nearby": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"15\" cy=\"10\" r=\"4\"/><circle cx=\"33\" cy=\"10\" r=\"4\"/><path d=\"M10 20h10l-2 22h-6zm18 0h10l-2 22h-6z\"/></g>"
	},
	"weixin-scan": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M37 30H12l2 5h12l2.088 6.265A4 4 0 0 0 31.883 44H38a4 4 0 0 0 4-4V30l1-7l-3.646.73a2 2 0 0 0-1.58 1.632zM11 18h25l-2-5H22l-2.088-6.265A4 4 0 0 0 16.117 4H10a4 4 0 0 0-4 4v10l-1 7l3.646-.73a2 2 0 0 0 1.58-1.632z\"/>"
	},
	"weixin-search": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m6 16l6.5 1.5M8 42l6-18m24 18L21 24m21-8l-19.5 1.5M20 6l-2 7\"/>"
	},
	"weixin-shake": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M42 19L29 6L6 29l13 13zM16 29l3 3m11 10l12-12M6 18L18 6\"/>"
	},
	"weixin-top-stories": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"m24 4l7.2 7.53L41.32 14L38.4 24l2.92 10l-10.12 2.47L24 44l-7.2-7.53L6.68 34L9.6 24L6.68 14l10.12-2.47z\"/><path d=\"m30.977 11.915l.395 7.829L37.954 24l-6.582 4.256l-.395 7.829L24 32.512l-6.977 3.573l-.395-7.829L10.045 24l6.583-4.256l.395-7.829L24 15.488z\"/></g>"
	},
	whale: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M16.07 13c-9.817.35-11.394 8.006-10.956 11.791c-1.753 3.145-1.218 3.93.096 5.24c6.574 6.115 18.843 5.678 24.54 3.495c5.96-2.446 8.999-7.051 9.29-9.526c5.26-3.494 5.366-9.399 4.636-11c-.78 1.31-3.029 2.272-4.635 3c-1.753.35-4.275-.962-5.005-2.127c-.502 2.627 0 4.627 1.314 5.678c2.288 1.747 1.125 3.512.687 3.949c-1.896 1.89-5.506.99-7.26-1.766C24.053 14.31 18.991 13 16.07 13\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M5 28c2.833.532 8.4 1.554 12-1\"/><circle cx=\"12\" cy=\"20\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	wheelchair: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M29.622 35c-1.332 5.176-6.03 9-11.622 9c-6.627 0-12-5.373-12-12c0-4.843 2.869-9.016 7-10.912\"/><path d=\"m18 12l2 18l15-1l3 11h3\"/><path d=\"M22 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m3 12h8\"/></g>"
	},
	whirlwind: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10\"/><path d=\"M23.5 44C16.596 44 11 38.404 11 31.5S16.596 19 23.5 19\"/><path d=\"M44 23.5C44 30.404 38.404 36 31.5 36S19 30.404 19 23.5\"/><path d=\"M23.5 29C30.404 29 36 23.404 36 16.5S30.404 4 23.5 4\"/><path d=\"M29 23.5C29 16.596 23.404 11 16.5 11S4 16.596 4 23.5\"/></g>"
	},
	whistling: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" stroke-width=\"4\" d=\"M27 11H4v8h11c-.65 1.55-1 3.21-1 5c0 7.21 5.79 13 13 13c7.2 0 13-5.79 13-13s-5.79-13-13-13m0 0v6m13 7h4\"/>"
	},
	"whole-site-accelerator": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><circle cx=\"22\" cy=\"40\" r=\"4\"/><circle cx=\"26\" cy=\"8\" r=\"4\"/><circle cx=\"36\" cy=\"24\" r=\"4\"/><circle cx=\"12\" cy=\"24\" r=\"4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M32 24H16m7-13l-8 10\"/><path d=\"m33 27l-8.001 10\"/></g>"
	},
	wifi: {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M4 18.965a29 29 0 0 1 1.817-1.586C17.037 8.374 33.382 8.903 44 18.965\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M38 25.799c-7.732-7.732-20.268-7.732-28 0m22 6.515c-4.418-4.419-11.582-4.419-16 0\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M24 40a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5\" clip-rule=\"evenodd\"/></g>"
	},
	wind: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M12 17h-2a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h2m10 8h-3a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h3m5-34h-3a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h3m-3 0h16M12 25h30m-20 8h12\"/>"
	},
	"wind-turbine": {
		body: "<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 30v14m5-21c11 5 16 14 16 14s-12 0-21-8c-9 8-21 8-21 8s5-10 16-14c0-13 5-19 5-19s5 6 5 19\"/><circle cx=\"24\" cy=\"24\" r=\"2\" fill=\"currentColor\"/></g>"
	},
	windmill: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m24 23.992l-.03-9.996L23.943 4L12 14v10zm.008.008l9.996-.03L44 23.943L34 12H24zm-.008.008l.03 9.996l.028 9.996L36 34V24zM23.992 24l-9.996.03L4 24.057L14 36h10z\" clip-rule=\"evenodd\"/>"
	},
	"windmill-one": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M34.518 13.846L34 11l-6.87-3.435a7 7 0 0 0-6.26 0L17.38 9.31m18.31 10.996L37 27.5L39.09 39M36 44H8l.956-5.258m1.68-9.242l2.936-16.145\"/><path stroke-linejoin=\"round\" d=\"M39.293 8.707a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414l-8.586 8.586a1 1 0 0 1-1.414 0l-2.586-2.586a1 1 0 0 1 0-1.414z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m27 21l4-4\"/><path stroke-linejoin=\"round\" d=\"M39.293 39.293a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1-1.414 0l-8.586-8.586a1 1 0 0 1 0-1.414l2.586-2.586a1 1 0 0 1 1.414 0z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m27 27l4 4\"/><path stroke-linejoin=\"round\" d=\"M8.707 39.293a1 1 0 0 1-1.414 0l-2.586-2.586a1 1 0 0 1 0-1.414l8.586-8.586a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m21 27l-4 4\"/><path stroke-linejoin=\"round\" d=\"M8.707 8.707a1 1 0 0 1 0-1.414l2.586-2.586a1 1 0 0 1 1.414 0l8.586 8.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1-1.414 0z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m21 21l-4-4\"/><circle cx=\"24\" cy=\"24\" r=\"4\"/></g>"
	},
	"windmill-two": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M24 24c5.523 0 10-4.477 10-10S29.523 4 24 4zm0 0c0 5.523 4.477 10 10 10s10-4.477 10-10zm0 0c0-5.523-4.477-10-10-10S4 18.477 4 24zm0 0c-5.523 0-10 4.477-10 10s4.477 10 10 10z\"/>"
	},
	windows: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"3.833\" d=\"m6.75 11.063l12.938-1.725v12.075H6.75zm18.112-2.218L41.25 6.75v14.663H24.862zm0 18.605l16.388.383V41.25l-16.388-2.683zM6.75 26.588l12.938.311V37.8L6.75 35.62z\"/>"
	},
	"wingsuit-flying": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"2\" stroke-width=\"4\"><path d=\"M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 20c-8.71 0-16 7.28-16 16h7v8h18v-8h7c.01-8.71-7.29-16-16-16m-9 16V23m18 13V23m-9 21V20\"/></g>"
	},
	"winking-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 31s-2 4-7 4s-7-4-7-4m16-11h-4m-12-2v4\"/></g>"
	},
	"winking-face-with-open-eyes": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"m33 16l-4 4l4 4m-2 7s-2 4-7 4s-7-4-7-4\"/><circle cx=\"17\" cy=\"20\" r=\"4\" stroke-linecap=\"round\"/></g>"
	},
	woman: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linecap=\"round\" d=\"M32.485 24.485A11.96 11.96 0 0 0 36 16c0-6.627-5.373-12-12-12S12 9.373 12 16c0 3.314 1.343 6.314 3.515 8.485\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m6 44l1-5l11-8l6 6l6-6l11 8l1 5\"/><path d=\"M12.993 21.007Q13.013 14.842 15 12c1.988-2.841 3.387-2.632 4.405-2.19s1.618 3.334 3.319 4.168c1.7.833 6.054.936 7.545 1.939c1.49 1.002 4.9 2.867 4.05 6.051\"/></g>"
	},
	women: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M19.225 6.37c-3.183 0-8.063 1.837-6.366 13.213q.04.258.095.557c.31 1.711.788 4.36-2.254 6.544c2.069 1.698 5.016 3.395 8.597 4.13a28 28 0 0 1-.532 2.414c-.291 1.068-.901 1.825-1.991 2.148c-.96.284-1.966.514-2.996.75q-.398.09-.8.184c-1.285.299-2.595.63-3.756 1.098c-1.164.47-2.246 1.103-3.028 2.047c-.796.963-1.222 2.177-1.193 3.695c.01.472.414.85.91.85h36.178c.496 0 .9-.378.91-.85c.029-1.518-.396-2.732-1.193-3.695c-.781-.944-1.864-1.578-3.027-2.047c-1.162-.469-2.472-.8-3.758-1.099l-.798-.183c-1.031-.236-2.037-.466-2.997-.75c-1.09-.323-1.7-1.08-1.991-2.148a27 27 0 0 1-.606-2.88c2.738-.824 5.648-2.305 8.671-4.67l-.014-.014c-1.419-1.358-4.079-3.904-4.268-9.948c0-8.322-5.306-15.637-13.793-9.347Z\"/>"
	},
	"women-coat": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 10c4-1 7-6 7-6h10s3 5.2 7 6l6 21h-8v13H14V31H6z\"/><path d=\"m19 4l5 14l5-14m-5 14v26\"/></g>"
	},
	"woolen-hat": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"40\" height=\"10\" x=\"4\" y=\"34\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15 26v8m9-8v8m9-8v8\"/><circle cx=\"24\" cy=\"8\" r=\"4\"/><path d=\"M8 34c0-8.25 1-22 16-22s16 13.75 16 22\"/></g>"
	},
	word: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m14 16l4 16l6-13l6 13l4-16\"/></g>"
	},
	workbench: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M12 33H4V7h40v26z\"/><path stroke-linecap=\"round\" d=\"M16 22v4m8 7v6m0-21v8m8-12v12M12 41h24\"/></g>"
	},
	worker: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 16a8 8 0 1 1-16 0m8-8a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8m-12 8h24M24 4v4m0 19c-9.389 0-17 7.163-17 16h34c0-8.837-7.611-16-17-16m-6 7v4m12-4v4\"/>"
	},
	world: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path d=\"M4 20.84q4.523-2.135 6.69-.595c2.167 1.54 2.438 7.819 7.368 4.819s-2.111-4.224-.583-8.57c1.528-4.347 6.533-.97 7.03-5.731q.499-4.761-11.39-3.644\"/><path stroke-linecap=\"round\" d=\"M36 8q-8.571 7.483-5.987 9.037c2.584 1.555 3.68-.634 6.834 0s2.47 4.909.812 4.909s-10.249-1.094-9.816 3.919s5.6 5.755 5.6 8.556q0 2.8-3.43 8.573M6.104 32.926a89 89 0 0 1 2.056-.874q5.77-2.33 8.564-1.099c3.292 1.453 2.026 4.387 3.058 5.468c1.03 1.081 3.606.767 3.606 2.823q0 2.057-1.382 4.646\"/></g>"
	},
	"worried-face": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linecap=\"round\" d=\"M31 18v1m-14-1v1m14 12s-2-4-7-4s-7 4-7 4\"/></g>"
	},
	write: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M5.325 43.5h8.485l31.113-31.113l-8.486-8.485L5.325 35.015z\"/><path stroke-linecap=\"round\" d=\"m27.952 12.387l8.485 8.485\"/></g>"
	},
	"writing-fluently": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M24 24v-5L39 4l5 5l-15 15z\" clip-rule=\"evenodd\"/><path d=\"M16 24H9a5 5 0 0 0 0 10h30a5 5 0 0 1 0 10H18\"/></g>"
	},
	"wrong-user": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><circle cx=\"24\" cy=\"12\" r=\"8\"/><path d=\"M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44m14-8l8 8m0-8l-8 8\"/></g>"
	},
	xiaodu: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4.143 21.08c.355-3.786.533-5.68 2.513-7.705s4.16-2.28 8.517-2.788C18.003 10.257 21.131 10 24 10c2.87 0 5.996.257 8.827.587c4.358.508 6.537.763 8.517 2.788s2.158 3.919 2.513 7.706c.09.955.143 1.937.143 2.919s-.054 1.964-.143 2.92c-.355 3.786-.533 5.68-2.513 7.705s-4.16 2.28-8.517 2.788c-2.83.33-5.957.587-8.827.587s-5.996-.257-8.827-.587c-4.358-.508-6.537-.763-8.517-2.788s-2.158-3.919-2.513-7.706A31 31 0 0 1 4 24c0-.982.054-1.964.143-2.92M16 19v10\"/><path d=\"m33 19l-5 5l5 5\"/></g>"
	},
	"xiaodu-home": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M4 20L24 6l20 14v22H4z\"/><path d=\"M12.687 26.686a16 16 0 0 1 22.627 0m-16.971 5.657a8 8 0 0 1 11.314 0\"/></g>"
	},
	xigua: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"3.667\"><path d=\"M24 42.333c10.126 0 18.334-8.208 18.334-18.333S34.126 5.667 24 5.667S5.667 13.875 5.667 24c0 2.486 1.14 3.687 2.947 4.745c1.807 1.057 5.206.882 7.519 2.956c2.312 2.075 2.468 5.45 2.947 7.09s2.435 3.542 4.92 3.542Z\"/><path d=\"M19.526 18.541q-.807 1.962-.807 4.612q0 2.52.535 4.99a3.056 3.056 0 0 0 3.812 2.294q2.7-.757 4.701-1.983q1.871-1.146 3.489-2.894a3.056 3.056 0 0 0-.278-4.413a33 33 0 0 0-3.977-2.87q-2.17-1.328-4.25-1.602a3.056 3.056 0 0 0-3.225 1.866Z\"/></g>"
	},
	xingfuli: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m32 17l-12-4v19l6 3V19z\"/></g>"
	},
	xingtu: {
		body: "<path fill=\"currentColor\" d=\"M15.556 39L8.177 11.017a.46.46 0 0 1 .314-.561a.39.39 0 0 1 .374.062l33.608 27.67a.47.47 0 0 1 .064.624a.34.34 0 0 1-.311.188zM44.98 9.581a.458.458 0 0 0-.507-.575a.4.4 0 0 0-.18.076l-18.117 12.49l12.995 10.68zM2.188 38.189a.48.48 0 0 0-.124.623a.44.44 0 0 0 .374.188h10.621l-1.812-7.058z\"/>"
	},
	yep: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M32 42c-4.736 2.706-11 2.5-16 0s-9-8-9-12.5c0-2.623 4.356-4.53 6.196-5.219c.46-.172.75-.64.677-1.126L11.586 7.909a3.404 3.404 0 1 1 6.75-.88L20 22l.83-15.77a3.408 3.408 0 1 1 6.795.518l-1.038 10.386A2.37 2.37 0 0 1 28.947 15A4.053 4.053 0 0 1 33 19.053V21.5a3.5 3.5 0 1 1 7 0v10.649c0 .566-.053 1.132-.253 1.661c-.596 1.577-2.46 5.169-7.747 8.19\"/>"
	},
	youtobe: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path d=\"M44 32.768V15.232c0-1.325-.87-2.49-2.155-2.812C38.369 11.548 31.185 10 24 10S9.631 11.548 6.155 12.42C4.87 12.743 4 13.907 4 15.232v17.536c0 1.325.87 2.49 2.155 2.812C9.631 36.452 16.815 38 24 38s14.369-1.548 17.845-2.42C43.13 35.257 44 34.093 44 32.768Z\"/><path stroke-linejoin=\"round\" d=\"M22.574 29.899a1 1 0 0 1-1.574-.82V18.921a1 1 0 0 1 1.573-.82l7.257 5.08a1 1 0 0 1 0 1.638z\"/></g>"
	},
	youtube: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\"><path stroke-width=\"4\" d=\"M11.064 10.414Q19.378 10 23.998 10t12.939.415a6 6 0 0 1 5.68 5.492q.381 4.55.381 8.017q0 3.508-.39 8.128a6 6 0 0 1-5.587 5.483Q29.91 38 23.998 38q-5.91 0-13.018-.465a6 6 0 0 1-5.587-5.48q-.395-4.655-.395-8.131q0-3.435.385-8.02a6 6 0 0 1 5.68-5.49Z\"/><path stroke-width=\"3.429\" d=\"M21 19.61v8.796a.857.857 0 0 0 1.33.715l6.597-4.36a.857.857 0 0 0 .006-1.427l-6.598-4.436a.857.857 0 0 0-1.335.711Z\"/></g>"
	},
	"zero-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><rect width=\"36\" height=\"36\" x=\"6\" y=\"6\" rx=\"3\"/><rect width=\"10\" height=\"20\" x=\"19\" y=\"14\" rx=\"5\"/></g>"
	},
	zijinyunying: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M34 6H14L3 24l11 18h20l11-18z\"/><path d=\"m15 29l9-14l9 14z\"/></g>"
	},
	zip: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M4.629 12.749L24 5l19.371 7.749a1 1 0 0 1 .629.928V42a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V13.677a1 1 0 0 1 .629-.928Z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M24 22v10\"/><path d=\"M33 27c1.657 0 3-1.12 3-2.5S34.657 22 33 22h-2.7a.3.3 0 0 0-.3.3v2.2c0 1.38 1.343 2.5 3 2.5Z\" clip-rule=\"evenodd\"/><path stroke-linecap=\"round\" d=\"M30 22v10\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 22h6.005L12 32h6.005\"/></g>"
	},
	zoom: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"M20 43c-4.726-1.767-8.667-7.815-10.64-11.357c-.852-1.53-.403-3.408.964-4.502a3.83 3.83 0 0 1 5.1.283L17 29v-8.5a2.5 2.5 0 0 1 5 0v-4a2.5 2.5 0 0 1 5 0v8a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1 5 0v7.868c0 1.07-.265 2.128-.882 3.003C35.095 39.82 33.256 42.034 31 43c-3.5 1.5-6.63 1.634-11 0M13 8h22m-18 4l-4-4l4-4m14 0l4 4l-4 4\"/>"
	},
	"zoom-in": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z\"/><path stroke-linecap=\"round\" d=\"M21 15v12m-5.984-5.984L27 21m6.222 12.222l8.485 8.485\"/></g>"
	},
	"zoom-internal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M44 4H4v40h40z\"/><path stroke-linecap=\"round\" d=\"M16 4v12H4m32 8v12H24m12 0L24 24M4 6v20M7 4h20\"/></g>"
	},
	"zoom-out": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z\"/><path stroke-linecap=\"round\" d=\"M15 21h12m6.222 12.222l8.485 8.485\"/></g>"
	}
};
var lastModified = 1722794037;
var width = 48;
var height = 48;
const icons$1 = {
	prefix: prefix,
	icons: icons,
	lastModified: lastModified,
	width: width,
	height: height
};

export { icons$1 as default, height, icons, lastModified, prefix, width };
//# sourceMappingURL=icons3.mjs.map