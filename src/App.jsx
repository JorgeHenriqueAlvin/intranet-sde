import React,{useState}from"react";
import{Search,ChevronLeft,ChevronRight,ExternalLink,FileText,Users,BriefcaseBusiness,Newspaper,CalendarDays,TrafficCone,MessageSquareText,BookOpen,Link2,Globe2,Network,LifeBuoy,Monitor}from"lucide-react";

const services=[
["Sistema Servidor","#","gov"],["SEI Bahia","https://www.portalseibahia.saeb.ba.gov.br/","sei"],["RH Bahia","https://rhbahia.ba.gov.br/","rh"],["SAC Digital","https://sacdigital.ba.gov.br/","sac"],["Planserv","https://planserv.ba.gov.br/planserv","plan"],["Office 365","https://outlook.office365.com/","office"],["e-DOC","https://edoc.sde.ba.gov.br/","edoc"],["Wiki SDE","#","wiki"],["Bahia Mais Inteligente","#","bmi"],["AtenaTI","#","atena"],["Manuais","#","manual"],["Fluxos SDE","#","fluxo"],["Monitora Bahia","#","monitora"],["Help Desk","#","help"],["e-Delegacia","#","delegacia"]
];
const useful=[["Sistemas Servidores","#",Users],["Formulários e Processos","#",FileText],["Educação Corporativa","#",BookOpen],["Intranet Antiga","#",Monitor]];
const nav=[["QUEM É QUEM","quem"],["DESENVOLVIMENTO","desenvolvimento"],["DOCUMENTOS","documentos"],["NOTÍCIAS","noticias"],["ANIVERSARIANTES","aniversariantes"],["TRÂNSITO","transito"],["DIGA AÍ","diga"]];
const go=id=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});

function Logo({type}){const base="logo-mark "+type;switch(type){
case"gov":return <div className={base}><span className="crest">✦</span><b>Estado da<br/>Bahia</b></div>;
case"sei":return <div className={base}><b>sei<span>!</span></b></div>;
case"rh":return <div className={base}><i>●</i><b>RH<br/>BAHIA</b><i>●</i></div>;
case"sac":return <div className={base}><i>◉</i><b>SAC<small>DIGITAL</small></b></div>;
case"plan":return <div className={base}><b>♡<em>Planserv</em></b></div>;
case"office":return <div className={base}><b>▣</b><span>Office 365</span></div>;
case"edoc":return <div className={base}><b>e-<span>DOC</span></b></div>;
case"wiki":return <div className={base}><b>◢</b><span>WIKI SDE</span></div>;
case"bmi":return <div className={base}><b>𝔅</b><span>BAHIA MAIS<br/>INTELIGENTE</span></div>;
case"atena":return <div className={base}><b>△</b><span>ATENA<span>TI</span></span></div>;
case"manual":return <div className={base}><b>▢</b><span>MANUAIS</span></div>;
case"fluxo":return <div className={base}><Network size={29}/><span>FLUXOS SDE</span></div>;
case"monitora":return <div className={base}><b>▥</b><span>MONITORA<br/>BAHIA</span></div>;
case"help":return <div className={base}><b>HELP</b><span>Help Desk</span></div>;
default:return <div className={base}><b>e</b><span>e-Delegacia</span></div>}}

function SectionTitle({icon:Icon,title}){return <div className="section-title"><Icon size={13}/><b>{title}</b></div>}
function MiniCard({image,title,text}){return <article className="mini-card"><img src={image}/><div><b>{title}</b><small>{text}</small><a href="#">Acessar ›</a></div></article>}

