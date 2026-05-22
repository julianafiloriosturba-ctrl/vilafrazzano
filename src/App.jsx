import { useState, useRef } from "react";

const TC="#c05a3a",GOLD="#b8843a",VERDE="#3d6b4a",DARK="#1c1008";
const QUARTOS=["Suíte Reale (King)","Suíte Allegra (Casal+Solteiro)","Suíte Armonia (Família)","Suíte Serena (2 Casal+Solteiro)","Quarto Condiviso Compartilhado"];
const fmtCPF=v=>{v=v.replace(/\D/g,"");v=v.replace(/(\d{3})(\d)/,"$1.$2");v=v.replace(/(\d{3})(\d)/,"$1.$2");v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");return v.slice(0,14);};

const MENU=[
  {id:"home",l:"🏠 Início"},
  {id:"quartos",l:"🛏 Quartos"},
  {id:"checkin",l:"🔑 Check-in"},
  {id:"checkout",l:"🚪 Check-out"},
  {id:"casa",l:"🏠 Casa"},
  {id:"acesso",l:"🚗 Acesso"},
  {id:"passeios",l:"🗺 Passeios"},
  {id:"parceiros",l:"🤝 Parceiros"},
  {id:"regras",l:"📋 Regras"},
  {id:"form",l:"✍️ Formulário"},
  {id:"avaliacao",l:"⭐ Avaliação"},
  {id:"admin",l:"🔒 Admin"}
];

let _res=null;

export default function App(){
  const [pg,setPg]=useState("home");
  const [res,setResState]=useState(null);
  const [adm,setAdm]=useState(false);
  const setRes=r=>{_res=r;setResState(r);};

  return(
    <div style={{fontFamily:"'Segoe UI',sans-serif",background:"#fdfaf6",minHeight:"100vh",color:"#1a1008"}}>
      <div style={{background:DARK,padding:"12px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:99,borderBottom:"1px solid rgba(192,90,58,.3)"}}>
        <p style={{fontFamily:"Georgia,serif",fontSize:"1.1rem",color:"#fdf8f2",margin:0}}>Vila <em style={{color:TC}}>Frazzano</em></p>
        <select value={pg} onChange={e=>setPg(e.target.value)} style={{background:DARK,color:"#fdf8f2",border:"1px solid rgba(192,90,58,.4)",borderRadius:6,padding:"6px 10px",fontSize:".73rem",cursor:"pointer"}}>
          {MENU.map(m=><option key={m.id} value={m.id}>{m.l}</option>)}
        </select>
      </div>
      {pg==="home"&&<Home ir={setPg}/>}
      {pg==="quartos"&&<Quartos/>}
      {pg==="checkin"&&<Checkin/>}
      {pg==="checkout"&&<Checkout/>}
      {pg==="casa"&&<Casa/>}
      {pg==="acesso"&&<Acesso/>}
      {pg==="passeios"&&<Passeios/>}
      {pg==="parceiros"&&<Parceiros/>}
      {pg==="regras"&&<Regras/>}
      {pg==="form"&&<Formulario res={res} setRes={setRes}/>}
      {pg==="avaliacao"&&<Avaliacao/>}
      {pg==="admin"&&<Admin res={res} setRes={setRes} adm={adm} setAdm={setAdm}/>}
    </div>
  );
}

function Home({ir}){
  return(
    <div>
      <div style={{background:"linear-gradient(150deg,#1c1008,#301810,#5c2c18,#7a3820)",minHeight:"85vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"60px 20px 48px"}}>
        <p style={{fontSize:".65rem",letterSpacing:".35em",textTransform:"uppercase",color:TC,fontWeight:700,marginBottom:12}}>🦁 Porto das Dunas · Aquiraz, CE</p>
        <h1 style={{fontFamily:"Georgia,serif",fontSize:"clamp(2.6rem,7vw,4.8rem)",color:"#fdf8f2",lineHeight:1.05,margin:0}}>Vila <em style={{color:TC}}>Frazzano</em></h1>
        <p style={{fontSize:".72rem",letterSpacing:".15em",textTransform:"uppercase",color:"rgba(253,248,242,.38)",marginTop:10}}>Av. Mandacarú, 248 · Porto das Dunas</p>
        <div style={{width:36,height:2,background:TC,margin:"20px auto"}}/>
        <p style={{fontFamily:"Georgia,serif",fontStyle:"italic",fontSize:"1.05rem",color:"rgba(253,248,242,.72)",maxWidth:460,lineHeight:1.5}}>Seja bem-vindo! Preparamos tudo com carinho para que sua estadia seja confortável e especial.</p>
        <div style={{display:"flex",gap:24,margin:"30px 0 0",flexWrap:"wrap",justifyContent:"center"}}>
          {[["20","Hóspedes"],["4","Suítes"],["1","Jacuzzi"],["5'","Beach Park"]].map(([v,l])=>(
            <div key={l} style={{textAlign:"center"}}><span style={{fontFamily:"Georgia,serif",fontSize:"2.2rem",color:"#fdf8f2",display:"block",lineHeight:1}}>{v}</span><span style={{fontSize:".6rem",letterSpacing:".16em",textTransform:"uppercase",color:"rgba(253,248,242,.35)"}}>{l}</span></div>
          ))}
        </div>
        <div style={{display:"flex",gap:10,marginTop:28,flexWrap:"wrap",justifyContent:"center"}}>
          <button onClick={()=>ir("form")} style={{background:TC,color:"#fff",border:"none",padding:"12px 24px",borderRadius:7,fontSize:".76rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",cursor:"pointer"}}>✍️ Fazer Check-in</button>
          <button onClick={()=>ir("quartos")} style={{background:"transparent",color:"rgba(253,248,242,.8)",border:"1px solid rgba(253,248,242,.25)",padding:"11px 22px",borderRadius:7,fontSize:".76rem",fontWeight:700,cursor:"pointer"}}>Ver Quartos</button>
        </div>
        <div style={{marginTop:24}}>
          <a href="https://www.instagram.com/vilafrazzano" target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",gap:8,color:"rgba(253,248,242,.7)",fontSize:".78rem",textDecoration:"none",padding:"8px 16px",border:"1px solid rgba(253,248,242,.2)",borderRadius:20}}>
            <span style={{fontSize:"1.1rem"}}>📷</span> @vilafrazzano
          </a>
        </div>
      </div>
      <div style={{padding:"40px 20px",background:"#f4efe6"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <p style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700,marginBottom:6}}>Navegue pelo guia</p>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"1.8rem",marginBottom:20}}>Tudo que você <em style={{color:TC}}>precisa</em></h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",gap:10}}>
            {[{id:"quartos",i:"🛏",t:"Quartos"},{id:"checkin",i:"🔑",t:"Check-in"},{id:"checkout",i:"🚪",t:"Check-out"},{id:"casa",i:"🏠",t:"Usar a Casa"},{id:"acesso",i:"🚗",t:"Portão & App"},{id:"passeios",i:"🗺",t:"Passeios"},{id:"parceiros",i:"🤝",t:"Parceiros"},{id:"regras",i:"📋",t:"Regras"},{id:"form",i:"✍️",t:"Formulário"},{id:"avaliacao",i:"⭐",t:"Avaliação"}].map(m=>(
              <button key={m.id} onClick={()=>ir(m.id)} style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:10,padding:"16px 12px",textAlign:"center",cursor:"pointer"}}>
                <span style={{fontSize:"1.5rem",display:"block",marginBottom:6}}>{m.i}</span>
                <span style={{fontSize:".78rem",fontWeight:700,color:"#3a2010"}}>{m.t}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:DARK,padding:"32px 20px",textAlign:"center"}}>
        <p style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:GOLD,marginBottom:14}}>📞 Contato</p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <a href="https://wa.me/5585991727796" target="_blank" rel="noopener" style={{background:"#25d366",color:"#fff",padding:"11px 20px",borderRadius:7,textDecoration:"none",fontSize:".76rem",fontWeight:700}}>💬 Recepção (85) 99172-7796</a>
          <a href="https://wa.me/5585998320570" target="_blank" rel="noopener" style={{background:"#dc3545",color:"#fff",padding:"11px 20px",borderRadius:7,textDecoration:"none",fontSize:".76rem",fontWeight:700}}>🚨 Urgência (85) 99832-0570</a>
        </div>
        <p style={{fontSize:".72rem",color:"rgba(253,248,242,.22)",marginTop:20}}>Av. Mandacarú, 248 · Porto das Dunas · Aquiraz CE · CNPJ 52.622.605/0001-18</p>
      </div>
    </div>
  );
}

function Quartos(){
  const qs=[{n:1,i:"👑",nm:"Suíte Reale",c:"King Size",d:"Cama king size, banheiro privativo.",t:"✓ Banheiro privativo com hidromassagem · 2 pessoas",sb:false},{n:2,i:"🌿",nm:"Suíte Allegra",c:"Casal + Solteiro elevada com escorregador",d:"Cama casal e solteiro, banheiro privativo.",t:"✓ Banheiro privativo · até 3 pessoas",sb:false},{n:3,i:"🌊",nm:"Suíte Armonia",c:"Família",d:"2 Cama casal, banheiro privativo.",t:"✓ Banheiro privativo · 4 pessoas",sb:false},{n:4,i:"☀️",nm:"Suíte Serena",c:"2 Casal + Solteiro",d:"2 Cama casal e solteiro, banheiro privativo.",t:"✓ Banheiro privativo · até 5 pessoas",sb:false},{n:5,i:"🤝",nm:"Quarto Condiviso Compartilhado",c:"2 Casal + Beliche",d:"Sem banheiro privativo. Para grupos grandes.",t:"⚠ Sem banheiro privativo - até 6 pessoas",sb:true}];
  return(
    <div style={{padding:"44px 20px",background:"#f4efe6"}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>🛏 Acomodações</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"8px 0 12px"}}>Nossos <em style={{color:TC}}>Quartos</em></h2>
        <p style={{color:"#7a6450",fontSize:".9rem",marginBottom:24,maxWidth:520}}>Informe no formulário quem dorme em qual quarto — montamos apenas as camas utilizadas.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:13}}>
          {qs.map(q=>(
            <div key={q.n} style={{background:"#fff",border:"1px solid #e0d5c5",borderLeft:"3px solid "+(q.sb?GOLD:TC),borderRadius:10,padding:"20px 18px"}}>
              <span style={{fontSize:"1.5rem"}}>{q.i}</span>
              <p style={{fontFamily:"Georgia,serif",fontSize:"1.05rem",color:"#3a2010",margin:"8px 0 3px"}}>{q.nm}</p>
              <p style={{fontSize:".67rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:q.sb?GOLD:TC,marginBottom:8}}>{q.c}</p>
              <p style={{fontSize:".83rem",color:"#7a6450",marginBottom:10}}>{q.d}</p>
              <span style={{display:"inline-block",background:q.sb?"rgba(184,132,58,.1)":"rgba(192,90,58,.08)",color:q.sb?GOLD:TC,fontSize:".62rem",fontWeight:700,padding:"3px 10px",borderRadius:20}}>{q.t}</span>
            </div>
          ))}
        </div>
        <div style={{marginTop:14,padding:"13px 16px",background:"#fff8f0",border:"1px solid rgba(192,90,58,.2)",borderRadius:8,fontSize:".84rem",color:"#7a6450"}}>ℹ️ <strong style={{color:TC}}>Importante:</strong> informe a disposição no formulário de check-in.</div>
      </div>
    </div>
  );
}

