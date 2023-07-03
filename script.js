/* JS Document */

/* Objetivo : calcular rentabilidade da renda fixa */
function calcular_rentabilidade(){

    
/*Declaração das variáveis */
var j_valor;
var j_selic;
var j_cdi;
var j_ipcaano;
var j_ipcames;
var j_prefixado;
var j_taxaano=0;
var j_taxames;
var j_tempo=0;
var j_tipo_de_rentabilidade;
var j_valorfuturo;
var j_aliquota_ir;
var j_ir;
var j_juros;
var j_vfl;
var j_rentabilidade;

/* Entrada de dados */

/*Invalidar campos vazios de entrada do usuário */

if(((((((document.f_calculadora.f_valor.value).replace(",",".")).trim()==="") || 
((document.f_calculadora.f_selic.value).replace(",",".")).trim()==="") || 
((document.f_calculadora.f_ipca.value).replace(",",".")).trim()==="") || 
((document.f_calculadora.f_taxa.value).replace(",",".")).trim()==="") || 
((document.f_calculadora.f_tempo.value).replace(",",".")).trim()==="")

{
    window.alert('Preencher todos os campos');
   }
 else {if(((((((document.f_calculadora.f_valor.value).replace(",",".")).trim()<0) || 
        ((document.f_calculadora.f_selic.value).replace(",",".")).trim()<0) || 
        ((document.f_calculadora.f_ipca.value).replace(",",".")).trim()<0) || 
        ((document.f_calculadora.f_taxa.value).replace(",",".")).trim()<0) || 
        ((document.f_calculadora.f_tempo.value).replace(",",".")).trim()<0)
        
 {
     window.alert('números negativos inseridos indevidamente!');
    }
    else{

    /*Valor inserido pelo usuário em valor a investir inserido em j_valor */
    j_valor=parseFloat((document.f_calculadora.f_valor.value).replace(",","."));
          
    /*Calcular CDI com base na SELIC */
    j_selic=parseFloat((document.f_calculadora.f_selic.value).replace(",","."));

    j_cdi=j_selic-0.10;

    /*Calcular IPCA mês com base no IPCA acumulado */
    j_ipcaano=parseFloat((document.f_calculadora.f_ipca.value).replace(",","."));

    j_ipcames=(Math.pow(1+(j_ipcaano/100),1/12)-1)*100;

    /*verificar se é isento de IR ou não*/
    j_isentoounao=document.f_calculadora.f_isentoounao.value;

    /*Valor inserido pelo usuário em tempo inserido em j_tempo */
    j_tempo=parseFloat(document.f_calculadora.f_tempo.value);
    
    
    /*Calcular pré-fixado*/
        /*Valor inserido pelo usuário em tipo de rentabilidade inserido em j_tipo_de_rentabilidade */
        j_tipo_de_rentabilidade=document.f_calculadora.f_tipo_de_rentabilidade.value;

        if(j_tipo_de_rentabilidade=='PRÉ-FIXADO'){
        j_taxaano=parseFloat(((document.f_calculadora.f_taxa.value).replace(",","."))/100);
        j_taxames=Math.pow(1+j_taxaano,1/12)-1;
        
        /*Cálculo da rentabilidade no pré-fixado*/
        j_prefixado=j_valor*Math.pow((1+j_taxames),j_tempo);
        
        /*passar valor para rentabilidade total*/        
        j_valorfuturo=j_prefixado;
        
        /*Calcular imposto de renda*/
        if(j_isentoounao=="isento"){
            j_aliquota_ir=0;
            j_ir=0;
        }
        else{
            if(j_tempo<=6){
                j_aliquota_ir=0.225;
            }
            else{
                if(j_tempo >6 && j_tempo <=12){
                    j_aliquota_ir=0.20;
                }
                else{
                    if(j_tempo>12 && j_tempo<=24){
                        j_aliquota_ir=0.175;
                    }
                    else{
                        if(j_tempo>24){
                            j_aliquota_ir=0.15;
                        }
                        }
                    }
                }
                j_aliquota_ir=parseFloat(j_aliquota_ir);
                j_ir=j_aliquota_ir*(j_valorfuturo-j_valor);
            }

       
     
/* Saída de dados */
     /*Calcular rendimentos (juros) */
     j_juros=parseFloat(j_valorfuturo-j_valor);
   
    /*Calcular Rentabilidade total */
    j_rentabilidade=parseFloat((j_juros*100)/j_valorfuturo);
    
    /*Span f_valorfuturo recebe variável j_valorfuturo*/
    document.getElementById("f_valorfuturo").textContent=j_valorfuturo.toFixed(2);
             
    /*Calcular valor líquido */
    j_vfl=parseFloat(j_valorfuturo-j_ir);


    /*Span f_cdi recebe variável j_cdi */
    document.getElementById("f_cdi").textContent=j_cdi.toFixed(2);

    /*Span f_ipcames recebe variável j_ipcames*/
    document.getElementById("f_ipcames").textContent=j_ipcames.toFixed(2);

    /*Span f_juros recebe variável j_juros*/
    document.getElementById("f_juros").textContent=j_juros.toFixed(2);

    /*Span f_aliquota_ir recebe variável j_aliquota_ir*/
    j_aliquota_ir=parseFloat(j_aliquota_ir*100)
    document.getElementById("f_aliquota_ir").textContent=j_aliquota_ir.toFixed(1);

    /*Span f_ir recebe variável j_ir*/
    document.getElementById("f_ir").textContent=j_ir.toFixed(2);

    /*Span f_vfl recebe variável j_vfl*/
    document.getElementById("f_vfl").textContent=j_vfl.toFixed(2);

    /*Span j_rentabilidade recebe variável j_rentabilidade*/
    document.getElementById("f_rentabilidade").textContent=j_rentabilidade.toFixed(2);

    
    }
    else{
        window.alert('Não é pré-fixado');

       }
    }
  }
}