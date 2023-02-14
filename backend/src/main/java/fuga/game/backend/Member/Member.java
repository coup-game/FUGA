package fuga.game.backend.Member;

import lombok.Data;

@Data
public class Member {
    private long rid;
    private String nick;
    private String passwd;
    private long wins;
    private long quantity;
}
