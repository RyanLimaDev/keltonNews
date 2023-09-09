import iberAd from '../public/Iber_comercial.gif'
import iberAdSmall from '../public/Iber_small.png'
import energyDrink from '../public/3k.gif'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-8 w-full ">
      <div className="flex flex-col justify-center w-[70%] text-ellipsis overflow-hidden">
        <div className="mt-10">
          <h1 className="text-2xl md:text-3xl font-black">Policial da 1° Divisão sofre atentado de uma organização conspiracionista nesta tarde de domingo na Zona Central de Kelton.</h1>
        </div>
        <div className="mt-4 text-sm md:text-base">
          <div>
            <span className="font-bold">Por Felipe Constatino, KN</span>
            <span> - Kelton, Zona Central</span>
            <span>.</span>
          </div>

          <div>
            <span>08/10/2084 21:37 . Atualizado a 1 mês</span>
          </div>

          <div className="mt-5 bg-black w-full h-auto md:h-44 overflow-hidden relative">
            <Image src={iberAdSmall} alt='iberAds' className='cursor-pointer md:hidden'/>
            <Image src={iberAd} alt='iberAds' fill={true} className='object-cover cursor-pointer max-md:hidden'/>
          </div>
        </div>

        <div className="mt-12 flex justify-center items-center">
          <div className="w-full md:w-3/4">
          <div className="text-lg">
          <span>
            Foi encontrado nesta manhã de segunda feira, no salão de eventos da Zona Central, Espaço Mágico,
            um policial da 1° Divisão, <strong>Joni Damasco</strong>, desacordado. Seu corpo parecia intacto, mas o mesmo
            balbuciava palavras incompreensíveis em uma espécie de transe. Segundo as investigações, Joni
            foi até o local em busca de uma ladra de bicicleta, mas ao chegar se deparou com uma organização
            conspiracionista no lugar, os mesmos estavam finalizando uma sessão de palestra quando foram
            surpreendidos pela presença do investigador.
          </span> 
          <br/> <br/>
          <span>
            A polícia suspeita que o policial tenha sido atacado
            por um dos membros da organização, este que desacordou o policial com uma espécie de magia misteriosa.
            Demais informações sobre o ocorrido ainda são um mistério.
          </span> 
          <br/>
          <div className='flex justify-center w-full'>
            <Image src={energyDrink} alt='iberAds' className='cursor-pointer mt-4 mb-4 max-h-[80vh]'/>
          </div>
          <span>
            O grupo conspiracionista, conhecido como
            conspiração, atua a alguns meses organizando palestras e encontros de cunho extremistas em inúmeras
            casas de eventos por <strong className="text-header cursor-pointer hover:underline">Kelton</strong>. O conteúdo de seus encontros envolve, em grande maioria, dissertações de
            ataques contra a ciência, sempre exaltando uma espécie de supremacia mágica que os mesmos acreditam.
          </span>
          <br/> <br/> 
          <span>
            Dentre os membros da conspiração, estão alguns nomes como: <strong>Constanza Bonaparte</strong>, <strong>Brulio Flamel</strong>,
            <strong> Maiko de Horse</strong> e <strong>Cabecinha</strong>, estes da qual são conhecidos por falas polêmicas e estudos extremistas.
            O caso está ainda sendo investigado pela polícia e o grupo conspiracionista se encontra sobre supervisão,
            tendo seus encontros fechados e supervisionados pela 1°Divisão.
          </span>
          </div>
          </div>
        </div>
      </div>
    </div> 
  )
}
