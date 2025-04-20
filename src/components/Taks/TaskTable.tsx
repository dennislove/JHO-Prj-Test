import React, { useMemo, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  Row,
} from "@tanstack/react-table";
import taskListsData from "../../data/listTasks.json";
import "../Contact/ContactTable.scss";
import {
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaCog,
  FaEnvelope,
  FaPen,
  FaPhone,
  FaTrash,
} from "react-icons/fa";

type TaskList = {
  id: number;
  realise: boolean;
  title: string;
  dateEnd: string;
  email: string;
  opportunite: string;
  status: string;
  contact: string;
  responsable: string;
  dateStart: string;
  avatar: string;
};

const TaskListRow: React.FC<{
  row: Row<TaskList>;
  onToggle: (id: number) => void;
  selectedIds: number[];
  onDelete: (id: number) => void;
  onEdit?: (taskList: TaskList) => void;
}> = ({ row, onToggle, selectedIds, onDelete, onEdit }) => {
  const taskList = row.original as TaskList;

  return (
    <tr>
      {/* 1: Checkbox */}
      <td className="td">
        <input
          type="checkbox"
          checked={selectedIds.includes(taskList.id)}
          onChange={() => onToggle(taskList.id)}
        />
      </td>
      <td className="td">
        <div className="email-cell">
          {taskList.realise === true ? (
            <FaCheckCircle size={24} />
          ) : (
            <FaCircle size={24} />
          )}
        </div>
      </td>
      {/* 2: Nom du contact */}
      <td className="td">
        <div className="contentName">
          <h3>{taskList.title}</h3>
        </div>
      </td>
      {/* 3: status  */}
      <td className="td">
        <div className="email-cell">{taskList.dateEnd}</div>
      </td>
      {/* 7: Étiquettes */}

      <td className="td">
        <div className="email-cell">
          <FaEnvelope className="email-icon" />
          {taskList.email}
        </div>
      </td>
      {/* 5: Opportunity */}
      <td className="td">
        <div className="email-cell">
          <FaPhone className="email-icon" />
          {taskList.opportunite}
        </div>
      </td>
      <td className="td">
        <div className="email-cell">{taskList.status}</div>
      </td>
      <td className="td">
        <div className="email-cell">{taskList.contact}</div>
      </td>
      {/* 6: Responsable */}
      <td className="td">
        <div className="respon-cell">
          <img
            src={taskList.avatar}
            alt="user avatar"
            className="user-avatar"
          />
          {taskList.responsable}
        </div>
      </td>

      <td className="td">{taskList.dateStart}</td>
      {/* 8: Setting*/}
      <td className="td ">
        <div className="setting-cell">
          <button className="action-btn" onClick={() => onEdit?.(taskList)}>
            <FaPen className="pen-icon" />
          </button>
          <button className="action-btn" onClick={() => onDelete(taskList.id)}>
            <FaTrash className="trash-icon" />
          </button>
        </div>
      </td>
    </tr>
  );
};
const TaskTable: React.FC = () => {
  const [taskLists, setTaskLists] = useState<TaskList[]>(taskListsData);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  // checkbox

  // craw data
  const data: TaskList[] = useMemo(() => taskLists, [taskLists]);

  const columns: ColumnDef<TaskList>[] = useMemo(
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
      { header: "Date de création", accessorKey: "dateClosing" },

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
    setTaskLists(taskLists.filter((taskLists) => taskLists.id !== id));
  };

  const handleEdit = (taskLists: TaskList) => {
    console.log("Editing opportunites:", taskLists); // Thêm logic chỉnh sửa (ví dụ: mở modal)
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
              <TaskListRow
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
export default TaskTable;
