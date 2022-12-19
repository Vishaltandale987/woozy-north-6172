import React from "react";
import {
  Text,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <div display={"flex"}>
      {/* <div style={{ textAlign: "start", margin: "auto", width: "95%" }}>
        <div>
          <Text>
            Community: Developers.Facebook.Twitter.Linkedin.Our
            Blog.Instagram.Youtube
          </Text>
          <br />
          <Text>
            Policies: Leadership-TeamBoard of Directors-Investor Relations-App
            DirectoryNewsroomOffice LocationsImprintCareersSitemapHelp.Log
            In.Sign Up
          </Text>
        </div>
        <br />
        <div>
          <Text>
            Use Cases: Online PollsFacebook SurveysSurvey TemplateScheduling
            PollsGoogle Forms vs. SurveyMonkeyEmployee Satisfaction SurveysFree
            Survey TemplatesMobile SurveysHow to Improve Customer ServiceAB Test
            Significance CalculatorNPS CalculatorQuestionnaire TemplatesEvent
            Survey
          </Text>
          <br />
          <Text>
            Sample Size CalculatorWriting Good SurveysLikert ScaleSurvey
            Analysis360 Degree FeedbackEducation SurveysSurvey QuestionsNPS
            CalculationCustomer Satisfaction Survey QuestionsAgree Disagree
            QuestionsCreate a Survey
          </Text>
          <br />
          <Text>
            Online QuizzesQualitative vs Quantitative ResearchCustomer
            SurveyMarket Research SurveysNPS SurveySurvey Design Best
            PracticesMargin of Error CalculatorQuestionnaireDemographic
            QuestionsTraining SurveyOffline Survey360 Review Template
          </Text>
        </div>
      </div> */}
      {/* <hr color={"black"} style={{ marginBottom: "10px", marginTop: "10px" }} /> */}

      <div
        style={{
          textAlign: "start",
          width: "92%",
          marginTop: "5em",
          padding: "10px",
        }}
      >
        <Menu>
          <MenuButton lm={"100px"} as={Button} bg={"black"} color="white">
            English🡣
          </MenuButton>
          <MenuList>
            <MenuItem>English Us</MenuItem>
            <MenuItem>Deutsch</MenuItem>
            <MenuItem>Nederlands</MenuItem>
            <MenuItem>Danks</MenuItem>
            <MenuItem>Italiano</MenuItem>
            <MenuItem>French</MenuItem>
            <MenuItem>Morroco</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "30%", textAlign: "start" }}>
          <p>
            SurveyMonkey is brought to you by momentive.ai. Shape what's next
            with AI‑driven insights and experience management solutions built
            for the pace of modern business.
          </p>
          <br />
          <p>Copyright © 1999-2022 Momentive</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "140px", height: "50px" }}
            src={"https://cdn.halosecurity.com/meter/trustedsite.com/202.svg"}
          />
          <img
            style={{ width: "140px", height: "80px" }}
            src={
              "https://eshiptransport.com/wp-content/uploads/2019/11/BBB_Accredited_Business_A_Rating.png"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