function Checkin(){
  return(
    <div style={{padding:"44px 20px",background:DARK}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:GOLD,fontWeight:700}}>🔑 Chegada</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",color:"#fdf8f2",margin:"8px 0 20px"}}>Procedimento de <em style={{color:TC}}>Check-in</em></h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:24}}>
          <div style={{background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,padding:16,textAlign:"center"}}>
            <span style={{fontSize:".58rem",letterSpacing:".22em",textTransform:"uppercase",color:GOLD,display:"block",marginBottom:6}}>Check-in</span>
            <span style={{fontFamily:"Georgia,serif",fontSize:"1.6rem",color:"#fdf8f2",display:"block"}}>15h – 22h</span>
            <span style={{fontSize:".66rem",color:"rgba(253,248,242,.33)"}}>a partir das 15:00</span>
          </div>
          <div style={{background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,padding:16,textAlign:"center"}}>
            <span style={{fontSize:".58rem",letterSpacing:".22em",textTransform:"uppercase",color:GOLD,display:"block",marginBottom:6}}>Localização</span>
            <a href="https://maps.google.com/?q=Av+Mandacarú+248+Porto+das+Dunas+Aquiraz+CE" target="_blank" rel="noopener" style={{fontFamily:"Georgia,serif",fontSize:"1.1rem",color:TC,textDecoration:"none",display:"block"}}>📍 Ver no Mapa</a>
            <span style={{fontSize:".66rem",color:"rgba(253,248,242,.33)"}}>Av. Mandacarú, 248</span>
          </div>
        </div>
        {[["1","Preencha o formulário","Acesse ✍️ Formulário e informe dados de todos os hóspedes."],["2","Pague o caução — R$ 1.000","Via PIX antes da entrada. Devolvido após vistoria e quitação da energia."],["3","Receba os acessos","Código das fechaduras enviado via WhatsApp próximo ao check-in."],["4","Leitura do contador","Ao chegar, informaremos a numeração do contador de energia para registro inicial."],["5","Informe a chegada","Avise horário aproximado com antecedência e mande mensagem antes de sair."]].map(([n,t,d])=>(
          <div key={n} style={{display:"flex",gap:12,marginBottom:16}}>
            <div style={{width:27,height:27,borderRadius:"50%",border:"1.5px solid "+GOLD,color:GOLD,fontFamily:"Georgia,serif",fontSize:".86rem",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>{n}</div>
            <div><p style={{fontSize:".88rem",fontWeight:600,color:"#fdf8f2",marginBottom:2}}>{t}</p><p style={{fontSize:".81rem",color:"rgba(253,248,242,.5)"}}>{d}</p></div>
          </div>
        ))}
        <div style={{background:"rgba(184,132,58,.1)",border:"1px solid rgba(184,132,58,.25)",borderRadius:8,padding:15,textAlign:"center",marginTop:8}}>
          <p style={{fontSize:".58rem",letterSpacing:".2em",textTransform:"uppercase",color:"rgba(253,248,242,.35)",marginBottom:4}}>PIX — CNPJ</p>
          <strong style={{color:GOLD,fontSize:".93rem",display:"block"}}>52.622.605/0001-18</strong>
          <span style={{fontSize:".72rem",color:"rgba(253,248,242,.35)"}}>HBM Locações para Temporada LTDA</span>
        </div>
        <div style={{background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",borderRadius:10,padding:18,marginTop:16}}>
          <p style={{fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:GOLD,fontWeight:700,marginBottom:12}}>📶 Wi-Fi</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {[["Rede","Pedro Brito"],["Senha","antonio1"]].map(([l,v])=>(
              <div key={l} style={{background:"rgba(255,255,255,.05)",borderRadius:8,padding:11}}>
                <p style={{fontSize:".58rem",letterSpacing:".18em",textTransform:"uppercase",color:"rgba(253,248,242,.38)",marginBottom:4}}>{l}</p>
                <p style={{fontFamily:"Georgia,serif",fontSize:"1.25rem",color:"#fdf8f2",margin:0}}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkout(){
  return(
    <div style={{padding:"44px 20px"}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>🚪 Saída</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"8px 0 20px"}}>Procedimento de <em style={{color:TC}}>Check-out</em></h2>
        <div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,padding:24}}>
          <div style={{background:"rgba(192,90,58,.08)",borderRadius:8,padding:16,marginBottom:20,textAlign:"center"}}>
            <p style={{fontSize:".58rem",letterSpacing:".22em",textTransform:"uppercase",color:TC,marginBottom:6}}>Horário de saída</p>
            <p style={{fontFamily:"Georgia,serif",fontSize:"1.8rem",color:TC,margin:0}}>Até 13h</p>
          </div>
          {[["1","Avise a saída","Envie mensagem por WhatsApp informando que o imóvel foi liberado."],["2","Vistoria agendada","Iremos enviar uma pessoa para vistoria do imóvel e leitura final do contador de energia."],["3","Check-out aos domingos","Se a saída for no domingo, a vistoria pode ser postergada para segunda-feira."],["4","Cálculo da energia","Consumo cobrado a R$ 1,25 por kWh. Valor será descontado do caução."],["5","Reembolso do caução","Após vistoria sem danos e quitação da energia, faremos o reembolso diretamente no PIX do pagamento."]].map(([n,t,d])=>(
            <div key={n} style={{display:"flex",gap:12,marginBottom:16}}>
              <div style={{width:27,height:27,borderRadius:"50%",border:"1.5px solid "+TC,color:TC,fontFamily:"Georgia,serif",fontSize:".86rem",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>{n}</div>
              <div><p style={{fontSize:".88rem",fontWeight:600,color:"#3a2010",marginBottom:2}}>{t}</p><p style={{fontSize:".81rem",color:"#7a6450"}}>{d}</p></div>
            </div>
          ))}
          <div style={{background:"#fff8f0",border:"1px solid rgba(192,90,58,.2)",borderRadius:8,padding:14,marginTop:20}}>
            <p style={{fontSize:".84rem",color:"#7a6450",lineHeight:1.65}}><strong style={{color:TC}}>Importante:</strong> O reembolso do caução é feito via PIX para a mesma conta que fez o pagamento inicial, após confirmação de que não houve danos ao imóvel e quitação total do consumo de energia elétrica.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Casa(){
  const VidBtn=({url,t})=>(
    <a href={url} target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",gap:7,background:TC,color:"#fff",padding:"9px 16px",borderRadius:7,fontSize:".73rem",fontWeight:700,textDecoration:"none",marginBottom:12}}>▶ {t}</a>
  );
  return(
    <div style={{padding:"44px 20px"}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>🏠 Instruções</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"8px 0 20px"}}>Como usar <em style={{color:TC}}>tudo</em></h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:16}}>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,overflow:"hidden"}}>
            <div style={{background:`linear-gradient(135deg,${TC},#a34830)`,padding:"15px 18px",display:"flex",alignItems:"center",gap:11}}>
              <span style={{fontSize:"1.7rem"}}>🔐</span>
              <h3 style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#fff",margin:0}}>Fechadura Eletrônica</h3>
            </div>
            <div style={{padding:18}}>
              <VidBtn url="https://www.youtube.com/shorts/YmlOAkqjygI" t="Ver vídeo — Fechadura"/>
              <ul style={{paddingLeft:14}}>
                {["Digite o código enviado via WhatsApp","SEMPRE finalizar com # após o código","Uma fechadura: portão pequeno de entrada","Outra fechadura: porta da cozinha"].map(it=><li key={it} style={{fontSize:".83rem",color:"#7a6450",marginBottom:6,lineHeight:1.5}}>{it}</li>)}
              </ul>
              <div style={{background:"#fff8f0",borderLeft:"3px solid "+TC,padding:"8px 12px",borderRadius:"0 6px 6px 0",fontSize:".79rem",color:"#7a6450",marginTop:10}}>⚠️ <strong style={{color:TC}}>Sempre terminar com #</strong></div>
            </div>
          </div>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,overflow:"hidden"}}>
            <div style={{background:`linear-gradient(135deg,${TC},#a34830)`,padding:"15px 18px",display:"flex",alignItems:"center",gap:11}}>
              <span style={{fontSize:"1.7rem"}}>🍳</span>
              <h3 style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#fff",margin:0}}>Fogão de Indução</h3>
            </div>
            <div style={{padding:18}}>
              <VidBtn url="https://www.youtube.com/shorts/W6vvG0NxkQE" t="Ver vídeo — Fogão"/>
              <ul style={{paddingLeft:14}}>
                {["Superfície SEMPRE limpa e seca antes de usar","Use apenas utensílios compatíveis com indução","Ligue, coloque a panela, ajuste a potência","Desligue após o uso"].map(it=><li key={it} style={{fontSize:".83rem",color:"#7a6450",marginBottom:6,lineHeight:1.5}}>{it}</li>)}
              </ul>
              <div style={{background:"#fff8f0",borderLeft:"3px solid "+TC,padding:"8px 12px",borderRadius:"0 6px 6px 0",fontSize:".79rem",color:"#7a6450",marginTop:10}}>⚠️ <strong style={{color:TC}}>Superfície molhada causa erro!</strong></div>
            </div>
          </div>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,overflow:"hidden"}}>
            <div style={{background:`linear-gradient(135deg,${TC},#a34830)`,padding:"15px 18px",display:"flex",alignItems:"center",gap:11}}>
              <span style={{fontSize:"1.7rem"}}>💨</span>
              <h3 style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#fff",margin:0}}>Ventilador de Teto</h3>
            </div>
            <div style={{padding:18}}>
              <VidBtn url="https://www.youtube.com/shorts/CWjGqzEWhcc" t="Ver vídeo — Ventilador"/>
              <ul style={{paddingLeft:14}}>
                {["Disponível na Sala e Suíte Harmonia","Controlado por controle remoto","Botões: ligar/desligar, velocidade 1-2-3, direção","Controle fica sobre a cômoda do quarto"].map(it=><li key={it} style={{fontSize:".83rem",color:"#7a6450",marginBottom:6,lineHeight:1.5}}>{it}</li>)}
              </ul>
            </div>
          </div>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,overflow:"hidden"}}>
            <div style={{background:`linear-gradient(135deg,${TC},#a34830)`,padding:"15px 18px",display:"flex",alignItems:"center",gap:11}}>
              <span style={{fontSize:"1.7rem"}}>🛁</span>
              <h3 style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#fff",margin:0}}>Jacuzzi — Ordem Obrigatória</h3>
            </div>
            <div style={{padding:18}}>
              <VidBtn url="https://www.youtube.com/shorts/EzpQGPX9-DA" t="Ver vídeo — Spa/Jacuzzi"/>
              <p style={{fontSize:".84rem",color:"#7a6450",marginBottom:12}}><strong>Siga exatamente esta ordem:</strong></p>
              <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap",marginBottom:14}}>
                {[["1","Motor 1"],["2","Motor 2"],["3","Cascata"],["4","Água Quente"]].map(([n,l],i,arr)=>(
                  <div key={n} style={{display:"flex",alignItems:"center",gap:6}}>
                    <div style={{background:"#f4efe6",border:"1px solid #e0d5c5",borderRadius:8,padding:"7px 10px",textAlign:"center",minWidth:55}}>
                      <div style={{fontFamily:"Georgia,serif",fontSize:"1.25rem",color:TC,lineHeight:1}}>{n}</div>
                      <div style={{fontSize:".63rem",color:"#7a6450",marginTop:2}}>{l}</div>
                    </div>
                    {i<arr.length-1&&<span style={{color:TC,fontSize:".9rem"}}>→</span>}
                  </div>
                ))}
              </div>
              <ul style={{paddingLeft:14}}>
                {["Luz verde = aquecimento ativo","NÃO acionar 4 antes do 3","Quando quente, desligar o aquecimento","Máximo 6 pessoas"].map(it=><li key={it} style={{fontSize:".83rem",color:"#7a6450",marginBottom:5}}>{it}</li>)}
              </ul>
              <div style={{background:"#fff8f0",borderLeft:"3px solid "+TC,padding:"8px 12px",borderRadius:"0 6px 6px 0",fontSize:".79rem",color:"#7a6450",marginTop:10}}>⚠️ <strong style={{color:TC}}>NUNCA ligar aquecimento (4) antes da cascata (3)!</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Acesso(){
  return(
    <div style={{padding:"44px 20px",background:"#f4efe6"}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>🚗 Portão & App</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"8px 0 20px"}}>Acessos da <em style={{color:TC}}>Vila</em></h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:13}}>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderTop:"3px solid "+TC,borderRadius:10,padding:"20px 18px"}}>
            <p style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#3a2010",marginBottom:12}}>🚗 Portão Principal</p>
            <p style={{fontSize:".83rem",color:"#7a6450",marginBottom:7}}>• Funciona pelo app eWeLink</p>
            <p style={{fontSize:".83rem",color:"#7a6450",marginBottom:12}}>• Se não funcionar: entre pelo portão menor e puxe a alavanca manual</p>
            <a href="https://www.youtube.com/shorts/CWjGqzEWhcc" target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",gap:6,background:TC,color:"#fff",padding:"8px 14px",borderRadius:6,fontSize:".72rem",fontWeight:700,textDecoration:"none"}}>▶ Vídeo — Portão manual</a>
          </div>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderTop:"3px solid "+TC,borderRadius:10,padding:"20px 18px"}}>
            <p style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#3a2010",marginBottom:12}}>🚗 Portão 2</p>
            <p style={{fontSize:".83rem",color:"#7a6450",marginBottom:7}}>• Abertura com chave física</p>
            <p style={{fontSize:".83rem",color:"#7a6450"}}>• ⚠️ A chave deve sempre permanecer no portão — não retirar!</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderTop:"3px solid "+TC,borderRadius:10,padding:"20px 18px"}}>
            <p style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#3a2010",marginBottom:12}}>🚶 Entrada & Cozinha</p>
            <p style={{fontSize:".83rem",color:"#7a6450",marginBottom:7}}>• Fechaduras eletrônicas — código via WhatsApp</p>
            <p style={{fontSize:".83rem",color:"#7a6450"}}>• Sempre finalizar com # após o código</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderTop:"3px solid "+TC,borderRadius:10,padding:"20px 18px"}}>
            <p style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#3a2010",marginBottom:12}}>💡 Luzes Externas</p>
            <p style={{fontSize:".83rem",color:"#7a6450",marginBottom:7}}>• Controladas pelo app eWeLink</p>
            <p style={{fontSize:".83rem",color:"#7a6450"}}>• Luzes internas: interruptores normais</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderTop:"3px solid "+GOLD,borderRadius:10,padding:"20px 18px"}}>
            <p style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#3a2010",marginBottom:12}}>📱 Login eWeLink</p>
            <div style={{background:"#f4efe6",borderRadius:7,padding:"12px 14px",fontSize:".81rem",color:"#7a6450",marginBottom:10}}>
              <p style={{marginBottom:4}}>🌍 País: <strong style={{color:"#3a2010"}}>Italy (+39)</strong></p>
              <p style={{marginBottom:4}}>📧 <strong style={{color:"#3a2010"}}>vilafrazzano@gmail.com</strong></p>
              <p>🔒 <strong style={{color:"#3a2010"}}>vilaitalia123</strong></p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.coolkit" target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",gap:6,background:VERDE,color:"#fff",padding:"8px 14px",borderRadius:6,fontSize:".72rem",fontWeight:700,textDecoration:"none",marginRight:8}}>📱 Android</a>
            <a href="https://apps.apple.com/app/ewelink-smart-home/id1035163158" target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",gap:6,background:"#000",color:"#fff",padding:"8px 14px",borderRadius:6,fontSize:".72rem",fontWeight:700,textDecoration:"none"}}>🍎 iOS</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Passeios(){
  const [aba,setAba]=useState("l");
  const lugares=[{i:"🎢",n:"Beach Park",d:"5 min de carro",t:"Maior parque aquático da América Latina.",link:"https://maps.google.com/?q=Beach+Park+Aquiraz"},{i:"🌿",n:"Engenhoca Park",d:"15 min de carro",t:"Tirolesa e aventuras. Desconto especial + água de coco!",badge:"🎟 Desconto"},{i:"🌃",n:"Vila do Mar Azul",d:"5 min de carro",t:"Restaurantes, lojas e entretenimento noturno.",link:"https://maps.google.com/?q=Vila+do+Mar+Azul+Porto+das+Dunas"},{i:"🌊",n:"Mar & Rio Pacoti",d:"20 min a pé",t:"Encontro do mar com o rio — paisagem única.",link:"https://maps.google.com/?q=Foz+Rio+Pacoti+Aquiraz"},{i:"⛵",n:"Veleiro Beira-mar",d:"30 min de carro",t:"Pôr do sol pela orla de Fortaleza.",badge:"🗓 Reservar"},{i:"🇮🇹",n:"Vila Italia — Café/Jantar",d:"2 min de carro",t:"Café buffet R$30 · Jantar 17h–21h · Com reserva.",link:"https://maps.google.com/?q=Pousada+Vila+Italia+Porto+das+Dunas"},{i:"🍝",n:"Armonia Lounge",d:"8 min de carro",t:"Restaurante italiano, ambiente sofisticado.",link:"https://maps.google.com/?q=Armonia+Lounge+Porto+das+Dunas"},{i:"🏖",n:"Biro Beach",d:"2 min de carro",t:"Barraca de praia, drinks e frutos do mar.",link:"https://maps.google.com/?q=Biro+Beach+Porto+das+Dunas"},{i:"🛒",n:"Supermercados",d:"3-4 min de carro",t:"Carnaúba (3'), São Luiz (4') e Pinheiro (4'). São Luiz e Pinheiro servem refeições no peso."}];
  const exc=[{i:"🏝",n:"Jericoacoara — 1 Dia",d:"Saída 03h · Retorno 20h",its:["Guia incluso","Lagoa do Paraíso","Buraco Azul (taxa não inclusa)","Árvore da Preguiça","Pedra Furada"]},{i:"🏖",n:"3 Praias em 1 Dia",d:"Falésias, Mar & Cultura",its:["Praia das Fontes","Morro Branco","Canoa Quebrada"]},{i:"🚙",n:"Buggy",d:"Dunas & Emoção",t:"Aventura nas dunas cearenses."},{i:"⛵",n:"Veleiro Beira-mar",d:"30 min de carro",t:"Passeio ao entardecer.",badge:"🗓 Reserva necessária"}];
  const Card=({p})=>(
    <div style={{background:"#fff",border:"1px solid #e0d5c5",borderLeft:"3px solid "+TC,borderRadius:10,padding:"18px 16px"}}>
      <span style={{fontSize:"1.5rem"}}>{p.i}</span>
      <p style={{fontFamily:"Georgia,serif",fontSize:".98rem",color:"#3a2010",margin:"7px 0 3px"}}>{p.n}</p>
      <p style={{fontSize:".65rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:TC,marginBottom:7}}>{p.d}</p>
      {p.t&&<p style={{fontSize:".82rem",color:"#7a6450",lineHeight:1.55,marginBottom:6}}>{p.t}</p>}
      {p.its&&<ul style={{paddingLeft:14}}>{p.its.map(it=><li key={it} style={{fontSize:".81rem",color:"#7a6450",lineHeight:1.65}}>{it}</li>)}</ul>}
      {p.link&&<a href={p.link} target="_blank" rel="noopener" style={{display:"inline-block",marginTop:8,fontSize:".66rem",fontWeight:700,color:VERDE,borderBottom:"1px solid "+VERDE,textDecoration:"none"}}>📍 Como chegar</a>}
      {p.badge&&<span style={{display:"inline-block",marginTop:8,padding:"3px 10px",borderRadius:20,background:"rgba(61,107,74,.1)",color:VERDE,fontSize:".63rem",fontWeight:700}}>{p.badge}</span>}
    </div>
  );
  return(
    <div style={{padding:"44px 20px"}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>🗺 Explore</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"8px 0 18px"}}>Passeios & <em style={{color:TC}}>Experiências</em></h2>
        <div style={{display:"flex",gap:8,marginBottom:20}}>
          {[["l","🏖 Lugares & Restaurantes"],["e","🚙 Excursões"]].map(([id,l])=>(
            <button key={id} onClick={()=>setAba(id)} style={{padding:"8px 16px",borderRadius:6,border:"1px solid "+(aba===id?TC:"#e0d5c5"),background:aba===id?TC:"#fff",color:aba===id?"#fff":"#7a6450",fontSize:".71rem",fontWeight:700,cursor:"pointer"}}>{l}</button>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:13}}>
          {aba==="l"&&lugares.map(p=><Card key={p.n} p={p}/>)}
          {aba==="e"&&exc.map(p=><Card key={p.n} p={p}/>)}
        </div>
      </div>
    </div>
  );
}

function Parceiros(){
  const parc=[
    {i:"📱",n:"ELEKTROID",loc:"EcoBeach Mall — Estacionamento",desc:"Loja de eletrônicos e acessórios",benef:"5% de desconto em quase todos os itens",obs:"Apresente o cupom de hóspede da Vila Frazzano"},
    {i:"🎡",n:"Super Máquinas Museu",loc:"Porto das Dunas",desc:"Museu interativo de máquinas e veículos",benef:"10% de desconto no ingresso",obs:"Válido apenas para ingressos de entrada"},
    {i:"🍔",n:"567 Burger",loc:"Franquia Porto das Dunas",desc:"Hamburgueria artesanal",benef:"Isenção da taxa de 10% do garçom + batata pequena grátis",obs:"Válido para pedidos no local"}
  ];
  return(
    <div style={{padding:"44px 20px"}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>🤝 Benefícios</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"8px 0 18px"}}>Parcerias <em style={{color:TC}}>Exclusivas</em></h2>
        <p style={{color:"#7a6450",fontSize:".9rem",marginBottom:24,maxWidth:580}}>Aproveite descontos e benefícios especiais em nossos parceiros. Basta informar que é hóspede da Vila Frazzano!</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:13}}>
          {parc.map(p=>(
            <div key={p.n} style={{background:"#fff",border:"1px solid #e0d5c5",borderTop:"3px solid "+GOLD,borderRadius:10,padding:"20px 18px"}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                <span style={{fontSize:"1.6rem"}}>{p.i}</span>
                <div>
                  <p style={{fontFamily:"Georgia,serif",fontSize:"1.05rem",color:"#3a2010",margin:0}}>{p.n}</p>
                  <p style={{fontSize:".68rem",color:"#7a6450",margin:"2px 0 0"}}>{p.loc}</p>
                </div>
              </div>
              <p style={{fontSize:".83rem",color:"#7a6450",marginBottom:10}}>{p.desc}</p>
              <div style={{background:"rgba(184,132,58,.08)",borderRadius:8,padding:"10px 12px",marginBottom:10}}>
                <p style={{fontSize:".72rem",fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:GOLD,marginBottom:4}}>🎁 Benefício</p>
                <p style={{fontSize:".85rem",color:"#3a2010",fontWeight:600,margin:0}}>{p.benef}</p>
              </div>
              <p style={{fontSize:".75rem",color:"#7a6450",fontStyle:"italic"}}>ℹ️ {p.obs}</p>
            </div>
          ))}
        </div>
        <div style={{marginTop:20,padding:"14px 18px",background:"#fff8f0",border:"1px solid rgba(192,90,58,.2)",borderRadius:10,fontSize:".84rem",color:"#7a6450",textAlign:"center"}}>
          💡 <strong style={{color:TC}}>Dica:</strong> Mencione que você é hóspede da Vila Frazzano para garantir seu desconto!
        </div>
      </div>
    </div>
  );
}

