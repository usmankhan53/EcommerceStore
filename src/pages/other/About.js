import { Fragment } from "react"; 
import { useLocation } from "react-router-dom"; 
import { useTranslation } from "react-i18next";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import BannerOne from "../../wrappers/banner/BannerOne";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import Card from 'react-bootstrap/Card';



const About = () => {
  let { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <Fragment>
      <SEO
        titleTemplate="om oss"
        description="."
      /> 
      <LayoutOne headerTop="visible">
            {/* breadcrumb */}
            <Breadcrumb 
          pages={[
            {label: "Hjem", path: process.env.PUBLIC_URL + "/" },
            {label: "om oss", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div  className="container">
          <img src="./assets/img/bg/About_hero.jpg" alt="About-hero" className="AboutImage"/>
        </div>
    

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

     {/* cards */}
     <div className="container d-flex mb-5">
      <div className="row">
  <div className=" col-md-4 col-lg-4 col-sm-12 mt-3">
  <Card className="Acard">
      <Card.Body>
    
        <Card.Title className="Acard-title">{t("Our Vision")} </Card.Title>
    
        <Card.Text className="Acardtext">
        {t("Our passion lies in using natural ingredients that Mother Earth provides")}.{t("We believe in the power of what's pure and unprocessed")} .{t("Our commitment to natural goodness extends from the lush landscapes of Norway to the farthest corners of the Earth")} .

        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-4 col-lg-4 col-sm-12 mt-3">
  <Card className="Acard">
      <Card.Body>
     
        <Card.Title className="Acard-title">{t("Our Mission")}</Card.Title>
      
        <Card.Text className="Acardtext">
        {t("Our mission is clear")}: {t("to make healthy living easy and accessible")}. {t("We carefully select ingredients that are kind to your body")}, {t("and our eco-friendly approach ensures we're gentle on the environment too")}.

        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-4 col-lg-4 col-sm-12 mt-3">
  <Card className="Acard">
      <Card.Body>
      
        <Card.Title className="Acard-title">{t("Our Goal")}</Card.Title>
        <Card.Text className="Acardtext">
        {t("We're just starting")}, {t("but our dream is big")}. {t("We want to be your go-to source for products that harness the beauty of nature")}.{t("From clean ingredients to sustainable practices")} , {t("we're here to help you live healthier while honoring the natural world that inspires us")}.

        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  </div>
</div>

        {/* banner */}
        {/* <BannerOne spaceBottomClass="pb-70" /> */}

        {/* text grid */}
        {/* <TextGridOne spaceBottomClass="pb-70" /> */}

        {/* fun fact */}
        {/* <FunFactOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          bgClass="bg-gray-3"
        /> */}

        {/* team member */}
        {/* <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" /> */}

        {/* brand logo slider */}
        {/* <BrandLogoSliderOne spaceBottomClass="pb-70" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default About;
