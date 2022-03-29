"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[530],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return c}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=u(r),c=n,k=d["".concat(i,".").concat(c)]||d[c]||s[c]||l;return r?a.createElement(k,o(o({ref:t},m),{},{components:r})):a.createElement(k,o({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),o=["components"],p={sidebar_position:4},i="Heroku",u={unversionedId:"Deployment/heroku",id:"Deployment/heroku",title:"Heroku",description:"For deployment to Heroku you need to create an account first.",source:"@site/docs/Deployment/heroku.md",sourceDirName:"Deployment",slug:"/Deployment/heroku",permalink:"/docs/Deployment/heroku",editUrl:"https://github.com/mgilangjanuar/teledrive/edit/staging/docs/docs/Deployment/heroku.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Vercel",permalink:"/docs/Deployment/vercel"}},m={},s=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Project creation",id:"project-creation",level:3},{value:"Database preparation",id:"database-preparation",level:3},{value:"Provide environment variables",id:"provide-environment-variables",level:3},{value:"Deploy",id:"deploy",level:2},{value:"Upgrade",id:"upgrade",level:2},{value:"Common Issues",id:"common-issues",level:2}],d={toc:s};function c(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"heroku"},"Heroku"),(0,l.kt)("p",null,"For deployment to ",(0,l.kt)("a",{parentName:"p",href:"https://heroku.com/"},"Heroku")," you need to create an account first."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note.")," ",(0,l.kt)("em",{parentName:"p"},"You need to clone TeleDrive in your local machine first.")),(0,l.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,l.kt)("p",null,"Get started by build all needed services."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://devcenter.heroku.com/articles/heroku-cli"},"Heroku CLI")," version 7.59.4 or above")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," version 14.2 or above:"),(0,l.kt)("p",{parentName:"li"},"Needed for importing SQL file. Install with this command (Ubuntu):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install postgresql -y\n")))),(0,l.kt)("h3",{id:"project-creation"},"Project creation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create a project from ",(0,l.kt)("a",{parentName:"p",href:"https://dashboard.heroku.com/apps"},"Heroku dashboard"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Login from Heroku CLI in terminal:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"heroku login\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Add heroku as a remote repository:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"heroku git:remote -a [YOUR_APP_NAME]\n")))),(0,l.kt)("h3",{id:"database-preparation"},"Database preparation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("a",{parentName:"p",href:"https://elements.heroku.com/addons/heroku-postgresql"},"Heroku Postgres")," as addon and connect to your project.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Go to the settings page and View Credentials of your database and set the following variables:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"heroku config:set USE_PSQL_HEROKU=1\nheroku config:set DATABASE_URL=[YOUR_DB_CONNECTION_URI]\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Import dump.sql"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"heroku pg:psql --app [YOUR_APP_NAME] -f ./server/src/model/migrations/dump.sql\n")))),(0,l.kt)("h3",{id:"provide-environment-variables"},"Provide environment variables"),(0,l.kt)("p",null,"Set all variables with your own values to Heroku:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"heroku config:set [ENV_NAME]=[ENV_VALUE]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Define all server variables"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"env"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ENV"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Hide the logs for production, default: develop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TG_API_ID"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Application ID from your Telegram App")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TG_API_HASH"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Application hash from Telegram App")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATABASE_URL"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"PostgreSQL connection URI, format: ",(0,l.kt)("inlineCode",{parentName:"td"},"postgresql://[user]:[password]@[host]:[port][/dbname][?paramspec]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API_JWT_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Random string for encrypt JWT web token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FILES_JWT_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Random string for encrypt public files"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Define all web variables"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"env"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_API_URL"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Base URL for the API, default: ",(0,l.kt)("inlineCode",{parentName:"td"},"''")," (empty string)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_TG_API_ID"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Application ID from your Telegram App ",(0,l.kt)("em",{parentName:"td"},"(for experimental features)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_TG_API_HASH"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Application hash from Telegram App  ",(0,l.kt)("em",{parentName:"td"},"(for experimental features)"))))))),(0,l.kt)("h2",{id:"deploy"},"Deploy"),(0,l.kt)("p",null,"Push your code to main branch in Heroku:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git push heroku main  # or staging:main, if you're from staging branch\n")),(0,l.kt)("p",null,"Your app will automatically deploy to ",(0,l.kt)("inlineCode",{parentName:"p"},"[YOUR_APP_NAME].herokuapp.com")),(0,l.kt)("h2",{id:"upgrade"},"Upgrade"),(0,l.kt)("p",null,"Upgrade to the latest version of TeleDrive with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git pull origin main  # or, staging for the latest updates\n\ngit push heroku main  # or staging:main, if you're from staging branch\n")),(0,l.kt)("h2",{id:"common-issues"},"Common Issues"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"Error: The local psql command could not be located")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/15576064/the-local-psql-command-could-not-be-located"},"https://stackoverflow.com/questions/15576064/the-local-psql-command-could-not-be-located")))))}c.isMDXComponent=!0}}]);