function Regras(){
  const rs=[{t:"🗑 Lixo",its:["Sem coleta seletiva na região","Deixar ensacado atrás da casa ou na esquina","Não espalhar dentro do imóvel"]},{t:"🔇 Som & Silêncio",its:["Silêncio das 22h às 7h — temos vizinhos próximos","❌ PROIBIDO paredão ou equipamentos de grande potência"]},{t:"🏊 Piscina & Jacuzzi",its:["Jacuzzi para até 6 pessoas","Sem bronzeador/protetor em excesso","Proibido copos de vidro","Crianças sempre supervisionadas"]},{t:"👥 Ocupação",its:["Apenas hóspedes da reserva","❌ Proibida entrada de visitantes","🎉 Festas exigem autorização prévia"]},{t:"🧹 Limpeza & Fogão",its:["Manter imóvel e cozinha organizados","Fogão: superfície limpa e seca antes de usar"]}];
  return(
    <div style={{padding:"44px 20px",background:"#f4efe6"}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>📋 Normas</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"8px 0 20px"}}>Regras da <em style={{color:TC}}>Vila</em></h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:13}}>
          {rs.map(r=>(
            <div key={r.t} style={{background:"#fff",border:"1px solid #e0d5c5",borderLeft:"3px solid "+TC,borderRadius:10,padding:"18px 16px"}}>
              <p style={{fontSize:".8rem",fontWeight:700,color:"#3a2010",marginBottom:10,paddingBottom:8,borderBottom:"1px solid #e0d5c5"}}>{r.t}</p>
              {r.its.map(it=><p key={it} style={{fontSize:".82rem",color:"#7a6450",marginBottom:7}}>• {it}</p>)}
            </div>
          ))}
        </div>
        <div style={{marginTop:13,padding:"13px 16px",background:"#fff8f0",border:"1px solid rgba(192,90,58,.2)",borderRadius:10,fontSize:".83rem",color:"#7a6450"}}>
          ⚠️ <strong style={{color:TC}}>Descumprimento</strong> pode resultar em checkout antecipado sem reembolso e/ou retenção do caução.
        </div>
      </div>
    </div>
  );
}

