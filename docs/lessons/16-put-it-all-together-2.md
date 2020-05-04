# 16 - Putting it all together II

<Teacher name="Flo"></Teacher>

## Goals
- Learn how we can use the data structures we've learned about in order to solve real problems
- Use object oriented paradigms together with complex data structures
- *Get more confident transforming requirements into code*

## Lesson

Today's lesson is again completely in the form of a long, interactive exercise. Here you find the outline of what we'll build. Afterwards, you can find a similar exercise to try later.

### :musical_note: What do we listen to? :musical_note: 

Today will be all about music. We're going to build a streaming service.
The feature our users want most, is to gather listening statistics per track, per artist, per album and per user.

Our base entity is therefore the track. A track can belong to an album, but doesn't have to. It has an id, a name,
an artist and it might appear on an album.
An album is a list of tracks.
Our streaming service should be called `"redi - streaming"`. It has one player, that, once it is invoked with a track,
will print `"Now playing: <artist_name> - <track_name>"`.

Our users are interested in:
- Who was their top artist?
- Which was their favorite track?

Our artists are interested in:
- Who is my top fan? (Most played tracks)
- How many different users have streamed my music?

Our business-model is simple and we have to pay by the number of streams that happened. Therefore our business wants
to know:
- How many streams have there been in total?

#### Let's start with structures
What structures do we need? Let's create them!

#### Let's add some data
Add some tracks to your streaming service. Do your assumptions hold? Can you answer all the questions?

#### Starting point
<Solution>
```java
StreamingService.java
Player player;


public static void main(String... args) {
	// create some data
	player.play(track, user);
	player.play(track1, user);
	player.play(track2, user2);
	player.play(track3, user);
	player.play(track, user2);
	player.play(track, user2);
	player.play(track, user2);
	player.play(track, user2);
	player.play(track, user2);
	player.play(track, user);
	player.play(track3, user);
	player.play(track4, user);
	player.play(track5, user);
	player.play(track6, user);

	// call the statistics from player
}




Player.java:
RediStreamingStatistics rediStatistics;
Map<User, UserStatistics> userStatistics;
Map<Artist, Artiststatistic> artistStatistics;

play(Track track, User user) {
	rediStatistics.recordPlay();
	userStatistics.get(user).recordPlay(track);
	artistStatistics.get(track.getArtist()).recordPlay(user);
	System.out.println("User "+ user.name() + " plays the track "+ track.name());
}

User getTopFanForArtist(Artist artist) {
	return artistStatistics.get(artist).getTopFan();
}


----------------------
RediStreamingStatistics.java

recordPlay(){
	this.totalPlays = this.totalPlays + 1;
}

----------------------
UserStatistics.java
Map<Track, Integer> trackPlays;
Map<Artist, Integer> artistPlays;

recordPlay(Track track) {
	int totalTrackStreams = this.trackPlays.get(track) + 1;
	this.trackPlays.set(track, totalTrackStreams);
	int totalArtistStreams = this.artistPlays.get(track.getArtist()) + 1;
	this.artistPlays.set(track.getArtist(), totalArtistStreams);
}

public Track getFavoriteTrack() {
	int currentMax = 0;
	Track maxTrack;
	for(Track t : trackPlays.keySet()) {
		int trackNumber = trackPlays.get(t);
		if (trackNumber > currentMax) {
			currentMax = trackNumber;
			maxTrack = t;
		}
	}
	if (currentMax == 0) {
		System.out.println("No streams, therefore no top track");
		return maxTrack;
	}
	return maxTrack;
}

public Track getFavoriteArtist() {
	// exactly the same but with artistMap
}

----------------------
ArtistStatistics.java
Map<User, Integer> trackPlays;

recordPlay(User user){
	int totalStreams = this.trackPlays.get(user) + 1;
	this.trackPlays.set(user, totalStreams);
}

public User getTopFan() {
	// Loop over trackPlays map and find the Maximum integer.
	// Return the user of the maximum integer.
	// useful functions:
	// Map.keySet() => returns all keys of the map
}

public int getDifferentUserCount() {
	return trackPlays.keySet().size();
}
----------------------

```
</Solution>

### Expand it
If you're done and you have all the results, can you add a genre?
Answer the following question:
- What is the most streamed genre on your service?