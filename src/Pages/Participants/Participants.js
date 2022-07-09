import React, { useState } from 'react'
import Input from '../../Components/Input/Input'
import SidebarSection from '../../Components/Navigation/SidebarSection'
import SearchBar from '../../Components/SearchBar/SearchBar'
import classes from "./Participants.module.css"
import SidebarIcon from "../../Assets/Icons/sidebar.svg";
import EclipseIcon from "../../Assets/Icons/eclipse.svg";
import CloseIcon from "../../Assets/Icons/close.svg";
import { useEffect } from 'react'
import axios from 'axios'
import Pagination from '../../Components/Pagination/Pagination'
import { useParams } from 'react-router-dom'
import { BASE_URL, getToken } from '../../Configs/APIAuth'

function Participants() {
  const { course_id, section_id, material_id } = useParams();
  const [participants, setParticipants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [specialistTerm, setSpecialistTerm] = useState("");
  const [dataCourse, setDataCourse] = useState({});

  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebarShow = () => setShowSidebar(!showSidebar);

  const openedSidebar = showSidebar ? classes.opened : classes.closed;

  useEffect(() => {
    const token = getToken();
    var configGetCourse = {
      method: 'get',
      url: `${BASE_URL}/courses/${course_id}`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    axios(configGetCourse).then(res => setDataCourse((res.data.data))).catch(err => console.log(err));
    const fetchParticipants = async () => {
      const res = await axios.get("https://62b6beff6999cce2e806fbe8.mockapi.io/participants");
      setParticipants(res.data);
    }

    fetchParticipants();
  }, [course_id])

  // Get Current Participants
  if(specialistTerm === ""){
    const indexOfLastParticipant = currentPage * dataPerPage;
    const indexOfFirstParticipant = indexOfLastParticipant - dataPerPage;
    var currentParticipants =  participants.slice(indexOfFirstParticipant, indexOfLastParticipant);
  } else {
    const indexOfLastParticipant = currentPage * dataPerPage;
    const indexOfFirstParticipant = indexOfLastParticipant - dataPerPage;
    var filtered =  participants.filter(participant => participant.specialist.toLowerCase().includes(specialistTerm.toLowerCase()));
    currentParticipants =  filtered.slice(indexOfFirstParticipant, indexOfLastParticipant);
  }
  
  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const prevPage = (page) => setCurrentPage(page);
  const nextPage = (page) => setCurrentPage(page);

  const searchParticipantsHandler = (e) => {
    setSearchTerm(e.target.value);
  }

  const filterSpecializationHandler = (e) => {
    setSpecialistTerm(e.target.value)
    console.log(specialistTerm)
  }

  return (
    <>
      <SidebarSection isOpen={showSidebar} course_id={course_id} section_id={section_id} material_id={material_id} data={dataCourse}/>
      <div style={{padding: "20px 40px"}}>
        <div className={`${classes.imageWrapper} ${openedSidebar}`} style={{display: "inline-block", cursor: "pointer", zIndex: "2", position: "fixed", top: "70"}}  onClick={handleSidebarShow}>
          {showSidebar ? (
            <img src={CloseIcon} alt="icon" width="40px" height="40px"/>
            ):(
            <>
              <img src={EclipseIcon} alt="icon" width="40px" height="40px" style={{backgroundColor: "#0D2341", borderRadius: "50%"}}/>
              <img src={SidebarIcon} alt="icon" width="18px" height="18px" className={classes.innerImage}/>
            </>
            )
          }
        </div>
      </div>
      <div className={`row mb-5 m-auto ${classes.participants}`} style={{width: "85%"}}>
        <h2>Participants</h2>
        <h4 className='mt-2'>{dataCourse.name}</h4>
        <div className="my-4">
          <div className={classes.filterTop}>
            <p>Inactive for more than</p>
            <Input type="text" placeholder="Select Period"/>
          </div>
          <div className={classes.filterBottom}>
            <div className={classes.left}>
              <p>Filter Specialization</p>
              <Input type="text" placeholder="Select Role" onChange={filterSpecializationHandler} />
            </div>
            <div className={classes.right}>
              <SearchBar placeholder="Cari Participants" onChange={searchParticipantsHandler}/>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: "#D6DEEC", borderRadius: '20px', padding: "0"}}>
          <table className={classes.tableParticipant}>
            <thead>
              <tr>
                <th width="20%">Full Name</th>
                <th width="20%">Specialist</th>
                <th width="20%">Email</th>
                <th width="20%">Last Access Course</th>
              </tr>
            </thead>
            <tbody>
              {currentParticipants.filter((participant) => {
                if(searchTerm === ""){
                  return participant
                } else if (participant.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return participant
                }return false
              }).map((participant) => {
                return(
                  <tr key={participant.id}>
                    <td width="20%">{participant.fullName}</td>
                    <td width="20%">{participant.specialist}</td>
                    <td width="20%">{participant.email}</td>
                    <td width="20%">{participant.latestAccessCourse}</td>
                  </tr>
                )
              })}
            </tbody>     
          </table>
          {
            specialistTerm === "" ? (
              <div className={classes.pagination}>
                <Pagination dataPerPage={dataPerPage} totalData={participants.length} paginate={paginate} prevPage={prevPage} nextPage={nextPage} currentPage={currentPage}/>
              </div>
            ) : (
              <div className={classes.pagination}>
                <Pagination dataPerPage={dataPerPage} totalData={filtered.length} paginate={paginate} prevPage={prevPage} nextPage={nextPage} currentPage={currentPage}/>
              </div>
            )
          }
        </div>
      </div> 
    </>
  )
}

export default Participants