function Formulario({res,setRes}){
  const [enviado,setEnviado]=useState(!!res);
  const [numAcomp,setNumAcomp]=useState(0);
  const [numPlacas,setNumPlacas]=useState(1);
  const formRef=useRef(null);
  
  const enviar=(e)=>{
    e.preventDefault();
    const fd=new FormData(formRef.current);
    
    const titular={
      nome:fd.get('nome')||'',
      cpf:fd.get('cpf')||'',
      nasc:fd.get('nasc')||'',
      tel:fd.get('tel')||'',
      email:fd.get('email')||'',
      end:fd.get('end')||'',
      quarto:fd.get('quarto')||'',
      chegada:fd.get('chegada')||'',
      hora:fd.get('hora')||''
    };
    
    if(!titular.nome||!titular.cpf||!titular.nasc||!titular.tel||!titular.email||!titular.quarto||!titular.chegada||!titular.hora){
      alert("Preencha todos os campos obrigatórios (*).");
      return;
    }
    
    const acompanhantes=[];
    for(let i=0;i<numAcomp;i++){
      const nome=fd.get(`ac_nome_${i}`)||'';
      const cpf=fd.get(`ac_cpf_${i}`)||'';
      if(!nome||!cpf){
        alert(`Preencha nome e CPF do hóspede ${i+2}.`);
        return;
      }
      acompanhantes.push({
        nome,
        cpf,
        email:fd.get(`ac_email_${i}`)||'',
        quarto:fd.get(`ac_quarto_${i}`)||''
      });
    }
    
    const placas=[];
    for(let i=0;i<numPlacas;i++){
      const p=fd.get(`placa_${i}`);
      if(p&&p.trim())placas.push(p.trim().toUpperCase());
    }
    
    setRes({
      timestamp:new Date().toISOString(),
      titular,
      qtd:parseInt(fd.get('qtd')),
      placas,
      acompanhantes
    });
    setEnviado(true);
  };
  
  const inp={width:"100%",padding:"10px 11px",border:"1px solid #e0d5c5",borderRadius:7,fontFamily:"inherit",fontSize:".87rem",color:"#1a1008",background:"#f4efe6",outline:"none",boxSizing:"border-box"};
  
  if(enviado){
    return(
      <div style={{padding:"44px 20px",textAlign:"center"}}>
        <div style={{maxWidth:440,margin:"0 auto",background:"#f0fff4",border:"1px solid rgba(61,107,74,.25)",borderRadius:12,padding:36}}>
          <span style={{fontSize:"3rem"}}>🎉</span>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"1.45rem",color:VERDE,margin:"12px 0 8px"}}>Check-in enviado!</h2>
          <p style={{fontSize:".88rem",color:"#7a6450"}}>Recebemos seus dados. Em breve você receberá o código via WhatsApp.</p>
          <p style={{marginTop:10,fontSize:".85rem",color:"#7a6450"}}><strong>Recepção:</strong> (85) 99172-7796</p>
        </div>
      </div>
    );
  }
  
  return(
    <div style={{padding:"44px 20px"}}>
      <div style={{maxWidth:700,margin:"0 auto"}}>
        <div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,overflow:"hidden"}}>
          <div style={{background:`linear-gradient(135deg,${TC},#a34830)`,padding:"18px 22px",color:"#fff"}}>
            <h2 style={{fontFamily:"Georgia,serif",fontSize:"1.25rem",margin:"0 0 4px"}}>Check-in — Vila Frazzano</h2>
            <p style={{fontSize:".8rem",color:"rgba(255,255,255,.75)",margin:0}}>Preencha os dados para liberar seu acesso.</p>
          </div>
          <div style={{padding:"22px 20px"}}>
            <form ref={formRef} onSubmit={enviar}>
              <p style={{fontSize:".73rem",color:"#7a6450",marginBottom:16}}><span style={{color:TC}}>*</span> Campos obrigatórios</p>
              <p style={{fontFamily:"Georgia,serif",fontSize:".97rem",color:"#3a2010",marginBottom:13,paddingBottom:8,borderBottom:"1px solid #e0d5c5"}}>👤 Titular</p>
              
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                <div style={{marginBottom:10}}>
                  <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>Nome completo *</label>
                  <input name="nome" style={inp} placeholder="Nome completo" type="text" required autoComplete="name"/>
                </div>
                <div style={{marginBottom:10}}>
                  <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>CPF *</label>
                  <input name="cpf" style={inp} placeholder="000.000.000-00" type="text" required inputMode="numeric"/>
                </div>
                <div style={{marginBottom:10}}>
                  <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>Data de nascimento *</label>
                  <input name="nasc" style={inp} type="date" required/>
                </div>
                <div style={{marginBottom:10}}>
                  <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>Telefone / WhatsApp *</label>
                  <input name="tel" style={inp} placeholder="(85) 99999-9999" type="tel" required autoComplete="tel"/>
                </div>
                <div style={{marginBottom:10}}>
                  <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>E-mail *</label>
                  <input name="email" style={inp} placeholder="email@exemplo.com" type="email" required autoComplete="email"/>
                </div>
                <div style={{marginBottom:10}}>
                  <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>Cidade / Estado *</label>
                  <input name="end" style={inp} placeholder="Fortaleza, CE" type="text" required/>
                </div>
                <div style={{marginBottom:10}}>
                  <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>Total de hóspedes *</label>
                  <select name="qtd" style={inp} required onChange={e=>setNumAcomp(Math.max(0,parseInt(e.target.value)-1))}>
                    {Array.from({length:20},(_,i)=><option key={i+1} value={i+1}>{i+1} pessoa{i>0?"s":""}</option>)}
                  </select>
                </div>
                <div style={{marginBottom:10}}>
                  <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>Seu quarto *</label>
                  <select name="quarto" style={inp} required>
                    <option value="">Selecione...</option>
                    {QUARTOS.map(q=><option key={q} value={q}>{q}</option>)}
                  </select>
                </div>
                <div style={{marginBottom:10}}>
                  <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>Data de chegada *</label>
                  <input name="chegada" style={inp} type="date" required/>
                </div>
                <div style={{marginBottom:10}}>
                  <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>Horário aproximado *</label>
                  <select name="hora" style={inp} required>
                    <option value="">Selecione...</option>
                    {["15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"].map(h=><option key={h} value={h}>{h}</option>)}
                  </select>
                </div>
              </div>
              
              {numAcomp>0&&(
                <div style={{marginTop:18}}>
                  <p style={{fontFamily:"Georgia,serif",fontSize:".97rem",color:"#3a2010",marginBottom:13,paddingBottom:8,borderBottom:"1px solid #e0d5c5"}}>👥 Acompanhantes</p>
                  {Array.from({length:numAcomp}).map((_,i)=>(
                    <div key={i} style={{background:"#f4efe6",borderRadius:8,padding:14,marginBottom:10}}>
                      <p style={{fontSize:".76rem",fontWeight:700,color:"#3a2010",marginBottom:10}}>Hóspede {i+2}</p>
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:9}}>
                        <div style={{marginBottom:10}}>
                          <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>Nome *</label>
                          <input name={`ac_nome_${i}`} style={inp} placeholder="Nome completo" type="text" required/>
                        </div>
                        <div style={{marginBottom:10}}>
                          <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>CPF *</label>
                          <input name={`ac_cpf_${i}`} style={inp} placeholder="000.000.000-00" type="text" required inputMode="numeric"/>
                        </div>
                        <div style={{marginBottom:10}}>
                          <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>E-mail</label>
                          <input name={`ac_email_${i}`} style={inp} placeholder="email@exemplo.com" type="email"/>
                        </div>
                        <div style={{marginBottom:10}}>
                          <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>Quarto</label>
                          <select name={`ac_quarto_${i}`} style={inp}>
                            <option value="">Selecione...</option>
                            {QUARTOS.map(q=><option key={q} value={q}>{q}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div style={{marginTop:18}}>
                <p style={{fontFamily:"Georgia,serif",fontSize:".97rem",color:"#3a2010",marginBottom:10,paddingBottom:8,borderBottom:"1px solid #e0d5c5"}}>🚗 Veículos</p>
                {Array.from({length:numPlacas}).map((_,i)=>(
                  <div key={i} style={{display:"flex",gap:8,marginBottom:8}}>
                    <input name={`placa_${i}`} style={{...inp,textTransform:"uppercase"}} placeholder={i===0?"ABC-1234":"ABC-1234 (opcional)"} type="text"/>
                    {numPlacas>1&&i===numPlacas-1&&(
                      <button type="button" onClick={()=>setNumPlacas(p=>p-1)} style={{background:"none",border:"none",color:"#aaa",cursor:"pointer",fontSize:"1.1rem"}}>✕</button>
                    )}
                  </div>
                ))}
                {numPlacas<5&&(
                  <button type="button" onClick={()=>setNumPlacas(p=>p+1)} style={{background:"none",border:"1px dashed #e0d5c5",color:"#7a6450",padding:"8px",borderRadius:7,fontSize:".73rem",cursor:"pointer",width:"100%",marginTop:4}}>+ Adicionar veículo</button>
                )}
              </div>
              
              <button type="submit" style={{background:TC,color:"#fff",border:"none",padding:"13px",borderRadius:7,width:"100%",marginTop:20,fontFamily:"inherit",fontSize:".8rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",cursor:"pointer"}}>✅ Enviar Check-in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
function Avaliacao(){
  return(
    <div style={{padding:"44px 20px"}}>
      <div style={{maxWidth:700,margin:"0 auto"}}>
        <div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,padding:32,textAlign:"center"}}>
          <span style={{fontSize:"3rem",display:"block",marginBottom:14}}>⭐⭐⭐⭐⭐</span>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"1.6rem",color:"#3a2010",marginBottom:12}}>Obrigado por nos escolher!</h2>
          <p style={{fontSize:".92rem",color:"#7a6450",lineHeight:1.7,marginBottom:22,maxWidth:480,margin:"0 auto 22px"}}>
            Foi um prazer receber você na Vila Frazzano. Esperamos que sua estadia tenha sido confortável e especial.
          </p>
          <div style={{background:"#f4efe6",borderRadius:10,padding:20,marginBottom:20}}>
            <p style={{fontSize:".88rem",color:"#3a2010",fontWeight:600,marginBottom:12}}>📝 Algo para melhorar?</p>
            <p style={{fontSize:".85rem",color:"#7a6450",lineHeight:1.65}}>
              Se você teve algum problema ou sugestão para melhorarmos nossa estrutura, <strong style={{color:TC}}>por favor, nos fale diretamente</strong> pelo WhatsApp antes de avaliar publicamente.
            </p>
            <p style={{fontSize:".85rem",color:"#7a6450",lineHeight:1.65,marginTop:10}}>
              Levamos muito a sério cada feedback e temos uma equipe preparada para resolver qualquer questão — tanto durante quanto após a hospedagem.
            </p>
          </div>
          <div style={{background:"#fff8f0",border:"1px solid rgba(192,90,58,.2)",borderRadius:10,padding:18,marginBottom:20}}>
            <p style={{fontSize:".82rem",color:"#7a6450",lineHeight:1.65}}>
              💬 Sua opinião sincera nos ajuda a evoluir sem prejudicar nossa equipe que trabalha com dedicação todos os dias.
            </p>
          </div>
          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            <a href="https://wa.me/5585991727796" target="_blank" rel="noopener" style={{background:"#25d366",color:"#fff",padding:"12px 22px",borderRadius:7,textDecoration:"none",fontSize:".78rem",fontWeight:700}}>💬 Falar com a Recepção</a>
            <a href="https://www.instagram.com/vilafrazzano" target="_blank" rel="noopener" style={{background:TC,color:"#fff",padding:"12px 22px",borderRadius:7,textDecoration:"none",fontSize:".78rem",fontWeight:700}}>📷 Seguir no Instagram</a>
          </div>
          <p style={{fontSize:".76rem",color:"rgba(58,32,16,.4)",marginTop:20,fontStyle:"italic"}}>Esperamos receber você novamente em breve! ✨</p>
        </div>
      </div>
    </div>
  );
}

function Admin({res,setRes,adm,setAdm}){
  const [senha,setSenha]=useState("");
  const [erro,setErro]=useState(false);
  const login=()=>{if(senha==="frazzano2025"){setAdm(true);setErro(false);}else setErro(true);};
  const zerar=()=>{if(window.confirm("Zerar reserva atual?"))setRes(null);};
  if(!adm)return(<div style={{padding:"44px 20px",display:"flex",justifyContent:"center"}}><div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,padding:36,maxWidth:340,width:"100%",textAlign:"center"}}><span style={{fontSize:"2rem"}}>🔒</span><h3 style={{fontFamily:"Georgia,serif",fontSize:"1.25rem",color:"#3a2010",margin:"10px 0 6px"}}>Área Admin</h3><p style={{fontSize:".84rem",color:"#7a6450",marginBottom:16}}>Digite a senha de administrador.</p><input style={{width:"100%",padding:"10px 12px",border:"1px solid #e0d5c5",borderRadius:7,fontFamily:"inherit",fontSize:".88rem",background:"#f4efe6",outline:"none",boxSizing:"border-box"}} type="password" value={senha} onChange={e=>{setSenha(e.target.value);setErro(false);}} placeholder="Senha..." onKeyDown={e=>e.key==="Enter"&&login()}/>{erro&&<p style={{color:"#dc3545",fontSize:".78rem",marginTop:8}}>Senha incorreta.</p>}<button style={{background:TC,color:"#fff",border:"none",padding:"12px",borderRadius:7,width:"100%",marginTop:12,fontFamily:"inherit",fontSize:".8rem",fontWeight:700,cursor:"pointer"}} onClick={login}>Entrar</button></div></div>);
  return(
    <div style={{padding:"44px 20px"}}>
      <div style={{maxWidth:820,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10,marginBottom:22}}>
          <div><span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>🔒 Admin</span><h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"6px 0 0"}}>Reserva <em style={{color:TC}}>Atual</em></h2></div>
          <div style={{display:"flex",gap:9,flexWrap:"wrap"}}>
            {res&&<button onClick={zerar} style={{background:"#dc3545",color:"#fff",border:"none",padding:"10px 18px",borderRadius:7,fontSize:".75rem",fontWeight:700,cursor:"pointer"}}>🗑 Zerar</button>}
            <button onClick={()=>window.print()} style={{background:"#f4efe6",color:"#3a2010",border:"1px solid #e0d5c5",padding:"10px 18px",borderRadius:7,fontSize:".75rem",fontWeight:700,cursor:"pointer"}}>🖨 Imprimir</button>
            <button onClick={()=>setAdm(false)} style={{background:"none",color:"#dc3545",border:"1px solid #dc3545",padding:"10px 18px",borderRadius:7,fontSize:".75rem",fontWeight:700,cursor:"pointer"}}>Sair</button>
          </div>
        </div>
        {!res?(<div style={{textAlign:"center",padding:"48px 0",color:"#7a6450"}}><span style={{fontSize:"2.5rem",display:"block",marginBottom:12}}>📋</span>Nenhum check-in recebido ainda.</div>):(
          <div>
            <div style={{background:DARK,borderRadius:12,padding:20,color:"#fdf8f2",marginBottom:18}}>
              <p style={{fontFamily:"Georgia,serif",fontSize:"1.05rem",color:GOLD,marginBottom:12}}>📊 Resumo</p>
              {[["Titular",res.titular.nome],["Total",res.qtd+" hóspedes"],["Chegada",res.titular.chegada?new Date(res.titular.chegada+"T12:00").toLocaleDateString("pt-BR"):"—"],["Horário",res.titular.hora],["Veículos",res.placas.length?res.placas.join(", "):"Nenhum"],["Status","✅ Check-in recebido"]].map(([l,v])=>(
                <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:"1px solid rgba(255,255,255,.07)",fontSize:".83rem"}}>
                  <span style={{color:"rgba(253,248,242,.52)"}}>{l}</span><strong style={{color:"#fdf8f2"}}>{v}</strong>
                </div>
              ))}
            </div>
            <div style={{background:"#fff",border:"1px solid #e0d5c5",borderLeft:"4px solid "+TC,borderRadius:10,padding:"18px 16px",marginBottom:10}}>
              <span style={{fontSize:".6rem",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:TC}}>👑 Titular</span>
              <p style={{fontFamily:"Georgia,serif",fontSize:"1.08rem",color:"#3a2010",margin:"6px 0 10px"}}>{res.titular.nome}</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
                {[["CPF",res.titular.cpf],["Nasc",res.titular.nasc?new Date(res.titular.nasc+"T12:00").toLocaleDateString("pt-BR"):"—"],["Tel",res.titular.tel],["E-mail",res.titular.email],["Endereço",res.titular.end]].map(([l,v])=>(
                  <span key={l} style={{background:"#f4efe6",border:"1px solid #e0d5c5",padding:"3px 9px",borderRadius:5,fontSize:".77rem",color:"#7a6450"}}><strong style={{color:"#3a2010"}}>{l}:</strong> {v}</span>
                ))}
              </div>
              <span style={{display:"inline-block",marginTop:8,background:"rgba(192,90,58,.1)",color:TC,fontSize:".63rem",fontWeight:700,padding:"3px 10px",borderRadius:12}}>{res.titular.quarto}</span>
            </div>
            {res.acompanhantes.map((a,i)=>(
              <div key={i} style={{background:"#fff",border:"1px solid #e0d5c5",borderLeft:"4px solid "+GOLD,borderRadius:10,padding:"16px 16px",marginBottom:9}}>
                <span style={{fontSize:".6rem",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:GOLD}}>Hóspede {i+2}</span>
                <p style={{fontFamily:"Georgia,serif",fontSize:"1.03rem",color:"#3a2010",margin:"5px 0 9px"}}>{a.nome}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
                  <span style={{background:"#f4efe6",border:"1px solid #e0d5c5",padding:"3px 9px",borderRadius:5,fontSize:".77rem",color:"#7a6450"}}><strong style={{color:"#3a2010"}}>CPF:</strong> {a.cpf}</span>
                  {a.email&&<span style={{background:"#f4efe6",border:"1px solid #e0d5c5",padding:"3px 9px",borderRadius:5,fontSize:".77rem",color:"#7a6450"}}><strong style={{color:"#3a2010"}}>E-mail:</strong> {a.email}</span>}
                </div>
                {a.quarto&&<span style={{display:"inline-block",marginTop:7,background:"rgba(184,132,58,.1)",color:GOLD,fontSize:".63rem",fontWeight:700,padding:"3px 10px",borderRadius:12}}>{a.quarto}</span>}
              </div>
            ))}
            {res.placas.length>0&&(
              <div style={{background:"#fff",border:"1px solid #e0d5c5",borderLeft:"4px solid "+VERDE,borderRadius:10,padding:"16px 16px"}}>
                <span style={{fontSize:".6rem",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:VERDE}}>🚗 Veículos</span>
                <div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:8}}>
                  {res.placas.map(p=><span key={p} style={{background:"#f4efe6",border:"1px solid #e0d5c5",padding:"5px 14px",borderRadius:5,fontSize:".9rem",fontWeight:700,color:"#3a2010"}}>{p}</span>)}
                </div>
              </div>
            )}
          </div>
        )}
        <div style={{marginTop:28,display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <a href="https://wa.me/5585991727796" target="_blank" rel="noopener" style={{background:"#25d366",color:"#fff",padding:"12px",borderRadius:7,textDecoration:"none",fontSize:".75rem",fontWeight:700,textAlign:"center",display:"block"}}>💬 Recepção (85) 99172-7796</a>
          <a href="https://wa.me/5585998320570" target="_blank" rel="noopener" style={{background:"#dc3545",color:"#fff",padding:"12px",borderRadius:7,textDecoration:"none",fontSize:".75rem",fontWeight:700,textAlign:"center",display:"block"}}>🚨 Urgência (85) 99832-0570</a>
        </div>
      </div>
    </div>
  );
}          {[["20","Hóspedes"],["4","Suítes"],["1","Jacuzzi"],["5'","Beach Park"]].map(([v,l])=>(
            <div key={l} style={{textAlign:"center"}}><span style={{fontFamily:"Georgia,serif",fontSize:"2.2rem",color:"#fdf8f2",display:"block",lineHeight:1}}>{v}</span><span style={{fontSize:".6rem",letterSpacing:".16em",textTransform:"uppercase",color:"rgba(253,248,242,.35)"}}>{l}</span></div>
          ))}
        </div>
        <div style={{display:"flex",gap:10,marginTop:28,flexWrap:"wrap",justifyContent:"center"}}>
          <button onClick={()=>ir("form")} style={{background:TC,color:"#fff",border:"none",padding:"12px 24px",borderRadius:7,fontSize:".76rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",cursor:"pointer"}}>✍️ Fazer Check-in</button>
          <button onClick={()=>ir("quartos")} style={{background:"transparent",color:"rgba(253,248,242,.8)",border:"1px solid rgba(253,248,242,.25)",padding:"11px 22px",borderRadius:7,fontSize:".76rem",fontWeight:700,cursor:"pointer"}}>Ver Quartos</button>
        </div>
        <div style={{marginTop:24}}>
          <a href="https://www.instagram.com/vilafrazzano" target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",gap:8,color:"rgba(253,248,242,.7)",fontSize:".78rem",textDecoration:"none",padding:"8px 16px",border:"1px solid rgba(253,248,242,.2)",borderRadius:20}}>
            <span style={{fontSize:"1.1rem"}}>📷</span> @vilafrazzano
          </a>
        </div>
      </div>
      <div style={{padding:"40px 20px",background:"#f4efe6"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <p style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700,marginBottom:6}}>Navegue pelo guia</p>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"1.8rem",marginBottom:20}}>Tudo que você <em style={{color:TC}}>precisa</em></h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",gap:10}}>
            {[{id:"quartos",i:"🛏",t:"Quartos"},{id:"checkin",i:"🔑",t:"Check-in"},{id:"checkout",i:"🚪",t:"Check-out"},{id:"casa",i:"🏠",t:"Usar a Casa"},{id:"acesso",i:"🚗",t:"Portão & App"},{id:"passeios",i:"🗺",t:"Passeios"},{id:"parceiros",i:"🤝",t:"Parceiros"},{id:"regras",i:"📋",t:"Regras"},{id:"form",i:"✍️",t:"Formulário"},{id:"avaliacao",i:"⭐",t:"Avaliação"}].map(m=>(
              <button key={m.id} onClick={()=>ir(m.id)} style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:10,padding:"16px 12px",textAlign:"center",cursor:"pointer"}}>
                <span style={{fontSize:"1.5rem",display:"block",marginBottom:6}}>{m.i}</span>
                <span style={{fontSize:".78rem",fontWeight:700,color:"#3a2010"}}>{m.t}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:DARK,padding:"32px 20px",textAlign:"center"}}>
        <p style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:GOLD,marginBottom:14}}>📞 Contato</p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <a href="https://wa.me/5585991727796" target="_blank" rel="noopener" style={{background:"#25d366",color:"#fff",padding:"11px 20px",borderRadius:7,textDecoration:"none",fontSize:".76rem",fontWeight:700}}>💬 Recepção (85) 99172-7796</a>
          <a href="https://wa.me/5585998320570" target="_blank" rel="noopener" style={{background:"#dc3545",color:"#fff",padding:"11px 20px",borderRadius:7,textDecoration:"none",fontSize:".76rem",fontWeight:700}}>🚨 Urgência (85) 99832-0570</a>
        </div>
        <p style={{fontSize:".72rem",color:"rgba(253,248,242,.22)",marginTop:20}}>Av. Mandacarú, 248 · Porto das Dunas · Aquiraz CE · CNPJ 52.622.605/0001-18</p>
      </div>
    </div>
  );
}

