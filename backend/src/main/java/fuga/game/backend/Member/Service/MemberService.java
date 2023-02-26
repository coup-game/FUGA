package fuga.game.backend.Member.Service;

import fuga.game.backend.Member.Member;

public interface MemberService {
    Member getMemberById(Long id);
    Boolean join(Member member);
    void deleteMemberById(Long id);

}
