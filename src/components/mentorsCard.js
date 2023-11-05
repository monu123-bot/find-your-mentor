import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import PastExp from './pastExp';
import MentorAvailability from './mentorAvailability';

const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function MentorCard({mentor}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
<>
    <a href='#' onClick={handleOpen}  style={{textDecoration:'None'}}  >
    <div className="vh-100" >
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">{mentor.name}</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                 {mentor.designation} <span className="mx-2">|</span> <a href="#!">{mentor.email}</a>
                </MDBCardText>
               
                <MDBCardText className="mb-1 h5">{mentor.timings}</MDBCardText>
                <MDBBtn rounded size="lg">
                  Message now
                </MDBBtn>
                
                  <div>
                    <MDBCardText className="mb-1 h5">{mentor.rating}/5</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                  </div>
                  
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </a>
    


    

 <Modal
 open={open}
 onClose={handleClose}
 aria-labelledby="modal-modal-title"
 aria-describedby="modal-modal-description"
 >


 
   
 <div style={{width:'700px', height:'600px', overflowY:"auto",marginLeft:'auto',marginRight:'auto',marginTop:'100px',borderRadius:'12px',className:'scrollBar'}} >
 
 <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
 <Button onClick={handleClose}>Close</Button>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                 
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{mentor.name}</MDBTypography>
                  <MDBCardText>{mentor.designation}</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">{mentor.totalSlots-mentor.filledSlots}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Available slots</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">{mentor.rating}/5</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Posts</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Past Experience</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>

                    
                  <PastExp props={mentor.past_experience}/>
                   
                  </div>
                </div>
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Availability</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>

                    <MentorAvailability props={mentor.available} />
                 
                   
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>

 </div>


 

 </Modal>
 </>
  );
}