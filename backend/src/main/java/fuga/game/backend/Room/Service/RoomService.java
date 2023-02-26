package fuga.game.backend.Room.Service;

import fuga.game.backend.Room.Room;

import java.util.List;

public interface RoomService {
    Room getRoom(Long id);
    List<Room> Rooms();
    Room updateRoom(Room room);
    Room makeRoom(Room room);
    Room changeRoomOwner(Room room, long uid);
    void deleteRoom(Long id);

}
