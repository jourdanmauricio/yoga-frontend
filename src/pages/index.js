import axios from 'axios';
import About from '../components/About';
import Contact from '../components/contact/Contact';
import Lessons from '../components/Lessons';
import Services from '../components/Services';
import Footer from '../common/footer/Footer';

const Home = ({ settings, contact, socialMedia, lessons }) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --title-color: ${settings.title_color};
          --paragraph-color: ${settings.paragraph_color};
          --button-color: ${settings.button_color};
          --divisor-color: ${settings.divisor_color};
          --effect-color: ${settings.effect_color};
          --error-color: ${settings.error_color};
          --h1-color: ${settings.h1_color};
          --paragraph-header-color: ${settings.paragraph_header_color};
          --background-color: ${settings.background_color};
          --background-footer-color: ${settings.background_footer_color};
          --table-header-color: ${settings.table_header_color};
          --table-header-text-color: ${settings.table_header_text_color};
          --table-body-color: ${settings.table_body_color};
          --table-border-color: ${settings.table_border_color};
          --table-body-text-color: ${settings.table_body_text_color};
        }
      `}</style>

      <About />
      <Services />
      <Lessons lessons={lessons} />
      <Contact />
      <Footer contact={contact} socialMedia={socialMedia} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const API_SETTINGS = `${process.env.NEXT_PUBLIC_API_BACKEND}/settings`;
    const { data } = await axios(API_SETTINGS);
    let settingsProp = {};
    let contactProp = {};
    let socialMediaProp = {};
    for (let setting of data) {
      switch (setting.type) {
        case 'STYLE':
          settingsProp[setting.feature] = setting.value;
          break;
        case 'SOCIAL_MEDIA':
          socialMediaProp[setting.feature] = setting.value;
          break;
        case 'CONTACT':
          contactProp[setting.feature] = setting.value;
          break;
      }
    }

    const API_LESSONS = `${process.env.NEXT_PUBLIC_API_BACKEND}/lessons`;
    const responseLessons = await axios(API_LESSONS);

    console.log('response', data);

    return {
      props: {
        settings: settingsProp,
        contact: contactProp,
        socialMedia: socialMediaProp,
        lessons: responseLessons.data,
      },
    };
  } catch (error) {
    console.log('ERROR', error);
  }
}
