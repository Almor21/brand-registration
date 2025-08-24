"""create-brand-table

Revision ID: 7bb60a2728b9
Revises: 
Create Date: 2025-08-24 13:27:59.985775

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '7bb60a2728b9'
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.create_table(
        "brands",
        sa.Column("id", sa.String, primary_key=True, index=True),
        sa.Column("name", sa.String, nullable=False),
        sa.Column("owner", sa.String, nullable=False),
        sa.Column("description", sa.String, nullable=True),
        sa.Column("state", sa.String, nullable=False),
    )
    pass
    # ### end Alembic commands ###


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_table("brands")
    pass
    # ### end Alembic commands ###
