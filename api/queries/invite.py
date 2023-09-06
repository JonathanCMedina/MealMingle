from pydantic import BaseModel
from queries.pool import pool


class GuestIn(BaseModel):
    guest: int
    event: int


class GuestOut(GuestIn):
    guest_id: int


class InviteRepository:
    def invite(self, guest: GuestIn) -> GuestOut:
        try:
            guest_id = None
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO guests
                        (guest,
                        event)
                        VALUES (%s, %s)
                        RETURNING guest_id;
                        """,
                        [
                            guest.guest,
                            guest.event,
                        ],
                    )
                    guest_id = result.fetchone()[0]
                    old_data = guest.dict()
                    return GuestOut(guest_id=guest_id, **old_data)
        except Exception as e:
            print(e)
            return {"message": "Could not invite"}
