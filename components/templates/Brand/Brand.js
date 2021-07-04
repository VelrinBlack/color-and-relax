import BrandContext from 'utils/BrandContext';
import WelcomeSection from 'components/organisms/WelcomeSection/WelcomeSection';

const Brand = (brandData) => (
  <BrandContext.Provider value={brandData}>
    <WelcomeSection />
  </BrandContext.Provider>
);

export default Brand;
