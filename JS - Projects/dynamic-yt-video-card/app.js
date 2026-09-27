const videoCardContainer = document.querySelector(".container");
const videoData = {
  thumbnail: "yt-video-thumbnail.avif",
  title: "Installing Vs Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  channelName: "CodeWithHarry",
  Views: "727k",
  uploadingTime: "2 month ago"
};

function videoCardGenerator(video) {
    return videoCardContainer.innerHTML = `<img src="${video.thumbnail}" alt="The Video Thumbnail">
    <div class="content">
        <div class="title">
            <h3>${video.title}</h3>
        </div>
        <div class="more-details">
            <p>${video.channelName} • ${video.videoVeiws} veiws • ${video.uploadingTime}</p>
        </div>
    </div>`;
}
videoCardGenerator(videoData);