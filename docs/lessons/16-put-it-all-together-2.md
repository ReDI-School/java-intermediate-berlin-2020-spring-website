# 16 - Putting it all together II

<Teacher name="Flo"></Teacher>

## Goals
- Learn how we can use the data structures we've learned about in order to solve real problems
- Use object oriented paradigms together with complex data structures
- *Get more confident transforming requirements into code*

## Lesson

Today's lesson is again completely in the form of a long, interactive exercise. Here you find the outline of what we'll build. Afterwards, you can find a similar exercise to try later.

### :music_note: What do we listen to? :music_note: 

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

### Expand it
If you're done and you have all the results, can you add a genre?
Answer the following question:
- What is the most streamed genre on your service?