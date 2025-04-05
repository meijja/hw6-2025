var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// Initialize the video element and turn off autoplay and turn off looping.
document.addEventListener("DOMContentLoaded", function() {
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	video.muted = false;
	console.log("Turned off autoplay and looping")

	// Play the video and update the volume information.
	function updateVolume() {
		var volumeInfo = document.querySelector("#volume");
        volumeInfo.textContent = `${Math.round(video.volume * 100)}%`;
    }
	document.querySelector("#play").addEventListener("click", function() {
		updateVolume();
		video.play()
		console.log("Play video");
   });

	// Pause the video.
	document.querySelector("#pause").addEventListener("click", function() {
		video.pause()
		console.log("Pause video");
   });

   // Slow the current video speed by 10% each time the button is clicked 
   // and log the new speed to the console.  
   document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log(`Slow video to ${video.playbackRate.toFixed(2)}`);
	});

	// Increase the current video speed each time the button is clicked 
	// and log the new speed to the console.
	// Change it by an amount proportional to the slow down.
	// If you slow down three times and then speed up three times
	// you should be within 5 digits of 100% again.
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.9;
		console.log(`Speed video to ${video.playbackRate.toFixed(2)}`);
	});

	// Advance the current video by 10 seconds.
	// If the video length has been exceeded go back to the start of the video - no farther.
	// Log the current location of the video.
	document.querySelector("#skip").addEventListener("click", function() {
		video.currentTime += 10;
		if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
		console.log(`Video current time: ${video.currentTime.toFixed(2)}`);
	});

	// Mute/unmute the video and update the text in the button.
	document.querySelector("#mute").addEventListener("click", function() {
		var muteButton = document.querySelector("#mute");
		if (video.muted == true) {
			video.muted = false;
			muteButton.textContent = "Mute";
			console.log("Muted the video");
		}
		else {
			video.muted = true;
			muteButton.textContent = "Unmute";
			console.log("Unmuted the video");
		}
	});

	// Change the volume based on the slider and update the volume information.
	document.querySelector("#slider").addEventListener("input", function() {
		var slider = document.querySelector("#slider");
		video.volume = slider.value / 100;
		updateVolume()
		console.log("Change volume slider")
	});

	// Utilize the existing oldSchool class on the video element
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("Make old school")
	});

	// Remove the oldSchool class from the video.
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("Remove old school")
	});
});

