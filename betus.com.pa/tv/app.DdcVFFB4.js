import{d as W}from"./chunks/ready.C6ico4EH.js";const Y="modulepreload",K=function(l,e){return new URL(l,e).href},P={},Q=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){const n=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),d=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.all(t.map(o=>{if(o=K(o,s),o in P)return;P[o]=!0;const c=o.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!s)for(let p=n.length-1;p>=0;p--){const v=n[p];if(v.href===o&&(!c||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Y,c||(f.as="script",f.crossOrigin=""),f.href=o,d&&f.setAttribute("nonce",d),document.head.appendChild(f),c)return new Promise((p,v)=>{f.addEventListener("load",p),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}return a.then(()=>e()).catch(n=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n})},O=async l=>{l&&console.error(l),Z(),q(),fe()};var M;(M=import.meta.webpackHot)==null||M.accept(O);function Z(){const l=document.querySelectorAll(".leagues_menu_items");l.forEach(e=>{e.addEventListener("click",function(){const t=this.getAttribute("data-tab"),s=document.getElementById("paginator");document.getElementById("nfl_main_container");const a=document.getElementById("nfl_draft_container"),n=document.getElementById("nfl_draft_intro"),i=document.getElementById("show"),d=document.getElementById("prospect_news"),o=document.getElementById("gray_container"),c=a.getAttribute("data-year"),u=a.getAttribute("data-show"),r=s.getAttribute("data-page"),f=s.getAttribute("data-pages"),p=s.getAttribute("data-total"),v=a.getAttribute("data-news");let L=s.getAttribute("data-filter");t==="prospects"?(s.classList.remove("hidden"),s.classList.add("flex"),s.setAttribute("data-filter","OVR"),L="OVR"):(s.classList.remove("flex"),s.classList.add("hidden")),t==="mock"?(n.classList.remove("hidden"),L="OVR"):n.classList.add("hidden"),t==="prospects"||t==="teams"||t==="rounds"?(i.classList.remove("hidden"),d.classList.remove("hidden"),t==="prospects"?(o.classList.remove("w-full","h-auto","px-2","flex","items-center","justify-center","bg-slate-100","rounded-xl"),L="OVR"):o.classList.add("w-full","h-auto","px-2","flex","items-center","justify-center","bg-slate-100","rounded-xl"),t==="rounds"&&o.classList.remove("bg-slate-100")):(i.classList.add("hidden"),d.classList.add("hidden")),t==="teams"&&(L="ari"),t==="rounds"&&(L=1),t==="news"&&(L=v),l.forEach(b=>{b.classList.remove("bg-neutral-800","text-white"),b.classList.add("text-gray-700")}),this.classList.remove("text-gray-700"),this.classList.add("bg-neutral-800","text-white"),N(a,t,c,u,r,f,p,L)})})}async function N(l,e,t,s,a,n,i,d){const o=document.getElementById("paginator"),c=document.getElementById("team_news");c.classList.contains("hidden")||c.classList.add("hidden");const u=ie();T(l,u);let r=await ee(e,t,s,a,n,i,d),f="";switch(e){case"mock":f=te(r);break;case"prospects":f=se(r);break;case"teams":f=ae(r);break;case"rounds":f=ne(r);break;case"news":f=oe(r);break}switch(l.setAttribute("data-current",e),o.setAttribute("data-filter",d),T(l,f),e){case"mock":q();break;case"prospects":q(),re(),de();break;case"teams":f=le(r),c.classList.remove("hidden"),T(c,f),ce(),me();break;case"rounds":ue();break}}function T(l,e){l.classList.add("opacity-0"),l.innerHTML=e,l.classList.remove("opacity-0"),l.classList.add("opacity-100")}function ee(l,e,t,s,a,n,i){const d=new XMLHttpRequest,o=ajax.url,c=new URLSearchParams({action:"draft_service",tabID:l,year:e,show:t,page:s,pages:a,filter:i,total:n});return new Promise((u,r)=>{d.open("POST",o,!0),d.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),d.send(c),d.timeout=3e4,d.onload=()=>{d.status>=200&&d.status<300?u(d.responseText):r(d.statusText)},d.ontimeout=f=>{r("timeout")}})}function te(l){let e="",t="";const s=JSON.parse(l),a=s.items,n=s.positions,i=document.getElementById("nfl_draft_container").getAttribute("data-svg");let d=1;return a.forEach(o=>{o.nfl_team!==null?t=`<div class="w-11 h-11 absolute left-9 -bottom-4 md:left-[67px] md:bottom-[-3.75rem] md:w-[89px] md:h-[89px]">
                            <img src="${o.nfl_team.teamLogo}" alt="${o.nfl_team.teamFirstName} ${o.nfl_team.teamNickName}" loading="lazy" class="w-10 h-10">
                        </div>`:t="",e+=`<div id="player-${o.ID}">
                        <div id="player-desc-${o.ID}" class="w-full my-2 mb-3 p-3 border border-slate-200 rounded-xl flex flex-row items-center justify-between">
                            <div class="w-2/3 flex flex-row items-center justify-start relative">
                                <div class="px-2 text-base md:text-2xl md:px-4">${d}</div>
                                <div class="w-16 h-16 rounded-full flex items-center justify-center bg-slate-200 md:w-[89px] md:h-[89px]">
                                    <img src="${o.player_picture??"https://sportsanddata.com/images/players/player.png"}" alt="${o.title}" loading="lazy" class="w-14 h-14 rounded-full md:w-20 md:h-20">
                                </div>
                                    ${t}
                                <div class="flex flex-col px-1 md:px-4">
                                    <div class="font-bold leading-normal text-base md:text-2xl">${o.title}</div>
                                    <div class="font-thin leading-normal uppercase text-xs md:text-[15px]">
                                        ${o.nfl_team!==null?o.nfl_team.teamFirstName+" "+o.nfl_team.teamNickName:""}
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/3 flex flex-row items-center justify-end">
                                <a href="https://www.betus.com.pa/sportsbook/nfl/nfl-draft/"
                                   target="_blank"
                                   class="block px-2 py-1 mx-1 bg-blue-600 text-white font-nexaheavy text-center text-xs rounded-full cursor-pointer md:text-base md:px-4 md:mx-3">
                                    Bet Now
                                </a>
                                <div class="w-6 h-6 flex border border-slate-700 rounded-full items-center justify-center cursor-pointer md:w-10 md:h-10">
                                    <svg data-player="${o.ID}" class="player_bio_display w-3 h-3 rotate-90 md:w-7 md:h-7" role="img">
                                        <use xlink:href="${i}#icon-arrow-right"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div id="player-bio-${o.ID}" class="player_bios hidden">
                            <div class="w-full mt-3 mb-1 text-base md:text-2xl md:mt-7 md:mb-3">
                                ${o.team_info}
                            </div>
                            <div class="w-full my-3 py-1 flex flex-row items-center justify-center leading-normal md:my-7 md:py-3">
                                <div class="flex-1 border border-slate-200 rounded-xl">
                                    <div class="w-full py-2 flex items-center justify-between border-b border-b-neutral-100 text-xs md:text-2xl">
                                        <div class="mx-1 text-slate-500 md:mx-5">Position</div>
                                        <div class="mx-1 md:mx-5">${n[o.position]}</div>
                                    </div>
                                    <div class="w-full py-2 flex items-center justify-between border-b border-b-neutral-100 text-xs md:text-2xl">
                                        <div class="mx-1 text-slate-500 md:mx-5">Date of birth</div>
                                        <div class="mx-1 md:mx-5">${o.date_of_birth!==""?o.date_of_birth:" - "}</div>
                                    </div>
                                    <div class="w-full py-2 flex items-center justify-between border-b border-b-neutral-100 text-xs md:text-2xl">
                                        <div class="mx-1 text-slate-500 md:mx-5">Birthplace</div>
                                        <div class="mx-1 md:mx-5">${o.birth_place!==""?o.birth_place:" - "}</div>
                                    </div>
                                    <div class="w-full py-2 flex items-center justify-between text-xs md:text-2xl">
                                        <div class="mx-2 text-slate-500">College</div>
                                        <div class="mx-2 md:mx-5">${o.college.teamFirstName}</div>
                                    </div>
                                </div>
                                <div class="w-3"></div>
                                <div class="flex-1 border border-slate-200 rounded-xl">
                                    <div class="w-full py-2 flex items-center justify-between border-b border-b-neutral-100 text-xs md:text-2xl">
                                        <div class="mx-1 text-slate-500 md:mx-5">Draft</div>
                                        <div class="mx-1 md:mx-5">${o.draft!==""?o.draft:" - "}</div>
                                    </div>
                                    <div class="w-full py-2 flex items-center justify-between border-b border-b-neutral-100 text-xs md:text-2xl">
                                        <div class="mx-1 text-slate-500 md:mx-5">Experience</div>
                                        <div class="mx-1 md:mx-5">${o.experience!==""?o.experience:" - "}</div>
                                    </div>
                                    <div class="w-full py-2 flex items-center justify-between border-b border-b-neutral-100 text-xs md:text-2xl">
                                        <div class="mx-1 text-slate-500 md:mx-5">Height</div>
                                        <div class="mx-1 md:mx-5">${o.height!==""?o.height:" - "}</div>
                                    </div>
                                    <div class="w-full py-2 flex items-center justify-between text-xs md:text-2xl">
                                        <div class="mx-1 text-slate-500 md:mx-5">Weight</div>
                                        <div class="mx-1 md:mx-5">${o.weight!==""?o.weight:" - "}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`,d++}),e}function se(l){let e="",t="",s="",a="";const n=document.getElementById("paginator"),i=document.getElementById("nfl_draft_container").getAttribute("data-svg"),d=n.getAttribute("data-filter")===""?"OVR":n.getAttribute("data-filter"),o=JSON.parse(l),c=o.items;return Object.keys(o.positions).map(r=>[r,o.positions[r]]).forEach((r,f)=>{s+=`<div id=""
                         data-position="${r[0]}"
                         class="player_positions w-auto h-8 mx-1 px-1.5 flex items-center justify-center rounded-full text-[12px] font-nexaheavy cursor-pointer transition duration-300 ease-in-out md:text-[16px] md:px-8 md:h-10 ${r[0]===d?"bg-neutral-800 text-white":"text-gray-700"} hover:bg-neutral-800 hover:text-white">
                         ${r[0]}
                     </div>`}),t+=`<!--// Position Selector -->
                <p class="mb-3 text-base md:text-2xl md:mb-10">
                    Caleb Williams is the undisputed top pick in the 2024 draft, but with top-tier talent that includes Jayden Daniels, Drake Maye, Marvin Harrison Jr, JJ McCarthy, Michael Penix Jr, Bo Nix, Malik Nabers where will the remaining 256 prospects land?
                </p>
                <div class="position_selector w-full mb-10 items-center justify-center flex">
                    <div class="w-1/12 relative flex items-center justify-center">
                        <button class="prospects_scroll_prev mx-1 hover:opacity-80 ">
                            <svg class="h-6 w-6 rotate-180 md:h-10 md:w-10" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                <rect width="42" height="42" rx="21" fill="#1D2129"></rect>
                                <path d="M17.9102 28.9201L24.4302 22.4001C25.2002 21.6301 25.2002 20.3701 24.4302 19.6001L17.9102 13.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    <div id="prospects_scroll_container" class="w-10/12 h-10 flex flex-row items-center overflow-auto hide-scrollbar">
                        ${s}
                    </div>
                    <div class="w-1/12 relative flex items-center justify-center">
                        <button class="prospects_scroll_next mx-1 hover:opacity-80">
                            <svg class="h-6 w-6 md:h-10 md:w-10" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                <rect width="42" height="42" rx="21" fill="#1D2129"></rect>
                                <path d="M17.9102 28.9201L24.4302 22.4001C25.2002 21.6301 25.2002 20.3701 24.4302 19.6001L17.9102 13.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <!--// Position Selector End -->`,e+=t,c.length>0?c.forEach(r=>{r.college!==null?a=`<div class="w-10 h-10 flex items-center justify-center md:w-[89px] md:h-[89px]">
                                <img src="${r.college.teamLogo}" alt="${r.college.teamFirstName} ${r.college.teamNickName}" loading="lazy" class="w-8 h-8">
                            </div>`:a='<div class="w-10 h-10 flex items-center justify-center md:w-[89px] md:h-[89px]">&nbsp;</div>',e+=`<div id="player-${r.ID}">
                              <div id="player-desc-${r.ID}" class="w-full my-2 mb-3 p-3 border border-slate-200 rounded-xl flex flex-row items-center justify-between">
                                  <div class="w-2/3 flex flex-row items-center justify-start">
                                      <div class="w-16 h-16 shrink-0 rounded-full flex items-center justify-center bg-slate-200 md:w-[89px] md:h-[89px]">
                                            <img src="${r.player_picture??"https://sportsanddata.com/images/players/player.png"}" alt="${r.title}" loading="lazy" class="w-14 h-14 rounded-full md:w-20 md:h-20">
                                      </div>
                                            ${a}
                                      <div class="flex flex-col px-1 md:px-4">
                                          <div class="font-bold leading-normal text-base md:text-2xl">${r.title}</div>
                                          <div class="font-thin leading-normal uppercase text-xs md:text-[15px]">
                                              ${r.position} ${r.college!==null?"· "+r.college.teamFirstName+" "+r.college.teamNickName:""}
                                          </div>
                                      </div>
                                  </div>
                                  <div class="w-1/3 flex flex-row items-center justify-end">
                                      <a href="https://www.betus.com.pa/sportsbook/nfl/nfl-draft/"
                                         target="_blank"
                                         class="block px-2 py-1 mx-1 bg-blue-600 text-white font-nexaheavy text-center text-xs rounded-full cursor-pointer md:text-base md:px-4 md:mx-3">
                                          Bet Now
                                      </a>
                                      <div class="w-6 h-6 flex border border-slate-700 rounded-full items-center justify-center cursor-pointer md:w-10 md:h-10">
                                          <svg data-player="${r.ID}" class="player_bio_display w-3 h-3 rotate-90 md:w-7 md:h-7" role="img">
                                              <use xlink:href="${i}#icon-arrow-right"></use>
                                          </svg>
                                      </div>
                                  </div>
                              </div>
                              <div id="player-bio-${r.ID}" class="player_bios hidden">
                                  <div class="w-full my-2 mb-3 py-3 flex flex-row items-center justify-around bg-slate-100 rounded-xl leading-normal">
                                  <div class="text-[15px] px-2 border-r border-r-slate-200 md:px-5">
                                      <div class="flex items-center justify-center text-xs font-bold md:text-[15px]">Position</div>
                                      <div class="flex items-center justify-center text-xs md:text-[15px]">Rnd ${r.round}, Pick ${r.pick}</div>
                                  </div>
                                  <div class="text-[15px] px-2 border-r border-r-slate-200 md:px-5">
                                      <div class="flex items-center justify-center text-xs font-bold md:text-[15px]">Status</div>
                                      <div class="flex items-center justify-center text-xs md:text-[15px]">${r.position}</div>
                                  </div>
                                  <div class="text-[15px] px-2 border-r border-r-slate-200 md:px-5">
                                      <div class="flex items-center justify-center text-xs font-bold md:text-[15px]">Team</div>
                                      <div class="flex items-center justify-center text-xs md:text-[15px]"> - </div>
                                  </div>
                                  <div class="text-[15px] px-2 border-r border-r-slate-200 md:px-5">
                                      <div class="flex items-center justify-center text-xs font-bold md:text-[15px]">Class</div>
                                      <div class="flex items-center justify-center text-xs md:text-[15px]">${r.class!==""?r.class:" - "}</div>
                                  </div>
                                  <div class="text-[15px] px-2 md:px-5">
                                      <div class="flex items-center justify-center text-xs font-bold md:text-[15px]">Grade</div>
                                      <div class="flex items-center justify-center text-xs md:text-[15px]">${r.grade!==""?r.grade:" - "}</div>
                                  </div>
                              </div>
                                  <div class="w-full mt-5 mb-3 text-base md:text-2xl md:mt-7 md:mb-5">
                                      ${r.player_bio}
                                  </div>
                              </div>
                          </div>`}):e+=`<div id="">
                        <div id="" class="w-full my-2 mb-3 p-3 text-xs border border-slate-200 rounded-xl flex flex-row items-center justify-start md:text-base">
                            No prospects found for <span class="font-bold ml-1 md:ml-2">${d}</span>.
                        </div>
                  </div>`,e}function ae(l){let e="",t="",s="";document.getElementById("paginator"),document.getElementById("nfl_draft_container").getAttribute("data-svg");const a={teamShortName:"",teamLogo:"",teamFirstName:"",teamNickName:""},n=JSON.parse(l);return Object.entries(n.teams).forEach(([i,d])=>{d.teamShortName.toLowerCase()===n.current&&(a.teamShortName=d.teamShortName,a.teamLogo=d.teamLogo,a.teamFirstName=d.teamFirstName,a.teamNickName=d.teamNickName),s+=`<div id=""
                         data-teamshortname="${d.teamShortName}"
                         class="team_options w-auto h-12 mx-1 flex items-center justify-center text-[12px] cursor-pointer transition duration-300 ease-in-out md:text-[16px] md:h-10 ${d.teamShortName.toLowerCase()===n.current?"font-bold":"font-normal"}">
                         <div class="w-12 h-12 flex flex-col items-center justify-center md:w-[89px] md:h-[89px]">
                            <img src="${d.teamLogo}" alt="${d.teamFirstName} ${d.teamNickName}" loading="lazy" class="w-8 h-8 md:w-10 md:h-10">
                            ${d.teamShortName}
                         </div>
                     </div>`}),t+=`<!--// Position Selector -->
                    <p class="mb-5 text-base md:text-2xl md:mb-10">
                        32 teams, 257 picks. Every team has a shopping list. Teams with glaring holes at quarterback, offensive line, or edge rusher will likely prioritize those positions early. Rebuilding teams might target a variety of positions to fill out their roster. Contenders might focus on adding depth or that missing piece to push them over the championship hump. Injuries or surprise retirements can also force teams to adjust their draft strategy on the fly.
                    </p>
                    <div class="team_selector w-full mb-5 items-center justify-center flex md:mb-10">
                        <div class="w-1/12 relative flex items-center justify-center">
                            <button class="teams_scroll_prev mx-1 hover:opacity-80 ">
                                <svg class="h-6 w-6 rotate-180 md:h-10 md:w-10" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                    <rect width="42" height="42" rx="21" fill="#1D2129"></rect>
                                    <path d="M17.9102 28.9201L24.4302 22.4001C25.2002 21.6301 25.2002 20.3701 24.4302 19.6001L17.9102 13.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                        <div id="team_scroll_container" class="w-10/12 h-16 flex flex-row items-center overflow-auto overflow-y-hidden hide-scrollbar">
                            ${s}
                        </div>
                        <div class="w-1/12 relative flex items-center justify-center">
                            <button class="teams_scroll_next mx-1 hover:opacity-80">
                                <svg class="h-6 w-6 md:h-10 md:w-10" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                    <rect width="42" height="42" rx="21" fill="#1D2129"></rect>
                                    <path d="M17.9102 28.9201L24.4302 22.4001C25.2002 21.6301 25.2002 20.3701 24.4302 19.6001L17.9102 13.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <!--// Position Selector End -->
                    <div class="py-2 font-bold leading-normal text-xl md:text-2xl">
                        ${a.teamFirstName} ${a.teamNickName}
                    </div>
                    <div class="py-2 font-thin leading-normal text-base md:text-xl">
                        Top Needs: ${n.top_needs}
                    </div>
                    <div class="pt-2 font-thin leading-normal text-base md:text-xl">
                        ${n.needs_explanation}
                    </div>`,e+=t,e}function le(l){let e="";const t=JSON.parse(l);return Object.entries(t.lasts_posts).forEach(([s,a])=>{e+=`<div class="w-full h-40 flex flex-row border mb-3 bg-white border-slate-200 rounded-xl md:h-80 md:mb-5">
                        <div class="w-1/2">
                            <img src="${a.featured_image}" alt="${a.post_title}" class="w-full h-full bg-cover rounded-bl-xl rounded-tl-xl">
                        </div>
                        <div class="w-1/2 px-2 flex flex-col items-center justify-center md:px-5">
                            <p class="w-full justify-start text-base font-bold md:text-3xl">NFL Draft</p>
                            <a class="w-full justify-start"
                                href="${a.permalink}">
                                <p class="pb-1 text-xs md:text-2xl md:pb-5">${a.post_title}</p>
                            </a>
                            <p class="w-full justify-start text-xs text-slate-500 md:text-2xl">
                                By ${a.post_author}
                            </p>
                        </div>
                    </div>
                    `}),e}function ne(l){const e=(c,u)=>{if(!u||typeof u!="object")return null;const f=Object.values(u).find(p=>p.teamShortName===c);return f||null};let t="",s=[],a="",n=[];document.getElementById("paginator");let i=1;const d=document.getElementById("nfl_draft_container").getAttribute("data-arrows"),o=JSON.parse(l);for(let c=1;c<=7;c++)n[c]=0,s[c]="",a+=`<div id=""
                             class="rounds_menu_items w-auto h-8 px-1.5 flex items-center justify-center rounded-full text-xs font-medium cursor-pointer transition duration-300 ease-in-out md:text-[16px] md:px-8 md:h-10 ${c===parseInt(i)?"bg-neutral-800 text-white":"text-gray-700"} hover:bg-neutral-800 hover:text-white"
                             data-tab="${c}">
                           Round ${c}
                        </div>`,Object.entries(o.rounds).forEach(([u,r])=>{let f=e(r.player,o.nfl_teams),p=e(r.college,o.ncaaf_teams);r.rounds===c&&(s[c]+=`<div class="w-full h-auto px-2 flex flex-row items-center justify-center ${n[c]%2===0?"":"bg-slate-50"}">
                                        <div class="w-1/4 h-auto py-4 flex items-center justify-center text-xs text-slate-500 md:text-[16px]">
                                            ${r.pick_number}
                                            <img src="${d}" alt="Arrow" class="w-6 h-6 ml-1">
                                        </div>
                                        <div class="w-1/4 h-auto py-4 flex items-center justify-center text-xs text-slate-500 md:text-[16px]">
                                            <img class="w-8 h-8 md:w-12 md:h-12" src="${f.teamThumbnail}" alt="${f.teamName} ${f.teamFirstName}">
                                        </div>
                                        <div class="w-1/4 h-auto py-4 flex items-center justify-center text-xs text-slate-500 md:text-[16px]">
                                            <img class="w-7 h-7 md:w-10 md:h-10" src="${p.teamThumbnail}" alt="${p.teamName} ${p.teamNickName}">
                                        </div>
                                        <div class="w-1/4 h-auto py-4 flex items-center justify-center text-xs text-slate-500 md:text-[16px]">${r.draft_post}</div>
                                  </div>`,n[c]++)}),n[c]===0&&(s[c]=`<div class="w-full h-auto px-2 flex flex-row items-center justify-center">
                                    <div class="w-full h-20 flex items-center justify-center text-xs text-slate-500 md:text-[16px]">
                                        No players found for round ${c}.
                                    </div>
                                  </div>`);return t+=`<p class="mb-5 text-base md:text-2xl md:mb-10">
                    Three days. Seven Rounds. 257 picks. Don’t miss a single pick from the 2024 NFL Draft. Get real-time updates as fast as Roger Goodell can read them out. So go ahead and refill your drink, get more snacks, play the back nine, watch Paw Patrol with the kids because the BetUS Draft hub has you covered.
                </p>

                <!--// Rounds Selector -->
                <div class="w-full h-auto flex items-center justify-center">
                    <div class="w-full h-8 my-2 mb-5 rounded-full flex flex-row items-center justify-between md:w-10/12 md:h-10 md:mb-10">
                        ${a}
                    </div>
                </div>
                <!--// Rounds Selector End -->

                <!--// Rounds Content -->
                <div class="w-full h-auto">
                    <div class="w-full h-auto px-2 flex flex-row bg-slate-50 rounded-t-xl border-b-4 border-b-slate-300 text-[12px] font-nexaheavy uppercase md:rounded-t-2xl md:border-b-8 md:text-[16px]">
                        <div class="w-1/4 flex items-center justify-center my-1 border-r border-r-zinc-200 md:my-4">Pick</div>
                        <div class="w-1/4 flex items-center justify-center my-1 border-r border-r-zinc-200 md:my-4">Player</div>
                        <div class="w-1/4 flex items-center justify-center my-1 border-r border-r-zinc-200 md:my-4">School</div>
                        <div class="w-1/4 flex items-center justify-center my-1 md:my-4">Position</div>
                    </div>
                </div>
                <!--// Rounds Content End -->

                <div data-tab="1" class="round_tabs w-full h-auto flex flex-col items-center justify-center">
                    ${s[1]}
                </div>

                <div data-tab="2" class="round_tabs w-full h-auto hidden flex-col items-center justify-center">
                    ${s[2]}
                </div>

                <div data-tab="3" class="round_tabs w-full h-auto hidden flex-col items-center justify-center">
                    ${s[3]}
                </div>

                <div data-tab="4" class="round_tabs w-full h-auto hidden flex-col items-center justify-center">
                    ${s[4]}
                </div>

                <div data-tab="5" class="round_tabs w-full h-auto hidden flex-col items-center justify-center">
                    ${s[5]}
                </div>

                <div  data-tab="6" class="round_tabs w-full h-auto hidden flex-col items-center justify-center">
                    ${s[6]}
                </div>

                <div  data-tab="7" class="round_tabs w-full h-auto hidden flex-col items-center justify-center">
                    ${s[7]}
                </div>
                `,t}function oe(l){let e="",t="",s=0;const a=JSON.parse(l);return Object.values(a).forEach(i=>{s<3?t+=`  <div class="w-full h-auto my-5 flex flex-col items-center justify-center">
                                    <img src="${i.image}" class="w-full h-52 mb-5 bg-cover md:h-auto" alt="${i.title}">
                                    <a href="${i.permalink}">
                                        <p class="w-full h-auto px-2 mb-5 items-center text-base font-bold my-2 md:text-2xl">${i.title}</p>
                                    </a>
                                    <p class="w-full px-2 items-center justify-start text-xs md:text-xl">${i.excerpt}</p>
                                    <p class="w-full px-2 items-center justify-start text-slate-500 text-xs md:text-base">By ${i.author}</p>
                                </div>`:s>=3&&s<5?t+=`<div class="w-full h-40 flex flex-row border mb-3 bg-white border-slate-200 rounded-xl md:h-80 md:mb-5">
                                <div class="w-1/2">
                                    <img src="${i.image}" alt="${i.title}" class="w-full h-full bg-cover rounded-bl-xl rounded-tl-xl">
                                </div>
                                <div class="w-1/2 px-2 flex flex-col items-center justify-center md:px-5">
                                    <p class="w-full justify-start text-base font-bold md:text-3xl">NFL Draft</p>
                                    <a class="w-full justify-start"
                                        href="${i.permalink}">
                                        <p class="pb-1 text-xs md:text-2xl md:pb-5">${i.title}</p>
                                    </a>
                                    <p class="w-full justify-start text-xs text-slate-500 md:text-2xl">
                                        By ${i.author}
                                    </p>
                                </div>
                            </div>`:t+=`<a  class="w-full" href="${i.permalink}">
                                  <p class="w-full flex grow pb-3 text-base border-b border-b-slate-200 md:text-[15px] md:pb-5"> ${i.title} </p>
                              </a>`,s++}),e+=`<!--// Position Selector -->
                    <p class="mb-5 text-base md:text-2xl md:mb-10">
                        Adam Schefter, Ian Rapoport, Pat McAfee, Rich Eisen, Mike Greenberg, Chris Mortensen, Mel Kiper Jr and now BetUS. The NFL Draft weekend is a smorgasbord of rumors, trades, and surprises, so you won’t miss a single beat with the BetUS Draft Hub.
                    </p>
                    <div class="w-full h-auto flex flex-col items-center justify-center">
                        ${t}
                    </div>`,e}function ie(){return`<div class="w-full h-96 mx-auto py-5 px-3">
                  <div style="" class="max-w-3xl h-full mx-auto rounded-lg py-4 flex flex-row justify-center items-center">
                      <div class="w-7 h-7 rounded-full animate-spin relative">
                          <div class="w-full h-full content-none absolute rounded-full bg-gradient-to-br from-blue-200 to-blue-600"></div>
                          <div class="w-3/4 h-3/4   content-none absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white"></div>
                      </div>
                      <div class="px-2">Loading...</div>
                  </div>
              </div>`}function q(){document.querySelectorAll(".player_bio_display").forEach(e=>{e.addEventListener("click",function(){let t=this.getAttribute("data-player"),s=document.getElementById(`player-bio-${t}`);s.classList.contains("hidden")?(s.classList.remove("hidden"),this.classList.remove("rotate-90"),this.classList.add("-rotate-90")):(s.classList.add("hidden"),this.classList.remove("-rotate-90"),this.classList.add("rotate-90"))})})}function re(){const l=document.querySelectorAll(".player_positions");l.forEach(e=>{e.addEventListener("click",function(){const t="prospects",s=document.getElementById("paginator"),a=document.getElementById("nfl_draft_container"),n=a.getAttribute("data-year"),i=a.getAttribute("data-show"),d=s.getAttribute("data-page"),o=s.getAttribute("data-pages"),c=s.getAttribute("data-total"),u=this.getAttribute("data-position");s.setAttribute("data-filter",u),l.forEach(r=>{r.classList.remove("bg-neutral-800","text-white"),r.classList.add("text-gray-700")}),this.classList.remove("text-gray-700"),this.classList.add("bg-neutral-800","text-white"),N(a,t,n,i,d,o,c,u)})})}function de(){let l=document.getElementById("prospects_scroll_container"),e=document.querySelector(".prospects_scroll_prev"),t=document.querySelector(".prospects_scroll_next");e.addEventListener("click",function(){j(l,"left")}),t.addEventListener("click",function(){j(l,"right")})}function ce(){let l=document.getElementById("team_scroll_container"),e=document.querySelector(".teams_scroll_prev"),t=document.querySelector(".teams_scroll_next");e.addEventListener("click",function(){j(l,"left")}),t.addEventListener("click",function(){j(l,"right")})}function j(l,e){let t=100,a=t/(200/10),n=0,i=setInterval(function(){e==="left"?l.scrollLeft-=a:l.scrollLeft+=a,n+=a,n>=t&&window.clearInterval(i)},10)}function me(){const l=document.querySelectorAll(".team_options");l.forEach(e=>{e.addEventListener("click",function(){const t="teams",s=document.getElementById("paginator"),a=document.getElementById("nfl_draft_container"),n=a.getAttribute("data-year"),i=a.getAttribute("data-show"),d=s.getAttribute("data-page"),o=s.getAttribute("data-pages"),c=s.getAttribute("data-total"),u=this.getAttribute("data-teamshortname").toLowerCase();s.setAttribute("data-filter",u),l.forEach(r=>{r.classList.remove("font-bold"),r.classList.add("font-normal")}),this.classList.remove("font-normal"),this.classList.add("font-bold"),N(a,t,n,i,d,o,c,u)})})}function ue(){const l=document.querySelectorAll(".rounds_menu_items"),e=document.querySelectorAll(".round_tabs");l.forEach(t=>{t.addEventListener("click",function(){let s=this.getAttribute("data-tab");l.forEach(a=>{a.getAttribute("data-tab")===s?(a.classList.remove("text-gray-700"),a.classList.add("bg-neutral-800","text-white")):(a.classList.add("text-gray-700"),a.classList.remove("bg-neutral-800","text-white"))}),e.forEach(a=>{a.getAttribute("data-tab")===s?(a.classList.remove("hidden"),a.classList.add("flex")):(a.classList.add("hidden"),a.classList.remove("flex"))})})})}function fe(){const l="prospects",e=document.querySelectorAll(".prospect_pages"),t=document.getElementById("paginator"),s=document.getElementById("nfl_draft_container");let a=s.getAttribute("data-year"),n=s.getAttribute("data-show"),i=t.getAttribute("data-total");t.getAttribute("data-page");let d=t.getAttribute("data-pages"),o=t.getAttribute("data-filter");e.forEach(c=>{c.addEventListener("click",function(){let u=this.getAttribute("data-currentpage");e.forEach(r=>{r.classList.remove("font-bold"),r.classList.add("text-slate-500")}),this.classList.remove("text-slate-500"),this.classList.add("font-bold"),N(s,l,a,n,u,d,i,o)})})}const D=async l=>{l&&console.error(l),pe()};var C;(C=import.meta.webpackHot)==null||C.accept(D);function pe(){xe(),ge(),he()}function xe(){const l=document.getElementById("authors-list"),e=document.getElementById("authors-show-more");e.addEventListener("click",function(){ve(l,e)})}async function ve(l,e){let t=parseInt(e.getAttribute("data-page")),s="";const a=parseInt(e.getAttribute("data-itemsperpage")),n=new URLSearchParams({action:"authors_list",page:t+1,items_per_page:a}),i=await V(n),d=JSON.parse(i);if(!d.error){t++,e.setAttribute("data-page",t+1);const o=Object.values(d);let c=0;o.forEach(u=>{c%2===0&&(s+='<div class="w-full h-auto py-6 flex flex-col md:flex-row md:shrink-0 md:border-t">'),s+=`<div class="w-full h-auto px-5 py-9 flex flex-row items-center justify-center border-t ${c%2===0?"md:border-r":""} md:border-t-0">
                        <picture class="w-1/3 md:w-1/5">
                            <source srcset="${u.avatar}"  media="(min-width: 992px)"/>
                            <img loading="lazy" src="${u.avatar}" class="w-32 h-32 rounded-full mr-6" alt="${u.first_name+" "+u.last_name}">
                        </picture>
                        <div class="w-2/3 h-auto px-6 md:w-4/5">
                            <h3 class="post_title font-nexaheavy text-3xl leading-1 text-neutral-800 mt-1 mb-0"
                                data-count="${u.post_count}">
                                ${u.first_name} ${u.last_name}
                            </h3>
                            <a href="mailto:${u.email}"
                               class="w-full relative -top-4 text-xs underline" >
                                ${u.email}
                            </a>
                            <p class="w-full text-slate-600 italic leading-[24px]">${u.description}</p>
                            <a href="${u.permalink}" class="w-64 px-4 py-1 rounded-2xl border-2 border-neutral-800 text-base font-bold">View Profile</a>
                        </div>
                    </div>`,(c%2===1||c===o.length-1)&&(s+="</div>"),c++})}U(l,s,"append")}function ge(){const l=document.querySelectorAll(".author_posts_filters"),e=document.getElementById("picks-news-container");l.forEach(t=>{t.addEventListener("click",function(){const s=this.getAttribute("data-tab"),a=document.getElementById("authorPostsFilterByDate").value;l.forEach(n=>{n.classList.remove("bg-neutral-800","text-white"),n.classList.add("text-gray-700")}),this.classList.remove("text-gray-700"),this.classList.add("bg-neutral-800","text-white"),R(e,s,a)})})}function he(){const l=document.getElementById("picks-news-container");document.querySelector("select[name=authorPostsFilterByDate]").addEventListener("change",e=>{let t=e.target.value;const s=document.querySelectorAll(".author_posts_filters");let a;s.forEach(n=>{n.classList.contains("text-white")&&(a=n.getAttribute("data-tab"))}),R(l,a,t)})}async function R(l,e,t){let s="";const a=new URLSearchParams({action:"authors_posts_list",suffix:e,time_frame:t}),n=await V(a),i=JSON.parse(n);if(!i.error){const d=Object.values(i.posts);let o=0;d.length>0?d.forEach(c=>{o%3===0&&(s+='<div class="w-full h-auto py-6 flex flex-col md:flex-row md:shrink-0">'),s+=`<div class="w-full h-auto px-4 md:w-1/3">
                                  <a href="${c.permalink}"
                                     class="w-full h-auto relative" >
                                      <img class="w-full h-64 transition-all duration-500 object-cover object-top rounded-lg mb-3"
                                           src="${c.featured_image_url}"
                                           alt="${c.post_title}">
                                      <div class="absolute top-4 pl-2 text-white flex w-full items-center uppercase">
                                          ${c.icon_tag}
                                      </div>
                                  </a>
                                  <div class="picks_archive_foot mt-2">
                                      <p class="picks_archive_date text-grey-50 text-[14px] font-roboto text-grey-50 mb-[8px]">${c.post_date} •
                                          ${c.reading_time} read</p>
                                      <p class="picks_archive_title font-nexabold text-[16px] leading-[19.2px] font-bold pr-[8px] mt-0">${c.post_title}</p>
                                  </div>
                              </div>`,(o%3===2||o===d.length-1)&&(s+="</div>"),o++}):s+=`<div class="w-full h-auto py-6 flex flex-col md:flex-row md:shrink-0">
                            <div class="w-full h-auto px-4 md:w-1/3">
                                <p class="text-center text-xl">No posts found</p>
                            </div>
                        </div>`}U(l,s,"replace")}function V(l){const e=new XMLHttpRequest,t=ajax.url;return new Promise((s,a)=>{e.open("POST",t,!0),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),e.send(l),e.timeout=3e4,e.onload=()=>{e.status>=200&&e.status<300?s(e.responseText):a(e.statusText)},e.ontimeout=n=>{a("timeout")}})}function U(l,e,t="replace"){l.classList.add("opacity-0"),t==="append"?l.insertAdjacentHTML("beforeend",e):l.innerHTML=e,l.classList.remove("opacity-0"),l.classList.add("opacity-100")}const z=async l=>{l&&console.error(l),ye()};var H;(H=import.meta.webpackHot)==null||H.accept(z);function ye(){var l=document.getElementById("slideRange"),e=document.getElementById("stake");t(),e.value=l.value,l.oninput=function(){e.value=this.value,t(),v()},e.addEventListener("input",function(){var m=parseFloat(e.value);m>=parseFloat(l.min)&&m<=parseFloat(l.max)&&(l.value=m,t(),v())});function t(){var m=(l.value-l.min)/(l.max-l.min)*100,x=100-m;l.style.background="linear-gradient(to right, #000000 "+m+"%, #f1f1f5 "+m+"%, #f1f1f5 "+x+"%)"}let s=document.getElementById("americanOdds"),a=document.getElementById("rangeValue");s.addEventListener("input",function(){n(),v()}),a.addEventListener("input",function(){i(),v()});function n(){a.value=s.value}function i(){s.value=a.value}let d=document.getElementById("payout_value"),o=document.getElementById("implied_odd"),c=document.getElementById("decimal_odd"),u=document.getElementById("fraction"),r=document.getElementById("profit"),f=document.getElementById("stake");function p(m,x){function h(w,E){return E?h(E,w%E):w}let y=h(m,x);return`${m/y}/${x/y}`}function v(){let m=parseFloat(s.value),x=parseFloat(f.value);if(!isNaN(m)&&!isNaN(x))if(m>0){let h=(m/100+1).toFixed(2);c.innerHTML=h;let y=m,w=100;u.innerHTML=p(y,w);let E=(100/(m+100)*100).toFixed(2);o.innerHTML=`${E}%`;let A=(x*h).toFixed(2),I=(x*(h-1)).toFixed(2);d.innerHTML=`$${A}`,r.innerHTML=`$${I}`}else{let h=(100/Math.abs(m)+1).toFixed(2);c.innerHTML=h;let y=100,w=Math.abs(m);u.innerHTML=p(y,w);let E=(Math.abs(m)/(Math.abs(m)+100)*100).toFixed(2);o.innerHTML=`${E}%`;let A=(x*h).toFixed(2),I=(x*(h-1)).toFixed(2);d.innerHTML=`$${A}`,r.innerHTML=`$${I}`}else c.innerHTML="Invalid input",u.innerHTML="Invalid input",o.innerHTML="Invalid input",d.innerHTML="Invalid input",r.innerHTML="Invalid input"}v(),s.addEventListener("input",v),f.addEventListener("input",v),document.getElementById("resetBtn").addEventListener("click",function(){s.value="105",f.value="100",l.value=f.value,t(),a.value=s.value,v()});var b=document.getElementById("parlaySlideRange"),S=document.getElementById("parlayStake");B(),S.value=b.value,b.oninput=function(){S.value=this.value,B(),k()},document.getElementById("parlayStake").addEventListener("input",function(){k()}),S.addEventListener("input",function(){var m=parseFloat(S.value);m>=parseFloat(b.min)&&m<=parseFloat(b.max)&&(b.value=m,B(),v())});function B(){var m=(b.value-b.min)/(b.max-b.min)*100,x=100-m;b.style.background="linear-gradient(to right, #000000 "+m+"%, #f1f1f5 "+m+"%, #f1f1f5 "+x+"%)"}document.getElementById("parlayAmericanOdds").addEventListener("keypress",function(m){m.key==="Enter"&&(m.preventDefault(),$())}),document.getElementById("addBet").addEventListener("click",function(){$()}),document.getElementById("betsContainer").addEventListener("click",function(m){m.target.dataset.icon==="close"&&g(m.target.closest(".betdiv"))});function $(){const m=document.getElementById("parlayAmericanOdds"),x=m.value.trim(),h=document.getElementById("errorMessage");if(h&&h.remove(),!isNaN(x)&&x!==""&&x>=-1e5&&x<=1e5){const y=document.getElementById("betsList"),w=document.createElement("div");w.className="betdiv flex bg-neutral-200 rounded my-1.5 pl-1.5 py-0 ml-2.5 h-[70%]",w.innerHTML=`
            <div class="flex items-center flex-grow-[2] pr-1">
                <div class="text-fuji-grey text-lg font-extrabold americanOddValue">${x}</div>
            </div>
            <div class="flex flex-grow items-center px-2 rounded-sm" role="button" tabindex="0">
                <svg
                class="hover:opacity-80 cursor-pointer"
                width="18"
                style="fill: #232a31; stroke: #232a31; stroke-width: 0; vertical-align: bottom;"
                height="18"
                viewBox="0 0 48 48"
                data-icon="close"
                >
                <path
                    d="M37.98 34.827l-9.9-9.9 9.9-9.898c.78-.782.78-2.05 0-2.83-.78-.78-2.047-.78-2.828 0l-9.9 9.9-9.898-9.9c-.78-.78-2.048-.78-2.828 0-.78.78-.78 2.047 0 2.828l9.9 9.9-9.9 9.898c-.78.78-.78 2.047 0 2.828.78.78 2.047.78 2.828 0l9.9-9.9 9.898 9.9c.78.78 2.048.78 2.828 0 .782-.78.782-2.047 0-2.827z"
                ></path>
                </svg>
            </div>
        `,y.insertBefore(w,m.parentElement),m.value="",m.focus(),k()}else{const y=document.createElement("div");y.id="errorMessage",y.className="text-red-500 text-xs mt-1",y.textContent="Please enter a valid number between -100000 and +100000",m.parentElement.appendChild(y),m.focus()}}function g(m){m&&(m.remove(),k())}function _(){document.getElementById("betsList").querySelectorAll(".betdiv").forEach(x=>x.remove()),k()}document.getElementById("clearBetsButton").addEventListener("click",function(){_()});function k(){const m=parseFloat(document.getElementById("parlayStake").value);if(isNaN(m)||m<0){console.error("Invalid bet amount");return}const x=document.querySelectorAll(".americanOddValue");let h=1;x.length>0&&x.forEach(function(A){const I=parseFloat(A.textContent);if(!isNaN(I)){const X=I>=0?I/100+1:100/Math.abs(I)+1;h*=X}});const y=m*h,w=y-m,E=1/h*100;document.getElementById("parlayPayout").innerHTML="$"+y.toFixed(2),document.getElementById("parlayProfit").innerHTML="$"+w.toFixed(2),document.getElementById("parlayImplied").innerHTML=E.toFixed(2)+"%",console.log({betAmount:m,totalDecimalOdds:h,payoutAmount:y,winAmount:w,impliedProbability:E})}document.getElementById("parlayStake").addEventListener("keyup",k),document.getElementById("addBet").addEventListener("click",k),document.getElementById("betsContainer").addEventListener("click",function(m){m.target.dataset.icon==="close"&&(g(m.target.closest(".betdiv")),k())}),document.getElementById("clearBetsButton").addEventListener("click",function(){_(),k()}),document.getElementById("parlayResetBtn").addEventListener("click",function(){document.getElementById("parlayStake").value="",_(),document.getElementById("parlayPayout").innerHTML="$100.00",document.getElementById("parlayProfit").innerHTML="$0.00",document.getElementById("parlayImplied").innerHTML="0.00%";var m=document.getElementById("parlaySlideRange"),x=document.getElementById("parlayStake");m.value=m.defaultValue,x.value=x.defaultValue,B()}),document.querySelectorAll(".number-only").forEach(m=>{m.addEventListener("input",G)});function G(m){const x=m.target;x.value=x.value.replace(/[^0-9-]/g,""),x.value.includes("-")&&(x.value="-"+x.value.split("-").join(""))}}function be(l){l.preventDefault();const e=l.target.getAttribute("data-url")?l.target.getAttribute("data-url"):window.location.href;navigator.clipboard.writeText(e).then(()=>{l.target.parentNode.parentNode.parentNode.classList.add("active"),setTimeout(()=>{l.target.parentNode.parentNode.parentNode.classList.remove("active")},1500)}).catch(t=>{console.error("Failed to copy URL to clipboard:",t)})}function we(){let l=window.scrollY,e=document.documentElement.clientHeight;l>e&&goTopBtn.classList.add("back_to_top-show"),l<e&&goTopBtn.classList.remove("back_to_top-show")}function J(){window.scrollY>0&&(window.scrollBy(0,-80),setTimeout(J,0))}W(async()=>{if(console.log("The Loocker Room Dom is ready! 🚀"),window.matchMedia("(max-width: 768px)"),import.meta.webpackHot&&import.meta.webpackHot.accept("./sliderSports.js",async()=>{sliderInstance.dispose();const e=(await Q(()=>import("./chunks/sliderSports.B3VojSJE.js"),[],import.meta.url)).default;sliderInstance=new e}),document.getElementById("nfl_draft_container")&&await O(),document.getElementById("authors-list")&&await D(),document.getElementById("sportsbook-calculator")&&await z(),document.getElementById("show-mobile-menu")){let e=document.querySelector("button.rmp-menu-trigger-boring");e.addEventListener("click",()=>{let t=document.querySelector(".rmp-container.rmp-container.rmp-slide-left");e.classList.contains("menu-active")?(e.classList.remove("menu-active"),t.style.transform="translateX(-100%)"):(e.classList.add("menu-active"),t.style.transform="translateX(0%)")}),document.getElementById("show-mobile-menu").addEventListener("click",()=>{e.click()}),document.querySelector(".close-menu-mobile")&&document.querySelector(".close-menu-mobile").addEventListener("click",()=>{e.click()}),document.body.addEventListener("click",t=>{let s=document.querySelector(".rmp-container");if(!t.target.classList.contains("show-mobile-menu-class")&&!s.contains(t.target)){let a=document.querySelector("button.rmp-menu-trigger-boring");window.getComputedStyle(s).getPropertyValue("transform").includes("matrix(1, 0, 0, 1, 0, 0)")&&a.click()}}),document.querySelector(".rmp-container .menu-item-has-children.rmp-menu-item a")&&document.querySelector(".rmp-container .menu-item-has-children.rmp-menu-item a").addEventListener("click",t=>{t.target.getAttribute("href")!="#"&&t.target.getAttribute("href")!=""&&(window.location.href=t.target.getAttribute("href"))})}if(document.querySelectorAll(".like_button")){const e=document.querySelectorAll(".like_button"),t=document.querySelectorAll(".dislike_button");let s="";if(document.getElementById("page_id_content")){s=document.getElementById("page_id_content").getAttribute("data-id-page");let n=localStorage.getItem("like_page_"+s),i=localStorage.getItem("dislike_page_"+s);n===window.location.hostname+window.location.pathname&&e.forEach(d=>{d.querySelector("svg").classList.add("active")}),i===window.location.hostname+window.location.pathname&&t.forEach(d=>{d.querySelector("svg").classList.add("active")})}let a=!1;e.forEach(n=>{n.addEventListener("click",()=>{if(a)return;a=!0;const i=n.getAttribute("data-postid");n.querySelector("span");let d=n.querySelector("svg"),o=n.parentNode.querySelector(".dislike_button svg");const c=ajax.url,u=new URLSearchParams({action:"like_the_post",post_id:i,classElement:d.classList.contains("active")?"true":"false",dislikeIcon:o.classList.contains("active")?"true":"false"});fetch(c,{method:"POST",body:u}).then(r=>r.json()).catch(r=>{console.log(r)}).then(r=>{a=!1,document.querySelectorAll(".like_button").forEach(p=>{p.getAttribute("data-postid")==i&&(p.querySelector("span").innerHTML=r.likes?r.likes:"",p.querySelector("svg").classList.contains("active")?(p.querySelector("svg").classList.remove("active"),localStorage.removeItem("like_page_"+i)):(p.querySelector("svg").classList.add("active"),localStorage.setItem("like_page_"+i,window.location.hostname+window.location.pathname),localStorage.removeItem("dislike_page_"+i),p.parentNode.querySelector(".dislike_button svg").classList.remove("active")))})})})}),t.forEach(n=>{n.addEventListener("click",()=>{if(a)return;a=!0;const i=n.getAttribute("data-postid");n.querySelector("span");let d=n.querySelector("svg"),o=n.parentNode.querySelector(".like_button svg");const c=ajax.url,u=new URLSearchParams({action:"dislike_the_post",post_id:i,likeIcon:o.classList.contains("active")?"true":"false",classElement:d.classList.contains("active")?"true":"false"});fetch(c,{method:"POST",body:u}).then(r=>r.json()).catch(r=>{console.log(r)}).then(r=>{a=!1,document.querySelectorAll(".like_button").forEach(p=>{p.querySelector("span").innerHTML=r.likes?r.likes:"",p.querySelector("svg").classList.contains("active")&&(p.querySelector("svg").classList.remove("active"),localStorage.removeItem("like_page_"+i))}),d.classList.contains("active")?(d.classList.remove("active"),localStorage.removeItem("dislike_page_"+i)):(o.classList.contains("active")&&(o.classList.remove("active"),localStorage.removeItem("like_page_"+i),o.parentNode.querySelector("span").innerHTML=r.likes?r.likes:""),d.classList.add("active"),localStorage.setItem("dislike_page_"+i,window.location.hostname+window.location.pathname))})})})}if(document.getElementById("menu_top")&&document.getElementById("menu_bottom")){const e={top:document.getElementById("menu_top"),middle:document.getElementById("menu_middle"),bottom:document.getElementById("menu_bottom"),nav:document.getElementById("oldmenu"),oldmenulist:document.getElementById("oldmenu_ul"),oldmenulinks:document.getElementById("oldmenu_links"),oldmenumore:document.getElementById("oldmenu_more"),lockerRoomMenu:document.getElementById("menu-new-lockerroom"),siemaElements:document.querySelectorAll(".belowSubmenu"),dropdownHover:document.getElementById("dropdownHover")};e.oldmenumore.addEventListener("mouseover",()=>{e.siemaElements.forEach(t=>{t.classList.add("relative","-z-10")})}),e.oldmenumore.addEventListener("mouseout",()=>{e.siemaElements.forEach(t=>{t.classList.remove("relative","-z-10")})}),e.nav.addEventListener("click",()=>{e.top.classList.contains("rotate-45")?(e.top.classList.remove("-translate-y-1.5","rotate-45"),e.top.classList.add("-translate-y-1.5"),e.middle.classList.remove("opacity-0"),e.bottom.classList.remove("-translate-y-1.5","-rotate-45"),e.bottom.classList.add("translate-y-1.5"),e.oldmenulinks.classList.add("hidden"),e.oldmenulinks.classList.remove("relative"),e.oldmenulist.classList.remove("absolute","bg-slate-900"),e.siemaElements.forEach(t=>{t.classList.remove("relative","-z-10")}),e.dropdownHover.classList.add("hidden"),e.dropdownHover.classList.remove("flex")):(e.top.classList.remove("-translate-y-1.5","rotate-45"),e.top.classList.add("-translate-y-1.5","rotate-45"),e.middle.classList.add("opacity-0"),e.bottom.classList.remove("translate-y-1.5"),e.bottom.classList.add("-translate-y-1.5","-rotate-45"),e.oldmenulinks.classList.remove("hidden"),e.oldmenulinks.classList.add("relative"),e.oldmenulist.classList.add("absolute","bg-slate-900"),e.siemaElements.forEach(t=>{t.classList.add("relative","-z-10")}),e.dropdownHover.classList.remove("hidden"),e.dropdownHover.classList.add("flex"))})}if(document.getElementById("search-button")){const e=document.getElementById("search-button"),t=document.getElementById("modal"),s=document.querySelector("body"),n=document.getElementById("search-button").querySelector("use"),i=n.getAttribute("xlink:href"),d=i+"close";e.addEventListener("click",()=>{const o=n.getAttribute("xlink:href");t.classList.toggle("hidden"),s.classList.toggle("overflow-hidden"),o===i?n.setAttribute("xlink:href",d):n.setAttribute("xlink:href",i)})}if(document.querySelector(".back-to-top")){let e=document.querySelectorAll(".back-to-top");for(let t=0;t<e.length;t++)e[t].addEventListener("scroll",we),e[t].addEventListener("click",J)}if(document.querySelector(".dynamic-menu")){let e=document.getElementById("dynamic-dropdown-toggle"),t=document.getElementById("dynamic-dropdown-menu"),s=document.getElementById("dynamic-menu-container");e.addEventListener("click",function(){t.classList.contains("hidden")?t.classList.remove("hidden"):t.classList.add("hidden")}),window.addEventListener("click",function(a){!s.contains(a.target)&&a.target!==e&&t.classList.add("hidden")})}let l=document.querySelectorAll(".copyLink");if(l.length>0&&l.forEach(function(e){e.addEventListener("click",be)}),document.querySelectorAll(".vote-poll")){const e=document.querySelectorAll(".vote-poll"),t=document.querySelectorAll(".matchup-poll-charts");let s;document.cookie.indexOf("games")>=0&&(s=getCookie("games").split(",")),e.forEach(a=>{s.forEach(n=>{let i=n.split("-");a.getAttribute("data-game")===i[0]+"-"+i[1]&&i[2]==="none"&&a.addEventListener("click",()=>{let d=a.getAttribute("data-leagueName"),o=a.getAttribute("data-game"),c=a.getAttribute("data-vote"),u=a.getAttribute("data-stadium"),r=ajax.url,f=new URLSearchParams({action:"vote_match_up",leagueName:d,game:o,vote:c});a.getAttribute("data-voted")==="false"&&fetch(r,{method:"POST",body:f}).then(p=>p.json()).catch(p=>{console.log(p)}).then(p=>{document.querySelectorAll(".vote-poll");let v=[],L=p.homeTeamVotes,b=p.awayTeamVotes,S=L+b,B=L/S*100,$=b/S*100;s=getCookie("games").split(","),s.forEach(g=>{let _=g.split("-");_[0]+"-"+_[1]===o?v.push(_[0]+"-"+_[1]+"-"+u):v.push(g)}),setCookie("games",v.join(","),7),t.forEach(g=>{g.dataset.game===i[0]+"-"+i[1]&&(g.children[0].children[0].children[1].innerHTML=$.toFixed(0)+"%",g.children[0].children[1].children[1].innerHTML=B.toFixed(0)+"%",g.children[1].children[0].attributes[0].nodeValue="width: "+$.toFixed(0)+"%",g.children[1].children[1].attributes[0].nodeValue="width: "+B.toFixed(0)+"%",g.classList.remove("hidden"),g.classList.add("block"))}),e.forEach(g=>{g.dataset.game===i[0]+"-"+i[1]&&(g.classList.remove("cursor-pointer"),g.classList.remove("hover:bg-sky-50"),g.dataset.voted="true",g.dataset.stadium===u&&g.classList.add("bg-sky-50"))})})})})})}if(document.querySelectorAll(".matchup-poll-picker")){const e=document.querySelectorAll(".matchup-poll-picker"),t=document.querySelectorAll(".matchup-element-container");e.forEach(s=>{s.addEventListener("click",()=>{let a=s.getAttribute("id").split("-")[2];e.forEach(n=>{n.classList.remove("bg-neutral-800"),n.getAttribute("id").split("-")[2]===a&&n.classList.add("bg-neutral-800")}),t.forEach(n=>{n.classList.remove("block"),n.classList.add("hidden"),n.getAttribute("id").split("-")[3]===a&&(n.classList.remove("hidden"),n.classList.add("block"))})})})}if(document.getElementById("leagues-menu")){let a=function(){s.forEach(n=>{n.classList.remove("bg-[#1D2129]","text-white","text-[#343B48]")})};const e=document.getElementById("leagues-menu"),t=document.querySelector(".scores-container"),s=e.querySelectorAll(".leagues-menu-items");e.addEventListener("click",function(n){if(n.target&&n.target.classList.contains("leagues-menu-items")){const i=n.target.id,d=t.querySelector(`a[name="${i}"]`);d&&(a(),n.target.classList.add("bg-[#1D2129]","text-white"),n.preventDefault(),t.scrollTo({top:d.offsetTop-t.offsetTop,behavior:"smooth"}))}})}});var F;(F=import.meta.webpackHot)==null||F.accept(console.error);