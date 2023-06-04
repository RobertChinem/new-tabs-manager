(()=>{"use strict";var e={917:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default={UPDATE_DOMAIN_RULES:"update_domain_rules",GET_DOMAIN_RULES:"get_domain_rules",GROUP_TABS_BY_DOMAIN:"group_tabs_by_domain",UNGROUP_TABS:"ungroup_tabs",SORT_TABS_BY_DOMAIN:"sort_tabs_by_domain",GET_COMMANDS:"get_commands"}},752:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(545)),u=o(n(970));t.default=class{constructor(){this.chromeListenerForCommands=new i.default,this.chromeListenerForMessages=new u.default}init(){this.chromeListenerForCommands.init(),this.chromeListenerForMessages.init()}}},49:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default={SORT_BY_URL:"sort_by_url",GROUP_BY_DOMAIN:"group_by_domain",UNGROUP_TABS:"ungroup_tabs"}},433:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{}},874:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=i(n(854)),r=i(n(433));class s extends r.default{constructor(){super(...arguments),this.service=new u.default}execute(){return o(this,void 0,void 0,(function*(){yield this.service.execute()}))}}t.default=s},580:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=i(n(233)),r=i(n(433));class s extends r.default{constructor(){super(...arguments),this.service=new u.default}execute(){return o(this,void 0,void 0,(function*(){yield this.service.execute()}))}}t.default=s},250:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=i(n(749)),r=i(n(433));class s extends r.default{constructor(){super(...arguments),this.service=new u.default}execute(){return o(this,void 0,void 0,(function*(){yield this.service.execute()}))}}t.default=s},878:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=i(n(887)),r=n(973);class s extends r.MessagesController{constructor(){super(...arguments),this.service=new u.default}execute({sendResponse:e}){return o(this,void 0,void 0,(function*(){const t=yield this.service.execute();e(t)}))}}t.default=s},755:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=i(n(950)),r=n(973);class s extends r.MessagesController{constructor(){super(...arguments),this.service=new u.default}execute({sendResponse:e}){return o(this,void 0,void 0,(function*(){const t=yield this.service.execute();e(t)}))}}t.default=s},266:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=i(n(854)),r=n(973);class s extends r.MessagesController{constructor(){super(...arguments),this.service=new u.default}execute(){return o(this,void 0,void 0,(function*(){yield this.service.execute()}))}}t.default=s},973:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessagesController=void 0,t.MessagesController=class{}},257:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=i(n(233)),r=n(973);class s extends r.MessagesController{constructor(){super(...arguments),this.service=new u.default}execute(){return o(this,void 0,void 0,(function*(){yield this.service.execute()}))}}t.default=s},958:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=i(n(749)),r=n(973);class s extends r.MessagesController{constructor(){super(...arguments),this.service=new u.default}execute(){return o(this,void 0,void 0,(function*(){yield this.service.execute()}))}}t.default=s},733:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=i(n(966)),r=i(n(197)),s=n(973);class a extends s.MessagesController{constructor(){super(...arguments),this.mapper=new u.default,this.service=new r.default}execute({request:e}){return o(this,void 0,void 0,(function*(){const t=this.mapper.toDomainRules(e);yield this.service.execute(t)}))}}t.default=a},760:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t){this.domain=e,this.title=t}}},545:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(49)),u=o(n(874)),r=o(n(580)),s=o(n(250));class a{init(){chrome.commands.onCommand.addListener((e=>{const t=a.services[e];t&&t.execute()}))}}a.services={[i.default.GROUP_BY_DOMAIN]:new u.default,[i.default.UNGROUP_TABS]:new s.default,[i.default.SORT_BY_URL]:new r.default},t.default=a},970:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(917)),u=o(n(878)),r=o(n(755)),s=o(n(266)),a=o(n(257)),c=o(n(958)),l=o(n(733));class f{init(){chrome.runtime.onMessage.addListener(((e,t,n)=>{const o=f.services[e.action];return o&&o.execute({request:e,sender:t,sendResponse:n}),!0}))}}f.services={[i.default.UPDATE_DOMAIN_RULES]:new l.default,[i.default.GET_DOMAIN_RULES]:new r.default,[i.default.GROUP_TABS_BY_DOMAIN]:new s.default,[i.default.SORT_TABS_BY_DOMAIN]:new a.default,[i.default.UNGROUP_TABS]:new c.default,[i.default.GET_COMMANDS]:new u.default},t.default=f},519:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),(new(o(n(752)).default)).init()},966:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(760));t.default=class{toDomainRules({data:e}){if(!e)throw new Error("Request data is empty");if(!Array.isArray(e))throw new Error("Request data is not an array");return e.map((e=>this.toDomainRule(e)))}toDomainRule(e){return new i.default(this.toString(e.domain),this.toString(e.title))}toString(e){if(!e||"string"!=typeof e)throw new Error("Data is not a string");return e}}},86:function(e,t){var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.DOMAIN_RULES_TABLE_NAME="domain-rules"}updateDomainRules(e){return n(this,void 0,void 0,(function*(){yield chrome.storage.sync.set({[this.DOMAIN_RULES_TABLE_NAME]:e}),yield this.getDomainRules()}))}getDomainRules(){return n(this,void 0,void 0,(function*(){return(yield chrome.storage.sync.get([this.DOMAIN_RULES_TABLE_NAME]))[this.DOMAIN_RULES_TABLE_NAME]}))}}},887:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=i(n(917));t.default=class{execute(){return o(this,void 0,void 0,(function*(){return[this.getCommandForGroupTabsByDomain(),this.getCommandForUngroupTabs(),this.getCommandForSortTabsByDomain()]}))}getCommandForGroupTabsByDomain(){return{action:u.default.GROUP_TABS_BY_DOMAIN,description:"Group tabs by domain"}}getCommandForUngroupTabs(){return{action:u.default.UNGROUP_TABS,description:"Ungroup tabs"}}getCommandForSortTabsByDomain(){return{action:u.default.SORT_TABS_BY_DOMAIN,description:"Sort tabs by domain"}}}},950:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=i(n(86));t.default=class{constructor(){this.respository=new u.default}execute(){return o(this,void 0,void 0,(function*(){return yield this.respository.getDomainRules()}))}}},854:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=i(n(86)),r=n(967);t.default=class{constructor(){this.repository=new u.default,this.domainRules=[]}execute(){return o(this,void 0,void 0,(function*(){this.domainRules=yield this.repository.getDomainRules();const e=yield chrome.tabs.query({currentWindow:!0}),t=this.groupTabsByDomain(e);for(const[e,n]of Object.entries(t))chrome.tabs.group({tabIds:n.map((e=>e.id))},(t=>this.updateGroupTitle(t,e)))}))}updateGroupTitle(e,t){return o(this,void 0,void 0,(function*(){const n=this.domainRules.find((e=>e.domain===t)),o=n?n.title:t;chrome.tabGroups.update(e,{title:o,collapsed:!0})}))}groupTabsByDomain(e){return e.reduce(((e,t)=>{const n=(0,r.getDomainFromURL)(t.url||"");return e[n]||(e[n]=[]),e[n].push(t),e}),{})}}},233:function(e,t){var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{execute(){return n(this,void 0,void 0,(function*(){(yield chrome.tabs.query({currentWindow:!0})).sort(this.compareTabs).forEach(this.moveTab)}))}compareTabs(e,t){const n=e.url||"",o=t.url||"";return n<o?-1:n>o?1:0}moveTab(e,t){chrome.tabs.move(e.id,{index:t})}}},749:function(e,t){var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{execute(){return n(this,void 0,void 0,(function*(){(yield chrome.tabs.query({currentWindow:!0})).forEach(this.ungroupTab)}))}ungroupTab(e){chrome.tabs.ungroup(e.id)}}},197:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,u){function r(e){try{a(o.next(e))}catch(e){u(e)}}function s(e){try{a(o.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=i(n(86));t.default=class{constructor(){this.respoitory=new u.default}execute(e){return o(this,void 0,void 0,(function*(){yield this.respoitory.updateDomainRules(e)}))}}},967:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainFromURL=void 0,t.getDomainFromURL=function(e){let t=new URL(e).hostname;return t.startsWith("www.")&&(t=t.slice(4)),t}}},t={};!function n(o){var i=t[o];if(void 0!==i)return i.exports;var u=t[o]={exports:{}};return e[o].call(u.exports,u,u.exports,n),u.exports}(519)})();