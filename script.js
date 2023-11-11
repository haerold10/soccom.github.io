// 경기 일정 데이터 
var gameSchedules = [ 
  { 
    date: "2021-10-01", 
    time: "15:00", 
    teams: "Team A vs Team B" 
  }, 
  { 
    date: "2021-10-05", 
    time: "18:30", 
    teams: "Team C vs Team D" 
  }, 
  { 
    date: "2021-10-10", 
    time: "14:15", 
    teams: "Team E vs Team F" 
  } 
]; 
// 커뮤니티 글 데이터 
var communityPosts = []; 
// 경기 일정을 화면에 표시하는 함수 
function displayGameSchedules() { 
  var scheduleContainer = document.getElementById("schedule-container"); 
  for (var i = 0; i < gameSchedules.length; i++) { 
    var schedule = gameSchedules[i]; 
    var scheduleCard = document.createElement("div"); 
    scheduleCard.classList.add("schedule-card"); 
    var dateElement = document.createElement("h3"); 
    dateElement.innerText = "Date: " + schedule.date; 
    var timeElement = document.createElement("p"); 
    timeElement.innerText = "Time: " + schedule.time; 
    var teamsElement = document.createElement("p"); 
    teamsElement.innerText = "Teams: " + schedule.teams; 
    scheduleCard.appendChild(dateElement); 
    scheduleCard.appendChild(timeElement); 
    scheduleCard.appendChild(teamsElement); 
    scheduleContainer.appendChild(scheduleCard); 
  } 
} 
// 커뮤니티 글 작성 기능 
// 커뮤니티 글 작성 기능 
function createCommunityPost() { 
  var communitySection = document.getElementById("community"); 
  var postElement = document.createElement("div"); 
  postElement.classList.add("post"); 
  var titleInput = document.createElement("input"); 
  titleInput.type = "text"; 
  titleInput.placeholder = "Title"; 
  var contentInput = document.createElement("textarea"); 
  contentInput.placeholder = "Content"; 
  var submitButton = document.createElement("button"); 
  submitButton.innerText = "Submit"; 
  submitButton.addEventListener("click", function() { 
    var title = titleInput.value; 
    var content = contentInput.value; 
    if (title.trim() !== "" && content.trim() !== "") { 
      var newPost = { 
        title: title, 
        content: content, 
        comments: [], 
        likes: 0, 
        dislikes: 0 
      }; 
      communityPosts.push(newPost); 
      displayCommunityPosts(); // Refresh the community posts display 
      titleInput.value = ""; 
      contentInput.value = ""; 
    } 
  }); 
  postElement.appendChild(titleInput); 
  postElement.appendChild(contentInput); 
  postElement.appendChild(submitButton); 
  communitySection.appendChild(postElement); 
} 
// 커뮤니티 글 표시 기능 
function displayCommunityPosts() { 
  var communitySection = document.getElementById("community"); 
  for (var i = 0; i < communityPosts.length; i++) { 
    var post = communityPosts[i]; 
    var postElement = document.createElement("div"); 
    postElement.classList.add("post"); 
    var titleElement = document.createElement("h3"); 
    titleElement.innerText = post.title; 
    var contentElement = document.createElement("p"); 
    contentElement.innerText = post.content; 
    var commentsElement = document.createElement("div"); 
    commentsElement.classList.add("comments"); 
    for (var j = 0; j < post.comments.length; j++) { 
      var comment = post.comments[j]; 
      var commentElement = document.createElement("div"); 
      commentElement.classList.add("comment"); 
      var commentTextElement = document.createElement("p"); 
      commentTextElement.innerText = comment.text; 
      commentElement.appendChild(commentTextElement); 
      commentsElement.appendChild(commentElement); 
    } 
    var likeButton = document.createElement("button"); 
    likeButton.innerText = "Like (" + post.likes + ")";
    likeButton.addEventListener("click", function() { 
      post.likes++;
      likeButton.innerText = "Like (" + post.likes + ")";
    }); 
    var dislikeButton = document.createElement("button"); 
    dislikeButton.innerText = "Dislike (" + post.dislikes + ")"; 
    dislikeButton.addEventListener("click", function() { 
      post.dislikes++;
      dislikeButton.innerText = "Dislike (" + post.dislikes + ")";
    }); 
    var commentInput = document.createElement("input"); 
    commentInput.type = "text"; 
    commentInput.placeholder = "Leave a comment"; 
    var commentButton = document.createElement("button"); 
    commentButton.innerText = "Comment"; 
    commentButton.addEventListener("click", function() { 
      var commentText = commentInput.value; 
      if(commentText.trim() !== "") {
        var newComment = {
          text: commentText
        };
      }
      post.comments.push(newComment);
      displayCommunityPosts();
      commentInput.value = ""; 
    }); 
    postElement.appendChild(titleElement); 
    postElement.appendChild(contentElement); 
    postElement.appendChild(commentsElement); 
    postElement.appendChild(likeButton); 
    postElement.appendChild(dislikeButton); 
    postElement.appendChild(commentInput); 
    postElement.appendChild(commentButton); 
    communitySection.appendChild(postElement); 
  } 
}

// 경기 일정 표시 및 커뮤니티 글 작성 기능 호출 
displayGameSchedules(); 
createCommunityPost(); 
displayCommunityPosts(); 