function Quartos(){
  const qs=[{n:1,i:"👑",nm:"Suíte Reale",c:"King Size",d:"Cama king size, banheiro privativo.",t:"✓ Banheiro privativo com hidromassagem · 2 pessoas",sb:false},{n:2,i:"🌿",nm:"Suíte Allegra",c:"Casal + Solteiro elevada com escorregador",d:"Cama casal e solteiro, banheiro privativo.",t:"✓ Banheiro privativo · até 3 pessoas",sb:false},{n:3,i:"🌊",nm:"Suíte Armonia",c:"Família",d:"2 Cama casal, banheiro privativo.",t:"✓ Banheiro privativo · 4 pessoas",sb:false},{n:4,i:"☀️",nm:"Suíte Serena",c:"2 Casal + Solteiro",d:"2 Cama casal e solteiro, banheiro privativo.",t:"✓ Banheiro privativo · até 5 pessoas",sb:false},{n:5,i:"🤝",nm:"Quarto Condiviso Compartilhado",c:"2 Casal + Beliche",d:"Sem banheiro privativo. Para grupos grandes.",t:"⚠ Sem banheiro privativo - até 6 pessoas",sb:true}];
  return(
    <div style={{padding:"44px 20px",background:"#f4efe6"}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>🛏 Acomodações</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"8px 0 12px"}}>Nossos <em style={{color:TC}}>Quartos</em></h2>
        <p style={{color:"#7a6450",fontSize:".9rem",marginBottom:24,maxWidth:520}}>Informe no formulário quem dorme em qual quarto — montamos apenas as camas utilizadas.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:13}}>
          {qs.map(q=>(
            <div key={q.n} style={{background:"#fff",border:"1px solid #e0d5c5",borderLeft:"3px solid "+(q.sb?GOLD:TC),borderRadius:10,padding:"20px 18px"}}>
              <span style={{fontSize:"1.5rem"}}>{q.i}</span>
              <p style={{fontFamily:"Georgia,serif",fontSize:"1.05rem",color:"#3a2010",margin:"8px 0 3px"}}>{q.nm}</p>
              <p style={{fontSize:".67rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:q.sb?GOLD:TC,marginBottom:8}}>{q.c}</p>
              <p style={{fontSize:".83rem",color:"#7a6450",marginBottom:10}}>{q.d}</p>
              <span style={{display:"inline-block",background:q.sb?"rgba(184,132,58,.1)":"rgba(192,90,58,.08)",color:q.sb?GOLD:TC,fontSize:".62rem",fontWeight:700,padding:"3px 10px",borderRadius:20}}>{q.t}</span>
            </div>
          ))}
        </div>
        <div style={{marginTop:14,padding:"13px 16px",background:"#fff8f0",border:"1px solid rgba(192,90,58,.2)",borderRadius:8,fontSize:".84rem",color:"#7a6450"}}>ℹ️ <strong style={{color:TC}}>Importante:</strong> informe a disposição no formulário de check-in.</div>
      </div>
    </div>
  );
}

