import BrandContext from 'utils/BrandContext';
import WelcomeSection from 'components/organisms/WelcomeSection/WelcomeSection';
import CoversSection from 'components/organisms/CoversSection/CoversSection';

const Brand = (brandData) => (
  <BrandContext.Provider value={brandData}>
    <WelcomeSection />
    <CoversSection />
  </BrandContext.Provider>
);

export default Brand;
