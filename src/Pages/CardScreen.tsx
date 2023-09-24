// import React from "react";
// import styled from "styled-components";
// import pic from "../Assets/loh_quests@2x.c67b91f0.png";
// import { BsTrophy } from "react-icons/bs";
// import pics from "../Assets/pexels-moath-photos-17563166.jpg";
// import { HiOutlineRocketLaunch } from "react-icons/hi2";
// import img from "../Assets/pexels-alexis-ricardo-alaurin-6590699.jpg";
// import { LiaCrownSolid } from "react-icons/lia";
// import image from "../Assets/licensing_desktop@2x.e4012c17.jpg";
// import { LiaPiggyBankSolid } from "react-icons/lia";
// const CardScreen = () => {
//   return (
//     <div>
//       <Container>
//         <Textcontent>
//           <Ick>
//             <HiOutlineRocketLaunch />
//           </Ick>
//           <H1>Quests</H1>
//           <p>Photo by okoye francis</p>
//         </Textcontent>
//         <Img src={pics} />
//       </Container>
//       <SecondContainer>
//         <Box>
//           <Tx>
//             <Icon>
//               <BsTrophy />
//             </Icon>
//             <h1>Take photos. Win prizes.</h1>
//             <p>
//               Quests are creative photo challenges that encourage you to test
//               your skills and submit your best work for a chance to win exciting
//               prizes. We launch new Quests with unique themes every week so
//               there is always something for everyone!
//             </p>
//             <Button>View Quests</Button>
//           </Tx>
//         </Box>
//         <Box2>
//           <img src={pic} />
//         </Box2>
//       </SecondContainer>

//       <Container1>
//         <Textcontent>
//           <Ick>
//             <LiaCrownSolid />
//           </Ick>
//           <H2>Licensing</H2>
//           <p>Photo by okoye francis</p>
//         </Textcontent>
//         <Img src={img} />
//       </Container1>
//       <Secondcontainer2>
//         <Box3>
//           <img src={image} />
//         </Box3>
//         <Box4>
//           <Tx1>
//             <Icon1>
//               <LiaPiggyBankSolid />
//             </Icon1>
//             <h1>Get paid for your photos</h1>
//             <p>
//               Don’t let your photos sit there gathering dust, like on other
//               platforms. Gain exposure and get paid for your work with 500px
//               Licensing. Paid members earn up to 100% royalties and free members
//               earn up to 60% when you license your photos exclusively with
//               500px.
//             </p>
//             <Button1>Tell me more</Button1>
//           </Tx1>
//         </Box4>
//       </Secondcontainer2>
//     </div>
//   );
// };

// export default CardScreen;

// const Button1 = styled.button`
//   background-color: #000000;
//   color: white;
//   padding: 15px 50px;
//   /* margin-left: 37%; */
//   font-size: 20px;
//   border-radius: 40px;
//   border: none;
//   font-weight: bold;
//   margin-top: 20px;
// `;

// const Icon1 = styled.div`
//   font-size: 80px;
// `;

// const Tx1 = styled.div`
//   margin-top: 120px;
// `;

// const Box4 = styled.div`
//   height: 60vh;
//   width: 40%;
//   margin-left: 50px;
//   /* background-color: yellow; */

//   @media screen and (max-width: 500px) {
//     width: 100%;
//   }
// `;

// const Box3 = styled.div`
//   height: 60vh;
//   width: 40%;
//   background-color: greenyellow;

//   img {
//     height: 65vh;
//     width: 100%;
//   }

//   @media screen and (max-width: 500px) {
//     width: 100%;
//   }
// `;

// const Secondcontainer2 = styled.div`
//   height: 80vh;
//   width: 100%;
//   /* background-color: aqua; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// `;

// const Container1 = styled.div`
//   min-height: 45vh;
//   width: 100%;
//   background-color: burlywood;
// `;

// const H2 = styled.div`
//   font-weight: bold;
//   font-size: 60px;
//   color: white;
//   margin-left: 41%;

//   @media screen and (max-width: 500px) {
//     font-size: 40px;
//     margin-left: 38%;
//   }
// `;

// const H1 = styled.div`
//   font-weight: bold;
//   font-size: 60px;
//   color: white;
//   margin-left: 43%;

