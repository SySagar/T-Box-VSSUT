import "../App.css";

export default function SetUpLinks(modal) {
 

    const toggleModal = () => {
       modal=!modal
      };

  console.log(modal)

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div>


      {modal && (
          <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Todos</h2>

           {console.log('hemlo')}
          </div>
        </div>
      )}

      </div>
    
  );
}
