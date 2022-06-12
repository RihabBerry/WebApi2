using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApi2.Models;

namespace WebApi2
{
    public class DCandidateController : Controller
    {
        private readonly DonationDBContext _context;

        public DCandidateController(DonationDBContext context)
        {
            _context = context;
        }

        // GET: DCandidate
        public async Task<IActionResult> Index()
        {
            return View(await _context.DCandidates.ToListAsync());
        }

        // GET: DCandidate/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var dCandidate = await _context.DCandidates
                .FirstOrDefaultAsync(m => m.id == id);
            if (dCandidate == null)
            {
                return NotFound();
            }

            return View(dCandidate);
        }

        // GET: DCandidate/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: DCandidate/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
       // [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("id,fullName,moblie,email,age,bloodGroup,address")] DCandidate dCandidate)
        {
            if (ModelState.IsValid)
            {
                _context.Add(dCandidate);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(dCandidate);
        }

        // GET: DCandidate/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var dCandidate = await _context.DCandidates.FindAsync(id);
            if (dCandidate == null)
            {
                return NotFound();
            }
            return View(dCandidate);
        }

        // POST: DCandidate/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("id,fullName,moblie,email,age,bloodGroup,address")] DCandidate dCandidate)
        {
            if (id != dCandidate.id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(dCandidate);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DCandidateExists(dCandidate.id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(dCandidate);
        }

        // GET: DCandidate/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var dCandidate = await _context.DCandidates
                .FirstOrDefaultAsync(m => m.id == id);
            if (dCandidate == null)
            {
                return NotFound();
            }

            return View(dCandidate);
        }

        // POST: DCandidate/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var dCandidate = await _context.DCandidates.FindAsync(id);
            _context.DCandidates.Remove(dCandidate);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool DCandidateExists(int id)
        {
            return _context.DCandidates.Any(e => e.id == id);
        }
    }
}