//   @media screen and (max-width: 500px) {
//     font-size: 40px;
//     margin-left: 39%;
//   }
// `;

// const Ick = styled.div`
//   background-color: brown;
//   color: white;
//   margin-top: 70px;
//   margin-left: 45%;
//   display: flex;
//   justify-content: center;
//   border-radius: 70%;
//   align-items: center;
//   font-size: 80px;
//   height: 15vh;
//   width: 8%;

//   @media screen and (max-width: 500px) {
//     width: 25%;
//     margin-left: 40%;
//   }
// `;

// const Textcontent = styled.div`
//   height: 45vh;
//   opacity: 50%;
//   width: 100%;
//   position: absolute;
//   background-color: black;
//   p {
//     color: white;
//     float: right;
//   }
// `;

// const Tx = styled.div`
//   margin-top: 120px;
// `;

// const Img = styled.img`
//   height: 45vh;
//   width: 100%;
//   object-fit: cover;
// `;

// const Button = styled.button`
//   background-color: #000000;
//   color: white;
//   padding: 15px 50px;
//   /* margin-left: 37%; */
//   font-size: 20px;
//   border-radius: 40px;
//   border: none;
//   font-weight: bold;
//   margin-top: 20px;
// `;

// const Icon = styled.div`
//   font-size: 60px;
// `;

// const Box2 = styled.div`
//   height: 60vh;
//   width: 40%;
//   /* background-color: greenyellow; */
//   @media screen and (max-width: 500px) {
//     width: 100%;
//     margin-bottom: 90%;
//   }

//   img {
//     height: 65vh;
//     width: 100%;
//   }
// `;

// const Box = styled.div`
//   height: 60vh;
//   width: 40%;
//   /* background-color: yellow; */
//   @media screen and (max-width: 500px) {
//     width: 100%;
//   }
// `;

// const SecondContainer = styled.div`
//   height: 80vh;
//   width: 100%;
//   /* background-color: aqua; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// `;

// const Container = styled.div`
//   height: 45vh;
//   width: 100%;
//   background-color: burlywood;

//   @media screen and (max-width: 500px) {
//     width: 100%;
//   }
// `;

import react from "react";
import styled from "styled-components";
// import Button from "../Block/Button";

const Card = () => {
  return (
    <div>
      <Container>
        <Wrap>
          <Text>
            <h1>
              Join the waitlist for
              <br />
              <span>HashIT!</span>
            </h1>
          </Text>
          <Btns>
            <Bt>
              <Button>
                <input placeholder="Full name" />
              </Button>
              <br />
              <br />
              <Button2>
                <input placeholder="emaill address" />
              </Button2>
              <br />
              <br />
              <Button3>Get notified when Hash It is Live</Button3>
            </Bt>
          </Btns>
        </Wrap>
      </Container>
    </div>
  );
};

export default Card;

const Button3 = styled.button`
  padding: 15px 90px;
  background-color: black;
  color: white;
  border-radius: 8px;

  @media screen and (max-width: 375px) {
    padding: 15px 80px;
  }
`;

const Button2 = styled.button`
  background-color: #fff;
  width: 40px;
  border: none;

  input {
    padding: 15px;
    padding-right: 180px;
  }
  @media screen and (max-width: 375px) {
    input {
      padding: 15px;
      padding-right: 130px;
    }
  }
`;

const Button = styled.button`
  border: none;
  background-color: white;

  input {
    padding: 15px;
    padding-right: 180px;
  }

  @media screen and (max-width: 375px) {
    input {
      padding: 15px;
      padding-right: 130px;
    }
  }
`;

const Bt = styled.div`
  @media screen and (max-width: 375px) {
    margin-left: 70px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 70px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 70px;
    margin-bottom: 50px;
  }
`;

const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  /* margin-left: 10%; */
  text-align: center;

  h1 {
    font-size: 40px;
  }

  span {
    color: orange;
  }

  @media screen and (max-width: 375px) {
    margin-left: 80px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 80px;
  }

  @media screen and (max-width: 500px) {
    margin-left: 80px;
  }
`;

const Wrap = styled.div`
  width: 60%;
  height: 60vh;
  margin-right: 70px;
  /* background-color: aqua; */

  span {
    color: orange;
    text-align: center;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
