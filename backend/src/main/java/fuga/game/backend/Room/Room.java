package fuga.game.backend.Room;

import lombok.Data;

@Data
public class Room {
    private long rid;
    private long uid;
    private String name;
    private long people;
    private boolean roomPrivate;
    private String passwd;
    private long userturn;
}
