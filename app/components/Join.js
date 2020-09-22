import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//app componenets
import Page from "./Page"
import Axios from "axios"

function Join(props) {
  const [username, setUsername] = useState()
  const [avatarname1st, setAvatarname1st] = useState()
  const [avatarname2nd, setAvatarname2nd] = useState()
  const [avatarname3rd, setAvatarname3rd] = useState()
  const [avatarname4th, setAvatarname4th] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [avatarbgcolor, setAvatarbgcolor] = useState()

  async function handleSubmitJoin(e) {
    e.preventDefault()
    try {
      //the fix for my CORS policy reject error was including 'api/' in the browser route
      await Axios.post("http://localhost:7000/api/register", {
        username,
        email,
        password,
        avatarname1st,
        avatarname2nd,
        avatarname3rd,
        avatarname4th,
        avatarbgcolor
      })
      console.log("user was successfully created")
    } catch (e) {
      console.log(e.response.data)
    }
  }
  return (
    <Page title="Join">
      <div className="dialogueWrapper-left">
        <div className="dialogueLeft">
          <div className="meowmersSpeechBubbleNoAnim sb3 text-0 darkBGlinks">
            <Link to="/backhome">
              <i className="fas fa-caret-left"></i>
            </Link>{" "}
            Cool. Let's get you set up:
          </div>
        </div>
      </div>

      <div className="dialogueWrapper-right">
        <div className="dialogueRight">
          <div className="userSpeechBubbleNoAnim sb1 text-1">
            <form onSubmit={handleSubmitJoin} action="/register" method="POST" id="registration-form">
              <div className="form-group">
                <label htmlFor="username-register" className="labelUserForm mb-1">
                  <small>Username (cannot change this)</small>
                </label>
                <input onChange={(e) => setUsername(e.target.value)} name="username" id="username-register" className="form-control" type="text" placeholder="Pick a username" autoComplete="off" />
              </div>
              <div className="form-group">
                <label htmlFor="avatarname-register" className="labelUserForm mb-1">
                  <small>Alien Avatar Name</small>
                </label>
                <div className="flex-dropdown-wrapper">
                  <div className="nameElement">
                    <select required onChange={(e) => setAvatarname1st(e.target.value)} name="avatarname1st" id="avatarname1st-register" className="dropdownText0 form-control form-control-sm">
                      <option value="avatarname0-starter" defaultValue disabled hidden>
                        1st
                      </option>
                      <option value="avatarname0-1">Ahkna</option>
                      <option value="avatarname0-2">Apollo</option>
                      <option value="avatarname0-3">Athena</option>
                      <option value="avatarname0-4">Ayra</option>
                      <option value="avatarname0-5">Biggles</option>
                      <option value="avatarname0-6">Bigglesworth</option>
                      <option value="avatarname0-7">Bojangles</option>
                      <option value="avatarname0-8">Buttons</option>
                      <option value="avatarname0-9">Catmahd</option>
                      <option value="avatarname0-10">Catna</option>
                      <option value="avatarname0-11">Echo</option>
                      <option value="avatarname0-12">Falkor</option>
                      <option value="avatarname0-13">Faria</option>
                      <option value="avatarname0-14">Felix</option>
                      <option value="avatarname0-15">Floof</option>
                      <option value="avatarname0-16">Floofy</option>
                      <option value="avatarname0-17">Fuzz</option>
                      <option value="avatarname0-18">Fuzzy</option>
                      <option value="avatarname0-19">Gaius</option>
                      <option value="avatarname0-20">Galactica</option>
                      <option value="avatarname0-21">Hissington</option>
                      <option value="avatarname0-22">Idris</option>
                      <option value="avatarname0-23">Invador</option>
                      <option value="avatarname0-24">Kiki</option>
                      <option value="avatarname0-25">Lil</option>
                      <option value="avatarname0-26">Luda</option>
                      <option value="avatarname0-27">Luffy</option>
                      <option value="avatarname0-28">Lulu</option>
                      <option value="avatarname0-29">Luna</option>
                      <option value="avatarname0-30">Meower</option>
                      <option value="avatarname0-31">Meowing</option>
                      <option value="avatarname0-32">Meowington</option>
                      <option value="avatarname0-33">Meowjax</option>
                      <option value="avatarname0-34">Meowsalot</option>
                      <option value="avatarname0-35">Meowsif</option>
                      <option value="avatarname0-36">Meowsly</option>
                      <option value="avatarname0-37">Merlin</option>
                      <option value="avatarname0-38">Merry</option>
                      <option value="avatarname0-39">Mewing</option>
                      <option value="avatarname0-40">Mewmers</option>
                      <option value="avatarname0-41">Mewmew</option>
                      <option value="avatarname0-42">Mewsley</option>
                      <option value="avatarname0-43">Mittens</option>
                      <option value="avatarname0-44">Nero</option>
                      <option value="avatarname0-45">Nova</option>
                      <option value="avatarname0-46">Nyla</option>
                      <option value="avatarname0-47">Nyota</option>
                      <option value="avatarname0-48">Nyoto</option>
                      <option value="avatarname0-49">Oreo</option>
                      <option value="avatarname0-50">Patches</option>
                      <option value="avatarname0-51">Pawsley</option>
                      <option value="avatarname0-52">Photon</option>
                      <option value="avatarname0-53">Pica</option>
                      <option value="avatarname0-54">Pixar</option>
                      <option value="avatarname0-55">Pixel</option>
                      <option value="avatarname0-56">Pouncer</option>
                      <option value="avatarname0-57">Prrsley</option>
                      <option value="avatarname0-58">Purring</option>
                      <option value="avatarname0-59">Quasar</option>
                      <option value="avatarname0-60">Ryzar</option>
                      <option value="avatarname0-61">Ryden</option>
                      <option value="avatarname0-62">Ryder</option>
                      <option value="avatarname0-63">Ryo</option>
                      <option value="avatarname0-64">Salem</option>
                      <option value="avatarname0-65">Scratcherson</option>
                      <option value="avatarname0-66">Scratches</option>
                      <option value="avatarname0-67">Scratchington</option>
                      <option value="avatarname0-68">Scratchy</option>
                      <option value="avatarname0-69">Shadow</option>
                      <option value="avatarname0-70">Squancherly</option>
                      <option value="avatarname0-71">Squanchington</option>
                      <option value="avatarname0-72">Squanchy</option>
                      <option value="avatarname0-73">Stella</option>
                      <option value="avatarname0-74">Trillion</option>
                      <option value="avatarname0-75">Trilon</option>
                      <option value="avatarname0-76">Tux</option>
                      <option value="avatarname0-77">Voltron</option>
                      <option value="avatarname0-78">Voxel</option>
                      <option value="avatarname0-79">Voxen</option>
                      <option value="avatarname0-80">Vrillion</option>
                      <option value="avatarname0-81">Vyrtex</option>
                      <option value="avatarname0-82">Xanxia</option>
                      <option value="avatarname0-83">Xavier</option>
                      <option value="avatarname0-84">Xerxes</option>
                      <option value="avatarname0-85">Xyla</option>
                      <option value="avatarname0-86">Xynar</option>
                      <option value="avatarname0-87">Zareen</option>
                      <option value="avatarname0-88">Zarina</option>
                      <option value="avatarname0-89">Zero</option>
                      <option value="avatarname0-90">Zora</option>
                      <option value="avatarname0-91">Zoran</option>
                    </select>
                  </div>
                  <div className="nameElement">
                    <select required onChange={(e) => setAvatarname2nd(e.target.value)} name="avatarname2nd" id="avatarname2nd-register" className="form-control form-control-sm">
                      <option value="avatarname0-starter" defaultValue disabled hidden>
                        2nd
                      </option>
                      <option value="avatarname0-0">- none -</option>
                      <option value="avatarname0-1">Ahkna</option>
                      <option value="avatarname0-2">Apollo</option>
                      <option value="avatarname0-3">Athena</option>
                      <option value="avatarname0-4">Ayra</option>
                      <option value="avatarname0-5">Biggles</option>
                      <option value="avatarname0-6">Bigglesworth</option>
                      <option value="avatarname0-7">Bojangles</option>
                      <option value="avatarname0-8">Buttons</option>
                      <option value="avatarname0-9">Catmahd</option>
                      <option value="avatarname0-10">Catna</option>
                      <option value="avatarname0-11">Echo</option>
                      <option value="avatarname0-12">Falkor</option>
                      <option value="avatarname0-13">Faria</option>
                      <option value="avatarname0-14">Felix</option>
                      <option value="avatarname0-15">Floof</option>
                      <option value="avatarname0-16">Floofy</option>
                      <option value="avatarname0-17">Fuzz</option>
                      <option value="avatarname0-18">Fuzzy</option>
                      <option value="avatarname0-19">Gaius</option>
                      <option value="avatarname0-20">Galactica</option>
                      <option value="avatarname0-21">Hissington</option>
                      <option value="avatarname0-22">Idris</option>
                      <option value="avatarname0-23">Invador</option>
                      <option value="avatarname0-24">Kiki</option>
                      <option value="avatarname0-25">Lil</option>
                      <option value="avatarname0-26">Luda</option>
                      <option value="avatarname0-27">Luffy</option>
                      <option value="avatarname0-28">Lulu</option>
                      <option value="avatarname0-29">Luna</option>
                      <option value="avatarname0-30">Meower</option>
                      <option value="avatarname0-31">Meowing</option>
                      <option value="avatarname0-32">Meowington</option>
                      <option value="avatarname0-33">Meowjax</option>
                      <option value="avatarname0-34">Meowsalot</option>
                      <option value="avatarname0-35">Meowsif</option>
                      <option value="avatarname0-36">Meowsly</option>
                      <option value="avatarname0-37">Merlin</option>
                      <option value="avatarname0-38">Merry</option>
                      <option value="avatarname0-39">Mewing</option>
                      <option value="avatarname0-40">Mewmers</option>
                      <option value="avatarname0-41">Mewmew</option>
                      <option value="avatarname0-42">Mewsley</option>
                      <option value="avatarname0-43">Mittens</option>
                      <option value="avatarname0-44">Nero</option>
                      <option value="avatarname0-45">Nova</option>
                      <option value="avatarname0-46">Nyla</option>
                      <option value="avatarname0-47">Nyota</option>
                      <option value="avatarname0-48">Nyoto</option>
                      <option value="avatarname0-49">Oreo</option>
                      <option value="avatarname0-50">Patches</option>
                      <option value="avatarname0-51">Pawsley</option>
                      <option value="avatarname0-52">Photon</option>
                      <option value="avatarname0-53">Pica</option>
                      <option value="avatarname0-54">Pixar</option>
                      <option value="avatarname0-55">Pixel</option>
                      <option value="avatarname0-56">Pouncer</option>
                      <option value="avatarname0-57">Prrsley</option>
                      <option value="avatarname0-58">Purring</option>
                      <option value="avatarname0-59">Quasar</option>
                      <option value="avatarname0-60">Ryzar</option>
                      <option value="avatarname0-61">Ryden</option>
                      <option value="avatarname0-62">Ryder</option>
                      <option value="avatarname0-63">Ryo</option>
                      <option value="avatarname0-64">Salem</option>
                      <option value="avatarname0-65">Scratcherson</option>
                      <option value="avatarname0-66">Scratches</option>
                      <option value="avatarname0-67">Scratchington</option>
                      <option value="avatarname0-68">Scratchy</option>
                      <option value="avatarname0-69">Shadow</option>
                      <option value="avatarname0-70">Squancherly</option>
                      <option value="avatarname0-71">Squanchington</option>
                      <option value="avatarname0-72">Squanchy</option>
                      <option value="avatarname0-73">Stella</option>
                      <option value="avatarname0-74">Trillion</option>
                      <option value="avatarname0-75">Trilon</option>
                      <option value="avatarname0-76">Tux</option>
                      <option value="avatarname0-77">Voltron</option>
                      <option value="avatarname0-78">Voxel</option>
                      <option value="avatarname0-79">Voxen</option>
                      <option value="avatarname0-80">Vrillion</option>
                      <option value="avatarname0-81">Vyrtex</option>
                      <option value="avatarname0-82">Xanxia</option>
                      <option value="avatarname0-83">Xavier</option>
                      <option value="avatarname0-84">Xerxes</option>
                      <option value="avatarname0-85">Xyla</option>
                      <option value="avatarname0-86">Xynar</option>
                      <option value="avatarname0-87">Zareen</option>
                      <option value="avatarname0-88">Zarina</option>
                      <option value="avatarname0-89">Zero</option>
                      <option value="avatarname0-90">Zora</option>
                      <option value="avatarname0-91">Zoran</option>
                    </select>
                  </div>
                  <div className="nameElement">
                    <select required onChange={(e) => setAvatarname3rd(e.target.value)} name="avatarname3rd" id="avatarname3rd-register" className="form-control form-control-sm">
                      <option value="avatarname0-starter" defaultValue disabled hidden>
                        3rd
                      </option>
                      <option value="avatarname0-0">- none -</option>
                      <option value="avatarname0-1">Ahkna</option>
                      <option value="avatarname0-2">Apollo</option>
                      <option value="avatarname0-3">Athena</option>
                      <option value="avatarname0-4">Ayra</option>
                      <option value="avatarname0-5">Biggles</option>
                      <option value="avatarname0-6">Bigglesworth</option>
                      <option value="avatarname0-7">Bojangles</option>
                      <option value="avatarname0-8">Buttons</option>
                      <option value="avatarname0-9">Catmahd</option>
                      <option value="avatarname0-10">Catna</option>
                      <option value="avatarname0-11">Echo</option>
                      <option value="avatarname0-12">Falkor</option>
                      <option value="avatarname0-13">Faria</option>
                      <option value="avatarname0-14">Felix</option>
                      <option value="avatarname0-15">Floof</option>
                      <option value="avatarname0-16">Floofy</option>
                      <option value="avatarname0-17">Fuzz</option>
                      <option value="avatarname0-18">Fuzzy</option>
                      <option value="avatarname0-19">Gaius</option>
                      <option value="avatarname0-20">Galactica</option>
                      <option value="avatarname0-21">Hissington</option>
                      <option value="avatarname0-22">Idris</option>
                      <option value="avatarname0-23">Invador</option>
                      <option value="avatarname0-24">Kiki</option>
                      <option value="avatarname0-25">Lil</option>
                      <option value="avatarname0-26">Luda</option>
                      <option value="avatarname0-27">Luffy</option>
                      <option value="avatarname0-28">Lulu</option>
                      <option value="avatarname0-29">Luna</option>
                      <option value="avatarname0-30">Meower</option>
                      <option value="avatarname0-31">Meowing</option>
                      <option value="avatarname0-32">Meowington</option>
                      <option value="avatarname0-33">Meowjax</option>
                      <option value="avatarname0-34">Meowsalot</option>
                      <option value="avatarname0-35">Meowsif</option>
                      <option value="avatarname0-36">Meowsly</option>
                      <option value="avatarname0-37">Merlin</option>
                      <option value="avatarname0-38">Merry</option>
                      <option value="avatarname0-39">Mewing</option>
                      <option value="avatarname0-40">Mewmers</option>
                      <option value="avatarname0-41">Mewmew</option>
                      <option value="avatarname0-42">Mewsley</option>
                      <option value="avatarname0-43">Mittens</option>
                      <option value="avatarname0-44">Nero</option>
                      <option value="avatarname0-45">Nova</option>
                      <option value="avatarname0-46">Nyla</option>
                      <option value="avatarname0-47">Nyota</option>
                      <option value="avatarname0-48">Nyoto</option>
                      <option value="avatarname0-49">Oreo</option>
                      <option value="avatarname0-50">Patches</option>
                      <option value="avatarname0-51">Pawsley</option>
                      <option value="avatarname0-52">Photon</option>
                      <option value="avatarname0-53">Pica</option>
                      <option value="avatarname0-54">Pixar</option>
                      <option value="avatarname0-55">Pixel</option>
                      <option value="avatarname0-56">Pouncer</option>
                      <option value="avatarname0-57">Prrsley</option>
                      <option value="avatarname0-58">Purring</option>
                      <option value="avatarname0-59">Quasar</option>
                      <option value="avatarname0-60">Ryzar</option>
                      <option value="avatarname0-61">Ryden</option>
                      <option value="avatarname0-62">Ryder</option>
                      <option value="avatarname0-63">Ryo</option>
                      <option value="avatarname0-64">Salem</option>
                      <option value="avatarname0-65">Scratcherson</option>
                      <option value="avatarname0-66">Scratches</option>
                      <option value="avatarname0-67">Scratchington</option>
                      <option value="avatarname0-68">Scratchy</option>
                      <option value="avatarname0-69">Shadow</option>
                      <option value="avatarname0-70">Squancherly</option>
                      <option value="avatarname0-71">Squanchington</option>
                      <option value="avatarname0-72">Squanchy</option>
                      <option value="avatarname0-73">Stella</option>
                      <option value="avatarname0-74">Trillion</option>
                      <option value="avatarname0-75">Trilon</option>
                      <option value="avatarname0-76">Tux</option>
                      <option value="avatarname0-77">Voltron</option>
                      <option value="avatarname0-78">Voxel</option>
                      <option value="avatarname0-79">Voxen</option>
                      <option value="avatarname0-80">Vrillion</option>
                      <option value="avatarname0-81">Vyrtex</option>
                      <option value="avatarname0-82">Xanxia</option>
                      <option value="avatarname0-83">Xavier</option>
                      <option value="avatarname0-84">Xerxes</option>
                      <option value="avatarname0-85">Xyla</option>
                      <option value="avatarname0-86">Xynar</option>
                      <option value="avatarname0-87">Zareen</option>
                      <option value="avatarname0-88">Zarina</option>
                      <option value="avatarname0-89">Zero</option>
                      <option value="avatarname0-90">Zora</option>
                      <option value="avatarname0-91">Zoran</option>
                    </select>
                  </div>
                  <div className="nameElement">
                    <select required onChange={(e) => setAvatarname4th(e.target.value)} name="avatarname4th" id="avatarname4th-register" className="form-control form-control-sm">
                      <option value="avatarname0-starter" defaultValue disabled hidden>
                        Gen
                      </option>
                      <option value="avatarname0-0">- none -</option>
                      <option value="avatarname0-1">I</option>
                      <option value="avatarname0-2">II</option>
                      <option value="avatarname0-3">III</option>
                      <option value="avatarname0-4">IV</option>
                      <option value="avatarname0-5">V</option>
                      <option value="avatarname0-6">VI</option>
                      <option value="avatarname0-7">VII</option>
                      <option value="avatarname0-8">VIII</option>
                      <option value="avatarname0-9">IX</option>
                      <option value="avatarname0-10">X</option>
                      <option value="avatarname0-11">XII</option>
                      <option value="avatarname0-12">XIII</option>
                      <option value="avatarname0-13">XIV</option>
                      <option value="avatarname0-14">XV</option>
                      <option value="avatarname0-15">XVI</option>
                      <option value="avatarname0-16">XVII</option>
                      <option value="avatarname0-17">XVIII</option>
                      <option value="avatarname0-18">XIX</option>
                      <option value="avatarname0-19">XX</option>
                      <option value="avatarname0-20">XXI</option>
                      <option value="avatarname0-21">XXII</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email-register" className="labelUserForm mb-1">
                    <small>Email</small>
                  </label>
                  <input onChange={(e) => setEmail(e.target.value)} name="email" id="email-register" className="form-control" type="text" placeholder="hooman@earthmail.com" autoComplete="off" />
                </div>
                <div className="form-group">
                  <label htmlFor="password-register" className="labelUserForm mb-1">
                    <small>Password</small>
                  </label>
                  <input onChange={(e) => setPassword(e.target.value)} name="password" id="password-register" className="form-control" type="password" placeholder="Create a password" />
                </div>
                <div className="form-group">
                  <label htmlFor="avatarbgcolor-register" className="labelUserForm mb-1">
                    <small>Favorite Color</small>
                  </label>
                  <input onChange={(e) => setAvatarbgcolor(e.target.value)} name="avatarbgcolor" id="avatarbg-register" className="form-control" type="color" defaultValue="#ff2f00" />
                </div>
                <input type="hidden" name="_csrf" defaultValue="<%= csrfToken %>" />
                <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                  Join Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Join
