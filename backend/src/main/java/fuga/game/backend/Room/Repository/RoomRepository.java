package fuga.game.backend.Room.Repository;

import fuga.game.backend.Member.Member;
import fuga.game.backend.Room.Room;

import java.util.List;
import java.util.Optional;

public interface RoomRepository {
    Room save(Room room);
    void clearStore();
    Optional<Member> findById(Long id);
    void delete();
    List<Member> findAll();
}
