create table tracks(
    track varchar(255),
    trackId int references  users(id)
    )