import WorkInProgress from "@/app/components/WorkInProgress/WorkInProgress";
import { Metadata } from "next";
import './profile.scss';
import { colorsArr } from "./colorLib";

//DEBUG DATA ONLY!
import data from './profile.json';
import Image from "next/image";

export const metadata: Metadata = {
  title: "Můj profil | Friendly Betting",
};
const MyProfile = () => {
  const splitUsername = (username: string) => {
    return username.trim().split(/\s+/);
  }

  const extractLettersFromUsername = (username: string) => {
    const usernameArr = splitUsername(username);
    const updatedArray = usernameArr.length === 1 ? usernameArr : usernameArr.slice(0,2);
    const secretMessage = updatedArray.map(username => {
      return username[0];
    });
    return secretMessage;
  }

  const getRandomNumber = () => {
    return Math.round(Math.random() * (colorsArr.length - 0) + 0);
  };

  return (
    <main>
      <WorkInProgress />
      <h1 className="settingsHeading">Nastavení profilu</h1>
      <div className="profileContainer">
        {data.image 
          ? <Image src={data.image} alt="Profilovy obrazek" width={100} height={100} className="profileImage" /> 
          : <div className="profileLetters" style={{backgroundColor: `${colorsArr[getRandomNumber()]}`}}>
              {extractLettersFromUsername(data.username)}
            </div>
        }
        <div className="profileSettings">
          <Image src="/Settings.png" width={30} height={30} alt="Ozubené kolečko, neboli nastavení"/>
          <p>Změnit profilovou fotografii</p>
        </div>
        <div className="inputContainer">
          <label
            htmlFor="email"
          >
            E-mail
            <div className="dataContainer">{data.email}</div>
            <button className="button">Změnit e-mail</button>
          </label>
        </div>
        <div className="inputContainer smallerMargin">
          <label
            htmlFor="username"
          >
            Tvoje jméno
            <div className="dataContainer">{data.username}</div>
            <button className="button">Změnit jméno</button>
          </label>
        </div>
        <div className="inputContainer smallerMargin">
          <label
            htmlFor="password"
          >
            Heslo
            <div className="dataContainer">{data.password}</div>
            <button className="button">Změnit heslo</button>
          </label>
        </div>
    </div>
    </main>
  );
};

export default MyProfile;
