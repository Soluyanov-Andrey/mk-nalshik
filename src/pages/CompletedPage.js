import { useParams } from "react-router-dom";

const CompletedPage =() =>{

  const {id} = useParams();
  return(
      <div>
          {id}
      </div>
  )
}
export default CompletedPage;