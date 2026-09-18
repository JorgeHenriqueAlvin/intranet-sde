import React,{useState}from"react";
import{Search,ChevronLeft,ChevronRight,ExternalLink,FileText,Users,BriefcaseBusiness,Newspaper,CalendarDays,TrafficCone,MessageSquareText,BookOpen,Link2,Globe2}from"lucide-react";

const services=[
["SEI Bahia","https://www.portalseibahia.saeb.ba.gov.br/","Sistema Servidor"],["Office 365","https://outlook.office365.com/","Office 365"],["e-DOC","https://edoc.sde.ba.gov.br/","Documentos"],["RH Bahia","https://rhbahia.ba.gov.br/","RH Bahia"],["Fluxos SDE","#","Fluxos SDE"],["Manuais","#","Manuais"],["Wiki SDE","#","Wiki SDE"],["Monitora Bahia","#","Monitora Bahia"]
];
const useful=[["Diário Oficial","https://www.egba.ba.gov.br/"],["Comprasnet","https://www.gov.br/compras/pt-br"],["Transparência","https://www.transparencia.ba.gov.br/"],["Governo da Bahia","https://www.ba.gov.br/"]];
const nav=[["QUEM É QUEM","quem"],["DESENVOLVIMENTO","desenvolvimento"],["DOCUMENTOS","documentos"],["NOTÍCIAS","noticias"],["ANIVERSARIANTES","aniversariantes"],["TRÂNSITO","transito"],["DIGA AÍ","diga"]];
const go=id=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});

function SectionTitle({icon:Icon,title}){return <div className="section-title"><Icon size={13}/><b>{title}</b></div>}
function MiniCard({image,title,text}){return <article className="mini-card"><img src={image}/><div><b>{title}</b>{text&&<small>{text}</small>}</div></article>}

export default function App(){
const[q,setQ]=useState("");
const filtered=services.filter(s=>s[0].toLowerCase().includes(q.toLowerCase()));
return <div className="site">
<header>
  <div className="header-main">
    <a className="logo" href="#inicio"><span className="gov">Estado<br/>da Bahia</span><strong>SDE</strong></a>
    <div className="header-tools">
      <div className="search"><Search size={13}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Pesquisar na intranet"/></div>
      <span className="login">Área do servidor</span>
    </div>
  </div>
  <nav>{nav.map(([label,id])=><button key={id} onClick={()=>go(id)}>{label}</button>)}</nav>
</header>

<main id="inicio">
  <section className="hero">
    <button className="slide prev"><ChevronLeft size={18}/></button>
    <div className="hero-image">
      <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1500&q=85"/>
      <div className="hero-copy"><small>NOTÍCIA</small><h1>SECRETARIA LANÇA PROGRAMA<br/>DE INCENTIVO À ECONOMIA<br/>CRIATIVA NA BAHIA</h1><p>Nova edição disponibiliza recursos para projetos de cultura, inovação e desenvolvimento criativo.</p><a href="https://www.ba.gov.br/sde/noticias" target="_blank">LER COMUNICADO <ChevronRight size={12}/></a></div>
    </div>
    <button className="slide next"><ChevronRight size={18}/></button>
  </section>

  <div className="content-grid">
    <div className="main-column">
      <section id="servicos" className="block">
        <SectionTitle icon={Globe2} title="Serviços"/>
        <div className="services-grid">{filtered.map(([title,url,sub])=><a className="service" key={title} href={url} target={url!=="#"?"_blank":undefined}><span className="service-icon"><Link2 size={17}/></span><b>{title}</b><small>{sub}</small></a>)}</div>
      </section>

      <div className="two-cols">
        <section className="block" id="servidor"><SectionTitle icon={Users} title="Espaço do Servidor"/><MiniCard image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80" title="Serviços e informações do servidor" text="Orientações, benefícios e atendimento." /></section>
        <section className="block" id="cultura"><SectionTitle icon={BookOpen} title="Espaço Cultural"/><MiniCard image="https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=700&q=80" title="Cultura e eventos da SDE" text="Conheça as ações culturais." /></section>
      </div>

      <div className="two-cols">
        <section className="block" id="noticias"><SectionTitle icon={Newspaper} title="Espaço Notícias"/><MiniCard image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=700&q=80" title="SECRETARIA LANÇA PROGRAMA DE INCENTIVO À ECONOMIA CRIATIVA NA BAHIA" text="Leia as principais notícias da Secretaria." /></section>
        <section className="block"><SectionTitle icon={Newspaper} title="Clipping Diário"/><div className="date"><b>19/06</b><span>data do dia</span></div><p className="muted">Principais notícias e menções à Secretaria.</p></section>
      </div>

      <div className="two-cols">
        <section className="block" id="desenvolvimento"><SectionTitle icon={BriefcaseBusiness} title="Desenvolvimento"/><p className="muted">Informações, programas e iniciativas de desenvolvimento econômico.</p></section>
        <section className="block" id="diga"><SectionTitle icon={MessageSquareText} title="Diga Aí!"/><p className="muted">Uma ideia, sugestão ou contribuição? Envie para a SDE.</p></section>
      </div>
    </div>

    <aside>
      <section className="side-card" id="links"><SectionTitle icon={Link2} title="Links úteis"/><div className="useful-grid">{useful.map(([t,u])=><a href={u} target="_blank" key={t}><span><ExternalLink size={11}/></span>{t}</a>)}</div></section>
      <section className="side-card media"><SectionTitle icon={Newspaper} title="SDE na Mídia"/><img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=600&q=80"/><b>Uma visão integrada sobre inovação e desenvolvimento.</b><small>Confira notícias e conteúdos relacionados à SDE.</small></section>
      <section className="side-card rh" id="aniversariantes"><SectionTitle icon={CalendarDays} title="RH Informa"/><div className="notice"><b>NOTA</b><p>Confira orientações, férias, benefícios e comunicados do RH Bahia.</p></div><a href="https://rhbahia.ba.gov.br/" target="_blank">Acessar RH Bahia →</a></section>
      <section className="side-card"><SectionTitle icon={Users} title="Aniversariantes"/><p className="muted">Celebre com os colegas da Secretaria.</p></section>
    </aside>
  </div>
</main>

<footer><div className="footer-brand"><span className="gov">Estado<br/>da Bahia</span><strong>SDE</strong></div><div>SECRETARIA DE DESENVOLVIMENTO ECONÔMICO<br/><small>Governo do Estado da Bahia</small></div><div className="footer-links">DOCUMENTOS &nbsp; | &nbsp; PRIVACIDADE &nbsp; | &nbsp; CONTATO</div></footer>
</div>
}