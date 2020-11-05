import React, { useState } from "react";
import PostFormEdit from "./PostFormEdit";
import { Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import {
  fetchPostRequest,
  fetchPostSuccess,
  fetchPostFailure,
  postEdit,
} from "./../../../redux";
import UserShow from "./../../../components/UserShow";

const Post = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.post);
  const user = useSelector((state) => state.userCreate.user);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(props.post.text);
  const [like, setLike] = useState(
    props.post.liking.some((usersLinking) => {
      return usersLinking.id === user.id;
    })
  );
  const [showUser, setShowUser] = useState(false);

  const token = Cookies.get("token");

  const fetchPosts = (data) => {
    return (dispatch) => {
      console.log("return");
      dispatch(fetchPostRequest());
      fetch(`https://my-pasteque-space.herokuapp.com/posts/${props.post.id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.error) {
            console.log(response.messages);
            dispatch(fetchPostFailure(response.message));
          } else {
            console.log("response");
            console.log(response);
            console.log("thisPost");
            console.log(
              posts.map((post) => {
                return post.id === response.id ? response : post;
              })
            );
            dispatch(
              fetchPostSuccess(
                posts.map((post) => {
                  return post.id === response.id ? response : post;
                })
              )
            );
            setEditing(false);
          }
        });
    };
  };

  const isLiked = () => {
    return props.post.liking.some((usersLinking) => {
      return usersLinking.id === user.id;
    });
  };

  const likeReverse = () => {
    var result = [];
    if (isLiked()) {
      result = props.post.liking.filter((likingUser) => {
        return likingUser.id !== user.id;
      });
      setLike(false);
    } else {
      result = [user].concat(props.post.liking);
      setLike(true);
    }
    const UsersLikingIds = result.map((likingUser) => {
      return likingUser.id;
    });

    dispatch(fetchPosts({ liking: UsersLikingIds }));
    console.log(UsersLikingIds);
  };

  const handleDelete = () => {
    fetch(`https://my-pasteque-space.herokuapp.com/posts/${props.post.id}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        dispatch(
          fetchPostSuccess(
            posts.filter((post) => {
              return post.id != response.id;
            })
          )
        );
      });
  };
  console.log(showUser);
  return (
    <>
      {props.post.user && (
        <Card className="text-center">
          {props.homeIndex && user.username && (
            <>
              <Card.Header>
                {showUser && (
                  <UserShow setShowUser={setShowUser} user={props.post.user} />
                )}
                <Button variant="outline-dark" onClick={() => setShowUser(true)}>
                  <h1>{props.post.user.username}</h1>
                </Button>
              </Card.Header>
            </>
          )}
          <Card.Body>
            <Card.Title>
              {editing && user.id === props.post.user.id ? (
                <PostFormEdit
                  setPosts={props.setPosts}
                  fetchPosts={fetchPosts}
                  setEditing={setEditing}
                  text={text}
                  setText={setText}
                />
              ) : (
                <h2>{props.post.text}</h2>
              )}
            </Card.Title>
            {user.id === props.post.user.id && !editing && (
              <div className="editButtons">
                <Button onClick={() => setEditing(true)} variant="primary">
                <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button onClick={handleDelete} variant="danger">
                <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
              </div>
            )}
          </Card.Body>
          <Card.Footer className="text-muted">
            {user.username && <h6>
              {like ? (
                <FontAwesomeIcon
                  className={`active-like`}
                  onClick={likeReverse}
                  icon={faHeartbeat}
                />
              ) : (
                <FontAwesomeIcon
                  className={`inactive-like`}
                  onClick={likeReverse}
                  icon={faHeartbeat}
                />
              )}
              {props.post.liking.length}
            </h6>}
            . <h6> {props.post.created_at} </h6>
          </Card.Footer>
        </Card>
      )}
    </>
  );
};

export default Post;
