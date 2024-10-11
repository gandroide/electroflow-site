import react from 'react';

import { StyledGalleryGrid } from './styled';

import Aquaparque from '../../assets/imgs/gallery/aquaparque.jpg';
import Imprinews from '../../assets/imgs/gallery/imprinews.jpg';
import Meo1 from '../../assets/imgs/gallery/meo-1.jpg';
import Meo2 from '../../assets/imgs/gallery/meo-2.jpg';
import Abb2 from '../../assets/imgs/gallery/abb2.jpg';
import ThePlace from '../../assets/imgs/gallery/the-place.jpg';
import UpacMoradia from '../../assets/imgs/gallery/upac-moradia.jpg';
import Judiciaria from '../../assets/imgs/gallery/judiciaria.jpg';
import Ferragens from '../../assets/imgs/gallery/ferragens.jpg';
import Lourencinha from '../../assets/imgs/gallery/lourencinha.jpg';
import AvacAltice from '../../assets/imgs/gallery/avac-altice.jpeg';

const Gallery = () => {
  return (
    <StyledGalleryGrid>
      <div>
        <img src={Aquaparque} />
        <div>Aquaparque - Instalações hidráulicas</div>
      </div>
      <div>
        <img src={Imprinews} />
        <div>Imprinews - Automação</div>
      </div>
      <div>
        <img src={Meo1} />
        <div>Meo - AVAC</div>
      </div>
      <div>
        <img src={Meo2} />
        <div>Meo Call Center - Inst. Elétricas</div>
      </div>
      <div>
        <img src={Abb2} />
        <div>Subestação Amparo - Quadros Elétricos</div>
      </div>
      <div>
        <img src={ThePlace} />
        <div>The place - Inst. Elétricas</div>
      </div>
      <div>
        <img src={UpacMoradia} />
        <div>Upac moradia</div>
      </div>
      <div>
        <img src={Judiciaria} />
        <div>Judiciária - Inst. Elétricas</div>
      </div>
      <div>
        <img src={Ferragens} />
        <div>Ferragens Vieira - Pianeis Fotovoltaicos</div>
      </div>
      <div>
        <img title="hsidhiad" src={Lourencinha} />
        <div>Urb. Lourencinha</div>
      </div>
      <div title="hola?">
        <img src={AvacAltice} />
        <div>Avac - Altice</div>
      </div>
    </StyledGalleryGrid>
  );
};

export default Gallery;