function Checkin(){
  return(
    <div style={{padding:"44px 20px",background:DARK}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:GOLD,fontWeight:700}}>🔑 Chegada</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",color:"#fdf8f2",margin:"8px 0 20px"}}>Procedimento de <em style={{color:TC}}>Check-in</em></h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:24}}>
          <div style={{background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,padding:16,textAlign:"center"}}>
            <span style={{fontSize:".58rem",letterSpacing:".22em",textTransform:"uppercase",color:GOLD,display:"block",marginBottom:6}}>Check-in</span>
            <span style={{fontFamily:"Georgia,serif",fontSize:"1.6rem",color:"#fdf8f2",display:"block"}}>15h – 22h</span>
            <span style={{fontSize:".66rem",color:"rgba(253,248,242,.33)"}}>a partir das 15:00</span>
          </div>
          <div style={{background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,padding:16,textAlign:"center"}}>
            <span style={{fontSize:".58rem",letterSpacing:".22em",textTransform:"uppercase",color:GOLD,display:"block",marginBottom:6}}>Localização</span>
            <a href="https://maps.google.com/?q=Av+Mandacarú+248+Porto+das+Dunas+Aquiraz+CE" target="_blank" rel="noopener" style={{fontFamily:"Georgia,serif",fontSize:"1.1rem",color:TC,textDecoration:"none",display:"block"}}>📍 Ver no Mapa</a>
            <span style={{fontSize:".66rem",color:"rgba(253,248,242,.33)"}}>Av. Mandacarú, 248</span>
          </div>
        </div>
        {[["1","Preencha o formulário","Acesse ✍️ Formulário e informe dados de todos os hóspedes."],["2","Pague o caução — R$ 1.000","Via PIX antes da entrada. Devolvido após vistoria e quitação da energia."],["3","Receba os acessos","Código das fechaduras enviado via WhatsApp próximo ao check-in."],["4","Leitura do contador","Ao chegar, informaremos a numeração do contador de energia para registro inicial."],["5","Informe a chegada","Avise horário aproximado com antecedência e mande mensagem antes de sair."]].map(([n,t,d])=>(
          <div key={n} style={{display:"flex",gap:12,marginBottom:16}}>
            <div style={{width:27,height:27,borderRadius:"50%",border:"1.5px solid "+GOLD,color:GOLD,fontFamily:"Georgia,serif",fontSize:".86rem",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>{n}</div>
            <div><p style={{fontSize:".88rem",fontWeight:600,color:"#fdf8f2",marginBottom:2}}>{t}</p><p style={{fontSize:".81rem",color:"rgba(253,248,242,.5)"}}>{d}</p></div>
          </div>
        ))}
        <div style={{background:"rgba(184,132,58,.1)",border:"1px solid rgba(184,132,58,.25)",borderRadius:8,padding:15,textAlign:"center",marginTop:8}}>
          <p style={{fontSize:".58rem",letterSpacing:".2em",textTransform:"uppercase",color:"rgba(253,248,242,.35)",marginBottom:4}}>PIX — CNPJ</p>
          <strong style={{color:GOLD,fontSize:".93rem",display:"block"}}>52.622.605/0001-18</strong>
          <span style={{fontSize:".72rem",color:"rgba(253,248,242,.35)"}}>HBM Locações para Temporada LTDA</span>
        </div>
        <div style={{background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",borderRadius:10,padding:18,marginTop:16}}>
          <p style={{fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:GOLD,fontWeight:700,marginBottom:12}}>📶 Wi-Fi</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {[["Rede","Pedro Brito"],["Senha","antonio1"]].map(([l,v])=>(
              <div key={l} style={{background:"rgba(255,255,255,.05)",borderRadius:8,padding:11}}>
                <p style={{fontSize:".58rem",letterSpacing:".18em",textTransform:"uppercase",color:"rgba(253,248,242,.38)",marginBottom:4}}>{l}</p>
                <p style={{fontFamily:"Georgia,serif",fontSize:"1.25rem",color:"#fdf8f2",margin:0}}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkout(){
  return(
    <div style={{padding:"44px 20px"}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>🚪 Saída</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"8px 0 20px"}}>Procedimento de <em style={{color:TC}}>Check-out</em></h2>
        <div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,padding:24}}>
          <div style={{background:"rgba(192,90,58,.08)",borderRadius:8,padding:16,marginBottom:20,textAlign:"center"}}>
            <p style={{fontSize:".58rem",letterSpacing:".22em",textTransform:"uppercase",color:TC,marginBottom:6}}>Horário de saída</p>
            <p style={{fontFamily:"Georgia,serif",fontSize:"1.8rem",color:TC,margin:0}}>Até 13h</p>
          </div>
          {[["1","Avise a saída","Envie mensagem por WhatsApp informando que o imóvel foi liberado."],["2","Vistoria agendada","Iremos enviar uma pessoa para vistoria do imóvel e leitura final do contador de energia."],["3","Check-out aos domingos","Se a saída for no domingo, a vistoria pode ser postergada para segunda-feira."],["4","Cálculo da energia","Consumo cobrado a R$ 1,25 por kWh. Valor será descontado do caução."],["5","Reembolso do caução","Após vistoria sem danos e quitação da energia, faremos o reembolso diretamente no PIX do pagamento."]].map(([n,t,d])=>(
            <div key={n} style={{display:"flex",gap:12,marginBottom:16}}>
              <div style={{width:27,height:27,borderRadius:"50%",border:"1.5px solid "+TC,color:TC,fontFamily:"Georgia,serif",fontSize:".86rem",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>{n}</div>
              <div><p style={{fontSize:".88rem",fontWeight:600,color:"#3a2010",marginBottom:2}}>{t}</p><p style={{fontSize:".81rem",color:"#7a6450"}}>{d}</p></div>
            </div>
          ))}
          <div style={{background:"#fff8f0",border:"1px solid rgba(192,90,58,.2)",borderRadius:8,padding:14,marginTop:20}}>
            <p style={{fontSize:".84rem",color:"#7a6450",lineHeight:1.65}}><strong style={{color:TC}}>Importante:</strong> O reembolso do caução é feito via PIX para a mesma conta que fez o pagamento inicial, após confirmação de que não houve danos ao imóvel e quitação total do consumo de energia elétrica.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Casa(){
  const VidBtn=({url,t})=>(
    <a href={url} target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",gap:7,background:TC,color:"#fff",padding:"9px 16px",borderRadius:7,fontSize:".73rem",fontWeight:700,textDecoration:"none",marginBottom:12}}>▶ {t}</a>
  );
  return(
    <div style={{padding:"44px 20px"}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>🏠 Instruções</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"8px 0 20px"}}>Como usar <em style={{color:TC}}>tudo</em></h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:16}}>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,overflow:"hidden"}}>
            <div style={{background:`linear-gradient(135deg,${TC},#a34830)`,padding:"15px 18px",display:"flex",alignItems:"center",gap:11}}>
              <span style={{fontSize:"1.7rem"}}>🔐</span>
              <h3 style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#fff",margin:0}}>Fechadura Eletrônica</h3>
            </div>
            <div style={{padding:18}}>
              <VidBtn url="https://www.youtube.com/shorts/YmlOAkqjygI" t="Ver vídeo — Fechadura"/>
              <ul style={{paddingLeft:14}}>
                {["Digite o código enviado via WhatsApp","SEMPRE finalizar com # após o código","Uma fechadura: portão pequeno de entrada","Outra fechadura: porta da cozinha"].map(it=><li key={it} style={{fontSize:".83rem",color:"#7a6450",marginBottom:6,lineHeight:1.5}}>{it}</li>)}
              </ul>
              <div style={{background:"#fff8f0",borderLeft:"3px solid "+TC,padding:"8px 12px",borderRadius:"0 6px 6px 0",fontSize:".79rem",color:"#7a6450",marginTop:10}}>⚠️ <strong style={{color:TC}}>Sempre terminar com #</strong></div>
            </div>
          </div>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,overflow:"hidden"}}>
            <div style={{background:`linear-gradient(135deg,${TC},#a34830)`,padding:"15px 18px",display:"flex",alignItems:"center",gap:11}}>
              <span style={{fontSize:"1.7rem"}}>🍳</span>
              <h3 style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#fff",margin:0}}>Fogão de Indução</h3>
            </div>
            <div style={{padding:18}}>
              <VidBtn url="https://www.youtube.com/shorts/W6vvG0NxkQE" t="Ver vídeo — Fogão"/>
              <ul style={{paddingLeft:14}}>
                {["Superfície SEMPRE limpa e seca antes de usar","Use apenas utensílios compatíveis com indução","Ligue, coloque a panela, ajuste a potência","Desligue após o uso"].map(it=><li key={it} style={{fontSize:".83rem",color:"#7a6450",marginBottom:6,lineHeight:1.5}}>{it}</li>)}
              </ul>
              <div style={{background:"#fff8f0",borderLeft:"3px solid "+TC,padding:"8px 12px",borderRadius:"0 6px 6px 0",fontSize:".79rem",color:"#7a6450",marginTop:10}}>⚠️ <strong style={{color:TC}}>Superfície molhada causa erro!</strong></div>
            </div>
          </div>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,overflow:"hidden"}}>
            <div style={{background:`linear-gradient(135deg,${TC},#a34830)`,padding:"15px 18px",display:"flex",alignItems:"center",gap:11}}>
              <span style={{fontSize:"1.7rem"}}>💨</span>
              <h3 style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#fff",margin:0}}>Ventilador de Teto</h3>
            </div>
            <div style={{padding:18}}>
              <VidBtn url="https://www.youtube.com/shorts/CWjGqzEWhcc" t="Ver vídeo — Ventilador"/>
              <ul style={{paddingLeft:14}}>
                {["Disponível na Sala e Suíte Harmonia","Controlado por controle remoto","Botões: ligar/desligar, velocidade 1-2-3, direção","Controle fica sobre a cômoda do quarto"].map(it=><li key={it} style={{fontSize:".83rem",color:"#7a6450",marginBottom:6,lineHeight:1.5}}>{it}</li>)}
              </ul>
            </div>
          </div>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,overflow:"hidden"}}>
            <div style={{background:`linear-gradient(135deg,${TC},#a34830)`,padding:"15px 18px",display:"flex",alignItems:"center",gap:11}}>
              <span style={{fontSize:"1.7rem"}}>🛁</span>
              <h3 style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#fff",margin:0}}>Jacuzzi — Ordem Obrigatória</h3>
            </div>
            <div style={{padding:18}}>
              <VidBtn url="https://www.youtube.com/shorts/EzpQGPX9-DA" t="Ver vídeo — Spa/Jacuzzi"/>
              <p style={{fontSize:".84rem",color:"#7a6450",marginBottom:12}}><strong>Siga exatamente esta ordem:</strong></p>
              <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap",marginBottom:14}}>
                {[["1","Motor 1"],["2","Motor 2"],["3","Cascata"],["4","Água Quente"]].map(([n,l],i,arr)=>(
                  <div key={n} style={{display:"flex",alignItems:"center",gap:6}}>
                    <div style={{background:"#f4efe6",border:"1px solid #e0d5c5",borderRadius:8,padding:"7px 10px",textAlign:"center",minWidth:55}}>
                      <div style={{fontFamily:"Georgia,serif",fontSize:"1.25rem",color:TC,lineHeight:1}}>{n}</div>
                      <div style={{fontSize:".63rem",color:"#7a6450",marginTop:2}}>{l}</div>
                    </div>
                    {i<arr.length-1&&<span style={{color:TC,fontSize:".9rem"}}>→</span>}
                  </div>
                ))}
              </div>
              <ul style={{paddingLeft:14}}>
                {["Luz verde = aquecimento ativo","NÃO acionar 4 antes do 3","Quando quente, desligar o aquecimento","Máximo 6 pessoas"].map(it=><li key={it} style={{fontSize:".83rem",color:"#7a6450",marginBottom:5}}>{it}</li>)}
              </ul>
              <div style={{background:"#fff8f0",borderLeft:"3px solid "+TC,padding:"8px 12px",borderRadius:"0 6px 6px 0",fontSize:".79rem",color:"#7a6450",marginTop:10}}>⚠️ <strong style={{color:TC}}>NUNCA ligar aquecimento (4) antes da cascata (3)!</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Acesso(){
  return(
    <div style={{padding:"44px 20px",background:"#f4efe6"}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>🚗 Portão & App</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"8px 0 20px"}}>Acessos da <em style={{color:TC}}>Vila</em></h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:13}}>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderTop:"3px solid "+TC,borderRadius:10,padding:"20px 18px"}}>
            <p style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#3a2010",marginBottom:12}}>🚗 Portão Principal</p>
            <p style={{fontSize:".83rem",color:"#7a6450",marginBottom:7}}>• Funciona pelo app eWeLink</p>
            <p style={{fontSize:".83rem",color:"#7a6450",marginBottom:12}}>• Se não funcionar: entre pelo portão menor e puxe a alavanca manual</p>
            <a href="https://www.youtube.com/shorts/CWjGqzEWhcc" target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",gap:6,background:TC,color:"#fff",padding:"8px 14px",borderRadius:6,fontSize:".72rem",fontWeight:700,textDecoration:"none"}}>▶ Vídeo — Portão manual</a>
          </div>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderTop:"3px solid "+TC,borderRadius:10,padding:"20px 18px"}}>
            <p style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#3a2010",marginBottom:12}}>🚗 Portão 2</p>
            <p style={{fontSize:".83rem",color:"#7a6450",marginBottom:7}}>• Abertura com chave física</p>
            <p style={{fontSize:".83rem",color:"#7a6450"}}>• ⚠️ A chave deve sempre permanecer no portão — não retirar!</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderTop:"3px solid "+TC,borderRadius:10,padding:"20px 18px"}}>
            <p style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#3a2010",marginBottom:12}}>🚶 Entrada & Cozinha</p>
            <p style={{fontSize:".83rem",color:"#7a6450",marginBottom:7}}>• Fechaduras eletrônicas — código via WhatsApp</p>
            <p style={{fontSize:".83rem",color:"#7a6450"}}>• Sempre finalizar com # após o código</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderTop:"3px solid "+TC,borderRadius:10,padding:"20px 18px"}}>
            <p style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#3a2010",marginBottom:12}}>💡 Luzes Externas</p>
            <p style={{fontSize:".83rem",color:"#7a6450",marginBottom:7}}>• Controladas pelo app eWeLink</p>
            <p style={{fontSize:".83rem",color:"#7a6450"}}>• Luzes internas: interruptores normais</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #e0d5c5",borderTop:"3px solid "+GOLD,borderRadius:10,padding:"20px 18px"}}>
            <p style={{fontFamily:"Georgia,serif",fontSize:"1rem",color:"#3a2010",marginBottom:12}}>📱 Login eWeLink</p>
            <div style={{background:"#f4efe6",borderRadius:7,padding:"12px 14px",fontSize:".81rem",color:"#7a6450",marginBottom:10}}>
              <p style={{marginBottom:4}}>🌍 País: <strong style={{color:"#3a2010"}}>Italy (+39)</strong></p>
              <p style={{marginBottom:4}}>📧 <strong style={{color:"#3a2010"}}>vilafrazzano@gmail.com</strong></p>
              <p>🔒 <strong style={{color:"#3a2010"}}>vilaitalia123</strong></p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.coolkit" target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",gap:6,background:VERDE,color:"#fff",padding:"8px 14px",borderRadius:6,fontSize:".72rem",fontWeight:700,textDecoration:"none",marginRight:8}}>📱 Android</a>
            <a href="https://apps.apple.com/app/ewelink-smart-home/id1035163158" target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",gap:6,background:"#000",color:"#fff",padding:"8px 14px",borderRadius:6,fontSize:".72rem",fontWeight:700,textDecoration:"none"}}>🍎 iOS</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Passeios(){
  const [aba,setAba]=useState("l");
  const lugares=[{i:"🎢",n:"Beach Park",d:"5 min de carro",t:"Maior parque aquático da América Latina.",link:"https://maps.google.com/?q=Beach+Park+Aquiraz"},{i:"🌿",n:"Engenhoca Park",d:"15 min de carro",t:"Tirolesa e aventuras. Desconto especial + água de coco!",badge:"🎟 Desconto"},{i:"🌃",n:"Vila do Mar Azul",d:"5 min de carro",t:"Restaurantes, lojas e entretenimento noturno.",link:"https://maps.google.com/?q=Vila+do+Mar+Azul+Porto+das+Dunas"},{i:"🌊",n:"Mar & Rio Pacoti",d:"20 min a pé",t:"Encontro do mar com o rio — paisagem única.",link:"https://maps.google.com/?q=Foz+Rio+Pacoti+Aquiraz"},{i:"⛵",n:"Veleiro Beira-mar",d:"30 min de carro",t:"Pôr do sol pela orla de Fortaleza.",badge:"🗓 Reservar"},{i:"🇮🇹",n:"Vila Italia — Café/Jantar",d:"2 min de carro",t:"Café buffet R$30 · Jantar 17h–21h · Com reserva.",link:"https://maps.google.com/?q=Pousada+Vila+Italia+Porto+das+Dunas"},{i:"🍝",n:"Armonia Lounge",d:"8 min de carro",t:"Restaurante italiano, ambiente sofisticado.",link:"https://maps.google.com/?q=Armonia+Lounge+Porto+das+Dunas"},{i:"🏖",n:"Biro Beach",d:"2 min de carro",t:"Barraca de praia, drinks e frutos do mar.",link:"https://maps.google.com/?q=Biro+Beach+Porto+das+Dunas"},{i:"🛒",n:"Supermercados",d:"3-4 min de carro",t:"Carnaúba (3'), São Luiz (4') e Pinheiro (4'). São Luiz e Pinheiro servem refeições no peso."}];
  const exc=[{i:"🏝",n:"Jericoacoara — 1 Dia",d:"Saída 03h · Retorno 20h",its:["Guia incluso","Lagoa do Paraíso","Buraco Azul (taxa não inclusa)","Árvore da Preguiça","Pedra Furada"]},{i:"🏖",n:"3 Praias em 1 Dia",d:"Falésias, Mar & Cultura",its:["Praia das Fontes","Morro Branco","Canoa Quebrada"]},{i:"🚙",n:"Buggy",d:"Dunas & Emoção",t:"Aventura nas dunas cearenses."},{i:"⛵",n:"Veleiro Beira-mar",d:"30 min de carro",t:"Passeio ao entardecer.",badge:"🗓 Reserva necessária"}];
  const Card=({p})=>(
    <div style={{background:"#fff",border:"1px solid #e0d5c5",borderLeft:"3px solid "+TC,borderRadius:10,padding:"18px 16px"}}>
      <span style={{fontSize:"1.5rem"}}>{p.i}</span>
      <p style={{fontFamily:"Georgia,serif",fontSize:".98rem",color:"#3a2010",margin:"7px 0 3px"}}>{p.n}</p>
      <p style={{fontSize:".65rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:TC,marginBottom:7}}>{p.d}</p>
      {p.t&&<p style={{fontSize:".82rem",color:"#7a6450",lineHeight:1.55,marginBottom:6}}>{p.t}</p>}
      {p.its&&<ul style={{paddingLeft:14}}>{p.its.map(it=><li key={it} style={{fontSize:".81rem",color:"#7a6450",lineHeight:1.65}}>{it}</li>)}</ul>}
      {p.link&&<a href={p.link} target="_blank" rel="noopener" style={{display:"inline-block",marginTop:8,fontSize:".66rem",fontWeight:700,color:VERDE,borderBottom:"1px solid "+VERDE,textDecoration:"none"}}>📍 Como chegar</a>}
      {p.badge&&<span style={{display:"inline-block",marginTop:8,padding:"3px 10px",borderRadius:20,background:"rgba(61,107,74,.1)",color:VERDE,fontSize:".63rem",fontWeight:700}}>{p.badge}</span>}
    </div>
  );
  return(
    <div style={{padding:"44px 20px"}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>🗺 Explore</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"8px 0 18px"}}>Passeios & <em style={{color:TC}}>Experiências</em></h2>
        <div style={{display:"flex",gap:8,marginBottom:20}}>
          {[["l","🏖 Lugares & Restaurantes"],["e","🚙 Excursões"]].map(([id,l])=>(
            <button key={id} onClick={()=>setAba(id)} style={{padding:"8px 16px",borderRadius:6,border:"1px solid "+(aba===id?TC:"#e0d5c5"),background:aba===id?TC:"#fff",color:aba===id?"#fff":"#7a6450",fontSize:".71rem",fontWeight:700,cursor:"pointer"}}>{l}</button>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:13}}>
          {aba==="l"&&lugares.map(p=><Card key={p.n} p={p}/>)}
          {aba==="e"&&exc.map(p=><Card key={p.n} p={p}/>)}
        </div>
      </div>
    </div>
  );
}

function Parceiros(){
  const parc=[
    {i:"📱",n:"ELEKTROID",loc:"EcoBeach Mall — Estacionamento",desc:"Loja de eletrônicos e acessórios",benef:"5% de desconto em quase todos os itens",obs:"Apresente o cupom de hóspede da Vila Frazzano"},
    {i:"🎡",n:"Super Máquinas Museu",loc:"Porto das Dunas",desc:"Museu interativo de máquinas e veículos",benef:"10% de desconto no ingresso",obs:"Válido apenas para ingressos de entrada"},
    {i:"🍔",n:"567 Burger",loc:"Franquia Porto das Dunas",desc:"Hamburgueria artesanal",benef:"Isenção da taxa de 10% do garçom + batata pequena grátis",obs:"Válido para pedidos no local"}
  ];
  return(
    <div style={{padding:"44px 20px"}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>🤝 Benefícios</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"8px 0 18px"}}>Parcerias <em style={{color:TC}}>Exclusivas</em></h2>
        <p style={{color:"#7a6450",fontSize:".9rem",marginBottom:24,maxWidth:580}}>Aproveite descontos e benefícios especiais em nossos parceiros. Basta informar que é hóspede da Vila Frazzano!</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:13}}>
          {parc.map(p=>(
            <div key={p.n} style={{background:"#fff",border:"1px solid #e0d5c5",borderTop:"3px solid "+GOLD,borderRadius:10,padding:"20px 18px"}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                <span style={{fontSize:"1.6rem"}}>{p.i}</span>
                <div>
                  <p style={{fontFamily:"Georgia,serif",fontSize:"1.05rem",color:"#3a2010",margin:0}}>{p.n}</p>
                  <p style={{fontSize:".68rem",color:"#7a6450",margin:"2px 0 0"}}>{p.loc}</p>
                </div>
              </div>
              <p style={{fontSize:".83rem",color:"#7a6450",marginBottom:10}}>{p.desc}</p>
              <div style={{background:"rgba(184,132,58,.08)",borderRadius:8,padding:"10px 12px",marginBottom:10}}>
                <p style={{fontSize:".72rem",fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:GOLD,marginBottom:4}}>🎁 Benefício</p>
                <p style={{fontSize:".85rem",color:"#3a2010",fontWeight:600,margin:0}}>{p.benef}</p>
              </div>
              <p style={{fontSize:".75rem",color:"#7a6450",fontStyle:"italic"}}>ℹ️ {p.obs}</p>
            </div>
          ))}
        </div>
        <div style={{marginTop:20,padding:"14px 18px",background:"#fff8f0",border:"1px solid rgba(192,90,58,.2)",borderRadius:10,fontSize:".84rem",color:"#7a6450",textAlign:"center"}}>
          💡 <strong style={{color:TC}}>Dica:</strong> Mencione que você é hóspede da Vila Frazzano para garantir seu desconto!
        </div>
      </div>
    </div>
  );
}

