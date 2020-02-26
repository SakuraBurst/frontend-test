import React from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
//import { getAlbumPhotos } from "../actions/albums";
import { get, map } from "lodash";

function MyModal(props) {
  //const dispatch = useDispatch();
  const data = useSelector(state => get(state, "albums.currentAlbum", []));
  //useEffect(() => {
  //dispatch(getAlbumPhotos(props.albumId));
  //});
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {map(data, item => (
          <ListGroup.Item>{item.title}</ListGroup.Item>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
