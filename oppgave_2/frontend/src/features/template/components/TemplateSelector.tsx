import { Template } from "../lib/schema";
import React, { useState } from "react";

interface TemplateSelectorProps {
  templates?: Template[];
  add: (data: Omit<Template, "id">) => Promise<void>,
}

const defaultTemplate = {
  name: "",
  description: "",
  weekdays: [],
  notSameDay: false,
  private: false,
  lim_attend: false,
  fixed_price: false,
  free: false,
  waitinglist: false,
}


export default function TemplateSelector({ templates = [], add }: TemplateSelectorProps) {
  const [formData, setFormData] = useState(defaultTemplate)

  const handleWeekdayChange = (day: string, isChecked: boolean) => {
    setFormData((prev) => {
      const updatedWeekdays = isChecked
        ? [...prev.weekdays, day]
        : prev.weekdays.filter((weekday) => weekday !== day);
  
      return {
        ...prev,
        weekdays: updatedWeekdays,
      };
    });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value, type, checked } = e.target;
  
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [id]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };
  
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateData = {
      name: formData.name,
      description: formData.description,
      weekdays: formData.weekdays,
      notSameDay: formData.notSameDay,
      private: formData.private,
      lim_attend: formData.lim_attend,
      fixed_price: formData.fixed_price,
      free: formData.free,
      waitinglist: formData.waitinglist,
    };

    try {
      await add(templateData);
      alert("Lagring av template vellykket!");
      setFormData(defaultTemplate);
    } catch (error) {
      console.error("Feil ved opprettelse av Template:", error);
      alert("Det var en feil ved opprettelse av template.");
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 p-6 max-w-5xl mx-auto">
      {/* Create Template Section */}
      <div className="space-y-6">
        <form onSubmit={handleUpdate}>
          <h2 className="text-2xl font-semibold">Arrangement mal</h2>
          <div>
            <h3 className="font-medium mb-4">Lag ny mal</h3>
            <div className="space-y-4">
              {/* Template Name */}
              <div>
                <label htmlFor="name" className="block font-medium mb-1">
                  Mal navn
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* No Duplicate Events */}
              <div className="flex items-center space-x-2">
                <input
                  id="notSameDay"
                  type="checkbox"
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                  checked={formData.notSameDay}
                  onChange={handleChange}
                />
                <label htmlFor="notSameDay" className="font-medium">
                  Ingen andre kan ha arrangement på samme dag
                </label>
              </div>

              {/* Template Description */}
              <div>
                <label htmlFor="description" className="block font-medium mb-1">
                  Beskrivelse
                </label>
                <textarea
                  id="description"
                  className="w-full border border-gray-300 rounded px-3 py-2 min-h-[100px]"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Weekdays */}
              <div>
                <label htmlFor="weekdays" className="block font-medium mb-4">
                  Begrenset ukedager
                </label>
                <div className="grid grid-cols-2 gap-4 border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <div key={day} className="flex items-center space-x-2">
                      <input
                        id={day}
                        type="checkbox"
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
                        checked={formData.weekdays.includes(day)}
                        onChange={(e) => handleWeekdayChange(day, e.target.checked)}
                      />
                      <label htmlFor={day} className="font-medium text-gray-800">
                        {day}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Options */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    id="private"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                    checked={formData.private}
                    onChange={handleChange}
                  />
                  <label htmlFor="private" className="font-medium">
                    Privat arrangement
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="lim_attend"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                    checked={formData.lim_attend}
                    onChange={handleChange}
                  />
                  <label htmlFor="lim_attend" className="font-medium">
                    Begrenset plass
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="fixed_price"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                    checked={formData.fixed_price}
                    onChange={handleChange}
                  />
                  <label htmlFor="fixed_price" className="font-medium">
                    Fast pris
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="free"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                    checked={formData.free}
                    onChange={handleChange}
                  />
                  <label htmlFor="free" className="font-medium">
                    Gratis arrangement
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="waitinglist"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                    checked={formData.waitinglist}
                    onChange={handleChange}
                  />
                  <label htmlFor="waitinglist" className="font-medium">
                    Aktiver venteliste
                  </label>
                </div>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Lag mal
            </button>
          </div>
        </form>
      </div>

      {/* Existing Templates Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Eksisterende mal</h2>
        <div className="min-h-[200px]">
          {templates.length === 0 ? (
            <p className="text-gray-500">Ingen mal laget enda</p>
          ) : (
            <div className="space-y-2">
              {templates.map((template) => (
                <button
                  key={template.id}
                  className="w-full border border-gray-300 rounded px-4 py-2 text-left hover:bg-gray-100"
                >
                  {template.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="w-full border border-gray-300 rounded px-4 py-2 hover:bg-gray-100">
          Hopp over mal
        </button>
      </div>
    </div>
  );
}