function Regras(){
  const rs=[{t:"🗑 Lixo",its:["Sem coleta seletiva na região","Deixar ensacado atrás da casa ou na esquina","Não espalhar dentro do imóvel"]},{t:"🔇 Som & Silêncio",its:["Silêncio das 22h às 7h — temos vizinhos próximos","❌ PROIBIDO paredão ou equipamentos de grande potência"]},{t:"🏊 Piscina & Jacuzzi",its:["Jacuzzi para até 6 pessoas","Sem bronzeador/protetor em excesso","Proibido copos de vidro","Crianças sempre supervisionadas"]},{t:"👥 Ocupação",its:["Apenas hóspedes da reserva","❌ Proibida entrada de visitantes","🎉 Festas exigem autorização prévia"]},{t:"🧹 Limpeza & Fogão",its:["Manter imóvel e cozinha organizados","Fogão: superfície limpa e seca antes de usar"]}];
  return(
    <div style={{padding:"44px 20px",background:"#f4efe6"}}>
      <div style={{maxWidth:860,margin:"0 auto"}}>
        <span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>📋 Normas</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"8px 0 20px"}}>Regras da <em style={{color:TC}}>Vila</em></h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:13}}>
          {rs.map(r=>(
            <div key={r.t} style={{background:"#fff",border:"1px solid #e0d5c5",borderLeft:"3px solid "+TC,borderRadius:10,padding:"18px 16px"}}>
              <p style={{fontSize:".8rem",fontWeight:700,color:"#3a2010",marginBottom:10,paddingBottom:8,borderBottom:"1px solid #e0d5c5"}}>{r.t}</p>
              {r.its.map(it=><p key={it} style={{fontSize:".82rem",color:"#7a6450",marginBottom:7}}>• {it}</p>)}
            </div>
          ))}
        </div>
        <div style={{marginTop:13,padding:"13px 16px",background:"#fff8f0",border:"1px solid rgba(192,90,58,.2)",borderRadius:10,fontSize:".83rem",color:"#7a6450"}}>
          ⚠️ <strong style={{color:TC}}>Descumprimento</strong> pode resultar em checkout antecipado sem reembolso e/ou retenção do caução.
        </div>
      </div>
    </div>
  );
}

