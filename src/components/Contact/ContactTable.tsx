import React, { useMemo, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  Row,
} from "@tanstack/react-table";
import contactsData from "../../data/contacts.json";
import "./ContactTable.scss";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCog,
  FaEnvelope,
  FaPen,
  FaPhone,
  FaTrash,
} from "react-icons/fa";

type Contact = {
  id: number;
  name: string;
  email: string;
  particulier: string;
  phone: string;
  avatar: string;
  opportunity: string;
  responsible: string;
  tags: string[];
};

const ContactRow: React.FC<{
  row: Row<Contact>;
  onToggle: (id: number) => void;
  selectedIds: number[];
  onDelete: (id: number) => void;
  onEdit?: (contact: Contact) => void;
}> = ({ row, onToggle, selectedIds, onDelete, onEdit }) => {
  const contact = row.original as Contact;

  const visibleTags = contact.tags.slice(0, 2);
  const hasMoreTags = contact.tags.length > 2;

  return (
    <tr>
      {/* 1: Checkbox */}
      <td className="td">
        <input
          type="checkbox"
          checked={selectedIds.includes(contact.id)}
          onChange={() => onToggle(contact.id)}
        />
      </td>

      {/* 2: Nom du contact */}
      <td className="td">
        <div className="contentName">
          <h3>{contact.name}</h3>
          <p>{contact.particulier}</p>
        </div>
      </td>

      {/* 3: Email  */}
      <td className="td">
        <div className="email-cell">
          <FaEnvelope className="email-icon" />
          {contact.email}
        </div>
      </td>

      {/* 4: Téléphone  */}
      <td className="td">
        <div className="phone-cell">
          <FaPhone className="phone-icon" />
          {contact.phone}
        </div>
      </td>

      {/* 5: Opportunity */}
      <td className="td">{contact.opportunity}</td>

      {/* 6: Responsable */}
      <td className="td">
        <div className="respon-cell">
          <img src={contact.avatar} alt="user avatar" className="user-avatar" />
          {contact.responsible}
        </div>
      </td>

      {/* 7: Étiquettes */}
      <td className="td">
        <div className="label-cell">
          {visibleTags.map((tag: string, index: number) => (
            <span key={index} className={`label label-${tag.toLowerCase()}`}>
              {tag}
            </span>
          ))}
          {hasMoreTags && (
            <div className="hiddenItem">+{contact.tags.length - 2}</div>
          )}
        </div>
      </td>

      {/* 8: Setting*/}
      <td className="td ">
        <div className="setting-cell">
          <button className="action-btn" onClick={() => onEdit?.(contact)}>
            <FaPen className="pen-icon" />
          </button>
          <button className="action-btn" onClick={() => onDelete(contact.id)}>
            <FaTrash className="trash-icon" />
          </button>
        </div>
      </td>
    </tr>
  );
};
const ContactTable: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(contactsData);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  // checkbox

  // craw data
  const data: Contact[] = useMemo(() => contacts, [contacts]);

  const columns: ColumnDef<Contact>[] = useMemo(
    () => [
      {
        header: () => (
          <input
            type="checkbox"
            checked={
              table.getRowModel().rows.length > 0 &&
              selectedIds.length === table.getRowModel().rows.length
            }
            onChange={handleToggleAll}
          />
        ),
        accessorKey: "id",
        cell: () => null,
      },
      { header: "Nom du contact", accessorKey: "name" },
      { header: "Email", accessorKey: "email" },
      { header: "Téléphone", accessorKey: "phone" },
      { header: "Opportunity", accessorKey: "opportunity" },
      { header: "Responsable", accessorKey: "responsible" },
      { header: "Étiquettes", accessorKey: "labels" },
      {
        header: () => <FaCog className="setting" />,
        id: "setting",
        cell: () => null,
      },
    ],
    []
  );
  const handleToggle = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
  };
  const handleToggleAll = () => {
    if (selectedIds.length === table.getRowModel().rows.length) {
      setSelectedIds([]);
    } else {
      const allIds = table.getRowModel().rows.map((row) => row.original.id);
      setSelectedIds(allIds);
    }
  };
  const handleDelete = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleEdit = (contact: Contact) => {
    console.log("Editing contact:", contact); // Thêm logic chỉnh sửa (ví dụ: mở modal)
  };
  // pagination
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
  });

  // show quantity elenment in current page
  const { pageIndex, pageSize } = table.getState().pagination;
  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, data.length);

  return (
    <div className="contact-table-container">
      <div className="table-view">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <ContactRow
                key={row.id}
                row={row}
                onToggle={handleToggle}
                selectedIds={selectedIds}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div className="pagination">
        <div className="page-size">
          <span>Élements par page</span>
          <select
            value={pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[5, 10, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <span>
          {startRow}-{endRow} sur {data.length}
        </span>
        <div className="page-controls">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <FaChevronLeft />
          </button>
          <span>
            {pageIndex + 1} de {table.getPageCount()}
          </span>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactTable;
