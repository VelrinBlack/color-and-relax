import Brand from 'components/templates/Brand/Brand';
import Footer from 'components/molecules/Footer/Footer';
import brandsData from 'assets/brandsData';

const Index = () => (
  <>
    <Brand {...brandsData.colorAndRelax} />
    <Brand {...brandsData.sunshineArt} />
    <Footer />
  </>
);

export default Index;
