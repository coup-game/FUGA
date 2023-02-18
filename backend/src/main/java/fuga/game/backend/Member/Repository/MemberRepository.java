package fuga.game.backend.Member.Repository;

import fuga.game.backend.Member.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Member save(Member member);
    List<Member> findAll();
    void delete(Long id);
    Optional<Member> findById(Long id);
    void clearStore();
}
