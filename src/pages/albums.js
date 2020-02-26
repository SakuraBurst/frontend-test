import React, { useEffect } from "react";
import { ListGroup, Spinner, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { get, map } from "lodash";
import {
  albumFetchAction,
  filterAlbum,
  getAlbumPhotos
} from "../actions/albums";
import { authLoginAction } from "../actions/auth";
import MyModal from "../containers/modal";

export default function AlbumsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(state => get(state, "albums.loading", false));
  const data = useSelector(state => get(state, "albums.data", []));
  const [modalShow, setModalShow] = React.useState(false);
  //const [albumId, setAlbumId] = React.useState(false);
  useEffect(() => {
    dispatch(albumFetchAction());
  }, [dispatch]);
  const getAlbum = id => {
    dispatch(getAlbumPhotos(id));
  };
  const filterAlbums = () => {
    dispatch(filterAlbum());
  };
  return (
    <ListGroup>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <div>
          <Button onClick={filterAlbums}>filter</Button>
          {map(data, item => (
            <ListGroup.Item
              style={{ cursor: "pointer" }}
              onClick={() => {
                setModalShow(true);
                //setAlbumId();
                getAlbum(item.id);
              }}
            >
              {item.title}
            </ListGroup.Item>
          ))}
          <MyModal
            show={modalShow}
            //albumId={albumId}
            onHide={() => setModalShow(false)}
          />
        </div>
      )}
    </ListGroup>
  );
}
