"use client";

import { useState } from "react";
import { Terminal, Code, Check, Copy, ExternalLink, GitBranch, ShieldCheck } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const CODE_SNIPPETS = {
  controller: `<?php

namespace App\\Http\\Controllers\\Api;

use App\\Http\\Controllers\\Controller;
use App\\Http\\Requests\\StoreAttendanceRequest;
use App\\Services\\AttendanceVerificationService;
use Illuminate\\Http\\JsonResponse;

class AttendanceController extends Controller
{
    public function __construct(
        protected AttendanceVerificationService $verifier
    ) {}

    /**
     * Verify photo snapshot & log timestamped check-in record.
     */
    public function store(StoreAttendanceRequest $request): JsonResponse
    {
        $validated = $request->validated();
        
        $record = $this->verifier->processCheckIn(
            user: $request->user(),
            photoBase64: $validated['photo'],
            shiftId: $validated['shift_id']
        );

        return response()->json([
            'status' => 'success',
            'message' => 'Attendance logged successfully.',
            'data' => $record,
        ], 201);
    }
}`,
  migration: `<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('attendances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('shift_id')->constrained();
            $table->timestamp('check_in_at');
            $table->timestamp('check_out_at')->nullable();
            $table->string('photo_path');
            $table->enum('status', ['on_time', 'late', 'overtime'])->default('on_time');
            $table->timestamps();

            // Composite index for ultra-fast roster reporting queries
            $table->index(['user_id', 'check_in_at']);
        });
    }
};`,
};

export default function GitHubSection() {
  const [activeTab, setActiveTab] = useState<"controller" | "migration">("controller");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section bg-[#08090B] border-t border-[#252A33]" id="code">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-14">
          <div className="eyebrow">
            <span>// REPOSITORY & CODE ARCHITECTURE</span>
          </div>
          <h2 className="heading-section text-[#F5F7FA]">
            Behind the Interface
          </h2>
          <p className="text-[#A5ABB5] text-base max-w-2xl">
            A glimpse into the clean, typed object-oriented backend controllers, Eloquent ORM mappings, and indexed MySQL migrations powering my applications.
          </p>
        </div>

        {/* IDE Mock Window */}
        <div className="rounded-2xl bg-[#101216] border border-[#252A33] overflow-hidden shadow-2xl">
          
          {/* IDE Window Top Bar */}
          <div className="bg-[#08090B] border-b border-[#252A33] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <span className="w-3 h-3 rounded-full bg-[#10B981]" />
              </div>
              <div className="h-4 w-[1px] bg-[#252A33] mx-1" />
              
              {/* Tab Selector Buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab("controller")}
                  className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                    activeTab === "controller"
                      ? "bg-[#15181D] text-[#818CF8] border border-[#252A33]"
                      : "text-[#6F7682] hover:text-[#A5ABB5]"
                  }`}
                >
                  AttendanceController.php
                </button>
                <button
                  onClick={() => setActiveTab("migration")}
                  className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                    activeTab === "migration"
                      ? "bg-[#15181D] text-[#818CF8] border border-[#252A33]"
                      : "text-[#6F7682] hover:text-[#A5ABB5]"
                  }`}
                >
                  create_attendances_table.php
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopy}
                className="p-1.5 rounded bg-[#15181D] border border-[#252A33] text-[#A5ABB5] hover:text-[#F5F7FA] text-xs font-mono flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? "Copied" : "Copy Code"}</span>
              </button>
              
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm text-xs flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>

          {/* Code Viewer Body */}
          <div className="p-6 font-mono text-xs sm:text-sm text-[#A5ABB5] bg-[#08090B] overflow-x-auto leading-relaxed">
            <pre className="text-[#F5F7FA]">
              <code>{CODE_SNIPPETS[activeTab]}</code>
            </pre>
          </div>

          {/* IDE Bottom Status Bar */}
          <div className="bg-[#101216] border-t border-[#252A33] px-6 py-3 flex items-center justify-between font-mono text-[11px] text-[#6F7682]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-[#10B981]">
                <ShieldCheck className="w-3.5 h-3.5" />
                Strict Type Hints & PSR-12 Standard
              </span>
              <span className="hidden sm:inline">&bull; UTF-8</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Laravel 11 & PHP 8.2</span>
              <span>MySQL InnoDB</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
