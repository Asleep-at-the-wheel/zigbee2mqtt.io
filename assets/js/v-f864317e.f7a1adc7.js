"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42439],{92905:(t,e,o)=>{o.r(e),o.d(e,{data:()=>i});const i={key:"v-f864317e",path:"/devices/SBM300Z2.html",title:"ShinaSystem SBM300Z2 control via MQTT",lang:"en-US",frontmatter:{title:"ShinaSystem SBM300Z2 control via MQTT",description:"Integrate your ShinaSystem SBM300Z2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (top endpoint)",slug:"switch-top-endpoint",children:[]},{level:3,title:"Switch (bottom endpoint)",slug:"switch-bottom-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SBM300Z2.md",git:{updatedTime:1659888788e3}}},4392:(t,e,o)=>{o.r(e),o.d(e,{default:()=>a});const i=(0,o(66252).uE)('<h1 id="shinasystem-sbm300z2" tabindex="-1"><a class="header-anchor" href="#shinasystem-sbm300z2" aria-hidden="true">#</a> ShinaSystem SBM300Z2</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SBM300Z2</td></tr><tr><td>Vendor</td><td>ShinaSystem</td></tr><tr><td>Description</td><td>SiHAS IOT smart switch 2 gang</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SBM300Z2.jpg" alt="ShinaSystem SBM300Z2"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-top-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-endpoint" aria-hidden="true">#</a> Switch (top endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_top</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top&quot;: &quot;&quot;}</code>.</p><h3 id="switch-bottom-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-endpoint" aria-hidden="true">#</a> Switch (bottom endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_bottom</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),d={},a=(0,o(83744).Z)(d,[["render",function(t,e){return i}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[o,i]of e)t[o]=i;return t}}}]);