function Formulario({res,setRes}){
  const [enviado,setEnviado]=useState(!!res);
  const [qtd,setQtd]=useState(1);
  const [f,setF]=useState({nome:"",cpf:"",nasc:"",tel:"",email:"",end:"",quarto:"",chegada:"",hora:""});
  const [ac,setAc]=useState([]);
  const [pl,setPl]=useState([""]);
  
  const updF=(k,v)=>setF(p=>({...p,[k]:v}));
  const updAc=(i,k,v)=>setAc(p=>p.map((a,j)=>j===i?{...a,[k]:v}:a));
  
  const handleQtdChange=(newQtd)=>{
    setQtd(newQtd);
    const n=Math.max(0,newQtd-1);
    setAc(a=>{
      const current=a.length;
      if(n>current){
        return [...a,...Array(n-current).fill(null).map(()=>({nome:"",cpf:"",email:"",quarto:""}))];
      }
      if(n<current){
        return a.slice(0,n);
      }
      return a;
    });
  };
  
  const enviar=()=>{
    if(!f.nome||!f.cpf||!f.nasc||!f.tel||!f.email||!f.quarto||!f.chegada||!f.hora){
      alert("Preencha todos os campos obrigatórios (*).");
      return;
    }
    for(let i=0;i<ac.length;i++){
      if(!ac[i].nome||!ac[i].cpf){
        alert(`Preencha nome e CPF do hóspede ${i+2}.`);
        return;
      }
    }
    setRes({
      timestamp:new Date().toISOString(),
      titular:{...f},
      qtd,
      placas:pl.filter(p=>p.trim()),
      acompanhantes:ac
    });
    setEnviado(true);
  };
  
  const Fg=({l,children})=>(
    <div style={{marginBottom:10}}>
      <label style={{fontSize:".62rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#7a6450",display:"block",marginBottom:3}}>{l}</label>
      {children}
    </div>
  );
  
  const inp={
    width:"100%",
    padding:"10px 11px",
    border:"1px solid #e0d5c5",
    borderRadius:7,
    fontFamily:"inherit",
    fontSize:".87rem",
    color:"#1a1008",
    background:"#f4efe6",
    outline:"none",
    boxSizing:"border-box"
  };
  
  if(enviado){
    return(
      <div style={{padding:"44px 20px",textAlign:"center"}}>
        <div style={{maxWidth:440,margin:"0 auto",background:"#f0fff4",border:"1px solid rgba(61,107,74,.25)",borderRadius:12,padding:36}}>
          <span style={{fontSize:"3rem"}}>🎉</span>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"1.45rem",color:VERDE,margin:"12px 0 8px"}}>Check-in enviado!</h2>
          <p style={{fontSize:".88rem",color:"#7a6450"}}>Recebemos seus dados. Em breve você receberá o código via WhatsApp.</p>
          <p style={{marginTop:10,fontSize:".85rem",color:"#7a6450"}}><strong>Recepção:</strong> (85) 99172-7796</p>
        </div>
      </div>
    );
  }
  
  return(
    <div style={{padding:"44px 20px"}}>
      <div style={{maxWidth:700,margin:"0 auto"}}>
        <div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,overflow:"hidden"}}>
          <div style={{background:`linear-gradient(135deg,${TC},#a34830)`,padding:"18px 22px",color:"#fff"}}>
            <h2 style={{fontFamily:"Georgia,serif",fontSize:"1.25rem",margin:"0 0 4px"}}>Check-in — Vila Frazzano</h2>
            <p style={{fontSize:".8rem",color:"rgba(255,255,255,.75)",margin:0}}>Preencha os dados para liberar seu acesso.</p>
          </div>
          <div style={{padding:"22px 20px"}}>
            <p style={{fontSize:".73rem",color:"#7a6450",marginBottom:16}}><span style={{color:TC}}>*</span> Campos obrigatórios</p>
            <p style={{fontFamily:"Georgia,serif",fontSize:".97rem",color:"#3a2010",marginBottom:13,paddingBottom:8,borderBottom:"1px solid #e0d5c5"}}>👤 Titular</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              <Fg l="Nome completo *">
                <input 
                  key="titular-nome"
                  style={inp} 
                  value={f.nome} 
                  onChange={e=>updF("nome",e.target.value)} 
                  placeholder="Nome completo"
                  type="text"
                  autoComplete="name"
                />
              </Fg>
              <Fg l="CPF *">
                <input 
                  key="titular-cpf"
                  style={inp} 
                  value={f.cpf} 
                  onChange={e=>updF("cpf",fmtCPF(e.target.value))} 
                  placeholder="000.000.000-00"
                  type="text"
                  inputMode="numeric"
                />
              </Fg>
              <Fg l="Data de nascimento *">
                <input 
                  key="titular-nasc"
                  style={inp} 
                  type="date" 
                  value={f.nasc} 
                  onChange={e=>updF("nasc",e.target.value)}
                />
              </Fg>
              <Fg l="Telefone / WhatsApp *">
                <input 
                  key="titular-tel"
                  style={inp} 
                  value={f.tel} 
                  onChange={e=>updF("tel",e.target.value)} 
                  placeholder="(85) 99999-9999"
                  type="tel"
                  autoComplete="tel"
                />
              </Fg>
              <Fg l="E-mail *">
                <input 
                  key="titular-email"
                  style={inp} 
                  type="email" 
                  value={f.email} 
                  onChange={e=>updF("email",e.target.value)} 
                  placeholder="email@exemplo.com"
                  autoComplete="email"
                />
              </Fg>
              <Fg l="Cidade / Estado *">
                <input 
                  key="titular-end"
                  style={inp} 
                  value={f.end} 
                  onChange={e=>updF("end",e.target.value)} 
                  placeholder="Fortaleza, CE"
                  type="text"
                />
              </Fg>
              <Fg l="Total de hóspedes *">
                <select key="titular-qtd" style={inp} value={qtd} onChange={e=>handleQtdChange(parseInt(e.target.value))}>
                  {Array.from({length:20},(_,i)=><option key={i+1} value={i+1}>{i+1} pessoa{i>0?"s":""}</option>)}
                </select>
              </Fg>
              <Fg l="Seu quarto *">
                <select key="titular-quarto" style={inp} value={f.quarto} onChange={e=>updF("quarto",e.target.value)}>
                  <option value="">Selecione...</option>
                  {QUARTOS.map(q=><option key={q}>{q}</option>)}
                </select>
              </Fg>
              <Fg l="Data de chegada *">
                <input 
                  key="titular-chegada"
                  style={inp} 
                  type="date" 
                  value={f.chegada} 
                  onChange={e=>updF("chegada",e.target.value)}
                />
              </Fg>
              <Fg l="Horário aproximado *">
                <select key="titular-hora" style={inp} value={f.hora} onChange={e=>updF("hora",e.target.value)}>
                  <option value="">Selecione...</option>
                  {["15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"].map(h=><option key={h}>{h}</option>)}
                </select>
              </Fg>
            </div>
            {ac.length>0&&(
              <div style={{marginTop:18}}>
                <p style={{fontFamily:"Georgia,serif",fontSize:".97rem",color:"#3a2010",marginBottom:13,paddingBottom:8,borderBottom:"1px solid #e0d5c5"}}>👥 Acompanhantes</p>
                {ac.map((a,i)=>(
                  <div key={`acomp-${i}`} style={{background:"#f4efe6",borderRadius:8,padding:14,marginBottom:10}}>
                    <p style={{fontSize:".76rem",fontWeight:700,color:"#3a2010",marginBottom:10}}>Hóspede {i+2}</p>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:9}}>
                      <Fg l="Nome *">
                        <input 
                          key={`acomp-nome-${i}`}
                          style={inp} 
                          value={a.nome} 
                          onChange={e=>updAc(i,"nome",e.target.value)} 
                          placeholder="Nome completo"
                          type="text"
                        />
                      </Fg>
                      <Fg l="CPF *">
                        <input 
                          key={`acomp-cpf-${i}`}
                          style={inp} 
                          value={a.cpf} 
                          onChange={e=>updAc(i,"cpf",fmtCPF(e.target.value))} 
                          placeholder="000.000.000-00"
                          type="text"
                          inputMode="numeric"
                        />
                      </Fg>
                      <Fg l="E-mail">
                        <input 
                          key={`acomp-email-${i}`}
                          style={inp} 
                          type="email" 
                          value={a.email} 
                          onChange={e=>updAc(i,"email",e.target.value)} 
                          placeholder="email@exemplo.com"
                        />
                      </Fg>
                      <Fg l="Quarto">
                        <select key={`acomp-quarto-${i}`} style={inp} value={a.quarto} onChange={e=>updAc(i,"quarto",e.target.value)}>
                          <option value="">Selecione...</option>
                          {QUARTOS.map(q=><option key={q}>{q}</option>)}
                        </select>
                      </Fg>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div style={{marginTop:18}}>
              <p style={{fontFamily:"Georgia,serif",fontSize:".97rem",color:"#3a2010",marginBottom:10,paddingBottom:8,borderBottom:"1px solid #e0d5c5"}}>🚗 Veículos</p>
              {pl.map((p,i)=>(
                <div key={i} style={{display:"flex",gap:8,marginBottom:8}}>
                  <input 
                    style={{...inp,textTransform:"uppercase"}} 
                    value={p} 
                    onChange={e=>setPl(v=>v.map((x,j)=>j===i?e.target.value.toUpperCase():x))} 
                    placeholder="ABC-1234"
                    type="text"
                  />
                  {pl.length>1&&(
                    <button 
                      onClick={()=>setPl(v=>v.filter((_,j)=>j!==i))} 
                      style={{background:"none",border:"none",color:"#aaa",cursor:"pointer",fontSize:"1.1rem"}}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button 
                onClick={()=>setPl(p=>[...p,""])} 
                style={{background:"none",border:"1px dashed #e0d5c5",color:"#7a6450",padding:"8px",borderRadius:7,fontSize:".73rem",cursor:"pointer",width:"100%",marginTop:4}}
              >
                + Adicionar veículo
              </button>
            </div>
            <button 
              onClick={enviar} 
              style={{background:TC,color:"#fff",border:"none",padding:"13px",borderRadius:7,width:"100%",marginTop:20,fontFamily:"inherit",fontSize:".8rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",cursor:"pointer"}}
            >
              ✅ Enviar Check-in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Avaliacao(){
  return(
    <div style={{padding:"44px 20px"}}>
      <div style={{maxWidth:700,margin:"0 auto"}}>
        <div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,padding:32,textAlign:"center"}}>
          <span style={{fontSize:"3rem",display:"block",marginBottom:14}}>⭐⭐⭐⭐⭐</span>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"1.6rem",color:"#3a2010",marginBottom:12}}>Obrigado por nos escolher!</h2>
          <p style={{fontSize:".92rem",color:"#7a6450",lineHeight:1.7,marginBottom:22,maxWidth:480,margin:"0 auto 22px"}}>
            Foi um prazer receber você na Vila Frazzano. Esperamos que sua estadia tenha sido confortável e especial.
          </p>
          <div style={{background:"#f4efe6",borderRadius:10,padding:20,marginBottom:20}}>
            <p style={{fontSize:".88rem",color:"#3a2010",fontWeight:600,marginBottom:12}}>📝 Algo para melhorar?</p>
            <p style={{fontSize:".85rem",color:"#7a6450",lineHeight:1.65}}>
              Se você teve algum problema ou sugestão para melhorarmos nossa estrutura, <strong style={{color:TC}}>por favor, nos fale diretamente</strong> pelo WhatsApp antes de avaliar publicamente.
            </p>
            <p style={{fontSize:".85rem",color:"#7a6450",lineHeight:1.65,marginTop:10}}>
              Levamos muito a sério cada feedback e temos uma equipe preparada para resolver qualquer questão — tanto durante quanto após a hospedagem.
            </p>
          </div>
          <div style={{background:"#fff8f0",border:"1px solid rgba(192,90,58,.2)",borderRadius:10,padding:18,marginBottom:20}}>
            <p style={{fontSize:".82rem",color:"#7a6450",lineHeight:1.65}}>
              💬 Sua opinião sincera nos ajuda a evoluir sem prejudicar nossa equipe que trabalha com dedicação todos os dias.
            </p>
          </div>
          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            <a href="https://wa.me/5585991727796" target="_blank" rel="noopener" style={{background:"#25d366",color:"#fff",padding:"12px 22px",borderRadius:7,textDecoration:"none",fontSize:".78rem",fontWeight:700}}>💬 Falar com a Recepção</a>
            <a href="https://www.instagram.com/vilafrazzano" target="_blank" rel="noopener" style={{background:TC,color:"#fff",padding:"12px 22px",borderRadius:7,textDecoration:"none",fontSize:".78rem",fontWeight:700}}>📷 Seguir no Instagram</a>
          </div>
          <p style={{fontSize:".76rem",color:"rgba(58,32,16,.4)",marginTop:20,fontStyle:"italic"}}>Esperamos receber você novamente em breve! ✨</p>
        </div>
      </div>
    </div>
  );
}

function Admin({res,setRes,adm,setAdm}){
  const [senha,setSenha]=useState("");
  const [erro,setErro]=useState(false);
  const login=()=>{if(senha==="frazzano2025"){setAdm(true);setErro(false);}else setErro(true);};
  const zerar=()=>{if(window.confirm("Zerar reserva atual?"))setRes(null);};
  if(!adm)return(<div style={{padding:"44px 20px",display:"flex",justifyContent:"center"}}><div style={{background:"#fff",border:"1px solid #e0d5c5",borderRadius:12,padding:36,maxWidth:340,width:"100%",textAlign:"center"}}><span style={{fontSize:"2rem"}}>🔒</span><h3 style={{fontFamily:"Georgia,serif",fontSize:"1.25rem",color:"#3a2010",margin:"10px 0 6px"}}>Área Admin</h3><p style={{fontSize:".84rem",color:"#7a6450",marginBottom:16}}>Digite a senha de administrador.</p><input style={{width:"100%",padding:"10px 12px",border:"1px solid #e0d5c5",borderRadius:7,fontFamily:"inherit",fontSize:".88rem",background:"#f4efe6",outline:"none",boxSizing:"border-box"}} type="password" value={senha} onChange={e=>{setSenha(e.target.value);setErro(false);}} placeholder="Senha..." onKeyDown={e=>e.key==="Enter"&&login()}/>{erro&&<p style={{color:"#dc3545",fontSize:".78rem",marginTop:8}}>Senha incorreta.</p>}<button style={{background:TC,color:"#fff",border:"none",padding:"12px",borderRadius:7,width:"100%",marginTop:12,fontFamily:"inherit",fontSize:".8rem",fontWeight:700,cursor:"pointer"}} onClick={login}>Entrar</button></div></div>);
  return(
    <div style={{padding:"44px 20px"}}>
      <div style={{maxWidth:820,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10,marginBottom:22}}>
          <div><span style={{fontSize:".62rem",letterSpacing:".28em",textTransform:"uppercase",color:TC,fontWeight:700}}>🔒 Admin</span><h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.7rem,4vw,2.3rem)",margin:"6px 0 0"}}>Reserva <em style={{color:TC}}>Atual</em></h2></div>
          <div style={{display:"flex",gap:9,flexWrap:"wrap"}}>
            {res&&<button onClick={zerar} style={{background:"#dc3545",color:"#fff",border:"none",padding:"10px 18px",borderRadius:7,fontSize:".75rem",fontWeight:700,cursor:"pointer"}}>🗑 Zerar</button>}
            <button onClick={()=>window.print()} style={{background:"#f4efe6",color:"#3a2010",border:"1px solid #e0d5c5",padding:"10px 18px",borderRadius:7,fontSize:".75rem",fontWeight:700,cursor:"pointer"}}>🖨 Imprimir</button>
            <button onClick={()=>setAdm(false)} style={{background:"none",color:"#dc3545",border:"1px solid #dc3545",padding:"10px 18px",borderRadius:7,fontSize:".75rem",fontWeight:700,cursor:"pointer"}}>Sair</button>
          </div>
        </div>
        {!res?(<div style={{textAlign:"center",padding:"48px 0",color:"#7a6450"}}><span style={{fontSize:"2.5rem",display:"block",marginBottom:12}}>📋</span>Nenhum check-in recebido ainda.</div>):(
          <div>
            <div style={{background:DARK,borderRadius:12,padding:20,color:"#fdf8f2",marginBottom:18}}>
              <p style={{fontFamily:"Georgia,serif",fontSize:"1.05rem",color:GOLD,marginBottom:12}}>📊 Resumo</p>
              {[["Titular",res.titular.nome],["Total",res.qtd+" hóspedes"],["Chegada",res.titular.chegada?new Date(res.titular.chegada+"T12:00").toLocaleDateString("pt-BR"):"—"],["Horário",res.titular.hora],["Veículos",res.placas.length?res.placas.join(", "):"Nenhum"],["Status","✅ Check-in recebido"]].map(([l,v])=>(
                <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:"1px solid rgba(255,255,255,.07)",fontSize:".83rem"}}>
                  <span style={{color:"rgba(253,248,242,.52)"}}>{l}</span><strong style={{color:"#fdf8f2"}}>{v}</strong>
                </div>
              ))}
            </div>
            <div style={{background:"#fff",border:"1px solid #e0d5c5",borderLeft:"4px solid "+TC,borderRadius:10,padding:"18px 16px",marginBottom:10}}>
              <span style={{fontSize:".6rem",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:TC}}>👑 Titular</span>
              <p style={{fontFamily:"Georgia,serif",fontSize:"1.08rem",color:"#3a2010",margin:"6px 0 10px"}}>{res.titular.nome}</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
                {[["CPF",res.titular.cpf],["Nasc",res.titular.nasc?new Date(res.titular.nasc+"T12:00").toLocaleDateString("pt-BR"):"—"],["Tel",res.titular.tel],["E-mail",res.titular.email],["Endereço",res.titular.end]].map(([l,v])=>(
                  <span key={l} style={{background:"#f4efe6",border:"1px solid #e0d5c5",padding:"3px 9px",borderRadius:5,fontSize:".77rem",color:"#7a6450"}}><strong style={{color:"#3a2010"}}>{l}:</strong> {v}</span>
                ))}
              </div>
              <span style={{display:"inline-block",marginTop:8,background:"rgba(192,90,58,.1)",color:TC,fontSize:".63rem",fontWeight:700,padding:"3px 10px",borderRadius:12}}>{res.titular.quarto}</span>
            </div>
            {res.acompanhantes.map((a,i)=>(
              <div key={i} style={{background:"#fff",border:"1px solid #e0d5c5",borderLeft:"4px solid "+GOLD,borderRadius:10,padding:"16px 16px",marginBottom:9}}>
                <span style={{fontSize:".6rem",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:GOLD}}>Hóspede {i+2}</span>
                <p style={{fontFamily:"Georgia,serif",fontSize:"1.03rem",color:"#3a2010",margin:"5px 0 9px"}}>{a.nome}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
                  <span style={{background:"#f4efe6",border:"1px solid #e0d5c5",padding:"3px 9px",borderRadius:5,fontSize:".77rem",color:"#7a6450"}}><strong style={{color:"#3a2010"}}>CPF:</strong> {a.cpf}</span>
                  {a.email&&<span style={{background:"#f4efe6",border:"1px solid #e0d5c5",padding:"3px 9px",borderRadius:5,fontSize:".77rem",color:"#7a6450"}}><strong style={{color:"#3a2010"}}>E-mail:</strong> {a.email}</span>}
                </div>
                {a.quarto&&<span style={{display:"inline-block",marginTop:7,background:"rgba(184,132,58,.1)",color:GOLD,fontSize:".63rem",fontWeight:700,padding:"3px 10px",borderRadius:12}}>{a.quarto}</span>}
              </div>
            ))}
            {res.placas.length>0&&(
              <div style={{background:"#fff",border:"1px solid #e0d5c5",borderLeft:"4px solid "+VERDE,borderRadius:10,padding:"16px 16px"}}>
                <span style={{fontSize:".6rem",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:VERDE}}>🚗 Veículos</span>
                <div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:8}}>
                  {res.placas.map(p=><span key={p} style={{background:"#f4efe6",border:"1px solid #e0d5c5",padding:"5px 14px",borderRadius:5,fontSize:".9rem",fontWeight:700,color:"#3a2010"}}>{p}</span>)}
                </div>
              </div>
            )}
          </div>
        )}
        <div style={{marginTop:28,display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <a href="https://wa.me/5585991727796" target="_blank" rel="noopener" style={{background:"#25d366",color:"#fff",padding:"12px",borderRadius:7,textDecoration:"none",fontSize:".75rem",fontWeight:700,textAlign:"center",display:"block"}}>💬 Recepção (85) 99172-7796</a>
          <a href="https://wa.me/5585998320570" target="_blank" rel="noopener" style={{background:"#dc3545",color:"#fff",padding:"12px",borderRadius:7,textDecoration:"none",fontSize:".75rem",fontWeight:700,textAlign:"center",display:"block"}}>🚨 Urgência (85) 99832-0570</a>
        </div>
      </div>
    </div>
  );
}