export default function App(){
const[q,setQ]=useState("");const filtered=services.filter(s=>s[0].toLowerCase().includes(q.toLowerCase()));
return <div className="site">
<header><div className="header-main"><a className="brand" href="#inicio"><Logo type="gov"/><span className="brand-sep"/><strong>SECRETARIA DE<br/>DESENVOLVIMENTO ECONÔMICO</strong></a><div className="header-right"><div className="social">f　▶　◎　▥<small>Bahia. Aqui é trabalho.</small></div><div className="search"><Search size={13}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Pesquisar na intranet"/></div></div></div><nav><button className="home" onClick={()=>go("inicio")}>⌂</button>{nav.map(([label,id])=><button key={id} onClick={()=>go(id)}>{label}</button>)}</nav></header>
<main id="inicio">
<section className="hero"><button className="slide prev"><ChevronLeft size={18}/></button><div className="hero-image"><img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1500&q=85"/><div className="hero-copy"><small>NOTÍCIA</small><h1>SECRETARIA LANÇA PROGRAMA<br/>DE INCENTIVO À ECONOMIA<br/>CRIATIVA NA BAHIA</h1><p>Nova ação da pasta vai fortalecer o setor e ampliar o acesso a políticas públicas de fomento à cultura, inovação e empreendedorismo.</p><a href="https://www.ba.gov.br/sde/noticias" target="_blank">LER COMUNICADO <ChevronRight size={12}/></a></div></div><button className="slide next"><ChevronRight size={18}/></button></section>
<div className="content-grid"><div className="main-column">
<section id="servicos" className="block"><SectionTitle icon={Globe2} title="Serviços"/><div className="services-grid">{filtered.map(([title,url,type])=><a className="service" key={title} href={url} target={url!=="#"?"_blank":undefined}><Logo type={type}/><b>{title}</b></a>)}</div></section>
<div className="two-cols"><section className="block" id="servidor"><SectionTitle icon={Users} title="Espaço do Servidor"/><MiniCard image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80" title="Servidores, documentos, benefícios e muito mais." text="Informações e serviços para o servidor." /></section><section className="block" id="cultura"><SectionTitle icon={BookOpen} title="Espaço Cultural"/><MiniCard image="https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=700&q=80" title="Projetos, eventos e ações culturais da SDE." text="Conheça as ações culturais." /></section></div>
<div className="news-title" id="noticias"><SectionTitle icon={Newspaper} title="Espaço Notícias"/><a href="https://www.ba.gov.br/sde/noticias" target="_blank">Ver todas as notícias ›</a></div><div className="news-grid">{["SECRETARIA LANÇA PROGRAMA DE INCENTIVO À ECONOMIA CRIATIVA NA BAHIA","CAPACITAÇÃO OFERECE CURSOS PARA SERVIDORES","BAHIA AVANÇA EM NOVOS PROJETOS DE DESENVOLVIMENTO"].map((t,i)=><article className="news-card" key={t}><img src={["https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80"][i]}/><small>SDE</small><b>{t}</b><p>Nova ação e informações para servidores e áreas da Secretaria.</p><time>19/06/2025</time></article>)}</div>
<div className="two-cols"><section className="block" id="desenvolvimento"><SectionTitle icon={BriefcaseBusiness} title="Desenvolvimento"/><p className="muted">Programas e iniciativas de desenvolvimento econômico.</p></section><section className="block" id="diga"><SectionTitle icon={MessageSquareText} title="Diga Aí!"/><p className="muted">Envie ideias, sugestões e contribuições para a SDE.</p></section></div>
</div>
<aside><section className="side-card" id="links"><SectionTitle icon={Link2} title="Links Úteis"/><div className="useful-grid">{useful.map(([t,u,I])=><a href={u} key={t}><span><I size={19}/></span><b>{t}</b></a>)}</div></section><section className="side-card media"><SectionTitle icon={Newspaper} title="SDE na Mídia"/><img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=600&q=80"/><b>SDE é destaque na mídia nacional com novas ações de fomento à economia baiana.</b><a href="https://www.ba.gov.br/sde/noticias" target="_blank">Ver todas as notícias ›</a></section><section className="side-card"><SectionTitle icon={CalendarDays} title="Clipping Diário"/><div className="date"><b>19/06</b><span>Quarta-feira</span></div><a href="#">Ver clipping completo ›</a></section><section className="side-card rh"><SectionTitle icon={LifeBuoy} title="RH Informa"/><div className="notice"><b>NOTA</b><p>Acesse aqui as principais informações da área de RH, benefícios e comunicados internos.</p><a href="https://rhbahia.ba.gov.br/" target="_blank">Ver mais ›</a></div></section><section className="side-card" id="aniversariantes"><SectionTitle icon={CalendarDays} title="Aniversariantes do dia"/><p className="muted">Hoje não há aniversariantes.</p><a href="#">Ver todos ›</a></section></aside></div></main>
<footer><div className="footer-brand"><Logo type="gov"/><strong>SDE</strong><span>SECRETARIA DE DESENVOLVIMENTO ECONÔMICO</span></div><div>ECONOMIA　 |　 PAINEL ADMIN　 |　 ACESSO À INFORMAÇÃO</div></footer>
</div>}