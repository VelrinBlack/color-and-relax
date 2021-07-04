import Brand from 'components/templates/Brand/Brand';
import brandsData from 'assets/brandsData';

const Index = () => (
  <>
    <Brand {...brandsData.colorAndRelax} />
    <Brand {...brandsData.sunshineArt} />
  </>
);

export default Index;
