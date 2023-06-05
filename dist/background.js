(()=>{"use strict";var t={917:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default={UPDATE_DOMAIN_RULES:"update_domain_rules",GET_DOMAIN_RULES:"get_domain_rules",GROUP_TABS_BY_DOMAIN:"group_tabs_by_domain",UNGROUP_TABS:"ungroup_tabs",SORT_TABS_BY_DOMAIN:"sort_tabs_by_domain",GET_COMMANDS:"get_commands",EXTRACT_TABS:"extract_tabs",UPDATE_TAGS:"update_tags",GET_TAGS:"get_tags",EXTRACT_TABS_BY_TAG:"extract_tabs_by_tag"}},752:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=o(n(970));e.default=class{constructor(){this.chromeListenerForMessages=new i.default}init(){this.chromeListenerForMessages.init()}}},9:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(966)),u=i(n(374)),s=n(973);class a extends s.MessagesController{constructor(){super(...arguments),this.mapper=new r.default,this.service=new u.default}execute({request:t}){return o(this,void 0,void 0,(function*(){const e=this.mapper.toExtractTabsByTagRequest(t);yield this.service.execute(e)}))}}e.default=a},14:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(966)),u=i(n(397)),s=n(973);class a extends s.MessagesController{constructor(){super(...arguments),this.mapper=new r.default,this.service=new u.default}execute({request:t}){return o(this,void 0,void 0,(function*(){const e=this.mapper.toExtractTabsRequest(t);yield this.service.execute(e)}))}}e.default=a},878:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(887)),u=n(973);class s extends u.MessagesController{constructor(){super(...arguments),this.service=new r.default}execute({sendResponse:t}){return o(this,void 0,void 0,(function*(){const e=yield this.service.execute();t(e)}))}}e.default=s},755:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(950)),u=n(973);class s extends u.MessagesController{constructor(){super(...arguments),this.service=new r.default}execute({sendResponse:t}){return o(this,void 0,void 0,(function*(){const e=yield this.service.execute();t(e)}))}}e.default=s},745:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(707)),u=n(973);class s extends u.MessagesController{constructor(){super(...arguments),this.service=new r.default}execute({sendResponse:t}){return o(this,void 0,void 0,(function*(){const e=yield this.service.execute();t(e)}))}}e.default=s},266:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(854)),u=n(973);class s extends u.MessagesController{constructor(){super(...arguments),this.service=new r.default}execute(){return o(this,void 0,void 0,(function*(){yield this.service.execute()}))}}e.default=s},973:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MessagesController=void 0,e.MessagesController=class{}},257:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(233)),u=n(973);class s extends u.MessagesController{constructor(){super(...arguments),this.service=new r.default}execute(){return o(this,void 0,void 0,(function*(){yield this.service.execute()}))}}e.default=s},958:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(749)),u=n(973);class s extends u.MessagesController{constructor(){super(...arguments),this.service=new r.default}execute(){return o(this,void 0,void 0,(function*(){yield this.service.execute()}))}}e.default=s},733:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(966)),u=i(n(197)),s=n(973);class a extends s.MessagesController{constructor(){super(...arguments),this.mapper=new r.default,this.service=new u.default}execute({request:t}){return o(this,void 0,void 0,(function*(){const e=this.mapper.toDomainRules(t);yield this.service.execute(e)}))}}e.default=a},65:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(966)),u=i(n(567)),s=n(973);class a extends s.MessagesController{constructor(){super(...arguments),this.mapper=new r.default,this.service=new u.default}execute({request:t}){return o(this,void 0,void 0,(function*(){const e=this.mapper.toUpdateTagsRequest(t);yield this.service.execute(e)}))}}e.default=a},760:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(t,e){this.domain=t,this.title=e}}},970:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=o(n(917)),r=o(n(9)),u=o(n(14)),s=o(n(878)),a=o(n(755)),c=o(n(745)),d=o(n(266)),f=o(n(257)),l=o(n(958)),h=o(n(733)),_=o(n(65));class v{init(){chrome.runtime.onMessage.addListener(((t,e,n)=>{const o=v.controllers[t.action];return o&&o.execute({request:t,sender:e,sendResponse:n}),!0}))}}v.controllers={[i.default.UPDATE_DOMAIN_RULES]:new h.default,[i.default.GET_DOMAIN_RULES]:new a.default,[i.default.GROUP_TABS_BY_DOMAIN]:new d.default,[i.default.SORT_TABS_BY_DOMAIN]:new f.default,[i.default.UNGROUP_TABS]:new l.default,[i.default.GET_COMMANDS]:new s.default,[i.default.EXTRACT_TABS]:new u.default,[i.default.UPDATE_TAGS]:new _.default,[i.default.GET_TAGS]:new c.default,[i.default.EXTRACT_TABS_BY_TAG]:new r.default},e.default=v},519:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),(new(o(n(752)).default)).init()},966:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=o(n(760));e.default=class{toDomainRules({data:t}){if(!t)throw new Error("Request data is empty");if(!Array.isArray(t))throw new Error("Request data is not an array");return t.map((t=>this.toDomainRule(t)))}toExtractTabsRequest({data:t}){if(!t)throw new Error("Request data is empty");return{domains:this.toString(t).split(",")}}toUpdateTagsRequest({data:t}){if(!t)throw new Error("Request data is empty");if(!Array.isArray(t))throw new Error("Request data is not an array");return{tags:t.map((t=>this.toTag(t)))}}toExtractTabsByTagRequest({data:t}){if(!t)throw new Error("Request data is empty");return{tagName:this.toString(t)}}toTag(t){return{name:this.toString(t.name),urls:this.toStringArray(t.urls)}}toStringArray(t){if(!t)throw new Error("Data is empty");if(!Array.isArray(t))throw new Error("Data is not an array");return t.map((t=>this.toString(t)))}toDomainRule(t){return new i.default(this.toString(t.domain),this.toString(t.title))}toString(t){if(!t||"string"!=typeof t)throw new Error("Data is not a string");return t}}},86:function(t,e){var n=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(){this.DOMAIN_RULES_TABLE_NAME="domain-rules",this.TAGS_TABLE_NAME="tags"}updateDomainRules(t){return n(this,void 0,void 0,(function*(){yield chrome.storage.sync.set({[this.DOMAIN_RULES_TABLE_NAME]:t})}))}getDomainRules(){return n(this,void 0,void 0,(function*(){return(yield chrome.storage.sync.get([this.DOMAIN_RULES_TABLE_NAME]))[this.DOMAIN_RULES_TABLE_NAME]}))}updateTags(t){return n(this,void 0,void 0,(function*(){yield chrome.storage.sync.set({[this.TAGS_TABLE_NAME]:t})}))}getTags(){return n(this,void 0,void 0,(function*(){return(yield chrome.storage.sync.get([this.TAGS_TABLE_NAME]))[this.TAGS_TABLE_NAME]}))}}},374:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(86));e.default=class{constructor(){this.repository=new r.default,this.tags=[]}execute({tagName:t}){return o(this,void 0,void 0,(function*(){this.tags=yield this.repository.getTags();const e=this.tags.find((e=>e.name===t)),n=yield this.getTabsToExtract(e);this.createWindow(n)}))}createWindow(t){const[e,...n]=t;chrome.windows.create({tabId:e.id,focused:!0},(t=>{n.forEach(((e,n)=>this.moveTab(e.id,t.id,n+1)))}))}moveTab(t,e,n){chrome.tabs.move(t,{windowId:e,index:n})}getTabsToExtract(t){return o(this,void 0,void 0,(function*(){return t?(yield chrome.tabs.query({})).filter((e=>{const n=this.getURLWithoutQueryParams(e.url);return t.urls.map((t=>this.getURLWithoutQueryParams(t))).includes(n)})):[]}))}getURLWithoutQueryParams(t){return t?t.split("?")[0]:""}}},397:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(86)),u=n(967);e.default=class{constructor(){this.repository=new r.default,this.domainRules=[]}execute({domains:t}){return o(this,void 0,void 0,(function*(){this.domainRules=yield this.repository.getDomainRules();const e=(yield chrome.tabs.query({currentWindow:!0})).filter((e=>{const n=(0,u.getDomainFromURL)(e.url||""),o=this.domainRules.find((t=>t.domain===n));return o&&t.includes(o.title)||t.includes(n)}));this.createWindow(e)}))}createWindow(t){const[e,...n]=t;chrome.windows.create({tabId:e.id,focused:!0},(t=>{n.forEach(((e,n)=>this.moveTab(e.id,t.id,n+1)))}))}moveTab(t,e,n){chrome.tabs.move(t,{windowId:e,index:n})}}},887:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(917));e.default=class{execute(){return o(this,void 0,void 0,(function*(){return[this.getCommandForGroupTabsByDomain(),this.getCommandForUngroupTabs(),this.getCommandForSortTabsByDomain(),this.getCommandForExtractTabs(),this.getCommandForExtractTabsByTag()]}))}getCommandForGroupTabsByDomain(){return{action:r.default.GROUP_TABS_BY_DOMAIN,description:"Group tabs by domain"}}getCommandForUngroupTabs(){return{action:r.default.UNGROUP_TABS,description:"Ungroup tabs"}}getCommandForSortTabsByDomain(){return{action:r.default.SORT_TABS_BY_DOMAIN,description:"Sort tabs by domain"}}getCommandForExtractTabs(){return{action:r.default.EXTRACT_TABS,description:"Extract tabs",hint:"d1,d2,d3..."}}getCommandForExtractTabsByTag(){return{action:r.default.EXTRACT_TABS_BY_TAG,description:"Extract tabs by tag",hint:"tag"}}}},950:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(86));e.default=class{constructor(){this.respository=new r.default}execute(){return o(this,void 0,void 0,(function*(){return yield this.respository.getDomainRules()}))}}},707:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(86));e.default=class{constructor(){this.repository=new r.default}execute(){return o(this,void 0,void 0,(function*(){return this.repository.getTags()}))}}},854:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(86)),u=n(967);e.default=class{constructor(){this.repository=new r.default,this.domainRules=[]}execute(){return o(this,void 0,void 0,(function*(){this.domainRules=yield this.repository.getDomainRules();const t=yield chrome.tabs.query({currentWindow:!0}),e=this.groupTabsByDomain(t);for(const[t,n]of Object.entries(e))chrome.tabs.group({tabIds:n.map((t=>t.id))},(e=>this.updateGroupTitle(e,t)))}))}updateGroupTitle(t,e){return o(this,void 0,void 0,(function*(){const n=this.domainRules.find((t=>t.domain===e)),o=n?n.title:e;chrome.tabGroups.update(t,{title:o,collapsed:!0})}))}groupTabsByDomain(t){return t.reduce(((t,e)=>{const n=(0,u.getDomainFromURL)(e.url||"");return t[n]||(t[n]=[]),t[n].push(e),t}),{})}}},233:function(t,e){var n=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{execute(){return n(this,void 0,void 0,(function*(){(yield chrome.tabs.query({currentWindow:!0})).sort(this.compareTabs).forEach(this.moveTab)}))}compareTabs(t,e){const n=t.url||"",o=e.url||"";return n<o?-1:n>o?1:0}moveTab(t,e){chrome.tabs.move(t.id,{index:e})}}},749:function(t,e){var n=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{execute(){return n(this,void 0,void 0,(function*(){(yield chrome.tabs.query({currentWindow:!0})).forEach(this.ungroupTab)}))}ungroupTab(t){chrome.tabs.ungroup(t.id)}}},197:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(86));e.default=class{constructor(){this.respoitory=new r.default}execute(t){return o(this,void 0,void 0,(function*(){yield this.respoitory.updateDomainRules(t)}))}}},567:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(n(86));e.default=class{constructor(){this.repository=new r.default}execute({tags:t}){return o(this,void 0,void 0,(function*(){yield this.repository.updateTags(t)}))}}},967:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getDomainFromURL=void 0,e.getDomainFromURL=function(t){let e=new URL(t).hostname;return e.startsWith("www.")&&(e=e.slice(4)),e}}},e={};!function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}(519)})();