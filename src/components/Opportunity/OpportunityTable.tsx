import React, { useMemo, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  Row,
} from "@tanstack/react-table";
import opportunitesData from "../../data/listOpportunites.json";
import "../Contact/ContactTable.scss";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCog,
  FaPen,
  FaTrash,
} from "react-icons/fa";

type Opportunite = {
  id: number;
  name: string;
  status: string;
  tags: string[];
  organisation: string;
  contact: string;
  avatar: string;
  responsible: string;
  valeur: string;
  dateClosing: string;
};

const OpportuniteRow: React.FC<{
  row: Row<Opportunite>;
  onToggle: (id: number) => void;
  selectedIds: number[];
  onDelete: (id: number) => void;
  onEdit?: (opportunite: Opportunite) => void;
}> = ({ row, onToggle, selectedIds, onDelete, onEdit }) => {
  const opportunite = row.original as Opportunite;

  const visibleTags = opportunite.tags.slice(0, 2);
  const hasMoreTags = opportunite.tags.length > 2;

  return (
    <tr>
      <td className="td">
        <input
          type="checkbox"
          checked={selectedIds.includes(opportunite.id)}
          onChange={() => onToggle(opportunite.id)}
        />
      </td>

      <td className="td">
        <div className="contentName">
          <h3>{opportunite.name}</h3>
        </div>
      </td>

      <td className="td">
        <div className="email-cell">
          {/* <FaEnvelope className="email-icon" /> */}
          {opportunite.status}
        </div>
      </td>

      <td className="td">
        <div className="label-cell">
          {visibleTags.map((tag: string, index: number) => (
            <span key={index} className={`label label-${tag.toLowerCase()}`}>
              {tag}
            </span>
          ))}
          {hasMoreTags && (
            <div className="hiddenItem">+{opportunite.tags.length - 2}</div>
          )}
        </div>
      </td>

      <td className="td">
        <div className="phone-cell">
          {/* <FaPhone className="phone-icon" /> */}
          {opportunite.organisation}
        </div>
      </td>

      <td className="td">{opportunite.contact}</td>

      <td className="td">
        <div className="respon-cell">
          <img
            src={opportunite.avatar}
            alt="user avatar"
            className="user-avatar"
          />
          {opportunite.responsible}
        </div>
      </td>

      <td className="td">{opportunite.valeur}</td>

      <td className="td">{opportunite.dateClosing}</td>

      <td className="td ">
        <div className="setting-cell">
          <button className="action-btn" onClick={() => onEdit?.(opportunite)}>
            <FaPen className="pen-icon" />
          </button>
          <button
            className="action-btn"
            onClick={() => onDelete(opportunite.id)}
          >
            <FaTrash className="trash-icon" />
          </button>
        </div>
      </td>
    </tr>
  );
};

const OpportunityTable: React.FC = () => {
  const [opportunites, setOpportunites] =
    useState<Opportunite[]>(opportunitesData);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // craw data
  const data: Opportunite[] = useMemo(() => opportunites, [opportunites]);

  const columns: ColumnDef<Opportunite>[] = useMemo(
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
      { header: "Phase", accessorKey: "phase" },
      { header: "Étiquettes", accessorKey: "labels" },
      { header: "Organisation", accessorKey: "organisation" },
      { header: "Contact", accessorKey: "contact" },
      { header: "Responsable", accessorKey: "responsible" },
      { header: "Valeur", accessorKey: "valeur" },
      { header: "Date closing", accessorKey: "dateClosing" },

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
    setOpportunites(
      opportunites.filter((opportunites) => opportunites.id !== id)
    );
  };

  const handleEdit = (opportunites: Opportunite) => {
    console.log("Editing opportunites:", opportunites); // Thêm logic chỉnh sửa (ví dụ: mở modal)
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
              <OpportuniteRow
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
          <span>
            {startRow}-{endRow} sur {data.length}
          </span>
        </div>
        <div className="paginati-center">
          <div className="page-controls">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <FaChevronLeft size={18} />
            </button>
            <span>0{pageIndex + 1}</span>
            <span>de</span>
            <span>0{table.getPageCount()}</span>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default OpportunityTable;
